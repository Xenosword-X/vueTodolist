module.exports = {
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/all.scss";
        `
      }
    }
  }
}
