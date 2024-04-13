<template>
    <div class="text-center">
      <Head>
        <Title>Data Keuangan di RW 09 Sukamulya Cikupa Tangerang</Title>
        <Meta
          name="description"
          content="data keuangan di lingkungan RW 09 Sukamulya kecamatan Cikupa Tangerang"
        />
      </Head>
        <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-solid py-2 px-6 rounded-md">
            <div class="text-xl font-bold text-slate-100 my-6">Data Keuangan di RW 09</div>
            <DataTable />
        </div>
    </div>
  </template>
  
  <script>
  import DataTable from '@/components/DatatableKeuangan.vue';
  
  export default {
    components: {
      DataTable,
    },
  };
  </script>
  
