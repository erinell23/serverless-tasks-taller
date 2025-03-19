import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient, DeleteCommand, QueryCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import crypto from 'node:crypto'

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const addTask = async (body) => {
    const command = new PutCommand({
        TableName: "taller-utp",
        Item: {
            tipo: "task",
            id: crypto.randomUUID(),
            nombre: body.nombre,
            estado: true
        }
    });
    return await docClient.send(command);
}


export const getTasks = async () => {
    const command = new QueryCommand({
        TableName: "taller-utp",
        KeyConditionExpression: 'tipo=:tipo',
        ExpressionAttributeValues: {
            ':tipo': 'task'
        }
    });
    const response = await docClient.send(command);
    return response.Items;
}

