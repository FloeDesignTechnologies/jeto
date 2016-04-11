import {inject, bindable} from 'aurelia-framework';
import {InstancesService} from 'services/InstancesService';
import {ProjectsService}  from 'services/ProjectsService';
import {HostsService}     from 'services/HostsService';
import {EventAggregator}  from 'aurelia-event-aggregator';
import {Modal}            from 'common/modal/modal';

@inject(EventAggregator, InstancesService,ProjectsService, HostsService)
export class AddMachine {
  //EMPTY

  constructor(eventAggregator, instanceService, projectService, hostsService) {
    this.eventAggregator  = eventAggregator;
    this.instanceService  = instanceService;
    this.projectService   = projectService;
    this.hostsService     = hostsService;
    this.instances  = this.instanceService.getInstanceList().instances;
    this.projects   = this.projectService.getProjectList().projects;
    this.hosts      = this.hostsService.getHostList().hosts;

    this.showGitReference = false;
    this.isLoading = false;
  }

  activate(id) {
    this.id = id;
    // Environment dropdown
    this.environmentOptions = [
      {label: 'Choose a Environments', value: ''},
      {label: 'Sandbox',          value: 'sandbox'},
      {label: 'Development',      value: 'development'},
      {label: 'QA',               value: 'qa'},
      {label: 'Validation',       value: 'validation'}
    ];
    this.defaultEnvironment = this.environmentOptions[0];

    // Projects dropdown
    this.projectOptions = [{ label:"Choose a Projects", value:""}];
    for( let project of this.projects) {
      this.projectOptions.push({ label:project.name, value:project.id});
    }
    this.defaultProject = this.projectOptions[0];

    // hosts dropdown
    this.hostOptions = [{ label:"Choose a Hosts", value:""}];
    for( let host of this.hosts) {
      this.hostOptions.push({ label:host.name, value:host.id});
    }
    this.defaultHost = this.hostOptions[0];
    this.eventAggregator.subscribe(Modal.SaveModalEvent, response => {
      this.saveData(response);
    });
  }

  saveData(response) {
    if( response.id != this.id ) {
      return;
    }

    this.eventAggregator.publish(Modal.CloseModalEvent, {id:this.name});

  }
  
  updateGitProjectList() {
    let gitReferences = this.projectService.getGitReferenceList(this.project).gitReferences;
    this.showGitReference = false;
    if(gitReferences) {
      this.showGitReference = true;
    }

    this.gitReferenceOptions = [];
    for( let gitReference of gitReferences) {
      this.gitReferenceOptions.push({ label:gitReference, value:gitReference});
    }
    
  }

  changeEnvironment(evt) {
    // The selected value will be printed out to the browser console
    this.environment = evt.detail.value;
    console.log(evt.detail.value);
  }

  changeProject(evt) {
    // The selected value will be printed out to the browser console
    this.project = evt.detail.value;
    this.updateGitProjectList(this.project);
    console.log(evt.detail.value);
  }

  changeHost(evt) {
    // The selected value will be printed out to the browser console
    this.project = evt.detail.value;
    console.log(evt.detail.value);
  }

  changeReferenceGit(evt) {
    // The selected value will be printed out to the browser console
    this.referenceGit = evt.detail.value;
    console.log("changeReferenceGit: ",evt);
  }

  showCreateMachineModal() {
    this.eventAggregator.publish(Modal.ShowModalEvent, {id:"machine-modal", title:"Create a new machine"});
  }

}