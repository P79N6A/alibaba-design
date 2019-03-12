<template>
  <div class="page-pattern-button">
    <header>
      <h1>{{ $t('按钮') }}</h1>
      <div class="download hvr-sweep-to-top">
        <a download="按钮" href="https://space.dingtalk.com/s/gwHOAD-yewLOFvEzgwPaACAyMWY4YzliMGY1NGY0YWM1OTkyYjk1NGU2YzE1NTJiYg" target="_blank">
          <span>Sketch</span>
          <span>
            <i class="el-icon-download" />
            <span class="download-tip">{{ $t('密码: PsN6') }}</span>
          </span>
        </a>
      </div>
    </header>

    <div class="content">
      <h2>{{ $t('定义') }}</h2>
      <p>
        {{
          $t(
            '按钮是对用户的点击做出反应，并触发即时操作，每个按钮都有一个相对应的操作或流程。'
          )
        }}
      </p>
      <h2>{{ $t('构成') }}</h2>
      <p>
        {{ $t('· 边框：用于次级按钮与幽灵按钮') }}<br>
        {{ $t('· 底色：来源于主品牌色') }}<br>
        {{ $t('· 文字') }}<br>
        {{ $t('· 图标') }}
      </p>
      <h2>{{ $t('规则') }}</h2>
      <p>
        {{
          $t(
            '· 标准按钮分为主要和次要，一个模块中(如浮层、表格、表单、页面等)只能有一个主要按钮,主引导用户的操作；其他的按钮皆为次要操作。'
          )
        }}<br>
        {{ $t('· 主要按钮跟次要按钮组合时，主要按钮需放在最左边。') }}<br>
        {{
          $t(
            '· 按钮上的文字应保持简洁，使用清楚明了的触发文字，例如：注册、下一步、下载。'
          )
        }}<br>
        {{
          $t(
            '· 其他按钮样式有：文字、图标、标签、菜单按钮、悬浮按钮..等。'
          )
        }}<br>
      </p>
      <h2>{{ $t('尺寸和标注') }}</h2>
      <h3>{{ $t('尺寸') }}</h3>
      <p>
        {{
          $t(
            '尺寸分为大号：高度S9，最小宽度S20；中号：高度S8，最小宽度S15；小号：高度S6，最小宽度S10'
          )
        }}
      </p>
      <div class="img-box">
        <img :src="imageList['image49']" alt="">
      </div>
      <h3>{{ $t('按钮使用排列规则：') }}</h3>
      <p>
        {{ $t('通用Button与文字、图标等Button组合使用时，垂直居中对齐') }}
      </p>
      <div class="img-box">
        <img :src="imageList['image50']" alt="">
      </div>
      <h3>{{ $t('按钮多语言排版规则：') }}</h3>
      <p>{{ $t('多语言情况下的两行展示') }}</p>
      <div class="img-box">
        <img :src="imageList['image51']" alt="">
      </div>
      <h2>{{ $t('分类与样式') }}</h2>
      <p class="line">
        {{
          $t(
            'Alibaba.com 对按钮分了五种类型：标准按钮、文本按钮、警示按钮、幽灵按钮、按钮组。按钮有Normal（默认）、Hover（悬停）、Disabled（禁用）三种交互状态。'
          )
        }}
      </p>
      <p class="line">
        <b>{{ $t('标准按钮：') }}</b>{{
          $t(
            '标准按钮分为主要和次要，一个模块中(如浮层、表格、表单、页面等)只能有一个主要按钮,主引导用户的操作；其他的按钮皆为次要操作。'
          )
        }}
      </p>
      <p class="line">
        <b>{{ $t('文本按钮：') }}</b>{{
          $t(
            '通常用于较不明显的强引导操作，比如卡片中内容信息较多，希望用户不受干扰浏览内容，用文本按钮有助于强调突出卡片的信息。'
          )
        }}
      </p>
      <p class="line">
        <b>{{ $t('警示按钮：') }}</b>{{
          $t(
            '取用功能色中的警示色，该按钮用于向用户提示即将发生的破坏性行为，如永久删除数据。'
          )
        }}
      </p>
      <p class="line">
        <b>{{ $t('幽灵按钮：') }}</b>{{ $t('常用在有色背景上，背景和边框都变为透明。') }}
      </p>
      <p class="line">
        <b>{{ $t('按钮组：') }}</b>{{
          $t(
            '按钮组就是指两个或两个以上的按钮排布在一起，显示多个相关操作。'
          )
        }}
      </p>
      <div class="img-box">
        <img :src="imageList['image52']" alt="">
      </div>
      <div class="img-box">
        <img :src="imageList['image53']" alt="">
      </div>
      <div class="img-box">
        <img :src="imageList['image54']" alt="">
      </div>
      <div class="img-box">
        <img :src="imageList['image55']" alt="">
      </div>
      <div class="img-box">
        <img :src="imageList['image56']" alt="">
      </div>
      <div class="img-box">
        <img :src="imageList['image57']" alt="">
      </div>
      <div class="img-box">
        <img :src="imageList['image58']" alt="">
      </div>
      <div class="img-box">
        <img :src="imageList['image59']" alt="">
      </div>
      <p>
        {{ $t('上一篇') }}:&nbsp;&nbsp;<a href="../media/index.html">{{ $t('动效') }}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {{ $t('下一篇') }}:&nbsp;&nbsp;<a href="../navigation/index.html">{{ $t('导航') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  定义: 'Definition',
  构成: 'Consitute',
  '按钮是对用户的点击做出反应，并触发即时操作，每个按钮都有一个相对应的操作或流程。':
    'Buttons react to user clicks and trigger immediate actions, and each button has a corresponding action or process.',
  规则: 'Rules',
  '· 边框：用于次级按钮与幽灵按钮':
    '· Border: for secondary buttons and ghost buttons',
  '· 底色：来源于主品牌色': '· Background: from the main brand color ',
  '· 文字': '· Text',
  '· 图标': '· Icon',
  '· 标准按钮分为主要和次要，一个模块中(如浮层、表格、表单、页面等)只能有一个主要按钮,主引导用户的操作；其他的按钮皆为次要操作。':
    '· Standard buttons are divided into primary and secondary. In a module (such as floating layer, table, form, page, etc.), there can only be one main button, the main guide user’s operation; the other buttons are secondary operations.',
  '· 主要按钮跟次要按钮组合时，主要按钮需放在最左边。':
    '· When the main button is combined with the secondary button, the main button needs to be placed on the far left.',
  '· 按钮上的文字应保持简洁，使用清楚明了的触发文字，例如：注册、下一步、下载。':
    '· The text on the button should be kept concise, using clear and clear trigger text, such as: registration, next step, download. ',
  '· 其他按钮样式有：文字、图标、标签、菜单按钮、悬浮按钮..等。':
    '· Other button styles are: text, icons, labels, menu buttons, floating buttons, etc.',
  尺寸和标注: 'Size & Mark',
  '尺寸分为大号：高度S9，最小宽度S20；中号：高度S8，最小宽度S15；小号：高度S6，最小宽度S10':
    'Dimensions are divided into large size: height S9, minimum width S20; medium: height S8, minimum width S15; small: height S6, minimum width S10',
  '按钮使用排列规则：': 'Button uses permutation rules:',
  '通用Button与文字、图标等Button组合使用时，垂直居中对齐':
    'Vertical center alignment when a generic Button is used in combination with a button, such as a text or icon',
  '按钮多语言排版规则：': 'Button multi-language typesetting rules:',
  多语言情况下的两行展示: 'Two-line display in multi-language situations',
  分类与样式: 'Classification and Style',
  'Alibaba.com 对按钮分了五种类型：标准按钮、文本按钮、警示按钮、幽灵按钮、按钮组。按钮有Normal（默认）、Hover（悬停）、Disabled（禁用）三种交互状态。':
    'Alibaba.com has five types of buttons: standard buttons, text buttons, alert buttons, ghost buttons, and button groups. The buttons have three interactive states: Normal (default), Hover (hover), and Disabled (disabled).',
  '标准按钮：': 'Standard Button: ',
  '标准按钮分为主要和次要，一个模块中(如浮层、表格、表单、页面等)只能有一个主要按钮,主引导用户的操作；其他的按钮皆为次要操作。':
    'Standard buttons are divided into primary and secondary. In a module (such as floating layer, table, form, page, etc.), there can only be one main button, the main guide user’s operation; the other buttons are secondary operations. ',
  '文本按钮：': 'Text button: ',
  '通常用于较不明显的强引导操作，比如卡片中内容信息较多，希望用户不受干扰浏览内容，用文本按钮有助于强调突出卡片的信息。':
    'Usually used for less obvious strong boot operations, such as more content information in the card, I hope the user does not interfere with browsing content, use the text button to help emphasize the information of the highlighted card. ',
  '警示按钮：': 'Warning Button',
  '取用功能色中的警示色，该按钮用于向用户提示即将发生的破坏性行为，如永久删除数据。':
    'Gets the alert color in the function color, which is used to alert the user to impending destructive behavior, such as permanently deleting data. ',
  '幽灵按钮：': 'Ghost Button: ',
  '常用在有色背景上，背景和边框都变为透明。':
    'Commonly used on colored backgrounds, the background and borders become transparent. ',
  '按钮组：': 'Group Button',
  '按钮组就是指两个或两个以上的按钮排布在一起，显示多个相关操作。':
    'A button group means that two or more buttons are arranged together to display multiple related operations.'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('按钮')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-pattern-button {
  header {
    position: relative;
    text-align: left;
    background: #000;
    padding: 0 120px;
    background-image: url('https://img.alicdn.com/tfs/TB135WXEFYqK1RjSZLeXXbXppXa-1670-240.png');
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
  .line {
    margin-bottom: 20px !important;
  }
  .content h2 {
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

  .img-box {
    margin-bottom: 40px;
  }
  .img-box img {
    max-width: 100%;
    padding-bottom: 40px;
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
  .content .subtitle {
    font-size: 16px;
    line-height: 40px;
    padding-bottom: 30px;
    font-weight: 600;
    letter-spacing: 0.4px;
  }
  bold {
    font-weight: 700;
  }
  .content .item > div {
    margin-top: 40px;
    display: flex;
  }
  .content .item > div .left {
    max-width: 560px;
    margin-right: 60px;
  }

  .three {
    line-height: 40px !important;
    padding-top: 130px;
    padding-bottom: 20px;
    color: #333 !important;
    letter-spacing: 0.4px;
  }

  a:hover {
    color: #4a90e2;
    text-decoration: underline;
  }

  .em {
    font-weight: 600;
    color: #ff6868;
    padding-bottom: 30px;
  }

  li.active {
    text-decoration: underline;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }

  .three a {
    color: #000;
  }

  .content h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 26px;
    color: #333333;
  }

  .content p {
    font-size: 14px;
    line-height: 30px;
    color: #333333;
    margin-bottom: 60px;
  }

  .content p a {
    color: #999;
  }

  .content p a:hover {
    text-decoration: underline !important;
  }

  .download-box {
    background-color: #f6f6f6;
    display: flex;
    min-height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 34px;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .download-box-title {
    font-size: 36px;
    font-weight: 500;
    color: #333333;
  }

  .download-box-subtitle {
    margin-top: 13px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: #666666;
  }

  .download-box-btn {
    margin-top: 23px;
    border-radius: 30px;
    background-color: #1c1c1c;
    height: 40px;
    line-height: 40px;
    padding: 0 24px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
  }
}
</style>
