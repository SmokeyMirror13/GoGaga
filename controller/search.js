const Profile = require("../models/profile");

exports.getSearchPage = (req, res, next) => {
  res.render("search1", {
    pageTitle: "Search",
    path: "/search1",
    profiles: null
  });
};

exports.postSearchPage = (req, res, next) => {
  var profs;
  if (req.body.name !== '') {
    console.log("Name");
    const name = req.body.name;
    Profile.fetchByName(name)
      .then((result) => {
        res.render("search1", {
          pageTitle: "Search",
          path: "/search1",
          profiles: result
        });
        console.log(JSON.stringify(result))
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (req.body.location !== '') {
      console.log("Location");
    const location = req.body.location;
    Profile.fetchByState(location)
      .then((result) => {
        console.log(JSON.stringify(result));
        res.render("search1", {
          pageTitle: "Search",
          path: "/search1",
          profiles: result
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
