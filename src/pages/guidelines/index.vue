<template>
  <div class="page-guidelines">
    <header>
      <h1>{{ $t('设计指导') }}</h1>
      <p class="p4">
        {{
          $t(
            '设基于B类交易场景，我们构架了一套完整的设计系统，从网站架构到整体物理世界再到设计元件，它既能够满足人的基本认知，又能更加符合B类的场景，为更好的设计服务。'
          )
        }}
      </p>
      <div class="img-box">
        <img :src="imageList['image10']" alt>
      </div>
    </header>
    <div class="content">
      <h1 class="h1">
        {{ $t('设计框架') }}
      </h1>
      <p>
        {{
          $t(
            '在B类交易当中，有许多不同于C类的行为习惯，基于这个认识，我们重新梳理了整个交易链路，产出了更加符合用户心智的网站框架以及页面模板。'
          )
        }}
        <a
          href="../what/index.html"
        >{{ $t('了解更多') }}</a>
      </p>

      <h1 class="h1">
        {{ $t('设计语言') }}
      </h1>
      <p>
        {{
          $t(
            '在人机交互的场景中，很多顺畅的操作都是来源于生活中的经验，因此我们从B类的众多现实的场景出发，抽提成抽象的页面语言，我们的设计语言由：秩序，光影，质感三部分构成。'
          )
        }}
        <a
          href="../language/index.html"
        >{{ $t('了解更多') }}</a>
      </p>

      <h1 class="h1">
        {{ $t('设计元素') }}
      </h1>
      <p>
        {{
          $t(
            '设计元素相当于设计中的基础符号，这些元素符合整个品牌的定义，并且经过设计实验的验证，可以被安心使用。'
          )
        }}
        <a
          href="../element/index.html"
        >{{ $t('了解更多') }}</a>
      </p>
      <p>
        {{ $t('下一篇') }}:&nbsp;&nbsp;
        <a href="./language/index.html">{{ $t('设计语言概述') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  设计指导: 'GUIDELINES',
  '设基于B类交易场景，我们构架了一套完整的设计系统，从网站架构到整体物理世界再到设计元件，它既能够满足人的基本认知，又能更加符合B类的场景，为更好的设计服务。':
    'Based on Class B transaction scenarios, we have constructed a complete design system that includes website architecture, the whole physical world, and design elements. This system not only satisfies people’s basic cognition, but aligns with Class B transaction scenarios for better design.',
  '在B类交易当中，有许多不同于C类的行为习惯，基于这个认识，我们重新梳理了整个交易链路，产出了更加符合用户心智的网站框架以及页面模板。':
    'In Class B transactions, there are many behaviors different from Class C. And based on this understanding, we have rearranged the entire transaction link and produced a website framework and page template more in line with users’ mindset.',
  '在人机交互的场景中，很多顺畅的操作都是来源于生活中的经验，因此我们从B类的众多现实的场景出发，抽提成抽象的页面语言，我们的设计语言由：秩序，光影，质感三部分构成。':
    'In scenarios of human-computer interaction, many smooth operations are actually derived from life experience. Therefore, we start from many real-life scenarios of Class B transactions and extract them into an abstract page language. Our design language is composed of three parts, including order, light and shadow, and sense of quality.',
  '设计元素相当于设计中的基础符号，这些元素符合整个品牌的定义，并且经过设计实验的验证，可以被安心使用。':
    'Equivalent to basic symbols in design, these design elements align with the definition of the whole brand, and have been verified in design experiments. Therefore, please feel free to use them.'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('设计指导')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-guidelines {
  header {
    position: relative;
    padding: 0 120px;
    background: #38a7ad;
    background-size: cover;
    text-align: left;
  }
  header .download {
    position: absolute;
    top: 50%;
    right: 5%;
    background: #1c1c1c;
    transform: translateY(-50%);
  }
  header .download a {
    box-sizing: content-box;
    padding: 0 10px;
    border: none;
  }
  header h1 {
    padding: 75px 0 25px 0;
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

  .content {
    padding: 80px 190px 60px 120px;
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
    margin-bottom: 60px;
    letter-spacing: 0.4px;
  }
  .content p a {
    color: #999;
  }
  .content h2 {
    margin-bottom: 20px;
  }
  .content h4 {
    color: #666;
    font-size: 20px;
    font-weight: normal;
    line-height: 18px;
  }

  .content h5 {
    color: #333;
    font-size: 14px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.2px;
  }

  .content .gray-wrap {
    margin-bottom: 60px;
    padding: 40px 44px;
    background: #f4f4f4;
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
    border-top: 1px solid #ccc;
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
    margin: 18px 0;
    margin-bottom: 0;
    color: #666;
    font-size: 16px;
    line-height: 20px;
  }
  .content .gray-wrap .exp {
    color: #999;
    font-size: 16px;
    line-height: 18px;
  }
  .content .gray-img-wrap {
    margin-bottom: 60px;
    background: #f4f4f4;
  }

  .img-box {
    padding-top: 60px;
    padding-bottom: 30px;
  }

  .img-box img {
    max-width: 100%;
    transform: scale(0.75);
    transform-origin: 0 0;
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

  .p4 {
    padding-right: 100px;
    color: #fff;
    font-size: 16px;
    line-height: 1.5;
  }

  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .component-fade-enter,
  .component-fade-leave-to {
    opacity: 0;
  }

  a:hover {
    color: #fff;
    text-decoration: underline;
  }

  .line {
    list-style-type: none;
  }
  .line li {
    display: inline-block;
  }

  .icon {
    padding-right: 20px;
  }

  li.active {
    text-decoration: underline;
  }
  h1 {
    padding-bottom: 20px !important;
  }
}
</style>
