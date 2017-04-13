/**
 * Created by coyote on 3/16/17.
 */
// Systems: System Groups
casper.thenOpen(url + '/rhn/systems/SystemGroupList.do', function() {
    this.captureSelector('images/systems/systems_systemgroups.png', '#spacewalk-content')});

// Systems: System Groups: Create System Group
casper.thenOpen(url + '/rhn/groups/EditGroup.do', function() {
    this.captureSelector('images/systems/systems_edit_group.png', '#spacewalk-content')});