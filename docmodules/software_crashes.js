/**
 * Created by coyote on 3/16/17.
 */

// Systems: Software Crashes
casper.thenOpen(url + '/rhn/systems/SoftwareCrashesOverview.do', function() {
    this.captureSelector('images/systems/systems_software_crashes.png', '#spacewalk-content')});