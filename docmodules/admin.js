/**
 * Created by jcayouette on 3/16/17.
 */


// Admin: Proxy Settings
casper.thenOpen(url + '/rhn/admin/setup/ProxySettings.do', function() {
    this.captureSelector('images/admin/admin_proxy_settings.png',
        '#spacewalk-content')
});


// Admin: Mirror Credentials
casper.thenOpen(url + '/rhn/admin/setup/MirrorCredentials.do', function() {
    //wait 1 second to pickup organization
    this.wait(1000, function ()
    {
        this.captureSelector('images/admin/admin_organization_credentials.png', '#spacewalk-content')
    });
});


// Admin: SUSE Products
casper.thenOpen(url + '/rhn/admin/setup/SUSEProducts.do', function() {
    //wait 15 seconds to for SUSE Products list to load
    this.wait(15000, function ()
    {
        var rows = this.evaluate(function () {
            return document.getElementsByClassName("table-content")
                [0].getElementsByTagName("tr").length;

        });

        console.log("Number of Rows: " + rows);
        this.captureSelector('images/admin/admin_suse_products.png', '#spacewalk-content', {


            //  top: 50,
            //  left: 221,
            //  width: 1050,
            //  height: 800

            });
    });
});


// Admin: Mirror Credentials
casper.thenOpen(url + '/rhn/admin/multiorg/Organizations.do', function() {
    this.captureSelector('images/admin/admin_list_organizations.png',
        '#spacewalk-content')
});



