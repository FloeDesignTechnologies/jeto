import 'fetch';
import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class ProjectsService {

  constructor(HttpClient) {
    this.HttpClient = HttpClient;
  }

  getProjectList() {
    // TO BE IMPLEMENTED
    return this.projectsList;
  }

  getGitReferenceList(projectID) {
    // TO BE IMPLEMENTED
    if( this.gitReferenceList[projectID] ) {
      return this.gitReferenceList[projectID].gitReferences;
    }
    else {
     return [];
    }
  }

  gitReferenceList = {

    "36": {
      "gitReferences": [
        "gust-boston",
        "gust-dnyc",
        "gust-london",
        "master",
        "medidata-main",
        "wada-main",
        "wada-textbook"
      ]
    },
    "18": {
      "gitReferences": [
        "gust-design-input",
        "master",
        "tags/v0.1",
        "tags/v0.1^{}",
        "tags/v0.2",
        "tags/v0.2^{}",
        "tags/v0.3",
        "tags/v0.4",
        "tags/v0.5",
        "tags/v0.6",
        "tags/v0.7",
        "tags/v0.8"
      ]
    }

  }





  projectsList = {
    "projects": [
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:dev/cdp-vagrant.git",
        "id": "9",
        "instances": [],
        "name": "CDP Git",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:sysadmin/consul-cluster.git",
        "id": "27",
        "instances": [
          {
            "archive_url": null,
            "environment": "lxc",
            "git_reference": "master",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "441",
            "jeto_infos": null,
            "name": "Consul 0.5 cluster - 20150504",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:sysadmin/consul-cluster.git",
              "id": "27",
              "name": "Consul cluster"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Consul cluster",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:dev/copap.git",
        "id": "14",
        "instances": [
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tags/1.0-ga",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "152",
            "jeto_infos": null,
            "name": "COPAP PROD 1.0 GA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:dev/copap.git",
              "id": "14",
              "name": "Copap"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Copap",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:dev/digital-nyc-prototype.git",
        "id": "18",
        "instances": [],
        "name": "digital-nyc-prototype",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
        "id": "36",
        "instances": [
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "gust-boston",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "632",
            "jeto_infos": null,
            "name": "Boston - QA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "gust-boston",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "645",
            "jeto_infos": null,
            "name": "Gust - Boston - Dev",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "gust-boston",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "649",
            "jeto_infos": null,
            "name": "Gust Boston webserver Validation - Softlayer",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "gust-boston",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "658",
            "jeto_infos": null,
            "name": "Gust Boston webserver PROD - Softlayer",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "gust-dnyc",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "660",
            "jeto_infos": null,
            "name": "Gust - DNYC - Dev",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "gust-dnyc",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "665",
            "jeto_infos": null,
            "name": "Gust -DNYC - QA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": "",
            "environment": "validation",
            "git_reference": "gust-dnyc",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "668",
            "jeto_infos": null,
            "name": "Gust DNYC Validation Softlayer",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "gust-dnyc",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "674",
            "jeto_infos": null,
            "name": "Gust DNYC Prod Softlayer",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "wada-textbook",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "688",
            "jeto_infos": null,
            "name": "WADA Textbook - QA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "wada-textbook",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "689",
            "jeto_infos": null,
            "name": "WADA - Textbook - Validation",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "wada-textbook",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "690",
            "jeto_infos": null,
            "name": "WADA - Textbook - Dev",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "gust-london",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "699",
            "jeto_infos": null,
            "name": "Gust TechLondon prod - 2015-11-16",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "medidata-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "727",
            "jeto_infos": null,
            "name": "[Drupal Server] Medidata - MAIN - Dev",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "medidata-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "729",
            "jeto_infos": null,
            "name": "[Drupal Server] Medidata - MAIN - QA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "medidata-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "734",
            "jeto_infos": null,
            "name": "[Drupal Server] Medidata - MAIN - Validation",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "medidata-main",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "736",
            "jeto_infos": null,
            "name": "[Drupal Server] Medidata - MAIN - Production",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "preview",
            "git_reference": "medidata-main",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "739",
            "jeto_infos": null,
            "name": "[Drupal Server] Medidata - MAIN - Preview",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "wada-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "744",
            "jeto_infos": null,
            "name": "[Drupal Server] Wada - MAIN - Dev",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "wada-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "753",
            "jeto_infos": null,
            "name": "[Drupal Server] Wada - MAIN - QA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "wada-main",
            "host": {
              "id": "4",
              "name": "Amazon wada",
              "params": "AWS_ACCESS_KEY='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_ACCESS_KEY_ID='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_SECRET_ACCESS_KEY='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'\r\nAWS_SECRET_KEY='DDi6DKOBFbBkPGanRXjIYDhlibmyxbMFBB/v4Ag3'\r\nAWS_KEYPAIR='pheromone'\r\nAWS_AMI='ami-018c9568'\r\nAWS_INSTANCE_TYPE='c3.large'\r\nAWS_DEFAULT_SECURITY_GROUP='web'\r\nCLIENT='WADA'\r\nPROJECT='wada-ama'\r\nMACHINE_NAME='wada-ama'\r\n",
              "provider": "aws"
            },
            "id": "787",
            "jeto_infos": null,
            "name": "[Drupal Server] WADA - Main - Validation",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "wada-main",
            "host": {
              "id": "4",
              "name": "Amazon wada",
              "params": "AWS_ACCESS_KEY='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_ACCESS_KEY_ID='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_SECRET_ACCESS_KEY='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'\r\nAWS_SECRET_KEY='DDi6DKOBFbBkPGanRXjIYDhlibmyxbMFBB/v4Ag3'\r\nAWS_KEYPAIR='pheromone'\r\nAWS_AMI='ami-018c9568'\r\nAWS_INSTANCE_TYPE='c3.large'\r\nAWS_DEFAULT_SECURITY_GROUP='web'\r\nCLIENT='WADA'\r\nPROJECT='wada-ama'\r\nMACHINE_NAME='wada-ama'\r\n",
              "provider": "aws"
            },
            "id": "792",
            "jeto_infos": null,
            "name": "WADA - Main - Prod (new)",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "wada-textbook",
            "host": {
              "id": "4",
              "name": "Amazon wada",
              "params": "AWS_ACCESS_KEY='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_ACCESS_KEY_ID='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_SECRET_ACCESS_KEY='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'\r\nAWS_SECRET_KEY='DDi6DKOBFbBkPGanRXjIYDhlibmyxbMFBB/v4Ag3'\r\nAWS_KEYPAIR='pheromone'\r\nAWS_AMI='ami-018c9568'\r\nAWS_INSTANCE_TYPE='c3.large'\r\nAWS_DEFAULT_SECURITY_GROUP='web'\r\nCLIENT='WADA'\r\nPROJECT='wada-ama'\r\nMACHINE_NAME='wada-ama'\r\n",
              "provider": "aws"
            },
            "id": "793",
            "jeto_infos": null,
            "name": "Drupal Server - WADA Textbook - Prod",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-drupal-server.git",
              "id": "36",
              "name": "Drupal Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Drupal Server",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:dev/floedesign.git",
        "id": "20",
        "instances": [
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "tags/1.0.0-beta10",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "265",
            "jeto_infos": null,
            "name": "Floe Design + Technologies - 1.0.0-beta10",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:dev/floedesign.git",
              "id": "20",
              "name": "Floe design+tech"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tags/1.0.0-beta11",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "272",
            "jeto_infos": null,
            "name": "Floe design+tech PROD 1.0.0+b11",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:dev/floedesign.git",
              "id": "20",
              "name": "Floe design+tech"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Floe design+tech",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:dev/gtd.git",
        "id": "10",
        "instances": [
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "master",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "129",
            "jeto_infos": null,
            "name": "GTD DEV",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:dev/gtd.git",
              "id": "10",
              "name": "gtd"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "gtd",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/gust-dnyc.git",
        "id": "23",
        "instances": [
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "softlayer",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "564",
            "jeto_infos": null,
            "name": "gust-dnyc test softlayer 2",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/gust-dnyc.git",
              "id": "23",
              "name": "Gust"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tags/1.1.2",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "631",
            "jeto_infos": null,
            "name": "Gust DNYC Prod",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/gust-dnyc.git",
              "id": "23",
              "name": "Gust"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Gust",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/gust-starthubboston.git",
        "id": "35",
        "instances": [
          {
            "archive_url": null,
            "environment": "editing",
            "git_reference": "editing",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "627",
            "jeto_infos": null,
            "name": "Gust Boston - Editing env",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/gust-starthubboston.git",
              "id": "35",
              "name": "Gust Starthub Boston"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Gust Starthub Boston",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:dev/leucan-vagrant.git",
        "id": "7",
        "instances": [
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "1.1.19-ga",
            "host": {
              "id": null,
              "name": null,
              "params": null,
              "provider": null
            },
            "id": "291",
            "jeto_infos": null,
            "name": "Leucan PROD 1.1.19 GA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:dev/leucan-vagrant.git",
              "id": "7",
              "name": "Leucan - Git"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tags/1.1.20",
            "host": {
              "id": null,
              "name": null,
              "params": null,
              "provider": null
            },
            "id": "401",
            "jeto_infos": null,
            "name": "Leucan Prod 1.1.20",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:dev/leucan-vagrant.git",
              "id": "7",
              "name": "Leucan - Git"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "tags/1.1.21-beta5",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "610",
            "jeto_infos": null,
            "name": "Leucan QA 1.1.21-beta5",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:dev/leucan-vagrant.git",
              "id": "7",
              "name": "Leucan - Git"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "tags/1.1.21-beta5",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "611",
            "jeto_infos": null,
            "name": "Leucan VAL 1.1.21-beta5",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:dev/leucan-vagrant.git",
              "id": "7",
              "name": "Leucan - Git"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tags/1.1.21-beta5",
            "host": {
              "id": null,
              "name": null,
              "params": null,
              "provider": null
            },
            "id": "629",
            "jeto_infos": null,
            "name": "Leucan Prod 1.1.21b5",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:dev/leucan-vagrant.git",
              "id": "7",
              "name": "Leucan - Git"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Leucan - Git",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.studioqi.ca:lvf/lvf.git",
        "id": "31",
        "instances": [],
        "name": "LVF",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.studioqi.ca:dev/vagrant.git",
        "id": "16",
        "instances": [],
        "name": "LVH",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.studioqi.ca:dev/blog.git",
        "id": "17",
        "instances": [],
        "name": "LVH - Blog",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:lvh/contest.git",
        "id": "24",
        "instances": [],
        "name": "LVH - Contest",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.studioqi.ca:dev/shiny.git",
        "id": "22",
        "instances": [],
        "name": "LVH - Shiny",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:sysadmin/mail-gateway.git",
        "id": "21",
        "instances": [
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "master",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "279",
            "jeto_infos": null,
            "name": "Mail gateway - 20150226",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:sysadmin/mail-gateway.git",
              "id": "21",
              "name": "Mail GW"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "sandbox",
            "git_reference": "master",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "517",
            "jeto_infos": null,
            "name": "test mailgw",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:sysadmin/mail-gateway.git",
              "id": "21",
              "name": "Mail GW"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Mail GW",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/medidata-main.git",
        "id": "34",
        "instances": [
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "release-1.11.0",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "777",
            "jeto_infos": null,
            "name": "Medidata - Validation - 1.11.0",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/medidata-main.git",
              "id": "34",
              "name": "Medidata"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "release-1.11.0",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "778",
            "jeto_infos": null,
            "name": "Medidata - QA - 1.11.0",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/medidata-main.git",
              "id": "34",
              "name": "Medidata"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Medidata",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-memcache-server.git",
        "id": "40",
        "instances": [
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "gust-dnyc",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "706",
            "jeto_infos": null,
            "name": "Gust - DNYC - Dev Memcached",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-memcache-server.git",
              "id": "40",
              "name": "Memcache Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "gust-dnyc",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "708",
            "jeto_infos": null,
            "name": "Gust - DNYC - QA Memcached",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-memcache-server.git",
              "id": "40",
              "name": "Memcache Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "gust-dnyc",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "709",
            "jeto_infos": null,
            "name": "Gust - DNYC - Validation Memcached",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-memcache-server.git",
              "id": "40",
              "name": "Memcache Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "gust-dnyc",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "710",
            "jeto_infos": null,
            "name": "Gust DNYC - Prod Memcached",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-memcache-server.git",
              "id": "40",
              "name": "Memcache Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "medidata-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "733",
            "jeto_infos": null,
            "name": "[Memcache Server] Medidata - MAIN - Validation",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-memcache-server.git",
              "id": "40",
              "name": "Memcache Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "medidata-main",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "735",
            "jeto_infos": null,
            "name": "[Memcache Server] Medidata - MAIN - Production",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-memcache-server.git",
              "id": "40",
              "name": "Memcache Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "preview",
            "git_reference": "medidata-main",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "738",
            "jeto_infos": null,
            "name": "[Memcache Server] Medidata - MAIN - Preview",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-memcache-server.git",
              "id": "40",
              "name": "Memcache Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "wada-main",
            "host": {
              "id": "4",
              "name": "Amazon wada",
              "params": "AWS_ACCESS_KEY='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_ACCESS_KEY_ID='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_SECRET_ACCESS_KEY='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'\r\nAWS_SECRET_KEY='DDi6DKOBFbBkPGanRXjIYDhlibmyxbMFBB/v4Ag3'\r\nAWS_KEYPAIR='pheromone'\r\nAWS_AMI='ami-018c9568'\r\nAWS_INSTANCE_TYPE='c3.large'\r\nAWS_DEFAULT_SECURITY_GROUP='web'\r\nCLIENT='WADA'\r\nPROJECT='wada-ama'\r\nMACHINE_NAME='wada-ama'\r\n",
              "provider": "aws"
            },
            "id": "784",
            "jeto_infos": null,
            "name": "[Memcache Server] WADA - Main - Validation",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-memcache-server.git",
              "id": "40",
              "name": "Memcache Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "wada-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "788",
            "jeto_infos": null,
            "name": "[Memcache Server] WADA - Main - Dev",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-memcache-server.git",
              "id": "40",
              "name": "Memcache Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "wada-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "789",
            "jeto_infos": null,
            "name": "[MySQL Server] Wada - MAIN - Qa",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-memcache-server.git",
              "id": "40",
              "name": "Memcache Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "wada-main",
            "host": {
              "id": "4",
              "name": "Amazon wada",
              "params": "AWS_ACCESS_KEY='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_ACCESS_KEY_ID='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_SECRET_ACCESS_KEY='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'\r\nAWS_SECRET_KEY='DDi6DKOBFbBkPGanRXjIYDhlibmyxbMFBB/v4Ag3'\r\nAWS_KEYPAIR='pheromone'\r\nAWS_AMI='ami-018c9568'\r\nAWS_INSTANCE_TYPE='c3.large'\r\nAWS_DEFAULT_SECURITY_GROUP='web'\r\nCLIENT='WADA'\r\nPROJECT='wada-ama'\r\nMACHINE_NAME='wada-ama'\r\n",
              "provider": "aws"
            },
            "id": "790",
            "jeto_infos": null,
            "name": "[Memcache Server] WADA - Main - Prod",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-memcache-server.git",
              "id": "40",
              "name": "Memcache Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Memcache Server",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-monitoring.git",
        "id": "38",
        "instances": [
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "master",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "672",
            "jeto_infos": null,
            "name": "Monitoring GA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-monitoring.git",
              "id": "38",
              "name": "Monitoring server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "spare",
            "git_reference": "master",
            "host": {
              "id": "14",
              "name": "VC1 Floe",
              "params": "VSPHERE_USER='vagrant'\r\nVSPHERE_PASSWORD='Aew6AipohCievahg'\r\nVSPHERE_SSH_USERNAME='sysadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='/Infra/Vagrant/ubuntu1404'\r\nVSPHERE_HOST='vc1.pheromone.ca'\r\nVSPHERE_COMPUTE_RESOURCE='Queen'\r\n",
              "provider": "vsphere"
            },
            "id": "677",
            "jeto_infos": null,
            "name": "Monitoring spare VC1",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-monitoring.git",
              "id": "38",
              "name": "Monitoring server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Monitoring server",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/mdlp.git",
        "id": "11",
        "instances": [
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "tags/release-1.37",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "124",
            "jeto_infos": null,
            "name": "MDLP VALIDATION - 1.37",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/mdlp.git",
              "id": "11",
              "name": "Mordu de la peche GIT"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "phase_2",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "267",
            "jeto_infos": null,
            "name": "MDLP Val Phase 2+EN",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/mdlp.git",
              "id": "11",
              "name": "Mordu de la peche GIT"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tags/release-1.40.1",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "418",
            "jeto_infos": null,
            "name": "MDLP Val 1.40.1 GA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/mdlp.git",
              "id": "11",
              "name": "Mordu de la peche GIT"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tags/release-1.41",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "427",
            "jeto_infos": null,
            "name": "MDLP PROD 1.41",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/mdlp.git",
              "id": "11",
              "name": "Mordu de la peche GIT"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Mordu de la peche GIT",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
        "id": "30",
        "instances": [
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "gust",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "508",
            "jeto_infos": null,
            "name": "Gust MySQL Validation 20150603",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "gust-starthubboston",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "648",
            "jeto_infos": null,
            "name": "MySQL Gust Boston Validation",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "gust-starthubboston",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "659",
            "jeto_infos": null,
            "name": "MySQL Gust Boston Prod",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "gust-dnyc",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "666",
            "jeto_infos": null,
            "name": "MySQL Gust DNYC Validation",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "gust-dnyc",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "678",
            "jeto_infos": null,
            "name": "MySQL Gust DNYC Prod",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "wada-ama",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "695",
            "jeto_infos": null,
            "name": "MariaDB Wada AMA Dev",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "medidata-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "728",
            "jeto_infos": null,
            "name": "[MySQL Server] Medidata - MAIN - Dev",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "medidata-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "730",
            "jeto_infos": null,
            "name": "[MySQL Server] Medidata - MAIN - QA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "medidata-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "731",
            "jeto_infos": null,
            "name": "[MySQL Server] Medidata - MAIN - Validation",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "medidata-main",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "732",
            "jeto_infos": null,
            "name": "[MySQL Server] Medidata - MAIN - Production",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "preview",
            "git_reference": "medidata-main",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "737",
            "jeto_infos": null,
            "name": "[MySQL Server] Medidata - MAIN - Preview",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "wada-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "765",
            "jeto_infos": null,
            "name": "[MySQL Server] Wada - MAIN - Dev",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "gust-dnyc",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "779",
            "jeto_infos": null,
            "name": "[MySQL Server] Gust - DNYC - Dev",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "wada-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "780",
            "jeto_infos": null,
            "name": "[MySQL Server] Wada - MAIN - QA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-mysql-server.git",
              "id": "30",
              "name": "Mysql server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Mysql server",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-nfs-server.git",
        "id": "37",
        "instances": [
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "gust-boston",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "647",
            "jeto_infos": null,
            "name": "NFS Gust Boston",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-nfs-server.git",
              "id": "37",
              "name": "NFS server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": "",
            "environment": "prod",
            "git_reference": "gust-boston",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "657",
            "jeto_infos": null,
            "name": "Gust Boston NFS prod",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-nfs-server.git",
              "id": "37",
              "name": "NFS server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "gust-dnyc",
            "host": {
              "id": "15",
              "name": "Softlayer Gust",
              "params": "SL_API_KEY=\"8c9aef2fec41690d74f2c7c758d128d3d10a58043e9de87f49866560fc630e03\"\r\nSL_SSH_KEY=\"jeto\"\r\nSL_DATACENTER=\"dal05\"\r\nSL_DOMAIN=\"floedesign.ca\"\r\nSL_USERNAME=\"SL604265\"\r\nSL_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nTARGET=\"softlayer-prod\"\r\n",
              "provider": "softlayer"
            },
            "id": "667",
            "jeto_infos": null,
            "name": "Gust DNYC NFS validation",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-nfs-server.git",
              "id": "37",
              "name": "NFS server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "NFS server",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": "/home/crevette/projects/wada-main",
        "git_address": null,
        "id": "2",
        "instances": [
          {
            "archive_url": "http://192.168.10.152:8000/wada-main-1.6.0%2B1431525953.tar.gz",
            "environment": "validation",
            "git_reference": "",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "462",
            "jeto_infos": null,
            "name": "WADA AMA 1.6.0-beta5 Validation",
            "path": "",
            "project": {
              "base_path": "/home/crevette/projects/wada-main",
              "git_address": null,
              "id": "2",
              "name": "old-Wada-ama"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "old-Wada-ama",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:dev/pherodon-brochure.git",
        "id": "15",
        "instances": [
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tags/1.0",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "155",
            "jeto_infos": null,
            "name": "Pherodon Brochure PROD 1.0",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:dev/pherodon-brochure.git",
              "id": "15",
              "name": "Pherodon Brochure"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Pherodon Brochure",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:dev/phero2013.git",
        "id": "19",
        "instances": [
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tags/1.2.11-ga",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "452",
            "jeto_infos": null,
            "name": "Pheromone PROD 1.2.11 GA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:dev/phero2013.git",
              "id": "19",
              "name": "Pheromone Website"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Pheromone Website",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "https://github.com/PierrePaul/phpquebec-2014-09-04.git",
        "id": "6",
        "instances": [],
        "name": "PHPQuebec",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:dev/redis.git",
        "id": "28",
        "instances": [],
        "name": "Redis server",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/smaks.git",
        "id": "26",
        "instances": [],
        "name": "SMA Skillable",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-solr-server.git",
        "id": "39",
        "instances": [
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "wada-ama",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "696",
            "jeto_infos": null,
            "name": "SOLR Wada AMA Dev",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-solr-server.git",
              "id": "39",
              "name": "SOLR Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "wada-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "749",
            "jeto_infos": null,
            "name": "[Solr Server] Wada - MAIN - Dev",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-solr-server.git",
              "id": "39",
              "name": "SOLR Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "wada-main",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "750",
            "jeto_infos": null,
            "name": "[Solr Server] Wada - MAIN - QA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-solr-server.git",
              "id": "39",
              "name": "SOLR Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "wada-main",
            "host": {
              "id": "4",
              "name": "Amazon wada",
              "params": "AWS_ACCESS_KEY='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_ACCESS_KEY_ID='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_SECRET_ACCESS_KEY='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'\r\nAWS_SECRET_KEY='DDi6DKOBFbBkPGanRXjIYDhlibmyxbMFBB/v4Ag3'\r\nAWS_KEYPAIR='pheromone'\r\nAWS_AMI='ami-018c9568'\r\nAWS_INSTANCE_TYPE='c3.large'\r\nAWS_DEFAULT_SECURITY_GROUP='web'\r\nCLIENT='WADA'\r\nPROJECT='wada-ama'\r\nMACHINE_NAME='wada-ama'\r\n",
              "provider": "aws"
            },
            "id": "786",
            "jeto_infos": null,
            "name": "[Solr Server] WADA - Main - Validation",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/floe-solr-server.git",
              "id": "39",
              "name": "SOLR Server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "SOLR Server",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/static-files-server.git",
        "id": "33",
        "instances": [
          {
            "archive_url": null,
            "environment": "demo",
            "git_reference": "master",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "552",
            "jeto_infos": null,
            "name": "Test static file server - 20150713",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/static-files-server.git",
              "id": "33",
              "name": "Static files server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tcf-6",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "553",
            "jeto_infos": null,
            "name": "TIAA Static files - TCF-6 - 20150713",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/static-files-server.git",
              "id": "33",
              "name": "Static files server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "floe",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "586",
            "jeto_infos": null,
            "name": "Floe Static files QA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/static-files-server.git",
              "id": "33",
              "name": "Static files server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "floe",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "609",
            "jeto_infos": null,
            "name": "Floe Static files PROD",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/static-files-server.git",
              "id": "33",
              "name": "Static files server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tiaa2",
            "host": {
              "id": "9",
              "name": "GroupeAccess",
              "params": "VSPHERE_USER='vagrant@vsphere.local'\r\nVSPHERE_PASSWORD='ZC$ZcqIQg%n1@xS7'\r\nVSPHERE_SSH_USERNAME='pheroadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='/root/.ssh/id_rsa_noencrypt'\r\nVSPHERE_TEMPLATE_NAME='template'\r\nVSPHERE_HOST='vc-ga.pheromone.ca'",
              "provider": "vsphere"
            },
            "id": "661",
            "jeto_infos": null,
            "name": "TIAA-CREF - 5 Year Vision Prototype 2 - Prod",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/static-files-server.git",
              "id": "33",
              "name": "Static files server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "tiaa2",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "662",
            "jeto_infos": null,
            "name": "TIAA-CREF - 5 Year Vision Prototype 2 - QA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/static-files-server.git",
              "id": "33",
              "name": "Static files server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "dev",
            "git_reference": "floe",
            "host": {
              "id": "16",
              "name": "OVH Vsphere",
              "params": "VSPHERE_USER='vagrant'\r\nVSPHERE_PASSWORD='ohmoo9Tho1wu'\r\nVSPHERE_SSH_USERNAME='sysadmin'\r\nVSPHERE_SSH_PRIVATE_KEY='~/.ssh/id_rsa'\r\nVSPHERE_TEMPLATE_NAME='/template-generic'\r\nVSPHERE_HOST='pcc-198-27-72-25.ovh.ca'\r\nVSPHERE_COMPUTE_RESOURCE='pcc-198-27-72-25_datacenter2236'\r\nVAGRANT_DEFAULT_PROVIDER='vsphere'\r\n",
              "provider": "vsphere"
            },
            "id": "794",
            "jeto_infos": null,
            "name": "Test OVH Vsphere - abondis -20160229",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/static-files-server.git",
              "id": "33",
              "name": "Static files server"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Static files server",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:dev/studioqi.git",
        "id": "13",
        "instances": [],
        "name": "Studioqi",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-list.git",
        "id": "12",
        "instances": [
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tags/0.1.10",
            "host": {
              "id": "4",
              "name": "Amazon wada",
              "params": "AWS_ACCESS_KEY='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_ACCESS_KEY_ID='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_SECRET_ACCESS_KEY='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'\r\nAWS_SECRET_KEY='DDi6DKOBFbBkPGanRXjIYDhlibmyxbMFBB/v4Ag3'\r\nAWS_KEYPAIR='pheromone'\r\nAWS_AMI='ami-018c9568'\r\nAWS_INSTANCE_TYPE='c3.large'\r\nAWS_DEFAULT_SECURITY_GROUP='web'\r\nCLIENT='WADA'\r\nPROJECT='wada-ama'\r\nMACHINE_NAME='wada-ama'\r\n",
              "provider": "aws"
            },
            "id": "344",
            "jeto_infos": null,
            "name": "WADA-List 0.1.10",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-list.git",
              "id": "12",
              "name": "Wada list"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "release-0.1.11",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "698",
            "jeto_infos": null,
            "name": "Wada-list QA 0.1.11",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-list.git",
              "id": "12",
              "name": "Wada list"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "validation",
            "git_reference": "release-0.1.11",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "700",
            "jeto_infos": null,
            "name": "WADA-list validation 0.1.10",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-list.git",
              "id": "12",
              "name": "Wada list"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tags/0.1.11",
            "host": {
              "id": "4",
              "name": "Amazon wada",
              "params": "AWS_ACCESS_KEY='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_ACCESS_KEY_ID='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_SECRET_ACCESS_KEY='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'\r\nAWS_SECRET_KEY='DDi6DKOBFbBkPGanRXjIYDhlibmyxbMFBB/v4Ag3'\r\nAWS_KEYPAIR='pheromone'\r\nAWS_AMI='ami-018c9568'\r\nAWS_INSTANCE_TYPE='c3.large'\r\nAWS_DEFAULT_SECURITY_GROUP='web'\r\nCLIENT='WADA'\r\nPROJECT='wada-ama'\r\nMACHINE_NAME='wada-ama'\r\n",
              "provider": "aws"
            },
            "id": "760",
            "jeto_infos": null,
            "name": "Wada list - Prod - 20160104",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-list.git",
              "id": "12",
              "name": "Wada list"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Wada list",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@git.pheromone.ca:dev/wada-lms.git",
        "id": "25",
        "instances": [
          {
            "archive_url": null,
            "environment": "",
            "git_reference": "tags/0.0.3",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "311",
            "jeto_infos": null,
            "name": "WADA",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@git.pheromone.ca:dev/wada-lms.git",
              "id": "25",
              "name": "Wada LMS"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Wada LMS",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-textbook.git",
        "id": "29",
        "instances": [
          {
            "archive_url": null,
            "environment": "qa",
            "git_reference": "develop",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "625",
            "jeto_infos": null,
            "name": "WADA Textbook - QA - 1.5.3",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-textbook.git",
              "id": "29",
              "name": "Wada Textbook - Git"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": null,
            "environment": "prod",
            "git_reference": "tags/1.5.3",
            "host": {
              "id": "4",
              "name": "Amazon wada",
              "params": "AWS_ACCESS_KEY='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_ACCESS_KEY_ID='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_SECRET_ACCESS_KEY='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'\r\nAWS_SECRET_KEY='DDi6DKOBFbBkPGanRXjIYDhlibmyxbMFBB/v4Ag3'\r\nAWS_KEYPAIR='pheromone'\r\nAWS_AMI='ami-018c9568'\r\nAWS_INSTANCE_TYPE='c3.large'\r\nAWS_DEFAULT_SECURITY_GROUP='web'\r\nCLIENT='WADA'\r\nPROJECT='wada-ama'\r\nMACHINE_NAME='wada-ama'\r\n",
              "provider": "aws"
            },
            "id": "628",
            "jeto_infos": null,
            "name": "Wada textbook 1.5.3",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-textbook.git",
              "id": "29",
              "name": "Wada Textbook - Git"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "Wada Textbook - Git",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": null,
        "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-main.git",
        "id": "32",
        "instances": [
          {
            "archive_url": "http://192.168.10.68:8000/wada-main-1.7.1%2B1448900083.tar.gz",
            "environment": "prod",
            "git_reference": "",
            "host": {
              "id": "4",
              "name": "Amazon wada",
              "params": "AWS_ACCESS_KEY='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_ACCESS_KEY_ID='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_SECRET_ACCESS_KEY='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'\r\nAWS_SECRET_KEY='DDi6DKOBFbBkPGanRXjIYDhlibmyxbMFBB/v4Ag3'\r\nAWS_KEYPAIR='pheromone'\r\nAWS_AMI='ami-018c9568'\r\nAWS_INSTANCE_TYPE='c3.large'\r\nAWS_DEFAULT_SECURITY_GROUP='web'\r\nCLIENT='WADA'\r\nPROJECT='wada-ama'\r\nMACHINE_NAME='wada-ama'\r\n",
              "provider": "aws"
            },
            "id": "717",
            "jeto_infos": null,
            "name": "WADA AMA Prod 1.7.1",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-main.git",
              "id": "32",
              "name": "WADA-AMA"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": "http://192.168.10.68:8000/wada-main-1.8.0%2B1450734185.tar.gz",
            "environment": "qa",
            "git_reference": "",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "758",
            "jeto_infos": null,
            "name": "WADA AMA - QA - 1.8.0",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-main.git",
              "id": "32",
              "name": "WADA-AMA"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": "http://192.168.10.68:8000/wada-main-1.8.0%2B1450734185.tar.gz",
            "environment": "validation",
            "git_reference": "",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "759",
            "jeto_infos": null,
            "name": "WADA AMA - Validation - 1.8.0",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-main.git",
              "id": "32",
              "name": "WADA-AMA"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": "http://192.168.10.68:8000/wada-main-1.8.0%2B1450734185.tar.gz",
            "environment": "prod",
            "git_reference": "",
            "host": {
              "id": "4",
              "name": "Amazon wada",
              "params": "AWS_ACCESS_KEY='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_ACCESS_KEY_ID='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_SECRET_ACCESS_KEY='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'\r\nAWS_SECRET_KEY='DDi6DKOBFbBkPGanRXjIYDhlibmyxbMFBB/v4Ag3'\r\nAWS_KEYPAIR='pheromone'\r\nAWS_AMI='ami-018c9568'\r\nAWS_INSTANCE_TYPE='c3.large'\r\nAWS_DEFAULT_SECURITY_GROUP='web'\r\nCLIENT='WADA'\r\nPROJECT='wada-ama'\r\nMACHINE_NAME='wada-ama'\r\n",
              "provider": "aws"
            },
            "id": "761",
            "jeto_infos": null,
            "name": "WADA AMA Prod 1.8.0",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-main.git",
              "id": "32",
              "name": "WADA-AMA"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": "http://192.168.10.163:8000/wada-main-1.8.1%2B1453504324.tar.gz",
            "environment": "qa",
            "git_reference": "",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "771",
            "jeto_infos": null,
            "name": "WADA AMA - QA - 1.8.1",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-main.git",
              "id": "32",
              "name": "WADA-AMA"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": "http://192.168.10.163:8000/wada-main-1.8.1%2B1453504324.tar.gz",
            "environment": "prod",
            "git_reference": "",
            "host": {
              "id": "4",
              "name": "Amazon wada",
              "params": "AWS_ACCESS_KEY='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_ACCESS_KEY_ID='AKIAJIT7BUHMAMOGRYMA'\r\nAWS_SECRET_ACCESS_KEY='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'\r\nAWS_SECRET_KEY='DDi6DKOBFbBkPGanRXjIYDhlibmyxbMFBB/v4Ag3'\r\nAWS_KEYPAIR='pheromone'\r\nAWS_AMI='ami-018c9568'\r\nAWS_INSTANCE_TYPE='c3.large'\r\nAWS_DEFAULT_SECURITY_GROUP='web'\r\nCLIENT='WADA'\r\nPROJECT='wada-ama'\r\nMACHINE_NAME='wada-ama'\r\n",
              "provider": "aws"
            },
            "id": "774",
            "jeto_infos": null,
            "name": "Wada AMA Prod 1.8.1",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-main.git",
              "id": "32",
              "name": "WADA-AMA"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          },
          {
            "archive_url": "http://192.168.10.163:8000/wada-main-1.9.0%2B1454345705.tar.gz",
            "environment": "qa",
            "git_reference": "",
            "host": {
              "id": "1",
              "name": "local lxc",
              "params": "",
              "provider": "lxc"
            },
            "id": "783",
            "jeto_infos": null,
            "name": "WADA AMA - QA - 1.9.0",
            "path": "",
            "project": {
              "base_path": null,
              "git_address": "git@bitbucket.org:FloeDesignTechnologies/wada-main.git",
              "id": "32",
              "name": "WADA-AMA"
            },
            "status": {
              "ip": null,
              "name": null,
              "status": null
            }
          }
        ],
        "name": "WADA-AMA",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      },
      {
        "base_path": "/home/crevette/projects/wada-textbook",
        "git_address": null,
        "id": "1",
        "instances": [],
        "name": "Wada-Textbook-path<br>",
        "teams": {
          "id": null,
          "name": null,
          "permissions_grids": {
            "action": null,
            "id": 0,
            "objectId": 0,
            "objectType": null
          },
          "users": {
            "email": null,
            "id": null,
            "name": null,
            "picture": null,
            "role": null
          }
        }
      }
    ]
  }

}