const boom = require('boom')

const genericCrud = (model) => ({
    async get({params: {id}}) {
        try {

        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async getAll() {
        try {

        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async create() {
        try {

        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async update() {
        try {

        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async delete() {
        try {

        } catch (err) {
            throw boom.boomify(err)
        }
    },
})

module.exports = genericCrud