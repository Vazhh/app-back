import Manga from "../../models/Manga.js";

export default async (req, res, next) => {
  try {
    let consultas = {};
    let pagination = { page: 1, limit: 4 };
    if (req.query.page) {
      pagination.page = req.query.page;
    }
    if (req.query.title) {
      consultas.title = new RegExp(req.query.title, "i");
    }
    if (req.query.category_id) {
      consultas.category_id = req.query.category_id.split(",");
    }
    let skip =
      pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0;
    let limit = pagination.limit > 0 ? pagination.limit : 0;
    let all = await Manga.find(
      consultas,
      "title cover_photo category_id description"
    )
      .populate("category_id", "name")
      .skip(skip)
      .limit(limit)
      .sort({ title: 1 });
    if (all.length > 0) {
      let total = await Manga.countDocuments(consultas);
      //primero cuento la cantidad de documentos encontrados
      let pages = Math.ceil(total / pagination.limit);
      //luego calculo la cantidad de paginas que tiene el "libro"
      let prev_page = Number(pagination.page) === 1 ? null : Number(pagination.page) - 1;
      let next_page = Number(pagination.page) === pages ? null : Number(pagination.page) + 1;
      return res.status(200).json({
        response: all,
        message: "Mangas found!",
        prev:prev_page,
        next:next_page
      });
    } else {
      return res.status(404).json({
        response: null,
        message: "Mangas not found",
      });
    }
  } catch (error) {
    next(error);
  }
};