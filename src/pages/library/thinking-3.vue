<template>
  <div class="page-library-thinking-3">
    <header>
      <h1 class="think">
        {{ $t('Form and Quote: A sample of friendly form with guides') }}
      </h1>
    </header>
    <div class="content">
      <p><bold>The author of this article is LEO.</bold></p>
      <p>
        When it comes to user experience, HTML form is one of the most
        discussed elements on the plate. Usually a form required experience
        designers and product managers to understand how the business work
        and what are the users’ expectations and how do they behave or
        interact with the form.
      </p>
      <p>
        Recently we revamped our China-to-US ocean freight service, one of
        the key elements to the service is the logistic solution search and
        quotation tool. Here is how it look like before we do the update:
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1EaelEQzoK1RjSZFlXXai4VXa-451-233.png"
          alt=""
        >
      </div>
      <p>
        Data shows that most of our users on this China-to-US ocean freight
        service are new to international sea freight. They are experiencing
        different kinds of difficulties, for example, they are not
        experienced in sea freight and do not understand all professional
        logistic terms. And thus, the form above become obstacle to them.
        That is why we are trying to improve the form and make it more user
        friendly.
      </p>
      <p>
        We do not rush to revamp the tool, but try to throw out questions
        and see if there is any fundamental way to overcome hurdles to
        users. One of the directions is while users are so unfamiliar with
        international logistic, will it better to offer a human-to-human
        help service instead of a self-help service?
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1hYWeENTpK1RjSZR0XXbEwXXa-698-180.png"
          alt=""
        >
      </div>
      <p>
        So, we come up with the above prototype with a manual quote
        function: User leave us their contact information and our
        representative will contact them directly if users are not
        confidence enough to fill out all info. It turns out users welcome
        this old service style - despite slower responsible time and more
        back and forth communications. However, the cost of this service
        model will be too high and it is obvious that scaling and
        maintaining service standard will be a huge problem in the future:
        Self-service is not avoidable in the era of internet.
      </p>
      <p>
        To in heritage the idea of a human touch service, in the next
        prototype we added an option with ‘I am not sure’ option. Whenever
        users are not sure how to fill in the form, we allow them to contact
        us. Once they checked the I’m not sure option, a set of contact box
        will be appeared. And our staff will able to follow the case.
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1RrKcENTpK1RjSZFGXXcHqFXa-451-146.png"
          alt=""
        >
      </div>
      <p>
        Apart from I’m not sure option, we also looked into the fills. It
        turn out some users understand what is gross volume but not able to
        process the calculation. Thus we offered a little calculator for
        them. To improve user experience, even the little calculator tool
        takes a few versions to polish.
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1JTudEFYqK1RjSZLeXXbXppXa-451-334.png"
          alt=""
        >
      </div>
      <p>
        After exercising visualization of the calculator, we learnt users
        want more direct and simple form of communication. Thus, we tried to
        visualize the shipping route through service mode:
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1fzODENnaK1RjSZFBXXcW7VXa-451-189.png"
          alt=""
        >
      </div>
      <p>
        But it turns out visualizing service mode will increase the digest
        cost to user. Even it gives a complete process path but it also
        confused user on which is the right path for them. In this case a
        simple text label is more understandable.
      </p>
      <p>
        To further assist users to quickly adapt to our solution search
        tool, we added call to action copies to the fill label which
        encouraging users to input needed information. We also added
        guided-text in fill place holder, that give a better idea on what is
        expected to be filled in. And of course explanations next to fill
        label is extremely important to our not-so-experienced users.
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1FIWfEHrpK1RjSZTEXXcWAVXa-451-179.png"
          alt=""
        >
      </div>
      <p>
        All of the above bring lots of positive feedback from different
        users. To wrap it up, a successful html form should contain clear
        guideline, simple text label, mini-tool would be a plus when needed.
      </p>
      <p>
        After launch of the new version, our study shows that users
        sometimes do not realized the measurement unit is actually a
        dropdown. Especially in western world there are different metrics
        system, users will be confused when the tool only showing one
        measuring system. That why on the next update when adding new
        service to our ocean freight service, we expose all option with a
        switch element. This is much clearer to users and reduced a lot of
        confusion.
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1OZqiESzqK1RjSZFpXXakSXXa-451-222.png"
          alt=""
        >
      </div>
      <p>
        On the next step, we will talk about the quotation display part of
        this ocean freight logistic service.
      </p>
      <p>
        what happen after user filled in the form and how do we update the
        search result - quotation. This is what happen after user input
        necessary information and click the search button on the ocean
        freight solution search and quotation tool. Our system will match
        the enquiry and solutions service provider offered, making a
        quotation for that specific order.
      </p>
      <p>
        Here is how it look like together with the search tool before we do
        the update:
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1R78.EMDqK1RjSZSyXXaxEVXa-451-203.png"
          alt=""
        >
      </div>
      <p>Quotation is simplified into 7 sections.</p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1e95mEIfpK1RjSZFOXXa6nFXa-451-214.png"
          alt=""
        >
      </div>
      <p>
        Users will able to expand the quotation with detailed breakdowns
        with charges.
      </p>
      <p>
        Because of the business complexity natural, quotation of sea freight
        logistic can be complicated to average users. Even worst is in
        previous version, service charge breakdown is not detailed enough,
        some of the calculation is not completely shown even in the detail
        breakdown. This will certainly affect user’s trust on the service.
      </p>
      <p>
        Apart from unclear breakdowns, studies also found users are not able
        to understand what charge terms are, like Original Charges, Freight
        Charge and Destination Charge. That is why we introduced a
        visualized trade terms and steps into the service charge break down.
        This reduces the digest cost of users.
      </p>
      <p>
        With the diagram, user will able to understand the logistic terms
        and step easily. And this also helped to set user expectation on
        what is going to happen next. We used two colors to separate which
        part of the logistic flow is paid and liable on which party. By this
        buyer and seller will easily understand where the service charges
        goes to.
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1hdeiESzqK1RjSZFpXXakSXXa-451-203.png"
          alt=""
        >
      </div>
      <p>
        On the price detail breakdown, we took out supplier cost on buyer’s
        quotation. And vice versa buyer’s cost will not show on supplier’s
        quotation. It is because our study found both parties do not care
        about how much the other side have to. They are more concern on how
        much they are paying for the service.
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1fxyfEPTpK1RjSZKPXXa3UpXa-451-305.png"
          alt=""
        >
      </div>
      <p>
        To better illustrate the different in different trade term and
        liability condition, here are collection of different trade terms
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1NFueEFYqK1RjSZLeXXbXppXa-451-240.png"
          alt=""
        >
      </div>
      <p>
        Here is how the page look like together with new search tool and
        quotation layout:
      </p>
      <div class="img-box">
        <img
          src="https://img.alicdn.com/tfs/TB1rWumEMHqK1RjSZFEXXcGMXXa-459-431.png"
          alt=""
        >
      </div>
      <p>
        In summary, this revamped sea freight solution search and quotation
        project had bring a easier-to-use form to users with simplified
        form, call to action contents, widget tool, process visualization
        and a reader friendly cost breakdown. Data shows there is increase
        in success order rate and we got different positive feedback from
        users. Hope this sharing will bring you some inspirations.
      </p>
      <p>
        {{ $t('上一篇') }}:&nbsp;&nbsp;<a href="../thinking-2/index.html">{{ $t('B类贸易展会品牌合作创意方案初探') }}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {{ $t('下一篇') }}:&nbsp;&nbsp;<a href="../vocabulary-1/index.html">{{ $t('一般') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { transformLocales } from '@/locales'

const messages = {}

export default {
  layout: 'doc',
  head() {
    return {
      title: this.$t('Form and Quote: A sample of friendly form with guides')
    }
  },
  i18n: {
    messages: transformLocales(messages)
  }
}
</script>

<style lang="scss" scope>
.page-library-thinking-3 {
  header {
    position: relative;
    text-align: left;
    background: #ebebeb;
    padding: 0 120px;
    background-image: url('https://img.alicdn.com/tfs/TB10Ul6EPDpK1RjSZFrXXa78VXa-3260-720.png');
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
}
</style>
