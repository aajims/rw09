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
              <div class="grid gap-2 grid-cols-2 md:grid-cols-3">
                <div class="relative p-4 mx-2 bg-slate-50 rounded-xl mb-8">
                  <h3 class="text-sm md:text-xl font-bold text-blue-800 pt-2">Data RT 23</h3>
                  <div class="text-center">
                      <div class="pt-0">
                        <div class="tex-sm font-bold text-black py-4">Total Data KK</div>
                        <div class="text-md mx-auto text-white font-bold rounded-full bg-blue-500 py-1 px-3 w-full md:w-3/5">{{ rt23 }} &nbsp;KK</div>
                      </div>
                  </div>
              </div>
              <div class="relative p-4 mx-2 bg-slate-50 rounded-xl mb-8">
                  <h3 class="text-sm md:text-xl font-bold text-blue-800 pt-2">Data RT 24</h3>
                  <div class="text-center">
                      <div class="pt-0">
                        <div class="tex-sm font-bold text-black py-4">Total Data KK</div>
                        <div class="text-md mx-auto text-white font-bold rounded-full bg-blue-500 py-1 px-3 w-full md:w-3/5">{{ rt24 }} &nbsp;KK</div>
                      </div>
                  </div>
              </div>
              <div class="relative p-4 mx-2 bg-slate-50 rounded-xl mb-8">
                  <h3 class="text-sm md:text-xl font-bold text-blue-800 pt-2">Data RT 25</h3>
                  <div class="text-center">
                      <div class="pt-0">
                        <div class="tex-sm font-bold text-black py-4">Total Data KK</div>
                        <div class="text-md mx-auto text-white font-bold rounded-full bg-blue-500 py-1 px-3 w-full md:w-3/5">{{ rt25 }} &nbsp;KK</div>
                      </div>
                  </div>
              </div>
              <div class="relative p-4 mx-2 bg-slate-50 rounded-xl mb-8">
                  <h3 class="text-sm md:text-xl font-bold text-blue-800 pt-2">Data RT 26</h3>
                  <div class="text-center">
                      <div class="pt-0">
                        <div class="tex-sm font-bold text-black py-4">Total Data KK</div>
                        <div class="text-md mx-auto text-white font-bold rounded-full bg-blue-500 py-1 px-3 w-full md:w-3/5">{{ rt26 }} &nbsp;KK</div>
                      </div>
                  </div>
              </div>
              <div class="relative p-4 mx-2 bg-slate-50 rounded-xl mb-8">
                  <h3 class="text-sm md:text-xl font-bold text-blue-800 pt-2">Data RT 27</h3>
                  <div class="text-center">
                      <div class="pt-0">
                        <div class="tex-sm font-bold text-black py-4">Total Data KK</div>
                        <div class="text-md mx-auto text-white font-bold rounded-full bg-blue-500 py-1 px-3 w-full md:w-3/5">{{ rt27 }} &nbsp;KK</div>
                      </div>
                  </div>
              </div>
              <div class="relative p-4 mx-2 bg-slate-50 rounded-xl mb-8">
                  <h3 class="text-sm md:text-xl font-bold text-blue-800 pt-2">Data RT 28</h3>
                  <div class="text-center">
                      <div class="pt-0">
                        <div class="tex-sm font-bold text-black py-4">Total Data KK</div>
                        <div class="text-md mx-auto text-white font-bold rounded-full bg-blue-500 py-1 px-3 w-full md:w-3/5">{{ rt28 }} &nbsp;KK</div>
                      </div>
                  </div>
              </div>
              <div class="relative p-4 mx-2 bg-slate-50 rounded-xl mb-8">
                  <h3 class="text-sm md:text-xl font-bold text-blue-800 pt-2">Data RT 29</h3>
                  <div class="text-center">
                      <div class="pt-0">
                        <div class="tex-sm font-bold text-black py-4">Total Data KK</div>
                        <div class="text-md mx-auto text-white font-bold rounded-full bg-blue-500 py-1 px-3 w-full md:w-3/5">{{ rt29 }} &nbsp;KK</div>
                      </div>
                  </div>
              </div>
              <div class="relative p-4 mx-2 bg-slate-50 rounded-xl mb-8">
                  <h3 class="text-sm md:text-xl font-bold text-blue-800 pt-2">Data RT 41</h3>
                  <div class="text-center">
                      <div class="pt-0">
                        <div class="tex-sm font-bold text-black py-4">Total Data KK</div>
                        <div class="text-md mx-auto text-white font-bold rounded-full bg-blue-500 py-1 px-3 w-full md:w-3/5">{{ rt41 }} &nbsp;KK</div>
                      </div>
                  </div>
              </div>
              <div class="relative p-4 mx-2 bg-slate-50 rounded-xl mb-8">
                  <h3 class="text-sm md:text-xl font-bold text-blue-800 pt-2">Data RT 48</h3>
                  <div class="text-center">
                      <div class="pt-0">
                        <div class="tex-sm font-bold text-black py-4">Total Data KK</div>
                        <div class="text-md mx-auto text-white font-bold rounded-full bg-blue-500 py-1 px-3 w-full md:w-3/5">{{ rt48 }} &nbsp;KK</div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { getAllPenduduk } from '@/api/pendudukService';
  
      export default {
          data() {
              return {
              dataRT: null, 
              rt23: null, 
              rt24: null, 
              rt25: null, 
              rt26: null, 
              rt27: null, 
              rt28: null, 
              rt29: null, 
              rt41: null, 
              rt48: null, 
              };
          },
          mounted() {
              this.loadRt();
          },
          methods: {
              async loadRt() {
              this.dataRT = await getAllPenduduk();
              this.rt23 = this.dataRT.rt23
              this.rt24 = this.dataRT.rt24
              this.rt25 = this.dataRT.rt25
              this.rt26 = this.dataRT.rt26
              this.rt27 = this.dataRT.rt27
              this.rt28 = this.dataRT.rt28
              this.rt29 = this.dataRT.rt29
              this.rt41 = this.dataRT.rt41
              this.rt48 = this.dataRT.rt48
              },
          },
      }
  </script>
  
