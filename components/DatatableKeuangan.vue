<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="rows"
            :pagination-options="{
                enabled: true
            }">
            <template #table-row="props">
              <span style="font-size: 11px;" v-if="props.column.field == 'tanggal'">
                <span>{{ format_date(props.row.tanggal) }}</span> 
              </span>
              <span v-else-if="props.column.field == 'kategori_keuangan.nama_kategori'">
                <span style="font-size: 11px">{{ props.row.kategori_keuangan.nama_kategori }}</span> 
              </span>
              <span v-else-if="props.column.field == 'keterangan'">
                <span style="font-size: 11px">{{ props.row.keterangan }}</span> 
              </span>
              <span v-else-if="props.column.field == 'pemasukan'">
                <span style="font-size: 11px; font-weight: bold; color: blue;">Rp. {{ formatPrice(props.row.pemasukan) }}</span> 
              </span>
              <span v-else-if="props.column.field == 'pengeluaran'">
                <span style="font-size: 11px; font-weight: bold; color: blue;">Rp. {{ formatPrice(props.row.pengeluaran) }}</span> 
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
          className: 'tanggal-header',
        },
        {
          label: 'Kategori',
          field: 'kategori_keuangan.nama_kategori',
          className: 'tanggal-header',
        },
        {
          label: 'Debet',
          field: 'pemasukan',
          className: 'tanggal-header',
        },
        {
          label: 'Kredit',
          field: 'pengeluaran',
          className: 'tanggal-header',
        },
        {
          label: 'Keterangan',
          field: 'keterangan',
          className: 'tanggal-header',
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
  <style scoped>
  .vue-good-table .vgt-table thead .tanggal-header {
    font-size: 12px;
  }
  </style>