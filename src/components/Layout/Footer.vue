<template>
  <div class="footer_main bg-red">
    <div class="left_side">
      <div>
        <div>MOMS</div>
      </div>
      <div>
        <div>Categories:</div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer_main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.left_side {
  display: row;
  justify-content: space-between;
}
</style>
