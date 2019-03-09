<template>
  <div class="page-brand-edm">
    <header>
      <h1>{{ $t('邮件') }}</h1>
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane :label="$t('策略')" name="tab1" />
        <el-tab-pane :label="$t('设计指导')" name="tab2" />
        <el-tab-pane :label="$t('设计')" name="tab3" />
      </el-tabs>
    </header>
    <transition name="el-fade-in-linear">
      <div key="Strategy" v-if="activeName === 'tab1'" class="content">
        <h1>{{ $t('策略: 邮件规划与发送策略') }}</h1>
        <p>
          {{ $t('1. 基于用户生命周期的全链路邮件规划') }}
          <br>
          {{
            $t('2. 单封邮件的发送策略')
          }}
          <br>
          {{ $t('3. 各类邮件具体策略参考') }}
        </p>
        <div class="subtitle">
          {{ $t('1. 基于用户生命周期的全链路邮件规划') }}
        </div>
        <div class="img-box">
          <img :src="imageList['image1']" alt>
        </div>

        <div class="subtitle">
          {{ $t('2. 单封邮件的发送策略：时间选择参考') }}
        </div>
        <div class="img-box">
          <img :src="imageList['image2']" alt>
        </div>
        <p>
          {{ $t('单封邮件的发送策略：频次/对象选择') }}
          <br>
          {{
            $t('细分人群，多种频次测试疲劳度阈值')
          }}
          <br>
          <b>
            {{
              $t('未来Alibaba邮件发送策略将根据数据做智能化判断')
            }}
          </b>
        </p>

        <div class="subtitle">
          {{ $t('3. 各类邮件具体策略参考') }}
        </div>
        <div class="item">
          <div>
            <div class="left">
              <div class="img-box">
                <img src="https://img.alicdn.com/tfs/TB1b3RAESzqK1RjSZFjXXblCFXa-384-425.png" alt>
              </div>
            </div>
            <div class="right">
              <p class="three">
                <a
                  class="a3"
                  href="https://www.sendwithus.com/resources/guide"
                  target="_blank"
                >https://www.sendwithus.com/resources/guide</a>
                <br>
                <a
                  class="a3"
                  href="http://blog.getvero.com/guides/lifecycle-marketing"
                  target="_blank"
                >http://blog.getvero.com/guides/lifecycle-marketing</a>
                <br>
                <a
                  class="a3"
                  href="https://www.sendwithus.com/resources/templates"
                  target="_blank"
                >https://www.sendwithus.com/resources/templates</a>
              </p>
            </div>
          </div>
          <p>
            {{ $t('上一篇') }}:&nbsp;&nbsp;
            <a href="../product/index.html">{{ $t('产品') }}</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{ $t('下一篇') }}:&nbsp;&nbsp;
            <a
              href="../article/index.html"
            >{{ $t('文章') }}</a>
          </p>
        </div>
      </div>
      <div key="Guidelines" v-if="activeName === 'tab2'" class="content">
        <h1>{{ $t('内容: 邮件信息撰写规范') }}</h1>
        <p>
          {{ $t('1. 发件人/发件邮箱') }}
          <br>
          {{
            $t('2. 标题和预览文案')
          }}
          <br>
          {{ $t('3. 邮件内容') }}
        </p>
        <div class="subtitle">
          {{ $t('1. 好的开始，是统一、专业的发件人/发件邮箱') }}
        </div>
        <div class="img-box">
          <img :src="imageList['image3']" alt>
        </div>
        <div class="subtitle">
          {{ $t('2.清晰有趣的主题和邮件预览对于收件人点击和阅读至关重要') }}
        </div>
        <div class="img-box">
          <img :src="imageList['image4']" alt>
        </div>
        <div class="subtitle">
          {{ $t('3.邮件内容格式统一') }}
        </div>
        <div class="img-box">
          <img :src="imageList['image5']" alt>
        </div>
        <p>
          {{ $t('上一篇') }}:&nbsp;&nbsp;
          <a href="../product/index.html">{{ $t('产品') }}</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {{ $t('下一篇') }}:&nbsp;&nbsp;
          <a
            href="../article/index.html"
          >{{ $t('文章') }}</a>
        </p>
      </div>
      <div key="Design" v-if="activeName === 'tab3'" class="content">
        <h1>{{ $t('设计: 邮件设计特殊注意事项') }}</h1>
        <p>
          {{ $t('1.快速获取所需要的信息') }}
          <br>
          {{
            $t('2. 顺利阅读和操作邮件')
          }}
          <br>
          {{ $t('3. 对品牌身份有效识别') }}
        </p>
        <div class="subtitle">
          {{ $t('1. 重要信息和核心行动点在打开邮件一瞬间就看到') }}
        </div>
        <div class="img-box">
          <img src="https://img.alicdn.com/tfs/TB1Dl88EMHqK1RjSZFEXXcGMXXa-622-394.png" alt>
        </div>
        <div class="subtitle">
          {{ $t('2. 核心行动点在长邮件中建议重复出现。') }}
        </div>
        <div class="em">
          {{ $t('“重要的话要说三遍!!!”') }}
        </div>
        <div class="img-box">
          <img src="https://img.alicdn.com/tfs/TB1DzFSESrqK1RjSZK9XXXyypXa-492-695.png" alt>
        </div>
        <div class="subtitle">
          {{
            $t(
              '2. 要做移动端适配，但做不到复杂响应，所以设计一定要尽量简单！'
            )
          }}
        </div>
        <p>{{ $t('48% + 的移动端打开率') }}</p>
        <div class="img-box">
          <img src="https://img.alicdn.com/tfs/TB1sL47EMHqK1RjSZJnXXbNLpXa-491-258.png" alt>
        </div>
        <p>
          <b>{{ $t('但是，') }}</b>
          <br>
          {{
            $t('除Apple邮件客户端，其他邮件端均不支持Responsive！')
          }}
        </p>
        <div class="img-box">
          <img :src="imageList['image6']" alt>
        </div>
        <div class="subtitle">
          {{ $t('4. 视觉设计要考虑不支持CSS时的极端样式是否可行') }}
        </div>
        <p>
          {{ $t('不支持:') }}
          <br>
          {{ $t('视频格式、图层覆盖、PNG格式、阴影、圆角') }}
          <br>
          <b>{{ $t('各客户端CSS支持列表') }}</b>
        </p>
        <div class="img-box">
          <img :src="imageList['image7']" alt>
        </div>
        <div class="subtitle">
          {{ $t('5. 邮件未正常展示时的三大补救') }}
        </div>
        <div class="img-box">
          <img :src="imageList['image8']" alt>
        </div>
        <div class="subtitle">
          {{
            $t(
              '6. 统一的邮件模板及DPL使用（查看具体规范），保证全链路的一致的体验'
            )
          }}
        </div>
        <div class="img-box">
          <img src="https://img.alicdn.com/tfs/TB1AD4YESzqK1RjSZPxXXc4tVXa-650-384.png" alt>
        </div>
        <h1>{{ $t('EDM效果监控指标') }}</h1>
        <div class="img-box">
          <img :src="imageList['image9']" alt>
        </div>
        <p>
          {{ $t('上一篇') }}:&nbsp;&nbsp;
          <a href="../product/index.html">{{ $t('产品') }}</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {{ $t('下一篇') }}:&nbsp;&nbsp;
          <a
            href="../article/index.html"
          >{{ $t('文章') }}</a>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  '策略: 邮件规划与发送策略': 'Strategy: Mail Planning and Sending Strategy',
  '1. 基于用户生命周期的全链路邮件规划':
    '1. Full link mail planning based on user lifecycle',
  '2. 单封邮件的发送策略': '2. Sending strategy for a single mail',
  'Alibaba.com全链路邮件规划': 'Full Link Mail Planning of Alibaba.com',
  '2. 单封邮件的发送策略：时间选择参考':
    '2. Sending Strategy for a Single Mail：Time Selection Reference',
  '单封邮件的发送策略：频次/对象选择':
    'Sending strategy for a single mail - frequency/object selection',
  '细分人群，多种频次测试疲劳度阈值':
    'Test fatigue threshold based on the people group and frequencies',
  未来Alibaba邮件发送策略将根据数据做智能化判断:
    'The mail sending strategy of Alibaba will have intelligent judgment ability in the future based on the data',
  '3. 各类邮件具体策略参考': '3. Strategy reference for various mail types',
  '内容: 邮件信息撰写规范': 'Content: Mail Writing Standards',
  '1. 发件人/发件邮箱': '1. Sender/Sender Mailbox',
  '2. 标题和预览文案': '2. Subject and Copywriting Preview',
  '3. 邮件内容': '3. Mail Content',
  '1. 好的开始，是统一、专业的发件人/发件邮箱':
    '1. A good mail begins from a consistent and professional sender/sender mailbox',
  '2.清晰有趣的主题和邮件预览对于收件人点击和阅读至关重要':
    '2. Clear and interesting subject and email preview are essential to attract recipients to click and read',
  '3.邮件内容格式统一': '3. Consistent Format and Content',
  '设计: 邮件设计特殊注意事项': 'Design: Special Notice on Mail Design',
  '1.快速获取所需要的信息': '1. Obtain the required information quickly',
  '2. 顺利阅读和操作邮件': '2. Read and operate the mail smoothly',
  '3. 对品牌身份有效识别': '3. Identify the brand effectively',
  '1. 重要信息和核心行动点在打开邮件一瞬间就看到':
    '1. Important information and core actions should be noticed immediately once the email is opened',
  '2. 核心行动点在长邮件中建议重复出现。':
    '2. The core actions are suggested to be repeated in a long email.',
  '“重要的话要说三遍!!!”':
    '" Important things should be repeated by 3 times! ! ! "',
  '2. 要做移动端适配，但做不到复杂响应，所以设计一定要尽量简单！':
    '2. We will work on the adaptation to mobile client, while any complex response cannot be realized, so the design must be as simple as possible.',
  '但是，': 'However',
  '除Apple邮件客户端，其他邮件端均不支持Responsive！':
    'only Apple email client supports Responsive!',
  '4. 视觉设计要考虑不支持CSS时的极端样式是否可行':
    '4. In visual design, it should be taken into consideration whether the extreme style is feasible when CSS is not supported',
  '不支持:': 'Not supported:',
  '视频格式、图层覆盖、PNG格式、阴影、圆角':
    'Video format, layer overlay, PNG format, shadow, and round angel',
  '48% + 的移动端打开率': 'More than 48% opening rate on mobile client',
  各客户端CSS支持列表: 'CSS support list of various clients',
  '5. 邮件未正常展示时的三大补救':
    '5. Three remedies when the mail is displayed abnormally',
  '6. 统一的邮件模板及DPL使用（查看具体规范），保证全链路的一致的体验':
    '6. Uniform mail template and DPL use (see specific specifications for details) ensure a consistent experience on all links',
  EDM效果监控指标: 'EDM Effect Monitoring Indicators',
  策略: 'Strategy',
  设计: 'Design'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('邮件')
    }
  },
  data() {
    return {
      activeName: 'tab1'
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-brand-edm {
  header {
    position: relative;
    text-align: left;
    background: #ebebeb;
    padding: 0 120px;
    background-image: url('https://img.alicdn.com/tfs/TB1Zp82EH2pK1RjSZFsXXaNlXXa-1326-192.png');
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
    font-weight: b;
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
  b {
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
    text-decoration: underline;
  }

  .three a {
    color: #999;
  }

  .content p a {
    color: #999;
  }
}
</style>
