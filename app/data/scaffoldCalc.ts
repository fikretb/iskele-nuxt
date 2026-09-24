export type ScaffoldJobType = 'kiralama' | 'satis'

export type ScaffoldInputs = {
  width: number
  height: number
  bayWidth: number
  liftHeight: number
  jobType: ScaffoldJobType
}

export type ScaffoldEstimate = {
  area: number
  bays: number
  lifts: number
  standards: number
  ledgers: number
  transoms: number
  platforms: number
  diagonals: number
  anchors: number
  baseJacks: number
}

export const scaffoldBayOptions = [2.07, 2.5, 3] as const
export const scaffoldLiftOptions = [1.5, 2, 2.5] as const

export const scaffoldJobTypes: { id: ScaffoldJobType, label: string }[] = [
  { id: 'kiralama', label: 'Kiralama' },
  { id: 'satis', label: 'Satış' },
]

export const defaultScaffoldInputs: ScaffoldInputs = {
  width: 20,
  height: 12,
  bayWidth: 2.5,
  liftHeight: 2,
  jobType: 'kiralama',
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function parseMeasure(value: string | number, min: number, max: number) {
  const parsed = typeof value === 'number' ? value : Number(String(value).replace(',', '.'))
  if (!Number.isFinite(parsed)) return null
  return clamp(parsed, min, max)
}

export function estimateScaffold(input: ScaffoldInputs): ScaffoldEstimate | null {
  const width = parseMeasure(input.width, 0.5, 500)
  const height = parseMeasure(input.height, 0.5, 200)
  const bayWidth = parseMeasure(input.bayWidth, 1, 5)
  const liftHeight = parseMeasure(input.liftHeight, 1, 4)

  if (!width || !height || !bayWidth || !liftHeight) return null

  const bays = Math.max(1, Math.ceil(width / bayWidth))
  const lifts = Math.max(1, Math.ceil(height / liftHeight))

  return {
    area: Math.round(width * height * 10) / 10,
    bays,
    lifts,
    standards: 2 * (bays + 1) * lifts,
    ledgers: 2 * bays * (lifts + 1),
    transoms: (bays + 1) * (lifts + 1),
    platforms: bays * lifts,
    diagonals: 2 * Math.ceil(bays / 5) * lifts,
    anchors: Math.ceil(bays / 2) * Math.ceil(lifts / 2),
    baseJacks: 2 * (bays + 1),
  }
}

export function formatMeters(value: number) {
  return `${value.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} m`
}

export function formatArea(value: number) {
  return `${value.toLocaleString('tr-TR', { maximumFractionDigits: 1 })} m²`
}

export function jobTypeLabel(jobType: ScaffoldJobType) {
  return scaffoldJobTypes.find(item => item.id === jobType)?.label ?? jobType
}

export function formatScaffoldSummary(input: ScaffoldInputs, estimate: ScaffoldEstimate) {
  return [
    `Cephe: ${formatMeters(input.width)} × ${formatMeters(input.height)} (${formatArea(estimate.area)})`,
    `Göz genişliği: ${formatMeters(input.bayWidth)} · Kat yüksekliği: ${formatMeters(input.liftHeight)}`,
    `İş türü: ${jobTypeLabel(input.jobType)}`,
    `Ön hesap: ${estimate.bays} göz, ${estimate.lifts} kat`,
    `Dikme ${estimate.standards} · Yatay kuşak ${estimate.ledgers} · Enine ${estimate.transoms}`,
    `Platform ${estimate.platforms} · Çapraz ${estimate.diagonals} · Ankraj ${estimate.anchors} · Taban ${estimate.baseJacks}`,
  ].join('\n')
}
