<template>
  <div class="page-library-vocabulary-1">
    <header>
      <h1 class="think">
        {{ $t('一般') }}
      </h1>
    </header>

    <div class="content">
      <p>货币 － 使用该货币缩写，避免符号引起混淆货币</p>
      <el-table
        :show-header="false"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column prop="name" width="180" />
        <el-table-column prop="label" />
      </el-table>
      <br>
      <br>
      <br>
      <p>
        {{ $t('上一篇') }}:&nbsp;&nbsp;<a href="../thinking-3/index.html">{{ $t('Form and Quote: A sample of friendly form with guides') }}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {{ $t('下一篇') }}:&nbsp;&nbsp;<a href="../vocabulary-2/index.html">{{ $t('全球贸易和海关') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  一般: 'General'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('一般')
    }
  },
  data() {
    return {
      tableData: [
        {
          name: '人民币',
          label: 'CNY'
        },
        {
          name: '美金',
          label: 'USD'
        },
        {
          name: '马币',
          label: 'MYR'
        }
      ]
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-library-vocabulary-1 {
  header {
    position: relative;
    text-align: left;
    background: #ebebeb;
    padding: 0 120px;
    background-image: url('https://img.alicdn.com/tfs/TB1JNV6EPDpK1RjSZFrXXa78VXa-3260-720.png');
    background-size: cover;
    height: 219px;
  }
  header .download {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    background: #1c1c1c;
  }
  header .download a {
    box-sizing: content-box;
    padding: 0 10px;
    border: none;
  }
  header h1 {
    padding: 75px 0 35px 0;
    color: #fff;
    font-size: 56px;
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

  .el-tabs .el-tabs__header {
    margin-bottom: 0;
  }

  .el-tabs .el-tabs__item {
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
  }
  .el-tabs .el-tabs__item.is-active {
    font-weight: bold;
  }

  .el-tabs .el-tabs__active-bar {
    background: #fff;
    height: 4px;
  }

  .el-tabs .el-tabs__nav-wrap::after {
    display: none;
  }

  .el-scrollbar-list {
    height: 100%;
  }

  .el-scrollbar__bar {
    right: 4px;
  }

  .el-scrollbar__thumb {
    background: #fff;
  }
  .el-scrollbar__thumb:hover {
    background: #dcdcdc;
  }

  .content {
    padding: 80px 500px 100px 120px;
  }
  @media (max-width: 991px) {
    .content {
      padding: 50px 60px;
    }
  }
  @media (max-width: 767px) {
    .content {
      padding: 50px 20px;
    }
  }
  .content p {
    margin-bottom: 30px;
    letter-spacing: 0.4px;
  }
  .content p a {
    color: #999;
  }
  .content h2 {
  }
  .content h3 {
    padding-bottom: 0;
    margin-bottom: 20px;
  }
  .content h4 {
    font-size: 20px;
    color: #666666;
    line-height: 18px;
    font-weight: normal;
  }

  .content h5 {
    font-size: 16px;
    color: #000;
    line-height: 40px;
    font-weight: 600;
    letter-spacing: 0.2px;
  }

  .content .gray-wrap {
    background: #f4f4f4;
    padding: 40px 44px;
    margin-bottom: 60px;
  }
  .content .gray-wrap .item {
    display: flex;
    padding-bottom: 20px;
  }
  .content .gray-wrap .item .left {
    width: 50%;
  }
  .content .gray-wrap .item .right {
    width: 50%;
  }
  .content .gray-wrap .item:not(:first-child) {
    padding-top: 40px;
    border-top: 1px solid #cccccc;
  }
  @media (max-width: 991px) {
    .content .gray-wrap .item {
      flex-wrap: wrap;
    }
    .content .gray-wrap .item .left,
    .content .gray-wrap .item .right {
      width: 100%;
    }
    .content .gray-wrap .item .right {
      margin-top: 40px;
    }
  }
  .content .gray-wrap .intro {
    margin-bottom: 0;
    font-size: 16px;
    color: #666666;
    line-height: 20px;
    margin: 18px 0;
  }
  .content .gray-wrap .exp {
    color: #999999;
    font-size: 16px;
    line-height: 18px;
  }
  .content .gray-img-wrap {
    background: #f4f4f4;
    margin-bottom: 60px;
  }

  .img-box {
    margin-bottom: 50px;
  }
  .img-box img {
    max-width: 100%;
  }

  .p1 {
    color: #333;
  }

  .p2 {
    color: #999;
  }

  .p3 {
    margin-bottom: 60px !important;
  }

  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .component-fade-enter,
  .component-fade-leave-to {
    opacity: 0;
  }

  li.active {
    text-decoration: underline;
  }

  .three {
    line-height: 22px !important;
    padding-bottom: 20px;
    color: #666 !important;
    letter-spacing: 0.4px;
  }
  .head {
    font-size: 32px;
    padding-top: 70px;
    line-height: 1.5;
    margin-bottom: 0px !important;
  }

  .content .item > div {
    display: flex;
  }
  .content .item > div .left {
    max-width: 560px;
    margin-right: 60px;
  }
  a:hover {
    color: #fff;
    text-decoration: underline;
  }
}
</style>
