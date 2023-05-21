// Cria modulo service client usando sintaxe ES6
import { DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";
import {ddbClient} from "./ddbClient";

const marshallOptions = {
    // Se converte automaticamente string vazias, blobs e define como "null" 
    convertEmptyValues: false, // falso, por padrao
    // Se remove valores indefinidos
    removeUndefinedValues: false, // falso, por padrao
    // Se converete objeto typeof para atributo tipo mapa
    convertClassInstanceToMap: false, // falso, por padrão
};

const unmarshallOptions = {
    // Se retorna numeros como string ao inves de converter como numeros JS
    wrapNumbers: false, // falso, por padrao
};

const translateConfig = { marshallOptions, unmarshallOptions };

// Cria DynamoDB Document Client
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, translateConfig);

export { ddbDocClient };