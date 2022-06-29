const boom = require('boom')

const genericCrud = (model) => ({
    async get({params: {id}}) {
        try {
            const item = await model.findById(id)//vernet 1
            return item
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async getAll() {
        try {
            const item = await model.find(id)//vernet vse producti iz schema
            return item
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async create({body}) { //title:Contrlo
        try {
            const item = new model(body)//bodi iz frontend
            const newItem = await item.save()//sohranit znacheniya
            return newItem
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async update({params: {id}, body}) {//title Control
        try {
            const item = await model.findByIdAndUpdate(id, body, {new: true})//update
            return item
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async delete({params: {id}}) {
        try {
            await model.findByIdAndDelete(id)
            return {status: 'OK', message: 'Продукт удален'}
        } catch (err) {
            throw boom.boomify(err)
        }
    },
})

module.exports = genericCrud