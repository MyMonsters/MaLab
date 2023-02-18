<template>
  <div>
    <div id="publications">
      <section class="wt-section" id="skills">
        <div class="container">
          <div
            class="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4"
          >
            <div class="col-md-8 text-center w-md-50 mx-auto mb-0">
              <h2 class="mb-md-2">{{ $t('m.publications') }}</h2>
              <!-- <p class="lead text-muted">Maxi creative technology company providing key digital services for everyone.</p> -->
            </div>
          </div>
          <!-- Feature Blocks -->
          <div class="showpublications">
            <div
              v-for="item in publications"
              :key="item.id"
              class="mypublications"
            >
              <!-- <p class="myindex">{{ item.id }}</p> -->
              <li
                class="myitemName"
                style="list-style: none; text-indent: -2em"
              >
                [{{ item.id }}] {{ item.title }}
              </li>
              <!-- <div class="alert alert-success" role="alert"><a :href="item.link" target="_blank">{{item.name}}</a></div> -->
            </div>
            <!-- <div class="mynav">
              <div class="pravPage " name="" @click="prav">{{$t('m.prev')}}</div>
              <div class="pages" v-for="(item, index) in conpages" :key="index" @click="page(item)"
                :class="item == cur ? 'active' : ''">{{ item }}</div>
              <div class="nextPage"  @click="next">{{$t('m.next')}}</div>

            </div> -->
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicationsName',
  data() {
    return {
      publications: [],
    };
  },
  mounted() {
    this.axios.get('/deeptime/getPublication').then((response) => {
      this.publications = response.data.data.reverse();
    });
  },
  methods: {},
};
</script>

<style scoped>
.mynav {
  width: 550px;
  height: 30px;
  background-color: rgba(253, 253, 251, 0);
  display: flex;
  align-items: center;
}
</style>
