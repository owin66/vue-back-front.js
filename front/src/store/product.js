import {getProduct, getProducts} from "@/services/products.servise";

const state = () => ({
    product: {},
    products: [],
    productError: null
})

const mutations = {
    setProduct(state, product) {
        state.product = product
    },
    setProducts(state, products) {
        state.products = products
    },
    setProductError(state, error) {
        state.productError = error
    },
}

const actions = {
    async fetchProduct({commit}, id) {
        try {
            const product = await getProduct(id)
            commit('setProduct', product)
        } catch (err) {
            commit('setProductError', err)
        }
    },
    async fetchProducts({commit}) {
        try {
            const products = await getProducts(id)
            commit('setProducts', products)
        } catch (err) {
            commit('setProductError', err)
        }
    }
}

const getters = {
    product: ({product}) => product,
    products: ({products}) => products,
    productError: ({productError}) => productError
}

export default {
    mutations,
    getters,
    actions,
    state
}