/**
 * Created by coyote on 3/16/17.
 */


// Systems: Stored Profiles
casper.thenOpen(url + '/rhn/profiles/List.do', function() {
    this.captureSelector('images/systems/stored-profiles/systems_stored_profiles.png','#spacewalk-content')});