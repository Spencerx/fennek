/**
 * Created by jcayouette on 3/16/17.
 */


// Configuration: Overview
casper.thenOpen(url + '/rhn/configuration/Overview.do', function() {
    this.captureSelector('images/configuration/configuration_overview.png',
        '#spacewalk-content')
});

// Configuration:
casper.thenOpen(url + '/rhn/configuration/GlobalConfigChannelList.do', function() {
    this.captureSelector('images/configuration/configuration_central_managed_config_channels.png',
        '#spacewalk-content')
});

// Configuration: Overview
casper.thenOpen(url + '/rhn/configuration/ChannelCreate.do?editing=true', function() {
    this.captureSelector('images/configuration/configuration_central_managed_config_files.png',
        '#spacewalk-content')
});

// Configuration: Overview
casper.thenOpen(url + '/rhn/configuration/file/GlobalConfigFileList.do', function() {
    this.captureSelector('images/configuration/configuration_locally_managed_config_files.png',
        '#spacewalk-content')
});

// Configuration: Overview
casper.thenOpen(url + '/rhn/configuration/file/LocalConfigFileList.do', function() {
    this.captureSelector('images/configuration/configuration.png',
        '#spacewalk-content')
});

// Configuration: Overview
casper.thenOpen(url + '/rhn/configuration/system/ManagedSystems.do', function() {
    this.captureSelector('images/configuration/systems/configuration_systems_managed_systems.png',
        '#spacewalk-content')
});

// Configuration: Overview
casper.thenOpen(url + '/rhn/configuration/system/TargetSystems.do', function() {
    this.captureSelector('images/configuration/systems/configuration_systems_target_systems.png',
        '#spacewalk-content')
});

