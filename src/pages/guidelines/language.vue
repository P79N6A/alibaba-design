<template>
  <div class="page-language">
    <header>
      <h1>{{ $t('设计语言概述') }}</h1>
    </header>
    <div class="content">
      <p>
        {{
          $t(
            '我们的设计语言是我们后续一切设计的世界观表达，我们向用户描绘的世界的构成和环境、以何种方式呈现给用户、'
          )
        }}
        <br>
        {{
          $t('最终以何种规则输出呈现给用户，都是设计语言所涉及的范畴。')
        }}
      </p>
      <h1>{{ $t('拆解') }}</h1>
      <p>
        {{
          $t(
            '我们将“由具象到抽象，由现实向虚拟”的界面设计呈现的过程拆解为这两层：'
          )
        }}
        <br>
        <b>{{ $t('物理环境层：') }}</b>
        {{
          $t(
            '更趋近现实，模拟线下环境，设计语言主要把控线下环境在怎样的环境中呈现。'
          )
        }}
        <br>
        <b>{{ $t('抽象表达层：') }}</b>
        {{ $t('将物理层构建的世界以一致的规则呈现给用户。') }}
      </p>
      <div class="img-box">
        <img :src="imageList['image11']" alt>
      </div>

      <h1>{{ $t('分层') }}</h1>
      <h2>{{ $t('物理环境层') }}</h2>
      <p>
        {{
          $t(
            '大家都知道我们目前的线上体验都是从线下真实场景中物化抽象而生，因此物理层是最趋近用户线下环境的。我们alibaba.com是一个B类电商平台，又通过服务好买家从而给卖家带来商机和收益，因此我们的物理层更多可能模拟的是B类买家的采购环境。当然场景和内容都是由我们商业策略决定，我们设计语言所需要考虑的是我们alibaba.com的物理世界环境是什么样的：更趋近高端的品牌店，还是接地气的地摊杂货，是窗明几净的明朗环境，还是灯红酒绿的黑暗环境？'
          )
        }}
      </p>
      <div class="img-box02">
        <img src="https://img.alicdn.com/tfs/TB1CR5pEOLaK1RjSZFxXXamPFXa-601-272.png" alt>
      </div>
      <h5>
        {{
          $t(
            '在物理环境层中设计语言将定义我们Alibaba平台所处环境的：光源（冷暖、明暗、色彩）、秩序（信息密度、排列方式）、质感（内容的品质保证、精致感、一致性）。'
          )
        }}
      </h5>
      <h2>{{ $t('抽象表达层') }}</h2>
      <p>
        {{
          $t(
            '前面我们了解到物理层是一个三维世界，在抽象表达层我们同样强调Z轴的概念存在。但我们当然不是直接把物理层的3D世界照搬过来，而是以层的概念抽象。'
          )
        }}
      </p>
      <div class="img-box03">
        <img src="https://img.alicdn.com/tfs/TB14402EH2pK1RjSZFsXXaNlXXa-600-309.png" alt>
      </div>
      <p>
        <b>{{ $t('原因：') }}</b>
        {{
          $t('受用户对于互联网的认知、我们的业务现状、品牌和设计框架影响。')
        }}
        <br>
        <b>{{ $t('手法：') }}</b>
        {{
          $t(
            '所有的元素抽象以层的概念输出，以对用户的优先级高低来决定其前后顺序。'
          )
        }}
      </p>
      <div class="img-box04">
        <img :src="imageList['image12']" alt>
      </div>

      <p class="p5">
        <b>{{ $t('原则') }}</b>
        <br>
        {{
          $t('1. 以交互层的优先级为先，单个层的内容表达不可跨层呈现')
        }}
        <br>
        {{ $t('2. Z轴方向上离用户越接近优先级越高') }}
        <br>
        {{
          $t('3. 同一水平线上的内容优先级一致')
        }}
        <br>
        {{ $t('4. 层为隐性概念') }}
      </p>

      <h1>{{ $t('规则') }}</h1>
      <h2>{{ $t('物理层环境规则：光源、秩序、质感') }}</h2>
      <p>
        <b>{{ $t('光源') }}</b>
        <br>
        {{
          $t(
            '线光源决定我们平台基调，是后续所有设计元素明度、饱和度等等的前提'
          )
        }}
        <br>
        {{ $t('所以我们会从角度、色彩、亮度这几个角度去细化定义。') }}
      </p>
      <div class="img-box02">
        <img :src="imageList['image13']" alt>
      </div>
      <div class="img-box03">
        <img :src="imageList['image14']" alt>
      </div>
      <p>
        <b>{{ $t('秩序') }}</b>
        <br>
        {{
          $t(
            '秩序决定的是我们的平台传递的是诸如一个杂货市场、中档商铺还是高端精品店的用户感受，它规定了我们平台整体的信息密度&排布方式。'
          )
        }}
      </p>
      <div class="img-box03">
        <img src="https://img.alicdn.com/tfs/TB1KDWpENjaK1RjSZKzXXXVwXXa-600-287.png" alt>
      </div>
      <p>
        <b>{{ $t('质感') }}</b>
        <br>
        {{
          $t(
            '质感更多的是在场景搭建中保障内容的品质感、精致感、一致性，在材质表达上可以是木质、塑料、大理石、纸质，使用时可以根据场景的实际情况合理选择。'
          )
        }}
      </p>
      <div class="img-box">
        <img src="https://img.alicdn.com/tfs/TB1oE85ENTpK1RjSZFMXXbG_VXa-600-353.png" alt>
      </div>

      <h2>{{ $t('抽象表达层输出规则：位置、大小、距离、色彩') }}</h2>
      <p>
        <b>{{ $t('位置') }}</b>
        <br>
        {{
          $t(
            '元素在X/Y/Z轴的空间位置会导致设计呈现方式有不同的表达，如Z轴空间位置关系将导致设计呈现上的物体遮挡，突出卡片或画面之外的设计形式产生。'
          )
        }}
      </p>
      <div class="img-box03">
        <img src="https://img.alicdn.com/tfs/TB17ol7EQPoK1RjSZKbXXX1IXXa-604-458.png" alt>
      </div>
      <p>
        <b>{{ $t('大小') }}</b>
        <br>
        {{
          $t(
            '大小直接受到元素所属位置与用户的距离的影响，遵循近大远小的原则，我们会发现，距离用户越近的元素越大，'
          )
        }}
        <br>
        {{
          $t(
            '这直接影响我们的设计形式将从从前的卡片内模块变成更具冲击力的元素透出方式。'
          )
        }}
      </p>
      <div class="img-box03">
        <img src="https://img.alicdn.com/tfs/TB1PFhUESrqK1RjSZK9XXXyypXa-600-588.png" alt>
      </div>
      <p>
        <b>{{ $t('距离') }}</b>
        <br>
        {{
          $t(
            '距离人近的物体清晰，距离人远的物体模糊，基于这一原理，我们设计上可以通过加大背景模糊营造空间感，也可通过加入色彩遮罩，降低图片透明度达到同样的效果。'
          )
        }}
      </p>
      <div class="img-box03">
        <img src="https://img.alicdn.com/tfs/TB1vg00ENTpK1RjSZFGXXcHqFXa-606-464.png" alt>
      </div>
      <p>
        <b>{{ $t('色彩') }}</b>
        <br>
        <b>{{ $t('饱和度反差：') }}</b>
        {{
          $t(
            '前景的物体饱和度高，后景的物体饱和度低。两个颜色之间饱和度或明度数值相差越大，反差也就越大，反之亦然，看看具体的实例：如以下导航图，当前的人物图像明度较高，和低明度黑色背景形成高反差而容易先被注视。'
          )
        }}
        <br>
        <b>{{ $t('色相反差：') }}</b>
        {{
          $t(
            '下图中主色调为蓝色，蓝色行动点和整体颜色一致，层级相对较弱，而绿色行动点和蓝色在色相上的反差使得层级变高。'
          )
        }}
      </p>
      <div class="img-box03">
        <img src="https://img.alicdn.com/tfs/TB1pbN7EQvoK1RjSZFDXXXY3pXa-601-229.png" alt>
      </div>
      <p>
        {{ $t('下一篇') }}:&nbsp;&nbsp;
        <a href="../method/index.html">{{ $t('方法 & 过程') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {
  '我们的设计语言是我们后续一切设计的世界观表达，我们向用户描绘的世界的构成和环境、以何种方式呈现给用户、':
    'Our design language is the expression of world view in all of our subsequent designs. How the composition and environment of the world that we are trying to describe to users will present to them,',
  '最终以何种规则输出呈现给用户，都是设计语言所涉及的范畴。':
    'and in what output rules they will present to users are both covered by the design language.',
  拆解: 'Disassembling',
  '我们将“由具象到抽象，由现实向虚拟”的界面设计呈现的过程拆解为这两层：':
    'We have disassembled the process of interface design, i.e. "from concretization to abstractness and from reality to virtuality" into the following two layers:',
  '物理环境层：': 'Physical Environment Layer：',
  '更趋近现实，模拟线下环境，设计语言主要把控线下环境在怎样的环境中呈现。':
    'Closer to reality, this layer simulates offline environment. The design language mainly controls in what environment that the off-line environment will present.',
  '抽象表达层：': 'Abstract Expression Layer：',
  '将物理层构建的世界以一致的规则呈现给用户。':
    'The world built in the physical layer is presented to users with consistent rules.',
  分层: 'Layer',
  物理环境层: 'Physical Environment Layer',
  '大家都知道我们目前的线上体验都是从线下真实场景中物化抽象而生，因此物理层是最趋近用户线下环境的。我们alibaba.com是一个B类电商平台，又通过服务好买家从而给卖家带来商机和收益，因此我们的物理层更多可能模拟的是B类买家的采购环境。当然场景和内容都是由我们商业策略决定，我们设计语言所需要考虑的是我们alibaba.com的物理世界环境是什么样的：更趋近高端的品牌店，还是接地气的地摊杂货，是窗明几净的明朗环境，还是灯红酒绿的黑暗环境？':
    'As we all know, our current online experience is materialized and abstracted from the real offline scenarios, so the physical layer is the closest to the offline environment of users. The alibaba.com is a class B e-commerce platform, which can bring buyers rich business opportunities and benefits through excellent customer service. Therefore, our physical layer is more likely to simulate the purchasing environment of Class B buyers. Of course, the scenarios and content are both determined by our business strategies. When designing languages, we need to consider what environment the physical world of alibaba.com is. Is it closer to the high-end boutique or just shop for street vendor’s goods? Is it a brilliant environment with clear windows or the dark one with scene of debauchery?',
  '在物理环境层中设计语言将定义我们Alibaba平台所处环境的：光源（冷暖、明暗、色彩）、秩序（信息密度、排列方式）、质感（内容的品质保证、精致感、一致性）。':
    'In the physical environment layer, the design language will define the following contents of the environment of Alibaba platform: light source (cold and warm, light and dark, and colors), order (information density, arrangement), and quality (quality assurance, delicacy and consistency of contents).',
  抽象表达层: 'Abstract Expression Layer',
  '前面我们了解到物理层是一个三维世界，在抽象表达层我们同样强调Z轴的概念存在。但我们当然不是直接把物理层的3D世界照搬过来，而是以层的概念抽象。':
    'As we mentioned above, the physical layer is a 3D world and we also emphasize the existence of concept of Z axis. Of course, we will definitely not just copy the 3D world of the physical layer, and instead, we abstract the world based on the concept of layer.',
  '原因：': 'Reason：',
  '受用户对于互联网的认知、我们的业务现状、品牌和设计框架影响。':
    'Affected by users’ perception of the Internet, current business status, brand and design framework.',
  '手法：': 'Method：',
  '所有的元素抽象以层的概念输出，以对用户的优先级高低来决定其前后顺序。':
    'All element abstraction is output based on the concept of layer and ordered by the priority of elements to users.',
  原则: 'Principle',
  '1. 以交互层的优先级为先，单个层的内容表达不可跨层呈现':
    '1. The priority of interaction layer should be considered as the basis and the content expression in a single layer is not allowed to be presented across layers',
  '2. Z轴方向上离用户越接近优先级越高':
    '2. The closer to the user in the direction of z-axis, the higher the priority is',
  '3. 同一水平线上的内容优先级一致':
    '3. Contents at the same horizontal line boast the same priority',
  '4. 层为隐性概念': '4. Layer is an implicit concept',
  规则: 'Rules',
  '物理层环境规则：光源、秩序、质感':
    'Physical Layer Environment Rules: Light Source, Order and Quality',
  光源: 'Light Source',
  '线光源决定我们平台基调，是后续所有设计元素明度、饱和度等等的前提':
    'The line light source determines the tone of our platform and is the premise of all subsequent design elements such as brightness, saturation, etc.',
  '所以我们会从角度、色彩、亮度这几个角度去细化定义。':
    'Therefore, we will define the light source in detail from the perspectives of angle, color and brightness.',
  秩序: 'Order',
  '秩序决定的是我们的平台传递的是诸如一个杂货市场、中档商铺还是高端精品店的用户感受，它规定了我们平台整体的信息密度&排布方式。':
    'Order determines what kind of user experience our platform delivers - a grocery market, mid-range shop or high-end boutique? It defines the overall information density and arrangement of our platform.',
  质感: 'Quality',
  '质感更多的是在场景搭建中保障内容的品质感、精致感、一致性，在材质表达上可以是木质、塑料、大理石、纸质，使用时可以根据场景的实际情况合理选择。':
    'It requires the guarantee of quality, delicacy and consistency of contents in scenario building. In terms of material expression, it can be wood, plastic, marble and paper, so users can select reasonably according to the actual situation of the scenario.',
  '抽象表达层输出规则：位置、大小、距离、色彩':
    'Rules on the Output of Abstract Expression Layer: Position, Size, Distance, and Color',
  位置: 'Position',
  '元素在X/Y/Z轴的空间位置会导致设计呈现方式有不同的表达，如Z轴空间位置关系将导致设计呈现上的物体遮挡，突出卡片或画面之外的设计形式产生。':
    'The spatial position of elements in the x/y/z axis may lead to the different expression of design presentation. For example, the spatial position relationship in the z axis will lead to the occlusion of objects in design presentation, generating the design form of highlighting objects beyond the card or picture.',
  大小: 'Size',
  '大小直接受到元素所属位置与用户的距离的影响，遵循近大远小的原则，我们会发现，距离用户越近的元素越大，':
    'Size is directly affected by the distance between the elements and users. According to the principle of "small in far locations and big in near locations", we will find that the elements closer to users are bigger, ',
  '这直接影响我们的设计形式将从从前的卡片内模块变成更具冲击力的元素透出方式。':
    'Which will directly make our design mode change from previous in-card module into the more shocking element penetration mode.',
  距离: 'Distance',
  '距离人近的物体清晰，距离人远的物体模糊，基于这一原理，我们设计上可以通过加大背景模糊营造空间感，也可通过加入色彩遮罩，降低图片透明度达到同样的效果。':
    'Objects closer to people are clear and fuzzy if they are far away. Based on this principle, we can create a sense of space by increasing the ambiguity of background, or by adding a color mask to reduce the transparency of pictures.',
  '饱和度反差：': 'Saturation Contrast：',
  '前景的物体饱和度高，后景的物体饱和度低。两个颜色之间饱和度或明度数值相差越大，反差也就越大，反之亦然，看看具体的实例：如以下导航图，当前的人物图像明度较高，和低明度黑色背景形成高反差而容易先被注视。':
    'Objects in the foreground have high saturation and those in the background have low saturation. The greater the difference between the saturation or brightness of two colors, the greater the contrast is, and vice versa. For example, the current character image with higher brightness vs. the black background with low brightness are easy to be noticed at first (see the navigation map below).',
  '色相反差：': 'Hue Contrast：',
  '下图中主色调为蓝色，蓝色行动点和整体颜色一致，层级相对较弱，而绿色行动点和蓝色在色相上的反差使得层级变高。':
    'In the following figure, blue is the main hue and the blue action point is at relatively weak level because it is consistent with the overall color; the hue contrast between the green action point and the blue color makes the green action point stay at a high level.'
}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('设计语言概述')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-language {
  header {
    position: relative;
    text-align: left;
    background: #ebebeb;
    padding: 0 120px;
    background: url(https://img.alicdn.com/tfs/TB1tUCoENnaK1RjSZFBXXcW7VXa-480-270.gif)
      no-repeat 50%;
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
    color: #333;
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
  }
  .el-tabs .el-tabs__item.is-active {
    font-weight: bold;
  }

  .el-tabs .el-tabs__active-bar {
    background: #333;
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
    margin-bottom: 40px;
  }
  .content h2 {
  }
  .content h4 {
    font-size: 20px;
    color: #666666;
    line-height: 18px;
    font-weight: normal;
    padding-bottom: 10px;
  }
  .content h5 {
    font-size: 14px;
    color: #666666;
    line-height: 40px;
    padding-bottom: 60px;
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
  .content .subtitle {
    font-size: 20px;
    line-height: 40px;
    padding-bottom: 20px;
    font-weight: 600;
  }

  .img-box {
    margin-bottom: 120px;
  }
  .img-box img {
    max-width: 100%;
  }

  .img-box02 {
    margin-bottom: 20px;
  }

  .img-box03 {
    margin-bottom: 40px;
  }

  .img-box04 {
    margin-bottom: 60px;
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

  .p5 {
    margin-bottom: 80px !important;
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

  .content p a {
    color: #999;
  }
}
</style>
