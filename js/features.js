// ╔══════════════════════════════════════════════════════════════════════╗
// ║          🚀  GREEN SCIENCE — ADVANCED FEATURES                      ║
// ║                                                                      ║
// ║  Quick Access Carousel · Scrollable Tags · Module Pinning            ║
// ║  Overflow Carousel · Admin Analytics                                 ║
// ╚══════════════════════════════════════════════════════════════════════╝


// ══════════════════════════════════════════════════
// §1  QUICK ACCESS CAROUSEL (data-driven)
// ══════════════════════════════════════════════════
//  Reads from quickAccessCards[] in data.js.
//  Auto-rotates every 6s. Manual arrows + dots + swipe.
//  Shows 4 per page on desktop, 2 on mobile.

var qaSlide = 0, qaTimer = null, qaPerPage = 4;

function renderQuickAccess() {
  var el = document.getElementById('quickAccessStrip');
  if (!el || typeof quickAccessCards === 'undefined') return;
  var cards = quickAccessCards;
  var arrowIcon = '<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  var total = cards.length;
  qaPerPage = window.innerWidth <= 768 ? 2 : 4;
  var pages = Math.ceil(total / qaPerPage);
  var needsCarousel = total > qaPerPage;

  var h = '';
  // Nav arrows
  if (needsCarousel) {
    h += '<div class="qa-nav">' +
      '<button class="qa-nav-btn" onclick="qaGo(-1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg></button>' +
      '<span class="qa-nav-counter" id="qaCounter">1/' + pages + '</span>' +
      '<button class="qa-nav-btn" onclick="qaGo(1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 6 15 12 9 18"/></svg></button>' +
    '</div>';
  }
  // Track
  h += '<div class="qa-viewport"><div class="qa-track" id="qaTrack" style="width:' + (pages * 100) + '%">';
  // Build pages
  for (var p = 0; p < pages; p++) {
    h += '<div class="qa-page" style="width:' + (100 / pages) + '%;display:grid;grid-template-columns:repeat(' + qaPerPage + ',1fr);gap:14px">';
    for (var ci = p * qaPerPage; ci < Math.min((p + 1) * qaPerPage, total); ci++) {
      var card = cards[ci];
      var link = card.href ? card.href : '#';
      var onclick = card.scrollTo
        ? ' onclick="document.getElementById(\'' + card.scrollTo + '\').scrollIntoView({behavior:\'smooth\'});return false;"'
        : '';
      var gradStyle = card.gradientCSS ? ' style="background:' + card.gradientCSS + '"' : '';
      h += '<a href="' + link + '" class="qa-card ' + card.gradient + '"' + onclick + gradStyle + '>' +
        (card.illustration || '') +
        '<div class="qa-content">' +
          '<div class="qa-badge">' + card.icon + ' ' + localText(card.badge) + '</div>' +
          '<div class="qa-title">' + localText(card.title) + '</div>' +
          '<div class="qa-count">' + (card.countFn ? card.countFn() : 0) + ' ' + tr(card.countLabel).toLowerCase() + '</div>' +
        '</div>' +
        '<div class="qa-arrow">' + arrowIcon + '</div></a>';
    }
    h += '</div>';
  }
  h += '</div></div>';
  // Dots
  if (needsCarousel) {
    h += '<div class="qa-dots">';
    for (var d = 0; d < pages; d++) h += '<button class="qa-dot' + (d === 0 ? ' active' : '') + '" onclick="qaGoTo(' + d + ')"></button>';
    h += '</div>';
  }
  el.innerHTML = h;
  qaSlide = 0; qaStartAuto();

  // Touch/swipe
  var vp = el.querySelector('.qa-viewport');
  if (vp) {
    var sx = 0, mx = 0;
    vp.addEventListener('touchstart', function(e){ sx = e.touches[0].clientX; mx = 0; }, {passive:true});
    vp.addEventListener('touchmove', function(e){ mx = e.touches[0].clientX - sx; }, {passive:true});
    vp.addEventListener('touchend', function(){ if (mx > 40) qaGo(-1); else if (mx < -40) qaGo(1); });
  }
}

function qaGo(dir) {
  var pages = Math.ceil(quickAccessCards.length / qaPerPage);
  qaSlide = (qaSlide + dir + pages) % pages;
  qaUpdateTrack(); qaStartAuto();
}
function qaGoTo(idx) { qaSlide = idx; qaUpdateTrack(); qaStartAuto(); }
function qaUpdateTrack() {
  var track = document.getElementById('qaTrack');
  if (!track) return;
  var isRTL = document.documentElement.dir === 'rtl';
  track.style.transform = 'translateX(' + (isRTL ? '' : '-') + (qaSlide * 100 / Math.ceil(quickAccessCards.length / qaPerPage)) + '%)';
  var pages = Math.ceil(quickAccessCards.length / qaPerPage);
  var counter = document.getElementById('qaCounter');
  if (counter) counter.textContent = (qaSlide + 1) + '/' + pages;
  document.querySelectorAll('.qa-dot').forEach(function(d,i){ d.classList.toggle('active', i === qaSlide); });
}
function qaStartAuto() {
  clearInterval(qaTimer);
  var pages = Math.ceil(quickAccessCards.length / qaPerPage);
  if (pages > 1) qaTimer = setInterval(function(){ qaGo(1); }, 6000);
}
// Recalculate on resize
window.addEventListener('resize', debounce(function() {
  var newPP = window.innerWidth <= 768 ? 2 : 4;
  if (newPP !== qaPerPage) { qaPerPage = newPP; renderQuickAccess(); }
}, 300));


// ══════════════════════════════════════════════════
// §2  SCROLLABLE CATEGORY TABS (with arrows)
// ══════════════════════════════════════════════════

function renderCatTabs() {
  var el = document.getElementById('moduleCatTabs');
  if (!el) return;
  var counts = {};
  var total = modules.length;
  modules.forEach(function(mod) {
    var sc = (typeof moduleSuperCategories !== 'undefined' && moduleSuperCategories[mod.id]) || 'other';
    counts[sc] = (counts[sc] || 0) + 1;
  });
  var h = '<div class="cat-scroll-wrap">';
  h += '<button class="cat-scroll-arrow cat-arrow-l" onclick="scrollCatTabs(-1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg></button>';
  h += '<div class="cat-scroll-inner" id="catTabsScroll">';
  // All tab
  h += '<button class="module-cat-tab' + (activeSuperCat === 'all' ? ' active' : '') + '" onclick="filterModules(\'all\')">📋 ' + tr('catFilterAll') + ' <span class="cat-count">(' + total + ')</span></button>';
  superCategoryOrder.forEach(function(catId) {
    var c = counts[catId] || 0;
    if (c === 0) return;
    h += '<button class="module-cat-tab' + (activeSuperCat === catId ? ' active' : '') + '" onclick="filterModules(\'' + catId + '\')">' +
      superCategoryIcons[catId] + ' ' + tr(superCategoryLabels[catId]) +
      ' <span class="cat-count">(' + c + ')</span></button>';
  });
  h += '</div>';
  h += '<button class="cat-scroll-arrow cat-arrow-r" onclick="scrollCatTabs(1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 6 15 12 9 18"/></svg></button>';
  h += '</div>';
  el.innerHTML = h;
  setTimeout(updateCatArrows, 50);
}

function scrollCatTabs(dir) {
  var c = document.getElementById('catTabsScroll');
  if (c) c.scrollBy({ left: dir * 180, behavior: 'smooth' });
  setTimeout(updateCatArrows, 400);
}

function updateCatArrows() {
  var c = document.getElementById('catTabsScroll');
  if (!c) return;
  var wrap = c.closest('.cat-scroll-wrap');
  if (!wrap) return;
  var al = wrap.querySelector('.cat-arrow-l');
  var ar = wrap.querySelector('.cat-arrow-r');
  if (al) al.style.opacity = c.scrollLeft <= 4 ? '0.2' : '1';
  if (ar) ar.style.opacity = (c.scrollLeft + c.clientWidth >= c.scrollWidth - 4) ? '0.2' : '1';
}


// ══════════════════════════════════════════════════
// §3  MODULE PINNING SYSTEM
// ══════════════════════════════════════════════════
//  Users pin up to MODULES_GRID_LIMIT (12) modules.
//  Stored in localStorage. Excess modules go to overflow carousel.

function getPinnedModules() {
  try { var r = localStorage.getItem('gs_pinned'); if (r) return JSON.parse(r); } catch(e){}
  return null;
}
function savePinnedModules(arr) {
  try { localStorage.setItem('gs_pinned', JSON.stringify(arr)); } catch(e){}
}
function isPinned(modId) {
  var p = getPinnedModules();
  return p ? p.indexOf(modId) !== -1 : false;
}
function togglePin(modId) {
  var limit = typeof MODULES_GRID_LIMIT !== 'undefined' ? MODULES_GRID_LIMIT : 12;
  var p = getPinnedModules();
  if (!p) p = modules.slice(0, limit).map(function(m){ return m.id; });
  var idx = p.indexOf(modId);
  if (idx !== -1) { p.splice(idx, 1); }
  else { if (p.length >= limit) return false; p.push(modId); }
  savePinnedModules(p);
  return true;
}


// ══════════════════════════════════════════════════
// §4  MODULE GRID + OVERFLOW CAROUSEL
// ══════════════════════════════════════════════════

var modOfSlide = 0;

function renderModuleGrid(activeSuperCat) {
  var g = document.getElementById('grid');
  var overflow = document.getElementById('moduleOverflow');
  var viewAll = document.getElementById('viewAllModulesLink');
  if (!g) return;
  g.innerHTML = '';
  if (overflow) overflow.innerHTML = '';
  if (viewAll) viewAll.style.display = 'none';

  var limit = typeof MODULES_GRID_LIMIT !== 'undefined' ? MODULES_GRID_LIMIT : 12;

  // Filter
  var filtered = modules.filter(function(mod) {
    if (activeSuperCat === 'all') return true;
    var sc = (typeof moduleSuperCategories !== 'undefined' && moduleSuperCategories[mod.id]) || 'other';
    return sc === activeSuperCat;
  });

  // Sort: pinned first, then alphabetical
  var pinned = getPinnedModules();
  var sorted = filtered.slice().sort(function(a, b) {
    if (pinned) {
      var aP = pinned.indexOf(a.id) !== -1 ? 0 : 1;
      var bP = pinned.indexOf(b.id) !== -1 ? 0 : 1;
      if (aP !== bP) return aP - bP;
    }
    return localText(a.title).localeCompare(localText(b.title), currentLang);
  });

  var main = sorted.slice(0, limit);
  var extra = sorted.slice(limit);

  // Main grid
  main.forEach(function(mod) { g.appendChild(buildModCard(mod)); });

  // Overflow carousel
  if (extra.length > 0 && overflow) {
    var oh = '<div class="section-label" style="margin-top:28px"><span>' + tr('moreModules') + ' (' + extra.length + ')</span></div>';
    oh += '<div class="mod-of-wrap">';
    oh += '<button class="mod-of-arrow" onclick="modOfGo(-1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg></button>';
    oh += '<div class="mod-of-viewport"><div class="mod-of-track" id="modOfTrack">';
    extra.forEach(function(mod) {
      oh += '<div class="mod-of-slide">' + buildModCardHTML(mod) + '</div>';
    });
    oh += '</div></div>';
    oh += '<button class="mod-of-arrow" onclick="modOfGo(1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 6 15 12 9 18"/></svg></button>';
    oh += '</div>';
    overflow.innerHTML = oh;
    modOfSlide = 0;
  }

  // View all link
  if (modules.length > limit && viewAll) {
    viewAll.style.display = 'block';
    viewAll.innerHTML = '<a href="pages/modules.html" class="view-all-btn">' + tr('viewAllModules') +
      ' (' + modules.length + ') <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:14px;height:14px;vertical-align:middle"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>';
  }
}

function buildModCard(mod) {
  var a = document.createElement('a');
  a.href = 'pages/module.html?id=' + mod.id;
  a.className = 'card';
  a.innerHTML = buildModCardInner(mod);
  return a;
}
function buildModCardHTML(mod) {
  return '<a href="pages/module.html?id=' + mod.id + '" class="card">' + buildModCardInner(mod) + '</a>';
}
function buildModCardInner(mod) {
  var subC = mod.subModules ? mod.subModules.length : 0;
  var topC = mod.subModules ? mod.subModules.reduce(function(s,sm){ return s + (sm.topics ? sm.topics.length : 0); }, 0) : 0;
  var grad = catGradients[mod.category] || catGradients.general;
  var clipSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5h6"/></svg>';
  var arrSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  return '<div class="card-top">' +
    '<div class="card-icon" style="background:' + grad + '">' + mod.icon + '</div>' +
    '<div class="card-info"><div class="card-title">' + localText(mod.title) + '</div>' +
    '<div class="card-desc">' + localText(mod.description) + '</div></div></div>' +
    '<div class="card-stats">' +
      '<span class="stat">' + clipSvg + subC + ' ' + tr('subModulesLabel').toLowerCase() + '</span>' +
      '<span class="stat-dot">·</span>' +
      '<span class="stat">' + topC + ' ' + tr('topicsLabel').toLowerCase() + '</span>' +
      '<div class="card-arrow">' + arrSvg + '</div></div>';
}

function modOfGo(dir) {
  var track = document.getElementById('modOfTrack');
  if (!track || !track.children.length) return;
  var sw = track.children[0].offsetWidth + 14;
  var vis = Math.floor(track.parentElement.offsetWidth / sw) || 1;
  var max = Math.max(0, track.children.length - vis);
  modOfSlide = Math.max(0, Math.min(max, modOfSlide + dir));
  var isRTL = document.documentElement.dir === 'rtl';
  track.style.transform = 'translateX(' + (isRTL ? '' : '-') + (modOfSlide * sw) + 'px)';
}


// ══════════════════════════════════════════════════
// §5  SITE ANALYTICS (admin-only)
// ══════════════════════════════════════════════════
//  Tracks page views, sessions, top pages, referrers.
//  Activated by typing ADMIN_KEY on keyboard (default: 'greenadmin').

var _adminMode = false, _adminBuf = '';

function trackPageView() {
  try {
    var st = JSON.parse(localStorage.getItem('gs_stats') || '{}');
    var today = new Date().toISOString().slice(0, 10);
    var page = location.pathname + location.search;
    st.totalViews = (st.totalViews || 0) + 1;
    if (!st.daily) st.daily = {};
    st.daily[today] = (st.daily[today] || 0) + 1;
    if (!st.pages) st.pages = {};
    st.pages[page] = (st.pages[page] || 0) + 1;
    if (!st.visitorId) st.visitorId = 'v' + Date.now() + Math.random().toString(36).substr(2, 4);
    if (!st.visitors) st.visitors = {};
    st.visitors[st.visitorId] = today;
    if (!st.firstVisit) st.firstVisit = today;
    st.lastVisit = today;
    var sk = 'gs_sess';
    if (!sessionStorage.getItem(sk)) { sessionStorage.setItem(sk, '1'); st.sessions = (st.sessions || 0) + 1; }
    if (document.referrer && document.referrer.indexOf(location.hostname) === -1) {
      if (!st.refs) st.refs = {};
      try { var rh = new URL(document.referrer).hostname; st.refs[rh] = (st.refs[rh] || 0) + 1; } catch(e){}
    }
    // Browser info
    if (!st.browsers) st.browsers = {};
    var ua = navigator.userAgent;
    var br = /Firefox/.test(ua) ? 'Firefox' : /Edg/.test(ua) ? 'Edge' : /Chrome/.test(ua) ? 'Chrome' : /Safari/.test(ua) ? 'Safari' : 'Other';
    st.browsers[br] = (st.browsers[br] || 0) + 1;
    // Device
    if (!st.devices) st.devices = {};
    var dv = window.innerWidth < 768 ? 'Mobile' : window.innerWidth < 1024 ? 'Tablet' : 'Desktop';
    st.devices[dv] = (st.devices[dv] || 0) + 1;
    localStorage.setItem('gs_stats', JSON.stringify(st));
  } catch(e){}
}

function renderAdminPanel() {
  var existing = document.getElementById('gsAdminPanel');
  if (existing) { existing.remove(); _adminMode = false; return; }
  _adminMode = true;
  var st;
  try { st = JSON.parse(localStorage.getItem('gs_stats') || '{}'); } catch(e){ st = {}; }
  var today = new Date().toISOString().slice(0, 10);

  // Last 14 days chart
  var days = [];
  for (var i = 13; i >= 0; i--) {
    var d = new Date(); d.setDate(d.getDate() - i);
    var k = d.toISOString().slice(0, 10);
    days.push({ label: k.slice(5), val: (st.daily && st.daily[k]) || 0 });
  }
  var maxV = Math.max.apply(null, days.map(function(d){ return d.val; })) || 1;

  // Top pages
  var pgs = st.pages || {};
  var topP = Object.keys(pgs).sort(function(a,b){ return pgs[b]-pgs[a]; }).slice(0, 8);

  var uniqueV = st.visitors ? Object.keys(st.visitors).length : 0;

  var panel = document.createElement('div');
  panel.id = 'gsAdminPanel';
  panel.className = 'admin-panel';
  var h = '<div class="admin-hdr"><h2>📊 Site Analytics</h2><button onclick="document.getElementById(\'gsAdminPanel\').remove()">✕</button></div>';

  // Stats row
  h += '<div class="admin-row">' +
    '<div class="admin-kpi"><div class="admin-kpi-n">' + (st.totalViews || 0) + '</div><div class="admin-kpi-l">Total Views</div></div>' +
    '<div class="admin-kpi"><div class="admin-kpi-n">' + uniqueV + '</div><div class="admin-kpi-l">Unique Visitors</div></div>' +
    '<div class="admin-kpi"><div class="admin-kpi-n">' + (st.sessions || 0) + '</div><div class="admin-kpi-l">Sessions</div></div>' +
    '<div class="admin-kpi"><div class="admin-kpi-n">' + ((st.daily && st.daily[today]) || 0) + '</div><div class="admin-kpi-l">Today</div></div>' +
    '</div>';

  // Bar chart
  h += '<div class="admin-section-title">Last 14 Days</div><div class="admin-chart">';
  days.forEach(function(d) {
    var pct = Math.max(6, (d.val / maxV) * 100);
    h += '<div class="admin-bar-col" title="' + d.label + ': ' + d.val + '"><div class="admin-bar" style="height:' + pct + '%"></div><span class="admin-bar-lbl">' + d.label + '</span></div>';
  });
  h += '</div>';

  // Top pages table
  h += '<div class="admin-section-title">Top Pages</div><div class="admin-table">';
  topP.forEach(function(p, i) {
    h += '<div class="admin-table-row"><span>#' + (i+1) + '</span><span class="admin-page-url">' + p + '</span><span>' + pgs[p] + '</span></div>';
  });
  h += '</div>';

  // Browsers + Devices
  h += '<div class="admin-row">';
  h += '<div class="admin-mini"><div class="admin-section-title">Browsers</div>';
  var brs = st.browsers || {};
  Object.keys(brs).sort(function(a,b){ return brs[b]-brs[a]; }).forEach(function(b) {
    h += '<div class="admin-table-row"><span>' + b + '</span><span>' + brs[b] + '</span></div>';
  });
  h += '</div>';
  h += '<div class="admin-mini"><div class="admin-section-title">Devices</div>';
  var dvs = st.devices || {};
  Object.keys(dvs).sort(function(a,b){ return dvs[b]-dvs[a]; }).forEach(function(d) {
    h += '<div class="admin-table-row"><span>' + d + '</span><span>' + dvs[d] + '</span></div>';
  });
  h += '</div></div>';

  // Meta
  h += '<div class="admin-meta">First visit: ' + (st.firstVisit || '—') + ' · Last: ' + (st.lastVisit || '—') + '</div>';
  h += '<button class="admin-reset" onclick="if(confirm(\'Reset all analytics?\')){localStorage.removeItem(\'gs_stats\');document.getElementById(\'gsAdminPanel\').remove();}">🗑 Reset Data</button>';

  panel.innerHTML = h;
  document.body.appendChild(panel);
}

// Admin key listener
document.addEventListener('keypress', function(e) {
  if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
  _adminBuf += e.key;
  if (_adminBuf.length > 30) _adminBuf = _adminBuf.slice(-30);
  var key = typeof ADMIN_KEY !== 'undefined' ? ADMIN_KEY : 'greenadmin';
  if (_adminBuf.endsWith(key)) { _adminBuf = ''; renderAdminPanel(); }
});

// Track on every page load
trackPageView();
