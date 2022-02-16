const path = require('path');

function getMessages(req, res) {
  const filePath = path.join(__dirname, '..', 'public', 'skimountain.jpg');
  res.sendFile(filePath);
  // res.send('<ul><li>Hello Albert!</li></ul>');
}

function postMessage(req, res) {
  console.log('updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
}