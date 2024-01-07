import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import { HouseholdData, UserData, Collection, WhereCondition, GetResult } from './constants'

export default class FirestoreHandler {
    private db: FirebaseFirestoreTypes.Module
    constructor() {
        this.db = firestore()
        if (__DEV__) this.db.useEmulator('localhost', 8080)
    }

    async get(collection: Collection, conditions: WhereCondition[]) {
        try {
          let query: FirebaseFirestoreTypes.Query = this.db.collection(collection)
      
          conditions.forEach(condition => {
            query = query.where(condition.field, condition.operator, condition.value)
          })
      
          const querySnapshot = await query.get();
          return querySnapshot.docs.map(doc => doc.data()) as GetResult
        } catch (error) {
          console.log("データの参照に失敗しました。", error)
          throw error
        }
      }

    add(collection: Collection, data: HouseholdData | UserData) {
        this.db.collection(collection).add(data)
        .then(() => {console.log("データの追加に成功しました。")})
        .catch(() => {console.log("データの追加に失敗しました。")})
    }

    update(collection: Collection, data: HouseholdData | UserData, docId: string) {
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