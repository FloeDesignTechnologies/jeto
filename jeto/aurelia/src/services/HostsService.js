import 'fetch';
import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class HostsService {

  constructor(HttpClient) {
    this.HttpClient = HttpClient;
  }

  getHostList() {
    // TO BE IMPLEMENTED
    return this.hostLists;
  }

  hostLists = {
    "hosts": [
      {
        "id": "2",
        "name": "Amazon Pheromone",
        "params": "AWS_ACCESS_KEY_ID=AKIAIQZ4A2FIWHB4F64A\nAWS_SECRET_ACCESS_KEY=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\nAWS_KEYPAIR=crevette\nAWS_AMI=ami-e84d8480\nAWS_INSTANCE_TYPE=m1.small\nAWS_DEFAULT_SECURITY_GROUP='SSH + HTTP'",
        "provider": "aws"
      },
      {
        "id": "1",
        "name": "local lxc",
        "params": "",
        "provider": "lxc"
      }
    ]
  }

}