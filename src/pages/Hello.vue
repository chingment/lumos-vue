<template>
  <div id="app">
    <ul class="menu">
      <li v-scroll-to="'#a'">item 1</li>
      <li v-scroll-to="'#b'">item 2</li>
      <li v-scroll-to="'#c'">item 3</li>
    </ul>

    <div
      class="content"
      id="a"
    >content 1</div>
    <div
      class="content"
      id="b"
    >content 2</div>
    <div
      class="content"
      id="c"
    >content 3</div>
  </div>
</template>

<script>



export default {
  name: "app"
};
</script>

<style>
.menu {
  position: fixed;
  width: 200px;
  background-color: #eee;
}
.content {
  width: 500px;
  height: 500px;
  margin-left: 300px;
  margin-bottom: 50px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
}
</style>