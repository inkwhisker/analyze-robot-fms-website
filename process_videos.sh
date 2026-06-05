#!/bin/bash

set -euo pipefail

count=0
failed=0

echo "Processing all MP4 files in assets/videos/sim..."

find assets/videos/sim -type f -name "*.mp4" | while read -r f; do
  tmp="${f%.mp4}.tmp.mp4"
  
  if ffmpeg -y -loglevel error -i "$f" -vcodec libx264 -crf 23 -movflags +faststart "$tmp"; then
    mv "$tmp" "$f"
    count=$((count+1))
    if (( count % 10 == 0 )); then
      echo "Processed $count files..."
    fi
  else
    failed=$((failed+1))
    rm -f "$tmp"
    echo "FAILED: $f"
  fi
done

echo "Complete: Processed videos with libx264 encoding"
