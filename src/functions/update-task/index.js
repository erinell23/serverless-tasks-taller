import { updateTask } from "../../dynamoDb"

export async function handler(event, context) {
    const { id } = event.pathParameters
    const { estado } = JSON.parse(event.body)
    await updateTask({ id, estado })

    return {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, PUT"
        },
        statusCode: 200,
        body: JSON.stringify({ message: "tarea actualizada exitosamente!!" })
    }

}