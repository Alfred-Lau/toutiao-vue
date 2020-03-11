<template>
  <div class="slider-container">
    <router-link class="tab-item" :class='item.id === currentTab?"active":null' v-for="item in tabs" :key='item.id' :to="item.link">{{item.label}}</router-link>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'slider',
  data () {
    return {
      tabs: [],
      currentTab: 0
    }
  },
  mounted () {
    const tabs = this.getTabs
    this.tabs = tabs
  },
  computed: {
    ...mapGetters(['getTabs'])
  }
}
</script>

<style>

.slider-container {
  background: #F4F5F6;
  color: #505050;
  font-size: 17px;
  line-height: 26px;
  height: 26px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

a {
  color: #505050;
}

.slider-container .tab-item {
  padding-right: 10px;
  padding-left: 10px;
  text-decoration: none;
}

.active {
  color:red;
}

</style>
