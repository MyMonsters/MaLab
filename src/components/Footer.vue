<template>
  <div class="footer">
    <div class="left">
      <div class="typing">Ma Lab</div>
    </div>
    <div class="right">
      <div class="record">
        <svg
          t="1669805839091"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2959"
          width="16"
          height="16"
        >
          <path
            d="M512 1024c210.176-76.8 350.208-185.088 420.096-319.232 91.904-160.768 112.128-346.368 70.144-563.2L512 0 21.76 147.968q-62.976 316.16 63.232 555.776C161.792 837.888 301.824 947.2 512 1024zM147.968 678.144C70.912 537.6 51.2 377.856 84.992 192.512L512 64.768l427.008 128C967.168 377.856 947.2 537.6 870.4 671.744c-62.976 114.944-182.016 204.8-358.4 274.688-182.016-64-301.056-159.744-364.032-268.288z"
            fill="white"
            p-id="2960"
          ></path>
          <path
            d="M512 646.144l-238.08-217.088 56.064-44.8L512 550.4l252.16-229.888 55.808 44.544L512 646.144z"
            fill="white"
            p-id="2961"
          ></path>
        </svg>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          class="record-style"
          >渝ICP备2022013486号-1
        </a>
      </div>
      <!-- <statics /> -->
      <div class="statics">
        <div>
          本站总访问量<span id="busuanzi_value_site_pv" class="showvisit"></span
          >次
        </div>
        <!-- <div>
          本站总访客数<span id="busuanzi_value_site_uv" class="showvisit"></span
          >人
        </div> -->
        <!-- <div>
          本站总访客数<span id="busuanzi_value_page_uv" class="showvisit"></span
          >人
        </div>
        <div>
          本站总访客数<span id="busuanzi_value_page_pv" class="showvisit"></span
          >人
        </div> -->
      </div>
      <div class="userInfo">{{ ip }} {{ position }}</div>
    </div>
  </div>
</template>

<script>
// import Statics from './Statics.vue';
export default {
  name: 'footerName',
  data() {
    return {
      ip: '',
      position: '',
    };
  },
  mounted() {
    this.ip = sessionStorage.getItem('ip');
    this.position = sessionStorage.getItem('location');
  },
  //   components: {
  //     Statics,
  //   },
};
</script>

<style lang="css" scoped>
.footer {
  /* background-color: #3f51b5; */
  background-color: #353030;
  height: 150px;
  width: 100%;
  padding: 20px 0;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.statics {
}
.showvisit {
  letter-spacing: 0.2rem;
  font-size: 1rem;
  background-image: -webkit-linear-gradient(
    left,
    #cf4083,
    #e6d205 25%,
    #86ca71 50%,
    #e6d205 75%,
    #2dc15a
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-background-size: 200% 100%;
  padding: 0 2px;
}

.record-style {
  color: white;
  text-decoration-line: underline;
  margin-left: 2px;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.8em;
}
.statics {
  margin-top: 20px;
  font-size: 1em;
}
@keyframes write {
  0% {
    max-width: 0;
  }
  50% {
    max-width: 100px;
  }
  100% {
    max-width: 200px;
  }
}
@keyframes blink {
  50% {
    /* transparent是全透明黑色(black)的速记法，即一个类似rgba(0,0,0,0)这样的值。 */
    border-color: transparent; /* #00000000 */
  }
}

.typing {
  color: white;
  font-size: 2.5rem;
  /* 初始宽度为0 */
  font-family: Consolas, Monaco;
  height: 72px;
  /* animation: write 2s steps(56) forwards, blink 0.8s infinite;
  animation-iteration-count: infinite; */
  /* animation: write 2s steps(42, end), blink 0.75s step-end infinite; */
  /* word-break: break-all; */
}

/* 打印效果 */
</style>
