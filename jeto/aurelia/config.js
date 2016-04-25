System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "admin-lte": "npm:admin-lte@2.3.3",
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.2.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "fetch": "github:github/fetch@0.11.0",
    "font-awesome": "npm:font-awesome@4.5.0",
    "jquery": "github:components/jquery@2.2.1",
    "select2": "npm:select2@4.0.2",
    "select2-bootstrap-css": "npm:select2-bootstrap-css@1.4.6",
    "text": "github:systemjs/plugin-text@0.0.7",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.1"
    },
    "npm:admin-lte@2.3.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-router@1.0.0-beta.1.2.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:select2@4.0.2": {
      "almond": "npm:almond@0.3.2",
      "jquery-mousewheel": "npm:jquery-mousewheel@3.1.13"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  },
  bundles: {
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.7.js",
      "app.js",
      "common/custom-select/custom-select.css!github:systemjs/plugin-text@0.0.7.js",
      "common/custom-select/custom-select.html!github:systemjs/plugin-text@0.0.7.js",
      "common/custom-select/custom-select.js",
      "common/modal/modal-body.html!github:systemjs/plugin-text@0.0.7.js",
      "common/modal/modal-body.js",
      "common/modal/modal-footer.html!github:systemjs/plugin-text@0.0.7.js",
      "common/modal/modal-footer.js",
      "common/modal/modal-header.html!github:systemjs/plugin-text@0.0.7.js",
      "common/modal/modal-header.js",
      "common/modal/modal.html!github:systemjs/plugin-text@0.0.7.js",
      "common/modal/modal.js",
      "common/nav-bar.html!github:systemjs/plugin-text@0.0.7.js",
      "css/styles.css!github:systemjs/plugin-text@0.0.7.js",
      "main.js",
      "services/HostsService.js",
      "services/InstancesService.js",
      "services/ProjectsService.js",
      "views/add-machine/add-machine.css!github:systemjs/plugin-text@0.0.7.js",
      "views/add-machine/add-machine.html!github:systemjs/plugin-text@0.0.7.js",
      "views/add-machine/add-machine.js",
      "views/domains/domains.html!github:systemjs/plugin-text@0.0.7.js",
      "views/domains/domains.js",
      "views/home/home.html!github:systemjs/plugin-text@0.0.7.js",
      "views/home/home.js",
      "views/instances/instances.html!github:systemjs/plugin-text@0.0.7.js",
      "views/instances/instances.js",
      "views/security/security.html!github:systemjs/plugin-text@0.0.7.js",
      "views/security/security.js"
    ],
    "aurelia.js": [
      "github:components/jquery@2.2.1.js",
      "github:components/jquery@2.2.1/jquery.js",
      "github:twbs/bootstrap@3.3.6.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "npm:admin-lte@2.3.3.js",
      "npm:admin-lte@2.3.3/bootstrap/css/bootstrap.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:admin-lte@2.3.3/dist/css/AdminLTE.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:admin-lte@2.3.3/dist/css/skins/skin-blue.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:admin-lte@2.3.3/dist/js/app.min.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.0.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.0/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.0.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.0/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.0.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.0/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.0.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.0/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.2.0.js",
      "npm:aurelia-history@1.0.0-beta.1.2.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.0.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.0.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.2.0.js",
      "npm:aurelia-path@1.0.0-beta.1.2.0/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.0.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.2.0.js",
      "npm:aurelia-router@1.0.0-beta.1.2.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.0.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.0.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.0/aurelia-templating.js",
      "npm:select2@4.0.2.js",
      "npm:select2@4.0.2/css/select2.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:select2@4.0.2/js/select2.js"
    ]
  },
  depCache: {
    "common/custom-select/custom-select.js": [
      "aurelia-framework",
      "jquery",
      "select2"
    ],
    "common/modal/modal-body.js": [
      "aurelia-framework"
    ],
    "common/modal/modal-footer.js": [
      "aurelia-framework",
      "common/modal/modal",
      "aurelia-event-aggregator"
    ],
    "common/modal/modal-header.js": [
      "aurelia-framework",
      "aurelia-event-aggregator",
      "common/modal/modal"
    ],
    "common/modal/modal.js": [
      "aurelia-framework",
      "aurelia-event-aggregator",
      "jquery"
    ],
    "services/HostsService.js": [
      "fetch",
      "aurelia-fetch-client",
      "aurelia-framework"
    ],
    "services/InstancesService.js": [
      "fetch",
      "aurelia-fetch-client",
      "aurelia-framework"
    ],
    "services/ProjectsService.js": [
      "fetch",
      "aurelia-fetch-client",
      "aurelia-framework"
    ],
    "views/add-machine/add-machine.js": [
      "aurelia-framework",
      "services/InstancesService",
      "services/ProjectsService",
      "services/HostsService",
      "aurelia-event-aggregator",
      "common/modal/modal",
      "jquery"
    ],
    "views/instances/instances.js": [
      "aurelia-framework",
      "aurelia-event-aggregator",
      "services/InstancesService",
      "services/ProjectsService",
      "services/HostsService",
      "common/modal/modal"
    ]
  }
});