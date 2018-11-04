const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  //authenticate the user code
  app.get("/auth/google/callback", passport.authenticate("google"));
};
