/**
 * Created by jcayouette on 3/16/17.
 */

// Audit: CVE Audit
casper.thenOpen(url + '/rhn/manager/audit/cve', function() {
    this.captureSelector('images/audit/audit_cve_audit.png',
        '#spacewalk-content')
});

// Audit: Subscription Matching
casper.thenOpen(url + '/rhn/manager/subscription-matching', function() {
    //wait 1 second to pickup preview button
    this.wait(1000, function ()
    {
        this.captureSelector('images/audit/audit_subscription_matching.png',
            '#spacewalk-content')
    });
});

// Audit: Subscription Matching gather-matcher-default
casper.thenOpen(url + '/rhn/admin/ScheduleDetail.do?schid=21', function() {
    //wait 1 second to pickup preview button
    this.wait(1000, function ()
    {
        this.captureSelector('images/audit/audit_subscription_matching_gatherer_matcher_default.png',
            '#spacewalk-content')
    });
});

// Audit: Subscription Matching Unmatched Products
casper.thenOpen(url + '/rhn/manager/subscription-matching#unmatched-products', function() {
    //wait 1 second to pickup preview button
    this.wait(1000, function ()
    {
        this.captureSelector('images/audit/audit_subscription_matching_unmatched_products.png',
            '#spacewalk-content')
    });
});

// Audit: Subscription Matching
casper.thenOpen(url + '/rhn/manager/subscription-matching#pins', function() {
    //wait 1 second to pickup preview button
    this.wait(1000, function ()
    {
        this.captureSelector('images/audit/audit_subscription_matching_pins.png',
            '#spacewalk-content')
    });
});

// Audit: Subscription Matching
casper.thenOpen(url + '/rhn/manager/subscription-matching#messages', function() {
    //wait 1 second to pickup preview button
    this.wait(1000, function ()
    {
        this.captureSelector('images/audit/audit_subscription_matching_messages.png',
            '#spacewalk-content')
    });
});

// Audit: OpenSCAP List Scans
casper.thenOpen(url + '/rhn/audit/ListXccdf.do', function() {
    this.captureSelector('images/audit/openscap/audit_openscap_list_scans.png',
        '#spacewalk-content')
});

// Audit: OpenSCAP List Scans
casper.thenOpen(url + '/rhn/systems/details/audit/ScheduleXccdf.do?sid=1000010004&', function() {
    this.captureSelector('images/audit/openscap/audit_openscap_schedule_scan.png',
        '#spacewalk-content')
});

// Audit: OpenSCAP Difference
casper.thenOpen(url + '/rhn/audit/scap/Diff.do', function() {
    this.captureSelector('images/audit/openscap/audit_openscap_difference.png',
        '#spacewalk-content')
});

// Audit: OpenSCAP Advanced Search
casper.thenOpen(url + '/rhn/audit/scap/Search.do', function() {
    this.captureSelector('images/audit/audit_openscap_advanced_search.png',
        '#spacewalk-content')
});