import Manga from '../../models/Manga.js'

export default async(req,res)=>{
    try {
        let all = await Manga.find()
        return res.status(200).json({
            response:all,
            message:'Mangas found'
        })
        
    } catch (error) {
        return res.status(500).json({
            response:null,
            message:'error'
        })
    }
}