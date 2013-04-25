# Categorizr.js

Categorizr.js is a port of bjankord’s categorizr.php script. There is planned
support for use within node.js and express as well as with the browser.

We are loosely following the semver system for versioning. Odd number
releases will bring breaking API changes to existing code. They should
be fully stable in their own right. Even numbered releases will be
API-freeze and only bug-fixes.

0.3.x is the latest release as of June 14, 2012.

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

### deviceChange Event

With the Ender integration (see below), we now have a deviceChange event
triggered on the window object.

``` javascript
$(window).bind('deviceChange', function(device) {
  console.log(device.type)
})
```

Please note that this API will most likely change (and become more
flexible) in upcoming releases as we support additional libraries.

## 3rd Party Integration

### Ender

Ender is the only fully tested library supported currently. (jQuery,
Zepto, and prototype may or may not work currently. Support is coming.)

A minimal ender bridge is supported namespacing all of this inside the
`ender` namespace. Example `ender.categorizr('mobile')` -> Set current
instance to be mobile. This assumes a selector library and event library
included in your build.

Additionally, since `0.2.5` `ender.is` has been renamed to
`ender.isDeviceType` and `ender.test` has been renamed to
`ender.testUserAgent` to prevent clashes with other libraries. (thanks
@rvagg)

The entirety of the API shown above is also available namedspaced inside
of ender. E.g. `ender.categorizr('tablet')` will set the current
deviceType to 'tablet'.

* `ender.isDeviceType(deviceType)` @return {bool}
* `ender.testUserAgent(UAString)` @return {string} deviceType


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

## In the Wild

* http://selector.pryd.es/
* http://greylocku.com/


