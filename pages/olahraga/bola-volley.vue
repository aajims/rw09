<template>
    <div class="text-center">
        <Head>
            <Title>Jadwal Pertandingan Bola Volley di RW 09 Sukamulya Cikupa</Title>
            <Meta
            name="description"
            content="jadwal Pertandingan Bola Volley RW 09 Sukamulya kecamatan cikupa Tangerang"
            />
        </Head>
        <div class="grid grid-cols-4 gap-3">
            <div class="w-full p-1 mx-1 bg-slate-50 rounded-xl" v-for="row in caborList.data" :key="row.id">
                <div class="border-b px-1 pb-1">
                    <nuxt-link :to="'/olahraga/' + row.slug">
                        <div class="text-center my-1">
                            <img @error="onImageLoadFailure($event)" :src="BaseIMG + '/assets/img/cabor/' + row.logo" alt="foto" class="h-8 w-8 md:h-10 md:w-10 rounded-full border-4 border-white dark:border-gray-200 mx-auto" />
                            <div class="py-1">
                                <p class="font-bold text-xs text-center text-blue-400 mb-1">{{ row.name }}</p>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-solid py-2 px-6 rounded-md mb-11">
            <div class="tex-sm md:text-xl font-bold text-slate-100 mt-6 mb-2">Jadwal Pertandingan Bola Volley </div>
            <!-- <div class="text-xs md:text-sm font-bold text-slate-100 my-3"><p>Lokasi : {{ lokasi }}</p></div> -->
            <vue-good-table
            :columns="columns"
            :rows="rows"
            :pagination-options="{
                enabled: true
            }">
            <template #table-row="props">
                <span style="font-size: 12px;" v-if="props.column.field == 'waktu'">
                <span>{{ format_date(props.row.waktu) }}</span> 
              </span>
              <span style="font-size: 12px;" v-else-if="props.column.field == 'cabors.name'">
                <span>{{ props.row.cabors.name }}</span> 
              </span>
              <span style="font-size: 12px;" v-else-if="props.column.field == 'team_a'">
                <span>{{ props.row.team_a }}</span> 
              </span>
              <span style="font-size: 12px;" v-else-if="props.column.field == 'team_b'">
                <span>{{ props.row.team_b }}</span> 
              </span>
              <span style="font-size: 12px;" v-else-if="props.column.field == 'score'">
                <span>{{ props.row.score }}</span> 
              </span>
              <span v-else>
                {{props.formattedRow[props.column.field]}}
              </span>
          </template>
        </vue-good-table>
        </div>
    </div>
</template>

<script>
    import 'vue-good-table-next/dist/vue-good-table-next.css'
    import { VueGoodTable } from 'vue-good-table-next';
    import { getVolley, getAllCabor } from '@/api/caborService';
    import moment from 'moment';

    export default {
        components: {
            VueGoodTable,
        },
        data() {
            return {
                BaseIMG: import.meta.env.VITE_API_IMG,
                caborList: { data: [] },
                lokasi: null,
                columns: [ 
                {
                label: 'Cabor',
                field: 'cabors.name',
                },
                {
                label: 'Waktu',
                field: 'waktu',
                },
                {
                label: 'Team ',
                field: 'team_a',
                },
                {
                label: 'Team ',
                field: 'team_b',
                },
                {
                label: 'Score',
                field: 'score',
                }
                ],
                rows: [
                ], // Data tabel
                paginationOptions: {
                enabled: true,
                perPage: 10, // Jumlah item per halaman
                },
            };
        },
        async mounted() {
            await this.loadData();
            await this.loadCabor();
            // await this.location();
        },
        methods: {
            format_date(value){
                if (value) {
                return moment(String(value)).format('DD-MM-YYYY HH:mm')
                }
            },
            async loadData() {
            this.rows = await getVolley();
            },
            async loadCabor() {
                this.caborList = await getAllCabor();
            },
            async location() {
                this.lokasi = await getVolleyLocation();
            },
        },
    }
</script>

