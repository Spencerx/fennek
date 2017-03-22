# fennek


## Introduction to fennek
Fennek aids in automatic reconnaissance, testing and preparation of images for SUSE Manager documentation. 
Fennek may be customized and ported with some footwork for use with any web based application. It recieved its name from the [Fennek](https://en.wikipedia.org/wiki/Fennek).     

Fennek utilizes [PhantomJS](http://phantomjs.org/) and [CapserJS](http://casperjs.org/) for reconnaissance.    

fennek provides the following features:
* Automatically follow URL's and capture entire pages or specific page elements (div, ids, class, scripts etc)   
* Fill forms with data during capture for use as documentation examples   
* Specify clipRect (crop sections of an element or page)
* Automates tracking of broken links, bugs and unexpected UIX issues   
* Installation of server certificates   
* Provides Application based file structure   
* Provides export script for DAPS/Docbook image processing   
* HTTPS/HTTP supported

Devel & Research:
* Run tests from a User perspective (Click buttons, follow links, and return results)   
* Diff reference images from a former run allowing for pass/fail checks 


## Overview
* Install server certificates with: ```./fennek-certificates.sh```
* Capture images with: ```./fennek-recon.js```
* Migrate images for use with DAPS: ```./fennek-docbook.js```


## Get It!
* **Clone this repository:**  
```git clone https://github.com/openSUSE/fennek.git && cd fennek```


### Install Phantomjs and Node Package Manager (NPM)
PhantomJS is a headless WebKit scriptable with a JavaScript API. It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.  
* **Install phantomjs and nodejs:**  
```sudo zypper in phantomjs npm4```

### Install CasperJS with NPM
CasperJS: Navigation scripting & testing for PhantomJS and SlimerJS  
* **Install CasperJS**  
```sudo npm install casperjs```



## Install Server Certificates

* Open your **fennek-certificates.sh** script. For our use case the SUSE Manager WebUI certificates are required for accessing some components(websockets) during reconnaissance. This script must be run as the **sudo** user.

Replace **$HOSTNAME** with the SUSE Manager server hostname:

```
wget http://$HOSTNAME/pub/RHN-ORG-TRUSTED-SSL-CERT -O /etc/pki/trust/anchors/$HOSTNAME_NO_HTTPS.cert    
wget http://$HOSTNAME/pub/RHN-ORG-PRIVATE-SSL-KEY -O /usr/share/pki/trust/anchors/$HOSTNAME_NO_HTTPS.pem    
update-ca-certificates
    
    
SUMAFORM EXAMPLE:
wget http://doctesting-suma3pg.tf.local/pub/RHN-ORG-TRUSTED-SSL-CERT -O /etc/pki/trust/anchors/doctesting-suma3pg.tf.local.cert
wget http://doctesting-suma3pg.tf.local/pub/RHN-ORG-PRIVATE-SSL-KEY -O /usr/share/pki/trust/anchors/doctesting-suma3pg.tf.local.pem
update-ca-certificates
```

## Set Target Entry URL

* Open **fennek.js** and replace the **url** variable with the URL of your test server.   
This url provides an entry point for all links CasperJS/PhantomJS will follow and capture.   

For example:    

```
 // Enter your SUSE Manager Test Server URL    
 var url = 'https://doctesting-suma3pg.tf.local';    
``` 

## Begin Reconnaissance

* Execute ```./fennek-recon.sh``` from CLI to begin reconnaissance.  

## Prepare Images for use with DAPS
* Transfer images from the default SUSE Manager based structure to a DAPS ready structure by executing: ```./fennek-docbook.sh``` this script moves all images to ```docbook/images/png/```

More coming...




