<template>
  <div class="news-item">
    {{content.title}}
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    data: {
      type: Object,
      default () {}
    }
  },
  data () {
    console.log('data', this.data)
    return {
      content: this.data
    }
  }
}
</script>

<style>

</style>
