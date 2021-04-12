import * as Vue from "vue";
import VueI18n from "vue-i18n";
import supportedLocales from "./config/supported-locales"

Vue.use(VueI18n);

function loadLocalMessages() {
    const locales = require.context(
        "./locales",
        true,
        /[A-Za-z0-9-_,\s]+\.json$/i
    );
    const messages = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            // @ts-ignore
            messages[locale] = locales(key)
        }
    });
    return messages;
}

// function getSupportedLocales(){
//     let annotatedLocales = [];
//
//     for(const code of Object.keys(supportedLocales)){
//         annotatedLocales.push({
//             code,
//             name: supportedLocales[code]
//         });
//     }
//     return annotatedLocales;
// }

function getBrowserLocale(options = {}) {
    const defaultOptions = {countryCodeOnly: false};

    const opt = {...defaultOptions, ...options};

    const navigatorLocale = navigator.languages !== undefined ? navigator.languages[0] : navigator.language;

    if (!navigatorLocale) {
        return undefined
    }

    const trimmedLocale = opt.countryCodeOnly ? navigatorLocale.trim().split(/-|_/)[0] : navigatorLocale.trim();

    return trimmedLocale;
}

export default new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: loadLocalMessages()
})