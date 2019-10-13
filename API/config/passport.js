const { authSecret } = require('../.env')
const passport = require('passport')
const passportJwt =  require('passport-jwt')
const {Strategy, ExtractJwt } = passportJwt


module.exports = app =>{
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }
    //HACK: Achei um jeito de tratar melhor as validações de token
    const strategy = new Strategy(params, (payload, done)=>{
            
        app.db('client')
            .where({id: payload.id})
            .first()
            .then(user=>{
                if(user){
                    done(null, {id: user.id,
                                name: user.name,
                                doc: user.doc,
                                email: user.email,
                                phone: user.phone
                                })
                }else{
                    app.db('driver')
                        .where({id: payload.id})
                        .first()
                        .then(user=>{
                            if(user){
                            done(null, {id: user.id,
                                name: user.name,
                                doc: user.doc,
                                email: user.email,
                                phone: user.phone
                                })
                            }else{
                                done(null, false)
                            }
                        })
                }
            })
            .catch(err => done(err, false))
    })

    passport.use(strategy)

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', {session: false})
    }
}