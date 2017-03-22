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
    this.wait(100000, function ()
    {
        this.captureSelector('images/admin/admin_organization_credentials.png', '#spacewalk-content')
    });
});


// Admin: SUSE Products
casper.thenOpen(url + '/rhn/admin/setup/SUSEProducts.do', function() {
    //wait 1 second to pickup organization
    this.wait(50000, function ()
    {

        this.captureSelector('images/admin/admin_suse_products.png', '#spacewalk-content'),
        {
                top: 31,
                left: 3,
                width: 1280,
                height: 1024


        };
    });
});

// Admin: Mirror Credentials
casper.thenOpen(url + '/rhn/admin/multiorg/Organizations.do', function() {
    this.captureSelector('images/admin/admin_list_organizations.png',
        '#spacewalk-content')
});



