<template>
  <div class="layout-footer">
    <div>
      <img src="https://img.alicdn.com/tfs/TB1FmzvEFzqK1RjSZFoXXbfcXXa-205-26.png" alt="">
      <img src="https://img.alicdn.com/tfs/TB1USTvEQPoK1RjSZKbXXX1IXXa-140-23.png" alt="">
    </div>
    <br>
    <p class="pfooter">
      {{ $t("本网站由阿里巴巴国际用户体验部 - B2B品牌组维护") }}
      {{ $t("我们致力于通过提升体验来帮助全球中小买卖家。 如果您有任何建议，请随时与我们联系: yanzuo.zp@alibaba-inc.com") }}
    </p>
    <br>
    <p>© 1999-2018 Alibaba.com. All rights reserved.</p>
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'cn'
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-footer {
  padding: 40px 120px;
  padding-right: 190px;
  background: #4a4a4a;
  p {
    margin-bottom: 0;
    padding-top: 5px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.4px;
  }
  img:first-child {
    margin-right: 20px;
  }
}

@media (max-width: 991px) {
  .layout-footer {
    padding: 40px 60px;
  }
}

@media (max-width: 767px) {
  .layout-footer {
    padding: 20px;
  }
}
</style>
