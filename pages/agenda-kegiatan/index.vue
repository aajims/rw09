<template>
    <div class="text-center">
        <Head>
        <Title>Agenda Kegiatan lingkungan di RW 09 mulya asri 2 Sukamulya Cikupa Tangerang</Title>
        <meta
          name="description"
          content="agenda kegiatan di lingkungan RW 09 mulya asri 2 Sukamulya kecamatan Cikupa Tangerang"
        />
        
      </Head>
        <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-solid px-4 pt-1 pb-7 rounded-md mb-14">
            <div class="text-xl font-bold text-slate-100 my-6">Agenda Kegiatan RW 09</div>
            <div v-if="kegiatanList.data && kegiatanList.data.length > 0" class="grid-cols-1 grid md:grid-cols-2 gap-3 ">
                <div class="w-full relative p-4 mr-6 bg-slate-50 rounded-xl" v-for="row in kegiatanList.data" :key="row.id">
                    <h3 class="text-xl font-bold text-blue-800 pt-2">{{ row.nama_agenda }}</h3>
                    <div class="text-center">
                        <div class="py-2">
                            <h3 class="font-bold text-sm text-blue-400 mb-1">{{ row.waktu }}</h3>
                            <div class="inline-flex text-gray-700 dark:text-gray-500 items-center">
                                {{ row.lokasi }}
                            </div>
                            <nuxt-link :to="'/galery-foto/' + row.id">
                                <div class="my-5 text-slate-50">
                                    <button class="rounded-full bg-blue-500 py-1 px-4">Gallery Foto</button>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="absolute right-3 bottom-3 text-xs">
                            {{ row.agenda_kategori }}
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllKegiatan } from '@/api/kegiatanService';

    export default {
        data() {
            return {
            BaseIMG: import.meta.env.VITE_API_IMG,
            kegiatanList: { data: [] }, // Pastikan ini sesuai dengan struktur data dari API
            };
        },
        mounted() {
            this.loadKegiatan();
        },
        methods: {
            async loadKegiatan() {
            this.kegiatanList = await getAllKegiatan();
            },
        },
    }

</script>
