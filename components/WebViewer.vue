<template>
    <div id='webviewer' ref='viewer'></div>
  </template>
  
  <script>
  /* eslint-disable */
  export default {
    name: 'WebViewer',
    props: {
      path: String,
      url: String
    },
    mounted: function () {
      import('@pdftron/webviewer').then(() => {
          WebViewer({
              path: '../webviewer',
              initialDoc: this.url, // replace with your own PDF file
              licenseKey: 'your_license_key'  // sign up to get a free trial key at https://dev.apryse.com
            }, this.$refs.viewer).then((instance) => {
              // call apis here
            });
      })
    }
  }
  </script>
  
  
  <style>
  #webviewer {
    height: 100vh;
  }
  </style>