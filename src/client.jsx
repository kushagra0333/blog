import { createClient } from "@sanity/client";


const client = createClient({
    projectId: "tpfd41zo",
    dataset: "production",
    apiVersion: '2021-03-25', // Use a specific API version
    useCdn: true,
  });

  export default client;
  