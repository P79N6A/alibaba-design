<template>
  <div class="page-brand-article">
    <header>
      <h1>{{ $t('文章') }}</h1>
    </header>
    <div class="content">
      <div class="article">
        <h5>{{ $t('声音和音调') }}</h5>
        <p>
          <b>·</b>
          {{ $t('我们用美式英语写作。') }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{ $t('B2B网站呼吁以专业和实用的声音写作。') }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{ $t('永远不要使用您习惯在印刷中看到的比喻，比喻或其他语言。') }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{ $t('永远不要用一个很短的单词来做长话。') }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{ $t('如果可以删掉一个单词，请务必将其删除。') }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{
            $t(
              '我们为APP和PC重新调整了相同的内容。一致性和简化是我们的首要任务。'
            )
          }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{ $t('切勿在可以使用活动状态的地方使用被动设备。') }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{
            $t(
              '如果你能想到日常英语中的对等词汇，千万不要使用外来词、行话或翻译糟糕的中式英语。'
            )
          }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{ $t('如果不是这样，我们可能不应该用语言表达。') }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{ $t('对于内容和设计而言，保持文化上的适当性。') }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{ $t('永远不要夸大，永远不要过度品牌化您的内容。') }}
        </p>
      </div>
      <div class="article">
        <h5>{{ $t('需要注意的例子') }}</h5>
        <p>
          <b>·</b>
          {{ $t('不建议使用标点符号或插入词来夸大（即感叹号！哎呀等）。') }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{
            $t(
              '我们不为2C节日写作，我们的平台迎合了全球观众。我们更喜欢写“节日库存”而不是“圣诞节库存”。'
            )
          }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{
            $t(
              '不要推动陈规定型的性别或种族条款来换取点击率。例如：她的厨房用品，黑人美国女孩的头发延长件。'
            )
          }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{
            // eslint-disable-next-line no-irregular-whitespace
            $t('我们倾向于对我们的交货速度过度承诺，​​供应商控制的不是我们。我们更喜欢写“快速发送”而不是“快速发送”。')
          }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{
            $t(
              '作为一项规则，我们不能写相对最大或最小的条款。例如，“最佳，最低或最快”是我们的法律团队禁止的条款。'
            )
          }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{
            $t(
              '除非我们首先获得法律批准，否则在撰写“Alibaba.com已验证，已批准或保证”时要小心。'
            )
          }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{ $t('主题标签的使用应保持在最低限度。') }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{
            $t(
              '与亚马逊，ebay或竞争对手的数据无关的任何内容都不允许作为卖点。'
            )
          }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{
            $t('对于任何类型的横幅，我们将标题大写并对副标题应用句子案例。')
          }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{
            $t(
              '对于CTA按钮应仅出现在PC横幅上，标准文本如“立即购买”，“立即来源”或“查看/了解更多”。'
            )
          }}
        </p>
        <p>
          <br>
          <b>·</b>
          {{ $t('USD XX是在我们的平台上写货币的可接受方式。') }}
        </p>
      </div>

      <h5>{{ $t('如有疑问，请联系我们：Drew或Cecilia') }}</h5>
      <p>
        {{ $t('上一篇') }}:&nbsp;&nbsp;
        <a href="../edm/index.html">{{ $t('邮件') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  声音和音调: 'The Voice and tone',
  '我们用美式英语写作。': 'We write in American English.',
  'B2B网站呼吁以专业和实用的声音写作。':
    'B2B website calls for writing in a professional and practical voice.',
  '永远不要使用您习惯在印刷中看到的比喻，比喻或其他语言。':
    'Never use a metaphor, simile or other figure of speech which you are used to seeing in print.',
  '如果可以删掉一个单词，请务必将其删除。':
    'If it is possible to cut out a word, always cut it out.',
  '永远不要用一个很短的单词来做长话。':
    'Never use a long word where a short one will do.',
  '我们为APP和PC重新调整了相同的内容。一致性和简化是我们的首要任务。':
    'We repurpose the same content for APP and PC. Consistency and simplification are our priorities.',
  '切勿在可以使用活动状态的地方使用被动设备。':
    'Never use the passive where you can use the active.',
  '如果你能想到日常英语中的对等词汇，千万不要使用外来词、行话或翻译糟糕的中式英语。':
    'Never use a foreign phrase, a jargon word or poorly translated Chinglish if you can think of an everyday English equivalent.',
  '如果不是这样，我们可能不应该用语言表达。':
    'If it’s not true, we probably shouldn’t put it in words.',
  '对于内容和设计而言，保持文化上的适当性。':
    'Stay culturally appropriate, for both content and design.',
  '永远不要夸大，永远不要过度品牌化您的内容。':
    'Never exaggerate, never over-brand your content.',
  需要注意的例子: 'Examples to keep in mind',
  '不建议使用标点符号或插入词来夸大（即感叹号！哎呀等）。':
    'The use of punctuation or interjections for exaggeration (i.e. exclamation mark! Oops, etc.) are not advised.',
  '我们不为2C节日写作，我们的平台迎合了全球观众。我们更喜欢写“节日库存”而不是“圣诞节库存”。':
    'We don’t write for 2C holidays, our platform is catered to global audiences. We prefer to write “Stock up for the holidays” instead of “Stock up for Christmas.”',
  '不要推动陈规定型的性别或种族条款来换取点击率。例如：她的厨房用品，黑人美国女孩的头发延长件。':
    'Don’t propel stereotypical gender or racial terms in exchange for click rate. For example: Kitchen items for her, hair extension for Black American girls.',
  '我们倾向于对我们的交货速度过度承诺，​​供应商控制的不是我们。我们更喜欢写“快速发送”而不是“快速发送”。':
    'We tend to overpromise on our speed of delivery, suppliers control this not us. We prefer to write “Fast dispatch” instead of “Fast delivery”.',
  '作为一项规则，我们不能写相对最大或最小的条款。例如，“最佳，最低或最快”是我们的法律团队禁止的条款。':
    'As a rule, we cannot write in relative maximum or minimum terms. For example, “best, lowest or fastest” are terms forbidden by our legal team.',
  '除非我们首先获得法律批准，否则在撰写“Alibaba.com已验证，已批准或保证”时要小心。':
    'Be careful when writing “Alibaba.com Verified, Approved, or Guaranteed" unless we secure legal approvals first.',
  '主题标签的使用应保持在最低限度。':
    'The use of hashtags should be kept to a minimal.',
  '与亚马逊，ebay或竞争对手的数据无关的任何内容都不允许作为卖点。':
    'Nothing related to Amazon, ebay, or data from our competitors are allowed as selling points.',
  '对于任何类型的横幅，我们将标题大写并对副标题应用句子案例。':
    'For banners of any kind, we capitalize the title and apply sentence case for the subtitle.',
  '对于CTA按钮应仅出现在PC横幅上，标准文本如“立即购买”，“立即来源”或“查看/了解更多”。':
    'For CTA buttons should only appear on PC banners, with standard texts such as “Buy Now”,“Source Now” or “View/ Learn More”.',
  'USD XX是在我们的平台上写货币的可接受方式。':
    'USD XX is the acceptable way of writing currency on our platform.',
  '如有疑问，请联系我们：Drew或Cecilia':
    'When in doubt, contact us: Drew or Cecilia'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('文章')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-brand-article {
  header {
    position: relative;
    height: 219px;
    padding: 0 120px;
    background: #ebebeb;
    background-image: url('https://img.alicdn.com/tfs/TB1h9B2EHrpK1RjSZTEXXcWAVXa-1326-192.png');
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
    font-weight: normal;
    line-height: 24px;
  }
  .el-tabs .el-tabs__item.is-active {
    font-weight: bold;
  }

  .el-tabs .el-tabs__active-bar {
    height: 4px;
    background: #fff;
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
    margin-bottom: 0;
    line-height: 21px !important;
    letter-spacing: 0.4px;
  }
  .content p a {
    color: #4a90e2;
  }

  .content h4 {
    color: #666;
    font-size: 20px;
    font-weight: normal;
    line-height: 18px;
  }

  .content h5 {
    padding-bottom: 10px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
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
    padding-bottom: 20px;
    color: #666 !important;
    line-height: 22px !important;
    letter-spacing: 0.4px;
  }

  .head {
    margin-bottom: 0 !important;
    padding-top: 70px;
    font-size: 32px;
    line-height: 1.5;
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

  .article {
    padding-bottom: 60px;
  }

  .content p a {
    color: #999;
  }
}
</style>
