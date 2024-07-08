import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: '2021-03-25', // Use a specific API version
  useCdn: true
});

export default client;
