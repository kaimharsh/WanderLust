const User = require("../models/user.js");

// SIGNUP FORM (GET)
module.exports.renderSignupForm = (req, res) => {
  return res.render("users/signup.ejs");
};

// SIGNUP (POST)
module.exports.signupForm = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);

    // req.login async callback
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);                         // ✅ error aaya to yahin se niklo
      }
      req.flash("success", "Welcome to Wanderlust!!");
      return res.redirect("/listings");           // ✅ single response
    });

  } catch (err) {
    req.flash("error", err.message);
    return res.redirect("/signup");               // ✅ sirf ek hi redirect
  }
};

// LOGIN FORM (GET)
module.exports.renderLoginForm = (req, res) => {
  return res.render("users/login.ejs");
};

// LOGIN (POST)
module.exports.login = (req, res) => {
  req.flash("success", "Welcome back to Wanderlust!");

  const redirectUrl = res.locals.redirectUrl || "/listings";
  return res.redirect(redirectUrl);               // ✅ ek hi response
};

// LOGOUT (GET)
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);                           // ✅ error pe bas next, aage kuch nahi
    }
    req.flash("success", "You are logged out!!");
    return res.redirect("/listings");             // ✅ success pe sirf redirect
  });
};