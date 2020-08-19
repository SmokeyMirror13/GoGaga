const Profile = require('../models/profile');
const states = require('../utils/states.json');
exports.getAddProfiles = (req, res, next) => {
    res.render('admin/add-profile', {
      pageTitle: 'Add Profile',
      path: '/admin/add-profile',
      sts: states
    });
  };
  
  exports.postAddProfiles = (req, res, next) => {
    const name = req.body.name;
    const location = req.body.state;
    const profile = new Profile(name, location);
      profile
      .save()
      .then(result => {
        console.log(result);
        console.log('Created Profile');
        res.redirect('/admin/profiles');
      })
      .catch(err => {
        console.log(err);
      });
  };

  exports.getProfiles = (req, res, next) => {
    Profile.fetchAll()
      .then(profiles => {
        res.render('admin/profiles', {
          profiles: profiles,
          pageTitle: 'Admin Profiles',
          path: '/admin/profiles'
        });
      })
      .catch(err => console.log(err));
  };