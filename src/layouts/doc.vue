<template>
  <div class="content-wrap">
    <layout-header />
    <div class="wrap">
      <layout-aside />
      <div class="layout-container">
        <div class="layout-container-info">
          <nuxt />
        </div>
        <layout-footer />
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/components/layout-header.vue'
import LayoutAside from '@/components/layout-aside.vue'
import LayoutFooter from '@/components/layout-footer.vue'

export default {
  components: {
    LayoutHeader,
    LayoutAside,
    LayoutFooter
  }
}
</script>

<style lang="scss">
.content-wrap {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .content-wrap,
  .wrap {
    padding-top: 60px;
  }
  .wrap {
    box-sizing: border-box;
    height: 100%;
  }
  .layout-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 220px;

    justify-content: space-between;
    flex: 1;
  }
  header {
    position: relative;
    padding: 0 120px;
    background-size: cover;
    text-align: left;
    .download {
      position: absolute;
      top: 50%;
      right: 5%;
      background: #1c1c1c;
      transform: translateY(-50%);
      a {
        box-sizing: content-box;
        padding: 0 10px;
        border: none;
      }
    }
    h1 {
      padding: 75px 0 25px 0;
      color: #fff;
      font-size: 56px;
    }
  }
  @media (max-width: 991px) {
    header {
      padding: 0 60px;
    }
  }

  @media (max-width: 767px) {
    header {
      padding: 0 20px;
    }
  }
}
.layout-aside.un-visible + .layout-container {
  margin-left: 0;
}
</style>
