// import Manga from "../../models/Manga.js";
// import Author from '../../models/Author.js';

// export default async (req,res,next) => {

//     try {
        
//         const user = req.user;
//         const author = await Author.findOne({ user_id: user._id });
//         const mangas = await Manga.find({ author_id: author._id });

//         if ( mangas.length < 4 ) {

//             return res.status(200).json(

//                 {
//                     success: true,
//                     response: {
//                         logo: 'URL del logo de minga',
//                     },
//                     message: 'Mangas found < 4',
//                 }

//               );

//         } else if ( mangas.length < 8 ) {

//             const all = [mangas[0], mangas[1], mangas[mangas.length - 2], mangas[mangas.length - 1]];

//             return res.status(200).json(

//                 {
//                     success: true,
//                     response: {
//                         all,
//                     },
//                     message: 'Mangas found < 8',
//                 }

//             );

//         } else if ( mangas.length >= 8 ) {

//             const neww = [mangas[0], mangas[1], mangas[2], mangas[3]];
//             const old = [mangas[mangas.length - 1], mangas[mangas.length - 2],  mangas[mangas.length - 3], mangas[mangas.length - 4]];	

//             return res.status(200).json(

//                 {
//                     success: true,
//                     response: {
//                         neww,
//                         old,
//                     },
//                     message: 'Mangas found > 8',
//                 }

//             );

//         } else{
//             return res.status(404).json(
            
//                 {
//                     success: false,
//                     response: null,
//                     messages: ['Mangas not found']
//                 }
    
//             )            
//         }

//     } catch (error) {
//         next(error)
//     }

// }

import Manga from '../../models/Manga.js'

export default async(req,res,next)=> {
    try {
        let query = {}
        let count = 0
        req.author && (query.author_id=req.author._id)
        req.company && (query.company_id=req.company._id)
        count = await Manga.countDocuments(query)
        if (count<4) {
            return res.status(200).json({
                success: true,
                response: {
                    logo:  '/public/logo.png'
                }
            })
        } else if (count<8) {
            let news = await Manga.find(query,'title cover_photo createdAt').sort({ createdAt:1 }).limit(2)
            let olds = await Manga.find(query,'title cover_photo createdAt').sort({ createdAt:-1 }).limit(2)
            return res.status(200).json({
                success: true,
                response: { all: [...news,...olds] }
            })
        } else {
            let news = await Manga.find(query,'title cover_photo createdAt').sort({ createdAt:1 }).limit(4)
            let olds = await Manga.find(query,'title cover_photo createdAt').sort({ createdAt:-1 }).limit(4)
            return res.status(200).json({
                success: true,
                response: { news,olds }
            })
        }
    } catch (error) {
        next(error)
    }
}
