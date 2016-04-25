import {inject, bindable} from 'aurelia-framework';
import {InstancesService} from 'services/InstancesService';
import {ProjectsService}  from 'services/ProjectsService';
import {HostsService}     from 'services/HostsService';
import {EventAggregator}  from 'aurelia-event-aggregator';
import {Modal}            from 'common/modal/modal';
import $                  from 'jquery';

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
    this.showError = false;
    this.showSuccess = false;
    this.showLoading = false;
  }

  activate(id) {
    this.id = id;
    this.activeTab = "git";
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

    // Hosts dropdown
    this.hostOptions = [{ label:"Choose a Hosts", value:""}];
    for( let host of this.hosts) {
      this.hostOptions.push({ label:host.name, value:host.id});
    }
    this.defaultHost = this.hostOptions[0];
    this.eventAggregator.subscribe(Modal.SaveModalEvent, response => {
      this.saveData(response);
    });
    this.setGitReferenceList();
  }

  saveData(response) {
    this.showError = false;
    if( response.id != this.id ) {
      return;
    }
    let data = this.validateForm();
    if( data.error ) {
      this.showError = true;
      this.errors = data.errors;
      this.errorTitle = "Please fix those errors";
    }
    else {
      this.showLoading = true;
      setTimeout( () => {
        this.showSuccess = true;
        this.showLoading = false;
      },2000);
    }
s  }

  setActiveTab(activeTab) {
    this.activeTab = activeTab;
  }

  validateForm() {
    let data = {};
    data.errors = [];

    data.project = this.project;
    if( !data.project ) {
      data.error = true;
      data.errors.push("Please choose a project");
    }

    data.host = this.host;
    if( !data.host ) {
      data.error = true;
      data.errors.push("Please choose an host");
    }

    data.environment = this.environment;
    if( !data.environment ) {
      data.error = true;
      data.errors.push("Please choose an environment");
    }

    data.name = this.name;
    if( !data.name ) {
      data.error = true;
      data.errors.push("Please choose a machine name");
    }

    if (this.activeTab == "git") {
      data.gitReference = this.gitReference;
      if (!data.gitReference) {
        data.error = true;
        data.errors.push("Please choose a git reference");
      }
    }
    else {
      data.archiveUrl   = this.archiveUrl;
      if (!this.archiveUrl) {
        data.error = true;
        data.errors.push("Please choose an archive url");
      }
    }
    return data;
  }

  setGitReferenceList() {
    if( !this.project ) return;
    let gitReferences = this.projectService.getGitReferenceList(this.project);
    this.showGitReference = false;
    if(gitReferences.length) {
      this.showGitReference = true;
    }
    var options = [{ label:"Choose a Git Reference", value:"" }];
    for( let gitReference of gitReferences) {
      options.push({ label:gitReference, value:gitReference});
    }
    this.gitReferenceOptions = options;
    setTimeout( ()=> {
      $("#gitReference").val("").trigger("change");
    }, 10 );

  }

  refreshGitReferencesList(evt) {
    $(evt.target).blur();
    this.isLoading = true;
    this.setGitReferenceList();
    setTimeout( () => {
      this.isLoading = false;
    }, 500);
  }

  changeEnvironment(evt) {
    this.environment = evt.detail.value;
  }

  changeProject(evt) {
    this.project = evt.detail.value;
    if(!this.project) {
      this.showGitReference = false;
    }
    this.setGitReferenceList();
  }

  changeHost(evt) {
    this.host = evt.detail.value;
  }

  showCreateMachineModal() {
    this.eventAggregator.publish(Modal.ShowModalEvent, {id:"machine-modal", title:"Create a new machine"});
  }

  changeReferenceGit(evt) {
    this.gitReference = evt.detail.value;
  }

  closeSuccessAlert() {
    this.showSuccess = false;
  }
  
  closeErrorAlert() {
    this.showError = false;
  }

}