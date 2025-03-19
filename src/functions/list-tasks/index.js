import { getTasks } from "../../dynamoDb.js"

export async function handler(event, context) {
    const body = JSON.parse(event.body)
    const a = await getTasks(body)
    return {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, GET"
        },
        statusCode: 200,
        body: JSON.stringify(a)
    }
}