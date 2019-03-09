const messageMap = {
  '原 fusion 官网已迁移:': 'The original fusion website has been moved to:',
  点击前往: 'Click Here',
  品牌: 'BRAND',
  设计指导: 'GUIDELINES',
  资料库: 'LIBRARY',
  '本网站由阿里巴巴国际用户体验部 - B2B品牌组维护':
    'This website is maintained by alibaba international user experience department-b2b brand group',
  '我们致力于通过提升体验来帮助全球中小买卖家。 如果您有任何建议，请随时与我们联系: yanzuo.zp@alibaba-inc.com':
    'We are committed to helping small and medium-sized traders around the world by enhancing the experience. If you have any suggestions, please feel free to contact us: yanzuo.zp@alibaba-inc.com',
  品牌故事: 'Brand Story',
  愿景: 'Vision',
  目标用户: 'Target Audience',
  品牌个性: 'Brand Personality',
  关键词: 'Keywords',
  设计原则: 'Design Principles',
  品牌语调: 'Brand Voice',
  产品: 'Product',
  邮件: 'EDM',
  文章: 'Article',
  设计语言: 'Design Language',
  设计语言概述: 'Overview',
  设计元素: 'Design Element',
  设计关系: 'Relationship',
  设计框架: 'Design Framework',
  设计框架概述: 'Overview',
  视觉规范: 'Visual Guidelines',
  色彩: 'Color',
  栅格: 'Grid',
  间距: 'Spacing',
  图标: 'Icon',
  插画: 'Illustration',
  字体: 'Font',
  图片: 'Photograph',
  创意设计: 'Creative Design',
  语境: 'Context',
  范围: 'Range',
  '方法 & 过程': 'Method & Process',
  '管理 & 用户感知验证': 'Management & User verification',
  体验数据: 'Experience Data',
  工具: 'Tools',
  了解更多: 'Learn More',
  '如有任何疑问，': 'If you have any question, ',
  '可联系yanzuo.zp@alibaba-inc.com': 'please email: yanzuo.zp@alibaba-inc.com',
  '即将上线，敬请期待': 'Coming Soon...',
  设计模式库: 'Design Library',
  词汇库: 'Glossary',
  体验数据库: 'Experience Database',
  设计思维: 'Design Thinking',
  Token规范: 'Token',
  尺寸: 'Size',
  点击这里: 'Click Here',
  全球贸易和海关: 'Global Trade and Customs',
  一般: 'General',
  资金及外滙词汇: 'Capital and Foreign Exchange Vocabulary',
  国际贸易出口流程及相关外贸术语:
    'International Trade Export Process and Related Foreign Trade Terms',
  动效: 'Animation',
  设计样式: 'PATTERN',
  PC端测试: 'PC Testing',
  无线端测试: 'Mobile Testing',
  下载: 'Download',
  线条: 'Line',
  导航: 'Navigation',
  卡片: 'Card',
  按钮: 'Button',
  样式: 'Pattern',
  组件: 'Component',
  开关: 'Switch',
  单选框: 'Radio',
  复选框: 'Checkbox',
  滑块选择: 'Range',
  数字输入框: 'Number Picker',
  概述: 'Overview',
  卖家: 'Sellers',
  买家: 'Buyers',
  对话框: 'Dialog',
  上一篇: 'Previous',
  下一篇: 'Next'
}

export const transformLocales = value => {
  const keys = Object.keys(value)

  return {
    cn: keys.reduce((map, item) => {
      return {
        ...map,
        [item]: item
      }
    }, {}),
    en: keys.reduce((map, item) => {
      return {
        ...map,
        [item]: value[item]
      }
    }, {})
  }
}

export const { cn, en } = transformLocales(messageMap)
