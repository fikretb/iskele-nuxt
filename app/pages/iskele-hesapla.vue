<script setup lang="ts">
import { Check } from '@lucide/vue'
import {
  defaultScaffoldInputs,
  estimateScaffold,
  formatArea,
  formatMeters,
  jobTypeLabel,
  scaffoldBayOptions,
  scaffoldJobTypes,
  scaffoldLiftOptions,
  type ScaffoldJobType,
} from '~/data/scaffoldCalc'

const localePath = useI18nPath()

usePageSeo({
  title: 'İskele Hesapla · İskele Pro',
  description: 'Cephe genişliği ve yüksekliğinden yaklaşık malzeme listesi çıkarın. Aynı ölçülerle teklif alın.',
})

const inputs = reactive({ ...defaultScaffoldInputs })
const estimate = computed(() => estimateScaffold(inputs))

const resultRows = computed(() => {
  if (!estimate.value) return []
  return [
    { label: 'Cephe alanı', value: formatArea(estimate.value.area) },
    { label: 'Göz sayısı', value: String(estimate.value.bays) },
    { label: 'Kat sayısı', value: String(estimate.value.lifts) },
    { label: 'Dikme', value: String(estimate.value.standards) },
    { label: 'Yatay kuşak', value: String(estimate.value.ledgers) },
    { label: 'Enine', value: String(estimate.value.transoms) },
    { label: 'Platform', value: String(estimate.value.platforms) },
    { label: 'Çapraz', value: String(estimate.value.diagonals) },
    { label: 'Ankraj', value: String(estimate.value.anchors) },
    { label: 'Taban platini', value: String(estimate.value.baseJacks) },
  ]
})

function setJobType(jobType: ScaffoldJobType) {
  inputs.jobType = jobType
}
</script>

<template>
  <div>
    <SitePageHero
      band
      eyebrow="Ön hesap"
      title="İskele Hesapla"
      description="Cephe genişliği ve yüksekliğini girin. Yaklaşık malzeme listesi çıksın; aynı ölçülerle teklif bırakın."
    />

    <section class="border-b border-navy/10 bg-[#F6F7FA] py-14 md:py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid overflow-hidden bg-white shadow-[0_24px_60px_-32px_rgb(11_32_81/0.28)] ring-1 ring-navy/10 lg:grid-cols-2 lg:items-stretch">
          <div class="flex flex-col justify-center p-8 md:p-10">
            <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Cephe ölçüleri</p>
            <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy">
              Ölçüyü girin
            </h2>
            <p class="mt-2 text-sm text-muted-foreground">
              Düz cephe, 2 sıra dikme (iç–dış) varsayılır. Köşe ve çıkma dahil değildir.
            </p>

            <div class="mt-6 grid gap-4 sm:grid-cols-2">
              <div class="space-y-1.5">
                <Label for="calc-width" class="text-xs">Cephe genişliği</Label>
                <div class="relative">
                  <Input
                    id="calc-width"
                    v-model.number="inputs.width"
                    type="number"
                    min="0.5"
                    max="500"
                    step="0.1"
                    inputmode="decimal"
                    class="h-11 pr-10"
                  />
                  <span class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">m</span>
                </div>
              </div>
              <div class="space-y-1.5">
                <Label for="calc-height" class="text-xs">Cephe yüksekliği</Label>
                <div class="relative">
                  <Input
                    id="calc-height"
                    v-model.number="inputs.height"
                    type="number"
                    min="0.5"
                    max="200"
                    step="0.1"
                    inputmode="decimal"
                    class="h-11 pr-10"
                  />
                  <span class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">m</span>
                </div>
              </div>
              <div class="space-y-1.5">
                <Label for="calc-bay" class="text-xs">Göz genişliği</Label>
                <select
                  id="calc-bay"
                  v-model.number="inputs.bayWidth"
                  class="border-input bg-background h-11 w-full rounded-md border px-3 text-sm"
                >
                  <option v-for="option in scaffoldBayOptions" :key="option" :value="option">
                    {{ formatMeters(option) }}
                  </option>
                </select>
              </div>
              <div class="space-y-1.5">
                <Label for="calc-lift" class="text-xs">Kat yüksekliği</Label>
                <select
                  id="calc-lift"
                  v-model.number="inputs.liftHeight"
                  class="border-input bg-background h-11 w-full rounded-md border px-3 text-sm"
                >
                  <option v-for="option in scaffoldLiftOptions" :key="option" :value="option">
                    {{ formatMeters(option) }}
                  </option>
                </select>
              </div>
              <div class="space-y-1.5 sm:col-span-2">
                <p class="text-xs font-medium">İş türü</p>
                <div class="grid grid-cols-2 gap-2">
                  <button
                    v-for="job in scaffoldJobTypes"
                    :key="job.id"
                    type="button"
                    class="h-11 rounded-md border text-sm font-medium transition-colors"
                    :class="inputs.jobType === job.id
                      ? 'border-navy bg-navy text-white'
                      : 'border-navy/15 bg-white text-navy hover:bg-navy/5'"
                    @click="setJobType(job.id)"
                  >
                    {{ job.label }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-between bg-navy p-8 text-white md:p-10">
            <div>
              <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Yaklaşık liste</p>
              <h2 class="mt-2 text-2xl font-semibold tracking-tight">
                {{ estimate ? formatArea(estimate.area) : '—' }}
              </h2>
              <p class="mt-1 text-sm text-white/65">
                {{ estimate
                  ? `${estimate.bays} göz · ${estimate.lifts} kat · ${jobTypeLabel(inputs.jobType)}`
                  : 'Geçerli bir ölçü girin' }}
              </p>

              <dl v-if="estimate" class="mt-6 grid grid-cols-2 gap-3">
                <div
                  v-for="row in resultRows"
                  :key="row.label"
                  class="rounded-xl bg-white/8 px-3 py-3 ring-1 ring-white/12"
                >
                  <dt class="text-[11px] tracking-wide text-white/55 uppercase">{{ row.label }}</dt>
                  <dd class="mt-1 text-lg font-semibold tabular-nums">{{ row.value }}</dd>
                </div>
              </dl>
            </div>

            <div class="mt-8">
              <p class="text-xs leading-relaxed text-white/55">
                Ön hesap bağlayıcı teklif değildir. Nihai malzeme ve tutar uzman görüşmesinde netleşir.
              </p>
              <Button class="mt-4 h-11 w-full rounded-xl bg-gold text-sm font-semibold text-navy-deep hover:bg-gold-hover" as-child>
                <a href="#teklif">Bu ölçülere göre teklif al</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="teklif" class="scroll-mt-24 bg-white py-14 md:py-20">
      <div class="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Teklif</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
            Bu ölçülere göre teklif al
          </h2>
          <p class="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Girdiğiniz cephe ölçüleri ve ön hesap taleple birlikte iletilir. Demo hesabı için kredi kartı gerekmez.
          </p>
          <ul class="mt-6 space-y-3">
            <li class="flex items-center gap-3 text-sm text-navy">
              <span class="flex size-6 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                <Check class="size-3.5" stroke-width="2.5" />
              </span>
              Ölçü ve yaklaşık malzeme listesi formla gider
            </li>
            <li class="flex items-center gap-3 text-sm text-navy">
              <span class="flex size-6 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                <Check class="size-3.5" stroke-width="2.5" />
              </span>
              Teklif motorunda nihai satır ve tutar netleşir
            </li>
            <li class="flex items-center gap-3 text-sm text-navy">
              <span class="flex size-6 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                <Check class="size-3.5" stroke-width="2.5" />
              </span>
              İsterseniz aynı kayıttan PDF ve 3D görünüm
            </li>
          </ul>
          <div class="mt-8">
            <SiteScaffoldQuoteForm :inputs="inputs" :estimate="estimate" />
          </div>
        </div>

        <aside class="rounded-2xl bg-[#F6F7FA] p-6 ring-1 ring-navy/10 md:p-8">
          <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Gönderilecek ölçü</p>
          <h3 class="mt-2 text-lg font-semibold text-navy">Özet</h3>
          <dl v-if="estimate" class="mt-5 space-y-3 text-sm">
            <div class="flex justify-between gap-4">
              <dt class="text-muted-foreground">Cephe</dt>
              <dd class="font-medium text-navy">{{ formatMeters(inputs.width) }} × {{ formatMeters(inputs.height) }}</dd>
            </div>
            <div class="flex justify-between gap-4">
              <dt class="text-muted-foreground">Alan</dt>
              <dd class="font-medium text-navy">{{ formatArea(estimate.area) }}</dd>
            </div>
            <div class="flex justify-between gap-4">
              <dt class="text-muted-foreground">Göz / kat</dt>
              <dd class="font-medium text-navy">{{ estimate.bays }} / {{ estimate.lifts }}</dd>
            </div>
            <div class="flex justify-between gap-4">
              <dt class="text-muted-foreground">İş türü</dt>
              <dd class="font-medium text-navy">{{ jobTypeLabel(inputs.jobType) }}</dd>
            </div>
            <div class="flex justify-between gap-4">
              <dt class="text-muted-foreground">Dikme</dt>
              <dd class="font-medium text-navy">{{ estimate.standards }}</dd>
            </div>
            <div class="flex justify-between gap-4">
              <dt class="text-muted-foreground">Platform</dt>
              <dd class="font-medium text-navy">{{ estimate.platforms }}</dd>
            </div>
          </dl>
          <p class="mt-6 text-xs leading-relaxed text-muted-foreground">
            Aynı hesap İskele Pro teklif uygulamasında malzeme satırına ve 3D görünüme bağlanır.
          </p>
          <NuxtLink
            :to="localePath('/uygulamalar/teklifler')"
            class="mt-4 inline-flex text-sm font-semibold text-navy underline-offset-2 hover:underline"
          >
            Teklifler uygulamasını inceleyin →
          </NuxtLink>
        </aside>
      </div>
    </section>
  </div>
</template>
