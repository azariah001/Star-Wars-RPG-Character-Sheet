let express = require('express');
let router = express.Router();


let character = require('../views/zeroki.json');

/*let fs = require('fs'),
    xml2js = require('xml2js');

let parser = new xml2js.Parser();
fs.readFile('views/Zeroki-Wookiee-Warrior.xml', function(err, data) {
  parser.parseString(data, function (err, result) {
    console.log('XML2JS');
    console.log(JSON.stringify(result, null, 4));
    console.log('Done');
  });
});



let util = require('util');
let xml4js = require('xml4js');

// Will automatically download and use any missing schemas
fs.readFile('views/Zeroki-Wookiee-Warrior.xml', function(err, xml) {

  xml4js.parseString(xml, {downloadSchemas: true}, function (err, result) {
    console.log('XML4JS');
    console.log(err);
    console.log(util.inspect(result, false, null));
  });

});*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', Character: character.Character, CharacterData: character });
});

module.exports = router;
