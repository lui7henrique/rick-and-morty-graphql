import { DocumentNode } from "graphql";
import { client } from "graphql/client";

export const useQuery = async <T>(query: DocumentNode) => {
  const data = await client.query<T>({
    query,
  });

  return data;
};
