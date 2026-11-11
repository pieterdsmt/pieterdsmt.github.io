# Rowmen

Static band website at https://pieterdsmt.github.io/.

## Editing

- `index.html`: copy, setlist, band members and contact details.
- `styles.css`: responsive layout and sketchbook styling.
- `site.js`: prevents simultaneous media playback and shows playback errors.
- `beelden/`: selected photos and original Rowmen lettering.
- `media/`: two 24-second live audio excerpts and a 12.7-second live video.

No build step, external fonts, analytics or third-party media embeds.
Open `index.html` directly, or serve this folder with a static HTTP server
to test media playback.

Contact uses a WhatsApp link, without a displayed telephone number or an
email address in the page source. The WhatsApp URL still contains the
telephone number. There is no server-side form; GitHub Pages does not
process form submissions.

## Media

The group photo was cut out in Canva. Its photocopy treatment retains the
original silhouettes, without local exposure corrections to the faces.
The source images remain local and are not published.

Audio excerpts use the supplied live recordings, with loudness normalization
and short fades, not replacement audio. The audio titles are deliberately
generic: the website does not claim to identify the songs in these excerpts.
The video uses the requested WhatsApp recording from 12.29.15, without
replacing or processing its recorded sound. These are room recordings, not a
studio demo. Have the band review the excerpts before promoting the site.

## Publishing

Only files explicitly allowed by `.gitignore` belong in the repository.
Private chat exports, original social screenshots, moodboards and unselected
media must remain local.

Pushing `main` runs `.github/workflows/pages.yml`. The repository's Pages
source must be set to GitHub Actions.
