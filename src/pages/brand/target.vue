<template>
  <div class="page-brand-target">
    <header>
      <h1>{{ $t('目标用户') }}</h1>
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane :label="$t('概述')" name="tab1" />
        <el-tab-pane :label="$t('买家')" name="tab2" />
        <el-tab-pane :label="$t('卖家')" name="tab3" />
      </el-tabs>
    </header>
    <transition name="el-fade-in-linear">
      <div
        key="1"
        v-if="activeName === 'tab1'"
        class="content summary-content"
      >
        <p>
          {{
            $t(
              '目标客户是我们专注服务的对象，了解我们的客户以帮助你更加设身处地的思考，使得设计更加有针对性，最终帮助用户达成目标。'
            )
          }}<br>
          {{
            $t(
              'Alibaba.com作为一个一站式的平台，服务全球的买家及卖家，由于平台的B类特性，因此，我们平台的客户有着许多共同特质：'
            )
          }}<br>
        </p>
        <br>
        <h2>{{ $t('B类特质') }}</h2>
        <div class="summary-item">
          <div class="left">
            {{ $t('1. 专业化') }}
          </div>
        </div>
        <div class="summary-item">
          <div class="left">
            {{ $t('2. 重复购买') }}
          </div>
          <div class="right">
            {{
              $t(
                '与C类基于生活场景的多类目购买习惯不同，我们服务的用户会更加聚焦某些类目，且会重复购买。'
              )
            }}
          </div>
        </div>
        <div class="summary-item">
          <div class="left">
            {{ $t('3. 参数化') }}
          </div>
          <div class="right">
            {{
              $t('用户会更加关注商品的各项数据。对于商品的参数更为敏感。')
            }}
          </div>
        </div>
        <div class="summary-item">
          <div class="left">
            {{ $t('4. 定制化诉求') }}
          </div>
          <div class="right">
            {{ $t('不仅仅聚焦在现货，对于很多的商品有定制化的诉求。') }}
          </div>
        </div>
        <div class="summary-item">
          <div class="left">
            {{ $t('5. 注重隐私') }}
          </div>
          <div class="right">
            {{
              $t(
                '分享的意愿低，基于商业属性在意自己的各项隐私对卖家资⾦、交易信息、客户信息相关内容敏感。'
              )
            }}
          </div>
        </div>
        <div class="summary-item">
          <div class="left">
            {{ $t('6. 大量采购') }}
          </div>
        </div>
        <div class="summary-item">
          <div class="left">
            {{ $t('7. 多角色') }}
          </div>
          <div class="right">
            {{ $t('长链路中多角色共同参与决策及操作。') }}
          </div>
        </div>
        <br><br><br>
        <h2>{{ $t('国际化特质') }}</h2>
        <div class="summary-item">
          <div class="left">
            {{ $t('国家差异性') }}
          </div>
          <div class="right">
            {{ $t('我们的用户来自世界各地，有着不同的语言及文化背景。') }}
          </div>
        </div>
        <br><br><br>
        <p>
          {{ $t('上一篇') }}:&nbsp;&nbsp;<a href="../mission/index.html">{{ $t('愿景') }}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {{ $t('下一篇') }}:&nbsp;&nbsp;<a href="../keywords/index.html">{{ $t('关键词') }}</a>
        </p>
      </div>

      <div key="2" v-if="activeName === 'tab2'" class="content">
        <h2>{{ $t('企业规模') }}</h2>
        <p>
          {{
            $t(
              '我们按照企业每年的采购金额，将平台用户分为3种类型：中大型买家，中型买家，小型买家。'
            )
          }}
        </p>
        <div class="buy-item">
          <div class="left">
            <div class="left-title">
              {{ $t('中大型买家分布') }}
            </div>
            <div class="left-text">
              {{ $t('· 快速崛起的线上零售商；') }}<br>
              {{ $t('· 中大型自有品牌零售商；') }}
            </div>
            <div class="left-text">
              {{ $t('· 批发零售多种经营商家；') }}<br>
              {{ $t('· 采购代理；') }}<br>
              {{ $t('· 典型分销商/渠道商/品牌代理商；') }}<br>
            </div>
          </div>
          <div class="right">
            500K-5M
          </div>
        </div>
        <div class="buy-item">
          <div class="left">
            <div class="left-title">
              {{ $t('中型买家分布') }}
            </div>
            <div class="left-text">
              {{ $t('· AMZ腰部卖家；') }}<br>
              {{ $t('· 线下零售杂货店；') }}<br>
              {{ $t('· 网红/KOL零售；') }}<br>
              {{ $t('· 线下零售服务一体店；') }}
            </div>
            <div class="left-text">
              {{ $t('· 小型线下分销商；') }}<br>
              {{ $t('· 批发市场的档口店铺；') }}<br>
              {{ $t('· 典型分销商/渠道商/品牌代理商；') }}
            </div>
          </div>
          <div class="right">
            100-500K
          </div>
        </div>
        <div class="buy-item">
          <div class="left">
            <div class="left-title">
              {{ $t('小型买家') }}
            </div>
            <div class="left-text">
              {{ $t('· 线上掘金的创业青年；') }}<br>
              {{ $t('· 微商；') }}<br>
              {{ $t('· 手工艺人，手工作坊；') }}<br>
              {{ $t('· 独立/个人设计师品牌；') }}
            </div>
            <div class="left-text">
              {{ $t('· 中国独立买手；') }}<br>
              {{ $t('· SOHO买手；') }}<br>
              {{ $t('· 刚起步的贸易商；') }}
            </div>
          </div>
          <div class="right">
            ＜100K
          </div>
        </div>
        <h2>{{ $t('角色分类') }}</h2>
        <p>
          {{
            $t(
              '我们按照企业每年的采购金额，将平台用户分为3种类型：中大型买家，中型买家，小型买家'
            )
          }}
        </p>
        <div class="buy-item buy-item-2">
          <div class="left-text">
            {{ $t('· 采购员；') }}
          </div>
          <br>
          <div class="left-text">
            {{ $t('· 采购代理；') }}
          </div>
          <br>
          <div class="left-text">
            {{ $t('· 个体零售商；') }}
          </div>
        </div>
        <h2>{{ $t('采购员 中大型') }}</h2>
        <p>
          {{
            $t(
              '职员有10,000人，公司内部分技术部、市场部、销售部等多个部门，部门间职责、分工明确。Mark所在的市场部共有3-4名员工，主要负责不断发现市场上新产品/供应商，寻找未来商业机会，据此确定采购什么、应从何处采购、价格和船期等，待这些方面与合适的供应商谈妥之后，移交执行购买(purchasing)的部门。'
            )
          }}
        </p>
        <h2>{{ $t('采购代理 小型') }}</h2>
        <p>
          {{
            $t(
              '公司成立于5年前，主要通过互联网在线采购的方式为其他公司提供采购服务，负责采购的各个环节，包括采购适销商品、验货、收货、送货等服务。它致力于为客户提供质量符合要求的产品，同时所提供的物资价格比其客户自己采购时低。目前员工4人，公司规模较小，无部门区分。'
            )
          }}
        </p>
        <h2>{{ $t('个体零售商 小型') }}</h2>
        <p>
          {{
            $t(
              'Sophie的小店8个月前开张，一边在实体店里售卖，一边接待一些eBay的买家。小店新开，需要不断充实产品种类，以此来吸引买家，因此她每隔一个月就会进行一次采购，实现店铺的产品上新或是销量较好的一些产品的补货。她通常从Alibaba\AliExpress或是品牌清仓店进货。'
            )
          }}
        </p>
        <h2>{{ $t('买家故事') }}</h2>
        <h3>{{ $t('Lilian / 为了创业梦而打拼的零售商') }}</h3>
        <p>
          {{
            $t(
              'Lilian是芝加哥市某社区大学的招生主任，平时上班时间较灵活。Lilian热爱时尚尤其是各种有设计感的配饰。2年前在好友的鼓励下开始利用业余时间做形象设计，兼售配饰和假发。客源通过朋友和客户的口耳相传。她的个人Youtube频道目前有1万个订阅，还在Facebook上创建了个人工作室的粉丝页面，方便与客户互动。'
            )
          }}
        </p>
        <h3>{{ $t('Michael / 建立口碑做大做强的小型批发商') }}</h3>
        <p>
          {{
            $t(
              'Michael在纽约市布鲁克林与人合伙经营一家美甲店，开业5年，6名员工。65%收入来自店内美甲服务，35%为美甲产品零售批发和美甲店家具批发。批发业务的客人多是美甲店店主。美甲店有Facebook粉丝页面做上新和促销的展示。销售通过朋友和客户的口耳相传。仓库距美甲店坐地铁需1小时。'
            )
          }}
        </p>
        <h3>{{ $t('Ronald / 走向多元化经营的中型批发商') }}</h3>
        <p>
          {{
            $t(
              'Ronald是洛杉矶地区一家贸易公司的CEO和创始人，公司成立12年，员工10名，新加坡有分公司。主营打印办公耗材的进出口和批发业务。仓库与办公室在同一地点。'
            )
          }}
        </p>

        <p>
          {{ $t('上一篇') }}:&nbsp;&nbsp;<a href="../mission/index.html">{{ $t('愿景') }}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {{ $t('下一篇') }}:&nbsp;&nbsp;<a href="../keywords/index.html">{{ $t('关键词') }}</a>
        </p>
      </div>
      <div key="3" v-if="activeName === 'tab3'" class="content">
        <div class="item">
          <div>
            <div class="left">
              <div class="img-box">
                <img
                  src="https://img.alicdn.com/tfs/TB1jr0IENYaK1RjSZFnXXa80pXa-386-257.png"
                  alt=""
                >
              </div>
            </div>
            <div class="right">
              <p class="head">
                {{ $t('即将上线，敬请期待') }}
              </p>
              <p class="three02">
                <br>{{ $t('如有任何疑问，') }}<br>{{
                  $t('可联系yanzuo.zp@alibaba-inc.com')
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  '目标客户是我们专注服务的对象，了解我们的客户以帮助你更加设身处地的思考，使得设计更加有针对性，最终帮助用户达成目标。':
    'The target customer is our focus on the service, understand our customers to help you think more about the situation, make the design more targeted, and ultimately help users achieve their goals.',
  'Alibaba.com作为一个一站式的平台，服务全球的买家及卖家，由于平台的B类特性，因此，我们平台的客户有着许多共同特质：':
    'Alibaba.com serves as a one-stop platform for buyers and sellers around the world. Due to the B-class nature of the platform, our platform customers have many common qualities:',
  B类特质: 'B-class Trait',
  '与C类基于生活场景的多类目购买习惯不同，我们服务的用户会更加聚焦某些类目，且会重复购买。':
    'Unlike the C-class multi-category buying habits based on life scenes, the users we serve will focus more on certain categories and will repeat purchases.',
  '1. 专业化': '1. Specialization',
  '2. 重复购买': '2. Repeat Purchase',
  '3. 参数化': '3. Parameterization',
  '用户会更加关注商品的各项数据。对于商品的参数更为敏感。':
    'Users will pay more attention to the data of the goods. More sensitive to the parameters of the commodity',
  '4. 定制化诉求': '4. Customized Appeal',
  '不仅仅聚焦在现货，对于很多的商品有定制化的诉求。':
    'Not only focus on the spot, but also a customized appeal for many products.',
  '6. 大量采购': '6. Large purchases',
  '5. 注重隐私': '5. Focus on Privacy',
  '分享的意愿低，基于商业属性在意自己的各项隐私对卖家资⾦、交易信息、客户信息相关内容敏感。':
    'Low willingness to share, based on business attributes, care about their privacy, sensitive to seller funds, transaction information, customer information,',
  '7. 多角色': '7. Multiple Roles',
  '长链路中多角色共同参与决策及操作。':
    'Multiple roles in long links participate in decision making and operations',
  国际化特质: 'International Trait',
  国家差异性: 'National Difference',
  '我们的用户来自世界各地，有着不同的语言及文化背景。':
    'Our users come from all over the world and have different language and cultural backgrounds.',
  '点击 ': 'Click on the',
  ' 买家 ': ' buyers ',
  ' 卖家 ': ' sellers ',
  ' 或者 ': ' or',
  '，了解更为详细的内容。': 'for more details.',
  企业规模: 'Business Scale',
  '我们按照企业每年的采购金额，将平台用户分为3种类型：中大型买家，中型买家，小型买家。':
    'According to the annual purchase amount of the company, we divide the platform users into three types: medium and large buyers, medium buyers, small buyers.',
  中大型买家分布: 'Distribution of Medium and Large Buyers',
  '· 快速崛起的线上零售商；': '· Fast-rising online retailer；',
  '· 中大型自有品牌零售商；': '· Medium and large private label retailers;',
  '· 批发零售多种经营商家；': '· Wholesale and retail diversified business;',
  中型买家分布: 'Medium Buyer Distribution',
  '· AMZ腰部卖家；': '· AMZ waist sellers;',
  '· 线下零售杂货店；': '· offline retail grocery store;',
  '· 网红/KOL零售；': '· Celebrity / KOL retail；',
  '· 线下零售服务一体店；': '· Offline retail service one store;',
  '· 小型线下分销商；': '· Small offline distributors;',
  '· 批发市场的档口店铺；': '· Wholesale market stalls;',
  '· 典型分销商/渠道商/品牌代理商；':
    '· Typical distributors / distributors / brand agents;',
  小型买家: 'Small Buyers',
  '· 线上掘金的创业青年；': '· Online Nuggets entrepreneurial youth;',
  '· 微商；': '· Micro-business;',
  '· 手工艺人，手工作坊；': '· Craftsman, hand-workshop;',
  '· 独立/个人设计师品牌；': '· independent / personal designer brand;',
  '· 中国独立买手；': '· Chinese independent buyers;',
  '· SOHO买手；': '· SOHO buyers;',
  '· 刚起步的贸易商；': '· Start-up traders;',
  角色分类: 'Role Classification',
  '我们按照企业每年的采购金额，将平台用户分为3种类型：中大型买家，中型买家，小型买家':
    'According to the annual purchase amount of the company, we divide the platform users into three types: medium and large buyers, medium buyers, small buyers.',
  '· 采购员；': '· Buyer;',
  '· 采购代理；': '· Purchasing agent;',
  '· 个体零售商；': '· Individual retailer;',
  '采购员 中大型': 'Buyer: Medium and large',
  '采购代理 小型': 'Purchasing agent: Medium and large',
  '个体零售商 小型': 'Individual retailer: Small',
  '职员有10,000人，公司内部分技术部、市场部、销售部等多个部门，部门间职责、分工明确。Mark所在的市场部共有3-4名员工，主要负责不断发现市场上新产品/供应商，寻找未来商业机会，据此确定采购什么、应从何处采购、价格和船期等，待这些方面与合适的供应商谈妥之后，移交执行购买(purchasing)的部门。':
    'There are 10,000 employees, and some departments in the company, such as the technical department, the marketing department, and the sales department, have clear division of responsibilities and division of labor. Mark’s marketing department has 3-4 employees and is responsible for continuously discovering new products/suppliers on the market, looking for future business opportunities, and determining what to buy, where to purchase, price and schedule, etc. After the appropriate supplier has negotiated, hand over the department that performs the purchase.',
  '公司成立于5年前，主要通过互联网在线采购的方式为其他公司提供采购服务，负责采购的各个环节，包括采购适销商品、验货、收货、送货等服务。它致力于为客户提供质量符合要求的产品，同时所提供的物资价格比其客户自己采购时低。目前员工4人，公司规模较小，无部门区分。':
    'Founded 5 years ago, the company provides procurement services for other companies through online online procurement. It is responsible for all aspects of procurement, including procurement of marketable goods, inspection, receipt, delivery and other services. It is committed to providing customers with quality-compliant products, while offering a lower price than their customers purchase. At present, there are 4 employees, the company is small in scale and has no departmental distinction.',
  'Sophie的小店8个月前开张，一边在实体店里售卖，一边接待一些eBay的买家。小店新开，需要不断充实产品种类，以此来吸引买家，因此她每隔一个月就会进行一次采购，实现店铺的产品上新或是销量较好的一些产品的补货。她通常从AlibabaAliExpress或是品牌清仓店进货。':
    'Sophie store opened eight months ago and sold in physical stores while hosting some eBay buyers. The new store is open, and it needs to constantly enrich the product category to attract buyers. Therefore, she will purchase once every other month to replenish the products of the store or the products with better sales. She usually purchases from Alibaba/AliExpress or a brand clearance store.',
  买家故事: 'Stories',
  'Lilian / 为了创业梦而打拼的零售商':
    'Lilian / Retailer working hard for an entrepreneurial dream',
  'Lilian是芝加哥市某社区大学的招生主任，平时上班时间较灵活。Lilian热爱时尚尤其是各种有设计感的配饰。2年前在好友的鼓励下开始利用业余时间做形象设计，兼售配饰和假发。客源通过朋友和客户的口耳相传。她的个人Youtube频道目前有1万个订阅，还在Facebook上创建了个人工作室的粉丝页面，方便与客户互动。':
    'Lilian is an admissions officer at a community college in Chicago, and is usually flexible at work. Lilian loves fashion, especially a variety of design accessories. Two years ago, with the encouragement of friends, I started to use my spare time to do image design, and also sell accessories and wigs. The source of the customer is passed on by the friends and customers. Her personal Youtube channel currently has 10,000 subscriptions, and she has created a fan page for her personal studio on Facebook to facilitate interaction with customers.',
  'Michael / 建立口碑做大做强的小型批发商':
    'Michael / Establish a small wholesaler with a strong reputation',
  'Michael在纽约市布鲁克林与人合伙经营一家美甲店，开业5年，6名员工。65%收入来自店内美甲服务，35%为美甲产品零售批发和美甲店家具批发。批发业务的客人多是美甲店店主。美甲店有Facebook粉丝页面做上新和促销的展示。销售通过朋友和客户的口耳相传。仓库距美甲店坐地铁需1小时。':
    'Michael is partnering with a manicure store in Brooklyn, New York, for five years and six employees. 65% of the revenue comes from in-store nail services, and 35% is for nail products retail and nail shop furniture wholesale. Most of the customers in the wholesale business are the owner of the nail shop. Nail shops have Facebook fan pages to showcase new and promotional displays. Sales are passed on by word of mouth between friends and customers. The warehouse takes 1 hour by subway from the nail shop.',
  'Ronald / 走向多元化经营的中型批发商':
    'Ronald / Medium-sized wholesaler moving towards diversification',
  'Ronald是洛杉矶地区一家贸易公司的CEO和创始人，公司成立12年，员工10名，新加坡有分公司。主营打印办公耗材的进出口和批发业务。仓库与办公室在同一地点。':
    'Ronald is the CEO and founder of a trading company in the Los Angeles area. The company has been in business for 12 years, with 10 employees and a branch office in Singapore. Mainly prints the import, export and wholesale business of office supplies. The warehouse is in the same location as the office.'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('目标用户')
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
.page-brand-target {
  header {
    position: relative;
    text-align: left;
    background: #000;
    padding: 0 120px;
    background-image: url('https://img.alicdn.com/tfs/TB1jdXxEHvpK1RjSZFqXXcXUVXa-1657-240.png');
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
    text-decoration: underline;
  }

  .three a {
    color: #000;
  }

  .content p {
    font-size: 14px;
    line-height: 26px;
    color: #333333;
    margin-bottom: 60px;
  }

  .content p a {
    color: #999;
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

  .summary-content {
  }

  .summary-content {
  }

  .content h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: #333333;
  }

  .content span {
    color: #999999;
    padding-left: 3px;
    padding-right: 5px;
  }

  .summary-item {
    height: 130px;
    border-radius: 4px;
    background-color: #1c1c1c;
    display: flex;
    align-items: center;
    max-width: 960px;
    margin-bottom: 10px;
    margin-top: 5px;
  }

  .summary-item .left {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: #ffffff;
    width: 30%;
    flex-basis: 30%;
    text-align: left;
    padding-left: 40px;
    flex-shrink: 0;
  }

  .summary-item .right {
    flex: 1;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    padding-right: 100px;
  }

  .buy-item {
    padding: 30px;
    border-radius: 4px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 960px;
    margin-bottom: 60px;
  }

  .buy-item .left {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: #333333;
  }

  .buy-item .left .left-title {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: #333333;
  }

  .buy-item .left .left-text {
    margin-top: 33px;
    font-size: 14px;
    font-weight: 500;
    line-height: 32px;
    color: #333333;
  }

  .buy-item .right {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: #303030;
    margin-right: 90px;
    text-align: center;
    line-height: 220px;
    font-size: 32px;
    font-weight: 500;
    line-height: 220px;
    color: #ffffff;
  }

  .buy-item-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .buy-item-2 .left-text {
    font-family: PingFangSC;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    color: #303030;
  }

  .three02 {
    line-height: 22px !important;
    padding-bottom: 20px;
    color: #666 !important;
    letter-spacing: 0.4px;
  }
  .head {
    font-size: 32px !important;
    padding-top: 70px;
    line-height: 1.5;
    margin-bottom: 0px !important;
  }
}
</style>
