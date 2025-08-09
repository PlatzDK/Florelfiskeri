# AI Workflow & Site Architecture Documentation (version 1.0)

## Overview
This repository hosts the front-end of Florel Fiskeri summer house website. The site is a single-page application built with plain HTML, Tailwind CSS and a small translation script. Content is stored in the `lang/` folder as JSON translation dictionaries.

## AI Workflow (ai-push.yml)
To support automated updates via AI agents (e.g., ChatGPT or Codex), the repository includes a GitHub Actions workflow `.github/workflows/ai-push.yml`. This workflow defines a manual job ("workflow_dispatch") called **AI Push** that can be triggered on demand from the Actions tab. The workflow does the following:
1. Checks out the repository.
2. Sets up Node.js (version 18) and installs the `cheerio` library.
3. Decodes a base64-encoded JavaScript script (embedded in the workflow) and writes it to `update.js`.
4. Runs the script using Node. The script uses Cheerio to parse `index.html` and replace the “About the House” list with a responsive grid of icons that match the design inspiration (e.g. 🛌 for bed, 🍳 for pan, 🚿 for shower, 🌄 for sunrise, 📶 for wifi, 🎯 for fishing, 🚫 for no smoking, 🌳 for pine tree). The translation keys are left intact.
5. Commits and pushes any modifications back to `main` via the GitHub Actions token.

This design eliminates the need to maintain a separate script file in the repository (avoiding quoting issues) and ensures the workflow has all the logic it needs to update the HTML automatically.

### Running the AI workflow
To run the workflow:
- Go to **Actions** → **.github/workflows/ai-push.yml**.
- Click **Run workflow** and confirm.
- Once the workflow completes, check the `update-site` job logs for success and review the changes to `index.html` in the commit.

Because the workflow pushes directly to `main`, ensure that branch protection rules are disabled or configured to allow GitHub Actions to push. Alternatively, modify the workflow to create a pull request instead of pushing directly (recommended for production).

## Architecture rationale
We kept the site as a static HTML page to maximize performance and minimize hosting complexity. Client-side translations avoid duplicate pages for each language, and Tailwind CSS offers rapid styling with small bundle size. For dynamic modifications (like replacing the list with a grid), it is simpler to use Cheerio in Node to manipulate the HTML in a repeatable manner rather than editing by hand through the GitHub UI.

### Versioning
This documentation is versioned. Current version: **v1.0** (August 2025). Update the version number and date when making significant changes to the workflow, site structure, or architecture.

## Future improvements
- Migrate to a static site generator (e.g. Eleventy) for better templating and content management.
- Use a headless CMS for easier content updates by non-developers.
- Create an AI workflow that opens a pull request instead of pushing directly to the `main` branch.
