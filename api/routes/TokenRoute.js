module.exports = app => {
    const controller = require('../controllers/TokenController')();
    
    const nocache = (req, resp, next) => {
        resp.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        resp.header('Expires', '-1');
        resp.header('Pragma', 'no-cache');
        next();
     };

    //api/v1/rtc/channel/:channelName/uid/:uid/role/:role
    //api/v1/access_token
    app.route('/api/v1/rtc_token').get(nocache, controller.generateAccessToken);

}

//http://localhost:8080/api/v1/rtc/eduardo/zzFZkzgQkLSLjO1wohpYgLcNmLf2/publisher
//http://localhost:8080/api/v1/rtc_token?channelName=eduardo&amp;uid=zzFZkzgQkLSLjO1wohpYgLcNmLf2&amp;role=publisher
