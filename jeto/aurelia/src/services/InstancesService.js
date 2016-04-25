import 'fetch';
import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class InstancesService {

  constructor(HttpClient) {
    this.HttpClient = HttpClient;
  }

  getInstanceList() {
    // TO BE IMPLEMENTED
    return this.instancesList;
  }

  instancesList = {
    "instances": [
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
      },
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
      }
    ]
  }

}