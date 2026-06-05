# Robot FM Paper Submission Website

This repository now contains a modern, single-page website for paper submission artifacts, with dedicated experiment video sections for:

- DROID real-robot experiments
- LIBERO simulation experiments


ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -movflags +faststart output.mp4

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Replace content

1. Update title, abstract, results text, and citation block in `index.html`.
2. Put your experiment videos in `assets/videos/`.
3. Put poster images in `assets/posters/`.
4. Keep the filenames in `index.html` aligned with your files, or rename the `src` and `poster` paths.

## Current video slots

DROID (real robot):

- `assets/videos/droid_pick_place.mp4`
- `assets/videos/droid_drawer.mp4`
- `assets/videos/droid_recovery.mp4`

LIBERO (simulation):

- `assets/videos/libero_multitask.mp4`
- `assets/videos/libero_unseen_layout.mp4`
- `assets/videos/libero_ablation.mp4`

## Notes

- The filter buttons let reviewers focus on one track at a time.
- The layout is responsive for desktop and mobile.
- No build step is required.
