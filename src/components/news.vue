<template>
  <section class="news" >
    <div v-for="item in items" :key="item.id" >
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
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    items (val) {
      return this.list
    }
  }
}
</script>

<style>

</style>
