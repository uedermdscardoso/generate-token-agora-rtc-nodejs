module.exports = () => {
    const controller = {};

    const express = require('express');
    const {RtcTokenBuilder, RtcRole} = require('agora-access-token');
    const PORT = 8080;
  
    const APP_ID = '9aaf1e1d746f488fb5bb0039a24f68c5';
    const APP_CERTIFICATE = '29f5e73fc31446abb114113c47d71a11';
  
    controller.generateAccessToken = (req, resp) => { 
        
        resp.header('Access-Control-Allow-Origin', '*');
        
        const channelName = req.query.channelName;
        
        if (!channelName) {
            return resp.status(500).json({ 'error': 'channel is required' });
        }

         // get uid 
        //let uid = req.query.uid;
        let uid = req.query.uid;
        if(!uid || uid == '') {
            uid = 0;
        }
        
        // get role
        let role = RtcRole.SUBSCRIBER;
        if (req.query.role == 'publisher') {
            role = RtcRole.PUBLISHER;
        }
        
        // get the expire time
        let expireTime = req.query.expireTime;
        if (!expireTime || expireTime == '') {
            expireTime = 3600;
        } else {
            expireTime = parseInt(expireTime, 10);
        }

        // calculate privilege expire time
        const currentTime = Math.floor(Date.now() / 1000);
        const privilegeExpireTime = currentTime + expireTime;

        const token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpireTime);
        
        return resp.json({ 'token': token });

    };

    return controller;
}
