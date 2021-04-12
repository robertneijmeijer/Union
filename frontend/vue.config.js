module.exports = {
    configureWebpack: {
        devServer: {
            watchOptions: {
                ignored: /node_modules/,
                poll: 1000
            }
        }
    },
    pluginOptions: {
        i18n: {
            locale: "en",
            fallbackLocale: "en",
            localeDir: "locales",
            enableInSFC: false
        }
    }
}