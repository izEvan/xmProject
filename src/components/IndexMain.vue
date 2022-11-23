<template>
  <div class="index-main">
    <div class="news">
      <router-link to="/">
        <img src="/image/index/news.jpg" alt="">
      </router-link>
    </div>
    <div class="phone">
      <div class="phone_nav">
        <h2>手机</h2>
          <router-link to="/login">
            查看更多
            <span></span>
          </router-link>
      </div>
      <div class="phone_content">
        <div class="phone_content_left">
          <router-link to="/">
            <img src="/image/index/product.jpg" alt="">
          </router-link>
        </div>
        <div class="phone_content_right">
          <ul>
            <li v-for="i in 8" :key="i">
              <router-link to="/login" class="nav_content">
                <div>
                  <img src="/image/index/pic.jpg" alt="">
                </div>
                <h3>Redmi Note 12 5G</h3>
                <p>三星 OLED 护眼屏｜骁龙 5G 芯｜5000mAh 电量</p>
                <p>1199 元<del>1199 元</del></p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="phone">
      <div class="phone_nav">
        <h2>手机</h2>
          <router-link to="/login">
            查看更多
            <span></span>
          </router-link>
      </div>
      <div class="phone_content">
        <div class="phone_content_left">
          <router-link to="/">
            <img src="/image/index/product.jpg" alt="">
          </router-link>
        </div>
        <div class="phone_content_right">
          <ul>
            <li v-for="i in 8" :key="i">
              <router-link to="/login" class="nav_content">
                <div>
                  <img src="/image/index/pic.jpg" alt="">
                </div>
                <h3>Redmi Note 12 5G</h3>
                <p>三星 OLED 护眼屏｜骁龙 5G 芯｜5000mAh 电量</p>
                <p>1199 元<del>1199 元</del></p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style src='../assets/css/main.css' scoped></style>
