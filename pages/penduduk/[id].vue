<template>
    <div class="text-center">
        <Head>
            <Title>Data Penduduk di RW 09 Sukamulya Cikupa Tangerang</Title>
            <Meta
            name="description"
            content="data penduduk di lingkungan RW 09 Sukamulya kecamatan cikupa Tangerang"
            />
        </Head>
        <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-solid p-8 rounded-md">
            <div class="text-xl font-bold text-slate-100 my-6">Data Penduduk di RW 09</div>
            <div class="border-t border-gray-200 p-1 md:px-10 md:mx-6 rounded-md bg-slate-100 py-5 mb-2">
                <dl class="sm:divide-y sm:divide-gray-200">
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                            Nama Lengkap :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                            {{ nama_lengkap }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                            Alamat :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                            {{ alamat }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                           RT :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                            {{ rt }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                           Jenis Kelamin :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                           {{ jk }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                           Status Perkawinan :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                           {{ status_perkawinan }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                           Tempat Lahir :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                           {{ tempat }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                           Tanggal Lahir :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                           {{ tanggal_lahir }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                           Agama :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                           {{ agama }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                           Pendididkan Terakhir :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                           {{ pendidikan_terakhir }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                           Pekerjaan :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                           {{ pekerjaan }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                           Status Keluarga :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                           {{ status_keluarga }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                           Status Rumah Tinggal :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                           {{ status_rumah_tinggal }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-6">
                        <dt class="text-sm font-medium text-gray-800">
                           Status Ekonomi :
                        </dt>
                        <dd class="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left md:text-center">
                           {{ status_ekonomi }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import { viewPenduduk } from '@/api/pendudukService';

    export default {
        data() {
            return {
            BaseAPI: process.env.API_URL,
            BaseIMG: 'https://be.rw09sukamulya.com/public',
            nama_lengkap: null,
            alamat: null,
            rt: null,
            jk: null,
            status_perkawinan: null,
            tempat: null,
            tanggal_lahir: null,
            agama: null,
            pendidikan_terakhir: null,
            pekerjaan: null,
            status_keluarga: null,
            status_rumah_tinggal: null,
            status_ekonomi: null,
            };
        },
        mounted() {
            this.getPenduduk();
        },
        methods: {
            async getPenduduk() {
            this.data = await viewPenduduk(this.$route.params.id);
            this.nama_lengkap = this.data.nama_lengkap
            this.alamat = this.data.alamat
            this.rt = this.data.rts.nama
            this.jk = this.data.jk
            this.status_perkawinan = this.data.status_perkawinan
            this.tempat = this.data.tempat
            this.tanggal_lahir = this.data.tgl_lahir
            this.agama = this.data.agama
            this.pendidikan_terakhir = this.data.pendidikan_terakhir
            this.pekerjaan = this.data.pekerjaan
            this.status_keluarga = this.data.status_keluarga
            this.status_rumah_tinggal = this.data.status_rumah_tinggal
            this.status_ekonomi = this.data.status_ekonomi
            },
        },
    }

</script>
