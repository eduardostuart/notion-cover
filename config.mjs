function envOrThrow(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable ${key}`);
  }
  return value;
}

// Notion API access token
// https://www.notion.so/my-integrations
export const notionToken = envOrThrow("NOTION_TOKEN");

// Notion Page id we want to update
// https://developers.notion.com/docs/working-with-page-content#:~text:=%22Where%20can%20I%20find%20my%20page's%20ID?%22
export const notionPageId = envOrThrow("NOTION_PAGE_ID");

// Unsplash API access key
// https://unsplash.com/oauth/applications
export const unsplashAccessKey = envOrThrow("UNSPLASH_ACCESS_KEY");

// List of collections ids to get images from
export const unsplashCollections = envOrThrow("UNSPLASH_COLLECTIONS");
