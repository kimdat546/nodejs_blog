const newsRoute = require('./news');
const siteRoute = require('./site');
const siteController = require('../app/controllers/SiteController');

function routes(app) {
    app.use('/news', newsRoute);
                app.use('/', siteRoute);
}
module.exports =                          routes;
//"fdfsdffdfsdf"