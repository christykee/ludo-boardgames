/* ═══════════════════════════════════════════════════════════════════
   CABINET LUDO — Main JavaScript v2
   Language · Navigation · BGG Image Fetching · Gallery Carousel · Modal
   ═══════════════════════════════════════════════════════════════════ */

/* ── LANGUAGE ── */
let currentLang = localStorage.getItem('ludo-lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('ludo-lang', lang);
  document.documentElement.className =
    document.documentElement.className.replace(/lang-\w+/, '') + ' lang-' + lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  if (typeof renderGames === 'function') renderGames();
}

function t(game, field) {
  const frKey = field + 'Fr';
  if (currentLang === 'fr' && game[frKey]) return game[frKey];
  return game[field] || '';
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('lang-' + currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });
});

/* ══════════════════════════════════════════════════════════════════
   BGG IMAGE FETCHING
   Uses BGG XMLAPI2 for primary cover images (CORS-friendly)
   Uses BGG media API for gallery (may need proxy on some browsers)
══════════════════════════════════════════════════════════════════ */

// Cache images in sessionStorage to avoid redundant API calls
const imgCache = {};

async function fetchBGGCover(bggId) {
  if (!bggId) return null;
  const key = `cover_${bggId}`;
  if (imgCache[key] !== undefined) return imgCache[key];

  // Check sessionStorage
  const stored = sessionStorage.getItem(key);
  if (stored) { imgCache[key] = stored; return stored; }

  // BGG xmlapi2 sometimes returns 202 ("Accepted, please retry") while it
  // generates the response — retry with backoff up to 5 attempts.
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await fetch(`https://boardgamegeek.com/xmlapi2/thing?id=${bggId}`, {
        mode: 'cors', cache: 'default'
      });
      if (res.status === 202) {
        await new Promise(r => setTimeout(r, 700 + attempt * 500));
        continue;
      }
      if (!res.ok) break;
      const text = await res.text();
      const doc = new DOMParser().parseFromString(text, 'text/xml');
      const raw = doc.querySelector('image')?.textContent?.trim()
              || doc.querySelector('thumbnail')?.textContent?.trim();
      const url = raw ? (raw.startsWith('//') ? 'https:' + raw : raw) : null;
      imgCache[key] = url;
      if (url) sessionStorage.setItem(key, url);
      return url;
    } catch {
      break;
    }
  }
  imgCache[key] = null;
  return null;
}

async function fetchBGGGallery(bggId, limit = 8) {
  if (!bggId) return [];
  const key = `gallery_${bggId}`;
  if (imgCache[key] !== undefined) return imgCache[key];

  const stored = sessionStorage.getItem(key);
  if (stored) { imgCache[key] = JSON.parse(stored); return imgCache[key]; }

  let images = [];
  try {
    // Try BGG media API
    const res = await fetch(
      `https://api.geekdo.com/api/images?objectid=${bggId}&objecttype=thing&size=medium&nosession=1`,
      { mode: 'cors', cache: 'default' }
    );
    if (res.ok) {
      const data = await res.json();
      images = (data.images || [])
        .slice(0, limit)
        .map(img => {
          const url = img.imageurl || img.src || '';
          return url.startsWith('//') ? 'https:' + url : url;
        })
        .filter(u => u && u.startsWith('http'));
    }
  } catch { /* Gallery API may not be CORS-accessible — handled gracefully */ }

  imgCache[key] = images;
  if (images.length) sessionStorage.setItem(key, JSON.stringify(images));
  return images;
}

/* Inject real cover image into an existing card element */
async function loadCardImage(cardEl, game) {
  const imgEl = cardEl.querySelector('.card-real-img');
  if (!imgEl) return;
  // If a static cover is already injected, skip BGG fetch
  if (imgEl.dataset.staticCover === '1') return;
  if (!game.bggId) return;

  const url = await fetchBGGCover(game.bggId);
  if (!url) return;

  const loader = new Image();
  loader.onload = () => {
    imgEl.src = url;
    imgEl.style.display = '';   // reset in case the empty-src onerror hid it earlier
    imgEl.classList.add('loaded');
    imgEl.classList.remove('loading');
    const bg = cardEl.querySelector('.card-img-bg');
    if (bg) bg.style.display = 'none';
  };
  loader.onerror = () => {};
  loader.src = url;
}

/* ══════════════════════════════════════════════════════════════════
   GALLERY CAROUSEL (in modal)
══════════════════════════════════════════════════════════════════ */
let galleryImages = [];
let galleryIndex = 0;

function renderGalleryMain() {
  const container = document.querySelector('.gallery-main');
  if (!container) return;

  const url = galleryImages[galleryIndex];
  const counter = container.querySelector('.gallery-counter');
  if (counter) counter.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;

  const img = container.querySelector('.gallery-main-img');
  if (img && url) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = url;
      img.onload = () => { img.style.opacity = '1'; };
      img.onerror = () => { img.src = ''; img.style.opacity = '0'; };
    }, 80);
  }

  // Update thumb active states
  document.querySelectorAll('.gallery-thumb').forEach((th, i) => {
    th.classList.toggle('active', i === galleryIndex);
  });
}

function galleryNext() {
  if (galleryImages.length === 0) return;
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
  renderGalleryMain();
}
function galleryPrev() {
  if (galleryImages.length === 0) return;
  galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
  renderGalleryMain();
}

function buildGalleryHTML(images) {
  const thumbsHTML = images.map((url, i) => `
    <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="galleryIndex=${i};renderGalleryMain()">
      <img src="${url}" alt="Game image ${i+1}" loading="lazy">
    </div>
  `).join('');

  return `
    <div class="modal-gallery">
      <div class="gallery-main">
        <img class="gallery-main-img" src="${images[0] || ''}" alt="Game image" style="transition:opacity 0.3s ease;">
        <div class="gallery-nav">
          <button class="gallery-nav-btn" onclick="galleryPrev()">‹</button>
          <button class="gallery-nav-btn" onclick="galleryNext()">›</button>
        </div>
        <div class="gallery-counter">1 / ${images.length}</div>
      </div>
      <div class="gallery-thumbs">${thumbsHTML}</div>
    </div>
  `;
}

function buildGalleryLoadingHTML(gradient) {
  return `
    <div class="modal-gallery">
      <div class="gallery-main">
        <div class="gallery-placeholder" style="background:${gradient};height:320px;">
          <div class="gallery-loading">
            <div class="gallery-spinner"></div>
            <span style="font-family:var(--font-display);font-size:0.65rem;letter-spacing:0.2em;color:var(--ivory-mid);text-transform:uppercase;">Loading images…</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════════════════════════════════
   MODAL
══════════════════════════════════════════════════════════════════ */
let modalOpen = false;

async function openGameModal(gameId) {
  const game = GAMES.find(g => g.id === gameId);
  if (!game) return;

  const cat = CATEGORIES[game.category];
  const backdrop = document.getElementById('modalBackdrop');
  const modal = document.getElementById('gameModal');
  if (!backdrop || !modal) return;

  galleryIndex = 0;
  galleryImages = [];

  // Open modal immediately with skeleton content
  modal.querySelector('.modal-eyebrow').textContent =
    currentLang === 'fr' ? (cat?.labelFr || cat?.label) : (cat?.label || '');
  modal.querySelector('.modal-title').textContent = game.name;
  modal.querySelector('.modal-subtitle').textContent = game.subtitle || '';

  const statsEl = modal.querySelector('.modal-stats');
  statsEl.innerHTML = `
    <span class="stat-pill">👥 ${game.players.display}</span>
    <span class="stat-pill">⏱ ${game.duration.display}</span>
    ${game.bggWeight ? `<span class="stat-pill">⚖ ${game.bggWeight.toFixed(1)}</span>` : ''}
    ${game.year ? `<span class="stat-pill">📅 ${game.year}</span>` : ''}
    ${game.artisan ? '<span class="stat-pill">✦ Artisan</span>' : ''}
  `;

  modal.querySelector('.modal-meta').innerHTML = `
    <div class="publisher-line">${game.publisher}${game.designer && game.designer !== game.publisher ? ' · ' + game.designer : ''}${game.year ? ' · ' + game.year : ''}</div>
    <div class="setting-line">⚑ ${game.setting}</div>
  `;
  modal.querySelector('.modal-description').innerHTML = `<p>${t(game, 'description')}</p>`;
  modal.querySelector('.quick-start-text').innerHTML = t(game, 'quickStart').replace(/\n/g, '<br>');

  const artisanBlock = modal.querySelector('.modal-artisan-note');
  if (game.artisan && game.artisanNote) {
    artisanBlock.style.display = 'flex';
    artisanBlock.querySelector('.artisan-note-text').textContent = game.artisanNote;
  } else {
    artisanBlock.style.display = 'none';
  }

  const pdfBtn = modal.querySelector('.btn-pdf');
  if (game.pdfFile) { pdfBtn.href = game.pdfFile; pdfBtn.style.display = 'inline-flex'; }
  else pdfBtn.style.display = 'none';

  const bggBtn = modal.querySelector('.btn-bgg');
  if (game.bggId) { bggBtn.href = `https://boardgamegeek.com/boardgame/${game.bggId}`; bggBtn.style.display = 'inline-flex'; }
  else bggBtn.style.display = 'none';

  // Show gallery loading state
  const galleryContainer = modal.querySelector('.modal-gallery-container');
  if (galleryContainer) galleryContainer.innerHTML = buildGalleryLoadingHTML(game.gradient);

  // Open modal
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalOpen = true;
  modal.scrollTop = 0;

  // Fetch images asynchronously
  try {
    let images = [];

    // 1. Try curated gallery images from game data
    if (game.galleryImages && game.galleryImages.length > 0) {
      images = [...game.galleryImages];
    }

    // 2. Add BGG cover if not already present
    if (game.bggId) {
      const cover = await fetchBGGCover(game.bggId);
      if (cover && !images.includes(cover)) images.unshift(cover);
    }

    // 3. Try BGG gallery API for additional images
    if (game.bggId && images.length < 5) {
      const bggGallery = await fetchBGGGallery(game.bggId, 6);
      bggGallery.forEach(url => {
        if (!images.includes(url)) images.push(url);
      });
    }

    // Fallback: single gradient placeholder
    if (images.length === 0) {
      if (galleryContainer) {
        galleryContainer.innerHTML = `
          <div class="modal-gallery">
            <div class="gallery-placeholder" style="background:${game.gradient};height:320px;display:flex;align-items:flex-end;padding:24px;">
              <span style="font-family:var(--font-heading);font-size:2.5rem;font-style:italic;color:rgba(255,255,255,0.18);">${game.name}</span>
            </div>
          </div>`;
      }
      return;
    }

    galleryImages = images;
    galleryIndex = 0;
    if (galleryContainer) galleryContainer.innerHTML = buildGalleryHTML(images);

  } catch (e) {
    if (galleryContainer) {
      galleryContainer.innerHTML = `
        <div class="modal-gallery">
          <div style="height:80px;display:flex;align-items:center;justify-content:center;border-bottom:1px solid var(--border-gold);">
            <span style="font-family:var(--font-display);font-size:0.65rem;letter-spacing:0.2em;color:var(--text-muted);text-transform:uppercase;">Images unavailable — visit BGG for photos</span>
          </div>
        </div>`;
    }
  }
}

function closeModal() {
  document.getElementById('modalBackdrop')?.classList.remove('open');
  document.body.style.overflow = '';
  modalOpen = false;
}

document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.getElementById('modalBackdrop');
  if (!backdrop) return;
  document.querySelector('.modal-close')?.addEventListener('click', closeModal);
  backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', e => {
    if (!modalOpen) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') galleryNext();
    if (e.key === 'ArrowLeft') galleryPrev();
  });
});

/* ══════════════════════════════════════════════════════════════════
   CARD BUILDER — with lazy image loading from BGG
══════════════════════════════════════════════════════════════════ */
function buildGameCard(game) {
  const cat = CATEGORIES[game.category];
  const desc = t(game, 'description');

  // Use a static cover URL if curated, else 1x1 transparent gif placeholder
  // (empty src would resolve to the page URL and trigger onerror before BGG fetch).
  const TRANSPARENT_PX = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  const hasImg = !!(game.cover || game.bggId);
  const staticAttr = game.cover ? ' data-static-cover="1"' : '';
  const initialSrc = game.cover || TRANSPARENT_PX;
  const initialClass = game.cover ? 'card-real-img loaded' : 'card-real-img loading';
  const bgFallbackStyle = game.cover
    ? `background:${game.gradient};position:absolute;inset:0;display:none;`
    : `background:${game.gradient};position:absolute;inset:0;`;
  const cardHTML = `
    <article class="game-card" onclick="openGameModal('${game.id}')" data-game-id="${game.id}">
      ${game.artisan ? '<div class="artisan-badge">✦ Artisan</div>' : ''}
      <div class="card-img">
        <div class="card-img-inner">
          <!-- Gradient fallback (hidden when a static cover is provided) -->
          <div class="card-img-bg" style="${bgFallbackStyle}">
            <div class="card-img-title">${game.name}${game.subtitle ? '<br>' + game.subtitle : ''}</div>
          </div>
          <!-- Real image (static cover or async BGG load) -->
          ${hasImg ? `<img class="${initialClass}" src="${initialSrc}" alt="${game.name}"${staticAttr} onerror="this.style.display='none';this.previousElementSibling.style.display='flex';" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">` : ''}
        </div>
      </div>
      <div class="card-body">
        <div class="card-category-tag">${currentLang === 'fr' ? cat?.labelFr || cat?.label : cat?.label || ''}</div>
        <div class="card-title">${game.name}</div>
        ${game.subtitle ? `<div class="card-subtitle">${game.subtitle}</div>` : ''}
        <div class="card-publisher">${game.publisher}</div>
        <div class="card-stats">
          <span class="stat-pill">👥 ${game.players.display}</span>
          <span class="stat-pill">⏱ ${game.duration.display}</span>
          ${game.bggWeight ? `<span class="stat-pill">⚖ ${game.bggWeight}</span>` : ''}
          ${game.travel ? '<span class="stat-pill">✈</span>' : ''}
        </div>
        <p class="card-desc">${desc}</p>
        <div class="card-footer">
          <button class="card-btn primary" onclick="event.stopPropagation();openGameModal('${game.id}')">
            ${currentLang === 'fr' ? 'Voir la fiche' : 'View Details'}
          </button>
          ${game.pdfFile ? `<a class="card-btn" href="${game.pdfFile}" target="_blank" onclick="event.stopPropagation()">📄 ${currentLang === 'fr' ? 'Règles' : 'Rules'}</a>` : ''}
        </div>
      </div>
    </article>
  `;
  return cardHTML;
}

/* Load BGG images for all visible cards in batches */
function loadVisibleCardImages() {
  const cards = document.querySelectorAll('.game-card[data-game-id]');
  const visibleGames = Array.from(cards).map(el => {
    const id = el.dataset.gameId;
    return { el, game: GAMES.find(g => g.id === id) };
  }).filter(({ game }) => game?.bggId);

  // Load in small batches with slight delays to avoid hammering BGG
  visibleGames.forEach(({ el, game }, i) => {
    setTimeout(() => loadCardImage(el, game), i * 80);
  });
}
