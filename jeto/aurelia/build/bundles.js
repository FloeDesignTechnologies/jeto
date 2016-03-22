module.exports = {
    "bundles": {
        "dist/app-build": {
            "includes": [
                "[*.js]",
                "*.html!text",
                "*.css!text",
                "almasaeed2010/AdminLTE/dist/js/app.js",
                "almasaeed2010/AdminLTE/dist/css/AdminLTE.css!text"
            ],
            "excludes": [
                "config.js"
            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": true,
                "rev": false
            }
        },
        "dist/aurelia": {
            "includes": [
                "aurelia-framework",
                "aurelia-bootstrapper",
                "aurelia-fetch-client",
                "aurelia-router",
                "aurelia-templating-binding",
                "aurelia-templating-resources",
                "aurelia-templating-router",
                "aurelia-polyfills",
                "aurelia-loader-default",
                "aurelia-history-browser",
                "aurelia-logging-console",
                "fetch"

            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": false,
                "rev": false
            }
        }
    }
};
