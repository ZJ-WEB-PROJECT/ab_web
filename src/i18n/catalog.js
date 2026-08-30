const L = (en, extras = {}) => ({ en, simple: extras.simple || en, ...extras })

export const catalog = {
  'page.title': L('Belk', {
    ar: 'بيلك',
    ceb: 'Belk',
    da: 'Belk',
    de: 'Belk',
    nl: 'Belk',
    ur: 'بیلک'
  }),
  'ui.search': L('Search', {
    ar: 'بحث',
    ceb: 'Pangitaa',
    da: 'Søg',
    de: 'Suchen',
    nl: 'Zoeken',
    simple: 'Search',
    ur: 'تلاش'
  }),
  'ui.searchWikipedia': L('Search Wikipedia', {
    ar: 'ابحث في ويكيبيديا',
    ceb: 'Pangitaa sa Wikipedia',
    da: 'Søg på Wikipedia',
    de: 'Wikipedia durchsuchen',
    nl: 'Zoek op Wikipedia',
    simple: 'Search Wikipedia',
    ur: 'ویکیپیڈیا تلاش کریں'
  }),
  'ui.searchTitle': L('Search Wikipedia [alt-f]', {
    ar: 'ابحث في ويكيبيديا [alt-f]',
    ceb: 'Pangitaa sa Wikipedia [alt-f]',
    da: 'Søg på Wikipedia [alt-f]',
    de: 'Wikipedia durchsuchen [alt-f]',
    nl: 'Zoek op Wikipedia [alt-f]',
    ur: 'ویکیپیڈیا تلاش کریں [alt-f]'
  }),
  'ui.appearance': L('Appearance', {
    ar: 'المظهر',
    ceb: 'Panagway',
    da: 'Udseende',
    de: 'Erscheinungsbild',
    nl: 'Weergave',
    ur: 'ظاہری شکل'
  }),
  'ui.appearanceTitle': L("Change the appearance of the page's font size, width, and color", {
    ar: 'غيّر حجم الخط وعرض الصفحة ولونها',
    ceb: 'Usba ang gidak-on sa letra, gilapdon, ug kolor sa panid',
    da: 'Skift sidens skriftstørrelse, bredde og farve',
    de: 'Schriftgröße, Breite und Farbe der Seite ändern',
    nl: 'Wijzig lettergrootte, breedte en kleur van de pagina',
    ur: 'صفحے کے فونٹ سائز، چوڑائی اور رنگ تبدیل کریں'
  }),
  'ui.donate': L('Donate', {
    ar: 'تبرّع',
    ceb: 'Donar',
    da: 'Donér',
    de: 'Spenden',
    nl: 'Doneren',
    ur: 'عطیہ دیں'
  }),
  'ui.createAccount': L('Create account', {
    ar: 'إنشاء حساب',
    ceb: 'Paghimo og account',
    da: 'Opret konto',
    de: 'Konto erstellen',
    nl: 'Account aanmaken',
    ur: 'اکاؤنٹ بنائیں'
  }),
  'ui.createAccountTitle': L('You are encouraged to create an account and log in; however, it is not mandatory', {
    ar: 'يُفضّل إنشاء حساب وتسجيل الدخول، لكنه غير إلزامي',
    ceb: 'Girekomenda nga maghimo og account ug mag-login, apan dili kinahanglan',
    da: 'Du opfordres til at oprette en konto og logge ind, men det er ikke obligatorisk',
    de: 'Sie können ein Konto erstellen und sich anmelden; es ist jedoch nicht erforderlich',
    nl: 'U wordt aangemoedigd een account aan te maken en in te loggen, maar het is niet verplicht',
    ur: 'اکاؤنٹ بنانا اور لاگ ان کرنا بہتر ہے، لیکن ضروری نہیں'
  }),
  'ui.logIn': L('Log in', {
    ar: 'تسجيل الدخول',
    ceb: 'Log in',
    da: 'Log ind',
    de: 'Anmelden',
    nl: 'Inloggen',
    ur: 'لاگ ان'
  }),
  'ui.logInTitle': L("You're encouraged to log in; however, it's not mandatory. [alt-o]", {
    ar: 'يُفضّل تسجيل الدخول، لكنه غير إلزامي. [alt-o]',
    ceb: 'Girekomenda nga mag-login, apan dili kinahanglan. [alt-o]',
    da: 'Du opfordres til at logge ind, men det er ikke obligatorisk. [alt-o]',
    de: 'Eine Anmeldung wird empfohlen, ist aber nicht erforderlich. [alt-o]',
    nl: 'Inloggen wordt aangeraden, maar is niet verplicht. [alt-o]',
    ur: 'لاگ ان کرنا بہتر ہے، لیکن ضروری نہیں۔ [alt-o]'
  }),
  'ui.personalTools': L('Personal tools', {
    ar: 'أدوات شخصية',
    ceb: 'Personal nga mga himan',
    da: 'Personlige værktøjer',
    de: 'Persönliche Werkzeuge',
    nl: 'Persoonlijke hulpmiddelen',
    ur: 'ذاتی ٹولز'
  }),
  'ui.contents': L('Contents', {
    ar: 'المحتويات',
    ceb: 'Mga sulod',
    da: 'Indhold',
    de: 'Inhaltsverzeichnis',
    nl: 'Inhoud',
    ur: 'فہرست'
  }),
  'ui.moveToSidebar': L('move to sidebar', {
    ar: 'نقل إلى الشريط الجانبي',
    ceb: 'ibalhin sa sidebar',
    da: 'flyt til sidebjælke',
    de: 'in die Seitenleiste verschieben',
    nl: 'naar zijbalk verplaatsen',
    ur: 'سائیڈ بار میں منتقل کریں'
  }),
  'ui.hide': L('hide', {
    ar: 'إخفاء',
    ceb: 'tago',
    da: 'skjul',
    de: 'ausblenden',
    nl: 'verbergen',
    ur: 'چھپائیں'
  }),
  'ui.top': L('(Top)', {
    ar: '(أعلى)',
    ceb: '(Ibabaw)',
    da: '(Top)',
    de: '(Anfang)',
    nl: '(Begin)',
    ur: '(اوپر)'
  }),
  'ui.toggleHistory': L('Toggle History subsection', {
    ar: 'إظهار/إخفاء قسم التاريخ',
    ceb: 'I-toggle ang subseksyon sa Kasaysayan',
    da: 'Skift visning af Historik-underafsnit',
    de: 'Unterabschnitt Geschichte ein-/ausblenden',
    nl: 'Subsectie Geschiedenis tonen/verbergen',
    ur: 'تاریخ ذیلی حصے کو کھولیں/بند کریں'
  }),
  'ui.nLanguages': L('{n} languages', {
    ar: '{n} لغات',
    ceb: '{n} ka mga pinulongan',
    da: '{n} sprog',
    de: '{n} Sprachen',
    nl: '{n} talen',
    simple: '{n} languages',
    ur: '{n} زبانیں'
  }),
  'ui.languagesDesc': L('Go to an article in another language. Available in {n} languages', {
    ar: 'انتقل إلى المقالة بلغة أخرى. متوفرة بـ {n} لغات',
    ceb: 'Adto sa artikulo sa laing pinulongan. Anaa sa {n} ka mga pinulongan',
    da: 'Gå til artiklen på et andet sprog. Tilgængelig på {n} sprog',
    de: 'Artikel in einer anderen Sprache anzeigen. Verfügbar in {n} Sprachen',
    nl: 'Ga naar het artikel in een andere taal. Beschikbaar in {n} talen',
    ur: 'مضمون دوسری زبان میں دیکھیں۔ {n} زبانوں میں دستیاب'
  }),
  'ui.article': L('Article', {
    ar: 'مقالة',
    ceb: 'Artikulo',
    da: 'Artikel',
    de: 'Artikel',
    nl: 'Artikel',
    ur: 'مضمون'
  }),
  'ui.talk': L('Talk', {
    ar: 'نقاش',
    ceb: 'Hisgot',
    da: 'Diskussion',
    de: 'Diskussion',
    nl: 'Overleg',
    ur: 'تبادلہ خیال'
  }),
  'ui.read': L('Read', {
    ar: 'اقرأ',
    ceb: 'Basaha',
    da: 'Læs',
    de: 'Lesen',
    nl: 'Lezen',
    ur: 'پڑھیں'
  }),
  'ui.edit': L('Edit', {
    ar: 'عدّل',
    ceb: 'Usba',
    da: 'Redigér',
    de: 'Bearbeiten',
    nl: 'Bewerken',
    ur: 'ترمیم'
  }),
  'ui.viewHistory': L('View history', {
    ar: 'اعرض التاريخ',
    ceb: 'Tan-awa ang kasaysayan',
    da: 'Se historik',
    de: 'Versionsgeschichte',
    nl: 'Geschiedenis weergeven',
    ur: 'تاریخچہ دیکھیں'
  }),
  'ui.actions': L('Actions', {
    ar: 'إجراءات',
    ceb: 'Mga aksyon',
    da: 'Handlinger',
    de: 'Aktionen',
    nl: 'Acties',
    ur: 'اعمال'
  }),
  'ui.general': L('General', {
    ar: 'عام',
    ceb: 'Kinatibuk-an',
    da: 'Generelt',
    de: 'Allgemein',
    nl: 'Algemeen',
    ur: 'عام'
  }),
  'ui.tools': L('Tools', {
    ar: 'أدوات',
    ceb: 'Mga himan',
    da: 'Værktøjer',
    de: 'Werkzeuge',
    nl: 'Hulpmiddelen',
    ur: 'آلات'
  }),
  'ui.whatLinksHere': L('What links here', {
    ar: 'ماذا يصل هنا',
    ceb: 'Unsa ang naglink dinhi',
    da: 'Hvad linker hertil',
    de: 'Links auf diese Seite',
    nl: 'Links naar deze pagina',
    ur: 'یہاں کیا لنک کرتا ہے'
  }),
  'ui.relatedChanges': L('Related changes', {
    ar: 'تغييرات ذات صلة',
    ceb: 'May kalabotan nga mga kausaban',
    da: 'Relaterede ændringer',
    de: 'Änderungen an verlinkten Seiten',
    nl: 'Gerelateerde wijzigingen',
    ur: 'متعلقہ تبدیلیاں'
  }),
  'ui.uploadFile': L('Upload file', {
    ar: 'رفع ملف',
    ceb: 'I-upload ang file',
    da: 'Upload fil',
    de: 'Datei hochladen',
    nl: 'Bestand uploaden',
    ur: 'فائل اپ لوڈ کریں'
  }),
  'ui.pageInformation': L('Page information', {
    ar: 'معلومات الصفحة',
    ceb: 'Impormasyon sa panid',
    da: 'Sideinformation',
    de: 'Seiteninformationen',
    nl: 'Paginagegevens',
    ur: 'صفحے کی معلومات'
  }),
  'ui.citeThisPage': L('Cite this page', {
    ar: 'استشهد بهذه الصفحة',
    ceb: 'I-cite kini nga panid',
    da: 'Citér denne side',
    de: 'Diese Seite zitieren',
    nl: 'Deze pagina citeren',
    ur: 'اس صفحے کا حوالہ دیں'
  }),
  'ui.getShortenedUrl': L('Get shortened URL', {
    ar: 'احصل على رابط مختصر',
    ceb: 'Kuhaa ang mubo nga URL',
    da: 'Hent forkortet URL',
    de: 'Kurz-URL erzeugen',
    nl: 'Verkorte URL ophalen',
    ur: 'مختصر یو آر ایل حاصل کریں'
  }),
  'ui.expandAll': L('Expand all', {
    ar: 'توسيع الكل',
    ceb: 'Palapda ang tanan',
    da: 'Udvid alle',
    de: 'Alle ausklappen',
    nl: 'Alles uitvouwen',
    ur: 'سب پھیلائیں'
  }),
  'ui.editInterlanguageLinks': L('Edit interlanguage links', {
    ar: 'عدّل وصلات اللغات',
    ceb: 'Usba ang interlanguage links',
    da: 'Redigér sproglinks',
    de: 'Interlanguage-Links bearbeiten',
    nl: 'Interwikilinks bewerken',
    ur: 'بین لسانی روابط میں ترمیم'
  }),
  'ui.downloadAsPdf': L('Download as PDF', {
    ar: 'نزّل كملف PDF',
    ceb: 'I-download isip PDF',
    da: 'Download som PDF',
    de: 'Als PDF herunterladen',
    nl: 'Downloaden als PDF',
    ur: 'پی ڈی ایف ڈاؤن لوڈ کریں'
  }),
  'ui.text': L('Text', {
    ar: 'النص',
    ceb: 'Teksto',
    da: 'Tekst',
    de: 'Text',
    nl: 'Tekst',
    ur: 'متن'
  }),
  'ui.small': L('Small', {
    ar: 'صغير',
    ceb: 'Gamay',
    da: 'Lille',
    de: 'Klein',
    nl: 'Klein',
    ur: 'چھوٹا'
  }),
  'ui.standard': L('Standard', {
    ar: 'قياسي',
    ceb: 'Standard',
    da: 'Standard',
    de: 'Standard',
    nl: 'Standaard',
    ur: 'معیاری'
  }),
  'ui.large': L('Large', {
    ar: 'كبير',
    ceb: 'Dako',
    da: 'Stor',
    de: 'Groß',
    nl: 'Groot',
    ur: 'بڑا'
  }),
  'ui.width': L('Width', {
    ar: 'العرض',
    ceb: 'Gilapdon',
    da: 'Bredde',
    de: 'Breite',
    nl: 'Breedte',
    ur: 'چوڑائی'
  }),
  'ui.wide': L('Wide', {
    ar: 'عريض',
    ceb: 'Lapad',
    da: 'Bred',
    de: 'Breit',
    nl: 'Breed',
    ur: 'چوڑا'
  }),
  'ui.color': L('Color', {
    ar: 'اللون',
    ceb: 'Kolor',
    da: 'Farve',
    de: 'Farbe',
    nl: 'Kleur',
    ur: 'رنگ'
  }),
  'ui.automatic': L('Automatic', {
    ar: 'تلقائي',
    ceb: 'Awtomatiko',
    da: 'Automatisk',
    de: 'Automatisch',
    nl: 'Automatisch',
    ur: 'خودکار'
  }),
  'ui.light': L('Light', {
    ar: 'فاتح',
    ceb: 'Hayag',
    da: 'Lys',
    de: 'Hell',
    nl: 'Licht',
    ur: 'روشن'
  }),
  'ui.dark': L('Dark', {
    ar: 'داكن',
    ceb: 'Ngitngit',
    da: 'Mørk',
    de: 'Dunkel',
    nl: 'Donker',
    ur: 'تاریک'
  }),
  'ui.alwaysLight': L('This page is always in light mode.', {
    ar: 'هذه الصفحة دائمًا في الوضع الفاتح.',
    ceb: 'Kini nga panid anaa kanunay sa light mode.',
    da: 'Denne side er altid i lystilstand.',
    de: 'Diese Seite wird immer im hellen Modus angezeigt.',
    nl: 'Deze pagina staat altijd in de lichte modus.',
    ur: 'یہ صفحہ ہمیشہ لائٹ موڈ میں رہتا ہے۔'
  }),
  'ui.fromWikipedia': L('From Wikipedia, the free encyclopedia', {
    ar: 'من ويكيبيديا، الموسوعة الحرة',
    ceb: 'Gikan sa Wikipedia, ang gawasnon nga ensiklopedya',
    da: 'Fra Wikipedia, den frie encyklopædi',
    de: 'Aus Wikipedia, der freien Enzyklopädie',
    nl: 'Uit Wikipedia, de vrije encyclopedie',
    simple: 'From Wikipedia, the free encyclopedia',
    ur: 'ویکیپیڈیا، آزاد دائرۃ المعارف سے'
  }),
  'ui.hatnote': L('For other uses, see {link1} and {link2}.', {
    ar: 'للاستخدامات الأخرى، انظر {link1} و{link2}.',
    ceb: 'Alang sa ubang paggamit, tan-awa ang {link1} ug {link2}.',
    da: 'For andre betydninger, se {link1} og {link2}.',
    de: 'Für andere Bedeutungen siehe {link1} und {link2}.',
    nl: 'Voor andere betekenissen, zie {link1} en {link2}.',
    ur: 'دیگر استعمالات کے لیے دیکھیں {link1} اور {link2}۔'
  }),
  'ui.editSection': L('edit', {
    ar: 'عدّل',
    ceb: 'usba',
    da: 'redigér',
    de: 'Bearbeiten',
    nl: 'bewerken',
    ur: 'ترمیم'
  }),
  'ui.footnotes': L('Footnotes', {
    ar: 'حواشٍ',
    ceb: 'Mga footnote',
    da: 'Fodnoter',
    de: 'Fußnoten',
    nl: 'Voetnoten',
    ur: 'حواشی'
  }),
  'ui.yearsAgo': L('{n} years ago', {
    ar: 'قبل {n} سنة',
    ceb: '{n} ka tuig ang milabay',
    da: 'for {n} år siden',
    de: 'vor {n} Jahren',
    nl: '{n} jaar geleden',
    ur: '{n} سال پہلے'
  }),
  'ui.unitedStates': L('United States', {
    ar: 'الولايات المتحدة',
    ceb: 'Estados Unidos',
    da: 'USA',
    de: 'Vereinigte Staaten',
    nl: 'Verenigde Staten',
    ur: 'ریاستہائے متحدہ'
  }),
  'ui.private': L('Private', {
    ar: 'خاصة',
    ceb: 'Pribado',
    da: 'Privat',
    de: 'Privat',
    nl: 'Privé',
    ur: 'نجی'
  }),
  'ui.retail': L('Retail', {
    ar: 'تجزئة',
    ceb: 'Retail',
    da: 'Detailhandel',
    de: 'Einzelhandel',
    nl: 'Detailhandel',
    ur: 'خوردہ'
  }),
  'ui.departmentStores': L('Department stores', {
    ar: 'متاجر أقسام',
    ceb: 'Mga department store',
    da: 'Stormagasiner',
    de: 'Kaufhäuser',
    nl: 'Warenhuizen',
    ur: 'ڈپارٹمنٹ اسٹورز'
  }),
  'ui.parent': L('Parent', {
    ar: 'الشركة الأم',
    ceb: 'Ginikanan nga kompanya',
    da: 'Moderselskab',
    de: 'Muttergesellschaft',
    nl: 'Moederbedrijf',
    ur: 'مالک کمپنی'
  }),
  'ui.website': L('Website', {
    ar: 'الموقع',
    ceb: 'Website',
    da: 'Hjemmeside',
    de: 'Website',
    nl: 'Website',
    ur: 'ویب سائٹ'
  }),
  'ui.officialWebsite': L('Official website', {
    ar: 'الموقع الرسمي',
    ceb: 'Opisyal nga website',
    da: 'Officiel hjemmeside',
    de: 'Offizielle Website',
    nl: 'Officiële website',
    ur: 'سرکاری ویب سائٹ'
  }),
  'ui.archived': L('Archived', {
    ar: 'مؤرشف',
    ceb: 'Gi-archive',
    da: 'Arkiveret',
    de: 'Archiviert',
    nl: 'Gearchiveerd',
    ur: 'محفوظ شدہ'
  }),
  'ui.categories': L('Categories', {
    ar: 'تصنيفات',
    ceb: 'Mga kategoriya',
    da: 'Kategorier',
    de: 'Kategorien',
    nl: 'Categorieën',
    ur: 'زمرہ جات'
  }),
  'ui.hiddenCategories': L('Hidden categories', {
    ar: 'تصنيفات مخفية',
    ceb: 'Tago nga mga kategoriya',
    da: 'Skjulte kategorier',
    de: 'Versteckte Kategorien',
    nl: 'Verborgen categorieën',
    ur: 'پوشیدہ زمرے'
  }),
  'ui.lastEdited': L('This page was last edited on 13 July 2026, at 01:54', {
    ar: 'عُدّلت هذه الصفحة آخر مرة في 13 يوليو 2026، الساعة 01:54',
    ceb: 'Kini nga panid kataposang giusab niadtong 13 Hulyo 2026, alas 01:54',
    da: 'Denne side blev senest redigeret 13. juli 2026 kl. 01:54',
    de: 'Diese Seite wurde zuletzt am 13. Juli 2026 um 01:54 Uhr bearbeitet',
    nl: 'Deze pagina is voor het laatst bewerkt op 13 juli 2026 om 01:54',
    ur: 'اس صفحے میں آخری ترمیم 13 جولائی 2026، بوقت 01:54 ہوئی'
  }),
  'ui.pageRenderedWith': L('Page was rendered with', {
    ar: 'عُرضت الصفحة باستخدام',
    ceb: 'Ang panid gi-render gamit ang',
    da: 'Siden blev visnet med',
    de: 'Die Seite wurde gerendert mit',
    nl: 'Pagina is weergegeven met',
    ur: 'صفحہ رینڈر کیا گیا بذریعہ'
  }),
  'ui.copyright': L('Text is available under the Creative Commons Attribution-ShareAlike 4.0 License; additional terms may apply.', {
    ar: 'النصوص متاحة بموجب رخصة المشاع الإبداعي نَسب المُصنَّف - الترخيص بالمثل 4.0؛ وقد تنطبق بنود إضافية.',
    ceb: 'Ang teksto anaa ubos sa Creative Commons Attribution-ShareAlike 4.0 License; mahimong magamit ang dugang nga mga termino.',
    da: 'Teksten er tilgængelig under Creative Commons Navngivelse-Deling på samme vilkår 4.0; yderligere vilkår kan gælde.',
    de: 'Der Text ist unter der Lizenz Creative Commons Namensnennung – Weitergabe unter gleichen Bedingungen 4.0 verfügbar; zusätzliche Bedingungen können gelten.',
    nl: 'Tekst is beschikbaar onder de Creative Commons Naamsvermelding-GelijkDelen 4.0-licentie; aanvullende voorwaarden kunnen van toepassing zijn.',
    ur: 'متن کریئیٹو کامنز انتساب- alike 4.0 اجازت نامے کے تحت دستیاب ہے؛ اضافی شرائط لاگو ہو سکتی ہیں۔'
  }),
  'ui.termsOfUse': L('Terms of Use', {
    ar: 'شروط الاستخدام',
    ceb: 'Mga Termino sa Paggamit',
    da: 'Brugsvilkår',
    de: 'Nutzungsbedingungen',
    nl: 'Gebruiksvoorwaarden',
    ur: 'استعمال کی شرائط'
  }),
  'ui.privacyPolicy': L('Privacy policy', {
    ar: 'سياسة الخصوصية',
    ceb: 'Palisiya sa pagkapribado',
    da: 'Privatlivspolitik',
    de: 'Datenschutz',
    nl: 'Privacybeleid',
    ur: 'رازداری کی پالیسی'
  }),
  'ui.aboutWikipedia': L('About Wikipedia', {
    ar: 'حول ويكيبيديا',
    ceb: 'Mahitungod sa Wikipedia',
    da: 'Om Wikipedia',
    de: 'Über Wikipedia',
    nl: 'Over Wikipedia',
    ur: 'ویکیپیڈیا کے بارے میں'
  }),
  'ui.disclaimers': L('Disclaimers', {
    ar: 'إخلاء مسؤولية',
    ceb: 'Mga disclaimer',
    da: 'Ansvarsfraskrivelser',
    de: 'Impressum',
    nl: 'Voorbehoud',
    ur: 'دستبرداری'
  }),
  'ui.contactWikipedia': L('Contact Wikipedia', {
    ar: 'اتصل بويكيبيديا',
    ceb: 'Kontaka ang Wikipedia',
    da: 'Kontakt Wikipedia',
    de: 'Wikipedia kontaktieren',
    nl: 'Contact Wikipedia',
    ur: 'ویکیپیڈیا سے رابطہ'
  }),
  'ui.legalSafety': L('Legal & safety contacts', {
    ar: 'جهات اتصال قانونية وأمنية',
    ceb: 'Legal ug safety nga kontak',
    da: 'Juridiske og sikkerhedskontakter',
    de: 'Rechtliche und Sicherheitskontakte',
    nl: 'Juridische en veiligheidscontacten',
    ur: 'قانونی اور حفاظتی روابط'
  }),
  'ui.codeOfConduct': L('Code of Conduct', {
    ar: 'مدونة السلوك',
    ceb: 'Kodigo sa pamatasan',
    da: 'Adfærdskodeks',
    de: 'Verhaltenskodex',
    nl: 'Gedragscode',
    ur: 'ضابطہ اخلاق'
  }),
  'ui.developers': L('Developers', {
    ar: 'المطورون',
    ceb: 'Mga developer',
    da: 'Udviklere',
    de: 'Entwickler',
    nl: 'Ontwikkelaars',
    ur: 'ڈویلپرز'
  }),
  'ui.statistics': L('Statistics', {
    ar: 'إحصاءات',
    ceb: 'Estadistika',
    da: 'Statistik',
    de: 'Statistiken',
    nl: 'Statistieken',
    ur: 'شماریات'
  }),
  'ui.cookieStatement': L('Cookie statement', {
    ar: 'بيان ملفات تعريف الارتباط',
    ceb: 'Cookie statement',
    da: 'Cookie-erklæring',
    de: 'Cookie-Erklärung',
    nl: 'Cookieverklaring',
    ur: 'کوکی بیان'
  }),
  'ui.mobileView': L('Mobile view', {
    ar: 'عرض الجوال',
    ceb: 'Mobile view',
    da: 'Mobilvisning',
    de: 'Mobile Ansicht',
    nl: 'Mobiele weergave',
    ur: 'موبائل منظر'
  }),
  'ui.retrievedFrom': L('Retrieved from', {
    ar: 'اقتُبست من',
    ceb: 'Gikuha gikan sa',
    da: 'Hentet fra',
    de: 'Abgerufen von',
    nl: 'Overgenomen van',
    ur: 'ماخوذ از'
  }),
  'ui.changeLanguageVariant': L('Change language variant', {
    ar: 'تغيير لهجة اللغة',
    ceb: 'Usba ang variant sa pinulongan',
    da: 'Skift sprogvariant',
    de: 'Sprachvariante ändern',
    nl: 'Taalvariant wijzigen',
    ur: 'زبان کی قسم تبدیل کریں'
  }),

  'toc.history': L('History', {
    ar: 'التاريخ',
    ceb: 'Kasaysayan',
    da: 'Historie',
    de: 'Geschichte',
    nl: 'Geschiedenis',
    ur: 'تاریخ'
  }),
  'toc.earlyHistory': L('Early history', {
    ar: 'التاريخ المبكر',
    ceb: 'Sayong kasaysayan',
    da: 'Tidlig historie',
    de: 'Frühe Geschichte',
    nl: 'Vroege geschiedenis',
    ur: 'ابتدائی تاریخ'
  }),
  'toc.1900s': L('1900s', { ar: 'عقد 1900', ceb: '1900s', da: '1900erne', de: '1900er', nl: 'Jaren 1900', ur: '1900 کی دہائی' }),
  'toc.2000s': L('2000s', { ar: 'عقد 2000', ceb: '2000s', da: '2000erne', de: '2000er', nl: 'Jaren 2000', ur: '2000 کی دہائی' }),
  'toc.2010s': L('2010s', { ar: 'عقد 2010', ceb: '2010s', da: '2010erne', de: '2010er', nl: 'Jaren 2010', ur: '2010 کی دہائی' }),
  'toc.acquisition': L('Acquisition by Sycamore Partners', {
    ar: 'الاستحواذ من سيكامور بارتنرز',
    ceb: 'Pagkuha sa Sycamore Partners',
    da: 'Overtagelse af Sycamore Partners',
    de: 'Übernahme durch Sycamore Partners',
    nl: 'Overname door Sycamore Partners',
    ur: 'سائیکامور پارٹنرز کی خریداری'
  }),
  'toc.bankruptcy': L('2021: One-day bankruptcy', {
    ar: '2021: إفلاس ليوم واحد',
    ceb: '2021: Usa ka adlaw nga bangkarota',
    da: '2021: Én dags konkurs',
    de: '2021: Eintägige Insolvenz',
    nl: '2021: Faillissement van één dag',
    ur: '2021: ایک روزہ دیوالیہ پن'
  }),
  'toc.crossBorder': L('Cross-border commerce', {
    ar: 'التجارة العابرة للحدود',
    ceb: 'Cross-border nga e-commerce',
    da: 'Grænseoverskridende e-handel',
    de: 'Grenzüberschreitender Handel',
    nl: 'Grensoverschrijdende e-commerce',
    simple: 'Selling online across countries',
    ur: 'سرحد پار ای کامرس'
  }),
  'toc.newGrowth': L('New growth', {
    ar: 'نمو جديد',
    ceb: 'Bag-ong pagtubo',
    da: 'Ny vækst',
    de: 'Neues Wachstum',
    nl: 'Nieuwe groei',
    ur: 'نئی ترقی'
  }),
  'toc.brandIdentity': L('Brand identity', {
    ar: 'الهوية التجارية',
    ceb: 'Pagkatawo sa brand',
    da: 'Brandidentitet',
    de: 'Markenidentität',
    nl: 'Merkidentiteit',
    ur: 'برانڈ شناخت'
  }),
  'toc.sponsorships': L('Sponsorships', {
    ar: 'الرعايات',
    ceb: 'Mga sponsorship',
    da: 'Sponsorater',
    de: 'Sponsoring',
    nl: 'Sponsoring',
    ur: 'سپانسرشپ'
  }),
  'toc.flagship': L('Flagship locations', {
    ar: 'الفروع الرئيسية',
    ceb: 'Mga flagship nga lokasyon',
    da: 'Flagskibsbutikker',
    de: 'Flaggschiff-Standorte',
    nl: 'Vlaggenschipwinkels',
    ur: 'فلیگ شپ مقامات'
  }),
  'toc.references': L('References', {
    ar: 'المراجع',
    ceb: 'Mga reperensya',
    da: 'Referencer',
    de: 'Einzelnachweise',
    nl: 'Referenties',
    ur: 'حوالہ جات'
  }),
  'toc.externalLinks': L('External links', {
    ar: 'وصلات خارجية',
    ceb: 'Mga eksternal nga link',
    da: 'Eksterne henvisninger',
    de: 'Weblinks',
    nl: 'Externe links',
    ur: 'بیرونی روابط'
  }),

  'infobox.formerly': L('Formerly', {
    ar: 'سابقًا',
    ceb: 'Kaniadto',
    da: 'Tidligere',
    de: 'Ehemals',
    nl: 'Voorheen',
    ur: 'سابقہ نام'
  }),
  'infobox.type': L('Type', {
    ar: 'النوع',
    ceb: 'Tipo',
    da: 'Type',
    de: 'Rechtsform',
    nl: 'Type',
    ur: 'قسم'
  }),
  'infobox.industry': L('Industry', {
    ar: 'الصناعة',
    ceb: 'Industriya',
    da: 'Branche',
    de: 'Branche',
    nl: 'Industrie',
    ur: 'صنعت'
  }),
  'infobox.genre': L('Genre', {
    ar: 'النوع',
    ceb: 'Genre',
    da: 'Genre',
    de: 'Genre',
    nl: 'Genre',
    ur: 'صنف'
  }),
  'infobox.founded': L('Founded', {
    ar: 'تأسست',
    ceb: 'Gitukod',
    da: 'Grundlagt',
    de: 'Gegründet',
    nl: 'Opgericht',
    ur: 'قیام'
  }),
  'infobox.founder': L('Founder', {
    ar: 'المؤسس',
    ceb: 'Nagtukod',
    da: 'Grundlægger',
    de: 'Gründer',
    nl: 'Oprichter',
    ur: 'بانی'
  }),
  'infobox.headquarters': L('Headquarters', {
    ar: 'المقر',
    ceb: 'Punong buhatan',
    da: 'Hovedkvarter',
    de: 'Sitz',
    nl: 'Hoofdkantoor',
    ur: 'صدر دفتر'
  }),
  'infobox.numLocations': L('Number of locations', {
    ar: 'عدد الفروع',
    ceb: 'Gidaghanon sa mga lokasyon',
    da: 'Antal butikker',
    de: 'Anzahl der Standorte',
    nl: 'Aantal vestigingen',
    ur: 'مقامات کی تعداد'
  }),
  'infobox.keyPeople': L('Key people', {
    ar: 'شخصيات رئيسية',
    ceb: 'Mga yawe nga tawo',
    da: 'Nøglepersoner',
    de: 'Leitung',
    nl: 'Sleutelfiguren',
    ur: 'اہم شخصیات'
  }),
  'infobox.products': L('Products', {
    ar: 'المنتجات',
    ceb: 'Mga produkto',
    da: 'Produkter',
    de: 'Produkte',
    nl: 'Producten',
    ur: 'مصنوعات'
  }),
  'infobox.revenue': L('Revenue', {
    ar: 'الإيرادات',
    ceb: 'Kita',
    da: 'Omsætning',
    de: 'Umsatz',
    nl: 'Omzet',
    ur: 'آمدنی'
  }),
  'infobox.employees': L('Number of employees', {
    ar: 'عدد الموظفين',
    ceb: 'Gidaghanon sa empleyado',
    da: 'Antal medarbejdere',
    de: 'Mitarbeiterzahl',
    nl: 'Aantal medewerkers',
    ur: 'ملازمین کی تعداد'
  }),
  'infobox.caption': L('Mall entrance to the Belk store at Independence Mall in Wilmington, North Carolina (2017)', {
    ar: 'مدخل متجر بيلك في مول إندبندنس في ويلمينغتون، كارولاينا الشمالية (2017)',
    ceb: 'Pultahan sa mall padulong sa tindahan sa Belk sa Independence Mall sa Wilmington, North Carolina (2017)',
    da: 'Indgang til Belk-butikken i Independence Mall i Wilmington, North Carolina (2017)',
    de: 'Mall-Eingang zur Belk-Filiale im Independence Mall in Wilmington, North Carolina (2017)',
    nl: 'Winklingang van Belk in Independence Mall in Wilmington, North Carolina (2017)',
    simple: 'Mall door to the Belk store at Independence Mall in Wilmington, North Carolina (2017)',
    ur: 'ولمنگٹن، نارتھ کیرولائنا میں انڈیپینڈنس مال پر بیلک اسٹور کا داخلہ (2017)'
  }),
  'infobox.clothing': L('Clothing', { ar: 'ملابس', ceb: 'Sinina', da: 'Tøj', de: 'Kleidung', nl: 'Kleding', ur: 'کپڑے' }),
  'infobox.footwear': L('footwear', { ar: 'أحذية', ceb: 'sapatos', da: 'fodtøj', de: 'Schuhe', nl: 'schoeisel', ur: 'جوتے' }),
  'infobox.bedding': L('bedding', { ar: 'مفروشات سرير', ceb: 'higdaanan', da: 'sengetøj', de: 'Bettwäsche', nl: 'beddengoed', ur: 'بستر' }),
  'infobox.furniture': L('furniture', { ar: 'أثاث', ceb: 'muwebles', da: 'møbler', de: 'Möbel', nl: 'meubels', ur: 'فرنیچر' }),
  'infobox.jewelry': L('jewelry', { ar: 'مجوهرات', ceb: 'alahas', da: 'smykker', de: 'Schmuck', nl: 'sieraden', ur: 'زیورات' }),
  'infobox.beauty': L('beauty products', { ar: 'منتجات تجميل', ceb: 'produkto sa katahum', da: 'skønhedsprodukter', de: 'Kosmetik', nl: 'beautyproducten', ur: 'خوبصورتی کی مصنوعات' }),
  'infobox.housewares': L('housewares', { ar: 'أدوات منزلية', ceb: 'gamit sa balay', da: 'husholdningsartikler', de: 'Haushaltswaren', nl: 'huishoudelijke artikelen', ur: 'گھریلو سامان' }),

  'article.lead': L('Belk, Inc. is an American department store chain founded in 1888 by William Henry Belk. Local partnerships allowed Belk to expand during the 1900s, and resulted in several Belk co-brandings. The distinct legal entities were consolidated into a single company and uniform Belk brand in 1998. It was acquired by private equity firm Sycamore Partners in 2015.', {
    ar: 'بيلك إنك سلسلة متاجر أقسام أمريكية أسسها ويليام هنري بيلك عام 1888. أتاحت الشراكات المحلية للشركة التوسع خلال القرن العشرين وظهرت علامات مشتركة عدة. دُمجت الكيانات القانونية المنفصلة في شركة واحدة وعلامة بيلك موحدة عام 1998. استحوذت عليها شركة الأسهم الخاصة سيكامور بارتنرز عام 2015.',
    ceb: 'Ang Belk, Inc. usa ka Amerikanong kadena sa department store nga gitukod niadtong 1888 ni William Henry Belk. Ang lokal nga mga partnership nagtugot sa Belk sa pagpalapad sa 1900s, ug miresulta sa daghang Belk co-branding. Ang lainlaing legal nga entidad gihiusa ngadto sa usa ka kompanya ug uniporme nga brand sa Belk niadtong 1998. Gipalit kini sa private equity firm nga Sycamore Partners niadtong 2015.',
    da: 'Belk, Inc. er en amerikansk stormagasinkæde grundlagt i 1888 af William Henry Belk. Lokale partnerskaber gjorde det muligt at udvide i 1900-tallet og førte til flere fælles brands. De separate juridiske enheder blev samlet i ét selskab og ét Belk-brand i 1998. Selskabet blev opkøbt af kapitalfonden Sycamore Partners i 2015.',
    de: 'Belk, Inc. ist eine US-amerikanische Kaufhauskette, die 1888 von William Henry Belk gegründet wurde. Lokale Partnerschaften ermöglichten die Expansion im 20. Jahrhundert und führten zu mehreren Co-Marken. Die getrennten Rechtseinheiten wurden 1998 zu einem Unternehmen und einer einheitlichen Marke Belk zusammengeführt. 2015 übernahm die Private-Equity-Firma Sycamore Partners das Unternehmen.',
    nl: 'Belk, Inc. is een Amerikaanse warenhuisketen, in 1888 opgericht door William Henry Belk. Lokale partnerschappen maakten expansie in de 20e eeuw mogelijk en leidden tot verschillende cobrandings. De aparte rechtspersonen werden in 1998 samengevoegd tot één bedrijf en één Belk-merk. In 2015 werd het overgenomen door private-equityfirma Sycamore Partners.',
    simple: 'Belk, Inc. is an American chain of department stores. William Henry Belk started it in 1888. Local partners helped the company grow in the 1900s. In 1998 the many companies became one Belk company. Sycamore Partners bought Belk in 2015.',
    ur: 'بیلک، انک ایک امریکی ڈپارٹمنٹ اسٹور چین ہے جسے 1888 میں ولیم ہنری بیلک نے قائم کیا۔ مقامی شراکت داریوں نے 1900 کی دہائی میں توسیع ممکن بنائی۔ الگ قانونی ادارے 1998 میں ایک کمپنی اور یکساں بیلک برانڈ میں ضم ہوئے۔ 2015 میں پرائیویٹ ایکویٹی فرم سائیکامور پارٹنرز نے اسے خرید لیا۔'
  }),
  'article.fig1902': L('The first Belk, established as New York Racket, in 1902', {
    ar: 'أول متجر بيلك، أُنشئ باسم نيويورك راكيت، عام 1902',
    ceb: 'Ang unang Belk, gitukod isip New York Racket, niadtong 1902',
    da: 'Den første Belk, grundlagt som New York Racket, i 1902',
    de: 'Das erste Belk, gegründet als New York Racket, im Jahr 1902',
    nl: 'De eerste Belk, opgericht als New York Racket, in 1902',
    simple: 'The first Belk store, then named New York Racket, in 1902',
    ur: 'پہلا بیلک، نیو یارک ریٹ کے نام سے، 1902 میں'
  }),
  'article.earlyHistory': L('Belk was founded in 1888 by William Henry Belk in Monroe, North Carolina, outside Charlotte. The store was first called New York Racket and then Belk Brothers, after Belk made his brother, physician John Belk, his partner. Belk bought merchandise in large quantities to pass savings on to customers and sold at fixed prices, which was a relatively unusual practice at the time.', {
    ar: 'تأسست بيلك عام 1888 على يد ويليام هنري بيلك في مونرو بكارولاينا الشمالية قرب شارلوت. سُمي المتجر أولًا نيويورك راكيت ثم بيلك براذرز بعد أن جعل شقيقه الطبيب جون بيلك شريكًا. اشترى السلع بكميات كبيرة ليمنح العملاء أسعارًا أقل وباع بأسعار ثابتة، وهو أسلوب غير شائع آنذاك.',
    ceb: 'Gitukod ang Belk niadtong 1888 ni William Henry Belk sa Monroe, North Carolina, gawas sa Charlotte. Unang ginganlan ang tindahan og New York Racket dayon Belk Brothers human gihimo ni Belk nga kauban ang iyang igsoon, ang doktor nga si John Belk. Paliton ni Belk ang mga butang sa daghang gidaghanon aron makadaginot ang kustomer ug ibaligya sa piho nga presyo, usa ka talagsaon nga paagi niadtong panahona.',
    da: 'Belk blev grundlagt i 1888 af William Henry Belk i Monroe, North Carolina, uden for Charlotte. Butikken hed først New York Racket og derefter Belk Brothers, efter at Belk gjorde sin bror, lægen John Belk, til partner. Belk købte varer i store mængder for at give kunderne besparelser og solgte til faste priser, hvilket dengang var usædvanligt.',
    de: 'Belk wurde 1888 von William Henry Belk in Monroe, North Carolina, nahe Charlotte gegründet. Das Geschäft hieß zunächst New York Racket und später Belk Brothers, nachdem Belk seinen Bruder, den Arzt John Belk, zum Partner machte. Belk kaufte Ware in großen Mengen, gab Ersparnisse an Kunden weiter und verkaufte zu Festpreisen – damals eher unüblich.',
    nl: 'Belk werd in 1888 opgericht door William Henry Belk in Monroe, North Carolina, buiten Charlotte. De winkel heette eerst New York Racket en daarna Belk Brothers, nadat Belk zijn broer, arts John Belk, tot partner maakte. Belk kocht goederen in grote hoeveelheden om klanten te laten meeprofiteren en verkocht tegen vaste prijzen, toen nog ongebruikelijk.',
    simple: 'William Henry Belk started Belk in 1888 in Monroe, North Carolina, near Charlotte. The store was first named New York Racket, then Belk Brothers after his brother John Belk joined him. He bought goods in big amounts so prices could be lower, and he used fixed prices. That was not common then.',
    ur: 'بیلک کی بنیاد 1888 میں ولیم ہنری بیلک نے مونرو، نارتھ کیرولائنا میں رکھی۔ دکان کا پہلا نام نیو یارک ریٹ تھا، پھر بیلک برادرز جب ان کے بھائی ڈاکٹر جان بیلک شریک ہوئے۔ بیلک مال زیادہ مقدار میں خرید کر بچت صارفین تک پہنچاتے اور مقررہ قیمتوں پر بیچتے تھے، جو اس وقت غیر معمولی تھا۔'
  }),
  'article.p1900s1': L('By 1909, the company had moved its headquarters to Charlotte and built a huge flagship store on Trade and Tryon Streets in downtown Charlotte, which would remain the company\'s headquarters until it was closed in 1988 to make way for the construction of what is now Bank of America Corporate Center. The business grew steadily, relying on "bargain sales" and advertising to grow the business and increase its influence throughout the South.', {
    ar: 'بحلول 1909 نقلت الشركة مقرها إلى شارلوت وبنت متجرًا رئيسيًا ضخمًا عند شارعي تريد وترايون وسط المدينة، وبقي المقر حتى أُغلق عام 1988 لإفساح المجال لما يُعرف اليوم بمركز بنك أوف أمريكا. نمت الأعمال باطراد عبر عروض التخفيضات والإعلان ووسّعت نفوذها في الجنوب.',
    ceb: 'Niadtong 1909, gibalhin sa kompanya ang punong buhatan ngadto sa Charlotte ug nagtukod og dako nga flagship store sa Trade ug Tryon Streets sa downtown Charlotte, nga nahimong punong buhatan hangtod gisira kini niadtong 1988 aron hatagan agianan ang Bank of America Corporate Center. Milambo ang negosyo pinaagi sa bargain sales ug advertising sa Tunga-tungang Habagatan.',
    da: 'I 1909 flyttede selskabet hovedkvarteret til Charlotte og byggede en stor flagskibsbutik ved Trade og Tryon Streets i centrum. Den forblev hovedsæde indtil lukningen i 1988 for at give plads til det nuværende Bank of America Corporate Center. Forretningen voksede støt via udsalg og reklame i hele Syden.',
    de: 'Bis 1909 verlegte das Unternehmen den Sitz nach Charlotte und errichtete ein großes Flagship-Store an Trade und Tryon Streets. Die Zentrale blieb dort bis zur Schließung 1988 für den Bau des heutigen Bank of America Corporate Center. Das Geschäft wuchs stetig durch Sonderverkäufe und Werbung im Süden.',
    nl: 'In 1909 verhuisde het hoofdkantoor naar Charlotte en kwam er een grote vlaggenschipwinkel op Trade en Tryon Streets. Dat bleef het hoofdkantoor tot de sluiting in 1988 voor de bouw van het huidige Bank of America Corporate Center. De zaak groeide gestaag via uitverkoopacties en reclame in het Zuiden.',
    simple: 'By 1909 the company moved its main office to Charlotte. It built a large store on Trade and Tryon Streets. That building stayed the main office until 1988, when it closed so the Bank of America Corporate Center could be built. The company grew with sales and ads across the South.',
    ur: '1909 تک کمپنی نے صدر دفتر شارلٹ منتقل کیا اور ٹریڈ و ٹرائن سٹریٹس پر بڑا فلیگ شپ اسٹور بنایا۔ یہ صدر دفتر 1988 تک رہا جب بینک آف امریکا کارپوریٹ سینٹر کی تعمیر کے لیے بند ہوا۔ کاروبار بذریعہ سیلز اور اشتہارات جنوبی ریاستوں میں پھیلتا رہا۔'
  }),
  'article.p1900s2': L('Beginning in 1921 with the Leggett Bros. stores of South Boston, Virginia, the Belk company grew by investing in various partnerships with local merchandisers in nearby markets. Belk\'s growth out of the Southeast was pushed by Earl Jones Sr and the Belk-Jones brand that opened the first Belk west of the Mississippi in 1947. The Jones family and the Belk-Jones brand continued to grow Belk\'s westward expansion. This complex story is chronicled in a book published by Belk—Belk, Inc.: The Company and the Family That Built It—about the evolution of the company.', {
    ar: 'بدءًا من 1921 مع متاجر ليغيت براذرز في ساوث بوسطن بفرجينيا، نمت بيلك عبر شراكات مع تجار محليين. دفع إيرل جونز الأب وعلامة بيلك-جونز التوسع غرب المسيسيبي بافتتاح أول متجر غرب النهر عام 1947. وتُروى هذه القصة في كتاب أصدرته بيلك عن تطور الشركة.',
    ceb: 'Sugod niadtong 1921 uban sa Leggett Bros. sa South Boston, Virginia, milambo ang Belk pinaagi sa partnership sa lokal nga mga negosyante. Ang pagtubo padulong sa kasadpan gipadayon ni Earl Jones Sr ug sa Belk-Jones brand nga nag-abli sa unang Belk sa kasadpan sa Mississippi niadtong 1947. Gisulat kini sa libro sa Belk mahitungod sa kasaysayan sa kompanya.',
    da: 'Fra 1921 med Leggett Bros. i South Boston, Virginia, voksede Belk via partnerskaber med lokale handlende. Earl Jones Sr. og mærket Belk-Jones åbnede i 1947 den første Belk vest for Mississippi. Historien er beskrevet i en bog udgivet af Belk om selskabets udvikling.',
    de: 'Ab 1921 mit den Leggett-Bros.-Läden in South Boston, Virginia, wuchs Belk durch Partnerschaften mit lokalen Händlern. Earl Jones Sr. und die Marke Belk-Jones eröffneten 1947 das erste Belk westlich des Mississippi. Die Geschichte ist in einem von Belk herausgegebenen Buch über die Entwicklung des Unternehmens nachgezeichnet.',
    nl: 'Vanaf 1921, met Leggett Bros. in South Boston, Virginia, groeide Belk via partnerschappen met lokale winkeliers. Earl Jones Sr. en het merk Belk-Jones openden in 1947 de eerste Belk ten westen van de Mississippi. Dit verhaal staat in een door Belk uitgegeven boek over de groei van het bedrijf.',
    simple: 'From 1921 Belk grew by joining with local store owners, starting with Leggett Bros. in South Boston, Virginia. Earl Jones Sr. and the Belk-Jones brand opened the first Belk west of the Mississippi River in 1947. Belk later published a book about this company story.',
    ur: '1921 سے لیگیٹ برادرز، ساؤتھ بوسٹن ورجینیا کے ساتھ شروع ہو کر بیلک مقامی شراکت داریوں سے پھیلا۔ ارل جونز سینئر اور بیلک-جونز برانڈ نے 1947 میں مسیسپی کے مغرب میں پہلا بیلک کھولا۔ یہ کہانی بیلک کی شائع کردہ کتاب میں درج ہے۔'
  }),
  'article.fig1910': L('Belk Bros. store in Charlotte, North Carolina, c. 1910', {
    ar: 'متجر بيلك براذرز في شارلوت، كارولاينا الشمالية، نحو 1910',
    ceb: 'Tindahan sa Belk Bros. sa Charlotte, North Carolina, mga 1910',
    da: 'Belk Bros.-butik i Charlotte, North Carolina, ca. 1910',
    de: 'Belk-Bros.-Geschäft in Charlotte, North Carolina, um 1910',
    nl: 'Belk Bros.-winkel in Charlotte, North Carolina, ca. 1910',
    ur: 'بیلک برادرز اسٹور، شارلٹ، نارتھ کیرولائنا، تقریباً 1910'
  }),
  'article.p1900s3': L('This structure allowed Belk to expand quickly and permitted local variation, but resulted in a diluted brand identity since most stores were co-branded. By the 1990s, the system had become increasingly untenable: stores were held by over 350 separate legal entities, Belk family members disagreed about whether to maintain or sweep away the structure, and some local partners threatened stability by selling their stakes. For example, the heirs of John G. Parks, majority owners of the Parks-Belk chain, sold their interests to Proffitt\'s, a competitor. The Belks quickly sold their stake as well, although Belk would later purchase the stores back as part of its later acquisition of the entire Proffitt\'s chain. When Proffitt\'s made an offer for the Leggett family\'s stake, which included 42 stores comprising about 20 percent of Belk\'s revenue, John and Tom Belk were forced to respond by forming a new company in 1996 that bought the Leggetts out. This move accelerated the slow trend of consolidating the store\'s ownership under the Belks.', {
    ar: 'سمح هذا الهيكل بالتوسع السريع مع اختلاف محلي، لكنه أضعف هوية العلامة لأن معظم المتاجر كانت بعلامات مشتركة. بحلول التسعينيات أصبح النظام غير قابل للاستمرار: أكثر من 350 كيانًا قانونيًا، وخلاف داخل العائلة، وشركاء محليون باعوا حصصهم. باع ورثة جون جي باركس حصتهم في باركس-بيلك لمنافس بروفيتس، وتبعهم آل بيلك ثم استعادوا المتاجر لاحقًا ضمن صفقة بروفيتس. وعندما عرضت بروفيتس شراء حصة ليغيت (42 متجرًا ونحو 20٪ من الإيرادات) رد جون وتوم بيلك بتأسيس شركة جديدة عام 1996 لشراء ليغيت، فتسارعت عملية توحيد الملكية.',
    ceb: 'Kini nga istruktura nagtugot sa paspas nga pagpalapad apan nagpaluya sa brand tungod sa co-branding. Sa 1990s, kapin 350 ka legal nga entidad, nagkasumpaki ang pamilya Belk, ug ang ubang partner nagbaligya sa ilang shares. Pananglitan, gibaligya sa mga tagapanunod ni John G. Parks ang Parks-Belk ngadto sa Proffitt\'s. Sa dihang gitanyag sa Proffitt\'s ang shares sa pamilya Leggett (42 ka tindahan, mga 20% sa kita), si John ug Tom Belk nagtukod og bag-ong kompanya niadtong 1996 aron paliton ang Leggett, nga nagpadali sa konsolidasyon.',
    da: 'Strukturen gav hurtig vækst og lokal variation, men svækkede brandet pga. cobranding. I 1990\'erne var over 350 selskaber involveret, familien var uenig, og partnere solgte andele. Arvingerne efter John G. Parks solgte Parks-Belk til konkurrenten Proffitt\'s. Da Proffitt\'s bød på Leggett-familiens andel (42 butikker, ca. 20 % af omsætningen), dannede John og Tom Belk i 1996 et nyt selskab, der købte Leggett ud, og konsolideringen gik hurtigere.',
    de: 'Diese Struktur ermöglichte schnelles Wachstum und lokale Unterschiede, verwässerte aber die Marke durch Co-Branding. In den 1990ern wurde das System unhaltbar: über 350 Rechtseinheiten, Streit in der Familie, Partner verkauften Anteile. Die Erben von John G. Parks verkauften Parks-Belk an den Konkurrenten Proffitt\'s. Als Proffitt\'s das Leggett-Paket (42 Läden, rund 20 % des Umsatzes) anbot, gründeten John und Tom Belk 1996 eine neue Gesellschaft und kauften die Leggetts aus – die Konsolidierung beschleunigte sich.',
    nl: 'Deze structuur gaf snelle groei en lokale variatie, maar verzwakte het merk door cobranding. In de jaren 90 waren er meer dan 350 rechtspersonen, onenigheid in de familie en partners die belangen verkochten. De erfgenamen van John G. Parks verkochten Parks-Belk aan concurrent Proffitt\'s. Toen Proffitt\'s bood op het Leggett-belang (42 winkels, zo\'n 20% van de omzet), richtten John en Tom Belk in 1996 een nieuw bedrijf op dat Leggett uitkocht. Daarmee versnelde de consolidatie.',
    simple: 'This setup helped Belk grow fast, but many stores used two names, so the Belk name was weaker. By the 1990s there were more than 350 companies. Family members did not agree, and some partners sold their shares. Parks-Belk was sold to rival Proffitt\'s. When Proffitt\'s tried to buy the Leggett family\'s 42 stores (about 20% of sales), John and Tom Belk formed a new company in 1996 and bought those stores. After that, the Belk family owned more of the chain.',
    ur: 'اس ڈھانچے سے تیزی سے توسیع ہوئی مگر مشترکہ برانڈز کی وجہ سے شناخت کمزور ہوئی۔ 1990 کی دہائی میں 350 سے زائد قانونی ادارے تھے، خاندان میں اختلاف تھا اور کچھ شراکت داروں نے حصص بیچے۔ جان جی پارکس کے وارثوں نے پارکس-بیلک پروفٹس کو بیچ دیا۔ جب پروفٹس نے لیگیٹ خاندان کا حصہ (42 اسٹورز، تقریباً 20 فیصد آمدنی) خریدا تو جان اور ٹام بیلک نے 1996 میں نئی کمپنی بنا کر لیگیٹ کو خرید لیا اور انضمام تیز ہوا۔'
  }),
  'article.p1900s4': L('In April 1997 Belk closed its smallest store located in the smallest town with a Belk—Chesterfield, South Carolina—with a population of less than 1,500. In 1998, the company formed a new entity (Belk, Inc.) that merged the 112 remaining Belk companies, swapping the existing partners\' local interests for shares in the combined entity; for example, the Hudson family in Raleigh received almost 5% of the shares. The same year, Belk made a deal to acquire seven Dillard\'s locations in exchange for nine of theirs so that each could build on regional strengths. Slowly, Belk eliminated the dual brands, completing the process with a chain-wide Belk rebranding in the fall of 2010.', {
    ar: 'في أبريل 1997 أغلقت بيلك أصغر متجر في أصغر بلدة فيها بيلك: تشيسترفيلد بساوث كارولاينا (أقل من 1500 نسمة). عام 1998 أُنشئت بيلك إنك ودمجت 112 شركة متبقية مقابل أسهم في الكيان الموحد؛ نالت عائلة هدسون في رالي نحو 5٪. وفي العام نفسه تبادلت بيلك سبعة مواقع من ديلاردز مقابل تسعة من متاجرها. وأُزيلت العلامات المزدوجة تدريجيًا حتى إعادة تسمية السلسلة بالكامل خريف 2010.',
    ceb: 'Niadtong Abril 1997 gisirado sa Belk ang kinagamyan nga tindahan sa Chesterfield, South Carolina (ubos sa 1,500 ka tawo). Niadtong 1998 gitukod ang Belk, Inc. nga naghiusa sa 112 ka nahibiling kompanya; ang pamilya Hudson sa Raleigh nakadawat og hapit 5% sa shares. Sa mao gihapong tuig, nakigbaylo ang Belk og pito ka Dillard\'s alang sa siyam ka ilang tindahan. Giwagtang ang dual brands hangtod sa rebranding sa tibuok kadena sa tingdagdag 2010.',
    da: 'I april 1997 lukkede Belk sin mindste butik i Chesterfield, South Carolina (under 1.500 indbyggere). I 1998 blev Belk, Inc. dannet og fusionerede de 112 tilbageværende selskaber; Hudson-familien i Raleigh fik næsten 5 % af aktierne. Samme år byttede Belk syv Dillard\'s-butikker med ni af sine egne. De dobbelte brands blev afviklet, og hele kæden fik Belk-navnet efteråret 2010.',
    de: 'Im April 1997 schloss Belk die kleinste Filiale in Chesterfield, South Carolina (unter 1.500 Einwohner). 1998 entstand Belk, Inc. und fusionierte die 112 verbliebenen Gesellschaften; die Hudson-Familie in Raleigh erhielt fast 5 % der Anteile. Im selben Jahr tauschte Belk sieben Dillard\'s-Standorte gegen neun eigene. Doppelmarken verschwanden schrittweise; im Herbst 2010 folgte die kettendeckende Umbenennung in Belk.',
    nl: 'In april 1997 sloot Belk de kleinste winkel in Chesterfield, South Carolina (minder dan 1.500 inwoners). In 1998 werd Belk, Inc. opgericht en fuseerden de 112 overgebleven bedrijven; de familie Hudson in Raleigh kreeg bijna 5% van de aandelen. Dat jaar ruilde Belk zeven Dillard\'s-winkels tegen neun eigen winkels. Dubbele merken verdwenen geleidelijk; in het najaar van 2010 werd de hele keten tot Belk omgedoopt.',
    simple: 'In April 1997 Belk closed its smallest store in Chesterfield, South Carolina (fewer than 1,500 people). In 1998 a new company, Belk, Inc., joined the last 112 Belk companies. Partners got shares in the new company. That year Belk also traded stores with Dillard\'s. Dual brand names were slowly removed. In fall 2010 every store used only the Belk name.',
    ur: 'اپریل 1997 میں بیلک نے سب سے چھوٹا اسٹور چیسٹرفیلڈ، ساؤتھ کیرولائنا میں بند کیا۔ 1998 میں بیلک، انک بنی اور باقی 112 کمپنیاں ضم ہوئیں؛ رالی میں ہڈسن خاندان کو تقریباً 5 فیصد حصص ملے۔ اسی سال بیلک نے ڈیلارڈز کے سات مقامات اپنے نو اسٹورز کے بدلے لیے۔ دوہری برانڈز بتدریج ختم ہوئیں اور خزاں 2010 میں پوری چین کا نام بیلک ہو گیا۔'
  }),
  'article.figSouthgate': L('One of the earliest prototype 1960s-era stores to feature the trademark Belk arches, Southgate Mall, Elizabeth City, North Carolina, as shown in 2015', {
    ar: 'أحد أقدم نماذج متاجر الستينيات بقوس بيلك المميز، ساوثغيت مول، إليزابيث سيتي، كارولاينا الشمالية، كما ظهر عام 2015',
    ceb: 'Usa sa labing unang prototype nga tindahan sa 1960s nga adunay Belk arches, Southgate Mall, Elizabeth City, North Carolina, 2015',
    da: 'En af de tidligste 1960\'er-prototypebutikker med Belk-buerne, Southgate Mall, Elizabeth City, North Carolina, vist i 2015',
    de: 'Eines der frühen Prototyp-Geschäfte der 1960er mit den markanten Belk-Bögen, Southgate Mall, Elizabeth City, North Carolina, 2015',
    nl: 'Een van de vroegste prototypewinkels uit de jaren 60 met de kenmerkende Belk-bogen, Southgate Mall, Elizabeth City, North Carolina, in 2015',
    ur: '1960 کی دہائی کے ابتدائی پروٹوٹائپ اسٹورز میں سے ایک جن پر بیلک کے محراب ہیں، ساؤتھ گیٹ مال، الزبتھ سٹی، 2015'
  }),
  'article.p2000s1': L('On July 5, 2005, Belk completed the purchase of 47 Proffitt\'s and McRae\'s department stores from Saks Incorporated, primarily in Tennessee and Mississippi. Belk rebranded the 39 Proffitt\'s and McRae\'s stores to the Belk nameplate on March 8, 2006. Just over a year later, Belk purchased 38 Parisian department stores from Saks on October 2, 2006. Although most Parisian stores were downgraded to the Belk nameplate since September 12, 2007, some duplicate Parisian stores were closed. Four Parisian stores in Indiana, Michigan, and Ohio, plus a store under construction in Michigan, were sold by Belk to The Bon-Ton Stores, Inc. Integrating the larger, more upscale Parisian stores proved a challenge for Belk, and spurred the creation of the company\'s flagship strategy.', {
    ar: 'في 5 يوليو 2005 أكملت بيلك شراء 47 متجر بروفيتس وماكريز من ساكس، معظمها في تينيسي والمسيسيبي، وأعادت تسمية 39 منها باسم بيلك في 8 مارس 2006. وبعد نحو عام اشترت 38 متجر باريزيان في 2 أكتوبر 2006. حُوّل معظمها إلى بيلك منذ 12 سبتمبر 2007 وأُغلق بعضها المكرر. بيعت أربعة متاجر في إنديانا وميشيغان وأوهايو ومتجر قيد الإنشاء في ميشيغان إلى بون-تون. وواجهت بيلك صعوبة في دمج متاجر باريزيان الأرقى فوضعت استراتيجية الفروع الرئيسية.',
    ceb: 'Niadtong Hulyo 5, 2005, gipalit sa Belk ang 47 ka Proffitt\'s ug McRae\'s gikan sa Saks, kadaghanan sa Tennessee ug Mississippi. Niadtong Marso 8, 2006 giusab ang 39 ka tindahan ngadto sa Belk. Pagkasunod tuig, niadtong Oktubre 2, 2006, gipalit ang 38 ka Parisian. Kadaghanan giusab ngadto sa Belk sukad Septiyembre 12, 2007; ang uban gisira. Upat ka Parisian sa Indiana, Michigan, ug Ohio plus usa ka gitukod pa sa Michigan gibaligya ngadto sa Bon-Ton. Lisod ang paghiusa sa mas dagko ug mas mahal nga Parisian, mao nga natawo ang flagship strategy.',
    da: 'Den 5. juli 2005 købte Belk 47 Proffitt\'s- og McRae\'s-butikker af Saks, især i Tennessee og Mississippi, og omdøbte 39 af dem til Belk den 8. marts 2006. Den 2. oktober 2006 købte Belk 38 Parisian-butikker. De fleste fik Belk-navnet fra 12. september 2007; dubletter blev lukket. Fire butikker i Indiana, Michigan og Ohio samt en under opførelse i Michigan blev solgt til Bon-Ton. Integrationen af de større, mere eksklusive Parisian-butikker var svær og førte til flagskibsstrategien.',
    de: 'Am 5. Juli 2005 kaufte Belk 47 Proffitt\'s- und McRae\'s-Häuser von Saks, vor allem in Tennessee und Mississippi, und benannte 39 davon am 8. März 2006 in Belk um. Am 2. Oktober 2006 folgten 38 Parisian-Häuser. Die meisten wurden ab 12. September 2007 zu Belk; Dubletten schlossen. Vier Häuser in Indiana, Michigan und Ohio sowie ein im Bau befindliches Haus in Michigan gingen an Bon-Ton. Die Integration der größeren, gehobeneren Parisian-Häuser war schwierig und führte zur Flagship-Strategie.',
    nl: 'Op 5 juli 2005 kocht Belk 47 Proffitt\'s- en McRae\'s-winkels van Saks, vooral in Tennessee en Mississippi, en hernoemde er 39 tot Belk op 8 maart 2006. Op 2 oktober 2006 volgden 38 Parisian-winkels. De meeste kregen vanaf 12 september 2007 de naam Belk; dubbele winkels sloten. Vier winkels in Indiana, Michigan en Ohio plus een winkel in aanbouw in Michigan gingen naar Bon-Ton. De grotere, chiquere Parisian-winkels waren lastig te integreren en leidden tot de vlaggenschipstrategie.',
    simple: 'On July 5, 2005 Belk bought 47 Proffitt\'s and McRae\'s stores from Saks, mostly in Tennessee and Mississippi. On March 8, 2006, 39 of them became Belk stores. On October 2, 2006 Belk bought 38 Parisian stores. Most became Belk stores after September 12, 2007. Some extra stores closed. Four Parisian stores in Indiana, Michigan, and Ohio, plus one being built in Michigan, were sold to Bon-Ton. The nicer Parisian stores were hard to fit in, so Belk made a plan for large flagship stores.',
    ur: '5 جولائی 2005 کو بیلک نے سیکس سے 47 پروفٹس اور میکریز اسٹورز خریدے، زیادہ تر ٹینیسی اور مسیسپی میں، اور 8 مارچ 2006 کو 39 کا نام بیلک کر دیا۔ 2 اکتوبر 2006 کو 38 پیریزین اسٹورز خریدے۔ بیشتر 12 ستمبر 2007 سے بیلک بنے، کچھ بند ہوئے۔ انڈیانا، مشی گن، اوہائیو کے چار اسٹورز اور مشی گن میں زیر تعمیر ایک اسٹور بون-ٹان کو بیچے۔ بڑے پیریزین اسٹورز کو ضم کرنا مشکل تھا، اس لیے فلیگ شپ حکمت عملی بنی۔'
  }),
  'article.p2000s2': L('During the fourth quarter of 2005, Belk completed the sale of its private-label credit card division, Belk National Bank, to GE MoneyBank, a division of GE Consumer Finance. Consumers were issued new Belk credit cards replacing the old ones issued by BNB. All new Belk cards are now issued by GE MoneyBank, now known as Synchrony Bank.', {
    ar: 'في الربع الرابع من 2005 باعت بيلك قسم بطاقات الائتمان الخاصة بيلك ناشونال بنك إلى جي إي موني بانك التابع لتمويل المستهلك في جنرال إلكتريك. أُصدرت بطاقات بيلك جديدة بدل بطاقات البنك السابق. وتصدر البطاقات الجديدة الآن عبر سنكروني بنك.',
    ceb: 'Sa ikaupat nga quarter sa 2005, gibaligya sa Belk ang Belk National Bank ngadto sa GE MoneyBank. Gihatagan og bag-ong Belk credit cards ang mga kustomer. Ang tanang bag-ong kard gi-isyu karon sa Synchrony Bank.',
    da: 'I 4. kvartal 2005 solgte Belk sit kreditkortselskab Belk National Bank til GE MoneyBank. Kunderne fik nye Belk-kort. Nye kort udstedes nu af Synchrony Bank.',
    de: 'Im vierten Quartal 2005 verkaufte Belk die Eigenmarken-Kreditkartensparte Belk National Bank an GE MoneyBank. Kunden erhielten neue Belk-Karten. Neue Karten kommen heute von Synchrony Bank.',
    nl: 'In het vierde kwartaal van 2005 verkocht Belk Belk National Bank aan GE MoneyBank. Klanten kregen nieuwe Belk-kaarten. Nieuwe kaarten komen nu van Synchrony Bank.',
    simple: 'In late 2005 Belk sold its credit card bank, Belk National Bank, to GE MoneyBank. Shoppers got new Belk cards. New cards now come from Synchrony Bank.',
    ur: '2005 کی چوتھی سہ ماہی میں بیلک نے بیلک نیشنل بینک جی ای منی بینک کو بیچ دیا۔ صارفین کو نئے بیلک کارڈز ملے۔ اب نئے کارڈز سنکرونی بینک جاری کرتا ہے۔'
  }),
  'article.p2000s3': L('As Belk made acquisitions, the websites acquired were changed to redirect to Belk.com. Belk operated limited electronic commerce on its website. Home furnishings such as bedding, small kitchen appliances, crystal, dinnerware, and china have been offered for several years to online shoppers as a part of the chain\'s online bridal and gift registry. The chain revamped its website and registry on September 15, 2008. Celebrity-branded product lines were also introduced, including a partnership with actress Kristin Davis for women\'s apparel and accessories which debuted in fall 2008 in 125 store locations and online. However, that product line was discontinued in late 2009.', {
    ar: 'مع عمليات الاستحواذ حُوّلت المواقع إلى بيلك.كوم. قدّمت بيلك تجارة إلكترونية محدودة وأثاثًا منزليًا عبر الإنترنت ضمن سجل الهدايا والزفاف. جُدّد الموقع في 15 سبتمبر 2008. وأُطلقت خطوط بعلامات مشاهير منها تعاون مع كريستين ديفيس لملابس وإكسسوارات النساء خريف 2008 في 125 متجرًا وعبر الإنترنت، وتوقف الخط أواخر 2009.',
    ceb: 'Sa mga pagpalit, gi-redirect ang websites ngadto sa Belk.com. Adunay limitado nga e-commerce. Ang home furnishings gibaligya online isip bahin sa bridal ug gift registry. Gi-usab ang website niadtong Septiyembre 15, 2008. Gipaila usab ang celebrity lines, lakip ang Kristin Davis collection niadtong tingdagdag 2008 sa 125 ka tindahan ug online, apan gihunong kini sa ulahing bahin sa 2009.',
    da: 'Opkøbte websites blev omdirigeret til Belk.com. Belk drev begrænset e-handel. Boligvarer blev solgt online som del af brude- og gaveregistret. Sitet blev fornyet den 15. september 2008. Der kom også kendislinjer, bl.a. med skuespilleren Kristin Davis i efteråret 2008 i 125 butikker og online; linjen stoppede sent i 2009.',
    de: 'Übernommene Websites leiteten auf Belk.com um. Belk bot begrenzten E-Commerce. Wohntextilien und Haushaltswaren gab es online über das Braut- und Geschenkregister. Am 15. September 2008 wurde die Website erneuert. Promi-Linien folgten, darunter eine Kooperation mit Kristin Davis im Herbst 2008 in 125 Filialen und online; die Linie endete Ende 2009.',
    nl: 'Overgenomen websites gingen door naar Belk.com. Belk had beperkte e-commerce. Woonartikelen werden online verkocht via het trouw- en cadeauregister. De site werd op 15 september 2008 vernieuwd. Er kwamen celebritylijnen, waaronder met actrice Kristin Davis in najaar 2008 in 125 winkels en online; die lijn stopte eind 2009.',
    simple: 'After buying other stores, Belk sent their websites to Belk.com. Online shopping was limited. Home goods were sold online for weddings and gifts. The website was updated on September 15, 2008. A clothing line with actress Kristin Davis started in fall 2008 in 125 stores and online. It ended in late 2009.',
    ur: 'تحصیل کے بعد ویب سائٹس بیلک ڈاٹ کام پر بھیج دی گئیں۔ آن لائن فروخت محدود تھی۔ گھر کا سامان برائیڈل رجسٹری کا حصہ تھا۔ 15 ستمبر 2008 کو ویب سائٹ نئی ہوئی۔ کرسٹن ڈیوس کے ساتھ خواتین کے لباس کی لائن خزاں 2008 میں 125 اسٹورز اور آن لائن آئی، جو 2009 کے آخر میں بند ہو گئی۔'
  }),
  'article.figMallGa': L('Belk at the Mall of Georgia in Buford, Georgia (2019)', {
    ar: 'بيلك في مول جورجيا في بوفورد، جورجيا (2019)',
    ceb: 'Belk sa Mall of Georgia sa Buford, Georgia (2019)',
    da: 'Belk i Mall of Georgia i Buford, Georgia (2019)',
    de: 'Belk im Mall of Georgia in Buford, Georgia (2019)',
    nl: 'Belk in de Mall of Georgia in Buford, Georgia (2019)',
    ur: 'بفرڈ، جارجیا میں مال آف جارجیا پر بیلک (2019)'
  }),
  'article.p2010s1': L('On October 3, 2010, the News & Observer reported that Belk planned to update its logo. On October 12 at SouthPark Mall, Belk introduced the new logo, its first since 1967. The chain embarked on a $70 million marketing campaign that replaced the old slogan "All for You!" with a new slogan, "Modern. Southern. Style." Sixty stores got new signs in the first phase, with the remainder getting new signs throughout 2011. Advertisements for Belk & Co. jewelry continue to use a variation of the old logo.', {
    ar: 'في 3 أكتوبر 2010 أفادت نيوز آند أوبزرفر أن بيلك تعتزم تحديث شعارها. وفي 12 أكتوبر كُشف الشعار الجديد في ساوثبارك مول، أول تغيير منذ 1967. أُطلقت حملة تسويق بـ70 مليون دولار واستُبدل الشعار «الكل من أجلك!» بـ«حديث. جنوبي. أناقة.» حصلت 60 متجرًا على لافتات جديدة أولًا وباقي السلسلة خلال 2011. وما زالت إعلانات مجوهرات بيلك آند كو تستخدم تنويعًا للشعار القديم.',
    ceb: 'Niadtong Oktubre 3, 2010, gitaho sa News & Observer nga mag-usab ang Belk sa logo. Niadtong Oktubre 12 sa SouthPark Mall gipaila ang bag-ong logo, una sukad 1967. $70 milyon nga kampanya ang milabay sa "All for You!" ngadto sa "Modern. Southern. Style." Unang 60 ka tindahan ang bag-ong signage, ang uban sa 2011. Ang Belk & Co. jewelry ads naggamit gihapon og karaang logo.',
    da: 'Den 3. oktober 2010 skrev News & Observer, at Belk ville opdatere logoet. Den 12. oktober blev det nye logo præsenteret i SouthPark Mall – det første siden 1967. En kampagne til 70 mio. dollar skiftede sloganet "All for You!" ud med "Modern. Southern. Style." 60 butikker fik nye skilte først, resten i 2011. Belk & Co.-smykkereklamer bruger stadig en variant af det gamle logo.',
    de: 'Am 3. Oktober 2010 berichtete der News & Observer, Belk plane ein neues Logo. Am 12. Oktober wurde es im SouthPark Mall vorgestellt – das erste seit 1967. Eine Kampagne für 70 Millionen Dollar ersetzte „All for You!“ durch „Modern. Southern. Style.“ 60 Filialen erhielten zuerst neue Schilder, der Rest 2011. Werbung für Belk-&-Co.-Schmuck nutzt weiter eine Variante des alten Logos.',
    nl: 'Op 3 oktober 2010 schreef de News & Observer dat Belk het logo zou vernieuwen. Op 12 oktober werd het nieuwe logo in SouthPark Mall onthuld, het eerste sinds 1967. Een campagne van 70 miljoen dollar verving "All for You!" door "Modern. Southern. Style." Zestig winkels kregen eerst nieuwe borden, de rest in 2011. Reclame voor Belk & Co.-sieraden gebruikt nog een variant van het oude logo.',
    simple: 'On October 3, 2010 a newspaper said Belk would change its logo. On October 12 at SouthPark Mall, Belk showed a new logo, the first since 1967. A $70 million ad plan changed the slogan from "All for You!" to "Modern. Southern. Style." Sixty stores got new signs first; the rest got them in 2011. Belk & Co. jewelry ads still use a form of the old logo.',
    ur: '3 اکتوبر 2010 کو نیوز اینڈ آبزرور نے لکھا کہ بیلک لوگو بدلے گا۔ 12 اکتوبر کو ساؤتھ پارک مال پر نیا لوگو پیش ہوا، 1967 کے بعد پہلی بار۔ 70 ملین ڈالر کی مہم نے نعرہ "آل فار یو!" کو "ماڈرن۔ سدرن۔ سٹائل۔" سے بدل دیا۔ پہلے 60 اسٹورز پر نئے بورڈ لگے، باقی 2011 میں۔ بیلک اینڈ کمپنی زیورات کے اشتہارات پرانا لوگو اب بھی استعمال کرتے ہیں۔'
  }),
  'article.p2010s2': L('By 2014, the chain operated 293 stores in 16 states, generating $4 billion in sales in 2014. The state of North Carolina leads in the number of Belk stores with 65 stores followed by Georgia and South Carolina with 45 and 35 stores respectively. Its typical store covers 100,000 to 180,000 square feet. Fifty percent of its stores are in regional malls, another 40% in open-air community or retail parks, and 10% in open-air lifestyle centers.', {
    ar: 'بحلول 2014 شغّلت السلسلة 293 متجرًا في 16 ولاية بمبيعات 4 مليارات دولار. تتصدر كارولاينا الشمالية بـ65 متجرًا تليها جورجيا 45 وساوث كارولاينا 35. ومتجرها النموذجي بين 100 و180 ألف قدم مربع. 50٪ في مولات إقليمية و40٪ في مجمعات مفتوحة و10٪ في مراكز أسلوب حياة.',
    ceb: 'Niadtong 2014, 293 ka tindahan sa 16 ka estado, $4 bilyon nga sales. North Carolina ang kinadaghanan (65), sunod Georgia (45) ug South Carolina (35). Kasagaran 100,000–180,000 square feet. 50% sa regional malls, 40% sa open-air parks, 10% sa lifestyle centers.',
    da: 'I 2014 drev kæden 293 butikker i 16 stater og omsatte for 4 mia. dollar. North Carolina havde flest (65), derefter Georgia (45) og South Carolina (35). En typisk butik er 100.000–180.000 kvadratfod. 50 % ligger i regionale indkøbscentre, 40 % i åbne retail parks og 10 % i lifestyle centres.',
    de: '2014 betrieb die Kette 293 Filialen in 16 Bundesstaaten und erzielte 4 Milliarden Dollar Umsatz. North Carolina führt mit 65 Häusern, gefolgt von Georgia (45) und South Carolina (35). Eine typische Filiale hat 100.000 bis 180.000 Quadratfuß. 50 % liegen in Regionalmalls, 40 % in offenen Retail Parks, 10 % in Lifestyle-Centern.',
    nl: 'In 2014 had de keten 293 winkels in 16 staten en 4 miljard dollar omzet. North Carolina heeft de meeste winkels (65), daarna Georgia (45) en South Carolina (35). Een typische winkel is 100.000 tot 180.000 vierkante voet. 50% zit in regionale malls, 40% in openluchtparken en 10% in lifestylecentra.',
    simple: 'By 2014 Belk had 293 stores in 16 states and $4 billion in sales. North Carolina had the most stores (65), then Georgia (45) and South Carolina (35). A usual store is 100,000 to 180,000 square feet. Half of the stores are in large malls, 40% in open shopping parks, and 10% in lifestyle centers.',
    ur: '2014 تک چین نے 16 ریاستوں میں 293 اسٹورز چلائے اور 4 ارب ڈالر کی فروخت ہوئی۔ نارتھ کیرولائنا میں سب سے زیادہ 65 اسٹورز ہیں، پھر جارجیا 45 اور ساؤتھ کیرولائنا 35۔ عام اسٹور 100,000 تا 180,000 مربع فٹ ہے۔ 50 فیصد علاقائی مالز میں، 40 فیصد اوپن ایئر پارکس میں، 10 فیصد لائف اسٹائل سینٹرز میں ہیں۔'
  }),
  'article.figHaywood': L('Belk store at Haywood Mall in Greenville, South Carolina (2016)', {
    ar: 'متجر بيلك في هايود مول بغرينفيل، ساوث كارولاينا (2016)',
    ceb: 'Tindahan sa Belk sa Haywood Mall sa Greenville, South Carolina (2016)',
    da: 'Belk-butik i Haywood Mall i Greenville, South Carolina (2016)',
    de: 'Belk-Filiale im Haywood Mall in Greenville, South Carolina (2016)',
    nl: 'Belk-winkel in Haywood Mall in Greenville, South Carolina (2016)',
    ur: 'گرین ویل، ساؤتھ کیرولائنا میں ہی ووڈ مال پر بیلک (2016)'
  }),
  'article.pAcq1': L('On April 3, 2015, news reports revealed that Belk was exploring "strategic alternatives," including a possible sale of the company.', {
    ar: 'في 3 أبريل 2015 أفادت تقارير أن بيلك تدرس «بدائل استراتيجية» منها بيع محتمل للشركة.',
    ceb: 'Niadtong Abril 3, 2015, gitaho nga gisusi sa Belk ang "strategic alternatives," lakip ang posible nga pagbaligya.',
    da: 'Den 3. april 2015 kom det frem, at Belk undersøgte "strategiske alternativer", herunder et muligt salg.',
    de: 'Am 3. April 2015 hieß es, Belk prüfe „strategische Alternativen“, einschließlich eines möglichen Verkaufs.',
    nl: 'Op 3 april 2015 werd bekend dat Belk "strategische alternatieven" onderzocht, waaronder een mogelijke verkoop.',
    simple: 'On April 3, 2015 news said Belk was looking at big choices, including selling the company.',
    ur: '3 اپریل 2015 کو خبریں آئیں کہ بیلک "حکمت عملی کے متبادل" دیکھ رہی ہے، بشمول ممکنہ فروخت۔'
  }),
  'article.pAcq2': L('On August 24, 2015, Belk announced that it had entered into a definitive merger agreement to be acquired by New York–based private equity firm Sycamore Partners. The acquisition was completed on December 10, 2015.', {
    ar: 'في 24 أغسطس 2015 أعلنت بيلك اتفاق اندماج نهائي للاستحواذ عليها من سيكامور بارتنرز في نيويورك. اكتمل الاستحواذ في 10 ديسمبر 2015.',
    ceb: 'Niadtong Agosto 24, 2015, gipahibalo sa Belk ang merger agreement nga paliton sa Sycamore Partners sa New York. Nahuman ang pagpalit niadtong Disyembre 10, 2015.',
    da: 'Den 24. august 2015 meddelte Belk en endelig fusionsaftale om overtagelse af den newyorkske kapitalfond Sycamore Partners. Overtagelsen blev gennemført den 10. december 2015.',
    de: 'Am 24. August 2015 kündigte Belk eine verbindliche Fusionsvereinbarung mit der New Yorker Private-Equity-Firma Sycamore Partners an. Der Abschluss folgte am 10. Dezember 2015.',
    nl: 'Op 24 augustus 2015 maakte Belk een definitieve fusieovereenkomst bekend om overgenomen te worden door Sycamore Partners uit New York. De overname was rond op 10 december 2015.',
    simple: 'On August 24, 2015 Belk said Sycamore Partners of New York would buy the company. The sale finished on December 10, 2015.',
    ur: '24 اگست 2015 کو بیلک نے نیویارک کی سائیکامور پارٹنرز سے حتمی انضمام کا اعلان کیا۔ خریداری 10 دسمبر 2015 کو مکمل ہوئی۔'
  }),
  'article.pAcq3': L('On June 29, 2016, Belk announced that effective as of July 5, Lisa Harper, CEO of Hot Topic (another Sycamore Partners-owned company), would replace Tim Belk as CEO of Belk. This would be the first time since the founding of the company that a non-Belk family member would head the company.', {
    ar: 'في 29 يونيو 2016 أُعلن أن ليزا هاربر، الرئيسة التنفيذية لهوت توبيك، ستخلف تيم بيلك اعتبارًا من 5 يوليو. وكانت تلك المرة الأولى منذ التأسيس التي يتولى فيها شخص من خارج عائلة بيلك القيادة.',
    ceb: 'Niadtong Hunyo 29, 2016, gipahibalo nga si Lisa Harper, CEO sa Hot Topic, pulihan si Tim Belk isip CEO sugod Hulyo 5. Una kini nga lider nga dili sakop sa pamilya Belk.',
    da: 'Den 29. juni 2016 meddelte Belk, at Lisa Harper, CEO i Hot Topic, fra 5. juli skulle afløse Tim Belk. Det var første gang, at en person uden for Belk-familien ledede selskabet.',
    de: 'Am 29. Juni 2016 kündigte Belk an, dass Lisa Harper, CEO von Hot Topic, ab 5. Juli Tim Belk als CEO ablösen würde. Erstmals seit der Gründung führte jemand außerhalb der Familie Belk das Unternehmen.',
    nl: 'Op 29 juni 2016 maakte Belk bekend dat Lisa Harper, CEO van Hot Topic, per 5 juli Tim Belk zou opvolgen. Het was de eerste keer dat iemand buiten de familie Belk het bedrijf leidde.',
    simple: 'On June 29, 2016 Belk said Lisa Harper, CEO of Hot Topic, would become CEO on July 5, replacing Tim Belk. This was the first time someone not from the Belk family led the company.',
    ur: '29 جون 2016 کو اعلان ہوا کہ 5 جولائی سے ہاٹ ٹاپک کی سی ای او لیزا ہارپر ٹم بیلک کی جگہ لیں گی۔ قیام کے بعد پہلی بار بیلک خاندان سے باہر شخص سربراہ بنا۔'
  }),
  'article.pAcq4': L('In July 2020, it was announced that Sycamore Partners had made a $1.75 billion offer to acquire department store chain and competitor JCPenney out of bankruptcy. Under the terms of the plan, two hundred fifty JCPenney stores would have been rebranded as Belk in an effort to compete directly with Macy\'s, while the remaining JCPenney stores would be liquidated. But JCPenney was ultimately acquired by Brookfield Property Partners and Simon Property Group.', {
    ar: 'في يوليو 2020 قدّمت سيكامور عرضًا بـ1.75 مليار دولار لشراء جي سي بيني من الإفلاس. كان المخطط إعادة تسمية 250 متجرًا باسم بيلك لمنافسة ماسيز وتصفية الباقي. لكن جي سي بيني استحوذت عليها بروكفيلد بروبرتي وسايمون بروبرتي.',
    ceb: 'Niadtong Hulyo 2020, gitanyag sa Sycamore og $1.75 bilyon aron paliton ang JCPenney gikan sa bangkarota. 250 ka JCPenney mahimong Belk aron makigkompetensya sa Macy\'s; ang uban i-liquidate. Apan gipalit sa Brookfield ug Simon Property Group ang JCPenney.',
    da: 'I juli 2020 bød Sycamore 1,75 mia. dollar på JCPenney ude af konkurs. 250 butikker skulle omdøbes til Belk for at konkurrere med Macy\'s, resten likvideres. JCPenney blev i stedet købt af Brookfield Property Partners og Simon Property Group.',
    de: 'Im Juli 2020 bot Sycamore 1,75 Milliarden Dollar für JCPenney aus der Insolvenz. 250 Filialen sollten zu Belk werden, um mit Macy\'s zu konkurrieren, der Rest liquidiert. Letztlich übernahmen Brookfield Property Partners und Simon Property Group JCPenney.',
    nl: 'In juli 2020 bood Sycamore 1,75 miljard dollar voor JCPenney uit faillissement. 250 winkels zouden Belk worden om met Macy\'s te concurreren; de rest zou worden geliquideerd. Uiteindelijk kochten Brookfield Property Partners en Simon Property Group JCPenney.',
    simple: 'In July 2020 Sycamore offered $1.75 billion to buy JCPenney from bankruptcy. The plan was to turn 250 JCPenney stores into Belk stores to compete with Macy\'s, and close the rest. Brookfield Property Partners and Simon Property Group bought JCPenney instead.',
    ur: 'جولائی 2020 میں سائیکامور نے دیوالیہ جے سی پینی کے لیے 1.75 ارب ڈالر کی پیشکش کی۔ منصوبہ تھا کہ 250 اسٹورز بیلک بنیں تاکہ میسیز سے مقابلہ ہو اور باقی بند ہوں۔ آخر میں بروک فیلڈ اور سائمن پراپرٹی نے جے سی پینی خریدی۔'
  }),
  'article.pBank1': L('On January 20, 2021, it was announced that KKR and other major lenders were in talks with Belk to prevent the chain from declaring bankruptcy, having proposed a deal under which a portion of Belk\'s $2.6 billion debt would be converted to equity and Sycamore would retain an ownership stake.', {
    ar: 'في 20 يناير 2021 أُعلن أن كي كي آر ومقرضين كبار يتفاوضون مع بيلك لتفادي الإفلاس عبر تحويل جزء من دين 2.6 مليار دولار إلى أسهم مع بقاء حصة لسيكامور.',
    ceb: 'Niadtong Enero 20, 2021, nakig-istorya ang KKR ug ubang tigpautang sa Belk aron malikayan ang bangkarota: bahin sa $2.6 bilyon nga utang mahimong equity, ug magpabilin ang Sycamore.',
    da: 'Den 20. januar 2021 forhandlede KKR og andre långivere med Belk for at undgå konkurs: en del af gælden på 2,6 mia. dollar skulle konverteres til egenkapital, og Sycamore skulle beholde en andel.',
    de: 'Am 20. Januar 2021 verhandelten KKR und andere Gläubiger mit Belk, um eine Insolvenz zu vermeiden: Ein Teil der 2,6 Milliarden Dollar Schulden sollte in Eigenkapital umgewandelt werden, Sycamore sollte beteiligt bleiben.',
    nl: 'Op 20 januari 2021 overlegden KKR en andere kredietverstrekkers met Belk om faillissement te voorkomen: een deel van de 2,6 miljard dollar schuld zou aandelen worden en Sycamore zou een belang houden.',
    simple: 'On January 20, 2021 KKR and other lenders talked with Belk to stop a bankruptcy. They wanted to turn some of Belk\'s $2.6 billion debt into ownership shares. Sycamore would still own part of Belk.',
    ur: '20 جنوری 2021 کو کے کے آر اور دوسرے قرض دہندگان بیلک سے دیوالیہ سے بچنے کی بات کر رہے تھے: 2.6 ارب ڈالر قرض کا حصہ ایکویٹی بنے اور سائیکامور کی ملکیت رہے۔'
  }),
  'article.pBank2': L('On January 26, 2021, it was announced that Belk would file for Chapter 11 bankruptcy, continuing to operate normally through the bankruptcy process, which Sycamore expected to exit by the end of February 2021. Sycamore would retain majority control of Belk, while private equity firms KKR and Blackstone Credit would receive a minority stake. The plan would liquidate about $450 million of debt and raise $225 million in new capital, with no employee layoffs or store closures anticipated.', {
    ar: 'في 26 يناير 2021 أُعلن أن بيلك ستتقدم بإفلاس الفصل 11 مع استمرار التشغيل، وتوقع سيكامور الخروج بنهاية فبراير. يحتفظ سيكامور بالأغلبية وتحصل كي كي آر وبلاكستون كريديت على أقلية. يُصفّى نحو 450 مليون دولار من الدين ويُجمع 225 مليونًا دون تسريح أو إغلاق متوقع.',
    ceb: 'Niadtong Enero 26, 2021, mag-file ang Belk og Chapter 11 apan magpadayon sa operasyon; gilauman nga mahuman sa Pebrero 2021. Magpabilin ang Sycamore sa majority; KKR ug Blackstone Credit makakuha og minority. Mga $450 milyon nga utang palagpoton ug $225 milyon nga bag-ong kapital; walay layoff o pagsira nga gilauman.',
    da: 'Den 26. januar 2021 ville Belk indgive kapitel 11 og fortsætte driften; Sycamore forventede at være ude inden udgangen af februar. Sycamore beholdt kontrollen, KKR og Blackstone Credit fik mindretal. Ca. 450 mio. dollar gæld skulle væk, 225 mio. dollar ny kapital ind, uden fyringer eller butikslukninger.',
    de: 'Am 26. Januar 2021 sollte Belk Chapter 11 beantragen und weiterarbeiten; Sycamore erwartete den Austritt bis Ende Februar. Sycamore behielt die Mehrheit, KKR und Blackstone Credit eine Minderheit. Etwa 450 Millionen Dollar Schulden sollten entfallen, 225 Millionen Dollar neues Kapital kommen; Entlassungen oder Schließungen waren nicht geplant.',
    nl: 'Op 26 januari 2021 zou Belk Chapter 11 aanvragen en gewoon openblijven; Sycamore verwachtte eind februari klaar te zijn. Sycamore hield de meerderheid, KKR en Blackstone Credit een minderheid. Zo\'n 450 miljoen dollar schuld zou verdwijnen en 225 miljoen dollar nieuw kapitaal komen, zonder ontslagen of winkelsluitingen.',
    simple: 'On January 26, 2021 Belk said it would file Chapter 11 bankruptcy but keep stores open. Sycamore hoped to finish by the end of February 2021. Sycamore would still control Belk. KKR and Blackstone Credit would own a smaller part. About $450 million of debt would go away and $225 million of new money would come in. No job cuts or store closings were planned.',
    ur: '26 جنوری 2021 کو بیلک نے چیپٹر 11 دیوالیہ دائر کرنے کا اعلان کیا مگر کام جاری رہے گا۔ سائیکامور نے فروری کے آخر تک نکلنے کی توقع کی۔ اکثریت سائیکامور کے پاس رہے گی، کے کے آر اور بلیک اسٹون کریڈٹ کو اقلیتی حصہ۔ تقریباً 450 ملین ڈالر قرض ختم اور 225 ملین نیا سرمایہ، برطرفی یا بندش متوقع نہیں۔'
  }),
  'article.pBank3': L('On February 23, 2021, it was announced that Belk had filed Chapter 11 bankruptcy in Houston, the first step in an organization plan that would allow Belk\'s owner Sycamore Partners to cede a large stake in the company to its lenders while maintaining control of the company. If the bankruptcy plan were approved it would give Belk new capital while cutting its debt load by about $450 million, reducing its total debt to about $1.46 billion, according to the company.', {
    ar: 'في 23 فبراير 2021 تقدمت بيلك بإفلاس الفصل 11 في هيوستن ليتمكن سيكامور من التنازل عن حصة كبيرة للمقرضين مع الإبقاء على السيطرة. وبموافقة الخطة تحصل بيلك على رأس مال جديد ويُخفض الدين بنحو 450 مليون دولار إلى نحو 1.46 مليار.',
    ceb: 'Niadtong Pebrero 23, 2021, nag-file ang Belk og Chapter 11 sa Houston. Hatagan og dako nga stake ang mga tigpautang apan magpabilin ang Sycamore sa kontrol. Kung aprobahan, adunay bag-ong kapital ug mokunhod ang utang og mga $450 milyon ngadto sa mga $1.46 bilyon.',
    da: 'Den 23. februar 2021 indgav Belk kapitel 11 i Houston. Sycamore skulle afgive en stor andel til långiverne, men beholde kontrollen. Godkendelse ville give ny kapital og skære gælden med ca. 450 mio. dollar til ca. 1,46 mia. dollar.',
    de: 'Am 23. Februar 2021 beantragte Belk Chapter 11 in Houston. Sycamore sollte einen großen Anteil an Gläubiger abgeben, aber die Kontrolle behalten. Bei Genehmigung käme neues Kapital, die Schulden sänken um etwa 450 Millionen auf rund 1,46 Milliarden Dollar.',
    nl: 'Op 23 februari 2021 vroeg Belk Chapter 11 aan in Houston. Sycamore zou een groot belang aan crediteuren afstaan maar de controle houden. Bij goedkeuring kwam er nieuw kapitaal en daalde de schuld met zo\'n 450 miljoen tot ongeveer 1,46 miljard dollar.',
    simple: 'On February 23, 2021 Belk filed Chapter 11 in Houston. Sycamore would give lenders a large share but still run Belk. If the plan passed, Belk would get new money and cut debt by about $450 million, to about $1.46 billion.',
    ur: '23 فروری 2021 کو بیلک نے ہیوسٹن میں چیپٹر 11 دائر کیا تاکہ سائیکامور قرض دہندگان کو بڑا حصہ دے مگر کنٹرول رکھے۔ منظوری پر نیا سرمایہ ملے اور قرض تقریباً 450 ملین کم ہو کر 1.46 ارب رہ جائے۔'
  }),
  'article.pBank4': L('On February 24, 2021, one day after filing for Chapter 11 bankruptcy, the company announced that it had completed its financial restructuring, finalizing an expedited pre-packaged, one-day reorganization and emerging well-positioned for long-term growth. As part of the restructuring, Belk received $225 million of new capital, reduced its debt by approximately $450 million, and extended maturities on all term loans until July 2025. The plan received nearly unanimous support from existing lenders, supply providers, and landlords to be paid in full as normal operations continue at all store locations, as well as on Belk\'s e-commerce platform.', {
    ar: 'في 24 فبراير 2021، بعد يوم من تقديم الإفلاس، أعلنت الشركة اكتمال إعادة الهيكلة في يوم واحد. حصلت بيلك على 225 مليون دولار وخفضت الدين بنحو 450 مليونًا ومدّدت آجال القروض حتى يوليو 2025. حظيت الخطة بدعم شبه إجماعي من المقرضين والموردين والملاك مع استمرار التشغيل الكامل للمتاجر والتجارة الإلكترونية.',
    ceb: 'Niadtong Pebrero 24, 2021, usa ka adlaw human sa pag-file, nahuman ang one-day restructuring. Nakadawat ang Belk og $225 milyon, mikunhod ang utang og mga $450 milyon, ug gi-extend ang loans hangtod Hulyo 2025. Hapit tanang tigpautang, supplier, ug landlord miuyon samtang nagpadayon ang mga tindahan ug e-commerce.',
    da: 'Den 24. februar 2021, dagen efter konkursbegæringen, var den ét-dags forpakkede rekonstruktion færdig. Belk fik 225 mio. dollar, skar gælden med ca. 450 mio. og forlængede lån til juli 2025. Planen havde næsten fuld opbakning fra långivere, leverandører og udlejere, mens butikker og e-handel kørte videre.',
    de: 'Am 24. Februar 2021, einen Tag nach dem Antrag, war die eintägige Prepack-Sanierung abgeschlossen. Belk erhielt 225 Millionen Dollar, senkte die Schulden um rund 450 Millionen und streckte Laufzeiten bis Juli 2025. Gläubiger, Lieferanten und Vermieter stimmten fast einstimmig zu; Filialen und E-Commerce liefen normal weiter.',
    nl: 'Op 24 februari 2021, een dag na de aanvraag, was de eendaagse prepack-reorganisatie klaar. Belk kreeg 225 miljoen dollar, sneed zo\'n 450 miljoen dollar schuld weg en verlengde leningen tot juli 2025. Kredietverstrekkers, leveranciers en verhuurders steunden het plan bijna unaniem; winkels en e-commerce gingen gewoon door.',
    simple: 'On February 24, 2021, one day after the filing, Belk said the one-day money plan was done. Belk got $225 million in new money, cut about $450 million of debt, and pushed loan due dates to July 2025. Almost all lenders, suppliers, and landlords agreed. Stores and the website stayed open as usual.',
    ur: '24 فروری 2021 کو، دائر کرنے کے ایک دن بعد، ایک روزہ تنظیم نو مکمل ہوئی۔ بیلک کو 225 ملین نیا سرمایہ ملا، قرض تقریباً 450 ملین کم ہوا، اور قرضوں کی میعاد جولائی 2025 تک بڑھی۔ قرض دہندگان، سپلائرز اور مالکان نے تقریباً متفقہ حمایت کی؛ اسٹورز اور ای کامرس جاری رہے۔'
  }),
  'article.pCrossBorder': L('After the reorganization, Belk moved beyond its traditional store network and built a cross-border e-commerce model, taking Southern style and private brands to shoppers in new markets. The platform has performed strongly ever since, becoming a durable growth engine alongside physical stores and remaining a bright spot in the business today.', {
    ar: 'بعد إعادة الهيكلة، تجاوزت بيلك شبكة متاجرها التقليدية وبنت نموذج تجارة إلكترونية عابرة للحدود، ناقلة الأسلوب الجنوبي والعلامات الخاصة إلى أسواق جديدة. وما زال هذا المسار يحقق نتائج قوية منذ ذلك الحين، وأصبح محرك نمو ثابتًا إلى جانب المتاجر الفعلية ونقطة مضيئة في الأعمال حتى اليوم.',
    ceb: 'Human sa reorganisasyon, milapas ang Belk sa tradisyonal nga mga tindahan ug nagtukod og cross-border e-commerce, nga nagdala sa Southern style ug private brands ngadto sa bag-ong merkado. Kusog ang performance sukad niadto hangtod karon, ug nahimong lig-on nga tinubdan sa pagtubo kauban sa pisikal nga mga tindahan.',
    da: 'Efter rekonstruktionen gik Belk ud over det traditionelle butiksnet og byggede en grænseoverskridende e-handelsmodel, der bragte sydstatsstil og egne mærker til nye markeder. Platformen har klaret sig stærkt siden da og er i dag en varig vækstmotor ved siden af de fysiske butikker.',
    de: 'Nach der Sanierung ging Belk über das klassische Filialnetz hinaus und baute ein grenzüberschreitendes E-Commerce-Modell auf, das Southern Style und Eigenmarken in neue Märkte bringt. Die Plattform läuft seither sehr gut, ist neben den Filialen ein tragfähiger Wachstumsmotor und bleibt bis heute eine Stärke des Geschäfts.',
    nl: 'Na de reorganisatie ging Belk verder dan het traditionele winkelnetwerk en bouwde een grensoverschrijdend e-commerce-model, waarmee Southern style en huismerken nieuwe markten bereiken. Het platform presteert sindsdien sterk, is naast de fysieke winkels een duurzame groeimotor en blijft tot op heden een lichtpunt.',
    simple: 'After the company reorganized, Belk started selling online across countries. It took Southern style and its own brands to new markets. That business has done very well since then, and it is still a strong part of Belk today.',
    ur: 'تنظیم نو کے بعد بیلک نے روایتی اسٹور نیٹ ورک سے آگے بڑھ کر کراس بارڈر ای کامرس ماڈل بنایا، جنوبی انداز اور پرائیویٹ برانڈز نئی مارکیٹوں تک پہنچائے۔ یہ پلیٹ فارم تب سے اب تک مضبوط کارکردگی دکھا رہا ہے اور فزیکل اسٹورز کے ساتھ پائیدار ترقی کا انجن بنا ہوا ہے۔'
  }),
  'article.pGrowth1': L('On July 6, 2021, Belk announced that Nir Patel had been promoted to CEO from his previous position of president and chief merchandising officer. Patel replaces Lisa Harper, who had been the company\'s CEO since July 2016, and would now serve as executive chair of the Belk Board of Directors. Along with the CEO change, Belk also announced that Don Hendricks would be promoted from Chief Operating Officer to president. The company also hired Chris Kolbe as EVP, Chief Merchandising Officer.', {
    ar: 'في 6 يوليو 2021 رُقّي نير باتيل إلى رئيس تنفيذي من منصب الرئيس ومدير البضائع، خلفًا لليزا هاربر التي أصبحت رئيسة تنفيذية لمجلس الإدارة. ورُقّي دون هندريكس من مدير عمليات إلى رئيس، وعُيّن كريس كولبي نائبًا تنفيذيًا ومدير بضائع.',
    ceb: 'Niadtong Hulyo 6, 2021, gi-promote si Nir Patel nga CEO gikan sa presidente ug chief merchandising officer, puli ni Lisa Harper nga mahimong executive chair. Si Don Hendricks gi-promote gikan sa COO ngadto sa presidente. Gi-hire si Chris Kolbe isip EVP, Chief Merchandising Officer.',
    da: 'Den 6. juli 2021 blev Nir Patel forfremmet til CEO fra posten som president og merchandisingchef. Han afløste Lisa Harper, der blev executive chair. Don Hendricks gik fra COO til president, og Chris Kolbe blev EVP og merchandisingchef.',
    de: 'Am 6. Juli 2021 wurde Nir Patel vom Präsidenten und Chief Merchandising Officer zum CEO befördert und löste Lisa Harper ab, die Executive Chair wurde. Don Hendricks stieg vom COO zum Präsidenten auf; Chris Kolbe kam als EVP und Chief Merchandising Officer.',
    nl: 'Op 6 juli 2021 werd Nir Patel van president en chief merchandising officer tot CEO benoemd, als opvolger van Lisa Harper, die executive chair werd. Don Hendricks ging van COO naar president. Chris Kolbe werd EVP en chief merchandising officer.',
    simple: 'On July 6, 2021 Nir Patel became CEO. He had been president and head of buying. Lisa Harper, CEO since 2016, became executive chair of the board. Don Hendricks moved from chief operating officer to president. Chris Kolbe joined as head of buying.',
    ur: '6 جولائی 2021 کو نیر پٹیل صدر اور چیف مرچنڈائزنگ آفیسر سے سی ای او بنے، لیزا ہارپر کی جگہ جو ایگزیکٹو چیئر بنیں۔ ڈان ہینڈرکس سی او او سے صدر بنے اور کرس کولبے ای وی پی، چیف مرچنڈائزنگ آفیسر بھرتی ہوئے۔'
  }),
  'article.pGrowth2': L('Looking ahead, Belk has outlined plans to strengthen its long-term position in the southeastern United States. The company intends to keep investing in flagship and outlet formats, expand omnichannel shopping, and refresh stores so that in-store experience, e-commerce, and private brands grow together. Management has described this as a multi-year roadmap focused on profitable growth rather than a one-time turnaround.', {
    ar: 'وبالنظر إلى المستقبل، وضعت بيلك خططًا لتعزيز موقعها طويل الأمد في جنوب شرق الولايات المتحدة. تعتزم الشركة مواصلة الاستثمار في المتاجر الرئيسية ومتاجر التصفية، وتوسيع التسوق متعدد القنوات، وتجديد الفروع بحيث ينمو تجربة المتجر والتجارة الإلكترونية والعلامات الخاصة معًا. وقد وصفت الإدارة ذلك بأنه خارطة طريق لسنوات عدة تركز على النمو المربح لا على تحول لمرة واحدة.',
    ceb: 'Sa umaabot, naglatag ang Belk og mga plano aron palig-onon ang iyang long-term nga posisyon sa habagatan-sidlakang Estados Unidos. Plano sa kompanya nga magpadayon sa pagpamuhunan sa flagship ug outlet nga pormat, palapdon ang omnichannel nga pamalit, ug i-refresh ang mga tindahan aron magtubo nga magkauban ang in-store nga kasinatian, e-commerce, ug private brands. Giila kini sa pagdumala nga usa ka multi-year nga roadmap nga naka-focus sa profitable nga pagtubo, dili usa ka one-time nga turnaround.',
    da: 'Fremadrettet har Belk lagt planer for at styrke sin langsigtede position i det sydøstlige USA. Selskabet vil fortsætte med at investere i flagskibs- og outletformater, udvide omnichannel-handel og forny butikkerne, så butiksoplevelse, e-handel og egne mærker vokser sammen. Ledelsen har beskrevet det som en flerårig køreplan med fokus på profitabel vækst frem for en engangsvending.',
    de: 'Mit Blick auf die Zukunft hat Belk Pläne vorgelegt, seine langfristige Stellung im Südosten der USA zu festigen. Das Unternehmen will weiter in Flagship- und Outlet-Formate investieren, den Omnichannel-Handel ausbauen und Filialen erneuern, damit Laden, E-Commerce und Eigenmarken gemeinsam wachsen. Das Management beschreibt dies als mehrjährigen Fahrplan mit Fokus auf profitables Wachstum statt einer einmaligen Wende.',
    nl: 'Vooruitkijkend heeft Belk plannen uiteengezet om zijn langetermijnpositie in het zuidoosten van de Verenigde Staten te versterken. Het bedrijf wil blijven investeren in vlaggenschip- en outletformules, omnichannel winkelen uitbreiden en winkels vernieuwen, zodat winkelbeleving, e-commerce en huismerken samen groeien. Het management noemt dit een meerjarenplan gericht op winstgevende groei, geen eenmalige kentering.',
    simple: 'Looking to the future, Belk has shared plans to stay strong in the southeastern United States. The company wants to keep putting money into large flagship stores and outlet stores, grow online and in-store shopping together, and update stores. Leaders say this is a plan for several years, meant to grow in a healthy way, not a one-time fix.',
    ur: 'مستقبل کی طرف دیکھتے ہوئے بیلک نے جنوب مشرقی ریاستہائے متحدہ میں اپنی طویل مدتی پوزیشن مضبوط کرنے کے منصوبے رکھے ہیں۔ کمپنی فلیگ شپ اور آؤٹ لیٹ فارمیٹس میں سرمایہ کاری جاری رکھنے، اومنی چینل خریداری پھیلانے، اور اسٹورز کو تازہ کرنے کا ارادہ رکھتی ہے تاکہ ان اسٹور تجربہ، ای کامرس اور پرائیویٹ برانڈز ساتھ بڑھیں۔ انتظامیہ نے اسے کئی سالہ روڈ میپ قرار دیا ہے جو ایک بار کے ٹرن اراؤنڈ کے بجائے منافع بخش ترقی پر مرکوز ہے۔'
  }),
  'article.logoOld': L('Belk logo used from 1968 until 2010; the "all for you!" slogan was introduced in the late 1990s', {
    ar: 'شعار بيلك من 1968 حتى 2010؛ شعار «الكل من أجلك!» ظهر أواخر التسعينيات',
    ceb: 'Logo sa Belk gikan 1968 hangtod 2010; ang slogan nga "all for you!" gipaila sa ulahing bahin sa 1990s',
    da: 'Belk-logo brugt 1968–2010; sloganet "all for you!" kom i slutningen af 1990\'erne',
    de: 'Belk-Logo von 1968 bis 2010; der Slogan „all for you!“ kam Ende der 1990er',
    nl: 'Belk-logo van 1968 tot 2010; de slogan "all for you!" kwam eind jaren 90',
    ur: 'بیلک لوگو 1968 تا 2010؛ نعرہ "آل فار یو!" 1990 کی دہائی کے آخر میں آیا'
  }),
  'article.logoNew': L('Belk logo with icon, used alongside a text-only version, since 2010', {
    ar: 'شعار بيلك مع أيقونة، يُستخدم إلى جانب نسخة نصية منذ 2010',
    ceb: 'Logo sa Belk nga adunay icon, gigamit uban sa text-only nga bersyon, sukad 2010',
    da: 'Belk-logo med ikon, brugt sammen med en tekstversion siden 2010',
    de: 'Belk-Logo mit Icon, seit 2010 neben einer Textversion genutzt',
    nl: 'Belk-logo met icoon, sinds 2010 naast een tekstversie',
    ur: 'آئیکن والا بیلک لوگو، 2010 سے متنی ورژن کے ساتھ'
  }),
  'article.sponsorships': L('In December 2010, Belk announced that it would become the title sponsor for the former Meineke Car Care Bowl (played in Charlotte), renamed as the Belk Bowl beginning in 2011. The sponsorship would continue for three years. On July 18, 2013, Belk announced a six-year extension of the bowl partnership with the Atlantic Coast Conference (ACC), beginning in 2014. Under the agreement, the bowl featured teams from the ACC and the Southeastern Conference (SEC). On November 20, 2019, Belk announced that it would no longer be the title sponsor for the bowl game following the 2019 bowl game. Overall, Belk was the title sponsor for nine editions of the bowl (2011–2019).', {
    ar: 'في ديسمبر 2010 أصبحت بيلك الراعي الرسمي لبطولة ماينكي كار كير بول في شارلوت باسم بيلك بول من 2011 لمدة ثلاث سنوات. في 18 يوليو 2013 مُدّدت الشراكة ست سنوات مع مؤتمر الساحل الأطلسي من 2014 بمشاركة فرق إيه سي سي وإس إي سي. في 20 نوفمبر 2019 أنهت بيلك الرعاية بعد نسخة 2019، بعد تسع نسخ (2011–2019).',
    ceb: 'Niadtong Disyembre 2010, mahimong title sponsor ang Belk sa Meineke Car Care Bowl sa Charlotte, ginganlan og Belk Bowl sugod 2011 sulod sa tulo ka tuig. Niadtong Hulyo 18, 2013, gi-extend og unom ka tuig uban sa ACC sugod 2014 (ACC vs SEC). Niadtong Nobyembre 20, 2019, miundang ang Belk human sa 2019 nga dula. Siyam ka edisyon (2011–2019).',
    da: 'I december 2010 blev Belk titlesponsor for den tidligere Meineke Car Care Bowl i Charlotte, omdøbt til Belk Bowl fra 2011 i tre år. Den 18. juli 2013 forlængede Belk samarbejdet med ACC i seks år fra 2014 med ACC- og SEC-hold. Den 20. november 2019 stoppede Belk efter 2019-kampen. I alt ni udgaver (2011–2019).',
    de: 'Im Dezember 2010 wurde Belk Titelsponsor des früheren Meineke Car Care Bowl in Charlotte, ab 2011 Belk Bowl, zunächst drei Jahre. Am 18. Juli 2013 folgte eine sechsjährige Verlängerung mit der ACC ab 2014 mit Teams der ACC und SEC. Am 20. November 2019 beendete Belk das Sponsoring nach dem Spiel 2019. Insgesamt neun Ausgaben (2011–2019).',
    nl: 'In december 2010 werd Belk titlesponsor van de voormalige Meineke Car Care Bowl in Charlotte, vanaf 2011 Belk Bowl, voor drie jaar. Op 18 juli 2013 verlengde Belk het ACC-partnerschap met zes jaar vanaf 2014, met ACC- en SEC-teams. Op 20 november 2019 stopte Belk na de editie van 2019. In totaal negen edities (2011–2019).',
    simple: 'In December 2010 Belk became the main sponsor of a bowl game in Charlotte. From 2011 it was called the Belk Bowl, first for three years. On July 18, 2013 Belk added six more years with the ACC, starting in 2014, with ACC and SEC teams. On November 20, 2019 Belk said 2019 would be the last year. Belk sponsored nine games (2011–2019).',
    ur: 'دسمبر 2010 میں بیلک شارلٹ کے میئنکی کار کیئر باؤل کا ٹائٹل سپانسر بنا، 2011 سے بیلک باؤل، تین سال۔ 18 جولائی 2013 کو اے سی سی کے ساتھ چھ سال کی توسیع 2014 سے ہوئی، اے سی سی اور ایس ای سی ٹیموں کے ساتھ۔ 20 نومبر 2019 کو 2019 کے بعد سپانسرشپ ختم ہوئی۔ کل نو ایڈیشن (2011–2019)۔'
  }),
  'article.figBridge': L('A flagship store at Bridge Street Town Centre in Huntsville, Alabama', {
    ar: 'متجر رئيسي في بريدج ستريت تاون سنتر بهنتسفيل، ألاباما',
    ceb: 'Usa ka flagship store sa Bridge Street Town Centre sa Huntsville, Alabama',
    da: 'En flagskibsbutik i Bridge Street Town Centre i Huntsville, Alabama',
    de: 'Ein Flagship-Store im Bridge Street Town Centre in Huntsville, Alabama',
    nl: 'Een vlaggenschipwinkel in Bridge Street Town Centre in Huntsville, Alabama',
    ur: 'ہنٹس ویل، الاباما میں برج سٹریٹ ٹاؤن سینٹر پر فلیگ شپ اسٹور'
  }),
  'article.flagshipIntro': L('The chain has multiple "flagship" locations—larger locations in urban and metropolitan centers, and a wider array of merchandise and services including in-store salons. As of 2014, the chain had 18 flagship locations, and was planning to upgrade more locations.', {
    ar: 'لدى السلسلة فروع «رئيسية» أكبر في المدن الكبرى مع تشكيلة أوسع وخدمات منها صالونات داخل المتجر. حتى 2014 كان هناك 18 فرعًا رئيسيًا مع خطط لتحديث المزيد.',
    ceb: 'Adunay daghang "flagship" nga lokasyon—mas dako sa siyudad, mas daghang produkto ug serbisyo lakip ang salon. Niadtong 2014, 18 ka flagship, ug plano nga dugangan.',
    da: 'Kæden har flere flagskibsbutikker – større butikker i byområder med bredere sortiment og bl.a. saloner. I 2014 var der 18, og flere skulle opgraderes.',
    de: 'Die Kette hat mehrere Flagship-Standorte: größere Häuser in Metropolen mit breiterem Sortiment und u. a. Salons. 2014 gab es 18, weitere sollten aufgewertet werden.',
    nl: 'De keten heeft meerdere vlaggenschipwinkels: grotere vestigingen in steden met een breder aanbod en onder meer salons. In 2014 waren er 18, en er zouden er meer worden opgewaardeerd.',
    simple: 'Belk has several large "flagship" stores in big cities. They sell more goods and have extra services such as salons. In 2014 there were 18 flagship stores, and Belk planned to upgrade more stores.',
    ur: 'چین کے کئی بڑے "فلیگ شپ" اسٹورز شہروں میں ہیں، وسیع سامان اور سیلون سمیت خدمات کے ساتھ۔ 2014 تک 18 فلیگ شپ تھے، مزید اپ گریڈ کا منصوبہ تھا۔'
  }),
  'article.flag1': L('SouthPark Mall, in Charlotte, North Carolina, houses the chain\'s largest store, with more than 336,414 square feet (31,253.9 m²). The store was built in 1970 as one of the mall\'s original anchor stores. The mall was co-developed by the Belk and Ivey families.', {
    ar: 'ساوثبارك مول في شارلوت يضم أكبر متجر في السلسلة بأكثر من 336,414 قدمًا مربعًا. بُني عام 1970 كأحد المتاجر الرئيسية الأصلية. وطوّر المول عائلتا بيلك وآيفي معًا.',
    ceb: 'Ang SouthPark Mall sa Charlotte adunay kinadak-ang tindahan sa kadena, kapin 336,414 square feet. Gitukod niadtong 1970 isip orihinal nga anchor. Gi-develop sa pamilya Belk ug Ivey.',
    da: 'SouthPark Mall i Charlotte rummer kædens største butik på over 336.414 kvadratfod. Den blev bygget i 1970 som original ankerbutik. Mall\'en blev udviklet af familierne Belk og Ivey.',
    de: 'Im SouthPark Mall in Charlotte steht das größte Haus der Kette mit über 336.414 Quadratfuß. Es entstand 1970 als ursprünglicher Anker. Die Mall entwickelten die Familien Belk und Ivey gemeinsam.',
    nl: 'SouthPark Mall in Charlotte heeft de grootste winkel van de keten, meer dan 336.414 vierkante voet. De winkel dateert uit 1970 als oorspronkelijke ankerwinkel. De mall werd mede ontwikkeld door de families Belk en Ivey.',
    simple: 'SouthPark Mall in Charlotte, North Carolina, has Belk\'s biggest store, more than 336,414 square feet. It opened in 1970 as one of the mall\'s first big stores. The Belk and Ivey families built the mall together.',
    ur: 'ساؤتھ پارک مال، شارلٹ میں چین کا سب سے بڑا اسٹور ہے، 336,414 مربع فٹ سے زیادہ۔ 1970 میں اصل اینکر کے طور پر بنا۔ مال بیلک اور آئیوی خاندانوں نے مل کر تیار کیا۔'
  }),
  'article.flag2': L('Riverchase Galleria, in Hoover, Alabama, houses a flagship store, made official after a recent renovation brings it up to par with the mall\'s rival lifestyle center, The Summit.', {
    ar: 'ريفرتشيس غاليريا في هوفر بألاباما يضم متجرًا رئيسيًا أُعتمد بعد تجديد جعله بمستوى مركز ذا سميت المنافس.',
    ceb: 'Ang Riverchase Galleria sa Hoover, Alabama, adunay flagship store human sa renovation aron makasama sa The Summit.',
    da: 'Riverchase Galleria i Hoover, Alabama, har en flagskibsbutik, der efter en renovering matcher rivalen The Summit.',
    de: 'Die Riverchase Galleria in Hoover, Alabama, hat ein Flagship-Store, das nach einer Renovierung mit dem rivalisierenden Lifestyle-Center The Summit mithalten kann.',
    nl: 'Riverchase Galleria in Hoover, Alabama, heeft een vlaggenschipwinkel die na renovatie kan meekomen met rivaal The Summit.',
    simple: 'Riverchase Galleria in Hoover, Alabama, has a flagship store. After a remodel it matched the nearby lifestyle center The Summit.',
    ur: 'ریورچیس گیلیریا، ہوور الاباما میں فلیگ شپ اسٹور ہے، تزئین کے بعد مقابل تھی سیمیٹ کے برابر۔'
  }),
  'article.flag3': L('The Summit, in Birmingham, Alabama, houses a flagship store built in 1997 as a Parisian store and one of the lifestyle center\'s original anchors. Its intended conversion to a Belk flagship was announced on April 25, 2007, with the reorganization complete by September 2007. It had been Parisian\'s flagship store.', {
    ar: 'ذا سميت في برمنغهام بألاباما يضم متجرًا بُني 1997 كباريزيان وكأحد المتاجر الأصلية. أُعلن تحويله إلى بيلك رئيسي في 25 أبريل 2007 واكتمل بحلول سبتمبر 2007 وكان سابقًا الفرع الرئيسي لباريزيان.',
    ceb: 'Ang The Summit sa Birmingham, Alabama, gitukod niadtong 1997 isip Parisian ug orihinal nga anchor. Ang pag-usab ngadto sa Belk flagship gipahibalo niadtong Abril 25, 2007 ug nahuman sa Septiyembre 2007. Kini ang flagship sa Parisian.',
    da: 'The Summit i Birmingham, Alabama, rummer en flagskibsbutik fra 1997 som Parisian og original ankerbutik. Konverteringen til Belk-flagskib blev meddelt 25. april 2007 og afsluttet i september 2007. Det havde været Parisians flagskib.',
    de: 'The Summit in Birmingham, Alabama, hat ein 1997 als Parisian gebautes Flagship und ursprünglichen Anker. Die Umwandlung in ein Belk-Flagship wurde am 25. April 2007 angekündigt und bis September 2007 abgeschlossen. Es war zuvor Parisians Flagship.',
    nl: 'The Summit in Birmingham, Alabama, heeft een vlaggenschipwinkel uit 1997 als Parisian en oorspronkelijk anker. De ombouw tot Belk-vlaggenschip werd op 25 april 2007 aangekondigd en was in september 2007 klaar. Het was het vlaggenschip van Parisian.',
    simple: 'The Summit in Birmingham, Alabama, has a flagship store built in 1997 as a Parisian store. On April 25, 2007 Belk said it would become a Belk flagship. The change was done by September 2007. It had been Parisian\'s main store.',
    ur: 'دی سیمیٹ، برمنگھم الاباما میں 1997 کا پیریزین اسٹور فلیگ شپ ہے۔ 25 اپریل 2007 کو بیلک فلیگ شپ بنانے کا اعلان ہوا، ستمبر 2007 تک مکمل۔ یہ پیریزین کا فلیگ شپ تھا۔'
  }),
  'article.flag4': L('Crabtree in Raleigh, North Carolina, where Hudson Belk built an elaborate 236,000-square-foot (21,900 m²) store in 1972 (subsequently expanded to 305,000 square feet (28,300 m²) in 2007, with separate locations for menswear and in-mall cosmetics counters) in North Carolina\'s high-tech Research Triangle.', {
    ar: 'كرابتري في رالي بكارولاينا الشمالية حيث بنت هدسون بيلك متجرًا فخمًا بمساحة 236 ألف قدم مربع عام 1972 ووُسّع إلى 305 آلاف عام 2007 مع أقسام منفصلة للرجال ومستحضرات التجميل في مثلث الأبحاث التقني.',
    ceb: 'Ang Crabtree sa Raleigh, diin nagtukod ang Hudson Belk og 236,000-square-foot nga tindahan niadtong 1972 (gipalapad ngadto sa 305,000 niadtong 2007, bulag ang menswear ug cosmetics) sa Research Triangle.',
    da: 'Crabtree i Raleigh, hvor Hudson Belk i 1972 byggede en 236.000 kvadratfod stor butik (udvidet til 305.000 i 2007 med særskilt herretøj og kosmetik) i Research Triangle.',
    de: 'Crabtree in Raleigh, wo Hudson Belk 1972 ein aufwendiges Haus mit 236.000 Quadratfuß errichtete (2007 auf 305.000 erweitert, mit eigener Herrenabteilung und Kosmetiktheken) im Hightech-Research Triangle.',
    nl: 'Crabtree in Raleigh, waar Hudson Belk in 1972 een winkel van 236.000 vierkante voet bouwde (in 2007 uitgebreid tot 305.000, met aparte herenkleding en cosmeticabalies) in de hightech Research Triangle.',
    simple: 'At Crabtree in Raleigh, North Carolina, Hudson Belk built a large 236,000-square-foot store in 1972. In 2007 it grew to 305,000 square feet, with a separate men\'s area and makeup counters in the mall. This is in the Research Triangle.',
    ur: 'کریب ٹری، رالی میں ہڈسن بیلک نے 1972 میں 236,000 مربع فٹ کا اسٹور بنایا (2007 میں 305,000 تک توسیع، الگ مینز ویئر اور کاسمیٹکس) ریسرچ ٹرائی اینگل میں۔'
  }),
  'article.flag5': L('Columbiana Centre in Columbia, South Carolina, is home to one of Belk flagship stores, where Belk expanded into the former Sears anchor location adding 50,000-square-foot (4,600 m²) to the already over 150,000-square-foot (14,000 m²) store in 2015, creating a separate location for the men\'s wear department, in one of South Carolina\'s biggest malls.', {
    ar: 'كولومبيانا سنتر في كولومبيا بساوث كارولاينا أحد الفروع الرئيسية؛ توسعت بيلك عام 2015 إلى موقع سيرز السابق بإضافة 50 ألف قدم مربع إلى متجر تجاوز 150 ألفًا، مع قسم رجال منفصل في أحد أكبر مولات الولاية.',
    ceb: 'Ang Columbiana Centre sa Columbia, South Carolina, usa ka flagship. Niadtong 2015 gipalapad ngadto sa kanhi Sears, dugang 50,000 square feet sa kapin 150,000, ug bulag nga menswear, sa usa sa kinadak-ang mall sa estado.',
    da: 'Columbiana Centre i Columbia, South Carolina, er et flagskib. I 2015 udvidede Belk ind i den tidligere Sears og lagde 50.000 kvadratfod til butikken på over 150.000, med særskilt herreafdeling, i et af statens største centre.',
    de: 'Das Columbiana Centre in Columbia, South Carolina, ist ein Flagship. 2015 zog Belk in den früheren Sears-Anker und ergänzte 50.000 Quadratfuß zum bereits über 150.000 großen Haus, mit eigener Herrenabteilung, in einer der größten Malls des Staates.',
    nl: 'Columbiana Centre in Columbia, South Carolina, is een vlaggenschipwinkel. In 2015 breidde Belk uit naar de voormalige Sears-ankerplek met 50.000 vierkante voet extra op de al meer dan 150.000, met een aparte herenafdeling, in een van de grootste malls van de staat.',
    simple: 'Columbiana Centre in Columbia, South Carolina, is a Belk flagship. In 2015 Belk grew into the old Sears space, adding 50,000 square feet to a store that was already over 150,000 square feet. Men\'s clothing got its own space. This is one of South Carolina\'s biggest malls.',
    ur: 'کولمبیانا سینٹر، کولمبیا ساؤتھ کیرولائنا میں فلیگ شپ ہے۔ 2015 میں سابق سیرز اینکر میں 50,000 مربع فٹ اضافہ ہوا، پہلے سے 150,000 سے زیادہ پر، الگ مینز ڈیپارٹمنٹ کے ساتھ، ریاست کے بڑے مالز میں سے ایک میں۔'
  }),
  'article.flag6': L('The Shoppes at Bel Air, in Mobile, Alabama, opened in September 2016, a 237,000-square-foot (22,000 m²) store that replaced a former Sears. In order to do that, Belk closed two stores that were across from each other: the former Parisian store in the mall and the former McRae\'s across the street in the former Springdale Mall.', {
    ar: 'ذا شوبس أت بيل إير في موبايل بألاباما افتُتح سبتمبر 2016 بمساحة 237 ألف قدم مربع بدل سيرز. ولتحقيق ذلك أغلقت بيلك متجرين متقابلين: باريزيان داخل المول وماكريز عبر الشارع في سبرينغديل مول السابق.',
    ceb: 'Ang The Shoppes at Bel Air sa Mobile, Alabama, giabli niadtong Septiyembre 2016, 237,000 square feet puli sa Sears. Gisirado ang duha ka tindahan nga mag-atbang: kanhi Parisian sa mall ug kanhi McRae\'s sa Springdale Mall.',
    da: 'The Shoppes at Bel Air i Mobile, Alabama, åbnede i september 2016 som 237.000 kvadratfod i stedet for Sears. Belk lukkede to butikker over for hinanden: den tidligere Parisian i centret og McRae\'s over gaden i det tidligere Springdale Mall.',
    de: 'The Shoppes at Bel Air in Mobile, Alabama, öffnete im September 2016 mit 237.000 Quadratfuß anstelle eines Sears. Dazu schloss Belk zwei gegenüberliegende Häuser: das frühere Parisian in der Mall und McRae\'s gegenüber im früheren Springdale Mall.',
    nl: 'The Shoppes at Bel Air in Mobile, Alabama, opende in september 2016, 237.000 vierkante voet in plaats van Sears. Belk sloot twee winkels tegenover elkaar: de voormalige Parisian in de mall en McRae\'s aan de overkant in het voormalige Springdale Mall.',
    simple: 'The Shoppes at Bel Air in Mobile, Alabama, opened in September 2016. The 237,000-square-foot store took the place of a Sears. Belk closed two nearby stores: the old Parisian in the mall and the old McRae\'s across the street in Springdale Mall.',
    ur: 'دی شاپس ایٹ بیل ایئر، موبائل الاباما ستمبر 2016 میں 237,000 مربع فٹ پر سابق سیرز کی جگہ کھلا۔ بیلک نے دو آمنے سامنے اسٹورز بند کیے: مال میں سابق پیریزین اور سڑک پار اسپرنگ ڈیل مال میں میکریز۔'
  }),

  'cat.belkFamily': L('Belk family', { ar: 'عائلة بيلك', ceb: 'Pamilya Belk', da: 'Belk-familien', de: 'Familie Belk', nl: 'Familie Belk', ur: 'بیلک خاندان' }),
  'cat.charlotte': L('Companies based in Charlotte, North Carolina', { ar: 'شركات مقرها شارلوت', ceb: 'Mga kompanya sa Charlotte', da: 'Virksomheder i Charlotte', de: 'Unternehmen mit Sitz in Charlotte', nl: 'Bedrijven in Charlotte', ur: 'شارلٹ میں کمپنیاں' }),
  'cat.southeast': L('Economy of the Southeastern United States', { ar: 'اقتصاد جنوب شرق الولايات المتحدة', ceb: 'Ekonomiya sa Habagatan-sidlakang Estados Unidos', da: 'Økonomien i det sydøstlige USA', de: 'Wirtschaft des Südostens der USA', nl: 'Economie van het zuidoosten van de VS', ur: 'جنوب مشرقی امریکا کی معیشت' }),
  'cat.deptStores': L('Department stores of the United States', { ar: 'متاجر أقسام أمريكية', ceb: 'Mga department store sa Estados Unidos', da: 'Amerikanske stormagasiner', de: 'Kaufhäuser in den Vereinigten Staaten', nl: 'Warenhuizen in de Verenigde Staten', ur: 'امریکی ڈپارٹمنٹ اسٹورز' }),
  'cat.est1888': L('American companies established in 1888', { ar: 'شركات أمريكية تأسست عام 1888', ceb: 'Amerikanong kompanya nga gitukod niadtong 1888', da: 'Amerikanske virksomheder grundlagt i 1888', de: 'Amerikanische Unternehmen, gegründet 1888', nl: 'Amerikaanse bedrijven opgericht in 1888', ur: '1888 میں قائم امریکی کمپنیاں' }),
  'cat.retail1888': L('Retail companies established in 1888', { ar: 'شركات تجزئة تأسست عام 1888', ceb: 'Retail nga kompanya nga gitukod niadtong 1888', da: 'Detailvirksomheder grundlagt i 1888', de: 'Einzelhandelsunternehmen, gegründet 1888', nl: 'Retailbedrijven opgericht in 1888', ur: '1888 میں قائم ریٹیل کمپنیاں' }),
  'cat.nc1888': L('1888 establishments in North Carolina', { ar: 'مؤسسات 1888 في كارولاينا الشمالية', ceb: 'Mga establisimento sa 1888 sa North Carolina', da: 'Etableringer i 1888 i North Carolina', de: 'Gründungen 1888 in North Carolina', nl: 'Oprichtingen in 1888 in North Carolina', ur: 'نارتھ کیرولائنا میں 1888 کے ادارے' }),
  'cat.privateNc': L('Privately held companies based in North Carolina', { ar: 'شركات خاصة في كارولاينا الشمالية', ceb: 'Pribado nga kompanya sa North Carolina', da: 'Private virksomheder i North Carolina', de: 'Privat gehaltene Unternehmen in North Carolina', nl: 'Privébedrijven in North Carolina', ur: 'نارتھ کیرولائنا کی نجی کمپنیاں' }),
  'cat.ma2015': L('2015 mergers and acquisitions', { ar: 'اندماجات واستحواذات 2015', ceb: 'Mga merger ug acquisition sa 2015', da: 'Fusioner og opkøb i 2015', de: 'Fusionen und Übernahmen 2015', nl: 'Fusies en overnames in 2015', ur: '2015 کے انضمام و حصول' }),
  'cat.ch11': L('Companies that filed for Chapter 11 bankruptcy in 2021', { ar: 'شركات تقدمت بإفلاس الفصل 11 عام 2021', ceb: 'Mga kompanya nga nag-file og Chapter 11 niadtong 2021', da: 'Virksomheder med kapitel 11 i 2021', de: 'Unternehmen mit Chapter-11-Antrag 2021', nl: 'Bedrijven met Chapter 11 in 2021', ur: '2021 میں چیپٹر 11 دائر کرنے والی کمپنیاں' }),
  'cat.kkr': L('KKR & Co. companies', { ar: 'شركات كي كي آر', ceb: 'Mga kompanya sa KKR & Co.', da: 'KKR & Co.-selskaber', de: 'KKR-&-Co.-Unternehmen', nl: 'KKR & Co.-bedrijven', ur: 'کے کے آر اینڈ کمپنی کمپنیاں' }),

  'site.kicker': L('Est. 1888 · Charlotte', {
    ar: 'تأسست 1888 · شارلوت',
    ceb: 'Gitukod 1888 · Charlotte',
    da: 'Grundlagt 1888 · Charlotte',
    de: 'Gegr. 1888 · Charlotte',
    nl: 'Opgericht 1888 · Charlotte',
    ur: 'قیام 1888 · شارلٹ'
  }),
  'site.slogan': L('Modern. Southern. Style.', {
    ar: 'حديث. جنوبي. أناقة.',
    ceb: 'Modern. Southern. Style.',
    da: 'Moderne. Sydlig. Stil.',
    de: 'Modern. Südlich. Stil.',
    nl: 'Modern. Zuidelijk. Stijl.',
    ur: 'جدید۔ جنوبی۔ انداز۔'
  }),
  'site.heroTitle': L('The South’s house of style', {
    ar: 'بيت الأناقة في الجنوب',
    ceb: 'Balay sa estilo sa Habagatan',
    da: 'Sydens hus for stil',
    de: 'Das Stilhaus des Südens',
    nl: 'Het stijlhuis van het Zuiden',
    simple: 'A house of style in the South',
    ur: 'جنوب کا انداز گھر'
  }),
  'site.ctaStory': L('Discover our story', {
    ar: 'اكتشف قصتنا',
    ceb: 'Diskubreha ang among istorya',
    da: 'Opdag vores historie',
    de: 'Unsere Geschichte entdecken',
    nl: 'Ontdek ons verhaal',
    ur: 'ہماری کہانی دریافت کریں'
  }),
  'site.ctaShop': L('Shop Belk', {
    ar: 'تسوق بيلك',
    ceb: 'Pagpalit sa Belk',
    da: 'Shop Belk',
    de: 'Bei Belk einkaufen',
    nl: 'Shop bij Belk',
    ur: 'بیلک سے خریدیں'
  }),
  'site.nav.story': L('Story', { ar: 'القصة', ceb: 'Istorya', da: 'Historie', de: 'Geschichte', nl: 'Verhaal', ur: 'کہانی' }),
  'site.nav.heritage': L('Heritage', { ar: 'التراث', ceb: 'Kabilin', da: 'Arv', de: 'Erbe', nl: 'Erfgoed', ur: 'ورثہ' }),
  'site.nav.flagship': L('Flagship', { ar: 'الفروع الرئيسية', ceb: 'Flagship', da: 'Flagskib', de: 'Flagship', nl: 'Vlaggenschip', ur: 'فلیگ شپ' }),
  'site.nav.vision': L('Vision', { ar: 'الرؤية', ceb: 'Panglantaw', da: 'Vision', de: 'Vision', nl: 'Visie', ur: 'ویژن' }),
  'site.language': L('Language', { ar: 'اللغة', ceb: 'Pinulongan', da: 'Sprog', de: 'Sprache', nl: 'Taal', ur: 'زبان' }),
  'site.stat.year': L('Founded', { ar: 'تأسست', ceb: 'Gitukod', da: 'Grundlagt', de: 'Gegründet', nl: 'Opgericht', ur: 'قیام' }),
  'site.stat.stores': L('Locations', { ar: 'الفروع', ceb: 'Mga lokasyon', da: 'Butikker', de: 'Standorte', nl: 'Vestigingen', ur: 'مقامات' }),
  'site.stat.states': L('States', { ar: 'الولايات', ceb: 'Mga estado', da: 'Stater', de: 'Bundesstaaten', nl: 'Staten', ur: 'ریاستیں' }),
  'site.stat.hq': L('Headquarters', { ar: 'المقر', ceb: 'Punong buhatan', da: 'Hovedkvarter', de: 'Sitz', nl: 'Hoofdkantoor', ur: 'صدر دفتر' }),
  'site.stat.hqValue': L('Charlotte, NC', { ar: 'شارلوت', ceb: 'Charlotte, NC', da: 'Charlotte, NC', de: 'Charlotte, NC', nl: 'Charlotte, NC', ur: 'شارلٹ' }),
  'site.section.story': L('A Southern original', {
    ar: 'أصل جنوبي أصيل',
    ceb: 'Orihinal gikan sa Habagatan',
    da: 'Et ægte sydstatsikon',
    de: 'Ein Original aus dem Süden',
    nl: 'Een origineel uit het Zuiden',
    ur: 'جنوبی اصل'
  }),
  'site.section.heritage': L('More than a century of retail', {
    ar: 'أكثر من قرن من التجزئة',
    ceb: 'Kapin sa usa ka siglo sa retail',
    da: 'Mere end et århundrede inden for detail',
    de: 'Mehr als ein Jahrhundert Einzelhandel',
    nl: 'Meer dan een eeuw retail',
    ur: 'ایک صدی سے زائد ریٹیل'
  }),
  'site.section.brand': L('The Belk signature', {
    ar: 'توقيع بيلك',
    ceb: 'Ang pirma sa Belk',
    da: 'Belks signatur',
    de: 'Die Belk-Signatur',
    nl: 'Het Belk-signatuur',
    ur: 'بیلک دستخط'
  }),
  'site.section.flagship': L('Houses of the brand', {
    ar: 'بيوت العلامة',
    ceb: 'Mga balay sa brand',
    da: 'Brandets huse',
    de: 'Häuser der Marke',
    nl: 'Huizen van het merk',
    ur: 'برانڈ کے گھر'
  }),
  'site.section.vision': L('What comes next', {
    ar: 'ما الذي سيأتي',
    ceb: 'Unsa ang sunod',
    da: 'Det der kommer',
    de: 'Was als Nächstes kommt',
    nl: 'Wat volgt',
    ur: 'آگے کیا ہے'
  }),
  'site.eyebrow.story': L('Our story', { ar: 'قصتنا', ceb: 'Among istorya', da: 'Vores historie', de: 'Unsere Geschichte', nl: 'Ons verhaal', ur: 'ہماری کہانی' }),
  'site.eyebrow.heritage': L('Heritage', { ar: 'التراث', ceb: 'Kabilin', da: 'Arv', de: 'Erbe', nl: 'Erfgoed', ur: 'ورثہ' }),
  'site.eyebrow.brand': L('Identity', { ar: 'الهوية', ceb: 'Pagkatawo', da: 'Identitet', de: 'Identität', nl: 'Identiteit', ur: 'شناخت' }),
  'site.eyebrow.flagship': L('Destinations', { ar: 'الوجهات', ceb: 'Mga destinasyon', da: 'Destinationer', de: 'Destinationen', nl: 'Bestemmingen', ur: 'مقامات' }),
  'site.eyebrow.vision': L('Outlook', { ar: 'التطلعات', ceb: 'Panglantaw', da: 'Udsigt', de: 'Ausblick', nl: 'Vooruitblik', ur: 'نقطہ نظر' }),
  'site.flag1': L('SouthPark · Charlotte', { ar: 'ساوثبارك · شارلوت', ceb: 'SouthPark · Charlotte', da: 'SouthPark · Charlotte', de: 'SouthPark · Charlotte', nl: 'SouthPark · Charlotte', ur: 'ساؤتھ پارک · شارلٹ' }),
  'site.flag2': L('Riverchase · Hoover', { ar: 'ريفرتشيس · هوفر', ceb: 'Riverchase · Hoover', da: 'Riverchase · Hoover', de: 'Riverchase · Hoover', nl: 'Riverchase · Hoover', ur: 'ریورچیس · ہوور' }),
  'site.flag3': L('The Summit · Birmingham', { ar: 'ذا سميت · برمنغهام', ceb: 'The Summit · Birmingham', da: 'The Summit · Birmingham', de: 'The Summit · Birmingham', nl: 'The Summit · Birmingham', ur: 'دی سیمیٹ · برمنگھم' }),
  'site.flag4': L('Crabtree · Raleigh', { ar: 'كرابتري · رالي', ceb: 'Crabtree · Raleigh', da: 'Crabtree · Raleigh', de: 'Crabtree · Raleigh', nl: 'Crabtree · Raleigh', ur: 'کریب ٹری · رالی' }),
  'site.flag5': L('Columbiana · Columbia', { ar: 'كولومبيانا · كولومبيا', ceb: 'Columbiana · Columbia', da: 'Columbiana · Columbia', de: 'Columbiana · Columbia', nl: 'Columbiana · Columbia', ur: 'کولمبیانا · کولمبیا' }),
  'site.flag6': L('Bel Air · Mobile', { ar: 'بيل إير · موبايل', ceb: 'Bel Air · Mobile', da: 'Bel Air · Mobile', de: 'Bel Air · Mobile', nl: 'Bel Air · Mobile', ur: 'بیل ایئر · موبائل' }),
  'site.footer.rights': L('All rights reserved.', {
    ar: 'جميع الحقوق محفوظة.',
    ceb: 'Tanang katungod gitagana.',
    da: 'Alle rettigheder forbeholdes.',
    de: 'Alle Rechte vorbehalten.',
    nl: 'Alle rechten voorbehouden.',
    ur: 'جملہ حقوق محفوظ ہیں۔'
  }),
  'site.menu': L('Menu', { ar: 'القائمة', ceb: 'Menu', da: 'Menu', de: 'Menü', nl: 'Menu', ur: 'مینو' })
}
