const state = ()=>({
    product:{},
    products:[],
    productError:null
})

const mutations = {}

const actions = {}

const getters = {
    product:({ product})=>product,
    products:({ products})=>products,
    productError: null
}

export default {
    mutations,
    getters,
    actions,
    state
}