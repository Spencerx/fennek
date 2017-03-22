/**
 * Created by jcayouette on 3/16/17.
 */

// Channels: All Channels
casper.thenOpen(url + '/rhn/software/channels/All.do', function() {
    this.captureSelector('images/channels/channels_all_channels.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/software/channels/Vendor.do', function() {
    this.captureSelector('images/channels/channels_vendor_channels.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/software/channels/Popular.do', function() {
    this.captureSelector('images/channels/channels_popular_channels.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/software/channels/Custom.do', function() {
    this.captureSelector('images/channels/channels_custom_channels.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/software/channels/Shared.do', function() {
    this.captureSelector('images/channels/channels_shared_channels.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/software/channels/Retired.do', function() {
    this.captureSelector('images/channels/channels_retired_channels.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/channels/software/Search.do', function() {
    this.captureSelector('images/channels/channels_search_channels.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/channels/manage/Manage.do', function() {
    this.captureSelector('images/channels/channels_manage_software__channels.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/channels/manage/Edit.do', function() {
    this.captureSelector('images/channels/channels_create_software_channels.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/channels/manage/Clone.do', function() {
    this.captureSelector('images/channels/channels_clone_channels.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/software/manage/packages/PackageList.do', function() {
    this.captureSelector('images/channels/channels_packages_list_channels.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/channels/manage/repos/RepoList.do', function() {
    this.captureSelector('images/channels/channels_manage_list_repositories.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/channels/manage/repos/RepoCreate.do', function() {
    this.captureSelector('images/channels/channels_manage_create_repository.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/channels/manage/DistChannelMap.do', function() {
    this.captureSelector('images/channels/channels_distribution_channel_mapping.png',
        '#spacewalk-content')
});

// Channels: All Channels
casper.thenOpen(url + '/rhn/channels/manage/DistChannelMapEdit.do', function() {
    this.captureSelector('images/channels/channels_create_distribution_channel_map.png',
        '#spacewalk-content')
});