<template>
    <div class="text-center">
        <Head>
            <Title>Data Cabang Olahraga di RW 09 mulya asri 2 Sukamulya Cikupa</Title>
            <Meta
            name="description"
            content="data Cabang Olahraga lingkungan RW 09 mulya asri 2 Sukamulya kecamatan cikupa Tangerang"
            />
        </Head>
        <div class="text-xl font-bold text-slate-700 my-6">Daftar Cabang Olahraga di RW 09</div>
        <div class="grid grid-cols-3 gap-3">
            <div class="w-full p-2 mx-2 bg-slate-50 rounded-xl" v-for="row in caborList.data" :key="row.id">
                <div class="border-b px-3 pb-1">
                    <nuxt-link :to="'/olahraga/' + row.slug">
                        <div class="text-center my-4">
                            <img @error="onImageLoadFailure($event)" :src="BaseIMG + '/assets/img/cabor/' + row.logo" alt="foto" class="h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-white dark:border-gray-200 mx-auto" />
                            <div class="py-2">
                                <p class="font-bold text-xs text-center text-blue-400 mb-1">{{ row.name }}</p>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllCabor } from '@/api/caborService';

    export default {
        data() {
            return {
            BaseIMG: import.meta.env.VITE_API_IMG,
            caborList: { data: [] }, // Inisialisasi caborList dengan data array kosong
            };
        },
        mounted() {
            this.loadPetugas();
        },
        methods: {
            onImageLoadFailure (event) {
                event.target.src = "assets/img/human_icon.png"   
            },
            async loadPetugas() {
            this.caborList = await getAllCabor();
            },
        },
    }
</script>

