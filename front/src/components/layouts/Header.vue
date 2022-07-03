<template>
  <header class='header'>
    <div class="header_left">
      LOGO
    </div>
    <div class="header_right">

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