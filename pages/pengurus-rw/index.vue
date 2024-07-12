<template>
    <div class="text-center">
        <Head>
            <Title>Data Pengurus RW 09 mulya asri 2 di Sukamulya Cikupa Tangerang </Title>
            <Meta
            name="description"
            content="data pengurus RW 09 mulya asri 2 Sukamulya kecamatan cikupa Tangerang"
            />
        </Head>
        <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-solid py-2 px-6 rounded-md">
            <div class="text-xl font-bold text-slate-100 my-6">Data Pengurus RW 09</div>
            <div class="grid-cols-1 grid md:grid-cols-2 gap-3 ">
                <div class="w-full p-2 mx-2 bg-slate-50 rounded-xl" v-for="row in rwList.data" :key="row.id">
                    <div class="border-b px-1 md:px-4 pb-1">
                        <div class="md:text-center my-4 flex md:block ">
                            <img @error="onImageLoadFailure($event)" :src="BaseIMG + '/' +row.foto" alt="foto" class="h-24 w-24 rounded-full border-4 border-white dark:border-gray-200 md:mx-auto" />
                            <div class="py-2 pl-4 md:pl-0">
                                <h3 class="text-xl font-bold text-blue-800 pt-1 pb-2">{{ row.name }}</h3>
                                <h3 class="font-bold text-sm text-blue-400 mb-1">{{ row.jabatans.name }}</h3>
                                <div class="inline-flex text-gray-700 dark:text-gray-500 items-center">
                                    {{ row.periode }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllRw } from '@/api/rwService';

    export default {
        data() {
            return {
            
            BaseIMG: import.meta.env.VITE_API_IMG,
            rwList: [],
            };
        },
        mounted() {
            this.loadRw();
        },
        methods: {
            onImageLoadFailure (event) {
                event.target.src = "assets/img/human_icon.png"   
            },
            async loadRw() {
            this.rwList = await getAllRw();
            },
        },
    }
</script>
