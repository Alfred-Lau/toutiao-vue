<template>
  <div class="header">

    <div class="left"><img src="https://s3.pstatp.com/growth/mobile_list/image/feed_ic_message_normal@3x_f2ea949f.png" width=30 height=30 alt=""></div>
    <div class="center"><img src="https://s3b.pstatp.com/growth/mobile_list/image/wap_logo@3x_581de69e.png" height=20 alt="">
    <img src="https://s3a.pstatp.com/growth/mobile_list/image/titlebar_refresh_small@3x_96fb31e4.png" alt="refresh-btn" width=17></div>
    <div class="right"><img src="https://s3.pstatp.com/growth/mobile_list/image/feed_ic_search_normal@3x_0f198e56.png" width=30 height=30 alt=""></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header {
  background: red;
  display: flex;
  justify-content: space-around;
  height: 40px;
  align-items: center;
}

.left {
  width: 20px;
}

.right{
}
</style>
