# AngularMaterialFileupload (Custom Libarary)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

# Custom Libarary Project commands

## Create Application:

`ng new angular-material-fileupload --no-create-application`

## Generate Library

`ng generate library angular-material-fileupload`

## Build from Root Project Application

`ng build`

## Link repo in development

`cd dist\angular-material-fileupload && npm link && cd ../..`

## Continuous Development: Run from root project application

`ng build angular-material-fileupload --watch`

# Link to use library in other project

## From root project application

`npm link angular-material-fileupload`

## preserveSymlinks configuration

angular.json:: architect => build => options => `preserveSymlinks: true`

# REFERENCES

https://github.com/nishantmc/angular-material-fileupload#readme
https://nishantmc.github.io/angular-material-fileupload.github.io/components/MatFileUploadQueueComponent.html#source
https://medium.com/@prajramesh93/create-your-angular-library-f2cf273fd8a5
