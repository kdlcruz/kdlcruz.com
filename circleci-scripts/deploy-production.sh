#!/usr/bin/env bash

echo $gcloud_credentials > gcloud-key-file.json

npm install
npm run build:production

gcloud auth activate-service-account --key-file gcloud-key-file.json
gcloud config set project kdlcruz-183808

gcloud --quiet app deploy app.yaml --promote
