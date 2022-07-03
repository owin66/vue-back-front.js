<template>
  <header class='header'>
    <div class="header_left">
      LOGO
    </div>
    <div class="header_right">
      <ul class="nav">
        <li class='nav_link' v-for="(category, key) in categories" :key="key"></li>
<router-link>{{category.title}}</router-link>
      </ul>
    </div>

  </header>
</template>

<script>
export default {
  name: 'MevnHeader',
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>