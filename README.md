# bbre
Bootstrap-Backbone-RequireJS-Express Boilerplate

## Instructions

Download ZIP file or clone this repository.

cd to directory where the files are installed on your system.

**Note: This app uses npm to install node modules.  
[node] needs to be installed and working on your system.
**

We use [bower] to install all  client side libraries (backbone.js, require.js etc.)

### Install bower
    $ npm install -g bower (may need to run as root)
    
### Install node modules
    $ ls
    LICENSE  README.md  README.txt  v1  v2
    
    $ cd v2
    $ ls
    bower.json package.json  public  README.txt  server.js
    
    $ npm install (may need to run as root)
    $ bower install (shouldn't need to run as root)
    

### Start node web server
    $ node server
    my-contacts server listening on port 3000

### Launch app
To launch app, point your browser to localhost:3000


[Backbone.js]:http://backbonejs.org/
[node]:http://nodejs.org
[bower]:http://bower.io

