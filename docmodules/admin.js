/**
 * Created by jcayouette on 3/16/17.
 */


// Admin: Proxy Settings
/*
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

*/
// Admin: SUSE Products
casper.thenOpen(url + '/rhn/admin/setup/SUSEProducts.do', function() {


    //wait 15 seconds to for SUSE Products list to load
    this.wait(30000, function () {

        //load page in sandbox context
        var str = this.evaluate(function () {
            var str = "";
            var keep = 20;
            //var productRows = document.getElementsByClassName("table-content")[0].getElementsByTagName("tr");
            //var productRows = document.querySelectorAll("tr");
            var productRows = document.querySelectorAll('tr');

            /*
            store number of rows found in a new value and use that variable in a second loop.
            after running first loop 20 rows run the second loop starting at the end with
            the condition that is maxlength -20 and decrement the counter i--
             */
            str += "Number of rows found" + '\n';
            str += productRows + '\n';
            str += productRows.length + '\n';

            for (var i = 0; i < productRows.length; i++) {
                if (i < keep) continue;
                productRows[i].remove();
                //remove(productRows[i]);
            }
          //  var maxLength = document.querySelectorAll('tr');
          //  for (var v = maxLength; v < maxLength - 20; v--){
           //     productRows[v].remove();
          //  }


            return str;
        });


        console.log(str);
        //console.log("Number of rows: " +rows );
        this.captureSelector('images/admin/admin_suse_products.png',
            '#spacewalk-content');
    });
});
//});

/*
// Admin: Mirror Credentials
casper.thenOpen(url + '/rhn/admin/multiorg/Organizations.do', function() {
    this.captureSelector('images/admin/admin_list_organizations.png',
        '#spacewalk-content')
});
    */