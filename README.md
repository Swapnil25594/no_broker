# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* NoBroker website

Node version used : `v9.4.0`
npm version used :  `v3.10.8`

> Note : No broker API's doesnt allow cross origin requests (from localhost).

To disable chrome web security:

* either:
	```
	steps :-> Kill all chrome task
			       -> Chrome shortcut (right click) -> properties -> shortcut -> In Target , add ' --disable-web-security --user-data-dir' in the last -> apply
				   -> restart chrome

	```
* or:
	```
	mkdir ~/dev/temp-chrome-profile1
	open -na "Google Chrome" --args "--disable-web-security --user-data-dir=~/dev/temp-chrome-profile1"
	```
			   
### How do I get set up? ###


* first time run

	```
	npm install
	npm run build
	npm start
	```
* how to start

	```
	npm start
	```
