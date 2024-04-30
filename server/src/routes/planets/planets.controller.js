const {GetAllPlanets} = require('../../models/planets.model');

function httpGetAllPlanets(req, res) {
    res.status(200).json(GetAllPlanets());
}

module.exports = {
    httpGetAllPlanets,
}