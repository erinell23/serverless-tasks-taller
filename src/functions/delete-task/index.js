import { deleteTask } from "../../dynamoDb.js"

export async function handler(event, context) {
    console.log(event);
    const { id } = event.pathParameters//para el caso del delete el parametro viene en la url /{id}
    await deleteTask({ id })

    return {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, DELETE"
        },
        statusCode: 200,
        body: JSON.stringify({ message: "tarea eliminada exitosamente!!" })
    }

}