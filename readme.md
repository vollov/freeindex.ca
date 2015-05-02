#Template to build a nodejs based static web site


A typical vollov nodejs web site product must meet following standard:

	* Use twitter bootstrap to edit the themes
	* Front end navigation using angularjs 
	* Back end using nodejs express js framework to support HTTP requests
   
# Overview

##How to use this project
	copy the whole directory into a new sit repository and edit file there
   
##Important file folder
	* theme is the folder to store static web page design
	* node folder is the folder to store node http server and running web page
   
##To install on Linux or windows
	1. install nodejs will install nodejs and npm
	2. cd node-template/node
	3. npm install

##To run the demo:
	1. cd node-template/node
	2. npm start
	
# Theme
##Useful chrome tools to debug theme
	1. Bootstrap Overlay
	2. Ruul. Screen ruler
	3. TypeDNA
	4. ColorZilla
		
# Nodejs
	1. all http requests are directed to index.html.
	2. index.html will load the angularjs in browser
	3. the web page routing are completed by angularjs in app.js  
