//Imports.
const router = require('express').Router();
const { User, Meal } = require('../models');
const withAuth = require('../utils/auth');

/* Page routes. */

// User login route
router.get('/signin', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signinorsignup', { new_user: false });
});

// Direct user to signup page when clicking signup link
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signinorsignup', { new_user: true });
});

// Route for page to create a new blog post
router.get('/addmeal', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        res.render('addmeal', { loggedIn: true, stats });
    }
});

//Dashboard route.
router.get("/dashboard", withAuth, async (req, res) =>
{
    if (req.session.loggedIn){
        const userMeals = await Meal.findAll({
            where:
            {
                user_id: req.session.user_id
            }
        });

        res.render("dashboard", { meals, loggedIn: true, stats});
    }
});

//Redirect to dash board on any other hit.
router.get("*", (req, res) =>
{
    res.redirect("/dashboard");
});

//Export router.
module.exports = router;