const getDb = require('../util/database').getDb;

class Message  {
  constructor(text, date){
    this.text = text;
    this.date = date;
  }

  save() {
    const db = getDb();
    return db.collection('messages').insertOne(this);
  }
}
module.exports = Message;
