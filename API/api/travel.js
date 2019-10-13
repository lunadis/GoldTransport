const moment = require('moment')


module.exports = app => {

    //#region SectionClient
    const getTravels = (req, res) => {
        const date = req.body.date ? req.query.date : moment().endOf('day').toDate()

        app.db('travel')
            .where({ idClient: req.user.id })
            .where('dateOc', '<=', date)
            .orderBy('dateOc')
            .then(travels => res.json(travels))
            .catch(err => res.status(500).json(err))
    }

    const save = (req, res) => {

        req.body.idClient = req.user.id

        app.db('travel')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const remove = (req, res) => {
        app.db('travel')
            .where({ id: req.params.id, idClient: req.user.id })
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(204).send()
                } else {
                    const msg = `não foi possivel excluir a viagem`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).send(err))
    }
    //#endregion

    //#region SectionDriver
    const setDriver = (req, res) => {
        req.body.idDrive = req.user.id

        app.db('travel')
            .where({ id: req.params.id })
            .whereNull('idDrive')
            .update({
                idDrive: req.user.id
            })
            .then(rowsUpdated => {
                if (rowsUpdated > 0) {
                    res.status(204).send()
                } else {
                    res.status(400).send("Não foi possivel aceitar a corrida")
                }

            })
            .catch(err => {
                res.status(500).send(err)
            })
    }

    const getTravelsForDriver = (req, res) => {
        const date = req.body.date ? req.query.date
            : moment().endOf('day').toDate()


        app.db('travel')
            .where('dateOc', '<=', date)
            .whereNull('idDrive')
            .whereNull('dateEnd')
            .then(travels => res.json(travels))
            .catch(err => res.status(500).json(err))
    }

    const getTravelOnDriver = (req, res) => {
        const date = req.body.date ? req.query.date : moment().endOf('day').toDate()

        app.db('travel')
            .where({ idDrive: req.user.id })
            .where('dateOc', '<=', date)
            .orderBy('dateOc')
            .then(travels => res.json(travels))
            .catch(err => res.status(500).json(err))
    }

    const doneTravel = (req, res) => {
        const dateDone = moment().format();

        app.db('travel')
            .where({ id: req.params.id })
            .where({ idDrive: req.user.id })
            .update({
                dateEnd: dateDone
            })
            .then(rowsUpdated => {
                if (rowsUpdated > 0) {
                    res.status(204).send()
                } else {
                    res.status(400).send("Não foi possivel aceitar a corrida")
                }

            })
            .catch(err => {
                res.status(500).send(err)
            })
    }
    //#endregion
    
    return {
        getTravels,
        save,
        remove,
        setDriver,
        getTravelsForDriver,
        getTravelOnDriver,
        doneTravel
    }

}