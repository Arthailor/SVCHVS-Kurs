const ApiError = require("../error/apiError")

class EventController{
    async create (req, res) {
        try {
            const { name, date } = req.body
            const event = await Event.create({ name, date })

            return res.json(event)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const { event_id } = req.params
            const event = await Event.findOne(
                { where: { event_id: event_id } },
            )
            if (!event)
                return next(ApiError.badRequest('Incorrect event id'))
            await Event.destroy(
                { where: { event_id: attendaevent_idnce_id } },
            )
            return res.json()
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getAll (req, res) {
        let { date, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let events
        if (!date) {
            events = await Event.findAndCountAll({ limit, offset })
        }
        if (date) {
            events = await Event.findAndCountAll({ where: { date: date }, limit, offset })
        }
        return res.json(events)
    }

    async getOne (req, res) {
        const { event_id } = req.params
        const event = await Event.findOne(
            { where: { event_id } },
        )
        return res.json(event)
    }
}

module.exports = new EventController()