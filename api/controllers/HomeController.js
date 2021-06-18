module.exports = () => {
    const controller = {};

    controller.getPrincipalContent = (req, resp) => { 
        resp.send('Generate token using nodejs and Agora RTC');        
    };

    return controller;
}
