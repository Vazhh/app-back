import Manga from "../models/Manga.js";

export default async (req, res, next) => {
  try {
    const { manga_id } = req.body;
    const manga = await Manga.findOne({
      _id: manga_id,
    });
    const author_id = manga.author_id;
    if (author_id === req.author._id) {
      return next();
    }
    const company_id = manga.company_id;
    if (company_id === req.company._id) {
      return next();
    }
    return res.status(400).json({
      success: false,
      response: null,
      messages: ["not allow"]
    });
  } catch (error) {
    return next(error);
  }
};
