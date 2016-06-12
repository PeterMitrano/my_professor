var AlexaSkill = require("./AlexaSkill");
var APP_ID = 'amzn1.echo-sdk-ams.app.5e07c5c2-fba7-46f7-9c5e-2353cec8cb05';

var MyProfessor = function() {
  AlexaSkill.call(this, APP_ID);
};

MyProfessor.prototype =  Object.create(AlexaSkill.prototype);
MyProfessor.prototype.constructor = MyProfessor;

MyProfessor.prototype.eventHandlers.onSessionStarted = function(sessionStartedRequest, session) {
  console.log("on Sessiont Started. request id:" + sessionStartedRequest.requestId + " session id:" + session.sessionId);
};

exports.handler = function(event, context) {
  var skill = new MyProfessor();
  skill.execute(event, context);
};
