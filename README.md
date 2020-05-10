# V.O.T.E 2 Development Notes
This project aims to democratise, flatten the pyramid, any organisation that wants it. From local clubs to government. 

For more information please see the living document: https://docs.google.com/document/d/1ICipqo3QkHiCs9aWmbYC6Hr4DTzCJcM8s1YNcL_AJQo/edit#heading=h.gjdgxs

## Technologies 
The following tech will be used:-

* TypeScript
* NodeJs
* Nodemon
* Firebase Auth
* Git for SCM.
* **this list will be updated**

The git repo can be found here: https://github.com/reallyconnected/vote2 

## Work-flow
Code written in TypeScript is compiled to javaScript via the command:

`tsc`

The magic behind this is the file `tsconfig.json` which denotes the source directory to build (`/src`)and the output directory for the javaScript (`./out`). 

The file also contains some global parameters that function as transpiler ( compiled to another language ) hints as the code is "compiled".

`nodemon` is used to start and monitor the running application for testing purposes. 

## Google App
Because we are using Google Firebase we need to have an app key to connect to their database and services. 

To that end you have to supply a file that will have a similar name to :

`vote2-auth-firebase-adminsdk-AAAAA-AAAAAAAAAAA.json`

This file should not be stored in your clone of this repo, but in a safe place. 

To enable usage of this file, at run time, please set the environment variable:

`export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/vote2-auth-firebase-adminsdk-AAAAA-AAAAAAAAAAA.json"`


#### A Note on Strict
Whilst I know nothing about TS/JS and TSC and node and nodemon, I'm going to leave the option "strict" off in the code. I understand that this is technical debt.

### Example flow

To install the required node packages, we'll use the Node Package Manager(npm). From the root, type the following:

`npm install`

With that done, we'll have the ability to run our compilation command:

`tsc`

This compiles the code in `./src` and puts the .js files into `./out`.

Our app is now in `./out.app.js`, so we can run it with 

`node out/app.js`







