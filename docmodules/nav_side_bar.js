/**
 * Created by jcayouette on 3/20/17.
 */


casper.thenOpen(url + '/rhn/YourRhn.do').waitForText("View All Recently Registered Systems", function() {
    this.captureSelector('images/nav-sidebar/navbar-legend.png', '.sideleg')
});



