require('dotenv').config();
const sanityClient = require('@sanity/client');
const imageUrlBuilder = require('@sanity/image-url');

const projectId = process.env.SANITY_PROJECT_ID || null;
const isConfigured = projectId && projectId !== 'your_sanity_project_id' && projectId.match(/^[a-z0-9-]+$/);

let client = null;
let builder = null;

if (isConfigured) {
  client = sanityClient.createClient({
    projectId: projectId,
    dataset: process.env.SANITY_DATASET || 'production',
    apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
    useCdn: true,
    token: process.env.SANITY_TOKEN
  });

  builder = imageUrlBuilder(client);
}

function urlFor(source) {
  if (!builder) {
    return { url: () => '' };
  }
  return builder.image(source);
}

module.exports = {
  client,
  urlFor,
  isConfigured
};
