const boom = require('boom')

const genericCrud = (model) => ({
    async get({params: {id}}, res) {
        try {
            const item = await model.findById(id)//vernet 1
            return res.status(200).send(item)
        } catch (err) {
            return res.status(400).send(boom.boomify(err))
        }
    },
    async getAll(req, res) {
        try {
            const items = await model.find(id)//vernet vse producti iz schema
            return res.status(200).send(items)
        } catch (err) {
            return res.status(400).send(boom.boomify(err))
        }
    },
    async create({body}, res) { //title:Contrlo
        try {
            const item = new model(body)//bodi iz frontend
            const newItem = await item.save()//sohranit znacheniya
            return res.status(200).send(newItem)
        } catch (err) {
            return res.status(400).send(boom.boomify(err))
        }
    },
    async update({params: {id}, body}, res) {//title Control
        try {
            const item = await model.findByIdAndUpdate(id, body, {new: true})//update
            return res.status(200).send(item)
        } catch (err) {
            return res.status(400).send(boom.boomify(err))
        }
    },
    async delete({params: {id}}, res) {
        try {
            await model.findByIdAndDelete(id)
            return res.status(200).send({status: 'OK', message: 'Продукт удален'})
        } catch (err) {
            return res.status(400).send(boom.boomify(err))
        }
    },
})

module.exports = genericCrud