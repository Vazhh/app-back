import Category from '../../models/Category.js'

export default async(req,res,next)=>{
    try {
        let all = await Category.find()
        return res.status(200).json({
            response:all,
            success:true
        })
        
    } catch (error) {
        next(error)
    }
}