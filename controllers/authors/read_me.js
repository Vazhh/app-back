
import Author from '../../models/Author.js';

export default async (req, res, next) => {
  try {

    const user = req.user; // CAPTURO DATOS DE USUARIO
    let all = await Author.findOne({ user_id: user._id }, 'photo name country city -_id'); // CAPTURO DATOS DE AUTHOR

    return res.status(200).json({
      success: true,
      response: { 
        all, 
        profile: user 
      },
      message: 'Author found'
    });

  } catch (error) {
    next(error);
  }
};