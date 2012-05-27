# Categorizr.js

Categorizr.js is a port of bjankord’s categorizr.php script. There is planned
support for use within node.js and express as well as with the browser.

## Demo

Check out a demo at [skookum.github.com/categorizr.js](http://skookum.github.com/categorizr.js)

## Usage

Currently categorizr has a standard ender.js implementation for usage within
an ender build (has not been published to npm, yet) or drop in with your current
library scripts.

It works by adding a class to the html element of your current device.

Add categorizr.js or categorizr.min.js to your library build or add to
your ender build with `ender add categorizr`.

## API

* `categorizr()`
  * @return {String} current deviceType. (getter)
* `categorizr(deviceType)`
  * @param {String} deviceType. Currently supports `tv`, `desktop`,
  `tablet`, and `mobile`.
  * @return {String} current deviceType.
* `categorizr(actualDevice, categorizeAsDevice)`
  * @param {String} `actualDevice`. Target device you want to display as
  another.
  * @param {String} `categorizeAsDevice`. Device to display as.
  * @return {String} current deviceType.
  * Example. `categorize('tv', 'tablet')` -> will categorize all known
  smart-tv UA’s as a tablet device.

## API if using version 0.2.2 and below

`is(deviceType)` – deviceType &lt;string&gt; of tv|desktop|tablet|mobile. Returns true/false based on current device.

`isDesktop()` `isTablet()` `isTV()` `isMobile()` – sugar around the previous method.

`getType()` — returns current device type

`setType()` – sets current device type and updates html class.

`categorizeType(real, faked)` – Sets a device type as another. E.g. `categorizr.categorizeType('tv', 'desktop')` sets all tv devices to be desktop.

## Roadmap

* Get Brett Jankord’s feedback on the project.
* Functional tests and community feedback.
* UA and device testing.
* Research integration with Modernizr.
* Integration with node.js and express.

## Committing

Edit `src/*.js` files.
Run `make` in terminal.

You’ll need the devDependencies installed for [smoosh.


