
/*!
 * Module dependencies.
 */

exports.index = function (req, res) {
  res.render('dashboard/index', {
    title: 'ElpMe Server Dashboard'
  });
};
