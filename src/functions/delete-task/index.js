import { deleteTask } from "../../dynamoDb.js"

export async function handler(event, context) {
    console.log(event);
    const { id } = event.pathParameters//para el caso del delete el parametro viene en la url /{id}

    //TODO: enviar a eliminar con deleteTask

    //TODO: retornar respuesta exitosa
    
}