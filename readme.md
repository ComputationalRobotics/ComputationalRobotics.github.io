# Computational Robotics Lab Website

This repository contains the source code for the Computational Robotics Lab website.

## Development

To run the website locally:
```bash
npm run start
```

You may need to run the following if the website builds with errors:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

To deploy the website:
```bash
npm run build && npm run deploy
```

## Repository Structure

The website uses a two-branch system:
- `main`: Contains the source code and development work
- `master`: Contains the built/deployed website

## Project Structure

The website is built using React and is organized as follows:

```
src/
├── components/           # React components for each page
│   ├── HomePage.js      # Lab overview and welcome
│   ├── PeoplePage.js    # Team members and alumni
│   ├── ResearchPage.js  # Research projects
│   ├── PublicationsPage.js # Publications list
│   └── *.css           # Corresponding stylesheets
├── App.js              # Main app component and routing
└── App.css             # Global styles
```

## Making Common Updates

### Adding/Updating Team Members
Edit `src/components/PeoplePage.js`:
- Add/modify entries in the `people` array
- People are organized by categories: faculty, PhD, visiting, etc.
- Each person entry includes: name, title, category, imageUrl, and optional bioLink
- Images should be added to the `public/` directory

### Updating Research Projects
Edit `src/components/ResearchPage.js`:
- Research projects are organized in sections
- Each project includes a title, description, and optional images/links

### Adding Publications
Edit `src/components/PublicationsPage.js`:
- Publications are stored in chronological order
- Each entry includes title, authors, conference/journal, and optional links

## Important Note

After deploying changes, always remember to push your source code updates to the `main` branch to keep the repository in sync.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start local development server: `npm run start`
4. Make your changes
5. Deploy and push source code:
   ```bash
   npm run build && npm run deploy
   git push origin main
   ```

## Style Guidelines

- Images should be optimized for web (compressed, appropriate dimensions)
- Keep consistent formatting within each component
- Use the existing CSS classes for styling new elements
- Follow the established patterns for each section
