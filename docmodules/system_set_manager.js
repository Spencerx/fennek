/**
 * Created by coyote on 3/16/17.
 */



// Systems: SSM: Overview
casper.thenOpen(url + '/rhn/ssm/index.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_overview.png', '#spacewalk-content', '#spacewalk-content')
});

// Systems: SSM: Systems: List Selected Systems
casper.thenOpen(url + '/rhn/systems/ssm/ListSystems.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_list_systems.png', '#spacewalk-content')
});

// Systems: SSM: Patches
casper.thenOpen(url + '/rhn/systems/ssm/ListErrata.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_patches.png', '#spacewalk-content')
});

// Systems: SSM: Packages
casper.thenOpen(url + '/rhn/ssm/Packages.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_packages_overview.png', '#spacewalk-content')
});

// Systems: SSM: Packages: Upgrade
casper.thenOpen(url + '/rhn/ssm/PackageUpgrade.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_upgrade.png', '#spacewalk-content')
});

// Systems: SSM: Packages: Install
casper.thenOpen(url + '/rhn/ssm/PackageInstall.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_install.png', '#spacewalk-content')
});

// Systems: SSM: Packages: Remove
casper.thenOpen(url + '/rhn/ssm/PackageRemove.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_remove.png', '#spacewalk-content')
});

// Systems: SSM: Packages: Verify
casper.thenOpen(url + '/rhn/ssm/PackageVerify.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_verify.png', '#spacewalk-content')
});

// Systems: SSM: Groups
casper.thenOpen(url + '/rhn/systems/ssm/groups/Manage.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_groups.png', '#spacewalk-content')
});

// Systems: SSM: Channels
casper.thenOpen(url + '/rhn/channel/ssm/ChildSubscriptions.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_overview.png', '#spacewalk-content')
});

// Systems: SSM: Channels: Base Channels
casper.thenOpen(url + '/rhn/channel/ssm/BaseChannelSubscribe.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_base_channels.png', '#spacewalk-content')
});

// Systems: SSM: Configuration:
casper.thenOpen(url + '/rhn/systems/ssm/config/Deploy.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_config_deploy_files.png', '#spacewalk-content')
});

// Systems: SSM: Configuration
casper.thenOpen(url + '/rhn/systems/ssm/config/Diff.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_config_compare_files.png', '#spacewalk-content')
});

// Systems: SSM: Configuration
casper.thenOpen(url + '/rhn/systems/ssm/config/Subscribe.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_config_subscribe_to_channels.png', '#spacewalk-content')
});

// Systems: SSM: Configuration
casper.thenOpen(url + '/rhn/systems/ssm/config/Unsubscribe.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_config_unsubscribe_from_channels.png', '#spacewalk-content')
});

// Systems: SSM: Configuration
casper.thenOpen(url + '/rhn/systems/ssm/config/Enable.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_config_enable_config.png', '#spacewalk-content')
});

// Systems: SSM: Provisioning: Autoinstallation
casper.thenOpen(url + '/rhn/systems/ssm/kickstart/KickstartableSystems.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_autoinstallation.png', '#spacewalk-content')
});

// Systems: SSM: Provisioning: Tag Systems
casper.thenOpen(url + '/rhn/systems/ssm/provisioning/TagSystems.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_tag_systems.png', '#spacewalk-content')
});

// Systems: SSM: Provisioning: Rollback
casper.thenOpen(url + '/rhn/systems/ssm/provisioning/Rollback.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_rollback.png', '#spacewalk-content')
});

// Systems: SSM: Provisioning: Remote Command
casper.thenOpen(url + '/rhn/systems/ssm/provisioning/RemoteCommand.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_remote_command.png', '#spacewalk-content')
});

// Systems: SSM: Provisioning: Power Management Configuration
casper.thenOpen(url + '/rhn/systems/ssm/provisioning/PowerManagementConfiguration.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_power_management_config.png', '#spacewalk-content')
});

// Systems: SSM: Provisioning: Power Management Operations
casper.thenOpen(url + '/rhn/systems/ssm/provisioning/PowerManagementOperations.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_power_management_operations.png', '#spacewalk-content')
});

// Systems: SSM: Audit
casper.thenOpen(url + '/rhn/systems/ssm/audit/ScheduleXccdf.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_audit.png', '#spacewalk-content')
});

// Systems: SSM: Misc Index
casper.thenOpen(url + '/rhn/systems/ssm/misc/Index.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_misc_index.png', '#spacewalk-content')
});

// Systems: SSM: Misc Hardware
casper.thenOpen(url + '/rhn/systems/ssm/misc/HardwareRefresh.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_misc_hardware_refresh.png', '#spacewalk-content')
});

// Systems: SSM: Misc Software
casper.thenOpen(url + '/rhn/systems/ssm/misc/SoftwareRefresh.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_misc_software_refresh.png', '#spacewalk-content')
});

// Systems: SSM: Misc Delete
casper.thenOpen(url + '/rhn/systems/ssm/DeleteConfirm.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_misc_delete_confirm.png', '#spacewalk-content')
});

// Systems: SSM: Misc Reboot
casper.thenOpen(url + '/rhn/systems/ssm/misc/RebootSystem.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_misc_reboot_system.png', '#spacewalk-content')
});

// Systems: SSM: Misc Migrate
casper.thenOpen(url + '/rhn/systems/ssm/MigrateSystems.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_misc_migrate_systems.png', '#spacewalk-content')
});

// Systems: SSM: Misc Lock/Unlock
casper.thenOpen(url + '/rhn/systems/ssm/misc/LockUnlockSystem.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_misc_lock_unlock.png', '#spacewalk-content')
});

// Systems: SSM: Task Log
casper.thenOpen(url + '/rhn/ssm/ViewAllLog.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_task_log.png', '#spacewalk-content')
});

// Systems: SSM: Task Log
casper.thenOpen(url + '/rhn/ssm/ViewLog.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_in_progress_log.png', '#spacewalk-content')
});

// Systems: SSM: Task Log
casper.thenOpen(url + '/rhn/ssm/ViewCompletedLog.do', function() {
    this.captureSelector('images/systems/system-set-manager/systems_ssm_completed_log.png', '#spacewalk-content')
});