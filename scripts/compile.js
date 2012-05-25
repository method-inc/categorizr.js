/*jshint node:true*/
/* @todo
 * - make configuration a bit more straightforward
 * - make sure quick saves don't break the read/write filing
 */

var stylus = require('stylus')
  //, nib = require('nib')
  , jade = require('jade')
  , fs = require('fs')
  , exec = require('child_process').exec
  , extname = require('path').extname
  , extensions = ['.js', '.styl', '.jade']

  , dir = process.cwd() + '/_assets/stylus/'
  , files = fs.readdirSync(dir)

  , writing = false
  , i = 0
  , interval = 100

  , _in = [ process.cwd() + '/_assets/stylus/style.styl' ]
  , _out = [ process.cwd() + '/_assets/css/style.css' ]

;(function () {
  var filepath = process.cwd() + '/index.jade'
    , stat = fs.statSync(filepath)
    , filepath2 = process.cwd() + '/_layout.jade'
    , stat2 = fs.statSync(filepath)

  function rerender(filename, curr, prev) {
    if (curr.mtime > prev.mtime) {
      console.log('  \033[36mchanged\033[0m \033[90m- %s\033[0m', filename);
      var contents = fs.readFileSync(filepath, 'utf8')
        , out = jade.compile(contents, {filename: filepath})()
      fs.writeFile('index.html', out, function (err) { if (err) throw err; console.log(' \033[36msaved\033[0m - ' + 'index.html') })
    }
  }

  if (!~extensions.indexOf(extname(filepath))) return;
  if (!stat.isDirectory()) {
    fs.watchFile(filepath, { interval: interval }, function(curr, prev) { rerender(filepath, curr, prev); } );
    fs.watchFile(filepath2, { interval: interval }, function(curr, prev) { rerender(filepath2, curr, prev); } );
  }
}());

files.forEach(function(file, type) {
  var filepath = dir + file
    , stat = fs.statSync(filepath)
  console.log('files.forEach', file, filepath)
  if (!~extensions.indexOf(extname(file))) return;
  if (!stat.isDirectory()) {
    fs.watchFile(filepath, { interval: interval }, function(curr, prev) {
      if (curr.mtime > prev.mtime) {
        console.log('  \033[36mchanged\033[0m \033[90m- %s\033[0m', file);
        compile()
      }
    })
  }
})

function compile() {
  // dont try to read/write files if already reading or writing to them
  if (writing) { writing = false; return console.log('Files already being written to'); }

  writing = true
  i++
  console.log('==  ' + i + ' ===============================================')
  _in.forEach(function (path, i) {
    var contents = fs.readFileSync(path, 'utf8')
    stylus(contents)
      .set('paths', [process.cwd() + '/_assets/stylus/'])
      .set('filename', _out[i])
      .set('compress', true)
      //.use(nib())
      .render(function(err, css) {
        if (err) throw err;
        console.log('\033[36mrendered\033[0m ' + path)
        fs.writeFile(_out[i], css, function (err) { if (err) throw err; console.log(' \033[36msaved\033[0m - ' + _out[i]); writing = false; })
      })
  })
}

compile()




