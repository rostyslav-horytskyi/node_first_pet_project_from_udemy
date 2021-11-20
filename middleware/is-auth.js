module.exports = (req, res, next) => {
  if (!req.session.isLoggedId) {
    return res.redirect('/login');
  }

  next();
};
