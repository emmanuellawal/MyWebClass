// Sanity API configuration for Eleventy data fetching
const projectId = process.env.SANITY_PROJECT_ID || 'gc7vlywa';
const dataset = process.env.SANITY_DATASET || 'production';
const apiVersion = '2021-10-21';

/**
 * Build a Sanity API query URL
 * @param {string} query - GROQ query string
 * @returns {string} - Full API URL
 */
export function buildQueryUrl(query) {
  const encodedQuery = encodeURIComponent(query);
  return `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodedQuery}`;
}

export { projectId, dataset, apiVersion };
