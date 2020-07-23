<template>
  <div class="appContainer">
    <SearchInput />
    <ImageDisplayer />
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput'
import ImageDisplayer from '@/components/ImageDisplayer'
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },

  components: {
    SearchInput,
    ImageDisplayer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appContainer {
  display: flex;
  flex-direction: column;
  justify-self: center;
  max-width: 500px;
}

h1, h2 {
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
