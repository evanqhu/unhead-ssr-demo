<script setup lang="ts">
import { useHead } from "@unhead/vue"

useHead({
  title: 'My awesome site',
  meta: [
    {
      name: 'description',
      content: 'My awesome site description',
    },
  ],
})
</script>

<template>
  <div>
    App
  </div>
</template>

