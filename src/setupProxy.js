const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://api.jaelizumi.cn/',
            changeOrigin:true,
            secure:false
        })
    )
}