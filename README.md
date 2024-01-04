# Notion cover

> A tool to update your [notion page cover image](https://sweltering-pan-ea0.notion.site/Public-Notion-Cover-page-96417c47554f4467b7c473be9a4c37cf) using GitHub actions and Unsplash API.

## Requirements

1. [Unsplash API key](https://unsplash.com/oauth/applications)
2. [Notion token](https://www.notion.so/my-integrations)
3. [Notion page id](https://developers.notion.com/docs/working-with-page-content#:~text:=%22Where%20can%20I%20find%20my%20page's%20ID?%22)

## Usage

1. Click on [`Use this template`](https://github.com/new?template_name=notion-cover&template_owner=eduardostuart)
2. Add the 3 required secrets to your repository:

- `NOTION_TOKEN`: Your notion token
- `NOTION_PAGE_ID`: Your notion page id
- `UNSPLASH_API_KEY`: Your unsplash api key

Final, but optional, you can change the unsplash collection ids using `UNSPLASH_COLLECTIONS` env variable.

If you want to change the frequency of the cover update, you can change the cron expression in `.github/workflows/update.yml` file. By default, it runs every day at 6AM.
