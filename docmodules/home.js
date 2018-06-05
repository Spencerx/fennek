/**
 * Created by coyote on 3/16/17.
 */

//Home > Overview and Included Panes
casper.thenOpen(url + '/rhn/YourRhn.do').waitForText("View All Recently Registered Systems", function() {
    this.capture('images/home/overview/home_overview.png')
});


//Home > Overview Tasks Pane
casper.thenOpen(url + '/rhn/YourRhn.do').waitForText("View All Recently Registered Systems", function() {
    this.captureSelector('images/home/overview/home_overview_tasks_pane.png', '#tasks-pane')
});


//Home > Overview Inactive Systems Pane
casper.thenOpen(url + '/rhn/YourRhn.do').waitForText("View All Recently Registered Systems", function() {
    this.captureSelector('images/home/overview/home_overview_inactive_systems_pane.png', '#inactive-systems-pane')
});


//Home > Overview Critical Systems Pane
casper.thenOpen(url + '/rhn/YourRhn.do').waitForText("View All Recently Registered Systems", function() {
    this.captureSelector('images/home/overview/home_overview_critical_systems_pane.png', '#critical-systems-pane')
});


//Home > Overview Pending/Recently Scheduled Actions Pane
casper.thenOpen(url + '/rhn/YourRhn.do').waitForText("View All Recently Registered Systems", function() {
    this.captureSelector('images/home/overview/home_overview_pending_actions_pane.png', '#pending-actions-pane')
});


//Home > Overview Latest Patches/Errata Pane
casper.thenOpen(url + '/rhn/YourRhn.do').waitForText("View All Recently Registered Systems", function() {
    this.captureSelector('images/home/overview/home_overview_latest_errata_pane.png', '#latest-errata-pane')
});

//Home > Overview System Group Pane
casper.thenOpen(url + '/rhn/YourRhn.do').waitForText("View All Recently Registered Systems", function() {
    this.captureSelector('images/home/overview/home_overview_system_groups_pane.png', '#systems-groups-pane')
});


//Home > Overview Recently Registered Systems Pane
casper.thenOpen(url + '/rhn/YourRhn.do').waitForText("View All Recently Registered Systems", function() {
    this.captureSelector('images/home/overview/home_overview_recently_registered_pane.png', '#recently-registered-pane')
});


// Home > User Account > Details
casper.thenOpen(url + '/rhn/account/UserDetails.do', function() {

    this.captureSelector('images/home/user-account/home_user_account_user_details.png', '#spacewalk-content')
});


// Home > User Account > Addresses
casper.thenOpen(url + '/rhn/account/Addresses.do', function() {
    this.captureSelector('images/home/user-account/home_user_account_addresses.png', '#spacewalk-content')
});


// Home > User Account > Edit Address
casper.thenOpen(url + '/rhn/account/EditAddress.do?type=M&uid=1', function() {
    this.captureSelector('images/home/user-account/home_user_account_edit_address.png', '#spacewalk-content')
});

// Home: User Account: Change Email
casper.thenOpen(url + '/rhn/account/ChangeEmail.do', function () {
    this.captureSelector('images/home/user-account/home_user_account_change_email.png', '#spacewalk-content')
});


// Home: User Account: Account Deactivation
casper.thenOpen(url + '/rhn/account/AccountDeactivation.do', function () {
    this.captureSelector('images/home/user-account/home_user_account_account_deactivation.png', '#spacewalk-content')
});


// Home: Your Preferences ###
casper.thenOpen(url + '/rhn/account/UserPreferences.do', function () {
    this.captureSelector('images/home/home_your_preferences.png', '#spacewalk-content')
});


// Home: Locale Preferences ###
casper.thenOpen(url + '/rhn/account/LocalePreferences.do', function () {
    this.captureSelector('images/home/home_locale_preferences.png', '#spacewalk-content')
});


// Home: Organization: Configuration
casper.thenOpen(url + '/rhn/multiorg/OrgConfigDetails.do', function () {
    this.captureSelector('images/home/your-organization/home_your_organization_configuration.png','#spacewalk-content')
});


// Home: Your Organization: Organization Trusts
casper.thenOpen(url + '/rhn/multiorg/Organizations.do', function () {
    this.captureSelector('images/home/your-organization/home_your_organization_trusts.png','#spacewalk-content')
});


// Home: Your Organization: Custom States
casper.thenOpen(url + '/rhn/manager/yourorg/custom', function() {
    this.captureSelector('images/home/your-organization/home_your_organization_custom_states.png', '#spacewalk-content')
});

