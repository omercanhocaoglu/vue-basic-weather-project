<template>
  <div class="bg-primary minHeight">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: black;
}

.minHeight {
  min-height: 100vh
}
</style>
