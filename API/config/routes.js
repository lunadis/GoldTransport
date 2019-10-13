module.exports = app =>{

    //Cadastro
    app.post('/client/singup', app.api.client.save)
    app.post('/driver/singup', app.api.driver.save)
    //Login
    app.post('/client/singin', app.api.auth.clientSignin)
    app.post('/driver/singin', app.api.auth.driverSignin)
    

   
};