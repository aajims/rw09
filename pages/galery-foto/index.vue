<template>
    <div class="text-center">
        <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-solid px-2 pt-1 rounded-md">
            <div class="text-xl font-bold text-slate-100 my-6">Data Pengurus RW 09</div>
            <div class="grid-cols-1 grid md:grid-cols-2 gap-3 ">
                <div class="w-full p-1 mx-1 bg-slate-50 rounded-xl" v-for="row in fotoList.data" :key="row.id">
                    <img :src="BaseIMG + '/' + row.images" alt="foto" class="border-1 border-white dark:border-gray-200 mx-auto" />
                        <h5 class="text-xl font-bold text-blue-800 pt-2">{{ row.agenda.nama_agenda }}</h5>
                </div>
            </div>
            <div v-if="isLoading">Loading...</div>
        </div>
    </div>
</template>

<script>
    // import { getFoto } from '@/api/fotoService';
    const BASE_URL = 'https://be.rw09sukamulya.com/api';
    export default {
        data() {
            return {
            BaseIMG: 'https://be.rw09sukamulya.com/public',
            fotoList: [],
            current_page: 1,
            per_page: 15,
            isLoading: false
            };
        },
        mounted() {
            this.loadFoto();
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            async loadFoto() {
                this.isLoading = true;
                // const newData = await getFoto(this.current_page, this.per_page);
                // this.fotoList = this.fotoList.concat(newData);
                // this.current_page++;
                // this.isLoading = false;
                const response = await fetch(`${BASE_URL}/foto?page=${this.current_page}&limit=10`);
                const { data, total_pages } = await response.json();
                this.fotoList = data;
                this.totalPages = total_pages;
                this.isLoading = false;
            },
            handleScroll() {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                this.loadFoto();
                }
            }
        },
    }

</script>
