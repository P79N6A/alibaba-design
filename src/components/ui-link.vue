<template>
  <nuxt-link :to="localePath(src)">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>
