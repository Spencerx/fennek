/**
 * Created by coyote on 3/16/17.
 */

/*
The following links are generated after a system has been added to SUSE Manager
You have 1 salt system setup for these images to work. System ID should match the end:
 */


// Systems > System Details > Overview
casper.thenOpen(url + '/rhn/systems/details/Overview.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_overview.png',
        '#spacewalk-content')
});


// Systems > System Details > Properties
casper.thenOpen(url + '/rhn/systems/details/Edit.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_edit.png',
        '#spacewalk-content')
});


// Systems > System Details > Remote Command
casper.thenOpen(url + '/rhn/systems/details/SystemRemoteCommand.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_remote_cmd.png',
        '#spacewalk-content')
});


//TODO: Cut this page into explanatory details for each pane. It is too long as is.
// Systems > System Details > System Hardware
casper.thenOpen(url + '/rhn/systems/details/SystemHardware.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_hardware.png',
        '#spacewalk-content')
});


// Systems > System Details > Migrate
casper.thenOpen(url + '/rhn/systems/details/SystemMigrate.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_migrate.png',
        '#spacewalk-content')
});


// Systems > System Details > Notes
casper.thenOpen(url + '/rhn/systems/details/Notes.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_notes.png',
        '#spacewalk-content')
});


// Systems > System Details > Custom Info
casper.thenOpen(url + '/rhn/systems/details/ListCustomData.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_custom_info.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Packages
casper.thenOpen(url + '/rhn/systems/details/packages/Packages.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_software_packages.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Patches
casper.thenOpen(url + '/rhn/systems/details/ErrataList.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_software_patches.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Package List
casper.thenOpen(url + '/rhn/systems/details/packages/PackageList.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_software_package_list.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Upgrade List
casper.thenOpen(url + '/rhn/systems/details/packages/UpgradableList.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_software_upgrade_list.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Install Packages
casper.thenOpen(url + '/rhn/systems/details/packages/InstallPackages.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_software_install_packages.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Non Compliant Packages
casper.thenOpen(url + '/rhn/systems/details/packages/ExtraPackagesList.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_software_non_compliant_packages.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Software Channels
casper.thenOpen(url + '/rhn/systems/details/SystemChannels.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_software_system_channels.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > SP Migration
casper.thenOpen(url + '/rhn/systems/details/SPMigration.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_software_sp_migration.png',
        '#spacewalk-content')
});


// Systems > System Details > List Groups
casper.thenOpen(url + '/rhn/systems/details/groups/ListRemove.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_list_groups.png',
        '#spacewalk-content')
});


// Systems > System Details > Add Group
casper.thenOpen(url + '/rhn/systems/details/groups/Add.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_add_group.png',
        '#spacewalk-content')
});


// Systems > System Details > Audit > List
casper.thenOpen(url + '/rhn/systems/details/audit/ListScap.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_list_audit.png',
        '#spacewalk-content')
});


// Systems > System Details > Audit > Schedule Audit
casper.thenOpen(url + '/rhn/systems/details/audit/ScheduleXccdf.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_schedule_audit.png',
        '#spacewalk-content')
});


// Systems > System Details > States > Packages
casper.thenOpen(url + '/rhn/manager/systems/details/packages?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_states_packages.png',
        '#spacewalk-content')
});


// Systems > System Details > States > Custom
casper.thenOpen(url + '/rhn/manager/systems/details/custom?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_states_custom.png',
        '#spacewalk-content')
});


// Systems > System Details > States > Highstate
casper.thenOpen(url + '/rhn/manager/systems/details/highstate?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_states_highstate.png',
        '#spacewalk-content')
});


// Systems > System Details > States > Formulas
casper.thenOpen(url + '/rhn/manager/systems/details/formulas?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_states_formulas.png',
        '#spacewalk-content')
});


// Systems > System Details > Events > History
casper.thenOpen(url + '/rhn/systems/details/history/Pending.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_events_pending.png',
        '#spacewalk-content')
});


// Systems > System Details > Events > History
casper.thenOpen(url + '/rhn/systems/details/history/History.do?sid=' + saltSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/salt/system_details_salt_events_history.png',
        '#spacewalk-content')
});
