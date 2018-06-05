/**
 * Created by jcayouette on 3/16/17.
 */

// Systems: Activation Keys
casper.thenOpen(url + '/rhn/activationkeys/List.do', function() {
    this.captureSelector('images/systems/systems_activation_keys.png', '#spacewalk-content')});

// Systems: Create Activation key
casper.thenOpen(url + '/rhn/activationkeys/Create.do', function() {
    this.captureSelector('images/systems/systems_create_activation_key.png', '#spacewalk-content')});

// Systems: Act Key Details
casper.thenOpen(url + '/rhn/activationkeys/Edit.do?tid=1', function() {
    this.captureSelector('images/systems/systems_activation_key_details.png', '#spacewalk-content')});

// Systems: Act Key Child Channels
casper.thenOpen(url + '/rhn/activationkeys/channels/ChildChannels.do?tid=1', function() {
    this.captureSelector('images/systems/systems_activation_key_child_channels.png', '#spacewalk-content')});

// Systems: Act Key Packages
casper.thenOpen(url + '/rhn/activationkeys/packages/Packages.do?tid=2', function() {
    this.captureSelector('images/systems/systems_activation_key_packages.png', '#spacewalk-content')});

// Systems: Act Key Configuration : List unsubscribe
casper.thenOpen(url + '/rhn/activationkeys/configuration/List.do?tid=1', function() {
    this.captureSelector('images/systems/systems_activation_key_config_list_unsubscribe.png', '#spacewalk-content')});

// Systems: Act Key Configuration : Subscribe to channels
casper.thenOpen(url + '/rhn/activationkeys/configuration/Subscribe.do?tid=1', function() {
    this.captureSelector('images/systems/systems_activation_key_config_subscribe.png', '#spacewalk-content')});

// Systems: Act Key Configuration : view/modify rankings
casper.thenOpen(url + '/rhn/activationkeys/configuration/Rank.do?tid=1', function() {
    this.captureSelector('images/systems/systems_activation_key_view_modify_ranks.png', '#spacewalk-content')});

// Systems: Act Key Groups
casper.thenOpen(url + '/rhn/activationkeys/groups/List.do?tid=1', function() {
    this.captureSelector('images/systems/systems_activation_key_list_groups.png', '#spacewalk-content')});

// Systems: Act Key Groups : Join
casper.thenOpen(url + '/rhn/activationkeys/groups/Add.do?tid=1', function() {
    this.captureSelector('images/systems/systems_activation_key_join_group.png', '#spacewalk-content')});

// Systems: Act Key Activated Systems
casper.thenOpen(url + '/rhn/activationkeys/systems/List.do?tid=1', function() {
    this.captureSelector('images/systems/systems_activation_key_list_activated.png', '#spacewalk-content')});