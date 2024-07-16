<template>
    <div class="text-center">
      <Head>
        <Title>Data Penduduk di RW 09 mulya asri 2 Sukamulya Cikupa Tangerang</Title>
        <Meta
          name="description"
          content="data penduduk RW 09 mulya asri 2 Sukamulya kecamatan Cikupa Tangerang"
        />
      </Head>
        <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-solid py-2 px-6 rounded-md mb-11">
            <div class="text-xl font-bold text-slate-100 my-6">Data Penduduk di RW 09</div>
            <DataTable />
        </div>
    </div>
  </template>
  
  <script>
  import DataTable from '@/components/DatatablePenduduk.vue';
  
  export default {
    components: {
      DataTable,
    },
  };
  </script>
  
