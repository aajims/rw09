<template>
   <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="30"
    :speed="900"
    :parallax="true"
    :autoplay="{
      delay: 5500,
      disableOnInteraction: false,
    }"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="row in slideList.data" :key="row.id">
      <div class="relative" >
        <div class="absolute bottom-16 left-8 text-slate-100" data-swiper-parallax="-300">{{ row.title }}</div>
        <div class="absolute bottom-8 left-8 text-slate-100 text-xs" data-swiper-parallax="-200">{{ row.detail }}</div>
        <img :src="BaseIMG + '/' + row.image" alt="foto" class="h-60 w-full" />
      </div>
    </swiper-slide>
    ...
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Autoplay, Parallax, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import { getSlide } from '@/api/slideService';

  export default {
    data() {
            return {
            BaseAPI: process.env.API_URL,
            BaseIMG: import.meta.env.VITE_API_IMG,
            slideList: [],
            };
        },
        mounted() {
            this.loadSlide();
        },
        methods: {
            async loadSlide() {
            this.slideList = await getSlide();
            },
        },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        // console.log(swiper);
      };
      const onSlideChange = () => {
        // console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [ Autoplay, Parallax,  Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>

