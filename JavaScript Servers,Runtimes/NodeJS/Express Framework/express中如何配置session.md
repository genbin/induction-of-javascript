 
 	var RedisStore = require('connect-redis')(express);
    var sessionStore = new RedisStore({client : redis});
    var expires = 60000 * settings.session.expires;
    express.session({
        store: sessionStore,
        cookie: {maxAge: expires},
        secret: settings.secretKey
    });
