import { Schema, model, Types} from 'mongoose'

let collection = 'chapters'
let schema = new Schema(
    {
        manga_id: {type:Types.ObjectId,ref:'mangas',reguired:true},
        title: {type:String,required:true},
        cover_photo: {type:String,required:true},
        pages: {type:String,required:true},
        order: {type:Number,required:true},
    },
    {
        timestamps:true
    })
let Chapter = model(collection, schema)

export default Chapter