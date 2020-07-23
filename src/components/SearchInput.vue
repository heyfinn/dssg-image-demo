<template>
  <div class="searchContainer">
    <a-input-search placeholder="Search Any Image" style="width: 200px" @search="onSearch" />
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['updateImage']),

    onSearch (value) {
      console.log(value)
      let searchLink = 'https://api.unsplash.com/search/photos?client_id=ANj5PKrpuatH3x-AHg-J2bg5JFK8IOgQ5HFVdYF7maI&query=' + value
      console.log(searchLink)
      axios
        .get(searchLink)
        .then(({ data }) => {
          let { results } = data
          let firstImage = results[0]
          let firstImageUrl = firstImage.urls.regular
          console.log(firstImageUrl)
          this.updateImage(firstImageUrl)
        })
    }
  }
}
</script>

<style>
  .searchContainer {
    max-width: 600px;
    margin: 20px;
  }
</style>
