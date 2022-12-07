<template>
  <div>
    <Navigator />
    <Home />
    <About />

    <Team />

    <Experience />
    <Publications />
    <Footer />
  </div>
</template>

<script>
import About from './About';
import Navigator from '../components/Navigator';
import Experience from './Experience';
import Home from './Home';

import Publications from './Publications';
import Team from './Team';
import Footer from '@/components/Footer.vue';

export default {
  name: 'PageName',
  components: {
    About,
    Navigator,
    Experience,
    Home,
    Publications,
    Team,
    Footer,
  },
};
</script>

<style></style>
