<template>
  <section class="page-home container">
    <layout-header is-home />
    <div class="layout-container-home">
      <div id="bannervideo" class="banner">
        <div class="banner-wrap">
          <div class="left">
            <div class="alibaba">
              Alibaba.com
            </div>
            <div class="title">
              {{ $t('体验设计指南') }}
            </div>
            <p class="internal">
              {{ $t('一套符合B类场景的设计体系') }}
            </p>
            <div class="handle">
              <a href="./brand/index.html">
                <button class="btn01">{{ $t('查看更多') }} ></button>
              </a>
            </div>
          </div>
        </div>
        <video id="bgvid" autoplay muted loop>
          <source src="~/assets/img/video-01.mp4" type="video/mp4">
        </video>
      </div>
      <div class="content">
        <div>
          <div class="item item-01">
            <div class="left">
              <h2>{{ $t('品牌概览') }}</h2>
              <div class="item-nav-wrap">
                <p>
                  {{
                    $t(
                      '通过品牌了解我们的愿景及服务对象，帮助你在设计的时候更好的进行判断和选择，并以同样的性格特质向用户呈现。'
                    )
                  }}
                </p>
              </div>
              <div class="button">
                <a href="./brand/index.html">
                  <button class="btn02">{{ $t('查看更多') }} ></button>
                </a>
              </div>
            </div>
            <div class="right">
              <div class="count count-0 wow slideInRight">
                01
              </div>
              <div class="img-box wow slideInUp" data-wow-delay="0.5s">
                <img src="https://img.alicdn.com/tfs/TB1RsqDENjaK1RjSZKzXXXVwXXa-997-500.png" alt>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="item item-02">
            <div class="left">
              <h2>{{ $t('品牌调性') }}</h2>
              <div class="item-nav-wrap">
                <p>{{ $t('在这里了解我们以何种语调向用户传递我们的声音。') }}</p>
              </div>
              <div class="button">
                <a href="./brand/product/index.html">
                  <button class="btn01">{{ $t('查看更多') }} ></button>
                </a>
              </div>
            </div>
            <div class="right">
              <div class="count count-right wow slideInRight">
                02
              </div>
              <div class="img-box wow slideInUp" data-wow-delay="0.5s">
                <img src="https://img.alicdn.com/tfs/TB1cvqeEMHqK1RjSZFgXXa7JXXa-877-440.png" alt>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="item item-03">
            <div class="left">
              <h2>{{ $t('视觉指南') }}</h2>
              <div class="item-nav-wrap">
                <p>
                  {{
                    $t(
                      '在这里了解我们可以使用的设计元素，这些元素符合整个品牌的定义，并且经过设计实验的验证，可以安心的被使用。'
                    )
                  }}
                </p>
              </div>
              <div class="button">
                <a href="./guidelines/index.html">
                  <button class="btn02">{{ $t('查看更多') }} ></button>
                </a>
              </div>
            </div>
            <div class="right">
              <div class="count count-left wow slideInRight">
                03
              </div>
              <div class="img-box wow slideInUp" data-wow-delay="0.5s">
                <img src="https://img.alicdn.com/tfs/TB14U1cESzqK1RjSZFLXXcn2XXa-996-500.png" alt>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="item item-04">
            <div class="left">
              <h2>{{ $t('动效指南') }}</h2>
              <div class="item-nav-wrap">
                <p>{{ $t('基于最简单、能解决问题的原则来设计动效。') }}</p>
              </div>
              <div class="button">
                <a href="./pattern/media/index.html">
                  <button class="btn01">{{ $t('查看更多') }} ></button>
                </a>
              </div>
            </div>
            <div class="right">
              <div class="count count-right wow slideInRight">
                04
              </div>
              <div class="img-box wow slideInUp" data-wow-delay="0.5s">
                <img src="https://img.alicdn.com/tfs/TB1yR1cENTpK1RjSZR0XXbEwXXa-996-500.png" alt>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="item item-05">
            <div class="left">
              <h2>{{ $t('设计资料库') }}</h2>
              <div class="item-nav-wrap">
                <p>
                  {{
                    $t(
                      '在这里，可以看到历史积累的各项用户体验数据及资料，并下载辅助设计的工具。'
                    )
                  }}
                </p>
              </div>
              <div class="button">
                <a href="./library/index.html">
                  <button class="btn02">{{ $t('查看更多') }} ></button>
                </a>
              </div>
            </div>

            <div class="right">
              <div class="count count-left wow slideInRight">
                05
              </div>
              <div class="img-box wow slideInUp" data-wow-delay="0.5s">
                <img src="https://img.alicdn.com/tfs/TB1ApylEMHqK1RjSZFkXXX.WFXa-997-501.png" alt>
              </div>
            </div>
          </div>
        </div>
      </div>

      <layout-footer />
      <div class="loading">
        <div />
        <div />
        <div />
      </div>
    </div>
  </section>
</template>

<script>
import { transformLocales } from '@/locales'
import LayoutHeader from '@/components/layout-header.vue'
import LayoutFooter from '@/components/layout-footer.vue'

const messages = {
  体验设计指南: 'EXPERIENCE DESIGN GUIDELINES',
  一套符合B类场景的设计体系:
    'A set of design systems conforming to Class B scenarios',
  查看更多: 'VIEW MORE',
  品牌概览: 'BRAND OVERVIEW',
  '通过品牌了解我们的愿景及服务对象，帮助你在设计的时候更好的进行判断和选择，并以同样的性格特质向用户呈现。':
    'Understand our vision and service targets through the story of our brand. This will help you make better judgements and choices during the design process, and present yourself to users through the same attitudes.',
  品牌调性: 'BRAND IDENTITY',
  '在这里了解我们以何种语调向用户传递我们的声音。':
    'Understand the kind of tone in which we deliver our voice to users here.',
  视觉指南: 'VISUAL GUIDELINES',
  '在这里了解我们可以使用的设计元素，这些元素符合整个品牌的定义，并且经过设计实验的验证，可以安心的被使用。':
    'Understand the design elements that we can use. These elements are in line with the definition of the brand and have been thoroughly verified through design experiments, they can be used without worry.',
  动效指南: 'Animation',
  '基于最简单、能解决问题的原则来设计动效。':
    'Design dynamics based on the simplest, problem-solving principles.',
  设计资料库: 'LIBRARY',
  '在这里，可以看到历史积累的各项用户体验数据及资料，并下载辅助设计的工具。':
    'Here, you can access all kinds of user experience data and material accumulated over time and download various CAD tools.'
}

export default {
  components: {
    LayoutHeader,
    LayoutFooter
  },
  head() {
    return {
      title: this.$t('体验设计指南')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-home {
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    animation: loadingTransform 1s ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    > div {
      flex: 1;
      height: 100%;
      &:nth-child(1) {
        background: #1c1c1c;
      }
      &:nth-child(2) {
        background: #ff6600;
      }
      &:nth-child(3) {
        background: #ffffff;
      }
    }
  }

  .layout-container-home {
    .banner {
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      text-align: left;
      overflow: hidden;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
      font-family: 'Futura';
      text-align: center;
      .banner-wrap {
        padding-top: 150px;
        max-width: 1300px;
        margin: 0 auto;
      }
      .left {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        z-index: 1;
        .handle {
          display: flex;
          justify-content: center;
          margin: 0 0 120px 0;
          padding-top: 60px;
          .see-more {
            padding: 0;
            margin-right: 5px;
          }
        }
        .subtitle {
          font-size: 20px;
          line-height: 30px;
          color: #dcdcdc;
          padding-bottom: 40px;
        }
        .title {
          color: #fff;
          font-size: 80px;
          line-height: 1;
          font-weight: normal;
          padding-bottom: 40px;
        }
        .internal {
          font-size: 24px;
          color: #ff6600;
          font-weight: 500;
        }
        .see-more {
          padding-top: 60px;
          padding-bottom: 10px;
          width: 178px;
        }
        .download {
          display: none;
          a {
            display: inline-block;
            width: 178px;
            height: 60px;
            line-height: 60px;
            font-size: 32px;
            box-sizing: border-box;
            border: 1px solid #fff;
            padding: 0px 20px;
            color: #fff;
            display: flex;
            justify-content: space-around;
            > span:last-child {
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              line-height: 20px;
            }
            i {
              font-size: 16px;
            }
            &:not(:last-child) {
              margin-right: 20px;
            }
            .download-tip {
              font-size: 12px;
              font-weight: 600;
            }
          }
        }
      }
      .right {
        z-index: 1;
        img {
          display: inline-block;
          max-height: 452px;
          max-width: 100%;
        }
      }
    }
    .content {
      margin: 0 auto;
      letter-spacing: 1px;
      > div {
        position: relative;
        display: flex;
        justify-content: center;
        padding: 0 100px;
        &::before {
          z-index: -1;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          content: '';
          width: 100%;
          height: 100%;
          opacity: 0.05;
          background-repeat: no-repeat;
          background-size: cover;
          filter: grayscale(100%);
        }
        &:nth-child(1) {
          .count {
            color: #ff7417 !important;
          }
          &::before {
            background-image: url('https://img.alicdn.com/tfs/TB1RsqDENjaK1RjSZKzXXXVwXXa-997-500.png');
          }
        }
        &:nth-child(2) {
          .count {
            color: #2b96ff !important;
          }
          &::before {
            background-image: url('https://img.alicdn.com/tfs/TB1cvqeEMHqK1RjSZFgXXa7JXXa-877-440.png');
          }
        }
        &:nth-child(3) {
          .count {
            color: #7a78df !important;
          }
          &::before {
            background-image: url('https://img.alicdn.com/tfs/TB14U1cESzqK1RjSZFLXXcn2XXa-996-500.png');
          }
        }
        &:nth-child(4) {
          .count {
            color: #02d86a !important;
          }
          &::before {
            background-image: url('https://img.alicdn.com/tfs/TB1yR1cENTpK1RjSZR0XXbEwXXa-996-500.png');
          }
        }
        &:nth-child(5) {
          .count {
            color: #111111 !important;
          }
          &::before {
            background-image: url('https://img.alicdn.com/tfs/TB1ApylEMHqK1RjSZFkXXX.WFXa-997-501.png');
          }
        }
        &:nth-child(even) {
          background: rgba(0, 0, 0, 0.8);
          background-size: 200px 200px;
          background-image: linear-gradient(
              transparent 199px,
              rgba(255, 255, 255, 0.05) 199px,
              rgba(255, 255, 255, 0.05) 200px
            ),
            linear-gradient(
              90deg,
              transparent 199px,
              rgba(255, 255, 255, 0.05) 199px,
              rgba(255, 255, 255, 0.05) 200px
            );
          h2,
          p,
          .item .right .count {
            color: #fff;
          }
        }
        &:nth-child(odd) {
          background: rgba(255, 255, 255, 0);
        }
      }
      .item {
        margin: 150px 0;
        max-width: 1300px;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        text-align: center;
        &:not(:last-child) {
          margin-bottom: 180px;
        }
        .background-text {
          z-index: -1;
          width: 100%;
          position: absolute;
          left: 50%;
          bottom: 10%;
          transform: translateX(-34%);
          font-size: 200px;
          color: #e2ebe9;
        }
      }
      .item-nav-wrap {
        display: flex;
        justify-content: center;
        margin-right: 60px;
        padding-top: 20px;
        ul:not(:last-child) {
          margin-right: 5px;
          margin-top: 0px;
        }
        .item-nav {
          .item-nav-title {
            font-size: 18px;
            font-weight: 600;
            padding-bottom: 20px;
          }
          li {
            font-size: 12px;
            font-weight: 300;
            padding-bottom: 14px;
          }
        }
      }
      .left h2 {
        font-size: 60px;
        font-weight: 400;
        color: #000000;
        text-align: center;
        padding-right: 60px;
      }
      .right {
        position: relative;
        margin-top: 100px;
        padding-top: 121px;
        .count {
          font-family: Futura, Sans serif;
          position: absolute;
          top: -3px;
          font-size: 120px;
          color: #000;
          text-decoration: underline;
          font-weight: 600;
        }
        .intro {
          font-size: 44px;
          line-height: 1.1;
          color: #000000;
          margin-bottom: 64px;
          font-weight: 600;
          img {
            width: 100%;
          }
        }
        .img-box {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    .layout-container-home {
      .banner {
        .left .download {
          display: flex;
        }
        text-align: left;
        .banner-wrap {
          width: 100%;
          padding: 100px;
          padding-top: 180px;
          padding-bottom: 0px;
          height: 500px;
        }
        .left {
          width: 70%;
          .handle {
            display: block;
            .see-more {
              padding-top: 100px;
              padding-bottom: 10px;
              width: 178px;
            }
          }
        }
        .right {
          width: 60%;
          max-width: 900px;
          img {
            max-height: 600px;
          }
        }
      }
      .content {
        .item {
          flex-direction: row;
          text-align: left;
          justify-content: center;
          .left {
            width: 46%;
          }
          .right {
            width: 54%;
          }
        }
        .item-nav-wrap {
          text-align: left;
          justify-content: flex-start;
        }
        .left h2 {
          text-align: left;
        }
      }
    }
  }

  @media (max-width: 991px) {
    .layout-container-home {
      .banner .left {
        .subtitle {
          margin: 20px 0;
          line-height: 21px;
          font-size: 16px;
        }
        .title {
          font-size: 60px;
        }
        .internal {
          padding-bottom: 10px;
          margin-top: 25px;
          font-size: 32px;
          line-height: 40px;
        }
      }
      .content {
        > div {
          padding: 0 50px;
        }
        .item {
          margin: 50px 0;
        }
        .item:not(:last-child) {
          margin-bottom: 100px;
        }
        .item-nav-wrap {
          margin-top: 20px;
          margin-right: 0;

          .item-nav {
            .item-nav-title {
              font-size: 18px;
            }
            li {
              font-size: 14px;
            }
          }
        }
        .left h2 {
          font-size: 60px;
          padding-right: 0;
        }
        .right {
          margin-top: 50px;
          padding-top: 120px;
          .intro {
            font-size: 36px;
          }
          .img-box {
            margin: 0 auto;
            img {
              width: auto;
              max-width: 100%;
            }
          }
        }
      }
      .button {
        padding-top: 50px;
      }
    }
  }

  @media (max-width: 767px) {
    .layout-container-home {
      .banner .left {
        .subtitle {
          line-height: 19px;
          font-size: 14px;
        }
        .title {
          font-size: 40px;
        }
        .internal {
          margin-top: 20px;
          font-size: 20px;
          line-height: 26px;
        }
      }
      .content {
        > div {
          padding: 0 10px;
        }
        .item:not(:last-child) {
          margin-bottom: 50px;
        }
        .left h2 {
          font-size: 40px;
        }
      }
    }
  }

  @media (max-width: 479px) {
    .layout-container-home .banner .left {
      .subtitle {
        line-height: 19px;
        font-size: 14px;
      }
      .title {
        font-size: 40px;
      }
      .internal {
        margin-top: 20px;
        font-size: 20px;
        line-height: 26px;
      }
    }
  }

  video#bgvid {
    position: absolute;
    top: -100px;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
    z-index: -1;
  }

  #bannervideo {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  @keyframes loadingTransform {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(-100%);
    }
  }

  .alibaba {
    font-family: Futura, Sans serif;
    font-size: 34px;
    padding-bottom: 30px;
    padding-left: 4px;
  }

  .button {
    padding-top: 160px;
  }

  a:hover {
    color: #fff;
    text-decoration: underline;
  }

  .btn01 {
    border-radius: 80px;
    border: 1.5px solid #ccc;
    background-color: #fff0;
    padding: 10px 42px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    color: #fff;
    font-weight: 600;
    &:hover {
      background: #ffffff3b;
    }
    a:hover {
      text-decoration: none;
    }
  }

  .btn02 {
    border-radius: 80px;
    background-color: #000;
    padding: 10px 42px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    color: #fff;
    font-weight: 600;
    border: 0px;
    &:hover {
      background: #333;
    }
    a:hover {
      text-decoration: none;
    }
  }

  :focus {
    outline: none;
  }
}
</style>
