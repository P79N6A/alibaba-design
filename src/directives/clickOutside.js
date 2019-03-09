function getTriggerType({ modifiers }) {
  return modifiers.capture || false
}

export default {
  bind(el, binding) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value && binding.value(e)
      }
    }
    el.__vueClickOutside__ = documentHandler
    document.addEventListener(
      binding.arg || 'click',
      documentHandler,
      getTriggerType(binding)
    )
  },
  unbind(el, binding) {
    document.removeEventListener(
      binding.arg || 'click',
      el.__vueClickOutside__,
      getTriggerType(binding)
    )
    delete el.__vueClickOutside__
  }
}
