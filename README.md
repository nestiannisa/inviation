# Ever After Island

A responsive interactive wedding invitation concept with a romantic ivory-and-champagne virtual plaza and five clickable booth panels.

## Features
- Responsive invitation landing page
- Interactive Wedding Details, Our Story, RSVP, Guestbook, and Digital Gift panels
- Countdown timer
- Frontend RSVP and guestbook demo using `localStorage`
- No framework or build step required

## Run locally
Open `index.html` in a browser, or use VS Code Live Server.

## Customize before publishing
Edit the `CONFIG` object near the top of `script.js`: names, date, times, venue, map link, story copy, and gift placeholders. Replace all sample information before sending the link to guests.

## Publish with GitHub Pages
1. Create a GitHub repository, e.g. `ever-after-island`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish. The public URL will appear on the Pages settings screen.

You can also import the repository into Vercel as a static site. No build command is needed; use the repository root as the output directory.

## Important limitation
This is a frontend prototype. RSVP and guestbook entries are stored only in each visitor's own browser and are not sent to the couple or shared with other guests. For a real invitation, connect a backend such as Supabase and configure database permissions before collecting guest responses. The plaza is a CSS illustration with interactive booths, not a real-time WebGL/Three.js scene yet. This keeps the starter lightweight and accessible on mobile.

## Portfolio case study
Suggested title: **Ever After Island: An Interactive Wedding Invitation**. Describe this version as a responsive frontend prototype until backend persistence and any 3D/WebGL scene have been implemented and tested.
