/**
 * Created by coyote on 3/16/17.
 */
/*
The following CapserJS functions are injected into the main screen generation script during runtime.
*/

// Systems: All
casper.thenOpen(url + "/rhn/systems/SystemList.do", function() {
    this.captureSelector("images/systems/systems_all.png", '#spacewalk-content')});

// Systems: Physical Systems
casper.thenOpen(url + '/rhn/systems/PhysicalList.do', function() {
    this.captureSelector('images/systems/systems/systems_physical_systems.png', '#spacewalk-content')});

// Systems: Virtual Systems
casper.thenOpen(url + '/rhn/systems/VirtualList.do', function() {
    this.captureSelector('images/systems/systems/systems_virtual_systems.png', '#spacewalk-content')
});

// Systems: Bare Metal Systems
casper.thenOpen(url + '/rhn/systems/BootstrapSystemList.do', function() {
    this.captureSelector('images/systems/systems/systems_bare_metal.png', '#spacewalk-content')
});

// Systems: Out of Date Systems
casper.thenOpen(url + '/rhn/systems/OutOfDate.do', function() {
    this.captureSelector('images/systems/systems/systems_outofdate.png', '#spacewalk-content')
});

// Systems: Requiring Reboot
casper.thenOpen(url + '/rhn/systems/RequiringReboot.do', function() {
    this.captureSelector('images/systems/systems/systems_requiringreboot.png', '#spacewalk-content')
});

// SYstems: Non Compliant
casper.thenOpen(url + '/rhn/systems/ExtraPackagesSystems.do', function() {
    this.captureSelector('images/systems/systems/systems_noncompliant.png', '#spacewalk-content')
});

// Systems: Without System Type
casper.thenOpen(url + '/rhn/systems/Unentitled.do', function() {
    this.captureSelector('images/systems/systems/systems_without_system_type.png', '#spacewalk-content')
});

// Systems: Ungrouped
casper.thenOpen(url + '/rhn/systems/Ungrouped.do', function() {
    this.captureSelector('images/systems/systems/systems_ungrouped.png', '#spacewalk-content')
});

// Systems: Inactive
casper.thenOpen(url + '/rhn/systems/Inactive.do', function() {
    this.captureSelector('images/systems/systems/systems_inactive.png', '#spacewalk-content')
});

// Systems: Recently Registered
casper.thenOpen(url + '/rhn/systems/Registered.do', function() {
    this.captureSelector('images/systems/systems/systems_recently_registered.png', '#spacewalk-content')
});

// Systems: Proxy
casper.thenOpen(url + '/rhn/systems/ProxyList.do', function() {
    this.captureSelector('images/systems/systems/systems_proxy.png', '#spacewalk-content')
});

// Systems: Duplicate Systems
casper.thenOpen(url + '/rhn/systems/DuplicateIPList.do', function() {
    this.captureSelector('images/systems/systems/systems_duplicate_systems.png', '#spacewalk-content')
});

// Systems: System Currency
casper.thenOpen(url + '/rhn/systems/SystemCurrency.do', function() {
    this.captureSelector('images/systems/systems/systems_currency_report.png', '#spacewalk-content')
});

// Systems: System Types
casper.thenOpen(url + '/rhn/systems/SystemEntitlements.do', function() {
    this.captureSelector('images/systems/systems/systems_system_types.png', '#spacewalk-content')
});






