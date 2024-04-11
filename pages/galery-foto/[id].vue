<template>
    <div class="text-center">
        <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-solid p-8 rounded-md">
            <div class="text-xl font-bold text-slate-100 my-6">Foto Agenda Kegiatan di RW 09</div>
            <div class="grid-cols-1 grid md:grid-cols-2 gap-3">
                <div class="w-full p-1 mx-1 bg-slate-50 rounded-xl" v-for="row in fotoList.data" :key="row.id">
                    <img :src="BaseIMG + '/' + row.images" alt="foto" class="border-1 border-white dark:border-gray-200 mx-auto" />
                        <h5 class="text-xl font-bold text-blue-800 pt-2">{{ row.agenda.nama_agenda }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { viewFoto } from '@/api/fotoService';

    export default {
        data() {
            return {
            BaseAPI: process.env.API_URL,
            BaseIMG: 'https://be.rw09sukamulya.com/public',
            fotoList: [],
            };
        },
        mounted() {
            this.viewFoto();
        },
        methods: {
            async viewFoto() {
            this.fotoList = await viewFoto(this.$route.params.id);
            },
        },
    }

</script>
