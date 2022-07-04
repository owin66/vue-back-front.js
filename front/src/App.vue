
<template>
  <div id='app'>
    <MevnHeader :categories="categories"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    MevnHeader: () => import('@/components/layouts/Header')
  },
  data: () => ({
    categories: [
      {title: 'PS4', id: 1},
      {title: 'XBOX', id: 1},
      {title: 'NintendoSwitch', id: 1},
    ]
  })
}
</script>


<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
