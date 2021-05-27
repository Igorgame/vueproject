export const getUswe = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

export const useLoadUsers = () => {
    const users = ref([])
    usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
    })
    return users
}