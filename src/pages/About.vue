<template>
  <div>
    <section class="wt-section pb-0" id="about">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-12 col-sm-12 col-lg-7">
            <div
              id="carouselExampleCaptions"
              class="carousel"
              data-ride="carousel"
              data-interval="false"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://source.machao.group/about.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-sm-12 col-lg-5">
            <p class="text-muted text-left" v-if="$i18n.locale == 'zh-CN'">
              {{ CNintroduction }}
            </p>
            <p class="text-muted text-left" v-else>
              {{ ENintroduction }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <news />
    </section>
  </div>
</template>

<script>
import news from './News.vue';
export default {
  name: 'AboutName',
  components: {
    news,
  },
  data() {
    return {
      ENintroduction: '',
      CNintroduction: '',
    };
  },
  mounted() {
    this.axios.get('/deeptime/getIntroduction').then((response) => {
      this.ENintroduction = response.data.data[0].ENintroduction;
      this.CNintroduction = response.data.data[0].CNintroduction;
    });
  },
  methods: {},
};
</script>

<style scoped>
#about {
  font-size: medium;
}

.message {
  padding: 0 120px;
}

.Team-container {
  margin-top: 200px;
  width: 60%;
  color: black;
}
</style>
