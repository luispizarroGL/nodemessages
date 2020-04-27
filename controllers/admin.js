const Message = require('../models/message');

exports.postAddMessage = (req, res, next) => {
  const text = req.body.text;
  const date = req.body.date;
  const message = new Message(text,date);
  message.save()
  .then(result =>{
    res.status(400).send('OK');
  })
  .catch(err => {
    console.log(err);
  });
};
