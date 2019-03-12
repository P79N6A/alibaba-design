<template>
  <div class="page-pattern">
    <div class="banner">
      <header>
        <h1>{{ $t('设计样式') }}</h1>
        <p class="p4">
          {{
            $t(
              '设计模式库是一套完整的设计系统，使用它你可以组成完整的功能页面，执行系统功能；'
            )
          }}
        </p>
        <br>
        <br>
        <br>
        <br>
      </header>
    </div>

    <div class="content">
      <h1>{{ $t('Token规范') }}</h1>
      <p>
        {{
          $t(
            '随着B2B业务的逐渐发展，业务演进到 “平台化、垂直市场、采购市场” 阶段时，UI 也面对了更多的问题和挑战：“周期性业务的品牌更新”，“不同品牌的多种垂直业务同期构建”，“众多相似的后台系统构建”，“跨业务/部门的设计、前端协作问题”。'
          )
        }}
        <a
          href="../token/index.html"
        >{{ $t('了解更多') }}</a>
      </p>

      <h1>{{ $t('插画') }}</h1>
      <p>
        {{
          $t(
            '结合主站品牌升级需要和toB国际化场景，完善与优化针对图形类素材在多媒体设计应用中的细节问题，针对3.0版本中的问题、及建议进行细化升级，在项目组的共同努力下，升级了3.5版本'
          )
        }}
        <a
          href="../illustration/index.html"
        >{{ $t('了解更多') }}</a>
      </p>

      <h1>{{ $t('动效') }}</h1>
      <p>
        {{
          $t(
            '基于“国际化、信任感和创新性”的品牌设计内核，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于更好的用户体验。'
          )
        }}
        <a
          href="../media/index.html"
        >{{ $t('了解更多') }}</a>
      </p>
      <p>
        {{ $t('下一篇') }}:&nbsp;&nbsp;
        <a href="./token/index.html">{{ $t('Token规范') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  '设计模式库是一套完整的设计系统，使用它你可以组成完整的功能页面，执行系统功能；':
    'Design library is a complete design system, you can use it to form a complete function page and execute system functions;',
  '随着B2B业务的逐渐发展，业务演进到 “平台化、垂直市场、采购市场” 阶段时，UI 也面对了更多的问题和挑战：“周期性业务的品牌更新”，“不同品牌的多种垂直业务同期构建”，“众多相似的后台系统构建”，“跨业务/部门的设计、前端协作问题”。':
    'With the gradual development of B2B services and the evolution of the business to the stage of “platformization, vertical market, and procurement market”, UI has also faced more problems and challenges: “Brand renewal of cyclical business”, “more than different brands” "Vertical business concurrent construction", "many similar back-end system construction", "cross-business/department design, front-end collaboration issues."',
  '基于“国际化、信任感和创新性”的品牌设计内核，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于更好的用户体验。':
    'Based on the branding core of “internationalization, trust and innovation”, the modularized solution reduces redundant production costs and allows designers to focus on a better user experience.',
  '结合主站品牌升级需要和toB国际化场景，完善与优化针对图形类素材在多媒体设计应用中的细节问题，针对3.0版本中的问题、及建议进行细化升级，在项目组的共同努力下，升级了3.5版本':
    'Combine the main station brand upgrade needs and toB internationalization scene, improve and optimize the details of the graphic materials in the multimedia design application, and refine the problems and suggestions in the 3.0 version, and work together in the project team. Next, upgraded version 3.5.'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('设计样式')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-pattern {
  header {
    position: relative;
    text-align: left;
    padding: 0 120px;
    background: url(https://img.alicdn.com/tfs/TB1MMd3EQvoK1RjSZPfXXXPKFXa-853-273.gif)
      50%;
    background-size: cover;
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
    padding: 80px 220px 60px 120px;
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
    padding-left: 6px;
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
    font-size: 14px;
    color: #333;
    line-height: 40px;
    font-weight: 700;
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
    color: #fff;
    font-size: 16px;
    line-height: 1.5;
    padding-right: 100px;
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
    color: #4a90e2;
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
  a:hover {
    color: #fff;
    text-decoration: underline;
  }
}
</style>
