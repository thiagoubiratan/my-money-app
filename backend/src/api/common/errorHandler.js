const _ = require('lodash');

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle;

    if (buddle.errors) {
        const errors = parseErrors(buddle.errors);
        res.status(500).json({ errors });
    } else {
        next();
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = [];
    _.forIn(nodeRestfulErrors, error => errors.push(error.message));
    return errors;
}