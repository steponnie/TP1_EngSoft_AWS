import { DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";


// Set the parameters
export const params = {
    TableName: "series",
    Key: {
      "temporada": {"S": "1"},
      "episodio": {"N": "1"},
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
