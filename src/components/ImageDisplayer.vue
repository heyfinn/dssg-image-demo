<template>
  <div class="imageWrapper">
    <figure>
      <img :src="image">
    </figure>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ImageDisplayer',
  computed: {
    ...mapState(['image'])
  }
}
</script>

<style scoped>
  .imageWrapper {
    width: 100%;
  }

  img {
    width: 100%;
  }
</style>
