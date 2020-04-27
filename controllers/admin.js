const Message = require('../models/message');

exports.getMessages = (req, res, next) => {
  // const date = req.params.date;
  const date = req.query.from;
  Message.findFromDate(date)
  .then(result =>{
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  });
};

exports.postAddMessage = (req, res, next) => {
  const text = req.body.text;
  const message = new Message(text);
  message.save()
  .then(result =>{
    res.status(400).send('OK');
  })
  .catch(err => {
    console.log(err);
  });
};
