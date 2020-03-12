<template>
  <div class="home">
    <Header></Header>
    <Slider></Slider>
    <News :list='list' ></News>
  </div>
</template>

<script>

import Header from '@/components/header.vue'
import Slider from '@/components/slider.vue'
import News from '@/components/news.vue'

// import { getNews } from '@/api/news'

import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Header,
    Slider,
    News
  },
  mounted () {
    this.fetchList()
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    fetchList () {
      console.log('dsssss')
      axios({method: 'get', url: '/api/news'}).then((res) => {
        this.list = res.data.news
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
