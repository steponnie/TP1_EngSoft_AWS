// insere item na tabela

import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

export const params = {
  TableName: "Shows", // nome da tabela
  Item: { // item a ser inserido
    "Season": {"N": "1"},
    "Episode": {"N": "1"},
    "Description": {"S": "Pilot"}
  },
};

export const run = async () => {
  try {
    const data = await ddbClient.send(new PutItemCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();