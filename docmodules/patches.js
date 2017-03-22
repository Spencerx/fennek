/**
 * Created by coyote on 3/16/17.
 */

// Patches: Relevant Patches
casper.thenOpen(url + '/rhn/errata/RelevantErrata.do', function() {
    this.captureSelector('images/patches/patches_relevant_patches.png',
        '#spacewalk-content')
});

// Patches: All Patches
casper.thenOpen(url + '/rhn/errata/AllErrata.do', function() {
    this.captureSelector('images/patches/patches_all_patches.png',
        '#spacewalk-content')
});

// Patches: Relevant Bug Patches
casper.thenOpen(url + '/rhn/errata/RelevantBugErrata.do?', function() {
    this.captureSelector('images/patches/patches_relevant_bug__patches.png',
        '#spacewalk-content')
});

// Patches: Relevant Enhancement Patches
casper.thenOpen(url + '/rhn/errata/RelevantEnhancementErrata.do?', function() {
    this.captureSelector('images/patches/patches_relevant_enhancement_patches.png',
        '#spacewalk-content')
});

// Patches: Security Patches
casper.thenOpen(url + '/rhn/errata/RelevantSecurityErrata.do?', function() {
    this.captureSelector('images/patches/patches_security_patches.png',
        '#spacewalk-content')
});

// Patches: All Bug Patches
casper.thenOpen(url + '/rhn/errata/AllBugErrata.do?', function() {
    this.captureSelector('images/patches/patches_all_bug_patches.png',
        '#spacewalk-content')
});

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

