const { client, isConfigured } = require('./sanity');
const groq = require('groq');

module.exports = async function() {
  if (!isConfigured || !client) {
    console.log('[11ty] Sanity not configured - returning empty design styles array');
    console.log('[11ty] Set SANITY_PROJECT_ID in .env to enable Sanity CMS integration');
    return [];
  }

  try {
    const query = groq`*[_type == "designStyle"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      historicalBackground,
      keyCharacteristics,
      colorPalette,
      typographyGuidance,
      principles,
      sampleImages,
      demoUrl,
      githubRepo,
      technologies,
      featured,
      publishedAt
    }`;

    const styles = await client.fetch(query);
    console.log(`[11ty] Fetched ${styles.length} design styles from Sanity`);
    return styles;
  } catch (error) {
    console.error('[11ty] Error fetching design styles from Sanity:', error.message);
    return [];
  }
};
