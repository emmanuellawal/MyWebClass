import EleventyFetch from "@11ty/eleventy-fetch";
import { buildQueryUrl } from "./sanity.mjs";

const isDev = process.env.NODE_ENV !== 'production';

export default async function() {
  // Only fetch approved submissions with resolved style reference
  const query = '*[_type == "gallerySubmission" && status == "approved"]{..., styleRef->}';
  const url = buildQueryUrl(query);

  try {
    const data = await EleventyFetch(url, {
      duration: "1h",
      type: "json"
    });

    // Validate response structure
    if (!data || typeof data !== 'object') {
      console.error("[Sanity] Invalid response structure - expected object");
      return [];
    }

    const result = data.result;
    if (!Array.isArray(result)) {
      console.error("[Sanity] Invalid response - 'result' is not an array");
      return [];
    }

    if (isDev) {
      console.log(`[Sanity] Fetched ${result.length} approved submissions`);
    }
    return result;
  } catch (error) {
    console.error("[Sanity] Failed to fetch submissions:", error.message);
    return [];
  }
}
