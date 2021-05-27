import firebase from 'firebase'

export default {
    actions: {  //добавление заказа
        async createOrder({dispatch, commit}, {ordername, address, startdate, customer, executor}) {
            try {
                const uid = await dispatch('getUid')
                const order = await firebase.database()
                .ref(`/users/${uid}/orders`).push({ordername, address, startdate, customer, executor})
                return {order, address, startdate, customer, executor, id: order.key}             
            }catch (e) {
                commit('setError', e)
                throw e
            }
        }
    }
}