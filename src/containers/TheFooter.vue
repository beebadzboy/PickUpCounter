<template>
  <CFooter :fixed="false">
    <div>
      <span class="ml-1">DBD</span>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} Creative.</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="https://coreui.io/vue">KING POWER</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
