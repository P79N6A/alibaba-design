import Vue from 'vue'
import { mapState } from 'vuex'

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
