<template>
  <div class="footer-wrapper">
    <footer class="footer fz13">
      <div class="copyright fl">版权所有 &copy; 2019 <router-link :to="{name: 'article_index'}">脉宝</router-link></div>
      <div class="service fr">技术支持：yzsunlei@qq.com</div>
    </footer>
  </div>
</template>

<script>
  import "./style.less";

  export default {
    name: 'footer',
    data() {
      return {

      }
    }
  }
</script>
