import firebase from 'firebase'

export default {
    actions: {  //добавление категории
        async createCategory({dispatch, commit}, {categoryname}) {
            try {
                const uid = await dispatch('getUid')
                const category = await firebase.database()
                .ref(`/users/${uid}/categories`).push({categoryname})
                return {categoryname, id: category.key}             
            }catch (e) {
                commit('setError', e)
                throw e
            }
        }
    }
}