<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { languages, locale, t as translate, setLocale, htmlLang, isRtl, currentLanguage } from '../i18n'

function t(key, params) {
  locale.value
  return translate(key, params)
}

const langOpen = ref(false)
const menuOpen = ref(false)
const scrolled = ref(false)

const navItems = computed(() => [
  { href: '#story', label: t('site.nav.story') },
  { href: '#heritage', label: t('site.nav.heritage') },
  { href: '#flagship', label: t('site.nav.flagship') },
  { href: '#vision', label: t('site.nav.vision') }
])

const timeline = computed(() => [
  { year: t('toc.earlyHistory'), text: t('article.earlyHistory') },
  { year: t('toc.1900s'), text: t('article.p1900s1') },
  { year: t('toc.2000s'), text: t('article.p2000s1') },
  { year: t('toc.2010s'), text: t('article.p2010s1') },
  { year: t('toc.acquisition'), text: t('article.pAcq2') },
  { year: t('toc.bankruptcy'), text: t('article.pBank4') }
])

const flags = computed(() => [
  {
    title: t('site.flag1'),
    text: t('article.flag1'),
    image: '/images/flag-1.jpg'
  },
  {
    title: t('site.flag2'),
    text: t('article.flag2'),
    image: '/images/flag-2.jpg'
  },
  {
    title: t('site.flag3'),
    text: t('article.flag3'),
    image: '/images/flag-3.jpg'
  },
  {
    title: t('site.flag4'),
    text: t('article.flag4'),
    image: '/images/flag-4.jpg'
  },
  {
    title: t('site.flag5'),
    text: t('article.flag5'),
    image: '/images/flag-5.jpg'
  },
  {
    title: t('site.flag6'),
    text: t('article.flag6'),
    image: '/images/flag-6.jpg'
  }
])

function switchLanguage(code) {
  setLocale(code)
  langOpen.value = false
  menuOpen.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function onDocClick(event) {
  if (!event.target.closest?.('.lang-switch')) langOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onDocClick)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onDocClick)
})
</script>

<template>
  <div class="site" :lang="htmlLang" :dir="isRtl ? 'rtl' : 'ltr'">
    <header class="header" :class="{ scrolled }">
      <div class="header-inner">
        <a class="wordmark" href="#top">Belk</a>

        <nav class="nav" :class="{ open: menuOpen }" :aria-label="t('site.menu')">
          <a v-for="item in navItems" :key="item.href" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
        </nav>

        <div class="header-actions">
          <div class="lang-switch">
            <button type="button" class="lang-btn" :aria-expanded="langOpen" :aria-label="t('site.language')"
              @click.stop="langOpen = !langOpen">
              {{ currentLanguage.nativeName }}
              <span class="chevron" />
            </button>
            <ul v-show="langOpen" class="lang-menu">
              <li v-for="lang in languages" :key="lang.code">
                <button type="button" :class="{ active: locale === lang.code }" @click="switchLanguage(lang.code)">
                  {{ lang.nativeName }}
                </button>  
              </li>
            </ul>
          </div>
          <a class="ghost-link" href="https://belkshop.cc/" target="_blank" rel="noreferrer">{{ t('ui.logIn') }}</a>
          <a class="gold-link" href="https://belkshop.cc/#/register" target="_blank" rel="noreferrer">{{ t('ui.createAccount') }}</a>
          <button type="button" class="menu-btn" :aria-label="t('site.menu')" @click="menuOpen = !menuOpen">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <img
          class="hero-image"
          src="/images/hero.jpg"
          alt="Belk"
        />
        <div class="hero-veil" />
        <div class="hero-copy">
          <p class="eyebrow light">{{ t('site.kicker') }}</p>
          <h1>{{ t('page.title') }}</h1>
          <p class="slogan">{{ t('site.slogan') }}</p>
          <p class="lede">{{ t('site.heroTitle') }}</p>
          <p class="hero-text">{{ t('article.lead') }}</p>
          <div class="hero-actions">
            <a class="btn solid" href="#story">{{ t('site.ctaStory') }}</a>
            <a class="btn outline" href="https://belkshop.cc/" target="_blank" rel="noreferrer">{{ t('site.ctaShop') }}</a>
          </div>
        </div>
      </section>

      <section class="stats">
        <div class="stat">
          <span>1888</span>
          <small>{{ t('site.stat.year') }}</small>
        </div>
        <div class="stat">
          <span>293</span>
          <small>{{ t('site.stat.stores') }}</small>
        </div>
        <div class="stat">
          <span>16</span>
          <small>{{ t('site.stat.states') }}</small>
        </div>
        <div class="stat">
          <span>{{ t('site.stat.hqValue') }}</span>
          <small>{{ t('site.stat.hq') }}</small>
        </div>
      </section>

      <section id="story" class="split">
        <div class="split-media">
          <img
            src="/images/story.jpg"
            :alt="t('article.fig1902')"
          />
          <p class="caption">{{ t('article.fig1902') }}</p>
        </div>
        <div class="split-copy">
          <p class="eyebrow">{{ t('site.eyebrow.story') }}</p>
          <h2>{{ t('site.section.story') }}</h2>
          <p>{{ t('article.earlyHistory') }}</p>
          <p>{{ t('article.p1900s2') }}</p>
        </div>
      </section>

      <section id="heritage" class="heritage">
        <div class="section-head">
          <p class="eyebrow">{{ t('site.eyebrow.heritage') }}</p>
          <h2>{{ t('site.section.heritage') }}</h2>
        </div>
        <ol class="timeline">
          <li v-for="item in timeline" :key="item.year">
            <div class="year">{{ item.year }}</div>
            <p>{{ item.text }}</p>
          </li>
        </ol>
      </section>

      <section class="brand">
        <div class="section-head">
          <p class="eyebrow">{{ t('site.eyebrow.brand') }}</p>
          <h2>{{ t('site.section.brand') }}</h2>
        </div>
        <div class="brand-grid">
          <figure>
            <img src="/images/logo-old.png" :alt="t('article.logoOld')" />
            <figcaption>{{ t('article.logoOld') }}</figcaption>
          </figure>
          <figure>
            <img src="/images/logo-new.svg" :alt="t('article.logoNew')" />
            <figcaption>{{ t('article.logoNew') }}</figcaption>
          </figure>
        </div>
        <p class="brand-note">{{ t('article.sponsorships') }}</p>
      </section>

      <section id="flagship" class="flagship">
        <div class="section-head">
          <p class="eyebrow">{{ t('site.eyebrow.flagship') }}</p>
          <h2>{{ t('site.section.flagship') }}</h2>
          <p>{{ t('article.flagshipIntro') }}</p>
        </div>
        <div class="cards">
          <article v-for="flag in flags" :key="flag.title" class="card">
            <div class="card-image">
              <img :src="flag.image" :alt="flag.title" />
            </div>
            <div class="card-body">
              <h3>{{ flag.title }}</h3>
              <p>{{ flag.text }}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="vision" class="vision">
        <p class="eyebrow light">{{ t('site.eyebrow.vision') }}</p>
        <h2>{{ t('site.section.vision') }}</h2>
        <p>{{ t('article.pGrowth2') }}</p>
        <a class="btn solid" href="https://belkshop.cc/" target="_blank" rel="noreferrer">{{ t('site.ctaShop') }}</a>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-brand">Belk</div>
      <p>{{ t('site.slogan') }}</p>
      <p class="fine">© 2026 Belk, Inc. {{ t('site.footer.rights') }}</p>
    </footer>
  </div>
</template>

<style scoped>
.site {
  min-height: 100vh;
  background: #f4efe6;
  color: #1c1814;
}

.header {
  position: sticky;
  top: 0;
  z-index: 40;
  border-bottom: 1px solid transparent;
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
}

.header.scrolled {
  background: rgba(244, 239, 230, 0.92);
  border-bottom-color: rgba(28, 24, 20, 0.08);
  backdrop-filter: blur(16px);
}

.header-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 1.1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.wordmark {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.85rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
}

.nav {
  display: flex;
  gap: 1.6rem;
  margin-inline-start: auto;
}

.nav a {
  text-decoration: none;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #5c534a;
}

.nav a:hover {
  color: #1c1814;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.ghost-link,
.gold-link {
  text-decoration: none;
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.ghost-link {
  color: #5c534a;
}

.gold-link {
  padding: 0.55rem 0.9rem;
  border: 1px solid #b8954f;
  color: #8a6b2d;
}

.lang-switch {
  position: relative;
}

.lang-btn,
.menu-btn {
  background: none;
  border: 0;
  cursor: pointer;
  color: inherit;
}

.lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  padding: 0.4rem 0;
}

.chevron {
  width: 0.4rem;
  height: 0.4rem;
  border-inline-end: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  transform: rotate(45deg);
  margin-top: -0.2rem;
}

.lang-menu {
  position: absolute;
  inset-inline-end: 0;
  top: calc(100% + 0.5rem);
  margin: 0;
  padding: 0.4rem;
  list-style: none;
  min-width: 11rem;
  background: #fffaf3;
  border: 1px solid rgba(28, 24, 20, 0.08);
  box-shadow: 0 18px 40px rgba(28, 24, 20, 0.12);
}

.lang-menu button {
  width: 100%;
  text-align: start;
  background: none;
  border: 0;
  padding: 0.55rem 0.7rem;
  cursor: pointer;
}

.lang-menu button.active,
.lang-menu button:hover {
  background: #efe6d6;
}

.menu-btn {
  display: none;
  width: 2rem;
  height: 2rem;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.menu-btn span {
  display: block;
  height: 1px;
  background: #1c1814;
}

.hero {
  position: relative;
  min-height: 88vh;
  display: grid;
  align-items: end;
  overflow: hidden;
  color: #f7f1e6;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(18, 14, 10, 0.18) 0%, rgba(18, 14, 10, 0.72) 72%);
}

.hero-copy {
  position: relative;
  max-width: 1240px;
  margin: 0 auto;
  padding: 5rem 1.5rem 4.2rem;
}

.eyebrow {
  margin: 0 0 0.8rem;
  font-size: 0.72rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #8a6b2d;
}

.eyebrow.light {
  color: #d4bc82;
}

h1,
h2,
h3,
.slogan,
.lede {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 500;
}

h1 {
  margin: 0;
  font-size: clamp(4.2rem, 10vw, 8.4rem);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  line-height: 0.9;
}

.slogan {
  margin: 1rem 0 0;
  font-size: 1.45rem;
  font-style: italic;
  letter-spacing: 0.08em;
}

.lede {
  margin: 0.35rem 0 1.1rem;
  font-size: 1.7rem;
}

.hero-text,
.split-copy p,
.timeline p,
.brand-note,
.card p,
.vision p,
.section-head p:last-child {
  line-height: 1.75;
  color: #5c534a;
}

.hero-text {
  max-width: 42rem;
  color: rgba(247, 241, 230, 0.82);
}

.hero-actions,
.stats,
.brand-grid,
.cards {
  display: flex;
  gap: 0.9rem;
}

.hero-actions {
  margin-top: 1.8rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0 1.3rem;
  text-decoration: none;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.btn.solid {
  background: #b8954f;
  color: #1c1814;
}

.btn.outline {
  border: 1px solid rgba(247, 241, 230, 0.55);
  color: #f7f1e6;
}

.stats {
  max-width: 1240px;
  margin: 0 auto;
  padding: 2.4rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.stat {
  padding: 1.4rem 0;
  border-top: 1px solid rgba(184, 149, 79, 0.35);
}

.stat span {
  display: block;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem;
}

.stat small {
  color: #8a8176;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.68rem;
}

.split,
.heritage,
.brand,
.flagship {
  max-width: 1240px;
  margin: 0 auto;
  padding: 4.5rem 1.5rem;
}

.split {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 3.5rem;
  align-items: center;
}

.split-media img {
  width: 100%;
  height: 34rem;
  object-fit: cover;
}

.caption,
figcaption,
.fine {
  color: #8a8176;
  font-size: 0.82rem;
}

h2 {
  margin: 0 0 1.2rem;
  font-size: clamp(2.2rem, 4vw, 3.4rem);
}

.section-head {
  max-width: 40rem;
  margin-bottom: 2.4rem;
}

.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.6rem;
}

.timeline li {
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: 1.5rem;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid rgba(28, 24, 20, 0.08);
}

.year {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.25rem;
  color: #8a6b2d;
}

.brand-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.brand figure,
.card {
  background: #fffaf3;
  border: 1px solid rgba(28, 24, 20, 0.06);
}

.brand img {
  height: 8.5rem;
  width: auto;
  margin: 2.2rem auto 0;
  object-fit: contain;
}

.brand figcaption,
.card-body {
  padding: 1.2rem 1.4rem 1.5rem;
}

.brand-note {
  margin-top: 2rem;
  max-width: 48rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.card-image {
  overflow: hidden;
  height: 14rem;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.card:hover .card-image img {
  transform: scale(1.05);
}

.card h3 {
  margin: 0 0 0.6rem;
  font-size: 1.35rem;
}

.vision {
  margin: 2rem 1.5rem 4rem;
  padding: 4.5rem 1.5rem;
  background: #1c1814;
  color: #f7f1e6;
  text-align: center;
}

.vision p {
  max-width: 44rem;
  margin: 0 auto 2rem;
  color: rgba(247, 241, 230, 0.78);
}

.vision .btn.solid {
  background: #d4bc82;
}

.footer {
  padding: 3rem 1.5rem 4rem;
  text-align: center;
  border-top: 1px solid rgba(28, 24, 20, 0.08);
}

.footer-brand {
  font-family: 'Cormorant Garamond', Georgia, serif;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-size: 1.4rem;
}

@media (max-width: 980px) {
  .nav {
    display: none;
    position: absolute;
    inset-inline: 0;
    top: 100%;
    background: #f4efe6;
    flex-direction: column;
    padding: 1rem 1.5rem 1.4rem;
    border-bottom: 1px solid rgba(28, 24, 20, 0.08);
  }

  .nav.open {
    display: flex;
  }

  .header {
    position: sticky;
  }

  .header-inner {
    position: relative;
  }

  .menu-btn {
    display: inline-flex;
  }

  .ghost-link {
    display: none;
  }

  .split,
  .timeline li,
  .brand-grid,
  .cards,
  .stats {
    grid-template-columns: 1fr;
  }

  .split-media img {
    height: 22rem;
  }
}
</style>
