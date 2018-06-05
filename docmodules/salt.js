/**
 * Created by jcayouette on 3/16/17.
 */

// Salt Keys
casper.thenOpen(url + '/rhn/manager/systems/keys', function() {
    this.captureSelector('images/salt/onboarding.png', '#spacewalk-content')
});

// Salt Remote Commands
casper.thenOpen(url + '/rhn/manager/systems/cmd', function() {
    //wait 5 second to pickup preview button
    this.wait(5000, function ()
    {
        this.captureSelector('images/salt/remote_commands.png', '#spacewalk-content')
        this.wait(5000);
    });
});

// Salt Formula Catalog
casper.thenOpen(url + '/rhn/manager/formula-catalog', function() {
    this.captureSelector('images/salt/formula-catalog.png', '#spacewalk-content')
});
