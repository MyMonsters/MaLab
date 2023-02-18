<template>
  <div>
    <div id="app">
      <!-- <Home/> -->

      <!-- <Navigator></Navigator> -->
      <router-view></router-view>
      <!-- <About/>
    <Experience/>
    
    
    
    <Team/> -->
      <!-- <Contact/> -->
      <!-- <Publications/> -->
    </div>
  </div>
</template>

<script>
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Experience from './pages/Experience'
// import Home from './pages/Home'
import Navigator from './components/Navigator';
// import Publications from './pages/Publications'
// import Team from './pages/Team'
// import Page from './pages/Page.vue'

export default {
  name: 'AppName',
  components: {
    //     About,
    //     Contact,
    //     Experience,
    //     Home,
    Navigator,
    //     Publications,
    //     Team,
    //     Page
  },
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
  white-space: pre-wrap;
}

/* .toggle-checkbox:checked + .all {
  background-color: #2f2f2f;
  width: 100px;
  height: 200px;
} */
#toggle-checkbox {
  display: none;
}
</style>
