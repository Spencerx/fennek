/**
 * Created by coyote on 3/16/17.
 */

/*
 The following links are generated after a system has been added to SUSE Manager
 You have 1 traditional system setup for these images to render. Traditional System ID should match the end : sid=1000010000
 TODO: Add code that picks up systemids and correctly adds it to this code.
 TODO: We cannot guarantee that a system ID will always be the same.
 */


// Systems > System Details > Overview
casper.thenOpen(url + '/rhn/systems/details/Overview.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_overview.png',
        '#spacewalk-content')
});


// Systems > System Details > Properties
casper.thenOpen(url + '/rhn/systems/details/Edit.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_edit.png',
        '#spacewalk-content')
});


// Systems > System Details > Remote Command
casper.thenOpen(url + '/rhn/systems/details/SystemRemoteCommand.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_remote_cmd.png',
        '#spacewalk-content')
});


// Systems > System Details > Activation
casper.thenOpen(url + '/rhn/systems/details/Activation.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_hardware.png',
        '#spacewalk-content')
});


// Systems > System Details > System Hardware
casper.thenOpen(url + '/rhn/systems/details/SystemHardware.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_hardware.png',
        '#spacewalk-content')
});


// Systems > System Details > Migrate
casper.thenOpen(url + '/rhn/systems/details/SystemMigrate.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_migrate.png',
        '#spacewalk-content')
});


// Systems > System Details > Notes
casper.thenOpen(url + '/rhn/systems/details/Notes.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_notes.png',
        '#spacewalk-content')
});


// Systems > System Details > Custom Info
casper.thenOpen(url + '/rhn/systems/details/ListCustomData.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_custom_info.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Packages
casper.thenOpen(url + '/rhn/systems/details/packages/Packages.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_software_packages.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Patches
casper.thenOpen(url + '/rhn/systems/details/ErrataList.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_software_patches.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Package List
casper.thenOpen(url + '/rhn/systems/details/packages/PackageList.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_software_package_list.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Upgrade List
casper.thenOpen(url + '/rhn/systems/details/packages/UpgradableList.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_software_upgrade_list.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Install Packages
casper.thenOpen(url + '/rhn/systems/details/packages/InstallPackages.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_software_install_packages.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Verify Packages
casper.thenOpen(url + '/rhn/systems/details/packages/VerifyPackages.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_software_install_packages.png',
        '#spacewalk-content')
});

// Systems > System Details > Software > Lock Packages
casper.thenOpen(url + '/rhn/systems/details/packages/LockPackages.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_software_install_packages.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Profiles
casper.thenOpen(url + '/rhn/systems/details/packages/profiles/ShowProfiles.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_software_profiles.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Create Profile
casper.thenOpen(url + '/rhn/systems/details/packages/profiles/Create.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_software_create_profile.png',
        '#spacewalk-content')
});



// Systems > System Details > Software > Non Compliant Packages
casper.thenOpen(url + '/rhn/systems/details/packages/ExtraPackagesList.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_software_non_compliant_packages.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > Software Channels
casper.thenOpen(url + '/rhn/systems/details/SystemChannels.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_software_system_channels.png',
        '#spacewalk-content')
});


// Systems > System Details > Software > SP Migration
casper.thenOpen(url + '/rhn/systems/details/SPMigration.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_software_sp_migration.png',
        '#spacewalk-content')
});

// Systems > System Details > Configuration > Overview
casper.thenOpen(url + '/rhn/systems/details/configuration/Overview.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_configuration_overview.png',
        '#spacewalk-content')
});


// Systems > System Details > Configuration > View Modify Central Paths
casper.thenOpen(url + '/rhn/systems/details/configuration/ViewModifyCentralPaths.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_configuration_view_mod_central_paths.png',
        '#spacewalk-content')
});


// Systems > System Details > Configuration > View Mod Local Paths
casper.thenOpen(url + '/rhn/systems/details/configuration/ViewModifyLocalPaths.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_configuration_view_mod_local_paths.png',
        '#spacewalk-content')
});


// Systems > System Details > Configuration > View Mod Sandbox Paths
casper.thenOpen(url + '/rhn/systems/details/configuration/ViewModifySandboxPaths.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_configuration_view_mod_sandbox_paths.png',
        '#spacewalk-content')
});


// Systems > System Details > Configuration > Addfiles Upload
casper.thenOpen(url + '/rhn/systems/details/configuration/addfiles/UploadFile.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_configuration_add_files_upload.png',
        '#spacewalk-content')
});


// Systems > System Details > Configuration > Addfiles Import
casper.thenOpen(url + '/rhn/systems/details/configuration/addfiles/ImportFile.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_configuration_add_files_import.png',
        '#spacewalk-content')
});


// Systems > System Details > Configuration > Addfiles Create File
casper.thenOpen(url + '/rhn/systems/details/configuration/addfiles/CreateFile.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_configuration_add_files_create.png',
        '#spacewalk-content')
});


// Systems > System Details > Configuration > Deploy File
casper.thenOpen(url + '/rhn/systems/details/configuration/DeployFile.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_configuration_deploy_file.png',
        '#spacewalk-content')
});


// Systems > System Details > Configuration > Diff File
casper.thenOpen(url + '/rhn/systems/details/configuration/DiffFile.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_configuration_diff_file.png',
        '#spacewalk-content')
});


// Systems > System Details > Configuration > Config Channel List
casper.thenOpen(url + '/rhn/systems/details/configuration/ConfigChannelList.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_configuration_config_channel_list.png',
        '#spacewalk-content')
});


// Systems > System Details > Configuration > Subscription Setup
casper.thenOpen(url + '/rhn/systems/details/configuration/SubscriptionsSetup.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_configuration_subscription_setup.png',
        '#spacewalk-content')
});


// Systems > System Details > Configuration > Rank Channels
casper.thenOpen(url + '/rhn/systems/details/configuration/RankChannels.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_configuration_rank_channels.png',
        '#spacewalk-content')
});


// Systems > System Details > Provisioning > Schedule Wizard
casper.thenOpen(url + '/rhn/systems/details/kickstart/ScheduleWizard.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_provisioning_schedule_wizard.png',
        '#spacewalk-content')
});


// Systems > System Details > Provisioning > Power Management
casper.thenOpen(url + '/rhn/systems/details/kickstart/PowerManagement.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_provisioning_power_management.png',
        '#spacewalk-content')
});


// Systems > System Details > Provisioning > Snapshot Index
casper.thenOpen(url + '/rhn/systems/details/history/snapshots/Index.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_provisioning_snapshot_index.png',
        '#spacewalk-content')
});


// Systems > System Details > Provisioning > Snapshot Tags
casper.thenOpen(url + '/rhn/systems/details/history/snapshots/Tags.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_provisioning_snapshot_tags.png',
        '#spacewalk-content')
});


// Systems > System Details > List Groups
casper.thenOpen(url + '/rhn/systems/details/groups/ListRemove.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_list_groups.png',
        '#spacewalk-content')
});


// Systems > System Details > Add Group
casper.thenOpen(url + '/rhn/systems/details/groups/Add.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_add_group.png',
        '#spacewalk-content')
});


// Systems > System Details > Audit > List
casper.thenOpen(url + '/rhn/systems/details/audit/ListScap.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_list_audit.png',
        '#spacewalk-content')
});


// Systems > System Details > Audit > Schedule Audit
casper.thenOpen(url + '/rhn/systems/details/audit/ScheduleXccdf.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_schedule_audit.png',
        '#spacewalk-content')
});


// Systems > System Details > Events > History
casper.thenOpen(url + '/rhn/systems/details/history/Pending.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_events_pending.png',
        '#spacewalk-content')
});


// Systems > System Details > Events > History
casper.thenOpen(url + '/rhn/systems/details/history/History.do?sid=' + tradSid, function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/systems/systems-details/traditional/system_details_traditional_events_history.png',
        '#spacewalk-content')
});