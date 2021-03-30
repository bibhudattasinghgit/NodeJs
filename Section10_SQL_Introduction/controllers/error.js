exports.get404 = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page is Not available', path: '/404' });
};
