module.exports = app => {

    //SingUp
    app.post('/client/singup', app.api.client.save)
    app.post('/driver/singup', app.api.driver.save)

    //Login
    app.post('/client/singin', app.api.auth.clientSignin)
    app.post('/driver/singin', app.api.auth.driverSignin)

    //SysAdmin
    app.route('/sysadmin/car')
       .post(app.api.sysAdmin.saveCar)
       .get(app.api.sysAdmin.getCars)
    app.delete('/sysadmin/car/:id', app.api.sysAdmin.removeCar)
    
    app.route('/sysadmin/driver')
       .post(app.api.sysAdmin.saveDriver)
       .get(app.api.sysAdmin.getDrivers)
   
    app.delete('/sysadmin/driver/:id', app.api.sysAdmin.removeDriver)
    
    //#region travel

    //#region Client
    app.route('/travel')
        .all(app.config.passport.authenticate())
        .get(app.api.travel.getTravels)
        .post(app.api.travel.save)

    app.route('/travel/:id')
        .all(app.config.passport.authenticate())
        .delete(app.api.travel.remove)


    //#endregion

    //#region Driver

    app.route('/driver/travel')
        .all(app.config.passport.authenticate())
        .get(app.api.travel.getTravelsForDriver)

    app.route('/driver/travel/setdriver/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.travel.setDriver)

    app.route('/driver/travelondriver')
        .all(app.config.passport.authenticate())
        .get(app.api.travel.getTravelOnDriver)

    app.route('/driver/travel/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.travel.doneTravel)

    //#endregion

    //#endregion

};