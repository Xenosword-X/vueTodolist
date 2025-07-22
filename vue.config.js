module.exports = {
  publicPath: '/vueTodolist/',
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
