<template>
  <div class="carousel-container container">
    <h1>{{ $t('m.style') }}</h1>
    <br /><br />
    <el-carousel :autoplay="false" type="card" height="500px">
      <el-carousel-item>
        <img
          src="https://source.machao.group/style.jpg"
          style="width: 100%"
        />
      </el-carousel-item>
    </el-carousel>
    <!-- <el-carousel :interval="5000" height="500px" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <div style="height: 100%">
          <img :src="`./img/about/1.jpg`" style="width: 100%" />
        </div>
      </el-carousel-item>
    </el-carousel> -->
  </div>
</template>

<script>
export default {
  name: 'styleName',
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: inherit;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: inherit;
}

.carousel-container {
  margin-left: auto;
  margin-top: 10%;
}
</style>
