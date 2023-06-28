export default async (req, res, next) => {
  if (req.author.active || req.company.active) {
    return next();
  }
  return res.status(400).json({
    success: false,
    response: null,
    message: "Author or Company not active",
  });
};
