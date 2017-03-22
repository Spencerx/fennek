/**
 * Created by coyote on 3/16/17.
 */

// Images: List Images
casper.thenOpen(url + '/rhn/manager/cm/images', function() {
    this.captureSelector('images/images/images_list_images.png',
        '#spacewalk-content')
});

// Images: Build Image
casper.thenOpen(url + '/rhn/manager/cm/build', function() {
    this.captureSelector('images/images/images_image_build.png',
        '#spacewalk-content')
});

// Images: Image Profiles
casper.thenOpen(url + '/rhn/manager/cm/imageprofiles', function() {
    this.captureSelector('images/images/images_image_profiles.png',
        '#spacewalk-content')
});

// Images: Image Create Profile
casper.thenOpen(url + '/rhn/manager/cm/imageprofiles/create', function() {
    this.captureSelector('images/images/images_image_create_profile.png',
        '#spacewalk-content')
});


// Images: Image Stores
casper.thenOpen(url + '/rhn/manager/cm/imagestores', function() {
    this.captureSelector('images/images/images_image_stores.png',
        '#spacewalk-content')
});

// Images: Image Stores
casper.thenOpen(url + '/rhn/manager/cm/imageprofiles/create', function() {
    this.captureSelector('images/images/imeages_image_stores_create.png',
        '#spacewalk-content')
});




