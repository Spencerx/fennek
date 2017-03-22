/**
 * Created by jcayouette on 3/16/17.
 */

// Systems: Activation Keys
casper.thenOpen(url + '/rhn/activationkeys/List.do', function() {
    this.captureSelector('images/systems/systems_activation_keys.png', '#spacewalk-content')});

// Systems: Create Activation key
casper.thenOpen(url + '/rhn/activationkeys/Create.do', function() {
    this.captureSelector('images/systems/systems_create_activation_key.png', '#spacewalk-content')});