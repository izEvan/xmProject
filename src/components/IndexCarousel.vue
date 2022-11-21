<template>
  <div class="index-carousel">
    <div class="carousel_bx">
      <swiper
        ref="mySwiper"
        @mouseover.native="stopSwiper"
        @mouseleave.native="startSwiper"
        :options="swiperOption"
      >
        <swiper-slide>
          <img src="/image/lunbo/lbt1.webp" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="/image/lunbo/lbt2.webp" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="/image/lunbo/lbt3.webp" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="/image/lunbo/lbt4.webp" alt="" />
        </swiper-slide>
        <!-- 小圆点 -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- 上下页 -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="carousel_nav">
        <div class="carousel_navbx">
          <ul>
            <li
              @mouseover="showSearchList = i"
              @mouseleave="showSearchList = null"
              v-for="(item, i) in searchList"
              :key="i"
            >
              <router-link :to="item.href">{{ item.title }}</router-link>
              <div v-show="showSearchList == i" class="nav_list">
                <ul>
                  <li v-for="l in 24" :key="l">
                    <router-link to="/login">
                      <img src="/image/list/tv5.webp" alt="" />
                      <span>{{ item.option.cs }}</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSearchList: null,
      searchList: [
        { title: "手机", href: "/a", option: { cs: "你好你好你好你好你好" } },
        { title: "电视", href: "/a", option: { cs: "我好" } },
        { title: "家电", href: "/a", option: { cs: "大家好" } },
        { title: "笔记本 平板", href: "/a", option: { cs: "你好" } },
        { title: "出行 穿戴", href: "/a", option: { cs: "你好" } },
        { title: "耳机 音箱", href: "/a", option: { cs: "你好" } },
        { title: "健康 儿童", href: "/a", option: { cs: "你好" } },
        { title: "生活 箱包", href: "/a", option: { cs: "你好" } },
        { title: "智能 路由器", href: "/a", option: { cs: "你好" } },
        { title: "电源 配件", href: "/a", option: { cs: "你好" } },
      ],
      swiperOption: {
        loop: true,
        effect: "slide",
        // autoplay: true,
        autoplay: {
          delay: 2000, //间隔时间
          // 当用户操作swiper之后停止自动滚动: 此设定为假
          disableOnInteraction: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //可以点击
        },
      },
    };
  },
  methods: {
    stopSwiper() {
      this.$refs.mySwiper.$swiper.autoplay.stop();
    },
    startSwiper() {
      this.$refs.mySwiper.$swiper.autoplay.start();
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 1200px;
  height: 460px;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .swiper-button-prev::after {
    margin-left: 500px;
    color: #ddd;
    font-size: 40px !important;
    &:hover {
      background-color: #e0e0e0;
    }
  }
  .swiper-button-next::after {
    margin-right: 10px;
    color: #ddd;
    font-size: 40px !important;
  }
}
</style>
<style src="../assets/css/carousel.css" scoped></style>