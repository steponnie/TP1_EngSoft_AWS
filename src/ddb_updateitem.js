// atualiza item

import { UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

export const params = {
  TableName: "Shows",
  Key: { // chave primaria
    Season: { N: "1" },
    Episode: { N: "1" },
  },
  UpdateExpression: "SET Description = :value",
  ExpressionAttributeValues: {
    ":value": { "S": "First Episode" },
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
