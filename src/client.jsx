import { createClient } from "@sanity/client";


const client = createClient({
    projectId: "tpfd41zo",
    dataset: "production",
    // Set to `true` for production environments
    useCdn: true,
  });

  export default client;
  