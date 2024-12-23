const ApiError = require("../error/apiError")
const { Excursion, Trip, Class } = require("../models/models")
const pdfTemplate = require('../documents/excpdf')
const pdf = require('html-pdf')
const path = require('path');
const fs = require('fs')

class ExcursionController {
    async create(req, res, next) {
        try {
            const { tripTripId, classClassId, date } = req.body
            if (!tripTripId)
                return next(ApiError.badRequest('No trip id'))
            if (!classClassId)
                return next(ApiError.badRequest('No class id'))
            const trip = await Trip.findOne({ where: { trip_id: tripTripId } })
            if (!trip)
                return next(ApiError.badRequest('Incorrect trip id'))
            const classx = await Class.findOne({ where: { class_id: classClassId } })
            if (!classx)
                return next(ApiError.badRequest('Incorrect class id'))
            const excursioncheck = await Excursion.findOne({ where: { classClassId: classClassId, tripTripId: tripTripId } })
            if (excursioncheck)
                return next(ApiError.badRequest('Excursion already exists'))

            const excursion = await Excursion.create({ tripTripId, classClassId, date })

            return res.json(excursion)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const { excursion_id } = req.params
            const excursion = await Excursion.findOne(
                { where: { excursion_id: excursion_id } },
            )
            if (!excursion)
                return next(ApiError.badRequest('Incorrect excursion id'))
            await Excursion.destroy(
                { where: { excursion_id: excursion_id } },
            )
            return res.json()
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let { trip_id, class_id, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let excursions
        if (!trip_id && !class_id) {
            excursions = await Excursion.findAndCountAll({ limit, offset })
        }
        if (trip_id && !class_id) {
            excursions = await Excursion.findAndCountAll({ where: { tripTripId: trip_id }, limit, offset })
        }
        if (!trip_id && class_id) {
            excursions = await Excursion.findAndCountAll({ where: { classClassId: class_id }, limit, offset })
        }
        if (trip_id && class_id) {
            excursions = await Excursion.findAndCountAll({ where: { classClassId: class_id, tripTripId: trip_id }, limit, offset })
        }
        return res.json(excursions)
    }

    async createPdf(req, res) {
        pdf.create(pdfTemplate(req.body), {}).toFile("excursion.pdf", (err) => {
            if (err) {
                return res.status(500).json({ message: "PDF creation failed" });
            }
            res.status(200).json({ message: "PDF created successfully" });
        });
    }

    async getPdf(req, res, next) {
        try {
            const filePath = path.resolve(__dirname, '../excursion.pdf');
            if (!fs.existsSync(filePath)) {
                throw new Error('PDF file not found');
            }
            res.sendFile(filePath);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new ExcursionController()