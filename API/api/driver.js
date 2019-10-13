module.exports = app => {
    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {
        getHash(req.body.password, hash => {
            const password = hash
            //HACK: poderia ser apenas uma table acom o banco sendo passado pela requisicao
            app.db('driver')
                .insert({
                    name: req.body.name,
                    doc: req.body.doc,
                    phone: req.body.email,
                    password
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    return { save }

}