var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'dev mongo URI strin';
    process.env.PASSWORD_SALT = 'random string';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'test mongo URI string';
    process.env.PASSWORD_SALT = 'random string';
} else if (env === 'production') {
    //don't set the process.env.PORT;
    process.env.MONGODB_URI = 'production mongo URI string';
    process.env.PASSWORD_SALT = 'random long string';
}

process.env.twilio_aid = 'Twilio ID';
process.env.twilio_ait = 'Twilio Secret';

process.env.spoonacular_cred = "Spoonacular Credential";