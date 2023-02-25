import { Backtop, Carousel, CarouselItem } from 'element-ui';

const components = [Carousel, CarouselItem, Backtop];
import Vue from 'vue';
export default function globalRegister() {
  for (const component of components) {
    Vue.use(component);
  }
}
