/**
 * Created by coyote on 3/16/17.
 */
// Systems: System Groups
casper.thenOpen(url + '/rhn/systems/SystemGroupList.do', function() {
    this.captureSelector('images/systems/systems_systemgroups.png', '#spacewalk-content')});