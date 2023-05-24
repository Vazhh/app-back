import Chapter from '../../models/Chapter.js'

export default async(req,res)=>{
    try {
        let all = await Chapter.find()
        return res.status(200).json({
            response:all,
            message:'Chapters found'
        })
        
    } catch (error) {
        return res.status(500).json({
            response:null,
            message:'error'
        })
    }
}