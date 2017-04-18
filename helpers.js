const sanitize = require('sanitize-html');
const parsePodcast = require('node-podcast-parser');
const request = require('request');

var secondstotime = (secs) => {
  var t = new Date(1970,0,1);
  t.setSeconds(secs);
  var s = t.toTimeString().substr(0,8);
  if(secs > 86399)
    s = Math.floor((t - Date.parse('1/1/70')) / 3600000) + s.substr(2);
  return s;
};

var feedSanitizer = (data) => {
  data.forEach((item) => {
    item.duration = secondstotime(item.duration);
    item.title = sanitize(item.title);
    item.description = sanitize(item.description);
  });
  return data;
};

var getFeed = (feedUrl) => {
  request(feedUrl, (err, response, data) => {
    if (err) {
      console.error('Network error', err);
      return;
    }
    parsePodcast(data, (err, data) => {
      if (err) {
        console.error('Parsing error', err);
        return;
      }
      data.episodes = feedSanitizer(data.episodes);
      console.log(data);
      return data;
    });
  });
};

module.exports = {
  feedSanitizer: feedSanitizer,
  getFeed: getFeed
};


