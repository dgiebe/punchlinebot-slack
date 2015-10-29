var Slack = require('slack-client');
var token = 'xoxb-13469035328-KU5ynLQJ79R34QplPQ95ozoR'

var slack = new Slack(token, true, true);
var punchlines = [
  'Ich packe dich am Hoden / Und werfe dich zu Boden.',
  'Ich bin der Punchlinebot / du suckst meinen cock'
]

slack.on('open', function(){
  console.log('Welcome to Slack. You are ' + slack.self.name + ' of ' + slack.team.name);
});

slack.on('message', function(message){
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  if (message.text === 'bittespitte') {
      channel.send(punchlines[Math.floor(Math.random() * punchlines.length)]);
  }
});

slack.on('error', function(error){
  console.log('Error', error);
});

slack.login();
