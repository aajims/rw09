<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="rows"
            :pagination-options="{
                enabled: true
            }">
            <template #table-row="props">
              <span v-if="props.column.field == 'tanggal'">
                <span>{{ format_date(props.row.tanggal) }}</span> 
              </span>
              <span v-else-if="props.column.field == 'pemasukan'">
                <span style="font-weight: bold; color: blue;">{{ formatPrice(props.row.pemasukan) }}</span> 
              </span>
              <span v-else-if="props.column.field == 'pengeluaran'">
                <span style="font-weight: bold; color: blue;">{{ formatPrice(props.row.pengeluaran) }}</span> 
              </span>
              <span v-else>
                {{props.formattedRow[props.column.field]}}
              </span>
          </template>
        </vue-good-table>
    </div>
  </template>
  
  <script>
    import 'vue-good-table-next/dist/vue-good-table-next.css'
    import { VueGoodTable } from 'vue-good-table-next';
    import { getAllKeuangan } from '@/api/keuanganService';
    import moment from 'moment';
    
  export default {
    components: {
        VueGoodTable,
    },
    data() {
      return {
        columns: [ 
        {
          label: 'Tanggal',
          field: 'tanggal',
        },
        {
          label: 'Kategori',
          field: 'kategori_keuangan.nama_kategori',
        },
        {
          label: 'Pemasukan',
          field: 'pemasukan',
        },
        {
          label: 'Pengeluaran',
          field: 'pengeluaran',
        },
        {
          label: 'Keterangan',
          field: 'keterangan',
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
    },
    methods: {
      format_date(value){
         if (value) {
           return moment(String(value)).format('DD-MM-YYYY')
          }
      },
      formatPrice (value) {
        let val = (value / 1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      },
      async loadData() {
        this.rows = await getAllKeuangan();
      },
    },
  };
  </script>
  