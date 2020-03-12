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
.news-item {
  background: cornsilk;
  color: red;

  padding: 5px;
  margin-bottom: 3px;
}

</style>
