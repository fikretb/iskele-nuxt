import nodemailer from 'nodemailer'

const planLabels: Record<string, string> = {
  baslangic: 'Başlangıç',
  operasyon: 'Operasyon',
  kurumsal: 'Kurumsal',
}

const sizeLabels: Record<string, string> = {
  micro: 'Mikro işletme (1–5 çalışan)',
  small: 'Küçük işletme (6–50 çalışan)',
  mid: 'Orta ölçek (51–250 çalışan)',
  large: 'Büyük işletme (250+ çalışan)',
}

const cycleLabels: Record<string, string> = {
  yearly: 'Yıllık',
  monthly: 'Aylık',
}

function text(value: unknown, max = 240) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[character] ?? character))
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function numberField(value: unknown, min: number, max: number) {
  const parsed = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(parsed)) return null
  if (parsed < min || parsed > max) return null
  return parsed
}

function readScaffold(value: unknown) {
  if (!value || typeof value !== 'object') return null
  const data = value as Record<string, unknown>
  const width = numberField(data.width, 0.5, 500)
  const height = numberField(data.height, 0.5, 200)
  const bayWidth = numberField(data.bayWidth, 1, 5)
  const liftHeight = numberField(data.liftHeight, 1, 4)
  const jobType = data.jobType === 'satis' ? 'Satış' : 'Kiralama'
  if (!width || !height || !bayWidth || !liftHeight) return null

  const pick = (key: string, max: number) => numberField(data[key], 0, max)

  return {
    width,
    height,
    bayWidth,
    liftHeight,
    jobType,
    area: pick('area', 100000),
    bays: pick('bays', 500),
    lifts: pick('lifts', 200),
    standards: pick('standards', 20000),
    ledgers: pick('ledgers', 20000),
    transoms: pick('transoms', 20000),
    platforms: pick('platforms', 20000),
    diagonals: pick('diagonals', 20000),
    anchors: pick('anchors', 20000),
    baseJacks: pick('baseJacks', 20000),
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody<Record<string, unknown>>(event).catch(() => ({}))

  if (text(body?.website, 80)) {
    return { ok: true }
  }

  const company = text(body?.company)
  const name = text(body?.name)
  const email = text(body?.email, 160)
  const phone = text(body?.phone, 40)
  const plan = text(body?.plan, 40)
  const size = text(body?.size, 40)
  const cycle = text(body?.cycle, 20)
  const message = text(body?.message, 2000)

  if (!company || !name || !isEmail(email) || body?.consent !== true) {
    throw createError({ statusCode: 400, statusMessage: 'Eksik veya geçersiz form bilgisi.' })
  }

  const config = useRuntimeConfig()
  const user = text(config.smtpUser, 160)
  const pass = String(config.smtpPass || '').replace(/\s+/g, '')
  const to = text(config.smtpTo, 160) || user
  const from = text(config.smtpFrom, 160) || user

  if (!user || !pass || !to) {
    throw createError({ statusCode: 503, statusMessage: 'E-posta henüz yapılandırılmadı.' })
  }

  const source = text(body?.source, 40)
  const isCalc = source === 'iskele-hesapla'
  const scaffold = isCalc ? readScaffold(body?.scaffold) : null
  const planLabel = planLabels[plan] || (plan || 'Belirtilmedi')
  const sizeLabel = sizeLabels[size] || (size || 'Belirtilmedi')
  const cycleLabel = cycleLabels[cycle] || (cycle || 'Belirtilmedi')

  const scaffoldLines = scaffold
    ? [
        '',
        'Cephe ölçüleri',
        `Ölçü: ${scaffold.width} m × ${scaffold.height} m${scaffold.area ? ` (${scaffold.area} m²)` : ''}`,
        `Göz: ${scaffold.bayWidth} m · Kat: ${scaffold.liftHeight} m`,
        `İş türü: ${scaffold.jobType}`,
        scaffold.bays && scaffold.lifts ? `Ön hesap: ${scaffold.bays} göz, ${scaffold.lifts} kat` : '',
        scaffold.standards != null ? `Dikme ${scaffold.standards} · Yatay ${scaffold.ledgers ?? '—'} · Enine ${scaffold.transoms ?? '—'}` : '',
        scaffold.platforms != null ? `Platform ${scaffold.platforms} · Çapraz ${scaffold.diagonals ?? '—'} · Ankraj ${scaffold.anchors ?? '—'} · Taban ${scaffold.baseJacks ?? '—'}` : '',
      ].filter(Boolean)
    : []

  const lines = [
    `Firma: ${company}`,
    `Yetkili: ${name}`,
    `E-posta: ${email}`,
    `Telefon: ${phone || '—'}`,
    ...(isCalc
      ? []
      : [
          `Paket: ${planLabel}`,
          `Ölçek: ${sizeLabel}`,
          `Dönem: ${cycleLabel}`,
        ]),
    ...scaffoldLines,
    '',
    message || 'Not yazılmadı.',
  ]

  const transporter = nodemailer.createTransport({
    host: String(config.smtpHost || 'smtp.gmail.com'),
    port: Number(config.smtpPort) || 587,
    secure: Number(config.smtpPort) === 465,
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from: `"İskele Pro" <${from}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject: `${isCalc ? 'İskele hesaplama teklifi' : 'Demo talebi'} · ${company}`,
      text: lines.join('\n'),
      html: `
        <h2>${isCalc ? 'İskele hesaplama teklifi' : 'Yeni demo talebi'}</h2>
        <p><strong>Firma:</strong> ${escapeHtml(company)}</p>
        <p><strong>Yetkili:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone || '—')}</p>
        ${isCalc
          ? ''
          : `<p><strong>Paket:</strong> ${escapeHtml(planLabel)}</p>
        <p><strong>Ölçek:</strong> ${escapeHtml(sizeLabel)}</p>
        <p><strong>Dönem:</strong> ${escapeHtml(cycleLabel)}</p>`}
        ${scaffold
          ? `<h3>Cephe ölçüleri</h3>
        <p>${escapeHtml(`${scaffold.width} m × ${scaffold.height} m${scaffold.area ? ` (${scaffold.area} m²)` : ''}`)}</p>
        <p>Göz ${escapeHtml(String(scaffold.bayWidth))} m · Kat ${escapeHtml(String(scaffold.liftHeight))} m · ${escapeHtml(scaffold.jobType)}</p>
        <p>Dikme ${scaffold.standards ?? '—'} · Platform ${scaffold.platforms ?? '—'} · Ankraj ${scaffold.anchors ?? '—'}</p>`
          : ''}
        <p>${escapeHtml(message || 'Not yazılmadı.').replace(/\n/g, '<br>')}</p>
      `,
    })
  }
  catch (error) {
    const reason = error instanceof Error ? error.message : 'unknown'
    console.error('[demo] SMTP send failed', reason)
    throw createError({ statusCode: 502, statusMessage: 'E-posta gönderilemedi.' })
  }

  return { ok: true }
})
