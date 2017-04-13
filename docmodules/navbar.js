/**
 * Created by coyote on 4/13/17.
 */

casper.thenOpen(url + '/rhn/YourRhn.do', function() {
    //this.click("input-group-addon[data-date-format='m/d/yy']");
    this.captureSelector('images/navbar/topnav.png',
        '.navbar-pf')
});