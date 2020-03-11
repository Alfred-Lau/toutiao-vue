<template>
  <div class="home">
    <Header></Header>
    <Slider></Slider>
    <News :data='news'></News>
  </div>
</template>

<script>

import Header from '@/components/header.vue'
import Slider from '@/components/slider.vue'
import News from '@/components/news.vue'

import {getNews} from '@/api/news'

export default {
  name: 'Home',
  components: {
    Header,
    Slider,
    News
  },
  async mounted () {
    const res = await getNews()
    console.log('dat4', res)

    this.news = res.news
  },
  data () {
    console.log('data3', this.news)

    return {
      news: []
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
