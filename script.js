const filterButtons = document.querySelectorAll('.filter-btn');
const videoCards = document.querySelectorAll('.video-card');
const trackGroups = document.querySelectorAll('.track-group');
const revealEls = document.querySelectorAll('.reveal');
const videosSection = document.getElementById('videos');

function normalizeTrack(track) {
  if (track === 'real') {
    return 'droid';
  }

  if (track === 'simulation') {
    return 'libero';
  }

  return track;
}

function applyFilter(rawTrack) {
  const track = normalizeTrack(rawTrack);

  if (videosSection) {
    videosSection.dataset.activeTrack = track;
  }

  videoCards.forEach((card) => {
    const cardTrack = card.dataset.track;
    const shouldShow = track === 'all' || track === cardTrack;
    card.classList.toggle('is-hidden', !shouldShow);
  });

  trackGroups.forEach((group) => {
    const groupTrack = group.dataset.trackGroup;
    const shouldShow = track === 'all' || track === groupTrack;
    group.classList.toggle('is-hidden', !shouldShow);
    group.hidden = !shouldShow;
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const track = normalizeTrack(button.dataset.filter);

    filterButtons.forEach((btn) => {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-selected', 'false');
    });

    button.classList.add('is-active');
    button.setAttribute('aria-selected', 'true');
    applyFilter(track);
  });
});

const activeFilterButton = document.querySelector('.filter-btn.is-active');
applyFilter(activeFilterButton?.dataset.filter || 'all');



document.getElementById('year').textContent = String(new Date().getFullYear());

// Inject outcome chips from data-outcome attributes
document.querySelectorAll('.video-card[data-outcome]').forEach((card) => {
  const outcome = card.dataset.outcome;
  const cardTags = card.querySelector('.card-tags');
  if (!cardTags) return;
  const chip = document.createElement('p');
  chip.className = `chip chip-${outcome}`;
  chip.textContent = outcome === 'success' ? '✓ Success' : '✗ Failure';
  cardTags.appendChild(chip);
});
