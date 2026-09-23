/**
 * ============================================================================
 * NEXT GAMES/GAME — PRODUCTION AUDIT & LINK INTEGRITY TEST SUITE
 * ============================================================================
 * Audits:
 *   1. All `href` and `src` attributes in `index.html` and `contact.html`.
 *   2. Zero public references to the private `developer/` folder.
 *   3. Global footer and legally formatted copyright string compliance.
 *   4. Contact Us page structure, glowing SVG icons, and interactive directory.
 *   5. Navigation routing between Home, All Games, and Contact Us.
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const INDEX_HTML = path.join(ROOT_DIR, 'index.html');
const CONTACT_HTML = path.join(ROOT_DIR, 'contact.html');
const APP_JS = path.join(ROOT_DIR, 'js', 'app.js');
const STYLE_CSS = path.join(ROOT_DIR, 'css', 'style.css');
const SITE_CONFIG_JSON = path.join(ROOT_DIR, 'config', 'site-config.json');

const results = {
  passed: 0,
  failed: 0,
  errors: []
};

function assert(condition, message) {
  if (condition) {
    results.passed++;
    console.log(`  ✓ ${message}`);
  } else {
    results.failed++;
    results.errors.push(message);
    console.error(`  ✗ FAIL: ${message}`);
  }
}

function parseAttributes(html, attrName) {
  const regex = new RegExp(`${attrName}=["']([^"']+)["']`, 'gi');
  const matches = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    matches.push(match[1]);
  }
  return matches;
}

console.log('================================================================');
console.log('NEXT GAMES/GAME: PRODUCTION AUDIT & LINK INTEGRITY TEST');
console.log('================================================================\n');

// -----------------------------------------------------------------------------
// TEST 1: Audit HTML Files Existence & Non-Empty
// -----------------------------------------------------------------------------
console.log('[TEST 1] Verifying Public Page Entrypoints...');
assert(fs.existsSync(INDEX_HTML), 'index.html exists');
assert(fs.existsSync(CONTACT_HTML), 'contact.html exists');

const indexContent = fs.readFileSync(INDEX_HTML, 'utf8');
const contactContent = fs.readFileSync(CONTACT_HTML, 'utf8');

assert(indexContent.length > 5000, `index.html is robust (${indexContent.length} bytes)`);
assert(contactContent.length > 5000, `contact.html is robust (${contactContent.length} bytes)`);

// -----------------------------------------------------------------------------
// TEST 2: Strict Prohibition of `developer/` in Public HTML/JS Files
// -----------------------------------------------------------------------------
console.log('\n[TEST 2] Checking for Zero Public References to "developer/"...');
const indexDevMatches = indexContent.match(/href=["'][^"']*developer\/[^"']*["']/gi) || [];
assert(indexDevMatches.length === 0, `index.html has zero developer/ href links (found ${indexDevMatches.length})`);

const contactDevMatches = contactContent.match(/href=["'][^"']*developer\/[^"']*["']/gi) || [];
assert(contactDevMatches.length === 0, `contact.html has zero developer/ href links (found ${contactDevMatches.length})`);

const appJsContent = fs.readFileSync(APP_JS, 'utf8');
const appJsDevMatches = appJsContent.match(/["']developer\/[^"']*["']/gi) || [];
assert(appJsDevMatches.length === 0, `app.js has zero developer/ path strings (found ${appJsDevMatches.length})`);

// -----------------------------------------------------------------------------
// TEST 3: Audit all `href` and `src` attributes in index.html and contact.html
// -----------------------------------------------------------------------------
console.log('\n[TEST 3] Auditing Local Href and Src Link Targets...');

function auditHtmlLinks(filename, content) {
  const hrefs = parseAttributes(content, 'href');
  const srcs = parseAttributes(content, 'src');

  console.log(`  Scanning ${filename} (${hrefs.length} hrefs, ${srcs.length} srcs)...`);

  let brokenHrefs = 0;
  hrefs.forEach(href => {
    if (href.startsWith('#') || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
      return; // External or in-page anchor
    }
    const cleanPath = href.split('#')[0].split('?')[0];
    if (cleanPath.length === 0) return;
    const targetFile = path.join(ROOT_DIR, cleanPath);
    if (!fs.existsSync(targetFile)) {
      brokenHrefs++;
      assert(false, `${filename}: Dead href target "${href}" -> ${targetFile}`);
    }
  });
  if (brokenHrefs === 0) {
    assert(true, `${filename}: All internal href paths exist on disk`);
  }

  let brokenSrcs = 0;
  srcs.forEach(src => {
    if (src.startsWith('data:') || src === 'about:blank' || src.startsWith('http://') || src.startsWith('https://')) {
      return;
    }
    const cleanPath = src.split('#')[0].split('?')[0];
    const targetFile = path.join(ROOT_DIR, cleanPath);
    if (!fs.existsSync(targetFile)) {
      brokenSrcs++;
      assert(false, `${filename}: Dead src target "${src}" -> ${targetFile}`);
    }
  });
  if (brokenSrcs === 0) {
    assert(true, `${filename}: All internal src assets exist on disk`);
  }
}

auditHtmlLinks('index.html', indexContent);
auditHtmlLinks('contact.html', contactContent);

// -----------------------------------------------------------------------------
// TEST 4: Global Footer & Legal Copyright Verification
// -----------------------------------------------------------------------------
console.log('\n[TEST 4] Verifying Global Footer & Legal Copyright String...');
const requiredCopyrightPart = 'Next Games/Game. All Rights Reserved. Officially Registered Domain.';

assert(indexContent.includes(requiredCopyrightPart), 'index.html contains legal copyright string');
assert(contactContent.includes(requiredCopyrightPart), 'contact.html contains legal copyright string');

assert(indexContent.includes('class="site-footer"'), 'index.html contains .site-footer');
assert(contactContent.includes('class="site-footer"'), 'contact.html contains .site-footer');

assert(indexContent.includes('id="currentYear"') || indexContent.includes('class="dynamic-year"'), 'index.html has year element');
assert(contactContent.includes('id="currentYear"') || contactContent.includes('class="dynamic-year"'), 'contact.html has year element');

assert(appJsContent.includes('updateCopyrightYear'), 'app.js implements dynamic copyright year updater');

// -----------------------------------------------------------------------------
// TEST 5: Contact Us Directory Requirements
// -----------------------------------------------------------------------------
console.log('\n[TEST 5] Verifying Contact Us Page Directory & SVG Icons...');

assert(contactContent.includes('hq@next.gamer.free'), 'contact.html lists official email (hq@next.gamer.free)');
assert(contactContent.includes('+1 (555) 019-NEXT') || contactContent.includes('555 019 6398'), 'contact.html lists mobile/hotline number');
assert(contactContent.includes('wa.me'), 'contact.html contains direct WhatsApp link');
assert(contactContent.includes('github.com/rambir-bhatiwal/next-gamer-portal'), 'contact.html lists official GitHub repository URL');
assert(contactContent.includes('discord.gg/nextgames'), 'contact.html lists Discord server link');
assert(contactContent.includes('twitter.com/NextGamesGame'), 'contact.html lists Twitter/X link');

const svgCount = (contactContent.match(/<svg/gi) || []).length;
assert(svgCount >= 4, `contact.html contains glowing SVG icons (found ${svgCount} SVGs)`);

assert(contactContent.includes('id="contactForm"'), 'contact.html includes interactive inquiry form');

// -----------------------------------------------------------------------------
// TEST 6: Navigation Linkage & Routing
// -----------------------------------------------------------------------------
console.log('\n[TEST 6] Verifying Navigation Linkage & Routing...');

assert(indexContent.includes('href="contact.html"'), 'index.html links to contact.html in navigation or footer');
assert(contactContent.includes('href="index.html"'), 'contact.html links to index.html');
assert(contactContent.includes('href="index.html#gamesGallery"'), 'contact.html links to all games gallery');

// -----------------------------------------------------------------------------
// TEST 7: Glassmorphic Styling in CSS
// -----------------------------------------------------------------------------
console.log('\n[TEST 7] Verifying Glassmorphic CSS Definitions...');
const styleCssContent = fs.readFileSync(STYLE_CSS, 'utf8');

assert(styleCssContent.includes('.site-footer') && styleCssContent.includes('backdrop-filter'), 'style.css defines glassmorphic .site-footer');
assert(styleCssContent.includes('.contact-card') && styleCssContent.includes('backdrop-filter'), 'style.css defines glassmorphic .contact-card');
assert(styleCssContent.includes('.contact-directory-grid'), 'style.css defines .contact-directory-grid');
assert(styleCssContent.includes('.contact-form-wrapper'), 'style.css defines .contact-form-wrapper');

// -----------------------------------------------------------------------------
// SUMMARY
// -----------------------------------------------------------------------------
console.log('\n================================================================');
console.log(`TEST SUMMARY: ${results.passed} PASSED, ${results.failed} FAILED`);
console.log('================================================================');

if (results.failed > 0) {
  console.error('\nFAILED CHECKS:');
  results.errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log('\n🎉 ALL PRODUCTION AUDIT & LINK INTEGRITY CHECKS PASSED PERFECTLY!\n');
  process.exit(0);
}
