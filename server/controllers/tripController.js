const uuid = require('uuid')
const path = require('path')
const { Trip } = require('../models/models')
const ApiError = require('../error/apiError')
const fs = require('fs')

class TripController {
    async create(req, res, next) {
        try {
            const { town, point_of_interest, description } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const trip = await Trip.create({ town, point_of_interest, description, img: fileName })

            return res.json(trip)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const { trip_id } = req.params
            const trip = await Trip.findOne(
                { where: { trip_id: trip_id } },
            )
            await Trip.destroy(
                { where: { trip_id: trip_id } },
            )
            var file_path = path.resolve(__dirname, '..', 'static', trip.img)
            fs.unlink(file_path, function (err) {})
            return res.json()
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let { town, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let trips
        if (!town) {
            trips = await Trip.findAndCountAll({ limit, offset })
        }
        if (town) {
            trips = await Trip.findAndCountAll({ where: { town }, limit, offset })
        }
        return res.json(trips)
    }

    async getOne(req, res) {
        const { trip_id } = req.params
        const trip = await Trip.findOne(
            { where: { trip_id } },
        )
        return res.json(trip)
    }
}

module.exports = new TripController()