const mongodb = require("mongodb");
const getdb = require("../utils/database").getdb;

class Profile {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  save() {
    const db = getdb();
    // console.log(db);
    return db
      .collection('profiles')
      .insertOne(this)
      .then((result) => {
        // console.log(result);
      })
      .catch(err => {
          console.log(err);
      });
  }

  static fetchAll() {
    return getdb()
      .collection("profiles")
      .find()
      .toArray()
      .then((profiles) => {
        console.log(profiles);
        return profiles;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static fetchByName(profName) {
    return getdb()
      .collection("profiles")
      .find({ name: profName })
      .toArray()
      .then(profile => {
        return profile;
      })
      .catch(err => {
        console.log(err);
      });
  }
  static fetchByState(profState) {
    return getdb()
      .collection("profiles")
      .find({ location: profState })
      .toArray()
      .then(profiles => {
        return profiles;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Profile;
