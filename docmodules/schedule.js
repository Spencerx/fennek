/**
 * Created by coyote on 3/16/17.
 */

// Schedule: Pending Actions
casper.thenOpen(url + '/rhn/schedule/PendingActions.do', function() {
    this.captureSelector('images/schedule/schedule_pending_actions.png',
        '#spacewalk-content')
});

// Schedule: Failed Actions
casper.thenOpen(url + '/rhn/schedule/FailedActions.do', function() {
    this.captureSelector('images/schedule/schedule_failed_actions.png',
        '#spacewalk-content')
});

// Schedule: Completed Actions
casper.thenOpen(url + '/rhn/schedule/CompletedActions.do', function() {
    this.captureSelector('images/schedule/schedule_completed_actions.png',
        '#spacewalk-content')
});

// Schedule: Archived Actions
casper.thenOpen(url + '/rhn/schedule/ArchivedActions.do', function() {
    this.captureSelector('images/schedule/schedule_archived_actions.png',
        '#spacewalk-content')
});

// Schedule: Action Chains
casper.thenOpen(url + '/rhn/schedule/ActionChains.do', function() {
    this.captureSelector('images/schedule/schedule_action_chains.png',
        '#spacewalk-content')
});







