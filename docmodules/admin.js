/**
 * Created by jcayouette on 3/16/17.
 */


// Admin: Proxy Settings
casper.thenOpen(url + '/rhn/admin/setup/ProxySettings.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    //Wait 3 seconds
    this.wait(3000, function () {
        this.captureSelector('images/admin/admin_proxy_settings.png',
            '#spacewalk-content')
    });

});


// Admin: Organization Credentials
casper.thenOpen(url + '/rhn/admin/setup/MirrorCredentials.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    //wait 1 second to pickup organization
    this.waitForSelector('.text-success', function () {
        this.captureSelector('images/admin/admin_organization_credentials.png',
            '#spacewalk-content')
    },undefined, 200000);
});


// Admin: SUSE Products
// Care with this section, pain will follow.
casper.thenOpen(url + '/rhn/admin/setup/SUSEProducts.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    //wait 50 seconds to for SUSE Products list to load
    this.waitForSelector('.product-add-btn', function () {

        //load page in sandbox context
        var str = this.evaluate(function () {
            var str = "";
            var keep = 20;

            var productRows = document.querySelectorAll('tbody>tr');

            str += "Number of rows found" + '\n';
            str += productRows + '\n';
            str += productRows.length + '\n';

            for (var i = 0; i < productRows.length; i++) {
                if (i < keep) continue;
                productRows[i].remove();

            }
            return str;
        });

        console.log(str);
        this.captureSelector('images/admin/admin_suse_products.png',
            '#spacewalk-content');
    },undefined,50000);

});


// Admin > Organizations
casper.thenOpen(url + '/rhn/admin/multiorg/Organizations.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_list_organizations.png',
        '#spacewalk-content')
});

// Admin > Organizations > Create Organization
casper.thenOpen(url + '/rhn/admin/multiorg/OrgCreate.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_create_organizations.png',
        '#spacewalk-content')
});

// Admin > Users
casper.thenOpen(url + '/rhn/admin/multiorg/Users.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_list_users.png',
        '#spacewalk-content')
});


// Admin > SUSE Manager Configuration > General Configuration
casper.thenOpen(url + '/rhn/admin/config/GeneralConfig.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_general_configuration.png',
        '#spacewalk-content')
});

// Admin > SUSE Manager Configuration > Bootstrap
casper.thenOpen(url + '/rhn/admin/config/BootstrapConfig.do?', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_configuration_bootstrap.png',
        '#spacewalk-content')
});

// Admin > SUSE Manager Configuration > Organization
casper.thenOpen(url + '/rhn/admin/config/Orgs.do?', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_configuration_organization.png',
        '#spacewalk-content')
});

// Admin > SUSE Manager Configuration > Restart
casper.thenOpen(url + '/rhn/admin/config/Restart.do?', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_configuration_restart.png',
        '#spacewalk-content')
});

// Admin > SUSE Manager Configuration > Cobbler
casper.thenOpen(url + '/rhn/admin/config/Cobbler.do?', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_configuration_cobbler.png',
        '#spacewalk-content')
});

// Admin > SUSE Manager Configuration > Bare Metal Systems
casper.thenOpen(url + '/rhn/admin/config/BootstrapSystems.do?', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_configuration_bare_metal_systems.png',
        '#spacewalk-content')
});

// Admin > SUSE Manager Configuration > Restart
casper.thenOpen(url + '/pub/bootstrap', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_configuration_pub_bootstrap.png',
        '#spacewalk-content')
});

// Admin > ISS Configuration > Master
casper.thenOpen(url + '/rhn/admin/iss/Master.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_iss_configuration_master.png',
        '#spacewalk-content')
});

// Admin > ISS Configuration > Edit Master
casper.thenOpen(url + '/rhn/admin/iss/EditMaster.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_iss_configuration_edit_master.png',
        '#spacewalk-content')
});


// Admin > ISS Configuration > Slave
casper.thenOpen(url + '/rhn/admin/iss/Slave.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_iss_configuration_slave.png',
        '#spacewalk-content')
});


// Admin > ISS Configuration > Edit Slave
casper.thenOpen(url + '/rhn/admin/iss/EditSlave.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_iss_configuration_edit_slave.png',
        '#spacewalk-content')
});


// Admin > Task Schedules
casper.thenOpen(url + '/rhn/admin/SatSchedules.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_task_schedules.png',
        '#spacewalk-content')
});


// Admin > Task Schedules > Task Schedule Details
casper.thenOpen(url + '/rhn/admin/ScheduleDetail.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_task_schedule_details.png',
        '#spacewalk-content')
});


// Admin > Task Schedules > Task Engine Status: Last Execution Times
casper.thenOpen(url + '/rhn/admin/TaskStatus.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_task_status_last_execution.png',
        '#spacewalk-content')
});

// Admin > Task Schedules > Task Engine Status: Runtime Status
casper.thenOpen(url + '/rhn/manager/admin/runtime-status', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_task_status_runtime.png',
        '#spacewalk-content')
});


// Admin > Task Schedules > Tomcat Logs
casper.thenOpen(url + '/rhn/admin/Catalina.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/admin/admin_show_tomcat_logs.png',
        '#spacewalk-content')
});

