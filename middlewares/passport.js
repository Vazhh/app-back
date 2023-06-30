import User from "../models/User.js"
import passport from "passport"
import { Strategy,ExtractJwt } from "passport-jwt"

export default passport.use(   
    new Strategy(   //defino una nueva estrtategia de passport para autenticar con jwt
        {     //primer parametro objeto de opciones de extraccion
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),   //extraigo de los encabezamientos la autorizacion de tipo bearer con el token que me envia el ciente
            secretOrKey: process.env.SECRET //clave secreta encargada de tokenizar/destokenizar la contraseña guardada como una variable de entorno
        },		// si las configuraciones son correctas se extraen los datos tokenizados y se guardan en una variable que se llama jwt_payload		
        async (jwt_payload,done) => {  //done es un NEXT mas avanzado, porque me permite configurar el error en el primer parametro y los datos a continuar en el segundo parametro y me permite continuar como NEXT
            try {				
                let user = await User.findOne({_id:jwt_payload._id})
                delete user.password
                if (user) {		 //si encuentro el usuario a autenticar
                    return done(null, user)  // dejo pasar con error=null y los datos del usuario autenticado
                } else {
                    return done(null, false) //dejo pasar con error=null pero no envio los datos
                }
            } catch (error) {
                return done(error,false)
            }
        }
    )
)