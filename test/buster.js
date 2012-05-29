var config = module.exports

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
