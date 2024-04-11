<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="rows"
            :pagination-options="{
                enabled: true
            }">
             <template #table-row="props" >
                <span v-if="props.column.field == 'actions'">
                    <nuxt-link style="font-weight: bold; color: blue;" :to="'/penduduk/'+ props.row.id">Detail</nuxt-link>
                    <!-- <a href="#" @click="editRow(props.row.id)" style="font-weight: bold; color: blue;">Detail</a> -->
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
    import { getAllPenduduk } from '@/api/pendudukService';
    
  export default {
    components: {
        VueGoodTable,
    },
    data() {
      return {
        columns: [ 
        {
          label: 'RT',
          field: 'rts.nama',
        },
        {
          label: 'Nama',
          field: 'nama_lengkap',
        },
        {
          label: 'Gender',
          field: 'jk',
        },
        {
          label: 'Agama',
          field: 'agama',
        },
        {
          label: 'Status',
          field: 'status_perkawinan',
        },
       {
        label: 'Action',
        field: 'actions'
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
        editRow(id) {
            this.$router.push({ path: 'penduduk/' + id });
        },
      async loadData() {
        this.rows = await getAllPenduduk();
      },
    },
  };
  </script>
  