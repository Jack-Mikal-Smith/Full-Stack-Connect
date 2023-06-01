const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userInfo = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userInfo.id;
            req.session.logged_in = true;
            res.status(200).json(userInfo);
        })
    } catch (err) {
        res.status(400).json(err);
    }
})

// login username and password setup
router.post('/login', async (req, res) => {
    try {
        // need to add email to it also so we can login with either username or password
        const userInfo = await User.findOne({ where: { userName: req.body.userName } });
        if  (!userInfo) {
            res
            .status(400)
            .json({ message: 'Sorry invalid Username or Password! Please try again' });
        }
        const password = await userInfo.checkpassword(req.body.password);
        if (!password) {
            res
            .status(400)
            .json({ message: 'Sorry invalid Username or Password! Please try again' }); 
        }
        req.session.save(() => {
            req.session.user_id = userInfo.id;
            req.session.logged_in = true;
            res.json({ user: userInfo, message: 'Thank you for logging in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// ends session and deastroys it
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router; 
