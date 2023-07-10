import Manga from '../../models/Manga.js'
export default async(req,res,next)=>{
    try {
        let one = await Manga.create(req.body)// el objeto data deberia contener TODOS los datos necesarios para crear algo
            console.log(one)
        return res.status(200).json({
                success:true,
                response:one,
                message:'Manga created'
            })
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}