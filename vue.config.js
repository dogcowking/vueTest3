'use strict'

module.exports = {
devServer: {
proxy: { // proxyTable 설정
'^/api': {
target: 'http://naver.com',
changeOrigin: false,
pathRewrite: {'/api': '/'}
}
}
}
}
