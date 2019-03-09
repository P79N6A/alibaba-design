<template>
  <div class="page-brand-keywords">
    <header>
      <h1>{{ $t('关键词') }}</h1>
    </header>
    <div class="content">
      <p>{{ $t('关键词与我们的服务和愿景密切相关。') }}</p>
      <h1>{{ $t('国际') }}</h1>
      <p>
        {{
          $t(
            '阿里巴巴是一家国际公司。 我们希望在世界的每个角落实现我们的愿景，真正让您轻松在任何地方开展业务：'
          )
        }}
        <br>
        {{ $t('使用国际通用设计；') }}
        <br>
        {{
          $t('符合多语言的浏览习惯；')
        }}
        <br>
        {{ $t('在元素的选择上考虑。') }}
      </p>
      <div class="img-box">
        <img src="https://img.alicdn.com/tfs/TB1YfttEHPpK1RjSZFFXXa5PpXa-614-306.png" alt>
      </div>
      <h1>{{ $t('信赖') }}</h1>
      <p>
        {{
          $t(
            '如何在网站体现信任，对于B类网站而言，最重要的莫过于专业性，我们需要用户通过看到的，读到的，用到的，来相信这个平台有足够的能力能够顺利推进生意：'
          )
        }}
        <br>
        {{ $t('随时能够回应客户的问题；') }}
        <br>
        {{
          $t('有充分的能力解决纠纷；')
        }}
        <br>
        {{ $t('保障客户的资产和权益。') }}
      </p>
      <div class="img-box">
        <img src="https://img.alicdn.com/tfs/TB1hSNxEHrpK1RjSZTEXXcWAVXa-614-306.png" alt>
      </div>
      <h1>{{ $t('创新') }}</h1>
      <p>
        {{
          $t(
            '用户的场景以及使用的平台无时不发生着变化，只有关注变革才能立于现在：'
          )
        }}
        <br>
        {{
          $t('深入了解用户时刻发生的问题，不拘泥于满足当下的状态；')
        }}
        <br>
        {{ $t('致力于使用新的体验技术来解决现有问题；') }}
        <br>
        {{
          $t('采纳行之有效的手段，使之成为规范的一部分，赋用到更多场景。')
        }}
      </p>
      <div class="img-box">
        <img src="https://img.alicdn.com/tfs/TB19fo3ECzqK1RjSZPcXXbTepXa-614-306.png" alt>
      </div>
      <p>
        {{ $t('上一篇') }}:&nbsp;&nbsp;
        <a href="../target/index.html">{{ $t('目标用户') }}</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {{ $t('下一篇') }}:&nbsp;&nbsp;
        <a
          href="../principles/index.html"
        >{{ $t('设计原则') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  '关键词与我们的服务和愿景密切相关。':
    'Keywords are closely related to our service and vision.',
  国际: 'International',
  '阿里巴巴是一家国际公司。 我们希望在世界的每个角落实现我们的愿景，真正让您轻松在任何地方开展业务：':
    'Alibaba is an international company. We hope to achieve our vision in every corner of the world and make it easy for you to conduct business anywhere in the world:',
  '使用国际通用设计；': 'Utilize universal designs;',
  '符合多语言的浏览习惯；': 'Support browsing habits of various languages;',
  '在元素的选择上考虑。':
    'Give due consideration to the selection of elements.',
  信赖: 'Trust',
  '如何在网站体现信任，对于B类网站而言，最重要的莫过于专业性，我们需要用户通过看到的，读到的，用到的，来相信这个平台有足够的能力能够顺利推进生意：':
    'How can a sense of trust be provided on a website? The most important thing for a Class B website is not come across as overly professional. We want our users to believe that this platform is capable of promoting business successfully, and we achieve that through the things they see, read, and use:',
  '随时能够回应客户的问题；':
    'Able to respond to customers’ questions any time;',
  '有充分的能力解决纠纷；': 'Possess strong capability to resolve disputes;',
  '保障客户的资产和权益。': 'Protect customer assets and interests.',
  创新: 'Innovation',
  '用户的场景以及使用的平台无时不发生着变化，只有关注变革才能立于现在：':
    'User scenarios and platforms used change all the time. Only by focusing on changes can we stand out in the present.',
  '深入了解用户时刻发生的问题，不拘泥于满足当下的状态；':
    'Deeply understand the problems confronting users, always try to do better;',
  '致力于使用新的体验技术来解决现有问题；':
    'Devoted to using new experience technologies to solve existing problems;',
  '采纳行之有效的手段，使之成为规范的一部分，赋用到更多场景。':
    'Adopt effective measures, making them a part of protocols and applying them to more scenarios.'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('关键词')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-brand-keywords {
  header {
    position: relative;
    text-align: left;
    background: #ebebeb;
    padding: 0 120px;
    background-image: url('https://img.alicdn.com/tfs/TB1r6RDEMHqK1RjSZJnXXbNLpXa-1631-238.png');
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
  }
  .content p a {
    color: #999;
  }
  .content h2 {
    margin-bottom: 10px;
  }
  .content h4 {
    font-size: 20px;
    color: #666666;
    line-height: 18px;
    font-weight: normal;
  }
  .content h5 {
    font-size: 14px;
    color: #666666;
    line-height: 40px;
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
    margin-bottom: 80px;
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
    font-size: 16px;
    font-weight: 600;
    line-height: 1.68;
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
  h1 {
    padding-bottom: 20px !important;
  }

  a:hover {
    color: #fff;
    text-decoration: underline;
  }
}
</style>
