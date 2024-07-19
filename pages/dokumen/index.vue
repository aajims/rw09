<template>
    <div class="text-center">
        <Head>
        <Title>Dokumen di RW 09 mulya asri 2 Sukamulya Cikupa Tangerang</Title>
        <meta
          name="description"
          content="dokumen di RW 09 mulya asri 2 Sukamulya kecamatan Cikupa Tangerang"
        />
        
      </Head>
        <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-solid px-4 pt-1 rounded-md mb-11 pb-11">
            <div class="text-xl font-bold text-slate-100 my-6">Tata Tertib dan AD/ART di RW 09</div>
            <div v-if="DokumenList.data && DokumenList.data.length > 0" class="grid-cols-1 grid md:grid-cols-2 gap-3 mb-7">
                <div class="w-full relative p-4 mx-2 bg-slate-50 rounded-xl" v-for="row in DokumenList.data" :key="row.id">
                    <h3 class="text-sm md:text-xl font-bold text-blue-800 pt-2">{{ row.title }}</h3>
                    <div class="text-center">
                        <div class="pt-11">
                            <nuxt-link :to="'/dokumen/' + row.slug">
                                <div class="absolute mx-auto bottom-2 mt-5 text-slate-50">
                                    <button class="text-sm rounded-full bg-blue-500 py-1 px-4">Selengkapnya...</button>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllDokumen } from '@/api/dokumenService';

    export default {
        data() {
            return {
            BaseIMG: import.meta.env.VITE_API_IMG,
            DokumenList: { data: [] }, 
            };
        },
        mounted() {
            this.loadDokumen();
        },
        methods: {
            async loadDokumen() {
            this.DokumenList = await getAllDokumen();
            },
        },
    }

</script>
