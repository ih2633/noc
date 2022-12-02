import { initUrqlClient } from "next-urql";
import { Client } from "urql";
import { env } from "@/env/server.mjs";

const GRAPHQL_ENDPOINT = env.GRAPHQL_ENDPOINT!;

export function urqlClient(): Promise<Client> {
  return new Promise((resolve, reject) => {
    const client = initUrqlClient(
      {
        url: GRAPHQL_ENDPOINT,
      },
      false,
    );
    if (!client) {
      reject(Error('Failed to init initUrqlClient.'));
    } else {
      resolve(client);
    }
  })
}
