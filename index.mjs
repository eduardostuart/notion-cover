import { Client } from "@notionhq/client";
import { getImageUrl } from "./unsplash.mjs";
import { notionToken, notionPageId, unsplashCollections } from "./config.mjs";

const notion = new Client({ auth: notionToken });

(async () => {
  const image = await getImageUrl({ collections: unsplashCollections });
  await notion.pages.update({
    page_id: notionPageId,
    cover: {
      type: "external",
      external: {
        url: image,
      },
    },
  });
  console.log("Done!");
})();
