/**
 * Created by jcayouette on 3/16/17.
 */

var casper;
casper = require('casper').create({
    viewportSize: {
        width: 1280,
        height: 1024
    },
    exitOnError: false,
    verbose: true,
    js_errors: false,
    debug: false,
    javascriptEnabled: true,
    //loadImages: true,
    //loadPlugins: true,
    //localToRemoteUrlAccessEnabled: true,
    userAgent: 'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36',
    //XSSAuditingEnabled: false,
    logLevel: 'debug'
});

// Add the modules path
casper.libraryPath = '/docmodules';
//casper.options.waitTimeout = 50000;


// Enter your SUSE Manager Test Server URL
var url = 'https://doctesting-suma3pg.tf.local';


// Login to SUSE Manager
casper.start(url, function() {
    console.log("page loaded");
    casper.waitForSelector("input[id='username-field']", function() {
        console.log("********");
        this.sendKeys("input[id='username-field']", 'admin');
        this.sendKeys("input[id='password-field']", 'admin');
        this.click("input[id='login']");
        console.log("********");
    });
});


casper.thenEvaluate(function(){
    console.log("Page Title " + document.title);
    console.log("Your name is " + document.querySelector('.headerTinymanName').textContent );
    console.log("******** GOING TO LOAD MINION RMT PAGE");
});


//SUSE Manager Menu Modules
/* Import SUSE Manager Menu Modules: To speed up dev simply comment out modules you do not wish to load.
 Be careful when using injectJS as it will overwrite variables which use the same name injected from other modules.
 In general if you stick with the current format and keep functions and variables simple you will not run into bugs

 The following will not load when running ./run-casper.sh
 EXAMPLE: //phantom.injectJs('docmodules/activation_keys.js');
*/

/*
* Generated image naming conventions should match that of the folder they are generated in.
* For example:
*
* systems > systems > physical systems in the webui should match an image named:
*
* systems_systems_physical_systems.png
*
* This naming scheme prevents overwriting of other images.
* TODO: Add logic ensuring we do not overwrite an image or increment by number
*
**/
phantom.injectJs('docmodules/admin.js');
/*
phantom.injectJs('docmodules/nav_side_bar.js');
phantom.injectJs('docmodules/home.js');
phantom.injectJs('docmodules/systems.js');
phantom.injectJs('docmodules/system_groups.js');
phantom.injectJs('docmodules/system_set_manager.js');
phantom.injectJs('docmodules/advanced_search.js');
phantom.injectJs('docmodules/activation_keys.js');
phantom.injectJs('docmodules/stored_profiles.js');
phantom.injectJs('docmodules/custom_system_info.js');
phantom.injectJs('docmodules/autoinstallation.js');
phantom.injectJs('docmodules/software_crashes.js');
phantom.injectJs('docmodules/virtual_host_manager.js');
phantom.injectJs('docmodules/salt.js');
phantom.injectJs('docmodules/images.js');
phantom.injectJs('docmodules/patches.js');
phantom.injectJs('docmodules/channels.js');
phantom.injectJs('docmodules/audit.js');
phantom.injectJs('docmodules/visualization.js');
phantom.injectJs('docmodules/configuration.js');
phantom.injectJs('docmodules/schedule.js');
phantom.injectJs('docmodules/users.js');

phantom.injectJs('docmodules/help.js');
*/
// SUSE Manager Test Setup Modules for generated javascript components

phantom.injectJs('docmodules/system_details_salt.js');
phantom.injectJs('docmodules/system_details_traditional.js');


casper.run();