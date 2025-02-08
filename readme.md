# Computational Robotics Lab Website

This repository contains the source code for the Computational Robotics Lab website.

## Development

To run the website locally:
```bash
npm run start
```

To deploy the website:
```bash
npm run build && npm run deploy
```

## Repository Structure

The website uses a two-branch system:
- `main`: Contains the source code and development work
- `master`: Contains the built/deployed website

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
