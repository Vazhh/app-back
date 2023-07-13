import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
  try {
    let id = req.params.id;
    console.log(id)
    let one = await Chapter.findById(id,"title cover_photo pages -_id");
    const nextChapter = await Chapter.findOne({ _id: { $gt: id } });
    const prevChapter = await Chapter.findOne({ _id: { $lt: id } });
    return res.status(200).json({
      success: true,
      prev: prevChapter ? prevChapter._id : null,
      next: nextChapter ? nextChapter._id : null,
      response: one,
      prev: prevChapter ? prevChapter._id : null,
      next: nextChapter ? nextChapter._id : null,
      messages: ["Found"],
      
    });
  } catch (error) {
    next(error);
  }
};
