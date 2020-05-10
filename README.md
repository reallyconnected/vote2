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

### Example flow







