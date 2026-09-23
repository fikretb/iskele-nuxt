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

  if (!company || !name || !isEmail(email)) {
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

  const planLabel = planLabels[plan] || (plan || 'Belirtilmedi')
  const sizeLabel = sizeLabels[size] || (size || 'Belirtilmedi')
  const cycleLabel = cycleLabels[cycle] || (cycle || 'Belirtilmedi')

  const lines = [
    `Firma: ${company}`,
    `Yetkili: ${name}`,
    `E-posta: ${email}`,
    `Telefon: ${phone || '—'}`,
    `Paket: ${planLabel}`,
    `Ölçek: ${sizeLabel}`,
    `Dönem: ${cycleLabel}`,
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
      subject: `Demo talebi · ${company}`,
      text: lines.join('\n'),
      html: `
        <h2>Yeni demo talebi</h2>
        <p><strong>Firma:</strong> ${escapeHtml(company)}</p>
        <p><strong>Yetkili:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone || '—')}</p>
        <p><strong>Paket:</strong> ${escapeHtml(planLabel)}</p>
        <p><strong>Ölçek:</strong> ${escapeHtml(sizeLabel)}</p>
        <p><strong>Dönem:</strong> ${escapeHtml(cycleLabel)}</p>
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
