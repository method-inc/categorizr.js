# Categorizr.js

Categorizr.js is a port of bjankord’s categorizr.php script. There is planned
support for use within node.js and express as well as with the browser.

## Usage

Currently categorizr has a standard ender.js implementation for usage within
an ender build (has not been published to npm, yet) or drop in with your current
library scripts.

It works by adding a class to the html element of your current device.

## API

`is(deviceType)` – deviceType &lt;string&gt; of tv|desktop|tablet|mobile. Returns true/false based on current device.

`isDesktop()` `isTablet()` `isTV()` `isMobile()` – sugar around the previous method.

`getType()` — returns current device type

`setType()` – sets current device type and updates html class.

`categorizeType(real, faked)` – Sets a device type as another. E.g. `categorizr.categorizeType('tv', 'desktop')` sets all tv devices to be desktop.

## Roadmap

* Get Brett Jankford’s blessing on the port.
* Publish to npm for ender consumption
* Tests and community feedback
* Integration with Modernizr
* Integration with node.js and express

