var staticServer = require('node-static')
  , server = new(staticServer.Server)(process.cwd())
  , compile = require('./compile.js')

//
// Create a node-static server instance to serve the './public' folder
//

function startServer () {
  require('http').createServer(function (req, res) {
    req.addListener('end', function (e) {
      //
      // Serve files!
      //
      server.serve(req, res, function (resp) {
        if (resp && (resp.status === 404)) { // If the file wasn't found

          server.serveFile('/index.html', 302, resp.headers, req, res);
        }
      });
    });
  }).listen(8080);

  console.log('server now listening on port: 8080')
}

/*
process.on("uncaughtException", function(err){
  console.warn("Exiting process due to uncaught exception!");
  console.warn(err.stack || err);
  process.exit();
  startServer()
});
*/

startServer()
