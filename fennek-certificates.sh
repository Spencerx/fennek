#!/usr/bin/env bash

# Run this script as sudo user to install SUSE Manager certificates. Replace $HOSTNAME with your SUMA hostname
# These certificates are required for accessing components during images processing
#wget http://$HOSTNAME/pub/RHN-ORG-TRUSTED-SSL-CERT -O /etc/pki/trust/anchors/$HOSTNAME.cert
#wget http://$HOSTNAME/pub/RHN-ORG-PRIVATE-SSL-KEY -O /usr/share/pki/trust/anchors/$HOSTNAME.pem

wget http://fennek-runner-srv.tf.local/pub/RHN-ORG-TRUSTED-SSL-CERT -O /etc/pki/trust/anchors/fennek-runner-srv.tf.local.cert
wget http://fennek-runner-srv.tf.local/pub/RHN-ORG-PRIVATE-SSL-KEY -O /usr/share/pki/trust/anchors/fennek-runner-srv.tf.local.pem
update-ca-certificates
