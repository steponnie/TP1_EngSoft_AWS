// apaga tabela

import { DeleteTableCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

export const params = {
  TableName: "Shows", // nome da tabela
};


export const run = async () => {
  try {
    const data = await ddbClient.send(new DeleteTableCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();
