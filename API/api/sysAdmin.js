const moment = require('moment')

module.exports= app =>{
    const saveDriver = (req, res) =>{
        const date = moment().date()

        app.db('driver')
            .insert(req.body)
            .then(_=> res.status(204).send())
            .catch(err => res.status(400).json(err))
    }    

    const getDrivers = (req, res) =>{

        app.db('driver')
           .then(drivers => res.json(drivers))
           .catch(err => res.status(400).json(err))
    }

    const removeDriver = (req, res) =>{

        app.db('driver')
            .where({ id: req.params.id})
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(204).send()
                } else {
                    const msg = `não foi possivel excluir o motorista`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).send(err))
    }

    const saveCar = (req, res)=>{
        const date = moment().date()

        app.db('car')
            .insert(req.body)
            .then(_ => res.send(204).send())
            .catch(err => res.send(400).json(err))
    }

    const getCars = (req, res) =>{

        app.db('car')
           .then(cars => res.json(cars))
           .catch(err => res.status(400).json(err))
    }

    const removeCar = (req, res) =>{

        app.db('car')
            .where({ id: req.params.id})
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(204).send()
                } else {
                    const msg = `não foi possivel excluir o carro`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).send(err))
    }
    
    return{
        saveDriver,
        getDrivers,
        removeDriver,
        saveCar,
        getCars,
        removeCar
    }
}