<template>
  <div class="public-header">
    <div class="navbar">
      <div class="nav">
        <div class="nav_left">
          <ul>
            <li v-for="(nav, i) in navbar" :key="i">
              <router-link :to="nav.href">{{ nav.title }}</router-link>
              <span
                :style="{
                  display: i >= navbar.length - 1 ? 'none' : 'inline-block',
                }"
                >|</span
              >
            </li>
          </ul>
        </div>
        <div class="nav_right">
          <div class="enter">
            <ul>
              <li>
                <router-link to="/login">登录</router-link>
                <span>|</span>
              </li>
              <li>
                <router-link to="/register">注册</router-link>
                <span>|</span>
              </li>
              <li>
                <router-link to="/login">消息通知</router-link>
              </li>
            </ul>
            <!-- <ul>
              <li>
                <router-link to="/login">zhanghao1</router-link>
                <span>|</span>
              </li>
              <li>
                <router-link to="/register">退出</router-link>
                <span>|</span>
              </li>
              <li>
                <router-link to="/login">消息通知</router-link>
              </li> 
            </ul>-->
          </div>
          <div class="shop_car">
            <div class="cart">
              <i class="icomoon icon-cart"></i>
              购物车
              <span>(0)</span>
            </div>
            <div class="cart_list">
              <p>购物车中还没有商品，赶紧选购吧！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sub_navbar">
      <div class="logo">
        <router-link title="小米官网" to="/"></router-link>
      </div>
      <div class="sub_nav">
        <ul>
          <li @mouseover="showList = 0" :class="{ active: showList == 0 }">
            <span>Xiaomi手机</span>
          </li>
          <li @mouseover="showList = 1" :class="{ active: showList == 1 }">
            <span>Redmi手机</span>
          </li>
          <li @mouseover="showList = 2" :class="{ active: showList == 2 }">
            <span>电视</span>
          </li>
          <li @mouseover="showList = 3" :class="{ active: showList == 3 }">
            <span>笔记本</span>
          </li>
          <li @mouseover="showList = 4" :class="{ active: showList == 4 }">
            <span>平板</span>
          </li>
          <li @mouseover="showList = 5" :class="{ active: showList == 5 }">
            <span>家电</span>
          </li>
          <li @mouseover="showList = 6" :class="{ active: showList == 6 }">
            <span>路由器</span>
          </li>
          <li>
            <router-link to="/a">服务中心</router-link>
          </li>
          <li>
            <router-link to="/a">社区</router-link>
          </li>
        </ul>
      </div>
      <div class="nav_prolist" @mouseleave="showList = null">
        <div class="pro_list" v-show="showList == 0">
          <div class="content">
            <ul>
              <li>
                <router-link to="/login">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="pro_list" v-show="showList == 1">
          <div class="content">
            <ul>
              <li>
                <router-link to="/">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="pro_list" v-show="showList == 2">
          <div class="content">
            <ul>
              <li>
                <router-link to="/">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="pro_list" v-show="showList == 3">
          <div class="content">
            <ul>
              <li>
                <router-link to="/">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="pro_list" v-show="showList == 4">
          <div class="content">
            <ul>
              <li>
                <router-link to="/">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="pro_list" v-show="showList == 5">
          <div class="content">
            <ul>
              <li>
                <router-link to="/">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="pro_list" v-show="showList == 6">
          <div class="content">
            <ul>
              <li>
                <router-link to="/">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <div>
                    <img src="/image/index/pro_list.jpg" alt="" />
                  </div>
                  <span>小米商城</span>
                  <h5>5422元起</h5>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        @mouseover="searchList = true"
        @mouseleave="searchList = false"
        class="search"
      >
        <input type="text" placeholder="家电" />
        <button class="btn_search"></button>
        <div v-show="searchList" class="search_list">
          <ul>
            <li>
              <router-link to="/a">全部商品</router-link>
            </li>
            <li>
              <router-link to="/login">洗衣机</router-link>
            </li>
            <li>
              <router-link to="/">电视</router-link>
            </li>
            <li>
              <router-link to="/">冰箱</router-link>
            </li>
            <li>
              <router-link to="/">耳机</router-link>
            </li>
            <li>
              <router-link to="/">手机</router-link>
            </li>
            <li>
              <router-link to="/">红米</router-link>
            </li>
            <li>
              <router-link to="/">空调</router-link>
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
      searchList: false,
      showList: null,
      navbar: [
        { title: "小米官网", href: "/a" },
        { title: "小米商城", href: "/a" },
        { title: "MIUI", href: "/a" },
        { title: "loT", href: "/a" },
        { title: "云服务", href: "/a" },
        { title: "天星数科", href: "/a" },
        { title: "有品", href: "/a" },
        { title: "小爱开放平台", href: "/a" },
        { title: "企业团购", href: "/a" },
        { title: "资质证照", href: "/a" },
        { title: "协议规则", href: "/a" },
        { title: "下载app", href: "/a" },
        { title: "Select Location", href: "/a" },
      ],
    };
  },
};
</script>

<style src="../assets/css/header.css" scoped></style>
