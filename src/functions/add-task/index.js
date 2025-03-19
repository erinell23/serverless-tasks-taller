import { addTask } from "../../dynamoDb.js"

export async function handler(event, context) {
    const body = JSON.parse(event.body)
    const a = await addTask(body)
    console.log('todo bien: ', a);
    
    
    return {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, POST"
        },
        statusCode: 200,
        body: JSON.stringify({ message: "tarea guardada exitosamente!!" })
    }
}