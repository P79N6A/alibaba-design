import Vue from 'vue'
import { mapState } from 'vuex'

import UiLink from '@/components/ui-link'

Vue.component('ui-link', UiLink)
Vue.mixin({
  data() {
    return {}
  },
  computed: {
    ...mapState('i18n', ['locale']),
    ...mapState('assets', {
      imageList(state) {
        return state.imageList[this.locale]
      }
    })
  },
  methods: {
    handleTabClick() {}
  }
})
