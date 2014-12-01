# bbre
Bootstrap-Backbone-RequireJS-Express Boilerplate

## Instructions

Download ZIP file or clone this repository.

cd to directory where repository was cloned or files were unzipped.

The following files should be present

    $ls
    LICENSE		bower.json	package.json	routes		views README.md	css		public		server.js

**Note: npm is used to install node modules.  
[node] needs to be installed and working on your system.
**

We use [bower] to install all  client side libraries (backbone.js, require.js etc.)

### Install bower (if not already installed)
    $ npm install -g bower (may need to run as root)
    
### Install server side modules
    $ npm install (may need to run as root)
    
### Install client side modules
    $ bower install (shouldn't need to run as root)
    
### Start node web server
    $ node server
    Express server listening on port 3000

### Launch app
To launch app, point your browser to localhost:3000

[Backbone.js]:http://backbonejs.org/
[node]:http://nodejs.org
[bower]:http://bower.io

