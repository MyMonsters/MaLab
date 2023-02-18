<template>
  <div class="lantern">
    <div class="lantern-container">
      <span class="head-line"></span>
      <div class="center">
        <div class="center-line">
          <span>{{ word }}</span>
        </div>
      </div>
      <span class="footer-line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lanternName',
  props: ['word'],
};
</script>

<style scoped>
:root {
  --lineColor: #ecaa2f;
  --bg: #f00;
}
.lantern-container {
  margin-top: 64px;
  width: 200px;
  height: 150px;
  position: relative;
  /* animation: rotate 3s infinite ease-in-out; */
}
.center {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f00;
  border-radius: 120px;
  box-shadow: 0 0 80px -10px #f00;
  /* animation: rotate 3s infinite ease-in-out; */
  transform-origin: top center;
}
.center-line {
  width: 100%;
  height: 100%;
}
.center-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: calc(50% - 75px);
  width: 150px;
  height: 150px;
  border: 2px solid #ecaa2f;
  border-radius: 50%;
}
.center-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: calc(50% - 35px);
  width: 70px;
  height: 150px;
  border: 2px solid #ecaa2f;
  border-radius: 50%;
}
.center-line span {
  position: absolute;
  top: 50%;
  left: 41%;
  transform: translate(-50%, -50%);
  width: 18px;
  font-size: 20px;
  color: #ecaa2f;
  font-weight: bold;
  text-align: center;
}
.center::before {
  content: '';
  position: absolute;
  top: -8px;
  left: calc(50% - 40px);
  width: 80px;
  height: 10px;
  background: #ecaa2f;
  border-radius: 5px 5px 0 0;
  z-index: 2;
}
.center::after {
  content: '';
  width: 80px;
  height: 10px;
  background: #ecaa2f;
  border-radius: 0 0 5px 5px;
  position: absolute;
  bottom: -8px;
  left: calc(50% - 40px);
  z-index: 2;
}
.head-line {
  position: absolute;
  left: calc(50% - 2px);
  top: -60px;
  width: 4px;
  height: 60px;
  background-color: #ecaa2f;
}
.footer-line {
  position: absolute;
  left: calc(50% - 2px);
  bottom: -50px;
  width: 4px;
  height: 50px;
  background-color: #ecaa2f;
  /* z-index: -1; */
  /* animation: rotate 3s infinite ease-in-out; */
}
.footer-line::after {
  content: '';
  position: absolute;
  bottom: -75px;
  left: calc(50% - 8px);
  width: 16px;
  height: 80px;
  background: linear-gradient(
    #f00,
    #e36d00 3px,
    #fbd342 5px,
    #e36d00 8px,
    #e36d00 12px,
    #f00 16px,
    rgba(255, 0, 0, 0.8) 26px,
    rgba(255, 0, 0, 0.6)
  );
  border-radius: 5px 5px 0 0;
}
@keyframes rotate {
  0%,
  100% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
}
</style>
