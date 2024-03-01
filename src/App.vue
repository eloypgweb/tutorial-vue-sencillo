<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/consumoapi">Consumo API</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  background-color: #333;
  padding: 10px 0;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 0 15px;
}

nav a:hover {
  color: #ccc;
}
</style>
