import { UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

export const params = {
  TableName: "series",
  Key: {
    temporada: { S: "1" },
    episodio: { N: "1" },
  },
  UpdateExpression: "SET descricao = :value",
  ExpressionAttributeValues: {
    ":value": { "S": "episodio piloto" },
  },
  ReturnValues: "ALL_NEW",
};

export const run = async () => {
  try {
    const data = await ddbClient.send(new UpdateItemCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();
