import { ref, computed, watch } from 'vue'
import { catalog } from './catalog.js'
import { zhHant } from './zh-hant.js'

export const languages = [
  { code: 'ar', nativeName: 'العربية', dir: 'rtl' },
  { code: 'ceb', nativeName: 'Cebuano', dir: 'ltr' },
  { code: 'da', nativeName: 'Dansk', dir: 'ltr' },
  { code: 'de', nativeName: 'Deutsch', dir: 'ltr' },
  { code: 'en', nativeName: 'English', dir: 'ltr' },
  { code: 'nl', nativeName: 'Nederlands', dir: 'ltr' },
  { code: 'simple', nativeName: 'Simple English', dir: 'ltr' },
  { code: 'ur', nativeName: 'اردو', dir: 'rtl' },
  { code: 'zh-hant', nativeName: '繁體中文', dir: 'ltr' }
]

const STORAGE_KEY = 'a8-locale'
const supported = new Set(languages.map((item) => item.code))

function readStoredLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (supported.has(stored)) return stored
  } catch {
    /* ignore */
  }
  return 'en'
}

export const locale = ref(readStoredLocale())

export const currentLanguage = computed(
  () => languages.find((item) => item.code === locale.value) || languages.find((item) => item.code === 'en')
)

export const isRtl = computed(() => currentLanguage.value?.dir === 'rtl')

export const htmlLang = computed(() => {
  if (locale.value === 'simple') return 'en'
  if (locale.value === 'zh-hant') return 'zh-Hant'
  return locale.value
})

function lookup(key, lang) {
  if (lang === 'zh-hant' && zhHant[key]) return zhHant[key]
  const entry = catalog[key]
  if (!entry) return key
  return entry[lang] || entry.en || key
}

export function t(key, params) {
  let text = lookup(key, locale.value)
  if (params) {
    Object.entries(params).forEach(([name, value]) => {
      text = String(text).replaceAll(`{${name}}`, String(value))
    })
  }
  return text
}

function applyDocumentLocale() {
  document.documentElement.lang = htmlLang.value
  document.documentElement.dir = isRtl.value ? 'rtl' : 'ltr'
  document.title = t('page.title')
}

export function setLocale(code) {
  if (!supported.has(code)) return
  locale.value = code
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    /* ignore */
  }
}

watch([locale], applyDocumentLocale, { immediate: true })
