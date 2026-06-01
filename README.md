# John Kiriakou Live Loop

This repository hosts a local MP4 video in a clean, stream-ready HTML page for OBS Browser Source, StreamElements Custom Widgets, and other browser-based livestream overlays.

## Files

- `index.html` - The GitHub Pages entry point.
- `styles.css` - Full-viewport, no-scrollbar video layout.
- `john-kiriakou-live-loop.mp4` - The hosted, GitHub Pages-ready MP4 video.

## Behavior

The page automatically plays the MP4 on load, loops it forever, keeps it muted, hides native controls, and scales the video responsively to fit the full browser source area.

The video tag uses:

- `autoplay`
- `muted`
- `loop`
- `playsinline`

The CSS makes `html`, `body`, and the video fill the viewport with no margins, padding, borders, scrollbars, or extra whitespace.

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Add these files to the repository root:
   - `index.html`
   - `styles.css`
   - `README.md`
   - `john-kiriakou-live-loop.mp4`
3. Commit and push the files to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Add looping stream video page"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```

4. In GitHub, open the repository settings.
5. Go to **Pages**.
6. Under **Build and deployment**, set the source to **Deploy from a branch**.
7. Choose the `main` branch and the root folder.
8. Save the settings.

After GitHub Pages finishes deploying, the page will be available at:

```text
https://USERNAME.github.io/REPO/
```

## OBS Browser Source

Use the deployed GitHub Pages URL as the Browser Source URL. Set the source width and height to match your canvas or overlay area.

Recommended Browser Source settings:

- Width: your target stream width, such as `1920`
- Height: your target stream height, such as `1080`
- Shutdown source when not visible: optional
- Refresh browser when scene becomes active: optional

## StreamElements Custom Widget

Use the deployed GitHub Pages URL in a browser layer or iframe-capable widget. The page is designed to autoplay muted video and fill the available widget area without controls or scrollbars.

## Video Hosting Notes

GitHub blocks normal repository files larger than 100 MiB, and GitHub Pages is not a good fit for serving video through Git LFS. This project uses a compressed, muted MP4 that is small enough to live directly in the repository and be served by GitHub Pages.

The original source video filename contains spaces and special characters. The published MP4 uses a clean web filename so the URL is simple and reliable in OBS and StreamElements.
