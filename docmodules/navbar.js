/**
 * Created by coyote on 4/13/17.
 */

casper.thenOpen(url + '/rhn/YourRhn.do', function() {
    this.captureSelector('images/navbar/topnav.png',
        '.navbar-pf')
});

casper.thenOpen(url + '/rhn/YourRhn.do', function() {
    this.captureSelector('images/navbar/sidenav.png',
        '.collapsed')
});

casper.thenOpen(url + '/rhn/YourRhn.do', function() {
    this.click('.search');
    this.waitForText('Search');
    this.captureSelector('images/navbar/top_search_bar.png',
        'form1')
});