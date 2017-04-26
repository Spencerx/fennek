/**
 * Created by coyote on 3/16/17.
 */
// Patches: Relevant Patches
// Care with this section, pain will follow.
casper.thenOpen(url + '/rhn/errata/RelevantErrata.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    //wait 50 seconds to for SUSE Patch list to load
    this.waitForText('SUSE-12-SP1-2016-1017', function () {

        //load page in sandbox context
        var str = this.evaluate(function () {
            var str = "";
            var keep = 10;

            var patchRows = document.querySelectorAll('tbody>tr');

            str += "Number of rows found" + '\n';
            str += patchRows + '\n';
            str += patchRows.length + '\n';

            for (var i = 0; i < patchRows.length; i++) {
                if (i < keep) continue;
                patchRows[i].remove();

            }
            return str;
        });
       //
        console.log(str);
        this.captureSelector('images/patches/patches_relevant_patches.png',
            '#spacewalk-content');
    },undefined,50000);

});

// Patches: All Patches
// Care with this section, pain will follow.
casper.thenOpen(url + '/rhn/errata/AllErrata.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    //wait 50 seconds to for SUSE Patch list to load
    this.waitForText('Download CSV', function () {

        //load page in sandbox context
        var str = this.evaluate(function () {
            var str = "";
            var keep = 10;

            var allPatchRows = document.querySelectorAll('tbody>tr');

            str += "Number of rows found" + '\n';
            str += allPatchRows + '\n';
            str += allPatchRows.length + '\n';

            for (var i = 0; i < allPatchRows.length; i++) {
                if (i < keep) continue;
                allPatchRows[i].remove();

            }
            return str;
        });
        //
        console.log(str);
        this.captureSelector('images/patches/patches_all_patches.png',
            '#spacewalk-content');
    },undefined,50000);

});


// Patches: Relevant Bug Patches
// Care with this section, pain will follow.
casper.thenOpen(url + '/rhn/errata/RelevantBugErrata.do?', function() {
    this.echo(this.getTitle(), 'INFO: ');
    //wait 50 seconds to for SUSE Patch list to load
    this.waitForText('Download CSV', function () {

        //load page in sandbox context
        var str = this.evaluate(function () {
            var str = "";
            var keep = 10;

            var relevantBugPatchRows = document.querySelectorAll('tbody>tr');

            str += "Number of rows found" + '\n';
            str += relevantBugPatchRows + '\n';
            str += relevantBugPatchRows.length + '\n';

            for (var i = 0; i < relevantBugPatchRows.length; i++) {
                if (i < keep) continue;
                relevantBugPatchRows[i].remove();

            }
            return str;
        });
        //
        console.log(str);
        this.captureSelector('images/patches/patches_relevant_bug__patches.png',
        '#spacewalk-content');
    },undefined,50000);

});

// Patches: Relevant Enhancement Patches
// Care with this section, pain will follow.
casper.thenOpen(url + '/rhn/errata/RelevantEnhancementErrata.do?', function() {
    this.echo(this.getTitle(), 'INFO: ');
    //wait 50 seconds to for SUSE Patch list to load
    this.waitForText('Download CSV', function () {

        //load page in sandbox context
        var str = this.evaluate(function () {
            var str = "";
            var keep = 10;

            var relevantBugPatchRows = document.querySelectorAll('tbody>tr');

            str += "Number of rows found" + '\n';
            str += relevantBugPatchRows + '\n';
            str += relevantBugPatchRows.length + '\n';

            for (var i = 0; i < relevantBugPatchRows.length; i++) {
                if (i < keep) continue;
                relevantBugPatchRows[i].remove();

            }
            return str;
        });

        console.log(str);
        this.captureSelector('images/patches/patches_relevant_enhancement_patches.png',
            '#spacewalk-content');
    },undefined,50000);

});

// Patches: Security Patches
// Care with this section, pain will follow.
casper.thenOpen(url + '/rhn/errata/RelevantSecurityErrata.do?', function() {
    this.echo(this.getTitle(), 'INFO: ');
    //wait 50 seconds to for SUSE Patch list to load
    this.waitForText('Download CSV', function () {

        //load page in sandbox context
        var str = this.evaluate(function () {
            var str = "";
            var keep = 5;

            var relevantSecPatchRows = document.querySelectorAll('tbody>tr');

            str += "Number of rows found" + '\n';
            str += relevantSecPatchRows + '\n';
            str += relevantSecPatchRows.length + '\n';

            for (var i = 0; i < relevantSecPatchRows.length; i++) {
                if (i < keep) continue;
                relevantSecPatchRows[i].remove();

            }
            return str;
        });

        console.log(str);
        this.captureSelector('images/patches/patches_security_patches.png',
        '#spacewalk-content');
    },undefined,50000);

});

// Patches: All Bug Patches
// Care with this section, pain will follow.
casper.thenOpen(url + '/rhn/errata/AllBugErrata.do?', function() {
    this.echo(this.getTitle(), 'INFO: ');
    //wait 50 seconds to for SUSE Patch list to load
    this.waitForText('Download CSV', function () {

        //load page in sandbox context
        var str = this.evaluate(function () {
            var str = "";
            var keep = 10;

            var relevantAllBugPatchRows = document.querySelectorAll('tbody>tr');

            str += "Number of rows found" + '\n';
            str += relevantAllBugPatchRows + '\n';
            str += relevantAllBugPatchRows.length + '\n';

            for (var i = 0; i < relevantAllBugPatchRows.length; i++) {
                if (i < keep) continue;
                relevantAllBugPatchRows[i].remove();

            }
            return str;
        });

        console.log(str);
        this.captureSelector('images/patches/patches_all_bug_patches.png',
            '#spacewalk-content');
    },undefined,50000);

});

// Patches: All Bug Patches
//casper.thenOpen(url + '/rhn/errata/AllBugErrata.do?', function() {
//    this.captureSelector('images/patches/patches_all_bug_patches.png',
//        '#spacewalk-content')
//});

/*
// Patches: All Security Patches
casper.thenOpen(url + '/rhn/errata/AllSecurityErrata.do?', function() {
    this.captureSelector('images/patches/patches_all_security_patches.png',
        '#spacewalk-content')
});

// Patches: Advanced Patch Search
casper.thenOpen(url + '/rhn/errata/Search.do', function() {
    this.captureSelector('images/patches/patches_advanced_search_patches.png',
        '#spacewalk-content')
});

// Patches: Published Patches
casper.thenOpen(url + '/rhn/errata/manage/PublishedErrata.do', function() {
    this.captureSelector('images/patches/patches_published_patches.png',
        '#spacewalk-content')
});

// Patches: Create a Patch
casper.thenOpen(url + '/rhn/errata/manage/Create.do', function() {
    this.captureSelector('images/patches/patches_create_patch.png',
        '#spacewalk-content')
});

// Patches: Unpublished Patches
casper.thenOpen(url + '/rhn/errata/manage/UnpublishedErrata.do', function() {
    this.captureSelector('images/patches/patches_unpublished_patches.png',
        '#spacewalk-content')
});

// Patches: Clone Patches
casper.thenOpen(url + '/rhn/errata/manage/CloneErrata.do', function() {
    this.captureSelector('images/patches/patches_clone_patches.png',
        '#spacewalk-content')
});
*/
