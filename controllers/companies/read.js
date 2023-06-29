import Company from '../../models/Company.js'

export default async(req,res,next)=>{
    try {
        let all = await Company.find()
        if(all){
            return res.status(200).json({
                response: all,
                message: 'company found!'
            })
        }else{
            return res.status(400).json({
                response: null,
                message: 'company not found'
            })
        }
    } catch (error) {
        next(error)
    }
}