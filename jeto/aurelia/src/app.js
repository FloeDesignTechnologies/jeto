export class App {
  configureRouter(config, router) {
    config.title = 'Ĵeto';
    config.map([
      { route: ['', 'home'],  name: 'home',      moduleId: 'pages/home/home',           nav: false, title: 'Welcome' },
      { route: ['instances'], name: 'instances', moduleId: 'pages/instances/instances', nav: true,  title: 'Instances' },
      { route: ['domains'],   name: 'domains',   moduleId: 'pages/domains/domains',     nav: true,  title: 'Domains' },
      { route: ['security'],  name: 'security',  moduleId: 'pages/security/security',   nav: true,  title: 'Security' }
    ]);

    this.router = router;
  }
}
