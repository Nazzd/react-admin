const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/api',
        proxy.createProxyMiddleware({
            target: 'http://localhost:8099',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    );
};