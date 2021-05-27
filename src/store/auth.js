import firebase from 'firebase'

export default {
    actions: {  //логин
        async login({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                commit('setError',e)
                throw e
            }
        },

        async logout({dispatch}) {  //выход
            await firebase.auth().signOut()
        },

        //регистрация
        async registration({dispatch, commit}, {surname, name, patronymic, phone, email, password, role}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({                    
                    surname,
                    name,
                    patronymic,
                    phone,
                    role
                })
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        getUid() {  //получение идентификатора пользователя
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
    }
}