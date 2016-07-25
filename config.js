var config = {
    port: 3000,
    secret: 'copycat',
    redisUrl: 'redis://localhost',
    routes: {
        login: '/login',
        logout: 'logout'
    }
};

module.exports = config;