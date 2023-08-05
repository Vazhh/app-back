
import Author from '../../models/Author.js';

export default async (req, res, next) => {
  try {

    const profile = req.user; // CAPTURO DATOS DE USUARIO
    let all = await Author.findOne({ user_id: profile._id }, 'photo name country city -_id'); // CAPTURO DATOS DE AUTHOR
    return res.status(200).json({
      success: true,
      response: { 
        // all, 
        profile: all
      },
      message: 'Author found'
    });

  } catch (error) {
    next(error);
  }
};
