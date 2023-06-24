import Author from '../../models/Author.js'
export default async(req,res,next)=>{
    try {
        let one = await Author.create(req.body)// el objeto data deberia contener TODOS los datos necesarios para crear algo
       
            return res.status(200).json({
                success:true,
                response:one,
                message:'created'
            })
        
    } catch (error) {
        next(error)
    }
}