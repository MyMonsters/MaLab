<template>
  <div>
    <div>
      <!-- <span id="busuanzi_value_site_uv" class="showvisit"></span>  -->
      <span>{{ pv }}</span> Total PageViews
    </div>
    <div ref="myEchart" class="myEchart"></div>
  </div>
</template>

<script>
import '@/../node_modules/echarts/map/js/world.js';
import echarts from 'echarts';
import 'echarts-gl';
import axios from 'axios';
export default {
  name: 'mapName',
  data() {
    return {
      pv: 0,
      point: [],
    };
  },
  mounted() {
    axios.get('https://www.machao.group/deeptime/getPoint').then((res) => {
      // sessionStorage.setItem('point', JSON.stringify(res.data.data));
      this.point = res.data.data;
      // return Promise.resolve(res.data.data)
    });
    axios.get('https://www.machao.group/deeptime/getUserIP').then((res) => {
      // const info = JSON.parse(res.data.res);
      // const ipAddress = res.data.ip;
      // const province = info.region;
      // const city = info.city;
      const pageview = res.data.pv;
      // sessionStorage.setItem('ip', ipAddress);
      // sessionStorage.setItem('location', city + ',' + province);
      this.pv = pageview;
    });
    // return point;

    this.initEcharts();
  },
  watch: {
    pv(newValue) {
      this.pv = newValue;
    },
    point(newValue) {
      this.point = newValue;
      this.initEcharts();
    },
  },
  methods: {
    initEcharts() {
      var mychartMap = echarts.init(this.$refs.myEchart);
      const series = this.point.map((item) => {
        return {
          type: 'scatter',
          coordinateSystem: 'geo',
          // blendMode: 'difference',
          symbolSize: 7, // 点位大小
          itemStyle: {
            // color: '#ce6a73', // 各个点位的颜色设置
            // color: '#9a5562',
            color: '#1f77b6',
            opacity: 1, // 透明度
            borderWidth: 1, // 边框宽度
            borderColor: 'rgba(255,255,255,0)', //rgba(180, 31, 107, 0.8)
            borderJoin: 'round',

            shadowBlur: 10,
            // shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
          },
          tooltip: {
            backgroundColor: 'rgba(255,255,255, 1)',
            // position: [],
            textStyle: {
              fontSize: 10,
              color: '#000',
            },
            formatter: () => {
              return item.pageview + 'visitors from ' + item.country;
            },
          },

          data: [[item.longitude, item.latitude]],
        };
      });
      let option = {
        backgroundColor: '',
        // backgroundColor:'#fff',
        tooltip: {
          trigger: 'item',
        },
        legend: {
          show: false,
          bottom: 150,
          width: 300,
          height: 200,
          textStyle: {
            fontSize: 20,
          },
        },
        geo: {
          map: 'world',

          // roam: true,
          // roam: true,
          zoom: 1.1,
          label: {
            emphasis: {
              show: false,
            },
          },
          // silent: true,
          itemStyle: {
            normal: {
              // areaColor: '#004981', //地图颜色
              areaColor: '#fff',
              // areaColor: "black",
              borderColor: 'black',
            },
            emphasis: {
              areaColor: '#0b1c2d',
            },
          },
        },
        series: series,
      };

      if (option && typeof option === 'object') {
        mychartMap.setOption(option, true);
      }
      window.onresize = mychartMap.resize;
    },
  },
};
</script>

<style scoped>
.myEchart {
  /* background-color: #044161; */
  background-color: #353030;
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: stretch;
  align-items: center;
  border-radius: 20px;
}
</style>
