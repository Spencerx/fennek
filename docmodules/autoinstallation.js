/**
 * Created by jcayouette on 3/16/17.
 */

// Systems > Autoinstallation > Overview:
casper.thenOpen(url + '/rhn/kickstart/KickstartOverview.do', function() {
    this.captureSelector('images/systems/auto-installation/systems_kickstart_overview.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/kickstart/CreateProfileWizard.do', function() {
    this.captureSelector('images/systems/auto-installation/create_profile_wizard.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/kickstart/AdvancedModeCreate.do', function() {
    this.captureSelector('images/systems/auto-installation/advanced_mode_create.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/kickstart/Kickstarts.do', function() {
    this.captureSelector('images/systems/auto-installation/kickstarts.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/kickstart/KickstartIpRanges.do', function() {
    this.captureSelector('images/systems/auto-installation/kickstart_ip_ranges.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/keys/CryptoKeysList.do', function() {
    this.captureSelector('images/systems/auto-installation/crypto_keys_list.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/keys/CryptoKeyCreate.do', function() {
    this.captureSelector('images/systems/auto-installation/crypto_key_create.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/kickstart/ViewTrees.do', function() {
    this.captureSelector('images/systems/auto-installation/view_trees.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/kickstart/TreeCreate.do', function() {
    this.captureSelector('images/systems/auto-installation/tree_create.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/systems/provisioning/preservation/PreservationList.do', function() {
    this.captureSelector('images/systems/auto-installation/preservation_list.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/systems/provisioning/preservation/PreservationListCreate.do', function() {
    this.captureSelector('images/systems/auto-installation/preservation_list_create.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/kickstart/cobbler/CustomSnippetList.do', function() {
    this.captureSelector('images/systems/auto-installation/custom_snippet_list.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/kickstart/cobbler/DefaultSnippetList.do?', function() {
    this.captureSelector('images/systems/auto-installation/default_snippet_list.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/kickstart/cobbler/CobblerSnippetList.do?', function() {
    this.captureSelector('images/systems/auto-installation/cobbler_snippet_list.png', '#spacewalk-content')
});


casper.thenOpen(url + '/rhn/kickstart/cobbler/CobblerSnippetCreate.do', function() {
    this.captureSelector('images/systems/auto-installation/cobbler_snippet_create.png', '#spacewalk-content')
});