<template>
  <div class="page-library-vocabulary-2">
    <header>
      <h1 class="think">
        {{ $t('全球贸易和海关') }}
      </h1>
    </header>

    <div class="content">
      <h2>{{ $t('eWTP项目下的全球贸易和海关缩写') }}</h2>
      <p>{{ $t('海关申报信息') }}</p>
      <el-table
        :show-header="false"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column prop="name" width="180" />
        <el-table-column prop="label" />
      </el-table>
      <h2 style="margin-top: 20px;">
        {{ $t('产品信息') }}
      </h2>
      <el-table
        :show-header="false"
        :data="tableData2"
        border
        style="width: 100%"
      >
        <el-table-column prop="name" width="180" />
        <el-table-column prop="label" />
      </el-table><br><br><br><br>
      <p>
        {{ $t('上一篇') }}:&nbsp;&nbsp;<a href="../vocabulary-1/index.html">{{ $t('一般') }}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {{ $t('下一篇') }}:&nbsp;&nbsp;<a href="../vocabulary-3/index.html">{{ $t('资金及外滙词汇') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  eWTP项目下的全球贸易和海关缩写:
    'Global Trade and Customs Abbreviations under eWTP Project',
  海关申报信息: 'Customs Declaration Information',
  产品信息: 'Product Info'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('全球贸易和海关')
    }
  },
  data() {
    return {
      tableData: [
        {
          name: 'Date of Export',
          label: '出口日期'
        },
        {
          name: 'Consignee',
          label: '收货人'
        },
        {
          name: 'Port/Place of Export',
          label: '港口/出口地点'
        },
        {
          name: 'Port/Place of Discharge',
          label: '港口/卸货地点'
        },
        {
          name: 'Transhipment Cargo',
          label: '中转货物'
        },
        {
          name: 'Customs Station',
          label: '海关关口'
        },
        {
          name: 'Terminal Operator',
          label: '码头运营商'
        },
        {
          name: 'Sea',
          label: '海运'
        },
        {
          name: 'Air',
          label: '空运'
        },
        {
          name: 'Country of Final Destination',
          label: '最终目的国'
        },
        {
          name: 'Payment for Goods Received',
          label: '付汇国'
        },
        {
          name: 'Declarant',
          label: '报关员'
        },
        {
          name: 'Amount Received',
          label: '收到金额'
        },
        {
          name: 'Invoice Value',
          label: '发票面额'
        },
        {
          name: 'Invoice No',
          label: '发票号码'
        },
        {
          name: 'Invoice Date',
          label: '发票日期'
        },
        {
          name: 'Inco Term',
          label: '贸易术语'
        },
        {
          name: 'FOB',
          label: '离岸价 Free On Board'
        },
        {
          name: 'CIF',
          label: '成本加保险费加运费 Cost Insurance and Freight'
        },
        {
          name: 'Freight',
          label: '运费'
        },
        {
          name: 'Insurance',
          label: '保险'
        },
        {
          name: 'Other Charges',
          label: '其他费用'
        },
        {
          name: 'Terminal Charges',
          label: '码头费用'
        },
        {
          name: 'Shipment Type',
          label: '货运类型'
        },
        {
          name: 'FULL',
          label: '整柜'
        },
        {
          name: 'PARTIAL',
          label: '拼箱'
        },
        {
          name: 'Packing Material',
          label: '包装材料'
        },
        {
          name: 'Exemption Type',
          label: '豁免类型'
        },
        {
          name: 'Exemption Ref.No.',
          label: '豁免参考号'
        },
        {
          name: 'Cargo Class',
          label: '货物类别'
        },
        {
          name: 'Cargo Description',
          label: '货物描述'
        },
        {
          name: 'Gross Weight',
          label: '总重量'
        },
        {
          name: 'Measurement',
          label: '尺寸'
        },
        {
          name: 'Container',
          label: '集装箱'
        },
        {
          name: 'Marks and Nos.',
          label: '唛头及号码'
        },
        {
          name: 'No. and Type of Package',
          label: '包装编号和类型'
        }
      ],
      tableData2: [
        {
          name: 'HS code',
          label: '海关编码'
        },
        {
          name: 'Declare label',
          label: '报关名称'
        },
        {
          name: 'Descrtiption',
          label: '描述'
        },
        {
          name: 'Purpose',
          label: '用途'
        },
        {
          name: 'Origin Country',
          label: '原产地'
        },
        {
          name: 'Statistical QTY',
          label: '统计数量'
        },
        {
          name: 'FOB Value',
          label: '离岸价值'
        },
        {
          name: 'Supervision Condition',
          label: '监督条件'
        },
        {
          name: 'Duty Method',
          label: '征税方法'
        },
        {
          name: 'Export Duty',
          label: '出口税'
        },
        {
          name: 'Specific Duty',
          label: '特定关税'
        },
        {
          name: 'Gazetted',
          label: '核定价格 （大概意思，就是海关审核后的一个价格)'
        },
        {
          name: 'Exemption Rate',
          label: '豁免率'
        }
      ]
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-library-vocabulary-2 {
  header {
    position: relative;
    text-align: left;
    background: #ebebeb;
    padding: 0 120px;
    background-image: url('https://img.alicdn.com/tfs/TB1JNV6EPDpK1RjSZFrXXa78VXa-3260-720.png');
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
    padding: 80px 500px 60px 120px;
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
    margin-bottom: 30px;
    letter-spacing: 0.4px;
  }
  .content p a {
    color: #999;
  }
  .content h2 {
  }
  .content h3 {
    padding-bottom: 0;
    margin-bottom: 20px;
  }
  .content h4 {
    font-size: 20px;
    color: #666666;
    line-height: 18px;
    font-weight: normal;
  }

  .content h5 {
    font-size: 16px;
    color: #000;
    line-height: 40px;
    font-weight: 600;
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
    line-height: 22px !important;
    padding-bottom: 20px;
    color: #666 !important;
    letter-spacing: 0.4px;
  }
  .head {
    font-size: 32px;
    padding-top: 70px;
    line-height: 1.5;
    margin-bottom: 0px !important;
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

  tbody {
    padding-bottom: 40px;
  }
}
</style>
