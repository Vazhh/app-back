import Company from '../../models/Company.js'
export default async(req,res,next)=>{
    try {
        let one = await Company.create(req.body)// el objeto data deberia contener TODOS los datos necesarios para crear algo
       
            return res.status(200).json({
                success:true,
                response:one,
                message:'created'
            })
        
    } catch (error) {
        next(error)
    }
}