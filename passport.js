import passport from "passport";
import user from "./models/User";

passport.use(User.createStrategy());