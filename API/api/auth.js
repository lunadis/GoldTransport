const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    //HACK: unificar as autenticacoes 
    const clientSignin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('dados incompletos')
        }

        const client = await app.db('client')
            .where({
                email: req.body.email
            })
            .first()


        if (client) {
            bcrypt.compare(req.body.password, client.password, (err, isMatch) => {
                if (err || !isMatch) {
                    return res.status(401).send()
                }

                const payload = { id: client.id }

                res.json({
                    name: client.name,
                    doc: client.doc,
                    email: client.email,
                    phone: client.phone,
                    token: jwt.encode(payload, authSecret)
                })

            })
        } else {
            res.status(400).send("Houve um problema com login")
        }
    }

    const driverSignin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('dados incompletos')
        }

        const client = await app.db('driver')
            .wher({
                email: req.body.email
            })
            .first()


        if (client) {
            bcrypt.compare(req.body.password, client.password, (err, isMatch) => {
                if (err || !isMatch) {
                    return res.status(401).send()
                }

                const payload = { id: client.id }

                res.json({
                    name: client.name,
                    doc: client.doc,
                    email: client.email,
                    phone: client.phone,
                    token: jwt.encode(payload, authSecret)
                })

            })
        } else {
            res.status(400).send("Houve um problema com login")
        }
    }


    return { clientSignin, driverSignin }
}