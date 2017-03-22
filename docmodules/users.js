/**
 * Created by coyote on 3/16/17.
 */

// Users: List Users
casper.thenOpen(url + '/rhn/users/ActiveList.do', function() {
    this.captureSelector('images/users/users_user_list.png',
        '#spacewalk-content')
});

// Users: Create User



casper.thenOpen(url + '/rhn/users/CreateUser.do', function() {

    //use sendKeys by default for filling forms. If there is javascript the dict method will not work.
    this.sendKeys("input[name='login']", 'Tuxmin');
    this.sendKeys("input[name='desiredpassword']", '5a11193a-0e31-11e7-93ae-92361f002671');
    this.sendKeys("input[name='desiredpasswordConfirm']", '5a11193a-0e31-11e7-93ae-92361f002671');
    this.sendKeys("input[name='firstNames']", 'Tux');
    this.sendKeys("input[name='lastName']", 'Penguin');
    this.sendKeys("input[name='email']", 'tux@suse.com');
    this.captureSelector('images/users/users_create_user.png',
            '#spacewalk-content')
});



// Users: List Deactivated Users
casper.thenOpen(url + '/rhn/users/DisabledList.do', function() {
    this.captureSelector('images/users/users_deactivated_user_list.png',
        '#spacewalk-content')
});

// Users: All Users
casper.thenOpen(url + '/rhn/users/UserList.do', function() {
    this.captureSelector('images/users/users_all_users.png',
        '#spacewalk-content')
});

// Users: System Group Config
casper.thenOpen(url + '/rhn/users/SystemGroupConfig.do', function() {
    this.captureSelector('images/users/users_system_group_config.png',
        '#spacewalk-content')
});

// Users: System Group Config External Auth
casper.thenOpen(url + '/rhn/users/ExtAuthSgMapping.do', function() {
    this.captureSelector('images/users/users_system_group_config_external_auth.png',
        '#spacewalk-content')
});

// Users: System Group Config Create External Group
casper.thenOpen(url + '/rhn/users/ExtAuthSgDetails.do', function() {
    this.captureSelector('images/users/users_system_group_config_create_external_group.png',
        '#spacewalk-content')
});



