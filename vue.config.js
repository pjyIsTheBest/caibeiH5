module.exports = {
    publicPath: '/', // 基本路径
    outputDir: 'dist', // 输出文件目录
    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: 'localhost', // 允许外部ip访问
        port: 7778, // 端口
        https: false, // 启用https
        overlay: {
            warnings: true,
            errors: true
        }, // 错误、警告在页面弹出

    }

}