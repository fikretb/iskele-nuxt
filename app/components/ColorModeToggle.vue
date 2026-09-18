<script setup lang="ts">
import { MoonIcon, SunIcon } from '@lucide/vue'

const colorMode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="icon" class="relative">
        <SunIcon class="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon class="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Tema değiştir</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="colorMode.preference = 'light'">
        Açık
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'dark'">
        Koyu
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'">
        Sistem
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
