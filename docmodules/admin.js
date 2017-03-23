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
    this.wait(30000, function () {


        var str = this.evaluate(function () {
            var str = "";
            var keep = 8;
            var productRows = document.getElementsByClassName("table-content")[0].getElementsByTagName("tr");

            str+="test";
            str+=productRows;
            str+=productRows.length;

            for (var i = 0; i < productRows.length; i++) {
                if(i < keep) continue;
                productRows[i].remove();
                //remove(productRows[i]);
            }

            return str;
      });

        console.log(str);
        //console.log("Number of rows: " +rows );
        this.captureSelector('images/admin/admin_suse_products.png', '#spacewalk-content');
        }
    );
});

// Admin: Mirror Credentials
casper.thenOpen(url + '/rhn/admin/multiorg/Organizations.do', function() {
    this.captureSelector('images/admin/admin_list_organizations.png',
        '#spacewalk-content')
});