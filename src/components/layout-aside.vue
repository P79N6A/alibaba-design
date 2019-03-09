<template>
  <div
    :class="{
      'un-visible': !visible,
    }"
    class="layout-aside"
  >
    <div>
      <div class="expand-wrap">
        <ul class="nav">
          <li
            v-for="(item, index) of realNavList"
            :class="{
              title: item.type === 'title',
              'active': localePath(item.url) === $route.path
            }"
            :title="item.label"
            :key="index"
          >
            <span v-if="item.type === 'title'">{{ item.label }}</span>
            <nuxt-link v-else :to="localePath(item.url)">
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <aside>
      <span
        @click="handleVisible"
        class="icon-wrap"
      >
        <i v-if="visible" class="el-icon-d-arrow-left" />
        <i v-else class="el-icon-d-arrow-right" />
      </span>
    </aside>
  </div>
</template>

<script>
const headerNavMap = {
  0: 'brand',
  1: 'guidelines',
  2: 'pattern',
  3: 'library'
}
const sideNavList0 = [
  {
    label: '品牌故事',
    type: 'title'
  },
  {
    label: '愿景',
    url: 'mission'
  },
  {
    label: '目标用户',
    url: 'target'
  },
  {
    label: '关键词',
    url: 'keywords'
  },
  {
    label: '设计原则',
    url: 'principles'
  },
  {
    label: '品牌语调',
    type: 'title'
  },
  {
    label: '产品',
    url: 'product'
  },
  {
    label: '邮件',
    url: 'edm'
  },
  {
    label: '文章',
    url: 'article'
  }
]

const sideNavList1 = [
  {
    label: '设计语言',
    type: 'title'
  },
  {
    label: '设计语言概述',
    url: 'language'
  },

  {
    label: '创意设计',
    type: 'title'
  },

  {
    label: '方法 & 过程',
    url: 'method'
  }
]

const sideNavList2 = [
  {
    label: '样式',
    type: 'title'
  },
  {
    label: 'Token规范',
    url: 'token'
  },
  {
    label: '色彩',
    url: 'color'
  },
  {
    label: '字体',
    url: 'typography'
  },
  {
    label: '图标',
    url: 'icon'
  },
  {
    label: '线条',
    url: 'line'
  },
  {
    label: '尺寸',
    url: 'size'
  },
  {
    label: '栅格',
    url: 'grid'
  },
  {
    label: '间距',
    url: 'spacing'
  },
  {
    label: '插画',
    url: 'illustration'
  },
  {
    label: '图片',
    url: 'photograph'
  },
  {
    label: '动效',
    url: 'media'
  },
  {
    label: '组件',
    type: 'title'
  },
  {
    label: '按钮',
    url: 'button'
  },
  {
    label: '导航',
    url: 'navigation'
  },
  {
    label: '卡片',
    url: 'card'
  },
  {
    label: '复选框',
    url: 'check'
  },
  {
    label: '滑块选择',
    url: 'range'
  },
  {
    label: '开关',
    url: 'switch'
  },
  {
    label: '数字输入框',
    url: 'number'
  },
  {
    label: '单选框',
    url: 'radio'
  },
  {
    label: '对话框',
    url: 'dialog'
  }
]

const sideNavList3 = [
  {
    label: '设计思维',
    type: 'title'
  },
  {
    label: '基于图片优化探索「平台型产品内容规范设计」',
    url: 'thinking-1'
  },
  {
    label: 'B类贸易展会品牌合作创意方案初探',
    url: 'thinking-2'
  },
  {
    label: 'Form and Quote: A sample of friendly form with guides',
    url: 'thinking-3'
  },
  {
    label: '词汇库',
    type: 'title'
  },
  {
    label: '一般',
    url: 'vocabulary-1'
  },
  {
    label: '全球贸易和海关',
    url: 'vocabulary-2'
  },
  {
    label: '资金及外滙词汇',
    url: 'vocabulary-3'
  },
  {
    label: '国际贸易出口流程及相关外贸术语',
    url: 'vocabulary-4'
  }
]

export default {
  props: {
    lang: {
      type: String,
      default: 'cn'
    },
    active: {
      type: [String, Number],
      default: 0
    },
    layer: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      navList0: sideNavList0,
      navList1: sideNavList1,
      navList2: sideNavList2,
      navList3: sideNavList3,
      visible: true
    }
  },
  computed: {
    current() {
      if (this.$isServer) {
        return ''
      }

      return this.$t(window.title)
    },
    realNavList() {
      const path = this.$route.path || ''
      const index =
        Object.keys(headerNavMap).findIndex(
          item => ~path.indexOf(headerNavMap[item])
        ) || 0
      const current = headerNavMap[index]

      return (this[`navList${index}`] || []).map(item => ({
        ...item,
        label: this.$t(item.label),
        url: `${current}-${item.url}`
      }))
    }
  },
  methods: {
    handleShow: function handleShow() {
      this.visible = true
    },
    handleHide: function handleHide() {
      this.visible = false
    },
    handleVisible: function handleVisible() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-aside {
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 220px;
  height: 100%;
  padding-top: 60px;
  padding-right: 4px;
  background: #1c1c1c;
  font-family: Open Sans, sans-serif;
  transition: width 0.2s ease-in-out;
  transition: none;
  &.un-visible {
    transform: translateX(-100%);
    aside {
      width: 20px;
      transform: translateX(100%);
    }
    .icon-wrap {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      right: 0;
      width: 40px;
      height: 40px;
      border-radius: 0 15px 15px 0;
      color: #fff;
      background: #191e23;

      justify-content: center;
      align-items: center;
      i {
        position: relative;
        z-index: 1;
        left: 10px;
      }
    }
  }
  > {
    aside {
      position: relative;
      right: 0;
      width: 0;
      height: 100%;
    }
    div {
      overflow-x: hidden;
      overflow-y: auto;
      height: 100%;

      flex: 1;
    }
  }
  .icon-wrap {
    display: inline-block;
    position: absolute;
    z-index: 100;
    top: 50%;
    right: 5px;
    color: #fff;
    cursor: pointer;
    transform: translateY(-50%);
  }
  > div {
    &:hover::-webkit-scrollbar-thumb {
      display: inline-block;
      background-color: #fff;
    }
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-track-piece {
      width: 5px;
      border-radius: 4px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
      border-radius: 9px;
      background-color: transparent;
      cursor: pointer;
      &:hover {
        background-color: #dcdcdc;
      }
    }
  }
  .expand-wrap {
    display: flex;
    flex-direction: column;
    position: relative;

    justify-content: flex-start;
    .line {
      width: 200px;
      height: 1px;
      margin: 30px auto;
      background: #454545;
    }
    .nav {
      box-sizing: border-box;
      width: 100%;
      padding-right: 40px;
      padding-bottom: 20px;
      padding-left: 36px;
      text-align: left;
      letter-spacing: 0.4px;
      li {
        overflow: hidden;
        padding-left: 10px;
        line-height: 32px;
        white-space: nowrap;
        text-overflow: ellipsis;
        a {
          color: #999;
        }
        &:not(.title) {
          color: #999;
          font-size: 12px;
          &:hover,
          &.active {
            font-weight: 600;
            text-decoration: underline;
            cursor: pointer;
          }
          &:hover a,
          &.active a {
            color: #fff;
            font-weight: 600;
          }
        }
        &.title {
          margin-top: 20px;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
