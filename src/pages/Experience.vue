<template>
  <div>
    <section class="wt-section" id="project">
      <div class="container">
        <div class="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4">
          <div class="col-md-8 text-center w-md-50 mx-auto mb-0 ">
            <h2 class="mb-md-2">{{ $t('m.experience') }}</h2>
            <!-- <p class="lead text-muted">Maxi creative technology company providing key digital services for everyone.</p> -->
          </div>
        </div>
        <div class="row justify-content-between align-items-center">
          <div class="col-md-4" data-aos-easing="linear">
            <img :src="`./img/about/3.svg`" class="w-75" alt="">
          </div>
          <div class="col-md-7">
            <ul class="timeline" data-aos-easing="linear" v-for="item in  projectList" :key="item.id">
              <li>
                <h5 v-if="$i18n.locale == 'zh-CN'">{{ item.CNname }}</h5>
                <h5 v-else>{{ item.ENname }}</h5>
                <i>{{ item.time }}</i>
                <p class="text-muted d-block mt-3 text-left" v-if="$i18n.locale == 'zh-CN'">{{ item.CNdetail }}</p>
                <p class="text-muted d-block mt-3 text-left" v-else>{{ item.ENdetail }}</p>
              </li>


            </ul>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ExperienceName',
  data() {
    return {
      projectList: []
    }
  },
  mounted() {
    this.axios.get('/deeptime/getProject').then((response) => {
      this.projectList = response.data.data
    })
  }
}
</script>

<style>

</style>