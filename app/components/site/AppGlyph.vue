<script setup lang="ts">
import {
  Banknote,
  Box,
  Boxes,
  Building2,
  Calendar,
  CalendarDays,
  CalendarOff,
  Car,
  ClipboardList,
  Clock,
  Factory,
  FileCheck,
  FileText,
  GanttChart,
  HardHat,
  Inbox,
  KeyRound,
  LayoutDashboard,
  PieChart,
  Printer,
  Receipt,
  Scale,
  Shield,
  ShoppingCart,
  Smartphone,
  Store,
  TrendingUp,
  UserRound,
  Wallet,
  WalletCards,
  Warehouse,
} from '@lucide/vue'

const icons = {
  Inbox,
  Building2,
  FileText,
  Box,
  Printer,
  HardHat,
  KeyRound,
  GanttChart,
  Calendar,
  Warehouse,
  ClipboardList,
  Smartphone,
  Car,
  Factory,
  ShoppingCart,
  Boxes,
  Receipt,
  Banknote,
  FileCheck,
  Store,
  TrendingUp,
  Wallet,
  Scale,
  UserRound,
  CalendarDays,
  Clock,
  CalendarOff,
  WalletCards,
  LayoutDashboard,
  PieChart,
  Shield,
} as const

const props = defineProps<{
  name: string
  class?: string
}>()

const icon = computed(() => icons[props.name as keyof typeof icons] ?? FileText)
</script>

<template>
  <component :is="icon" :class="props.class" />
</template>
