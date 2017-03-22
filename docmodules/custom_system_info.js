/**
 * Created by jcayouette on 3/16/17.
 */

// Systems: Custom System Info
casper.thenOpen(url + '/rhn/systems/customdata/CustomDataList.do', function() {
    this.captureSelector('images/systems/systems_custom_system_info.png', '#spacewalk-content')});