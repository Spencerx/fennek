/**
 * Created by coyote on 3/16/17.
 */

// Systems: Visualization: Virtualization Hierarchy
casper.thenOpen(url + '/rhn/manager/visualization/virtualization-hierarchy', function() {
    //wait 1 second to pickup preview button
    this.wait(5000, function ()
    {
        this.captureSelector('images/audit/visualization/audit_visualization_virtualization_hierarchy.png',
            '#spacewalk-content')
    });
});

// Systems: Visualization: Virtualization Proxy Hierarchy
casper.thenOpen(url + '/rhn/manager/visualization/proxy-hierarchy', function() {
    //wait 1 second to pickup preview button
    this.wait(5000, function ()
    {
        this.captureSelector('images/audit/visualization/audit_visualization_proxy_hierarchy.png',
            '#spacewalk-content')
    });
});

// Systems: Visualization: System Grouping
casper.thenOpen(url + '/rhn/manager/visualization/systems-with-managed-groups', function() {
    this.wait(50000, function ()
    {

        this.captureSelector('images/audit/visualization/audit_visualization_system_grouping.png',
            '#spacewalk-content')
    });
});
