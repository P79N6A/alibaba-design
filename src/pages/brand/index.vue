<template>
  <div class="page-brand">
    <header>
      <h1>{{ $t('品牌') }}</h1>
      <p class="p4">
        {{
          $t(
            '通过品牌了解我们的愿景及服务对象，帮助你在设计的时候更好地进行判断和选择，并以同样的性格特质向用户呈现。'
          )
        }}
      </p>
      <div class="img-box">
        <img :src="imageList['image20']" alt="">
      </div>
    </header>
    <div class="content">
      <h1>{{ $t('愿景和目标用户') }}</h1>
      <p>
        {{
          $t(
            '通过这个章节，了解我们改变世界的愿景，并且了解我们的用户，他们来自世界各地，拥有不同的背景和认知习惯。'
          )
        }}
        <a href="../mission/index.html">{{ $t('了解更多') }}</a>
      </p>

      <h1>{{ $t('关键词和设计原则') }}</h1>
      <p>
        {{
          $t(
            '通过这个章节，了解我们最核心的理念，在进行任何一种类型的工作时，懂得该坚持什么放弃什么。'
          )
        }}
        <a href="../keywords/index.html">{{ $t('了解更多') }}</a>
      </p>

      <h1>{{ $t('品牌语调') }}</h1>
      <p>
        {{
          $t(
            '同样的内容，不同的腔调会表达出不同的含义，通过这个章节，您可以了解到我们如何传递自己的声音。'
          )
        }}
        <a href="../product/index.html">{{ $t('了解更多') }}</a>
      </p>
      <p>
        {{ $t('下一篇') }}:&nbsp;&nbsp;<a href="./mission/index.html">{{ $t('愿景') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  品牌: 'BRAND',
  '通过品牌了解我们的愿景及服务对象，帮助你在设计的时候更好地进行判断和选择，并以同样的性格特质向用户呈现。':
    'Understand our vision and service targets through the story of our brand. This will help you make better judgements and choices during the design process, and present yourself to users through the same attitudes.',
  愿景和目标用户: 'Vision and Target Audience',
  '通过这个章节，了解我们改变世界的愿景，并且了解我们的用户，他们来自世界各地，拥有不同的背景和认知习惯。':
    'Understand our vision of changing the world in this chapter. Understand our users as well, they come from all over the world, with different backgrounds and cognitive habits.',
  关键词和设计原则: 'Keywords and Design Principles',
  '通过这个章节，了解我们最核心的理念，在进行任何一种类型的工作时，懂得该坚持什么放弃什么。':
    'In this chapter, understand our core concept, and understand what should be persevered for and what should be given up in the course of any kind of work.',
  '同样的内容，不同的腔调会表达出不同的含义，通过这个章节，您可以了解到我们如何传递自己的声音。':
    'Different tones applied to the same content will express different meanings. In this chapter, you will get to know how we make our voices heard.'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('品牌')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-brand {
  header {
    background: #4d52b6;
  }

  .el-tabs {
    .el-tabs__header {
      margin-bottom: 0;
    }
    .el-tabs__item {
      color: #fff;
      font-size: 16px;
      line-height: 24px;
      font-weight: normal;
      &.is-active {
        font-weight: bold;
      }
    }
    .el-tabs__active-bar {
      background: #fff;
      height: 4px;
    }
    .el-tabs__nav-wrap::after {
      display: none;
    }
  }

  .el-scrollbar-list {
    height: 100%;
  }

  .el-scrollbar__bar {
    right: 4px;
  }

  .el-scrollbar__thumb {
    background: #fff;
    &:hover {
      background: #dcdcdc;
    }
  }

  .content {
    padding: 80px 120px 60px 120px;
    p {
      margin-bottom: 60px;
      letter-spacing: 0.4px;
      a {
        color: #999;
      }
    }
    h2 {
      margin-bottom: 20px;
    }
    h4 {
      font-size: 20px;
      color: #666666;
      line-height: 18px;
      font-weight: normal;
    }
    h5 {
      font-size: 14px;
      color: #333;
      line-height: 40px;
      font-weight: 700;
      letter-spacing: 0.2px;
    }
    .gray-wrap {
      background: #f4f4f4;
      padding: 40px 44px;
      margin-bottom: 60px;
      .item {
        display: flex;
        padding-bottom: 20px;
        .left,
        .right {
          width: 50%;
        }
        &:not(:first-child) {
          padding-top: 40px;
          border-top: 1px solid #cccccc;
        }
      }
      .intro {
        margin-bottom: 0;
        font-size: 16px;
        color: #666666;
        line-height: 20px;
        margin: 18px 0;
      }
      .exp {
        color: #999999;
        font-size: 16px;
        line-height: 18px;
      }
    }
    .gray-img-wrap {
      background: #f4f4f4;
      margin-bottom: 60px;
    }
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

  @media (max-width: 991px) {
    .content .gray-wrap .item {
      flex-wrap: wrap;
      .left {
        width: 100%;
      }
      .right {
        width: 100%;
        margin-top: 40px;
      }
    }
  }

  .img-box {
    padding-top: 60px;
    padding-bottom: 30px;
    img {
      max-width: 100%;
      transform: scale(0.75);
      transform-origin: 0 0;
    }
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
    li {
      display: inline-block;
    }
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
