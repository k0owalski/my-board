const getAccessToken = (authHeader) => authHeader?.split(' ')[1];

module.exports = getAccessToken;
