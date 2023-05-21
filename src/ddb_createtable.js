// cria tabela

import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

export const params = {
  AttributeDefinitions: [
    {
      AttributeName: "Season", // nome do atributo
      AttributeType: "N", // tipo do atributo
    },
    {
      AttributeName: "Episode", // nome do atributo
      AttributeType: "N", // tipo do atributo
    },
  ],
  KeySchema: [
    {
      AttributeName: "Season", // primeiro atributo
      KeyType: "HASH",
    },
    {
      AttributeName: "Episode", // segundo atributo
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "Shows", // nome da tabela
  StreamSpecification: {
    StreamEnabled: false,
  },
};

export const run = async () => {
  try {
    const data = await ddbClient.send(new CreateTableCommand(params));
    console.log("Table Created", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();