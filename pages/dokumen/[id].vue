<template>
    <div class="text-center">
        <Head>
            <Title>Dokumen di RW 09 mulya asri 2 Sukamulya Cikupa Tangerang</Title>
            <Meta
            name="description"
            content="Dokumen di RW 09 mulya asri 2 Sukamulya kecamatan Cikupa Tangerang"
            />
        </Head>
        <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-solid pt-3 rounded-md">
            <nuxt-link to="/dokumen">
                <div class="flex flex-col ml-8">
                <div class="ml-4 flex h-8 md:h-10 w-8 md:w-10 justify-end">
                    <div class="inline-block h-[18px] md:h-[26px] w-[18px] md:w-[26px]">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                        <path d="m24,24H0V4.5C0,2.57,1.57,1,3.5,1h17c1.93,0,3.5,1.57,3.5,3.5v19.5Zm-21-3h18V4.5c0-.276-.224-.5-.5-.5H3.5c-.276,0-.5.224-.5.5v16.5ZM19,6h-9v3h9v-3Zm-12.5,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm12.5,5h-9v3h9v-3Zm-12.5,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm12.5,5h-9v3h9v-3Zm-12.5,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Z" />
                    </svg>
                    </div>
                </div>
                <span class="px-1 text-left text-[10px] md:text-xs font-bold text-white">Back Dokumen</span>
                </div>
            </nuxt-link>
            <div class="text-xl md:text-2xl font-bold text-slate-100 my-3">{{ title }}</div>
            <div class="w-full">
                <iframe class="w-full h-full" :src="BaseIMG + '/' + file" style="min-height: 500px;"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    import { detailDokumen } from '@/api/dokumenService';
    export default {
        data() {
            return {
            BaseIMG: import.meta.env.VITE_API_IMG,
            data: '',
            title: '',
            file: '',
            };
        },
        mounted() {
            this.detailDokumen();
        },
        methods: {
            async detailDokumen() {
            this.data = await detailDokumen(this.$route.params.id);
            this.title = await this.data.data.title
            this.file = await this.data.data.file
            },
        },
    }

</script>
