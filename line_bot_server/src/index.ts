import express from 'express'
import * as admin from 'firebase-admin'
import * as line from '@line/bot-sdk'
import Types from '@line/bot-sdk'
require('dotenv').config()


const lineBotConfig = {
    channelAccessToken: <string>process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: <string>process.env.LINE_CHANNEL_SECRET,
}

const client =new line.messagingApi.MessagingApiClient({
    channelAccessToken: <string>process.env.LINE_CHANNEL_ACCESS_TOKEN,
})

const app = express()
app.post('/webhook', line.middleware(lineBotConfig), async (req, res) => {
    const message = await getMonthlyFixedBill()

    const messageObj = {
        type: 'text',
        text: message
    }

    client.pushMessage({to: <string>process.env.USER_ID_T, messages: [messageObj]})
})

const PORT = process.env.PORT || 3000
app.listen(PORT)

const getMonthlyFixedBill = async (): Promise<string> => {
    const currentMonth = new Date().getMonth() + 1
    const db = admin.firestore()
    const snapshot = await db.collection('household').where('month', '==', currentMonth).get()

    let monthlyBill = 0
    snapshot.forEach( s => {
        s.data().is_owner ? monthlyBill += s.data().amount : monthlyBill -= s.data().amount
    })
    return `今月の生活費です。\n${monthlyBill}`
}