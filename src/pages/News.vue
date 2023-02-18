<template>
  <div class="container">
    <h2 class="News-title">News</h2>
    <div class="News-list" v-for="item of news.list" :key="item.id">
      <router-link
        :to="{
          path: `/NewsDetail?id=${item.id}`,
          query: { locale: $i18n.locale },
        }"
        target="_blank"
        style="text-decoration: none"
      >
        <div class="News-item">
          <div class="content-container col col-lg-8 col-md-8 col-sm-12">
            <div class="date">{{ item.time }}</div>

            <h3 class="title" v-if="$i18n.locale == 'zh-CN'">
              {{ item.CNtitle }}
            </h3>
            <h3 class="title" v-else>{{ item.ENtitle }}</h3>
          </div>
          <div class="img-container col-lg-4 col-md-4 col-sm-8">
            <img :src="item.image" style="width: 100%" />
          </div>
        </div>
      </router-link>
    </div>
    {{ count }}
  </div>
</template>

<script>
export default {
  name: 'NewsName',
  data() {
    return {
      news: {},
      count: '',
    };
  },
  mounted() {
    this.axios.get('/deeptime/getNews').then((response) => {
      this.news.list = response.data.data;
      this.count = ' ';
    });
    // this.newsList = [
    //   {
    //     id: 1,
    //     title:
    //       '关于全国大学生地质技能竞赛数据驱动分赛暨DDE全球青年创新大赛中国赛区选拔赛决赛获奖团队公示的通知',
    //     image: 'http://hellodde2022.org/assets/banner-img.469fb22b.png',
    //     date: '2022/12/15',
    //   },
    // ];
  },
};
</script>

<style scoped>
.News-title {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: left;
  margin: 6% 0;
  font-size: 3rem;
}
.News-list {
  margin: 30px 3%;
  font-family: 'Times New Roman', Times, serif;
}
.News-item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  /* background-color: rgba(174, 186, 209, 0.171); */
  border: 1px solid rgba(174, 186, 209, 0.271);
  padding: 20px;
  border-radius: 20px;
  color: #6c757d;
}

.News-item:hover {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  border-radius: 20px;
}
/* .img-container {
  width: 40%;
} */
.content-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  /* width: 60%; */
}
.date {
  height: 30%;
  text-align: left;
  font-size: 1.2rem;
}
.title {
  font-size: 1.5rem;
  text-align: left;
}
</style>
