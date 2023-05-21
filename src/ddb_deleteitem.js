// apaga item

import { DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

export const params = {
    TableName: "Shows", // nome da tabela
    Key: { // chave primaria
      "Season": {"N": "1"},
      "Episode": {"N": "1"},
    },
  };

export const run = async () => {
    try {
      const data = await ddbClient.send(new DeleteItemCommand(params));
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  run();
