<template>
  <div class="page-brand-product">
    <header>
      <h1>{{ $t('产品') }}</h1>
    </header>
    <div class="content">
      <p>
        {{ $t('请遵循这些重要提示，以帮助您更好地产出产品文案。') }}
      </p>
      <h1>{{ $t('不要想的太大') }}</h1>
      <p class="p4">
        {{ $t('你用来表达你的观点的词越少越好。') }}
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1qvRMENjaK1RjSZFAXXbdLFXa-767-80.png"
          alt=""
        >
      </div>
      <h1>{{ $t('争取简单') }}</h1>
      <p>
        {{
          $t(
            '避免复杂的句子和动词，使用简单的词汇和一致的写作风格来表达你需要说的话。'
          )
        }}
      </p>
      <h1>{{ $t('保持真实') }}</h1>
      <p>
        {{
          $t(
            '用真实的关于我们的服务和功能的信息来帮助人们。 如果不是这样，我们可能不应该用言语表达。'
          )
        }}
      </p>
      <h1>{{ $t('不要想太多') }}</h1>
      <p class="p4">
        {{ $t('不要在一页中铺陈很多卖点， 而是以独特的卖点来打动客户。') }}
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1f18zEOrpK1RjSZFhXXXSdXXa-767-80.png"
          alt=""
        >
      </div>
      <h1>{{ $t('清楚地链接') }}</h1>
      <p class="p4">
        {{ $t('短链接和标准CTA按钮。') }}
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1P10yEFzqK1RjSZFvXXcB7VXa-767-80.png"
          alt=""
        >
      </div>
      <h1>{{ $t('本地化不仅仅是翻译') }}</h1>
      <p class="p4">
        {{ $t('将内容本地化为英文时，保持文化上的适当性。') }}
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1JadyEFYqK1RjSZLeXXbXppXa-768-80.png"
          alt=""
        >
      </div>
      <h2>{{ $t('当有疑问时，请检查你的内容') }}</h2>
      <p>
        {{ $t('有几种方法可以确认UX内容的质量。') }} <br>{{
          $t('语法和词汇测试：')
        }}
        <br>
        <a href="https://Grammerly.com" target="_blank">Grammerly.com</a>
        <br>
        <br>{{ $t('简单测试：') }} <br>
        <a
          href="http://www.hemingwayapp.com"
          target="_blank"
        >http://www.hemingwayapp.com</a><br>
        <br>{{ $t('人工测试：') }} <br>{{
          $t(
            '请向我们的一位出色的内容策略师寻求建议。我们通常在PRS提交后的7天内作出回应。'
          )
        }}
      </p>
      <p>
        {{ $t('上一篇') }}:&nbsp;&nbsp;<a href="../principles/index.html">{{ $t('设计原则') }}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {{ $t('下一篇') }}:&nbsp;&nbsp;<a href="../edm/index.html">{{ $t('邮件') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  '请遵循这些重要提示，以帮助您更好地产出产品文案。':
    'Please follow these important tips to help you make a better product text.',
  不要想的太大: 'No Need to Think Too Big',
  '你用来表达你的观点的词越少越好。':
    'It would be better to express your opinion with fewer words.',
  争取简单: 'Simplicity Preferred',
  '避免复杂的句子和动词，使用简单的词汇和一致的写作风格来表达你需要说的话。':
    'Avoid complicated sentences and verbs, do use simple words and consistent writing style to express what you need to say.',
  保持真实: 'Stay True',
  '用真实的关于我们的服务和功能的信息来帮助人们。 如果不是这样，我们可能不应该用言语表达。':
    'Help people with trustworthy information about our services and functions. Maybe we shouldn’t express it in words if this is not the case.',
  不要想太多: 'No Need to Think Too Much',
  '不要在一页中铺陈很多卖点， 而是以独特的卖点来打动客户。':
    'No need to elaborate on so many selling points on one page, but impress customers with the most unique ones.',
  清楚地链接: 'Clearly Linked',
  '短链接和标准CTA按钮。': 'Short links and standard CTA button.',
  本地化不仅仅是翻译: 'Localization, Not Merely Translation',
  '将内容本地化为英文时，保持文化上的适当性。':
    'Keep culturally appropriate when localizing contents into English.',
  '当有疑问时，请检查你的内容': 'Please Check Your Contents for Any Questions',
  '语法和词汇测试：': 'Grammar and vocabulary test:',
  '简单测试：': 'Easy Test:',
  '人工测试：': 'Human Body Test:',
  '请向我们的一位出色的内容策略师寻求建议。我们通常在PRS提交后的7天内作出回应。':
    'Please seek advice from one of our outstanding content strategists. Usually we make a response within 7 days after PRS is submitted.',
  '有几种方法可以确认UX内容的质量。':
    'Several methods are available for you to determine the quality of UX contents.'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('产品')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-brand-product {
  header {
    position: relative;
    text-align: left;
    background: #ebebeb;
    padding: 0 120px;
    background-image: url('https://img.alicdn.com/tfs/TB1fvpxEHvpK1RjSZPiXXbmwXXa-1326-192.png');
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
    padding: 80px 200px 60px 120px;
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

  .p4 {
    margin-bottom: 20px !important;
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
    padding-bottom: 10px !important;
  }
  a:hover {
    color: #fff;
    text-decoration: underline;
  }
}
</style>
