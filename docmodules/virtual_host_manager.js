/**
 * Created by coyote on 3/16/17.
 * Systems Virtual Host Managers Page from SUSE Manager WebUI
 */


// Systems: Virtual Host Managers
casper.thenOpen(url + '/rhn/manager/vhms', function() {
    this.captureSelector('images/systems/systems_virtual_host_managers.png', '#spacewalk-content')
});

// Systems: VHMS File
casper.thenOpen(url + '/rhn/manager/vhms#/create/file', function() {
    this.captureSelector('images/systems/systems_virtual_host_managers_file.png', '#spacewalk-content')
});

// Systems: VHMS VMWare
casper.thenOpen(url + '/rhn/manager/vhms#/create/vmware', function() {
    //use sendKeys by default for filling forms. If there is javascript the dict function will not work.
    /*
     this.sendKeys("input[name='label']", 'Galaxy');
     this.sendKeys("input[name='module_hostname']", 'galaxy.suse.com');
     this.sendKeys("input[name='module_port']", '443');
     this.sendKeys("input[name='module_username']", 'Geeko');
     this.sendKeys("input[name='module_password']", 'Penguin');
     */
    this.captureSelector('images/systems/systems_virtual_host_managers_vmware.png', '#spacewalk-content');

});