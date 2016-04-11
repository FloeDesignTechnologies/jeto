import {inject} from 'aurelia-framework';
import {EventAggregator}  from 'aurelia-event-aggregator';
import {InstancesService} from 'services/InstancesService';
import {ProjectsService}  from 'services/ProjectsService';
import {HostsService}     from 'services/HostsService';
import {Modal}            from 'common/modal/modal';


@inject(EventAggregator, InstancesService,ProjectsService, HostsService)
export class Instances {

  constructor(eventAggregator, instanceService, projectService, hostsService) {
      this.eventAggregator  = eventAggregator;
      this.instanceService  = instanceService;
      this.projectService   = projectService;
      this.hostsService     = hostsService;
      this.instances  = this.instanceService.getInstanceList().instances;
      this.projects   = this.projectService.getProjectList().projects;
      this.hosts      = this.hostsService.getHostList().hosts;
  }

  activate() {
    // Environment dropdown
    this.environmentOptions = [
      {label: 'All Environments', value: ''},
      {label: 'Sandbox',          value: 'sandbox'},
      {label: 'Development',      value: 'development'},
      {label: 'QA',               value: 'qa'},
      {label: 'Validation',       value: 'validation'}
    ];
    this.defaultEnvironment = this.environmentOptions[0];

    // Projects dropdown
    this.projectOptions = [{ label:"All Projects", value:""}];
    for( let project of this.projects) {
      this.projectOptions.push({ label:project.name, value:project.id});
    }
    this.defaultProject = this.projectOptions[0];

    // hosts dropdown
    this.hostOptions = [{ label:"All Hosts", value:""}];
    for( let host of this.hosts) {
      this.hostOptions.push({ label:host.name, value:host.id});
    }
    this.defaultHost = this.hostOptions[0];

  }

  // Callbacks

  changeEnvironment(evt) {
    // The selected value will be printed out to the browser console
    console.log(evt.detail.value);
  }

  changeProject(evt) {
    // The selected value will be printed out to the browser console
    console.log(evt.detail.value);
  }

  changeHost(evt) {
    // The selected value will be printed out to the browser console
    console.log(evt.detail.value);

  }

  showCreateMachineModal() {
    this.eventAggregator.publish(Modal.ShowModalEvent, {id:"machine-modal", title:"Create a new machine"});
  }

}
