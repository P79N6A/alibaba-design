<template>
  <div class="page-">
    内容
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page- {
}
</style>
