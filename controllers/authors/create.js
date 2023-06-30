import Author from '../../models/Author.js'
export default async(req,res,next)=>{
    try {
        let data = req.body
        data.user_id = req.user._id
        let one = await Author.create(data)// el objeto data deberia contener TODOS los datos necesarios para crear algo
       
            return res.status(200).json({
                success:true,
                response:one,
                message:'created'
            })
        
    } catch (error) {
        next(error)
    }
}