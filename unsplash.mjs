import { unsplashAccessKey } from "./config.mjs";

async function request(
  options = {
    endpoint: null,
  }
) {
  if (!options.endpoint) {
    throw new Error("Endpoint is required");
  }

  const response = await fetch(`https://api.unsplash.com/${options.endpoint}`, {
    headers: {
      Authorization: `Client-ID ${unsplashAccessKey}`,
    },
  });
  return response.json();
}

/**
 * Get a random image url from unsplash
 * @returns {Promise<String>} image raw url
 */
async function getRandomImageUrl(collections = null) {
  if (!collections) {
    throw new Error("Collections is required");
  }
  const [item] = await request({
    endpoint: `photos/random?collections=${collections}&orientation=landscape&count=1`,
  });
  return item.urls.raw;
}

/**
 * Get a random image url from unsplash and transform it
 * @returns {Promise<String>} image url
 */
export async function getImageUrl(
  options = {
    collections: null,
    width: 1500,
    height: 360,
    fit: "crop",
    quality: 80,
  }
) {
  const imageUrl = await getRandomImageUrl(options.collections);
  return `${imageUrl}&w=${options.width}&h=${options.height}&fit=${options.fit}&q=${options.quality}`;
}
