
/**
 * Kangis App
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

  var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('rootDir',__dirname)
app.set('view engine', 'jade');

// Request Body Json 형태로 읽을 수 있는 라이브러리
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// routes
require('module-alias/register');
var message = require('@route/message')(app)

app.use('/message',message);

var winston = require('winston');
const logConfig = {
levels:{
emerg:0,  
alert:1,
crit:2,
error:3,
warning:4,
notice:5,
info:6,
debug:7	
}
,colors:{
emerg:'red',  
alert:'red',
crit:'red',
error:'yellow',
warning:'yellow',
notice:'yellow',
info:'blue',
debug:'blue'
}}

var logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  // 아래에서 설명할 여러개의 transport를 추가할 수 있다.
  transports: [
      // Console transport 추가
	  
      new (winston.transports.Console)({

        format : winston.format.combine(
          winston.format.colorize(),
          winston.format.timestamp(),
          winston.format.align()
        )

      }),
     
      // File transport 추가
     /*new (winston.transports.File)({
         // filename property 지정
         filename: 'somefile.log'
     })*/
  ]
});

var server = http.createServer(app).listen(app.get('port'), function(){
  logger.info('Express server listening on port ' + app.get('port'));
});


// mongoDB
var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function(){
 logger.info("Connected to mongod server");
});

mongoose.connect('mongodb://heroku_7rzgg5js:kjn2hj0mimru1q4uoq392jvr3e@ds143932.mlab.com:43932/heroku_7rzgg5js',{ useNewUrlParser: true });
