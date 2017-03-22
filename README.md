# fennek


## Introduction to fennek
Fennek aids in automatic reconnaissance, testing and preparation of images for SUSE Manager documentation. 
It may be customized and ported with a little footwork for use with any web based application.    

fennek can perform the following operations:
* Automatically follow URL's and capture entire pages or specific elements (div, ids, class, scripts)
* Fill forms and capture them for use as examples
* Specify clipRect (crop sections of an element or page) with PhantomJS/CasperJS
* Diff reference images with each run allowing for pass/fail checks (In Devel/research)
* Automates tracking of broken links, bugs and unexpected UIX issues

## Overview
* Install server certificates with: ```./fennek-certificates.sh```
* Capture images with: ```./fennek-recon.js```
* Migrate images for use with DAPS: ```./fennek-docbook.js```


## Mission Briefing
* **Clone this repository:**  
```git clone https://github.com/openSUSE/fennek.git```

* **Change working dir:**  
```cd fennek```


### Install Phantomjs and Node Package Manager (NPM)
PhantomJS is a headless WebKit scriptable with a JavaScript API. It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.  
* **Install phantomjs and nodejs:**  
```sudo zypper in phantomjs npm4```

### Install CasperJS with NPM
CasperJS: Navigation scripting & testing for PhantomJS and SlimerJS  
* **Install CasperJS**  
```sudo npm install casperjs```



## Install Server Certificates

* Open your **fennek-cerfticates.sh** script. For our use case the SUSE Manager WebUI certificates are required for accessing 
components(websockets) during images processing. This script must be run as the **sudo** user.

Replace **$HOSTNAME** with your SUSE Manager servers hostname:

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

## Start the Mission

* Execute ```./fennek-recon.sh``` from CLI to begin reconnaissance.  

## Prepare Images for use with DAPS
* Transfer images from the default SUSE Manager based structure to a DAPS ready structure by executing: ```./fennek-docbook.sh``` this scrit moves all images to ```docbook/images/png/```

More coming...

## Additional Resources  
* http://phantomjs.org/   
* http://casperjs.org/   



