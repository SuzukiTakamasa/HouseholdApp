import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import { Household, User, Collection } from './constants'

export default class FirestoreHandler {
    private db: FirebaseFirestoreTypes.Module
    constructor() {
        this.db = firestore()
        if (__DEV__) this.db.useEmulator('localhost', 8080)
    }

    async get(collection: Collection, ...condition: [string, FirebaseFirestoreTypes.WhereFilterOp, any]) {
        try {
            const query = condition.length
            ? await this.db.collection(collection).where(...condition).get()
            : await this.db.collection(collection).get()
            return query.docs.map(query => query.data())
        } catch (e) {
            console.log("データの取得に失敗しました。")
            throw e
        }
    }

    add(collection: Collection, data: Household | User) {
        this.db.collection(collection).add(data)
        .then(() => {console.log("データの追加に成功しました。")})
        .catch(() => {console.log("データの追加に失敗しました。")})
    }

    update(collection: Collection, data: Household | User, docId: string) {
        this.db.collection(collection).doc(docId).update(data)
        .then(() => {console.log("データの更新に成功しました。")})
        .catch(() => {console.log("データの参照に失敗しました。")})
    }

    delete(collection: Collection, docId: string) {
        this.db.collection(collection).doc(docId).delete()
        .then(() => {console.log("データの削除に成功しました。")})
        .catch(() => {console.log("データの削除に失敗しました。")})
    }
}