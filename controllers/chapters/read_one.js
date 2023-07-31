import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
  try {
    let id = req.params.id;
    console.log(id)
    let one = await Chapter.findById(id,"title cover_photo pages order -_id");
    const nextChapter = await Chapter.findOne({ _id: { $gt: id } });
    return res.status(200).json({
      success: true,
      next: nextChapter ? nextChapter._id : null,
      response: one,
      messages: ["Found"],
      
    });
  } catch (error) {
    next(error);
  }
};
