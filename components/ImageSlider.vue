<template>
  <div class="mb-3"><h5><b>Gallery Foto Kegiatan</b></h5></div>
   <swiper
    :modules="modules"
    :slides-per-view="2"
    :space-between="15"
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
        <img :src="BaseIMG + '/' + row.images" alt="foto" class="h-36 w-full" />
      </div>
    </swiper-slide>
    ...
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Parallax, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import { fotoSlide } from '@/api/fotoService';

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
            this.slideList = await fotoSlide();
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
        modules: [ Parallax,  Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>

