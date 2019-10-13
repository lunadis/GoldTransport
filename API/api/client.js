const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {
        getHash(req.body.password, hash => {
            const password = hash
            //HACK: client and driver could be just one table
            app.db('client')
                .insert({
                    name: req.body.name,
                    doc: req.body.doc,
                    email:req.body.email,
                    phone: req.body.phone,
                    password
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).json(err))
                /*
                    Summary Element: err
                    Contains database response massage, we can use this for callback
                */
        })
    }

    return { save }

}