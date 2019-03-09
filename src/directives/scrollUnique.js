export default {
  bind(el) {
    el.addEventListener('mousewheel', event => {
      const scrollTop = el.scrollTop
      const scrollHeight = el.scrollHeight
      const height = el.clientHeight

      if (scrollHeight === height) return false

      const delta = event.wheelDelta
        ? event.wheelDelta
        : -(event.wheelDelta || 0)

      if (
        (delta > 0 && scrollTop <= delta) ||
        (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)
      ) {
        el.scrollTop = delta > 0 ? 0 : scrollHeight
        event.preventDefault()
      }
    })
  },
}
