/**
 * Created by jcayouette on 3/16/17.
 */

// Salt Onboarding
casper.thenOpen(url + '/rhn/manager/minions', function() {
    this.captureSelector('images/salt/onboarding.png', '#spacewalk-content')
});

// Salt Remote Commands
casper.thenOpen(url + '/rhn/manager/minions/cmd', function() {
    //wait 1 second to pickup preview button
    this.wait(1000, function ()
    {
        this.captureSelector('images/salt/remote_commands.png', '#spacewalk-content')
    });
});

// Salt Bootstrapping
casper.thenOpen(url + '/rhn/manager/minions/bootstrap', function() {
    this.captureSelector('images/salt/bootstrapping.png', '#spacewalk-content')
});

// Salt State Catalog
casper.thenOpen(url + '/rhn/manager/state-catalog', function() {
    this.captureSelector('images/salt/state_catalog.png', '#spacewalk-content')
});