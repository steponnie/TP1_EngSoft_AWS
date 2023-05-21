// Cria modulo service cliente usando sintaxe ES6
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

// Define a regiao AWS
const REGION = "us-east-1"; //ex: "us-east-1"

// Cria um objeto Amazon DynamoBD
const ddbClient = new DynamoDBClient({ region: REGION });

export { ddbClient };