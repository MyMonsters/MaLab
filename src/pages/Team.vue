<template>
  <div>
    <section class="wt-section " id="team">
      <div class="container">
        <div class="row justify-content-md-center text-center pb-lg-5">
          <div class="col-md-12">
            <h1 class="i18n">{{ $t('m.team') }}</h1>
          </div>
        </div>
        <h2 class="text-left">{{ $t('m.principal') }}</h2>
        <hr />
        <h4 class="text-center"></h4>
        <div class="portfolio-item row" data-aos-easing="linear" data-aos-delay="100">
          <div class="item col-lg-12 col-md-12 col-sm-12 col-sm">
            <div>
              <img class="img-fluid img-responsive principalImg" src="https://mystorage-1314929303.cos.ap-chengdu.myqcloud.com/ma.jpg" alt="" />
              <div class="overlay">
                <span class="fancylight popup-btn info" v-if="$i18n.locale == 'zh-CN'" data-fancybox-group="light"
                  style="text-decoration: none;">马超 <br />
                  {{ $t('m.ma') }}
                </span>
                <span class="fancylight popup-btn info" v-else data-fancybox-group="light"
                  style="text-decoration: none;">Chao Ma<br />
                  {{ $t('m.ma') }}
                </span>
                <!-- <router-link target="_blank" to="/ma" class="fancylight popup-btn info" data-fancybox-group="light"
                  style="text-decoration: none; color: black"><br />
                  <span style="color: dodgerblue">{{ $t('m.maNav') }}</span>
                </router-link> -->
                <div><a href="http://www.cjdzyjy.cdut.edu.cn/info/1170/3221.htm" target="_blank">{{ $t('m.maNav') }}</a>
                </div>


                <p class="fancylight popup-btn info" data-fancybox-group="light"
                  style="text-decoration: none;">
                  {{ $t('m.email') }}:
                  <a href="mailto:machao@cdut.edu.cn">machao@cdut.edu.cn</a>
                </p>
              </div>
            </div>
          </div>
          <!-- <router-view></router-view> -->
        </div>
        <br /><br /><br />
        <h3 class="text-left">{{ $t('m.professor') }}</h3>
        <hr />
        <div class="portfolio-item row">

          <div class="item students col-lg-3 col-md-6 col-sm-6 col-sm" v-for="item in TeacherList" :key="item.id">
            <div class="navtoTeacher">
              <a :href="item.path" target="_blank" style="text-decoration: none;">
                <div>
                  <img class="img-fluid img-responsive professorImg" :src="item.picture" alt="" />
                  <div class="content-item">
                    <p style="margin-bottom:0;">
                      <span class="fancylight popup-btn info" v-if="$i18n.locale == 'zh-CN'" data-fancybox-group="light"
                        style="
                          text-decoration: none;
                          
                          font-family: 'Microsoft YaHei';
                        ">{{ item.CNname }}
                        <p style="margin-bottom:0;">{{ item.CNmajor }}</p>
                      </span>
                      <span class="fancylight popup-btn info" v-else data-fancybox-group="light"
                        style="text-decoration: none; ">{{ item.ENname }}
                        <p style="margin-bottom:0;">{{ item.ENmajor }}</p>
                      </span>
                      <!-- <router-link target="_blank" :to='item.path' class="fancylight popup-btn info"
                        data-fancybox-group="light" style="text-decoration: none; color: black">
                        <span style="color: dodgerblue">{{ $t('m.maNav') }}</span>
                      </router-link> -->

                    <div>
                      <span class="fancylight popup-btn info" v-if="$i18n.locale == 'zh-CN'" data-fancybox-group="light"
                        style="
                          text-decoration: none;
                          
                          font-family: 'Microsoft YaHei';
                          font-size: 15px;
                        ">
                        <p style="margin-bottom:0;">{{ item.CNinterest }}</p>
                      </span>
                      <span class="fancylight popup-btn info" v-else data-fancybox-group="light"
                        style="text-decoration: none; ">
                        <p style="margin-bottom:0;font-size: 15px;">{{ item.ENinterest }}</p>
                      </span>
                    </div>
                    </p>
                  </div>
                </div>

              </a>
            </div>

          </div>
        </div>
        <br />

        <h3 class="text-left" style="margin-top: 50px">{{ $t('m.phd') }}</h3>
        <hr />
        <div class="portfolio-item row" data-aos-easing="linear" data-aos-delay="100">
          <div v-for="item in PHDStudentsList" :key="item.id" class="item teachers col-lg-3 col-md-4 col-sm-6 col-sm">
            <div>
              <img class="img-fluid img-responsive" :src="item.picture"
                style="padding: 8px; border: 1px solid rgb(204, 197, 197)" alt="" />
              <div class="overlay">
                <p>
                  <span v-if="$i18n.locale == 'zh-CN'" target="_blank" class="fancylight popup-btn info"
                    data-fancybox-group="light" style="text-decoration: none;">{{ item.CNname }}
                    <!-- <i>{{item.Grade}}</i> -->
                    <div class="info-container">
                      {{ item.CNgrade }}{{ item.CNmajor }}
                    </div>
                  </span>
                  <span v-else target="_blank" class="fancylight popup-btn info" data-fancybox-group="light"
                    style="text-decoration: none; ">{{ item.ENname }}
                    <!-- <i>{{item.Grade}}</i> -->
                    <div class="info-container">
                      <div>{{ item.ENmajor }}</div>
                      <div>{{ item.ENgrade }}</div>
                    </div>
                  </span><br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 class="text-left" style="margin-top: 30px">
          {{ $t('m.master') }}
        </h3>
        <hr />
        <div class="portfolio-item row" data-aos-easing="linear" data-aos-delay="100">
          <div v-for="item in MasterStudentsList" :key="item.id"
            class="item teachers col-lg-3 col-md-4 col-sm-6 col-sm">
            <div>
              <img class="img-fluid img-responsive" :src="item.picture"
                style="padding: 8px; border: 1px solid rgb(204, 197, 197)" alt="" />
              <div class="overlay">
                <p>
                  <span v-if="$i18n.locale == 'zh-CN'" target="_blank" class="fancylight popup-btn info"
                    data-fancybox-group="light" style="text-decoration: none; ">{{ item.CNname }}
                    <!-- <i>{{item.Grade}}</i> -->
                    <div class="info-container">
                      {{ item.CNgrade }}{{ item.CNmajor }}
                    </div>
                  </span>
                  <span v-else target="_blank" class="fancylight popup-btn info" data-fancybox-group="light"
                    style="text-decoration: none; ">{{ item.ENname }}
                    <!-- <i>{{item.Grade}}</i> -->
                    <div class="info-container">
                      <div>{{ item.ENmajor }}</div>
                      <div>{{ item.ENgrade }}</div>
                    </div>
                  </span><br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 class="text-left" style="margin-top: 30px">
          {{ $t('m.undergraduate') }}
        </h3>
        <hr />
        <div class="portfolio-item row" data-aos-easing="linear" data-aos-delay="100">
          <div v-for="item in UndergraduateStudentsList" :key="item.id"
            class="item teachers col-lg-3 col-md-4 col-sm-6 col-sm">
            <div>
              <img class="img-fluid img-responsive" :src="item.picture" alt="" />
              <div class="overlay">
                <p>
                  <span target="_blank" v-if="$i18n.locale == 'zh-CN'" class="fancylight popup-btn info"
                    data-fancybox-group="light" style="text-decoration: none; ">{{ item.CNname }}
                    <!-- <i>{{item.Grade}}</i> -->
                    <div class="info-container">
                      {{ item.CNgrade }} {{ item.CNmajor }}
                    </div>
                  </span>
                  <span target="_blank" v-else class="fancylight popup-btn info" data-fancybox-group="light"
                    style="text-decoration: none; ">{{ item.ENname }}
                    <!-- <i>{{item.Grade}}</i> -->
                    <div class="info-container">
                      <div>{{ item.ENmajor }}</div>
                      <div>{{ item.ENgrade }}</div>
                    </div>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Style></Style>
    </section>
  </div>
</template>

<script>
// import Leaders from './pictures/Leaders.vue'
import Style from '@/pages/Style.vue';
export default {
  name: 'TeamName',
  components: { Style },
  data() {
    return {
      PHDStudentsList: [],
      MasterStudentsList: [],
      UndergraduateStudentsList: [],
      TeacherList: [],
    };
  },
  mounted() {
    this.axios.get('/deeptime/getMembers/1').then((response) => {
      this.TeacherList = response.data.data;
    });
    this.axios.get('/deeptime/getMembers/2').then((response) => {
      this.PHDStudentsList = response.data.data;
    });
    this.axios.get('/deeptime/getMembers/3').then((response) => {
      this.MasterStudentsList = response.data.data;
    });
    this.axios.get('/deeptime/getMembers/4').then((response) => {
      this.UndergraduateStudentsList = response.data.data;
    });
  },
};
</script>

<style>
@media (min-width: 1000px) {
  .principalImg {
    width: 220px;
    height: 220px;
  }
}

@media (min-width: 768px) and (max-width: 979px) {
  .principalImg {
    width: 300px;
    height: 300px;
  }
}

.professorImg {
  width: 300px;
}

.info-container {
  text-align: center;
}

.navtoTeacher:hover {
  text-decoration: none;
  border: 1px rgb(227, 214, 214) dashed;
}

.content-item:hover {
  text-decoration: none;
}
</style>
