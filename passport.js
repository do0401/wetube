import passport from "passport";
import user from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(USer.deserializeUser());