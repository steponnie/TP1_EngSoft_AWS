// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

// Set the parameters
export const params = {
  TableName: "series",
  Item: {
    "temporada": {"S": "1"},
    "episodio": {"N": "1"},
    "descricao": {"S": "primeiro episodio"}
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