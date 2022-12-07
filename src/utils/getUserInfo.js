import axios from 'axios';
export function getUserInfo() {
  axios.get('https://www.machao.group/deeptime/getUserIP').then((res) => {
    const ipAddress = res.data.ip;
    const province = res.data.province;
    const city = res.data.city;
    sessionStorage.setItem('ip', ipAddress);
    sessionStorage.setItem('location', province + city);
  });
}
