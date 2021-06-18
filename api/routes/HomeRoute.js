module.exports = app => {
    const controller = require('../controllers/HomeController')();
 
    app.route('/').get(controller.getPrincipalContent);

}
