<template>
  <div class="NewsDetail">
    <div class="title" v-if="$route.query.locale == 'zh-CN'">
      {{ NewsInfo.CNtitle }}
    </div>
    <div class="title" v-else>{{ NewsInfo.ENtitle }}</div>
    <div class="time-box">
      <svg
        t="1671090193000"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2166"
        width="12"
        height="20"
      >
        <path
          d="M480 298.666667a32 32 0 0 1 64 0v149.333333a32 32 0 0 0 32 32h149.333333a32 32 0 0 1 0 64h-149.333333a96 96 0 0 1-96-96v-149.333333zM512 960C264.576 960 64 759.424 64 512S264.576 64 512 64s448 200.576 448 448-200.576 448-448 448z m0-64c212.074667 0 384-171.925333 384-384S724.074667 128 512 128 128 299.925333 128 512s171.925333 384 384 384z"
          fill="#000000"
          p-id="2167"
        ></path></svg
      ><span style="margin-left: 10px">{{ NewsInfo.time }}</span>
    </div>
    <hr style="width: 80%" />
    <div class="img-container">
      <img :src="NewsInfo.image" alt="" style="width: 30%" />
    </div>
    <div class="content" v-if="$route.query.locale == 'zh-CN'">
      {{ NewsInfo.CNcontent }}
    </div>
    <div class="content" v-else>{{ NewsInfo.ENcontent }}</div>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data() {
    return {
      NewsInfo: {},
      c: '',
    };
  },
  mounted() {
    console.log(this.$route.query);
    this.axios
      .get('/deeptime/getNewsById/' + this.$route.query.id)
      .then((response) => {
        console.log(response);
        this.NewsInfo = response.data.data[0];
        this.c = ' ';
      });
  },
};
</script>

<style scoped>
.title {
  font-size: 1.7rem;
  width: 100%;
  font-weight: bold;
  text-align: center;
  padding: 0 10%;
}
.content {
  padding: 40px 10%;
  text-align: left;
  text-indent: 2rem;
}
.img-container {
  width: 100%;
}
.time-box {
  color: rgb(180, 180, 175);
  font-size: 0.6rem;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
