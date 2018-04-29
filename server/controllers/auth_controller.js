module.exports = {
    findUser: (req, res) => {
        if (req.user) {
            res.status(200).send(req.user);
        }
        else {
            res.status(401).send('Nice try suckaaaaaa!!!!!!');
        }
    },
    logoutUser: (req, res) => {
        req.logOut();
        res.redirect('/');
    },
    createUser: (req, res) => {
        const db = req.app.get('db');
        db.users.update({ id: req.user.id }, req.body).then(user => {
            if (req.user.id === user[0].id) {
                res.status(200).send(user[0]);
            }
            else {
                res.status(401).send('Nice try suckaaaaaa!!!!!!');
            }
        });
    }
}
