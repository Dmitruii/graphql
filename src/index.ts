import { ApolloServer } from "apollo-server";

// 1
import { schema } from "./schema";
import { context } from "./context";

export const server = new ApolloServer({
    schema,
    context,
});

const port = 3000;
// 2
server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});