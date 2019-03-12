<template>
  <div class="page-library">
    <div class="content">
      <div class="item item-3">
        <h3>{{ $t("设计思维") }}</h3>
        <p>{{ $t("设计师具体项目的分享") }}</p>
        <a href="./thinking-1/index.html">{{ $t("了解更多") }} >></a>
        <div class="image" />
      </div>
      <div class="item item-4">
        <h3>{{ $t("词汇库") }}</h3>
        <p>{{ $t("B类行业的专业术语") }}</p>
        <a href="./vocabulary-1/index.html">{{ $t("了解更多") }} >></a>
        <div class="image" />
      </div>
      <div class="item item-2">
        <h3>{{ $t("体验数据库") }}</h3>
        <p>{{ $t("通过眼动实验沉淀的一手数据，指导不同类型浏览模式的设计") }}</p>
        <div class="soon">
          {{ $t("敬请期待...") }}
        </div>
        <div class="image" />
      </div>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  资料库: 'LIBRARY',
  '资料库沉淀了Alibaba.com设计师历年的产出，他们融入了对于B类用户的长期服务得来的经验，以及科学化的实验对人类基础视觉体验的了解：':
    'The Library has precipitated the output of Alibaba.com designers over the years. They have integrated their experience in long-term service for B-type users and scientific experiments to understand the human-based visual experience:',
  '体验数据库是通过眼动实验沉淀的一手数据，指导不同类型浏览模式的设计；':
    'Experience database is a first-hand data precipitated by eye movement experiments to guide the design of different types of browsing modes;',
  '词汇库 — B类行业的专业术语；':
    'Glossary - the terminology of the B industry;',
  设计师具体项目的分享: 'The designer of the specific project to share',
  '查找你所需要的内容，为用户创造更好的用户体验。':
    'Find what you need to create a better user experience for your users.',
  '设计思维 — 具体项目的设计师分享；':
    'Design Thinking - the designer of the specific project to share;',
  '通过眼动实验沉淀的一手数据，指导不同类型浏览模式的设计':
    'Eye movement experiments to guide the design of different types of browsing modes',
  B类行业的专业术语: 'The terminology of the B industry',
  '一套完整的设计系统，使用它你可以组成完整的功能页面，执行系统功能':
    'A complete design system, you can use it to form a complete function page and execute system functions',
  '敬请期待...': 'Coming soon...'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('资料库')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-library {
  header {
    background: #2f2f2f;
  }
  header p {
    font-size: 16px;
    color: #ffffff;
    text-align: left;
    line-height: 1.5;
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
    font-size: 56px;
    color: #ffffff;
    padding: 75px 0 25px 0;
  }
  @media (max-width: 991px) {
    header {
      padding: 60px;
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

  .content .item {
    z-index: 1;
    width: 100%;
    box-sizing: border-box;

    padding: 60px 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .content .item .image {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-origin: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: all 0.5s ease-in-out;
  }

  .content .item:hover .image {
    transform: scale(1.03);
  }

  .content .item h3 {
    font-family: Futura, sans serif;
    font-size: 32px;
    color: #ffffff;
    text-align: left;
    line-height: 32px;
    padding: 0;
    font-weight: 500;
  }

  .content .item p {
    padding-top: 20px;
    padding-bottom: 80px;
    font-size: 16px;
    color: #ffffff;
    text-align: left;
    line-height: 30px;
  }

  .content .item a {
    font-size: 14px;
    color: #ffffff;
    text-align: left;
    line-height: 30px;
  }

  @media (max-width: 991px) {
    .content .item {
      padding: 30px 60px;
    }
    .content .item p {
      padding-bottom: 40px;
    }
  }
  @media (max-width: 767px) {
    .content .item {
      padding: 20px;
    }
    .content .item p {
      padding-bottom: 20px;
    }
  }

  .content .item-2 .image {
    background-image: url(https://img.alicdn.com/tfs/TB1hYuFENnaK1RjSZFtXXbC2VXa-3260-720.png);
  }

  .content .item-3 .image {
    background-image: url(https://img.alicdn.com/tfs/TB1.2yhEFzqK1RjSZFCXXbbxVXa-3260-720.png);
  }

  .content .item-4 .image {
    background-image: url(https://img.alicdn.com/tfs/TB1JNV6EPDpK1RjSZFrXXa78VXa-3260-720.png);
  }

  @media (max-width: 991px) {
    .content {
    }
  }
  @media (max-width: 767px) {
    .content {
    }
  }

  a:hover {
    color: #fff;
    text-decoration: underline;
  }
  li.active {
    text-decoration: underline;
  }
  .content {
    padding: 0;
  }

  @media (max-width: 991px) {
    .content {
      padding: 0;
    }
  }
  @media (max-width: 767px) {
    .content {
      padding: 0;
    }
  }
  .soon {
    font-size: 14px;
    color: #ffffff;
    text-align: left;
    line-height: 30px;
  }
}
</style>
