<template>
  <section class="news">
    <div v-for="item in items" :key="item.id">
      <NewsItem :data='item'></NewsItem>
    </div>
  </section>
</template>

<script>
import NewsItem from '@/components/news-item.vue'

export default {
  name: 'News',
  components: {
    NewsItem
  },
  props: {
    news: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    console.log('data2', this.news)

    return {
      items: this.news
    }
  }
}
</script>

<style>

</style>
