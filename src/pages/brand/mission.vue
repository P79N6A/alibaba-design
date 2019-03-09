<template>
  <div class="page-brand-mission">
    <header>
      <h1>{{ $t('愿景') }}</h1>
    </header>
    <div class="content">
      <div class="img-box">
        <img src="https://img.alicdn.com/tfs/TB1ZktqEMDqK1RjSZSyXXaxEVXa-1039-147.png" alt>
      </div>
      <h5>{{ $t('我们的愿景') }}</h5>
      <p>
        {{
          $t(
            '作为阿里巴巴集团的一部分，我们的使命是让您在任何地方轻松开展业务。'
          )
        }}
        <br>
        {{
          $t(
            '我们通过为供应商提供必要的工具来为全球用户提供他们的产品，并帮助买家快速高效地找到产品和代理商来实现这一目标。'
          )
        }}
      </p>
      <h5>{{ $t('一站式采购') }}</h5>
      <p>
        {{
          $t(
            '阿里巴巴为您带来数以百万计的40多个不同主要类别的产品，包括消费电子产品，机械和服装。这些产品的买家来自于200多个国家和地区，每天与平台上的供应商交换数十万条消息。'
          )
        }}
      </p>
      <h5>{{ $t('随时随地') }}</h5>
      <p>
        {{
          $t(
            '作为一个平台，我们将继续开发服务，帮助企业做更多的事情并发现新的机会。'
          )
        }}
      </p>

      <p>
        {{ $t('下一篇') }}:&nbsp;&nbsp;
        <a href="../target/index.html">{{ $t('目标用户') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  我们的愿景: 'Our Vision',
  '作为阿里巴巴集团的一部分，我们的使命是让您在任何地方轻松开展业务。':
    'As a part of Alibaba Group, our mission is to make it easy for you to do business worldwide.',
  '我们通过为供应商提供必要的工具来为全球用户提供他们的产品，并帮助买家快速高效地找到产品和代理商来实现这一目标。':
    'We achieve this goal by providing suppliers with the necessary tools to offer their products to users around the world, and helping buyers find products and dealers quickly and efficiently.',
  一站式采购: 'One-stop Procurement',
  '阿里巴巴为您带来数以百万计的40多个不同主要类别的产品，包括消费电子产品，机械和服装。这些产品的买家来自于200多个国家和地区，每天与平台上的供应商交换数十万条消息。':
    'Alibaba brings you millions of products across more than 40 major categories, including consumer electronics, machinery, and clothing. Buyers of these products are located in more than 200 countries and regions. Hundreds of thousands of messages are exchanged with suppliers over the platform everyday.',
  随时随地: 'Anytime and Anywhere',
  '作为一个平台，我们将继续开发服务，帮助企业做更多的事情并发现新的机会。':
    'Our platform will continue developing services to help enterprises achieve more and discover new opportunities.'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('愿景')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-brand-mission {
  header {
    position: relative;
    text-align: left;
    background: #ebebeb;
    padding: 0 120px;
    background-image: url('https://img.alicdn.com/tfs/TB12ytqEMDqK1RjSZSyXXaxEVXa-1670-240.png');
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
    padding: 80px 120px 60px 120px;
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
    margin-bottom: 40px;
    letter-spacing: 0.4px;
  }
  .content p a {
    color: #999;
  }
  .content h2 {
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
    padding-bottom: 40px;
  }

  .img-box img {
    max-width: 100%;
    transform: scale(0.6);
    transform-origin: left;
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
  a:hover {
    color: #fff;
    text-decoration: underline;
  }
}
</style>
