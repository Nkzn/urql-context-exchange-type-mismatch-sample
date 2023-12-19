import { createClient, cacheExchange, fetchExchange } from "urql";
import { contextExchange } from "@urql/exchange-context";

const client = createClient({
  url: "http://localhost:1234/graphql",
  exchanges: [
    cacheExchange,
    contextExchange({
      getContext: async (operation) => {
        return { ...operation.context };
      },
    }),
    fetchExchange,
  ],
});
