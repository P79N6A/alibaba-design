<template>
  <div
    :class="{
      reverse,
    }"
    class="container layout-header"
  >
    <div @click="handleLogoClick" class="logo">
      <img
        :src="!reverse
          ? 'https://img.alicdn.com/tfs/TB1SKnuENTpK1RjSZFMXXbG_VXa-190-32.png'
          : 'https://g.alicdn.com/fusion-site/alibaba/0.0.16/assets/img/alibaba-logo.png'"
        alt
      >
    </div>

    <i @click="handleLogoClick" class="iconfont icon-alibaba" />

    <div v-click-outside.capture="handleHide" class="menu">
      <i @click="handleMenuClick" class="iconfont icon-menu" />

      <ul
        :class="{
          active: navActive,
          flex: navFlex,
        }"
        class="nav"
      >
        <li
          v-for="(item, index) of realNavList"
          :class="{
            'active': !isHome
              && (localePath(item.url) === $route.path
              || currentNavIndex === index)
          }"
          :key="index"
        >
          <ui-link :src="item.url">
            {{ item.label }}
          </ui-link>
        </li>
      </ul>

      <input
        :class="{
          flex: !navFlex
        }"
        class="menu-search"
        type="search"
      >

      <i @click="handleSearchIcon" class="iconfont icon-search" />
    </div>

    <div class="locale-switch">
      <span :class="locale === 'en' && 'active'" @click="switchLanguage('en')">En</span>
      <i>/</i>
      <span :class="locale === 'cn' && 'active'" @click="switchLanguage('cn')">中文</span>
    </div>
  </div>
</template>

<script>
import 'docsearch.js/dist/cdn/docsearch.min.css'
import clickOutside from '@/directives/clickOutside'

const headerNavList = [
  {
    label: '品牌',
    url: 'brand'
  },
  {
    label: '设计指导',
    url: 'guidelines'
  },
  {
    label: '设计样式',
    url: 'pattern'
  },
  {
    label: '资料库',
    url: 'library'
  }
]

export default {
  directives: {
    clickOutside
  },
  props: {
    isHome: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      navActive: false,
      navFlex: true,
      reverse: false,
      docsearch: null
    }
  },
  computed: {
    current() {
      if (this.$isServer) {
        return ''
      }

      return this.$t(window.title)
    },
    currentNavIndex() {
      const path = this.$route.path || ''

      if (path !== '/' && path !== '') {
        return headerNavList.findIndex(item => ~path.indexOf(item.url))
      }

      return ''
    },
    realNavList: function() {
      return headerNavList.map(item => ({
        ...item,
        label: this.$t(item.label),
        url: `${item.url}`
      }))
    }
  },
  mounted() {
    if (!this.$isServer) {
      const docsearch = require('docsearch.js')

      this.docsearch = docsearch({
        apiKey: '10ccb292caf1f598900a539ee6f74f44',
        indexName: 'fusion_design',
        inputSelector: '.menu-search',
        debug: true
      })
    }

    document.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.$isServer) {
        return
      }
      this.reverse = this.getScroll().top >= 200
    },
    switchLanguage(locale) {
      this.$router.push(this.switchLocalePath(locale))
    },
    handleLogoClick() {
      this.$router.push(this.localePath('index'))
    },
    handleMenuClick() {
      this.navActive = !this.navActive
    },
    handleHide() {
      this.navActive = false
      this.navFlex = true
    },
    handleSearchIcon() {
      this.navFlex = !this.navFlex
      this.navActive = false
    },
    getScroll() {
      return {
        left:
          window.pageXOffset ||
          document.documentElement.scrollLeft ||
          document.body.scrollLeft ||
          0,
        top:
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0
      }
    }
  }
}
</script>

<style lang="scss" scope>
.container {
  &.layout-header {
    display: flex;
    position: fixed;
    z-index: 100;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    background: #111;
    font-family: 'Futura';
    transition: all 0.2s ease-in-out;

    justify-content: center;
    align-items: center;

    .logo {
      width: 170px;
      text-align: center;
      cursor: pointer;

      -ms-flex-negative: 0;
      flex-shrink: 0;
      img {
        max-width: 100%;
        height: 20px;
      }
    }

    .icon-alibaba {
      display: none;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }

    .menu {
      display: flex;
      position: relative;
      z-index: 100;
      min-width: 100px;
      max-width: 600px;
      padding: 0 30px 0 0;
      font-family: Open Sans, sans-serif;
      font-weight: 600;

      flex: 1;
      align-items: center;
      justify-content: flex-end;
      .icon-menu {
        display: none;
        padding: 0 20px;
        color: #fff;
        cursor: pointer;
      }
      .icon-search {
        position: absolute;
        right: 10px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        line-height: 60px;
        cursor: pointer;
      }
      .menu-search {
        display: inline;
        box-sizing: border-box;
        width: 0;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        font-size: 20px;
        line-height: 30px;
        transition: all 1s ease;
        &.flex {
          width: 100% !important;
          border-bottom: 1px solid #fff !important;
          transition: all 1s ease;
        }
        &:not(.flex) ~ .ds-dropdown-menu {
          display: none !important;
        }
      }
      .nav {
        display: flex;
        overflow: hidden;
        width: 0;
        height: 30px;

        justify-content: space-around;
        &.flex {
          width: 100% !important;
          transition: all 1s ease;
        }
        li {
          position: relative;
          color: #fff;
          font-size: 12px;
          line-height: 30px;
          letter-spacing: 0.4px;
          cursor: pointer;
          transition: all 1s;
          &.active {
            text-decoration: underline;
          }
          &:nth-child(even)::before {
            width: 7px;
            height: 7px;
            border: none;
            border-radius: 50%;
            background: #fff;
          }
          a {
            color: #fff;
            &:hover {
              text-decoration: underline;
            }
          }
          .active a {
            font-weight: 600;
          }
        }
      }
    }

    &.reverse {
      top: 0;
      background: #fff;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
      .icon-alibaba {
        color: orange;
      }
      .menu {
        .icon-menu,
        .icon-search {
          color: #000;
        }
        .menu-search {
          color: #000;
          &.flex {
            border-bottom: 2px solid #000 !important;
          }
        }
        .nav {
          &.active {
            background: #fff;
          }
          &::before {
            border-bottom-color: #fff;
          }
        }
      }
      .locale-switch {
        border-left-color: #000;
        span.active {
          color: #000;
        }
      }
      .menu .nav li {
        a {
          color: #000;
        }
        &::before {
          border-color: #000 !important;
        }
        &:nth-child(even)::before {
          background: #000;
        }
      }
      .locale {
        color: #999;
        a {
          color: #999;
          &.active {
            color: #000;
          }
        }
      }
    }
  }

  @media (max-width: 991px) {
    .layout-header {
      padding: 0 20px;
      .logo {
        display: none;
      }
      .icon-alibaba {
        display: inline-block;
      }
      &.reverse {
        .menu .nav {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }
        .locale {
          margin-right: 50px;
        }
      }
      .menu {
        min-width: auto;

        justify-content: center;
        .icon-menu {
          display: inline-block;
        }
        .nav {
          display: none;
          overflow: visible;
          flex-direction: column;
          position: absolute;
          z-index: 1000;
          top: 40px;
          left: 50%;
          box-sizing: border-box;
          min-width: 220px;
          height: auto;
          padding: 20px;
          background-color: #303030;
          transition: height 0.5s ease-in-out;
          transform: translateX(-50%);
          &.active {
            display: flex;
          }
          &::before {
            position: absolute;
            top: -20px;
            left: calc(50% - 30px);
            border: 10px solid #303030;
            border-color: transparent transparent #303030 transparent;
            content: '';
            transform: translateX(20%);

            filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0.3));
          }
          li {
            max-width: 400px;
            height: 22px;
            color: #fff;
            font-size: 16px;
            line-height: 22px;
            text-align: left;
            &:before,
            &:after {
              display: none;
            }
            a {
              color: #fff;
              text-decoration: none;
              &:hover {
                color: #0ba6cf;
              }
            }
            &:not(:last-child) {
              margin-bottom: 20px;
            }
          }
        }
      }
      .logo {
        margin: 0;
      }
    }
  }

  .locale-switch {
    padding-left: 20px;
    border-left: 1px solid #fff;
    color: #999;
    font-size: 12px;
    cursor: pointer;

    flex-shrink: 0;
    span.active {
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
