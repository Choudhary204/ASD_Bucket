const { clearCache } = require("./cacheMiddleware");

function invalidateCache(req, res, next) {
    const originalJson = res.json.bind(res);

    res.json = (data) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
            clearCache();
        }

        return originalJson(data);
    };

    next();
}

module.exports = invalidateCache;