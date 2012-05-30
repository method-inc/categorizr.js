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

### Methods

* `categorizr()`
  * @return {String} current deviceType. (getter)
* `categorizr(deviceType)`
  * @param {String} deviceType. Currently supports `tv`, `desktop`,
  `tablet` and `mobile`.
  * @return {String} current deviceType.
* `categorizr(actualDevice, categorizeAsDevice)`
  * @param {String} `actualDevice`. Target device you want to display as
  another.
  * @param {String} `categorizeAsDevice`. Device to display as.
  * @return {String} current deviceType.
  * Example. `categorize('tv', 'tablet')` -> will categorize all known
  smart-tv UA’s as a tablet device.
* `categorizr.is(deviceType)`
  * @param {String} `deviceType`. Currently supports `tv`, `desktop`,
  `tablet` and `mobile`.
  * @return {Bool} Returns boolean of current device matching argument
  you specify.
* `categorizr.test(ua)`
  * @param {String} `ua`. User-agent string to test.
  @return {String} Returns string of device type that it matches.

### Static Properties

* `categorizr.isTv` {Bool}
* `categorizr.isDesktop` {Bool}
* `categorizr.isTablet` {Bool}
* `categorizr.isMobile` {Bool}

## Ender Bridge

A minimal ender bridge is supported namespacing all of this inside the
`ender` namespace. Example `ender.categorizr('mobile')` -> Set current
instance to be mobile.

## Roadmap

* Event emiting on deviceType change. (v0.2.6 most likely)
* Integration with node.js and express. (v0.4)
* Provide extensibility API if community thinks that would be useful
* Research integration with Modernizr.
* Get Brett Jankord’s feedback on the project.

## Committing

Edit `src/*.js` files.
Run `make` in terminal.

You’ll need the devDependencies installed for smoosh (build tool) and buster (testing).

## User Agent String Testing

I know, I know. This is against “best practice” on the web, but really. Every company who wants to provide a targeted experience for a device does it. This is just making it easier for a front-end developer to integrate this into his development workflow.

Create a fork and add any UA’s that you wish to the appriate file (`test/ua-strings/*.js`) and send a pull request.

## API if using version 0.2.2 and below

`is(deviceType)` – deviceType &lt;string&gt; of tv|desktop|tablet|mobile. Returns true/false based on current device.

`isDesktop()` `isTablet()` `isTV()` `isMobile()` – sugar around the previous method.

`getType()` — returns current device type

`setType()` – sets current device type and updates html class.

`categorizeType(real, faked)` – Sets a device type as another. E.g. `categorizr.categorizeType('tv', 'desktop')` sets all tv devices to be desktop.

