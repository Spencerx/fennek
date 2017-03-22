/**
 * Created by jcayouette on 3/16/17.
 */


// Systems: Advanced Search
casper.thenOpen(url + '/rhn/systems/Search.do', function() {
    this.captureSelector('images/systems/systems_advanced_search.png', '#spacewalk-content')
});
