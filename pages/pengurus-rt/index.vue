<template>
    <div class="text-center">
        <Head>
        <Title>Data Pengurus RT di RW 09 mulya asri 2 Sukamulya </Title>
        <Meta
          name="description"
          content="data pengurus RT di RW 09 mulya asri 2 Sukamulya kecamatan cikupa Tangerang"
        />
      </Head>
        <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-solid p-8 rounded-md mb-11">
            <div class="mb-6">
                <p class="text-xl text-slate-50 font-bold text-center">
                Data Pengurus RT di RW 09
                </p>
            </div>
            <div class="grid-cols-1 grid md:grid-cols-2 gap-3 ">
                <div class="w-full p-2 mx-2 bg-slate-50 rounded-xl" v-for="row in rtList.data" :key="row.id">
                    <h3 class="text-xl font-bold text-blue-800 pt-2">Pengurus {{ row.nama }}</h3>
                    <div class="border-b px-1 md:px-4 pb-1">
                        <div class="flex md:block md:text-center my-4">
                            <img @error="onImageLoadFailure($event)" :src="BaseIMG + '/' +row.foto" alt="foto" class="h-24 w-24 rounded-full border-4 border-white dark:border-gray-200 mx-auto" />
                            <div class="py-2 text-left md:text-center">
                                <h3 class="font-bold text-lg md:text-xl text-blue-800 mb-1">{{ row.ketua }}</h3>
                                <div class="inline-flex text-gray-700 dark:text-gray-500 text-left md:items-center">
                                    Ketua {{ row.nama }}
                                </div>
                               
                            </div>
                        </div>
                        <div class="mt-1 text-left md:text-center ml-8 md:ml-0">
                            <div class="py-2">
                                Sekertaris : {{ row.sekertaris }}
                            </div>
                            <div class="py-2">
                                Bendahara : {{ row.bendahara }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllRt } from '@/api/rtService';

    export default {
        data() {
            return {
            
            BaseIMG: import.meta.env.VITE_API_IMG,
            rtList: [],
            };
        },
        mounted() {
            this.loadRt();
        },
        methods: {
            onImageLoadFailure (event) {
                event.target.src = "assets/img/human_icon.png"   
            },
            async loadRt() {
            this.rtList = await getAllRt();
            },
        },
    }

</script>
