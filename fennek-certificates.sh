#!/usr/bin/env bash

# Run this script as sudo user to install SUSE Manager certificates. Replace $HOSTNAME with your SUMA hostname
# These certificates are required for accessing components during images processing
#wget http://$HOSTNAME/pub/RHN-ORG-TRUSTED-SSL-CERT -O /etc/pki/trust/anchors/$HOSTNAME.cert
#wget http://$HOSTNAME/pub/RHN-ORG-PRIVATE-SSL-KEY -O /usr/share/pki/trust/anchors/$HOSTNAME.pem

wget http://doctest-suma3pg.tf.local/pub/RHN-ORG-TRUSTED-SSL-CERT -O /etc/pki/trust/anchors/doctest-suma3pg.tf.local.cert
wget http://doctest-suma3pg.tf.local/pub/RHN-ORG-PRIVATE-SSL-KEY -O /usr/share/pki/trust/anchors/doctest-suma3pg.tf.local.pem
update-ca-certificates
