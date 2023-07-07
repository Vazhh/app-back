export default async (req, res, next) => {
  console.log(req.author)
  if (req.author?.active || req.company?.active) {
    return next();
  }
  return res.status(400).json({
    success: false,
    response: null,
    messages: ["Author or Company not active"],
  });
};
