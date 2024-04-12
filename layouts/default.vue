<template>
  <main class="my-0 mx-auto min-h-full max-w-screen-sm border-slate-800">
    <Header />
    <div class="relative mb-3 h-[200px] bg-slate-300">
      <img class="max-h-[200px] w-full object-cover" src="../public/assets/img/bg-head.jpg" />
      <div class="fixed left-0 z-20 h-[60px] w-full transition delay-150 ease-in-out bg-transparent">
      </div>
      <div class="absolute top-5 md:top-8 left-6 translate-y-3/4 xs:translate-y-[100%]">
          <h3 class="mb-3 w-48 md:w-64 text-xs md:text-[18px] font-bold text-blue-50 leading-6">Data Informasi kegiatan Lingkungan RW 09 Sukamulya Cikupa Tangerang</h3>
        </div>
    </div>
    <nuxt/>
    <main>
      <slot /> 
    </main>
    <Footer />
  </main>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header, Footer, 
  },
}
</script>
