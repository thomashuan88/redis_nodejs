exports.notFound = function notFound(req, res, next) {
    res.status(404).send('You seem lost. You must have taken a wrong turn back there.');
};

