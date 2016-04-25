export class App {
  configureRouter(config, router) {
    config.title = 'Ĵeto';
    config.map([
      { route: ['', 'home'],  name: 'home',      moduleId: 'views/home/home',           nav: false, title: 'Welcome' },
      { route: ['instances'], name: 'instances', moduleId: 'views/instances/instances', nav: true,  title: 'Instances' },
      { route: ['domains'],   name: 'domains',   moduleId: 'views/domains/domains',     nav: true,  title: 'Domains' },
      { route: ['security'],  name: 'security',  moduleId: 'views/security/security',   nav: true,  title: 'Security' }
    ]);

    this.router = router;
  }
}
