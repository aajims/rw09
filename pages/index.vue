<template>
    <div>
      <Head>
        <Title>rw09sukamulya.com - Website RW 09 Sukamulya Cikupa Tangerang</Title>
        <meta
          name="description"
          content="Website RW 09 Sukamulya ini berada di lingkungan kelurahan sukamulya kecamatan cikupa Tangerang"
        />
      </Head>
    <div class="pt-2">
      <div class="mb-3">
        <p class="text-sm md:text-xl font-bold text-center">
          Selamat Datang Pengunjung
        </p>
      </div>
      <Carousel />  
    </div>
    <div class="p-2">
      <div class="grid grid-cols-4 gap-y-6">
        <NuxtLink to="/pengurus-rt" class="flex flex-col items-center py-3">
          <div class="mb-2 flex h-8 md:h-12 w-8 md:w-12 justify-end">
            <div class="inline-block h-[38px] md:h-[46px] w-[38px] md:w-[46px]">
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path d="m18.5,16c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm-6.5-8c-2.206,0-4-1.794-4-4S9.794,0,12,0s4,1.794,4,4-1.794,4-4,4Zm-6.5,8c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm5.5,8v-3c0-1.629-1.3-2.947-2.918-2.992l-2.582,2.992-2.621-2.988c-1.6.065-2.879,1.372-2.879,2.988v3m24,0v-3c0-1.629-1.3-2.947-2.918-2.992l-2.582,2.992-2.621-2.988c-1.6.065-2.879,1.372-2.879,2.988v3"/>
              </svg>
            </div>
        </div>
          <span class="px-1 text-center text-[10px] md:text-xs font-bold">Pengurus RT</span>
        </NuxtLink>
        <NuxtLink to="/keuangan" class="flex flex-col items-center py-3">
          <div class="mb-2 flex h-8 md:h-12 w-8 md:w-12 justify-end">
          <span class="inline-block h-[38px] md:h-[46px] w-[38px] md:w-[46px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="wallet"><g fill="#060707"><circle cx="33" cy="36.9" r="1"></circle><circle cx="27.3" cy="12.6" r="2" transform="rotate(-71.652 27.252 12.61)"></circle><path d="M38 19.9h-.5l3.4-10.1c.5-1.6-.3-3.3-1.9-3.8L21.9.3c-1.5-.5-3 .2-3.7 1.6H8c-.8 0-1.6.3-2.1.9-.6.5-.9 1.3-.9 2.1l.1 19v.1c-.1.3-.1.6-.1.9v18c0 2.8 2.2 5 5 5h28c2.8 0 5-2.2 5-5v-18c0-2.8-2.2-5-5-5zm3 20h-8.1c-1.6 0-2.9-1.3-2.9-3s1.3-3 2.9-3H41v6zM21.2 2.2l17.1 5.7c.3.1.5.3.6.5.1.2.1.5 0 .7l-3.6 10.8h-2.1l2.2-6.6c.1-.3.1-.5-.1-.8-.1-.2-.3-.4-.6-.5-1-.3-1.6-1.5-1.3-2.5.2-.5-.1-1.1-.6-1.3l-7.6-2.5c-.3-.1-.5-.1-.8.1-.2.1-.4.3-.5.6-.3 1-1.5 1.6-2.5 1.3-.5-.2-1.1.1-1.3.6L16.2 20h-2.1L20 2.8c.1-.5.7-.8 1.2-.6zm-2.7 17.7 3.4-10.2c1.5.1 2.8-.6 3.6-1.8l5.9 2c-.1 1.4.6 2.8 1.8 3.6l-2.1 6.4H18.5zm-7.5 0v-9.1c1.4-.4 2.5-1.5 2.9-2.9h2.3l-4 12H11zM7.3 4.2c.2-.2.4-.3.7-.3h9.5l-.7 2H13c-.3 0-.5.1-.7.3-.2.1-.3.4-.3.6 0 1.1-.9 2-2 2-.6 0-1 .4-1 1V20c-.7.1-1.4.5-2 .9v-16c0-.3.1-.5.3-.7zM41 42.9c0 1.7-1.3 3-3 3H10c-1.7 0-3-1.3-3-3v-18c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v7h-8.1c-2.7 0-4.9 2.2-4.9 5s2.2 5 4.9 5H41v1z"></path></g></svg></span>
          </div>
          <span class="px-1 text-center text-[10px] md:text-xs font-bold">Data Keuangan</span>
        </NuxtLink>
        <nuxt-link to="/pengurus-rw">
          <div class="flex flex-col items-center py-3">
            <div class="mb-2 flex h-8 md:h-12 w-8 md:w-12 justify-end">
              <div class="inline-block h-[38px] md:h-[46px] w-[38px] md:w-[46px]">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                  <path d="M2,3C2,1.343,3.343,0,5,0s3,1.343,3,3-1.343,3-3,3-3-1.343-3-3Zm13,3c1.657,0,3-1.343,3-3s-1.343-3-3-3-3,1.343-3,3,1.343,3,3,3Zm-9.047,2.126c-.207-.802-1.023-1.285-1.826-1.079C1.735,7.663,0,9.956,0,12.5c0,.829,.671,1.5,1.5,1.5s1.5-.671,1.5-1.5c0-1.177,.806-2.272,1.874-2.547,.803-.207,1.286-1.024,1.079-1.826Zm2.174,6.921c-2.391,.615-4.126,2.908-4.126,5.453,0,.829,.671,1.5,1.5,1.5s1.5-.671,1.5-1.5c0-1.177,.806-2.272,1.874-2.547,.803-.207,1.286-1.024,1.079-1.826s-1.023-1.284-1.826-1.079Zm15.405,5.505c-.28,.475-.78,.739-1.294,.739-.259,0-.521-.067-.76-.208l-.648-.382c-.523,.471-1.144,.825-1.83,1.043v.755c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-.755c-.686-.218-1.307-.572-1.83-1.043l-.648,.382c-.239,.141-.501,.208-.76,.208-.514,0-1.014-.264-1.294-.739-.42-.714-.183-1.633,.531-2.054l.638-.376c-.084-.362-.138-.735-.138-1.123s.054-.76,.138-1.123l-.638-.376c-.714-.42-.952-1.34-.531-2.054,.421-.714,1.34-.95,2.054-.531l.648,.382c.523-.471,1.144-.825,1.83-1.043v-.755c0-.829,.671-1.5,1.5-1.5s1.5,.671,1.5,1.5v.755c.686,.218,1.307,.572,1.83,1.043l.648-.382c.714-.418,1.633-.183,2.054,.531,.42,.714,.183,1.633-.531,2.054l-.638,.376c.084,.362,.138,.735,.138,1.123s-.054,.76-.138,1.123l.638,.376c.714,.42,.952,1.34,.531,2.054Zm-4.532-3.552c0-.827-.673-1.5-1.5-1.5s-1.5,.673-1.5,1.5,.673,1.5,1.5,1.5,1.5-.673,1.5-1.5Zm-6.838-8.066c-.663-.7-1.655-1.083-2.737-.88-1.182,.221-2.149,1.186-2.37,2.368-.249,1.332,.384,2.531,1.411,3.141,.311,.185,.705,.031,.855-.298,.62-1.358,1.565-2.536,2.74-3.43,.288-.219,.35-.638,.101-.901Z" />
                </svg>
              </div>
            </div>
            <span class="px-1 text-center text-[10px] md:text-xs font-bold">Pengurus RW</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/penduduk">
        <div class="flex flex-col items-center py-3">
          <div class="mb-2 flex h-8 md:h-12 w-8 md:w-12 justify-end">
            <div class="inline-block h-[38px] md:h-[46px] w-[38px] md:w-[46px]">
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path d="m20.5,6h-2c-1.93,0-3.5,1.57-3.5,3.5v4c0,1.391.822,2.585,2,3.149v6.351c0,.552.448,1,1,1s1-.448,1-1v-6h1v6c0,.552.448,1,1,1s1-.448,1-1v-6.351c1.178-.564,2-1.758,2-3.149v-4c0-1.93-1.57-3.5-3.5-3.5Zm-3.5-3.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm-5,0c0-1.381,1.119-2.5,2.5-2.5.402,0,.777.104,1.114.273-.38.659-.614,1.413-.614,2.227s.234,1.568.615,2.227c-.337.169-.712.273-1.115.273-1.381,0-2.5-1.119-2.5-2.5Zm-5,0c0-1.381,1.119-2.5,2.5-2.5.402,0,.777.104,1.114.273-.38.659-.614,1.413-.614,2.227s.234,1.568.615,2.227c-.337.169-.712.273-1.115.273-1.381,0-2.5-1.119-2.5-2.5Zm-5,0C2,1.119,3.119,0,4.5,0c.402,0,.777.104,1.114.273-.38.659-.614,1.413-.614,2.227s.234,1.568.615,2.227c-.337.169-.712.273-1.115.273-1.381,0-2.5-1.119-2.5-2.5Zm12.261,3.5c-.787.952-1.261,2.172-1.261,3.5v12.5c0,.552-.448,1-1,1s-1-.448-1-1v-6.051c-.633-.649-1-1.532-1-2.449v-4c0-1.93,1.57-3.5,3.5-3.5h.761Zm-5,0c-.787.952-1.261,1.172-1.261,2.5v11.5c0,.552-.448,1-1,1s-1-.448-1-1v-5.051c-.633-.649-1-1.532-1-2.449v-3c0-1.93,1.57-3.5,3.5-3.5h.761Zm-5,0c-.787.952-1.261,1.172-1.261,2.5v9.5c0,.552-.448,1-1,1s-1-.448-1-1v-4.051c-.633-.649-1-1.532-1-2.449v-2c0-1.93,1.57-3.5,3.5-3.5h.761Z" />
              </svg>
            </div>
          </div>
          <span class="px-1 text-center text-[10px] md:text-xs font-bold">Data Penduduk</span>
        </div>
      </nuxt-link>
      <nuxt-link to="/agenda-kegiatan">
        <div class="flex flex-col items-center py-3">
          <div class="mb-2 flex h-8 md:h-12 w-8 md:w-12 justify-end">
            <div class="inline-block h-[38px] md:h-[46px] w-[38px] md:w-[46px]">
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path d="M0,14H4v4H0v-4Zm6,4h5v-4H6v4ZM0,12H4v-4H0v4Zm6,12h5v-4H6v4Zm7-12h5v-4h-5v4Zm-7,0h5v-4H6v4ZM0,24H4v-4H0v4ZM20,12h4v-4h-4v4Zm-7,12h5v-4h-5v4Zm7,0h4v-4h-4v4Zm1-22h-3V0h-2V2H8V0h-2V2H3C1.35,2,0,3.35,0,5v1H24v-1c0-1.65-1.35-3-3-3Zm-1,16h4v-4h-4v4Zm-7,0h5v-4h-5v4Z" />
              </svg>
            </div>
          </div>
          <span class="px-1 text-center text-[10px] md:text-xs font-bold">Agenda Kegiatan</span>
        </div>
      </nuxt-link>
      <nuxt-link to="/galery-foto">
        <div class="flex flex-col items-center py-3">
          <div class="mb-2 flex h-8 md:h-12 w-8 md:w-12 justify-end">
            <div class="inline-block h-[38px] md:h-[46px] w-[38px] md:w-[46px]">
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path d="M12,5.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Zm12-2V15H5V3.5c0-1.93,1.57-3.5,3.5-3.5h12c1.93,0,3.5,1.57,3.5,3.5ZM8,12l5-5,3.3,3.3,4.7-4.78V3.5c0-.28-.22-.5-.5-.5H8.5c-.28,0-.5,.22-.5,.5V12Zm9.19,8.32l-14.19-3.86V7.71L0,18.76l19.3,5.24,1.89-7h-3.11l-.89,3.32Z" />
              </svg>
            </div>
          </div>
          <span class="px-1 text-center text-[10px] md:text-xs font-bold">Galery Foto</span>
        </div>
      </nuxt-link>
      <nuxt-link to="/petugas-security">
        <div class="flex flex-col items-center py-3">
          <div class="mb-2 flex h-8 md:h-12 w-8 md:w-12 justify-end">
            <div class="inline-block h-[38px] md:h-[46px] w-[38px] md:w-[46px]">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.04 122.88">
                <path class="cls-1" d="M103.75,108.74,75.59,97.17l.28-11,27.88,11.25v11.29ZM58.64,95.81l1.76,11.12,9.35-22.6-12.38,3.6L62,92.51l-3.31,3.3Zm-7.9,10.49,1.77-10.37-3.42-3.42,4.36-4.36L41.64,84.49l9.1,21.81ZM28,39.55l.19-.15v0a.69.69,0,0,1,.62-.76h.55c3.85-2.29,10.83-3.79,18.58-4.37a13.26,13.26,0,0,0,7.17,5.91,13.74,13.74,0,0,0,7.21-5.91c7.22.55,13.91,2,18.25,4.37h.64a.69.69,0,0,1,.7.69.22.22,0,0,1,0,.09v0l.18.12-.2.16L81.67,42,82,45.05a2.91,2.91,0,0,1,.91.42,3.46,3.46,0,0,1,1.08,1.22,5.65,5.65,0,0,1,.6,2,11.21,11.21,0,0,1,0,2.47v.06a17.53,17.53,0,0,1-.4,2.39A18.94,18.94,0,0,1,83.41,56v0a12.28,12.28,0,0,1-2.24,3.77,5,5,0,0,1-2.5,1.6l-.2.66c-.1.34-.23.73-.31,1.07-1,3.42-1.82,6.11-3.92,8.79-.47.58-1,1.15-1.48,1.69-.36.37-.73.72-1.11,1.07a1.36,1.36,0,0,1,0,.29v6a2,2,0,0,1,1.66-.08l33,13.33a2,2,0,0,1,1.39,1.91v12.45a20.75,20.75,0,0,1,2.36,6.72c.68,3.48.92,2.37.92,5.6a2,2,0,0,1-2,2H2.06a2,2,0,0,1-2-1.89c-.17-3.13,0-1.86.67-5.18A19.48,19.48,0,0,1,3.28,109V96.08h0a2,2,0,0,1,1.26-1.86L37.86,80.91l.1,0a2.29,2.29,0,0,1,.37-.12v-6a1.38,1.38,0,0,1,.14-.62l-.61-.6q-.61-.63-1.17-1.26l0,0a19.36,19.36,0,0,1-2.94-4.73C33,65.79,32.37,64,31.69,62l-.35-1.06a4.16,4.16,0,0,1-2.17-1,8.64,8.64,0,0,1-2.1-2.79,15.81,15.81,0,0,1-1-2.63,18.6,18.6,0,0,1-.58-2.86,11.47,11.47,0,0,1,0-2.87,5.68,5.68,0,0,1,.73-2.26l0,0a3.68,3.68,0,0,1,1.09-1.13,2.76,2.76,0,0,1,.9-.37l.25-2.55-.27-2.6L28,39.55ZM99,98.38a2.9,2.9,0,1,1-2.9,2.89A2.89,2.89,0,0,1,99,98.38Zm-87.07,0A2.9,2.9,0,1,1,9,101.27a2.89,2.89,0,0,1,2.9-2.89ZM35.23,86.27l.28,10.9L7.3,108.76V97.43L35.23,86.27Zm33.67-9.4c-.53.32-1.31.79-2,1.17a8.87,8.87,0,0,1-1.26.62,25.09,25.09,0,0,1-5.27,1.85,21.3,21.3,0,0,1-5.28.58,21.07,21.07,0,0,1-4.23-.52h-.06a27,27,0,0,1-4.24-1.34,29.8,29.8,0,0,1-2.95-1.34c-.84-.43-1.69-.92-2.53-1.46v5L55,85.76l13.89-4V76.87ZM28.09,34.69V29.26l-4.4-4.89c-6.29-7-5-6.78,1.66-8.67C35.11,13,41.72,7,47.47,3.23,54-1.08,56-1.08,62.53,3.23,68.28,7,74.89,13,84.65,15.7c6.69,1.89,7.95,1.67,1.66,8.67l-4.4,4.89v5.43a78.28,78.28,0,0,0-18-4.5A26.5,26.5,0,0,0,64.69,22c-2.79.25-6-.83-9.65-3.11h0a13.83,13.83,0,0,1-9.62,3,29.13,29.13,0,0,0,.83,8.29,77.91,77.91,0,0,0-18.16,4.53Zm6.29,9.25-.84,5a.69.69,0,0,1-.8.57.55.55,0,0,1-.26-.1L30,47.78h-.13c-.42-.07-.73-.1-1,.36a2.77,2.77,0,0,0-.32,1.16,8.94,8.94,0,0,0,0,2A13.78,13.78,0,0,0,29,53.61a12.2,12.2,0,0,0,.81,2.1,5.59,5.59,0,0,0,1.29,1.79,1,1,0,0,0,.87.28h0a1.53,1.53,0,0,1,1.1.13,1.58,1.58,0,0,1,.76.88v0l.44,1.29.32,1c1.26,3.72,2.22,6.58,4.39,9.12l0,0a20.57,20.57,0,0,0,3.23,3,24.43,24.43,0,0,0,4,2.47l.06,0c.27.14.55.26.83.39l.9.36h0a22.11,22.11,0,0,0,3.59,1,19.81,19.81,0,0,0,3.56.36,20.39,20.39,0,0,0,4.12-.39,22.27,22.27,0,0,0,4-1.24l.79-.36,0,0a22.41,22.41,0,0,0,4.12-2.56A20.32,20.32,0,0,0,71.78,70a13.89,13.89,0,0,0,2-3.49c.52-1.29.94-2.69,1.4-4.26l.15-.5c.21-.69.42-1.43.67-2.2a1.61,1.61,0,0,1,.65-.93l0,0a1.62,1.62,0,0,1,1.09-.22h0c.34.05.73-.21,1.14-.67a9.74,9.74,0,0,0,1.6-2.85,16.17,16.17,0,0,0,.64-2,14.48,14.48,0,0,0,.33-2v-.06a8.32,8.32,0,0,0,0-1.58,2.87,2.87,0,0,0-.27-1v0c-.19-.33-.35-.51-.5-.56a1,1,0,0,0-.64,0l-.92.59a7.35,7.35,0,0,1-2.59,1.23.7.7,0,0,1-.87-.47.59.59,0,0,1,0-.14l-.47-5.3c-12.38,5.37-30.11,5.21-40.81.36Z" />
              </svg>
            </div>
          </div>
          <span class="px-1 text-center text-[10px] md:text-xs font-bold">Petugas Security</span>
        </div>
      </nuxt-link>
      <nuxt-link to="/olahraga">
        <div class="flex flex-col items-center py-3">
          <div class="mb-2 flex h-8 md:h-12 w-8 md:w-12 justify-end">
            <div class="inline-block h-[38px] md:h-[46px] w-[38px] md:w-[46px]">
              <svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                <path d="m23.992 12.16a11.9 11.9 0 0 1 -1.2 5.048.959.959 0 0 0 -.219.023 18.977 18.977 0 0 1 -5.6.769 19.1 19.1 0 0 1 -6.029-.8 1.478 1.478 0 0 1 -.619-2.394 11.959 11.959 0 0 1 1.078-1.057 1.462 1.462 0 0 1 1.422-.233 12.57 12.57 0 0 0 3.965.646 14.493 14.493 0 0 0 7.202-2.002zm-8.744-.136a1.488 1.488 0 0 0 1.717-1.635 17.118 17.118 0 0 0 -4.859-9.995.981.981 0 0 1 -.22-.388 11.908 11.908 0 0 0 -4.6.961 13.914 13.914 0 0 1 5.5 9.542 1.483 1.483 0 0 0 1.094 1.226 10.588 10.588 0 0 0 1.368.289zm5.674-.643a13.621 13.621 0 0 0 2.884-1.468 12.018 12.018 0 0 0 -9.114-9.6 19 19 0 0 1 4.255 9.864 1.474 1.474 0 0 0 1.975 1.204zm-4.122 8.619a20.992 20.992 0 0 1 -7.241-1.161 1.44 1.44 0 0 0 -1.884.975 11.823 11.823 0 0 0 -.359 3.231 11.984 11.984 0 0 0 13.936-3.407 21.072 21.072 0 0 1 -4.452.362zm-6-9.169a11.779 11.779 0 0 0 -.323-1.748 1.466 1.466 0 0 0 -2.368-.724 19.134 19.134 0 0 0 -5.9 9.583 6.65 6.65 0 0 0 -.093.842 12.08 12.08 0 0 0 3.2 3.171 13.914 13.914 0 0 1 4.939-9.868 1.458 1.458 0 0 0 .545-1.256zm-3.033-6.722a11.759 11.759 0 0 0 -2.467-2.061 11.937 11.937 0 0 0 -4.6 13.971 21.14 21.14 0 0 1 6.876-9.825 1.442 1.442 0 0 0 .191-2.085z" />
              </svg>
            </div>
          </div>
          <span class="px-1 text-center text-[10px] md:text-xs font-bold">Kegiatan Olahraga</span>
        </div>
      </nuxt-link>
      <nuxt-link to="/dokumen">
        <div class="flex flex-col items-center py-3">
          <div class="mb-2 flex h-8 md:h-12 w-8 md:w-12 justify-end">
            <div class="inline-block h-[38px] md:h-[46px] w-[38px] md:w-[46px]">
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path d="m24,24H0V4.5C0,2.57,1.57,1,3.5,1h17c1.93,0,3.5,1.57,3.5,3.5v19.5Zm-21-3h18V4.5c0-.276-.224-.5-.5-.5H3.5c-.276,0-.5.224-.5.5v16.5ZM19,6h-9v3h9v-3Zm-12.5,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm12.5,5h-9v3h9v-3Zm-12.5,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm12.5,5h-9v3h9v-3Zm-12.5,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Z" />
              </svg>
            </div>
          </div>
          <span class="px-1 text-center text-[10px] md:text-xs font-bold">Dokumen-dokumen</span>
        </div>
      </nuxt-link>
      </div>
    </div>
    <hr class="m-0 h-2 w-full border-0 bg-skull p-0" />
    <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-solid py-2 px-3 md:px-6 rounded-md">
      <div class=" text-sm md:text-xl font-bold text-slate-800 my-6">Petugas Security Hari ini : {{ currentDate }} Jam : {{ currentTime }}</div>
      <div class="grid grid-cols-2 gap-3 ">
            <div class="w-full mr-6 bg-slate-50 rounded-xl" v-for="row in petugaList" :key="row.id">
                <div class="border-b px-1 pb-1">
                    <div class="flex md:block md:text-center my-2">
                        <img @error="onImageLoadFailure($event)" :src="BaseIMG + '/' + row.foto" alt="foto" class="h-14 w-14 md:h-20 md:w-20 rounded-full border-4 border-white dark:border-gray-200 mx-auto" />
                        <div class="py-0">
                        <h3 class="text-sm md:text-xl md:text-center font-bold text-blue-800 pt-2">{{ row.name }}</h3>
                            <div class="inline-flex text-xs md;text-sm text-gray-700 dark:text-gray-500 items-center">
                                {{ row.no_hp }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="my-4 px-3 pb-14">
      <ImageSlider />
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import ImageSlider from '@/components/ImageSlider.vue';
import { jadwalSecurity } from '@/api/securityService';

export default {
  components: {
    Carousel,
    ImageSlider
  },
  data() {
      return {
      BaseIMG: import.meta.env.VITE_API_IMG,
      petugaList: { data: [] }, 
      currentDate: '',
      currentTime: ''
      };
  },
  mounted() {
    this.loadPetugas();
    this.updateDateTime();
    setInterval(this.updateDateTime, 30000); // Update waktu setiap Menit
  },
  methods: {
      onImageLoadFailure (event) {
          event.target.src = "assets/img/human_icon.png"   
      },
      async loadPetugas() {
      this.petugaList = await jadwalSecurity();
      },
      updateDateTime() {
      const now = new Date();
      this.currentDate = now.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      this.currentTime = now.toLocaleTimeString('id-ID');
    }
  },
};
</script>
