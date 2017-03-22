/**
 * Created by coyote on 3/16/17.
 */

// Audit: Visualization: Virtualization Hierarchy
casper.thenOpen(url + '/rhn/manager/visualization/virtualization-hierarchy', function() {
    //wait 1 second to pickup preview button
    this.wait(1000, function ()
    {
        this.captureSelector('images/audit/visualization/audit_visualization_virtualization_hierarchy.png',
            '#spacewalk-content')
    });
});

// Audit: Visualization: Virtualization Proxy Hierarchy
casper.thenOpen(url + '/rhn/manager/visualization/proxy-hierarchy', function() {
    //wait 1 second to pickup preview button
    this.wait(1000, function ()
    {
        this.captureSelector('images/audit/visualization/audit_visualization_proxy_hierarchy.png',
            '#spacewalk-content')
    });
});