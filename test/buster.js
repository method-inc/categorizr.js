var config = module.exports



// Functional tests
/*

config['browser.functional'] = {
  rootPath: '../'
, environment: 'browser'
, sources: [ 'categorizr.js' ]
, tests: [ 'test/browser.functional.js' ]
}

config['node.functional'] = {
  rootPath: '../'
, environment: 'node'
, sources: [ 'categorizr.js' ]
, tests: [ 'test/node.functional.js' ]
}



// Make sure this project is legit

config['node.user-agents'] = {
  rootPath: '../'
, environment: 'node'
, sources: [ 'categorizr.js' ]
, tests: [ 'test/node.user-agents.js' ]
}

*/


// External Library Integration

config['integration.ender'] = {
  rootPath: '../'
, environment: 'browser'
, sources: [ 'test/libs/ender.js' ]
, tests: [ 'test/integration.ender.js' ]
}

/*
config['integration.jquery'] = {
  rootPath: '../'
, environment: 'browser'
, sources: [ 'test/libs/jquery.js', 'categorizr.js' ]
, tests: [ 'test/integration.jquery.js' ]
}

config['integration.zepto'] = {
  rootPath: '../'
, environment: 'browser'
, sources: [ 'test/libs/zepto.js', 'categorizr.js' ]
, tests: [ 'test/integration.zepto.js' ]
}

config['integration.modernizr'] = {
  rootPath: '../'
, environment: 'browser'
, sources: [ 'test/libs/modernizr.js', 'categorizr.js' ]
, tests: [ 'test/integration.modernizr.js' ]
}
*/

