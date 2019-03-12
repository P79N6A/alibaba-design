<template>
  <div class="page-method">
    <header>
      <h1>{{ $t('方法 & 过程') }}</h1>
    </header>
    <div class="content">
      <h1>{{ $t('线上B类展会视觉形式探索') }}</h1>
      <h2>{{ $t('线下展会及线上展会特点') }}</h2>
      <p>
        {{
          $t(
            '国际化展会能为专业人士提供最新零售趋势和商业解决方案，在短时间内聚集大量专业买家卖家，买卖双方面对面交流，真实接触到产品，产品体验模式丰富，相对于线上场景，买家更有信任感。'
          )
        }}
      </p>
      <div class="img-box">
        <img :src="imageList['image15']" alt="">
      </div>
      <h2>{{ $t('线上展会视觉形式探索') }}</h2>
      <p>
        {{
          $t(
            '既然线上展会能让千万名无法亲临现场的专业买家和供应商参与进来，那么如何从设计的角度发力，让用户身临其境，提供最佳的用户体验，最大限度的发挥线上优势呢？'
          )
        }}
      </p>

      <h2>{{ $t('目前B类线上展会视觉形式') }}</h2>
      <div class="img-box">
        <img :src="imageList['image16']" alt="">
      </div>

      <h2>{{ $t('2.5d 场景在UBM线上展会的应用') }}</h2>
      <div class="subtitle">
        {{ $t('展会分析') }}
      </div>
      <p>
        <bold>{{ $t('行业属性') }}</bold> <br>{{
          $t('涵盖了皮革/服装/面料/饰品/鞋包行业的综合型展销会。')
        }}
      </p>
      <p>
        <bold>{{ $t('目标人群') }}</bold> <br>{{
          $t('从制造商到零售商等各类专业人群。')
        }}
      </p>
      <p>
        <bold>{{ $t('展会特点') }}</bold> <br>{{
          $t(
            '展会偏向展销性质，展位样式面积统一标准，保证最佳坪效比，固定标准的逛展路径。'
          )
        }}
      </p>
      <div class="img-box">
        <img :src="imageList['image17']" alt="">
      </div>

      <div class="subtitle">
        {{ $t('设计策略') }}
      </div>
      <p>
        <br>{{
          $t(
            '结合 2.5d 标准化搭建场景的优势，结合俯视视角的特点在线上搭建完整展会场景，模拟真实的线下场景和逛展体验，加强线上展会临场感，进而增强用户信任感，优化用户找商寻品效率，促进下单转化。'
          )
        }}
      </p>

      <div class="subtitle">
        {{ $t('设计解析') }}
      </div>
      <p>
        <bold>{{ $t('全局概览') }}</bold> <br>{{
          $t(
            '线上展会有五大行业近50个供应商，通过俯视的视角，让用户能快速概览展会全局，一屏内展示8～9个供应商，让用户能快速定位目标行业，提升效率，让用户感觉掌控全局。'
          )
        }}
      </p>
      <p>
        <bold>{{ $t('路径导航') }}</bold> <br>{{
          $t(
            '区别以往货架式寻品体验，以主路径贯穿整个展会，引导用户按照设计的路线浏览页面，模拟线下展会逛展体验，提升临场感。'
          )
        }}
      </p>
      <div class="img-box">
        <img :src="imageList['image18']" alt="">
      </div>
      <p>
        <bold>{{ $t('展位标准建立') }}</bold> <br>{{
          $t(
            '线下展会展位一般以1mx1m或者1mx2m的面积为标准，为了真实模拟现场情况，线上展会同样以 1x1 的单元格为基础建立一套标准的展位体系，还原真实线下场景，进一步增强场景代入感，标准化的展台场景和行业色更符合B类贸易专业性，同时赋予不同行业展台以不同颜色也能提升用户找商寻品效率。'
          )
        }}
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1ivR8EFzqK1RjSZFoXXbfcXXa-522-171.png"
          alt=""
        >
      </div>
      <div class="img-box">
        <img :src="imageList['image19']" alt="">
      </div>
      <p>
        <bold>{{ $t('页面展示') }}</bold>
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1Dxh.EIfpK1RjSZFOXXa6nFXa-517-523.png"
          alt=""
        >
      </div>
      <p>
        {{ $t('上一篇') }}:&nbsp;&nbsp;<a href="../language/index.html">{{ $t('设计语言概述') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  线上B类展会视觉形式探索:
    'Exploring visual forms in online category B exhibitions',
  线下展会及线上展会特点: 'Characteristics of online and offline exhibitions',
  '国际化展会能为专业人士提供最新零售趋势和商业解决方案，在短时间内聚集大量专业买家卖家，买卖双方面对面交流，真实接触到产品，产品体验模式丰富，相对于线上场景，买家更有信任感。':
    'International exhibitions can provide commercial solutions for professionals, as well as inform of the latest trends. A large number of buyers and sellers are gathered within a short period, with both sides interacting face to face. There is real product exposure, offering a rich product experience, which gives buyers a greater sense of trust compared to online scenarios.',
  线上展会视觉形式探索: 'Exploring online exhibition visual forms',
  '既然线上展会能让千万名无法亲临现场的专业买家和供应商参与进来，那么如何从设计的角度发力，让用户身临其境，提供最佳的用户体验，最大限度的发挥线上优势呢？':
    'Since online exhibitions can let millions of professional buyers and providers participate (they are otherwise unable to participate in person in offline exhibitions), how do we give them the best experience possible? How can we make it as if they are there in person, and push the advantages offered by online exhibitions to the greatest extent possible?',
  目前B类线上展会视觉形式:
    'Current visual forms in B category online exhibitions',
  '2.5d 场景在UBM线上展会的应用':
    '2.5d Applications of scenarios in UBM online exhibitions',
  展会分析: 'Exhibition Analysis',
  行业属性: 'Industry Attributes',
  '涵盖了皮革/服装/面料/饰品/鞋包行业的综合型展销会。':
    'Combined trade fair that covers the leather/fashion/textile/jewelry/shoes & bag industries.',
  目标人群: 'Target Audience',
  '从制造商到零售商等各类专业人群。':
    'Professionals in the manufacturing industry, retail, and other sectors.',
  展会特点: 'Exhibition Characteristics',
  '展会偏向展销性质，展位样式面积统一标准，保证最佳坪效比，固定标准的逛展路径。':
    'The exhibition is oriented towards quality, exhibition booths areas are standardized to optimize floor usage, browsing pathways are fixed.',
  设计策略: 'Design Strategy',
  '结合 2.5d 标准化搭建场景的优势，结合俯视视角的特点在线上搭建完整展会场景，模拟真实的线下场景和逛展体验，加强线上展会临场感，进而增强用户信任感，优化用户找商寻品效率，促进下单转化。':
    'Creating a complete exhibition scene online by integrating the advantages of the 2.5d standard in scenario creation and "bird’s eye view" features. Actual exhibition scenes and the browsing experience are simulated to create a sense of realism online, this will strengthen the user’s sense of trust and increase the efficiency of the process in which the user looks for what he wants, thereby enhancing conversion to orders.',
  设计解析: 'Design Analysis',
  全局概览: 'Global Overview',
  '线上展会有五大行业近50个供应商，通过俯视的视角，让用户能快速概览展会全局，一屏内展示8～9个供应商，让用户能快速定位目标行业，提升效率，让用户感觉掌控全局。':
    'The online exhibition will consist of close to 50 vendors from five major industries. Users can glance over the entire exhibition with the help of "bird’s eye view" angles. 8-9 vendors can be displayed in one screen, this lets users locate the desired industry quickly, hence improving efficiency and gives users a sense of control.',
  路径导航: 'Path Navigator',
  '区别以往货架式寻品体验，以主路径贯穿整个展会，引导用户按照设计的路线浏览页面，模拟线下展会逛展体验，提升临场感。':
    'This is unlike the traditional experience of going through rows of shelves. A main pathway permeates the entire exhibition, the user is guided to browse the page according to its design intentions. The experience of browsing a real exhibition is simulated, providing a sense of realism.',
  展位标准建立: 'Setting exhibition booth standards',
  '线下展会展位一般以1mx1m或者1mx2m的面积为标准，为了真实模拟现场情况，线上展会同样以 1x1 的单元格为基础建立一套标准的展位体系，还原真实线下场景，进一步增强场景代入感，标准化的展台场景和行业色更符合B类贸易专业性，同时赋予不同行业展台以不同颜色也能提升用户找商寻品效率。':
    'Real exhibition booths usually follow the1m x 1m or 1m x 2m area standard. To simulate actual exhibition conditions, a system of basic 1x1 units will also be enacted for online exhibitions to give the feel of a real exhibition and enhance realism. The standardized booths and color system for industries will suit the professionalism expected in the B category. At the same time, assigning different colors for different industries can also improve efficiency for user searches.',
  页面展示: 'Page display'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('方法 & 过程')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-method {
  header {
    position: relative;
    height: 219px;
    padding: 0 120px;
    background: #ebebeb;
    background-image: url('https://img.alicdn.com/tfs/TB15B03ENTpK1RjSZFKXXa2wXXa-1670-240.png');
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
    color: #333;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
  }
  .el-tabs .el-tabs__item.is-active {
    font-weight: bold;
  }

  .el-tabs .el-tabs__active-bar {
    height: 4px;
    background: #333;
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

  .content h4 {
    padding-bottom: 10px;
    color: #666;
    font-size: 20px;
    font-weight: normal;
    line-height: 18px;
  }
  .content h5 {
    color: #666;
    font-size: 14px;
    line-height: 40px;
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
  .content .subtitle {
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
  }

  .img-box {
    margin-bottom: 60px;
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

  .content p a {
    color: #999;
  }
}
</style>
