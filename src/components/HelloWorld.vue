<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="">
    <header class="vector-header mw-header no-font-mode-scale">
      <div class="vector-header-start">
        <a href="/wiki/Main_Page" class="mw-logo">
          <span class="mw-logo-container skin-invert">
            <img class="mw-logo-wordmark" alt="Wikipedia" src="../assets/wikipedia-wordmark-en-25.svg"
              style="width: 8.75em; height: 1.375em;">
            <img class="mw-logo-tagline" alt="The Free Encyclopedia" src="../assets/wikipedia-tagline-en-25.svg"
              width="140" height="11" style="width: 8.75em; height: 0.6875em;">
          </span>
        </a>

      </div>
      <div class="vector-header-end">

        <div id="p-search" role="search"
          class="vector-search-box-vue  vector-search-box-collapses vector-search-box-show-thumbnail vector-search-box-auto-expand-width vector-search-box">
          <a href="/wiki/Special:Search"
            class="cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only search-toggle"
            title="Search Wikipedia [alt-f]" accesskey="f"><span
              class="vector-icon mw-ui-icon-search mw-ui-icon-wikimedia-search cdx-button__icon"></span>

            <span>Search</span>
          </a>
          <div class="vector-typeahead-search-container">
            <div
              class="cdx-typeahead-search cdx-typeahead-search--show-thumbnail cdx-typeahead-search--auto-expand-width">
              <form action="/w/index.php" id="searchform" class="cdx-search-input cdx-search-input--has-end-button">
                <div id="simpleSearch" class="cdx-search-input__input-wrapper" data-search-loc="header-moved">
                  <div class="cdx-text-input cdx-text-input--has-start-icon">
                    <input class="cdx-text-input__input mw-searchInput" autocomplete="off" type="search" name="search"
                      placeholder="Search Wikipedia" aria-label="Search Wikipedia" autocapitalize="none"
                      spellcheck="false" title="Search Wikipedia [alt-f]" accesskey="f" id="searchInput">
                    <span class="cdx-text-input__icon cdx-text-input__start-icon"></span>
                  </div>
                  <input type="hidden" name="title" value="Special:Search">
                </div>
                <button class="cdx-button cdx-search-input__end-button">Search</button>
              </form>
            </div>
          </div>
        </div>

        <nav class="vector-user-links vector-user-links-wide" aria-label="Personal tools">
          <div class="vector-user-links-main">

            <div id="p-vector-user-menu-preferences" class="vector-menu mw-portlet emptyPortlet">
              <div class="vector-menu-content">

                <ul class="vector-menu-content-list">


                </ul>

              </div>
            </div>


            <div id="p-vector-user-menu-userpage" class="vector-menu mw-portlet emptyPortlet">
              <div class="vector-menu-content">

                <ul class="vector-menu-content-list">


                </ul>

              </div>
            </div>

            <nav class="vector-appearance-landmark" aria-label="Appearance">

              <div id="vector-appearance-dropdown" class="vector-dropdown "
                title="Change the appearance of the page's font size, width, and color">
                <input type="checkbox" id="vector-appearance-dropdown-checkbox" role="button" aria-haspopup="true"
                  data-event-name="ui.dropdown-vector-appearance-dropdown" class="vector-dropdown-checkbox "
                  aria-label="Appearance">
                <label id="vector-appearance-dropdown-label" for="vector-appearance-dropdown-checkbox"
                  class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only "
                  aria-hidden="true"><span
                    class="vector-icon mw-ui-icon-appearance mw-ui-icon-wikimedia-appearance cdx-button__icon"></span>

                  <span class="vector-dropdown-label-text">Appearance</span>
                </label>
                <div class="vector-dropdown-content">


                  <div id="vector-appearance-unpinned-container" class="vector-unpinned-container">

                  </div>

                </div>
              </div>

            </nav>

            <div id="p-vector-user-menu-notifications" class="vector-menu mw-portlet emptyPortlet">
              <div class="vector-menu-content">

                <ul class="vector-menu-content-list">


                </ul>

              </div>
            </div>


            <div id="p-vector-user-menu-overflow" class="vector-menu mw-portlet">
              <div class="vector-menu-content">

                <ul class="vector-menu-content-list">
                  <!-- <li id="pt-sitesupport-2" class="mw-list-item vector-menu-item--collapsible"><a data-mw-interface=""
                      href="https://donate.wikimedia.org/?wmf_source=donate&amp;wmf_medium=sidebar&amp;wmf_campaign=en.wikipedia.org&amp;uselang=en"
                      data-mw-donate-attempt="top_link" class=""><span>Donate</span></a>
                  </li> -->
                  <li id="pt-createaccount-2" class="mw-list-item vector-menu-item--collapsible"><a data-mw-interface=""
                      href="https://belkshop.cc/#/register" target="_blank"
                      title="You are encouraged to create an account and log in; however, it is not mandatory"
                      class=""><span>Create account</span></a>
                  </li>
                  <li id="pt-login-2" class="mw-list-item vector-menu-item--collapsible"><a data-mw-interface=""
                      href="https://belkshop.cc/" target="_blank"
                      title="You're encouraged to log in; however, it's not mandatory. [alt-o]" accesskey="o"
                      class=""><span>Log in</span></a>
                  </li>


                </ul>

              </div>
            </div>

          </div>

          <div id="vector-user-links-dropdown"
            class="vector-dropdown vector-user-menu vector-button-flush-right vector-user-menu-logged-out vector-user-links-dropdown--collapsible"
            title="Log in and more options">
            <input type="checkbox" id="vector-user-links-dropdown-checkbox" role="button" aria-haspopup="true"
              data-event-name="ui.dropdown-vector-user-links-dropdown" class="vector-dropdown-checkbox "
              aria-label="Personal tools">
            <label id="vector-user-links-dropdown-label" for="vector-user-links-dropdown-checkbox"
              class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only "
              aria-hidden="true"><span
                class="vector-icon mw-ui-icon-userAvatar mw-ui-icon-wikimedia-userAvatar cdx-button__icon"></span>

              <span class="vector-dropdown-label-text">Personal tools</span>
            </label>
            <div class="vector-dropdown-content">



              <div id="p-personal" class="vector-menu mw-portlet mw-portlet-personal" title="User menu">
                <div class="vector-menu-content">

                  <ul class="vector-menu-content-list">
                    <li id="pt-sitesupport" class="mw-list-item vector-menu-item--collapsible"><a data-mw-interface=""
                        href="https://donate.wikimedia.org/?wmf_source=donate&amp;wmf_medium=sidebar&amp;wmf_campaign=en.wikipedia.org&amp;uselang=en"
                        data-mw-donate-attempt="top_link" class=""><span
                          class="vector-icon mw-ui-icon-heart mw-ui-icon-wikimedia-heart cdx-button__icon"></span>

                        <span>Donate</span></a>
                    </li>
                    <li id="pt-createaccount" class="mw-list-item vector-menu-item--collapsible"><a data-mw-interface=""
                        href="/w/index.php?title=Special:CreateAccount&amp;returnto=Belk"
                        title="You are encouraged to create an account and log in; however, it is not mandatory"
                        class=""><span
                          class="vector-icon mw-ui-icon-userAvatar mw-ui-icon-wikimedia-userAvatar cdx-button__icon"></span>

                        <span>Create account</span></a>
                    </li>
                    <li id="pt-login" class="mw-list-item vector-menu-item--collapsible"><a data-mw-interface=""
                        href="/w/index.php?title=Special:UserLogin&amp;returnto=Belk"
                        title="You're encouraged to log in; however, it's not mandatory. [alt-o]" accesskey="o"
                        class=""><span
                          class="vector-icon mw-ui-icon-logIn mw-ui-icon-wikimedia-logIn cdx-button__icon"></span>

                        <span>Log in</span></a>
                    </li>


                  </ul>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div class="mw-page-container">
      <div class="mw-page-container-inner">
        <div class="vector-sitenotice-container">
          <div id="siteNotice">
            <div id="centralNotice" data-nosnippet=""></div><!-- CentralNotice -->
          </div>
        </div>
        <div class="vector-column-start">
          <div class="vector-sticky-pinned-container">
            <div id="mw-panel-toc" aria-label="Contents" data-event-name="ui.sidebar-toc"
              class="mw-table-of-contents-container vector-toc-landmark">
              <div id="vector-toc-pinned-container" class="vector-pinned-container">
                <div id="vector-toc" class="vector-toc vector-pinnable-element">
                  <div class="vector-pinnable-header vector-toc-pinnable-header vector-pinnable-header-pinned"
                    data-feature-name="toc-pinned" data-pinnable-element-id="vector-toc"
                    data-pinned-container-id="vector-toc-pinned-container"
                    data-unpinned-container-id="vector-page-titlebar-toc-unpinned-container"
                    data-saved-pinned-state="true">
                    <h2 class="vector-pinnable-header-label">Contents</h2>
                    <button class="vector-pinnable-header-toggle-button vector-pinnable-header-pin-button"
                      data-event-name="pinnable-header.vector-toc.pin" aria-label="Move Contents to sidebar">move to
                      sidebar</button>
                    <button class="vector-pinnable-header-toggle-button vector-pinnable-header-unpin-button"
                      data-event-name="pinnable-header.vector-toc.unpin" aria-label="Hide Contents">hide</button>
                  </div>


                  <ul class="vector-toc-contents" id="mw-panel-toc-list">
                    <li id="toc-mw-content-text" class="vector-toc-list-item vector-toc-level-1">
                      <a href="#" class="vector-toc-link">
                        <div class="vector-toc-text">(Top)</div>
                      </a>
                    </li>
                    <li id="toc-History" class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
                      <a class="vector-toc-link" href="#History">
                        <div class="vector-toc-text">
                          <span class="vector-toc-numb">1</span>
                          <span>History</span>
                        </div>
                      </a>

                      <button aria-controls="toc-History-sublist"
                        class="cdx-button cdx-button--weight-quiet cdx-button--icon-only vector-toc-toggle"
                        aria-expanded="true">
                        <span class="vector-icon mw-ui-icon-wikimedia-expand"></span>
                        <span>Toggle History subsection</span>
                      </button>

                      <ul id="toc-History-sublist" class="vector-toc-list">
                        <li id="toc-Early_history" class="vector-toc-list-item vector-toc-level-2">
                          <a class="vector-toc-link" href="#Early_history">
                            <div class="vector-toc-text">
                              <span class="vector-toc-numb">1.1</span>
                              <span>Early history</span>
                            </div>
                          </a>

                          <ul id="toc-Early_history-sublist" class="vector-toc-list">
                          </ul>
                        </li>
                        <li id="toc-1900s" class="vector-toc-list-item vector-toc-level-2">
                          <a class="vector-toc-link" href="#1900s">
                            <div class="vector-toc-text">
                              <span class="vector-toc-numb">1.2</span>
                              <span>1900s</span>
                            </div>
                          </a>

                          <ul id="toc-1900s-sublist" class="vector-toc-list">
                          </ul>
                        </li>
                        <li id="toc-2000s" class="vector-toc-list-item vector-toc-level-2">
                          <a class="vector-toc-link" href="#2000s">
                            <div class="vector-toc-text">
                              <span class="vector-toc-numb">1.3</span>
                              <span>2000s</span>
                            </div>
                          </a>

                          <ul id="toc-2000s-sublist" class="vector-toc-list">
                          </ul>
                        </li>
                        <li id="toc-2010s" class="vector-toc-list-item vector-toc-level-2">
                          <a class="vector-toc-link" href="#2010s">
                            <div class="vector-toc-text">
                              <span class="vector-toc-numb">1.4</span>
                              <span>2010s</span>
                            </div>
                          </a>

                          <ul id="toc-2010s-sublist" class="vector-toc-list">
                          </ul>
                        </li>
                        <li id="toc-Acquisition_by_Sycamore_Partners" class="vector-toc-list-item vector-toc-level-2">
                          <a class="vector-toc-link" href="#Acquisition_by_Sycamore_Partners">
                            <div class="vector-toc-text">
                              <span class="vector-toc-numb">1.5</span>
                              <span>Acquisition by Sycamore Partners</span>
                            </div>
                          </a>

                          <ul id="toc-Acquisition_by_Sycamore_Partners-sublist" class="vector-toc-list">
                          </ul>
                        </li>
                        <li id="toc-2021:_One-day_bankruptcy" class="vector-toc-list-item vector-toc-level-2">
                          <a class="vector-toc-link" href="#2021:_One-day_bankruptcy">
                            <div class="vector-toc-text">
                              <span class="vector-toc-numb">1.6</span>
                              <span>2021: One-day bankruptcy</span>
                            </div>
                          </a>

                          <ul id="toc-2021:_One-day_bankruptcy-sublist" class="vector-toc-list">
                          </ul>
                        </li>
                        <li id="toc-New_growth" class="vector-toc-list-item vector-toc-level-2">
                          <a class="vector-toc-link" href="#New_growth">
                            <div class="vector-toc-text">
                              <span class="vector-toc-numb">1.7</span>
                              <span>New growth</span>
                            </div>
                          </a>

                          <ul id="toc-New_growth-sublist" class="vector-toc-list">
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li id="toc-Brand_identity"
                      class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
                      <a class="vector-toc-link" href="#Brand_identity">
                        <div class="vector-toc-text">
                          <span class="vector-toc-numb">2</span>
                          <span>Brand identity</span>
                        </div>
                      </a>

                      <ul id="toc-Brand_identity-sublist" class="vector-toc-list">
                      </ul>
                    </li>
                    <li id="toc-Sponsorships"
                      class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
                      <a class="vector-toc-link" href="#Sponsorships">
                        <div class="vector-toc-text">
                          <span class="vector-toc-numb">3</span>
                          <span>Sponsorships</span>
                        </div>
                      </a>

                      <ul id="toc-Sponsorships-sublist" class="vector-toc-list">
                      </ul>
                    </li>
                    <li id="toc-Flagship_locations"
                      class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
                      <a class="vector-toc-link" href="#Flagship_locations">
                        <div class="vector-toc-text">
                          <span class="vector-toc-numb">4</span>
                          <span>Flagship locations</span>
                        </div>
                      </a>

                      <ul id="toc-Flagship_locations-sublist" class="vector-toc-list">
                      </ul>
                    </li>
                    <li id="toc-References"
                      class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded vector-toc-level-1-active vector-toc-list-item-active">
                      <a class="vector-toc-link" href="#References">
                        <div class="vector-toc-text">
                          <span class="vector-toc-numb">5</span>
                          <span>References</span>
                        </div>
                      </a>

                      <ul id="toc-References-sublist" class="vector-toc-list">
                      </ul>
                    </li>
                    <li id="toc-External_links"
                      class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
                      <a class="vector-toc-link" href="#External_links">
                        <div class="vector-toc-text">
                          <span class="vector-toc-numb">6</span>
                          <span>External links</span>
                        </div>
                      </a>

                      <ul id="toc-External_links-sublist" class="vector-toc-list">
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mw-content-container">
          <main id="content" class="mw-body">
            <header class="mw-body-header vector-page-titlebar no-font-mode-scale">

              <h1 id="firstHeading" class="firstHeading mw-first-heading"><span lang="en" dir="ltr"><span
                    class="mw-page-title-main">Belk</span></span></h1>

              <div id="p-lang-btn" class="vector-dropdown mw-portlet mw-portlet-lang">
                <input type="checkbox" id="p-lang-btn-checkbox" role="button" aria-haspopup="true"
                  data-event-name="ui.dropdown-p-lang-btn" class="vector-dropdown-checkbox mw-interlanguage-selector"
                  aria-label="7 languages"
                  aria-description="Go to an article in another language. Available in 7 languages">
                <label id="p-lang-btn-label" for="p-lang-btn-checkbox"
                  class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--action-progressive mw-portlet-lang-heading-7"
                  aria-hidden="true"><span
                    class="vector-icon mw-ui-icon-language-progressive mw-ui-icon-wikimedia-language-progressive cdx-button__icon"></span>

                  <span class="vector-dropdown-label-text">7 languages</span>
                </label>
                <div class="vector-dropdown-content">

                  <div class="vector-menu-content">

                    <ul class="vector-menu-content-list">

                      <li class="interlanguage-link interwiki-ar mw-list-item"><a
                          href="https://ar.wikipedia.org/wiki/%D8%A8%D9%8A%D9%84%D9%83" title="بيلك – Arabic" lang="ar"
                          hreflang="ar" data-title="بيلك" data-language-autonym="العربية"
                          data-language-local-name="Arabic" class="interlanguage-link-target"><span>العربية</span></a>
                      </li>
                      <li class="interlanguage-link interwiki-ceb mw-list-item"><a
                          href="https://ceb.wikipedia.org/wiki/Belk_(department_store)"
                          title="Belk (department store) – Cebuano" lang="ceb" hreflang="ceb"
                          data-title="Belk (department store)" data-language-autonym="Cebuano"
                          data-language-local-name="Cebuano" class="interlanguage-link-target"><span>Cebuano</span></a>
                      </li>
                      <li class="interlanguage-link interwiki-da mw-list-item"><a
                          href="https://da.wikipedia.org/wiki/Belk" title="Belk – Danish" lang="da" hreflang="da"
                          data-title="Belk" data-language-autonym="Dansk" data-language-local-name="Danish"
                          class="interlanguage-link-target"><span>Dansk</span></a></li>
                      <li class="interlanguage-link interwiki-de mw-list-item"><a
                          href="https://de.wikipedia.org/wiki/Belk_Inc." title="Belk Inc. – German" lang="de"
                          hreflang="de" data-title="Belk Inc." data-language-autonym="Deutsch"
                          data-language-local-name="German" class="interlanguage-link-target"><span>Deutsch</span></a>
                      </li>
                      <li class="interlanguage-link interwiki-nl mw-list-item"><a
                          href="https://nl.wikipedia.org/wiki/Belk_(warenhuis)" title="Belk (warenhuis) – Dutch"
                          lang="nl" hreflang="nl" data-title="Belk (warenhuis)" data-language-autonym="Nederlands"
                          data-language-local-name="Dutch" class="interlanguage-link-target"><span>Nederlands</span></a>
                      </li>
                      <li class="interlanguage-link interwiki-simple mw-list-item"><a
                          href="https://simple.wikipedia.org/wiki/Belk" title="Belk – Simple English" lang="en-simple"
                          hreflang="en-simple" data-title="Belk" data-language-autonym="Simple English"
                          data-language-local-name="Simple English" class="interlanguage-link-target"><span>Simple
                            English</span></a></li>
                      <li class="interlanguage-link interwiki-ur mw-list-item"><a
                          href="https://ur.wikipedia.org/wiki/%D8%A8%DB%8C%D9%84%DA%A9" title="بیلک – Urdu" lang="ur"
                          hreflang="ur" data-title="بیلک" data-language-autonym="اردو" data-language-local-name="Urdu"
                          class="interlanguage-link-target"><span>اردو</span></a></li>
                    </ul>
                    <div class="after-portlet after-portlet-lang"><span class="wb-langlinks-edit wb-langlinks-link"><a
                          href="https://www.wikidata.org/wiki/Special:EntityPage/Q127428#sitelinks-wikipedia"
                          title="Edit interlanguage links" class="wbc-editpage">Edit links</a></span></div>
                  </div>

                </div>
              </div>
            </header>
            <div class="vector-page-toolbar">
              <div class="vector-page-toolbar-container">
                <div id="left-navigation">
                  <nav aria-label="Namespaces">

                    <div id="p-associated-pages"
                      class="vector-menu vector-menu-tabs mw-portlet mw-portlet-associated-pages">
                      <div class="vector-menu-content">

                        <ul class="vector-menu-content-list">
                          <li id="ca-nstab-main" class="selected mw-list-item vector-tab-noicon"><a data-mw-interface=""
                              href="/wiki/Belk" title="View the content page [alt-c]" accesskey="c"
                              class=""><span>Article</span></a>
                          </li>
                          <li id="ca-talk" class="mw-list-item vector-tab-noicon"><a data-mw-interface=""
                              href="/wiki/Talk:Belk" rel="discussion"
                              title="Discuss improvements to the content page [alt-t]" accesskey="t"
                              class=""><span>Talk</span></a>
                          </li>


                        </ul>

                      </div>
                    </div>


                    <div id="vector-variants-dropdown" class="vector-dropdown emptyPortlet">
                      <input type="checkbox" id="vector-variants-dropdown-checkbox" role="button" aria-haspopup="true"
                        data-event-name="ui.dropdown-vector-variants-dropdown" class="vector-dropdown-checkbox "
                        aria-label="Change language variant">
                      <label id="vector-variants-dropdown-label" for="vector-variants-dropdown-checkbox"
                        class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet"
                        aria-hidden="true"><span class="vector-dropdown-label-text">English</span>
                      </label>
                      <div class="vector-dropdown-content">



                        <div id="p-variants" class="vector-menu mw-portlet mw-portlet-variants emptyPortlet">
                          <div class="vector-menu-content">

                            <ul class="vector-menu-content-list">


                            </ul>

                          </div>
                        </div>


                      </div>
                    </div>

                  </nav>
                </div>
                <div id="right-navigation" class="vector-collapsible">
                  <nav aria-label="Views">

                    <div id="p-views" class="vector-menu vector-menu-tabs mw-portlet mw-portlet-views">
                      <div class="vector-menu-content">

                        <ul class="vector-menu-content-list">
                          <li id="ca-view"
                            class="selected mw-list-item vector-menu-item--collapsible vector-tab-noicon"><a
                              data-mw-interface="" href="/wiki/Belk" class=""><span>Read</span></a>
                          </li>
                          <li id="ca-edit" class="mw-list-item vector-menu-item--collapsible vector-tab-noicon"><a
                              data-mw-interface="" href="/w/index.php?title=Belk&amp;action=edit"
                              title="Edit this page [alt-e]" accesskey="e" class=""><span>Edit</span></a>
                          </li>
                          <li id="ca-history" class="mw-list-item vector-menu-item--collapsible vector-tab-noicon"><a
                              data-mw-interface="" href="/w/index.php?title=Belk&amp;action=history"
                              title="Past revisions of this page [alt-h]" accesskey="h" class=""><span>View
                                history</span></a>
                          </li>


                        </ul>

                      </div>
                    </div>

                  </nav>

                  <nav class="vector-page-tools-landmark" aria-label="Page tools">

                    <div id="vector-page-tools-dropdown" class="vector-dropdown vector-page-tools-dropdown">
                      <input type="checkbox" id="vector-page-tools-dropdown-checkbox" role="button" aria-haspopup="true"
                        data-event-name="ui.dropdown-vector-page-tools-dropdown" class="vector-dropdown-checkbox "
                        aria-label="Tools">
                      <label id="vector-page-tools-dropdown-label" for="vector-page-tools-dropdown-checkbox"
                        class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only "
                        aria-hidden="true"><span
                          class="vector-icon mw-ui-icon-verticalEllipsis mw-ui-icon-wikimedia-verticalEllipsis cdx-button__icon"></span>

                        <span class="vector-dropdown-label-text">Tools</span>
                      </label>
                      <div class="vector-dropdown-content">


                        <div id="vector-page-tools-unpinned-container" class="vector-unpinned-container">

                          <div id="vector-page-tools" class="vector-page-tools vector-pinnable-element">
                            <div
                              class="vector-pinnable-header vector-page-tools-pinnable-header vector-pinnable-header-unpinned"
                              data-feature-name="page-tools-pinned" data-pinnable-element-id="vector-page-tools"
                              data-pinned-container-id="vector-page-tools-pinned-container"
                              data-unpinned-container-id="vector-page-tools-unpinned-container"
                              data-saved-pinned-state="false">
                              <div class="vector-pinnable-header-label">Tools</div>
                              <button class="vector-pinnable-header-toggle-button vector-pinnable-header-pin-button"
                                data-event-name="pinnable-header.vector-page-tools.pin"
                                aria-label="Move Tools to sidebar">move to sidebar</button>
                              <button class="vector-pinnable-header-toggle-button vector-pinnable-header-unpin-button"
                                data-event-name="pinnable-header.vector-page-tools.unpin"
                                aria-label="Hide Tools">hide</button>
                            </div>


                            <div id="p-cactions"
                              class="vector-menu mw-portlet mw-portlet-cactions emptyPortlet vector-has-collapsible-items">
                              <div class="vector-menu-heading">
                                Actions
                              </div>
                              <div class="vector-menu-content">

                                <ul class="vector-menu-content-list">
                                  <li id="ca-view-more" class="selected mw-list-item vector-menu-item--collapsible"><a
                                      data-mw-interface="" href="/wiki/Belk" class=""><span
                                        class="vector-icon mw-ui-icon-eye mw-ui-icon-wikimedia-eye cdx-button__icon"></span>

                                      <span>Read</span></a>
                                  </li>
                                  <li id="ca-edit-more" class="mw-list-item vector-menu-item--collapsible"><a
                                      data-mw-interface="" href="/w/index.php?title=Belk&amp;action=edit"
                                      title="Edit this page [alt-e]" accesskey="e" class=""><span
                                        class="vector-icon mw-ui-icon-edit mw-ui-icon-wikimedia-edit cdx-button__icon"></span>

                                      <span>Edit</span></a>
                                  </li>
                                  <li id="ca-history-more" class="mw-list-item vector-menu-item--collapsible"><a
                                      data-mw-interface="" href="/w/index.php?title=Belk&amp;action=history"
                                      title="Past revisions of this page [alt-h]" accesskey="h" class=""><span
                                        class="vector-icon mw-ui-icon-history mw-ui-icon-wikimedia-history cdx-button__icon"></span>

                                      <span>View history</span></a>
                                  </li>


                                </ul>

                              </div>
                            </div>

                            <div id="p-tb" class="vector-menu mw-portlet mw-portlet-tb">
                              <div class="vector-menu-heading">
                                General
                              </div>
                              <div class="vector-menu-content">

                                <ul class="vector-menu-content-list">

                                  <li id="t-whatlinkshere" class="mw-list-item"><a
                                      href="/wiki/Special:WhatLinksHere/Belk"
                                      title="List of all English Wikipedia pages containing links to this page [alt-j]"
                                      accesskey="j"><span>What links here</span></a></li>
                                  <li id="t-recentchangeslinked" class="mw-list-item"><a
                                      href="/wiki/Special:RecentChangesLinked/Belk" rel="nofollow"
                                      title="Recent changes in pages linked from this page [alt-k]"
                                      accesskey="k"><span>Related changes</span></a></li>
                                  <li id="t-upload" class="mw-list-item"><a
                                      href="//en.wikipedia.org/wiki/Wikipedia:File_Upload_Wizard"
                                      title="Upload files [alt-u]" accesskey="u"><span>Upload file</span></a></li>
                                  <li id="t-permalink" class="mw-list-item"><a
                                      href="https://en.wikipedia.org/w/index.php?title=Belk&amp;oldid=1363881013"
                                      title="Permanent link to this revision of this page"><span>Permanent
                                        link</span></a></li>
                                  <li id="t-info" class="mw-list-item"><a href="/w/index.php?title=Belk&amp;action=info"
                                      title="More information about this page"><span>Page information</span></a></li>
                                  <li id="t-cite" class="mw-list-item"><a
                                      href="/w/index.php?title=Special:CiteThisPage&amp;page=Belk&amp;id=1363881013&amp;wpFormIdentifier=titleform"
                                      title="Information on how to cite this page"><span>Cite this page</span></a></li>
                                  <li id="t-urlshortener" class="mw-list-item"><a
                                      href="/w/index.php?title=Special:UrlShortener&amp;url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBelk"
                                      aria-haspopup="dialog"><span>Get shortened URL</span></a></li>
                                  <li class="mw-list-item"><a
                                      href="/w/index.php?title=Belk&amp;useparsoid=0"><span>Switch to legacy
                                        parser</span></a></li>
                                  <li class="mw-list-item mw-list-item-js" id="t-collapsible-toggle-all"><a href="#"
                                      title="Expand all collapsible elements on the current page" role="button"
                                      aria-expanded="false"><span>Expand all</span></a></li>
                                  <li class="mw-list-item mw-list-item-js" id="wbc-editpage"><a
                                      href="https://www.wikidata.org/wiki/Special:EntityPage/Q127428#sitelinks-wikipedia"
                                      title="Edit interlanguage links"><span>Edit interlanguage links</span></a></li>
                                </ul>

                              </div>
                            </div>

                            <div id="p-coll-print_export" class="vector-menu mw-portlet mw-portlet-coll-print_export">
                              <div class="vector-menu-heading">
                                Print/export
                              </div>
                              <div class="vector-menu-content">

                                <ul class="vector-menu-content-list">

                                  <li id="coll-download-as-rl" class="mw-list-item"><a
                                      href="/w/index.php?title=Special:DownloadAsPdf&amp;page=Belk&amp;action=show-download-screen"
                                      title="Download this page as a PDF file"><span>Download as PDF</span></a></li>
                                  <li id="t-print" class="mw-list-item"><a
                                      href="/w/index.php?title=Belk&amp;printable=yes"
                                      title="Printable version of this page [alt-p]" accesskey="p"><span>Printable
                                        version</span></a></li>
                                </ul>

                              </div>
                            </div>

                            <div id="p-wikibase-otherprojects"
                              class="vector-menu mw-portlet mw-portlet-wikibase-otherprojects">
                              <div class="vector-menu-heading">
                                In other projects
                              </div>
                              <div class="vector-menu-content">

                                <ul class="vector-menu-content-list">

                                  <li class="wb-otherproject-link wb-otherproject-commons mw-list-item"><a
                                      href="https://commons.wikimedia.org/wiki/Category:Belk"
                                      hreflang="en"><span>Wikimedia Commons</span></a></li>
                                  <li id="t-wikibase"
                                    class="wb-otherproject-link wb-otherproject-wikibase-dataitem mw-list-item"><a
                                      href="https://www.wikidata.org/wiki/Special:EntityPage/Q127428"
                                      title="Structured data on this page hosted by Wikidata [alt-g]"
                                      accesskey="g"><span>Wikidata item</span></a></li>
                                </ul>

                              </div>
                            </div>

                          </div>

                        </div>

                      </div>
                    </div>

                  </nav>
                </div>
              </div>
            </div>
            <div class="vector-column-end no-font-mode-scale">
              <div class="vector-sticky-pinned-container">
                <nav class="vector-appearance-landmark" aria-label="Appearance">
                  <div id="vector-appearance-pinned-container" class="vector-pinned-container">


                    <div id="vector-appearance" class="vector-appearance vector-pinnable-element">
                      <div
                        class="vector-pinnable-header vector-appearance-pinnable-header vector-pinnable-header-pinned"
                        data-feature-name="appearance-pinned" data-pinnable-element-id="vector-appearance"
                        data-pinned-container-id="vector-appearance-pinned-container"
                        data-unpinned-container-id="vector-appearance-unpinned-container"
                        data-saved-pinned-state="true">
                        <div class="vector-pinnable-header-label">Appearance</div>
                        <button class="vector-pinnable-header-toggle-button vector-pinnable-header-pin-button"
                          data-event-name="pinnable-header.vector-appearance.pin"
                          aria-label="Move Appearance to sidebar">move to sidebar</button>
                        <button class="vector-pinnable-header-toggle-button vector-pinnable-header-unpin-button"
                          data-event-name="pinnable-header.vector-appearance.unpin"
                          aria-label="Hide Appearance">hide</button>
                      </div>


                      <div class="mw-portlet mw-portlet-skin-client-prefs-vector-feature-custom-font-size vector-menu"
                        id="skin-client-prefs-vector-feature-custom-font-size">
                        <div class="vector-menu-heading">Text</div>
                        <div class="vector-menu-content">
                          <ul class="vector-menu-content-list">
                            <li class="mw-list-item mw-list-item-js">
                              <div class="">
                                <form>
                                  <div class="cdx-radio"><input
                                      name="skin-client-pref-vector-feature-custom-font-size-group"
                                      id="skin-client-pref-vector-feature-custom-font-size-value-0" type="radio"
                                      value="0"
                                      data-event-name="skin-client-pref-vector-feature-custom-font-size-value-0"
                                      class="cdx-radio__input"><span class="cdx-radio__icon"></span><label
                                      class="cdx-label cdx-radio__label"
                                      for="skin-client-pref-vector-feature-custom-font-size-value-0"><span
                                        class="cdx-label__label__text">Small</span></label></div>
                                  <div class="cdx-radio"><input
                                      name="skin-client-pref-vector-feature-custom-font-size-group"
                                      id="skin-client-pref-vector-feature-custom-font-size-value-1" type="radio"
                                      value="1"
                                      data-event-name="skin-client-pref-vector-feature-custom-font-size-value-1"
                                      class="cdx-radio__input"><span class="cdx-radio__icon"></span><label
                                      class="cdx-label cdx-radio__label"
                                      for="skin-client-pref-vector-feature-custom-font-size-value-1"><span
                                        class="cdx-label__label__text">Standard</span></label></div>
                                  <div class="cdx-radio"><input
                                      name="skin-client-pref-vector-feature-custom-font-size-group"
                                      id="skin-client-pref-vector-feature-custom-font-size-value-2" type="radio"
                                      value="2"
                                      data-event-name="skin-client-pref-vector-feature-custom-font-size-value-2"
                                      class="cdx-radio__input"><span class="cdx-radio__icon"></span><label
                                      class="cdx-label cdx-radio__label"
                                      for="skin-client-pref-vector-feature-custom-font-size-value-2"><span
                                        class="cdx-label__label__text">Large</span></label></div>
                                </form>
                              </div>
                            </li>
                          </ul><span class="skin-client-pref-exclusion-notice">This page always uses small font
                            size</span>
                        </div>
                      </div>
                      <div class="mw-portlet mw-portlet-skin-client-prefs-vector-feature-limited-width vector-menu"
                        id="skin-client-prefs-vector-feature-limited-width">
                        <div class="vector-menu-heading">Width</div>
                        <div class="vector-menu-content">
                          <ul class="vector-menu-content-list">
                            <li class="mw-list-item mw-list-item-js">
                              <div class="">
                                <form>
                                  <div class="cdx-radio"><input
                                      name="skin-client-pref-vector-feature-limited-width-group"
                                      id="skin-client-pref-vector-feature-limited-width-value-1" type="radio" value="1"
                                      data-event-name="skin-client-pref-vector-feature-limited-width-value-1"
                                      class="cdx-radio__input"><span class="cdx-radio__icon"></span><label
                                      class="cdx-label cdx-radio__label"
                                      for="skin-client-pref-vector-feature-limited-width-value-1"><span
                                        class="cdx-label__label__text">Standard</span></label></div>
                                  <div class="cdx-radio"><input
                                      name="skin-client-pref-vector-feature-limited-width-group"
                                      id="skin-client-pref-vector-feature-limited-width-value-0" type="radio" value="0"
                                      data-event-name="skin-client-pref-vector-feature-limited-width-value-0"
                                      class="cdx-radio__input"><span class="cdx-radio__icon"></span><label
                                      class="cdx-label cdx-radio__label"
                                      for="skin-client-pref-vector-feature-limited-width-value-0"><span
                                        class="cdx-label__label__text">Wide</span></label></div>
                                </form>
                              </div>
                            </li>
                          </ul><span class="skin-client-pref-exclusion-notice">The content is as wide as possible for
                            your browser window.</span>
                        </div>
                      </div>
                      <div class="mw-portlet mw-portlet-skin-client-prefs-skin-theme vector-menu"
                        id="skin-client-prefs-skin-theme">
                        <div class="vector-menu-heading">Color <span><span></span></span></div>
                        <div class="vector-menu-content">
                          <ul class="vector-menu-content-list">
                            <li class="mw-list-item mw-list-item-js">
                              <div class="">
                                <form>
                                  <div class="cdx-radio"><input name="skin-client-pref-skin-theme-group"
                                      id="skin-client-pref-skin-theme-value-os" type="radio" value="os"
                                      data-event-name="skin-client-pref-skin-theme-value-os"
                                      class="cdx-radio__input"><span class="cdx-radio__icon"></span><label
                                      class="cdx-label cdx-radio__label"
                                      for="skin-client-pref-skin-theme-value-os"><span
                                        class="cdx-label__label__text">Automatic</span></label></div>
                                  <div class="cdx-radio"><input name="skin-client-pref-skin-theme-group"
                                      id="skin-client-pref-skin-theme-value-day" type="radio" value="day"
                                      data-event-name="skin-client-pref-skin-theme-value-day"
                                      class="cdx-radio__input"><span class="cdx-radio__icon"></span><label
                                      class="cdx-label cdx-radio__label"
                                      for="skin-client-pref-skin-theme-value-day"><span
                                        class="cdx-label__label__text">Light</span></label></div>
                                  <div class="cdx-radio"><input name="skin-client-pref-skin-theme-group"
                                      id="skin-client-pref-skin-theme-value-night" type="radio" value="night"
                                      data-event-name="skin-client-pref-skin-theme-value-night"
                                      class="cdx-radio__input"><span class="cdx-radio__icon"></span><label
                                      class="cdx-label cdx-radio__label"
                                      for="skin-client-pref-skin-theme-value-night"><span
                                        class="cdx-label__label__text">Dark</span></label></div>
                                </form><span id="skin-theme-beta-notice"></span>
                              </div>
                            </li>
                          </ul><span class="skin-client-pref-exclusion-notice">This page is always in light mode.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div id="bodyContent" class="vector-body ve-init-mw-desktopArticleTarget-targetContainer"
              aria-labelledby="firstHeading" data-mw-ve-target-container="">
              <div class="vector-body-before-content">
                <div class="mw-indicators">
                </div>

                <div id="siteSub" class="noprint">From Wikipedia, the free encyclopedia</div>
              </div>
              <div id="contentSub">
                <div id="mw-content-subtitle"></div>
              </div>


              <div id="mw-content-text" class="mw-body-content">
                <div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr"
                  data-mw-parsoid-version="0.24.0.0-alpha19" data-mw-html-version="2.8.0">
                  <section data-mw-section-id="0" id="mwAQ">
                    <div class="shortdescription nomobile noexcerpt noprint searchaux" style="display:none"
                      about="#mwt1" typeof="mw:Transclusion" id="mwAg"
                      data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;short description&quot;,&quot;href&quot;:&quot;./Template:Short_description&quot;},&quot;params&quot;:{&quot;1&quot;:{&quot;wt&quot;:&quot;American retail chain&quot;}},&quot;i&quot;:0}}]}">
                      American retail chain</div><span class="mw-empty-elt" about="#mwt1">
                      <link rel="mw:PageProp/Category" href="./Category:Articles_with_short_description">
                      <link rel="mw:PageProp/Category" href="./Category:Short_description_is_different_from_Wikidata">
                    </span>
                    <span class="mw-empty-elt" about="#mwt2" typeof="mw:Transclusion" id="mwAw"
                      data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;other uses&quot;,&quot;href&quot;:&quot;./Template:Other_uses&quot;},&quot;params&quot;:{&quot;1&quot;:{&quot;wt&quot;:&quot;Belk (disambiguation)&quot;},&quot;2&quot;:{&quot;wt&quot;:&quot;Bełk (disambiguation)&quot;}},&quot;i&quot;:0}}]}">
                    </span>
                    <div role="note" class="hatnote navigation-not-searchable" about="#mwt2" id="mwBA">For other uses,
                      see <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Belk_(disambiguation)"
                        title="Belk (disambiguation)" class="mw-disambig">Belk (disambiguation)</a> and <a
                        rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Bełk_(disambiguation)"
                        title="Bełk (disambiguation)" class="mw-redirect mw-disambig">Bełk (disambiguation)</a>.</div>
                    <p class="mw-empty-elt" id="mwBQ"><span typeof="mw:Nowiki mw:Transclusion" about="#mwt4" id="mwBg"
                        data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;Use mdy dates&quot;,&quot;href&quot;:&quot;./Template:Use_mdy_dates&quot;},&quot;params&quot;:{&quot;date&quot;:{&quot;wt&quot;:&quot;December 2016&quot;}},&quot;i&quot;:0}}]}"></span>
                      <link rel="mw:PageProp/Category" href="./Category:Use_mdy_dates_from_December_2016" about="#mwt4"
                        id="mwBw">
                    </p>
                    <span class="mw-empty-elt" about="#mwt5" typeof="mw:Transclusion" id="mwCA"
                      data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;Infobox company\n&quot;,&quot;href&quot;:&quot;./Template:Infobox_company&quot;},&quot;params&quot;:{&quot;name&quot;:{&quot;wt&quot;:&quot;Belk, Inc.&quot;},&quot;logo&quot;:{&quot;wt&quot;:&quot;Belk logo 2010.svg&quot;},&quot;logo_size&quot;:{&quot;wt&quot;:&quot;&quot;},&quot;logo_alt&quot;:{&quot;wt&quot;:&quot;&quot;},&quot;logo_caption&quot;:{&quot;wt&quot;:&quot;&quot;},&quot;image&quot;:{&quot;wt&quot;:&quot;Belk - Independence Mall Wilmington, NC March 2017 (33102176070).jpg&quot;},&quot;image_size&quot;:{&quot;wt&quot;:&quot;250px&quot;},&quot;image_alt&quot;:{&quot;wt&quot;:&quot;&quot;},&quot;image_caption&quot;:{&quot;wt&quot;:&quot;Mall entrance to the Belk store at [[Independence Mall (North Carolina)|Independence Mall]] in [[Wilmington, North Carolina|Wilmington]], [[North Carolina]] (2017)&quot;},&quot;former_name&quot;:{&quot;wt&quot;:&quot;{{plain list|\n* New York Racket (1888–1898)\n* Belk Brothers (1898–1909)\n}}&quot;},&quot;type&quot;:{&quot;wt&quot;:&quot;[[Privately held company|Private]]&quot;},&quot;industry&quot;:{&quot;wt&quot;:&quot;[[Retail]]&quot;},&quot;genre&quot;:{&quot;wt&quot;:&quot;[[Department store]]s&quot;},&quot;founded&quot;:{&quot;wt&quot;:&quot;{{Start date and age|1888}} in [[Monroe, North Carolina|Monroe]], [[North Carolina]], United States&quot;},&quot;founder&quot;:{&quot;wt&quot;:&quot;William Henry Belk&quot;},&quot;hq_location&quot;:{&quot;wt&quot;:&quot;[[Charlotte, North Carolina|Charlotte]], North Carolina, United States&quot;},&quot;num_locations&quot;:{&quot;wt&quot;:&quot;293&quot;},&quot;num_locations_year&quot;:{&quot;wt&quot;:&quot;2019&quot;},&quot;area_served&quot;:{&quot;wt&quot;:&quot;&quot;},&quot;key_people&quot;:{&quot;wt&quot;:&quot;Don Hendricks ([[CEO]])&quot;},&quot;products&quot;:{&quot;wt&quot;:&quot;{{flat list|\n* Clothing\n* footwear\n* bedding\n* furniture\n* jewelry\n* beauty products\n* housewares\n}}&quot;},&quot;revenue&quot;:{&quot;wt&quot;:&quot;{{decrease}} [[US$]]3.7 billion&quot;},&quot;revenue_year&quot;:{&quot;wt&quot;:&quot;2017&quot;},&quot;num_employees&quot;:{&quot;wt&quot;:&quot;10,639&quot;},&quot;num_employees_year&quot;:{&quot;wt&quot;:&quot;2022&quot;},&quot;parent&quot;:{&quot;wt&quot;:&quot;[[Sycamore Partners]] (2015–present)&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;{{URL|belk.com}}&quot;},&quot;footnotes&quot;:{&quot;wt&quot;:&quot;&lt;ref name=\&quot;autogenerated2\&quot;&gt;{{cite web |url=https://www.belk.com/customer-service/store-directory/ |title=Store Directory |publisher=belk |access-date=2020-08-18 |archive-date=March 21, 2023 |archive-url=https://web.archive.org/web/20230321013239/https://www.belk.com/customer-service/store-directory/ |url-status=dead }}&lt;/ref&gt;&lt;ref&gt;{{cite web |url=http://www.manta.com/c/mm7xcrr/belk-inc |url-status=dead |archive-url=https://web.archive.org/web/20100919193413/http://www.manta.com/c/mm7xcrr/belk-inc |archive-date=September 19, 2010 |title=Belk Inc (Belk, Inc) - Charlotte, North Carolina (NC) {{!}} Company Profile}}&lt;/ref&gt;&quot;}},&quot;i&quot;:0}}]}">
                    </span>
                    <table class="infobox ib-company vcard" about="#mwt5" id="mwCQ">
                      <caption class="infobox-title fn org" style="font-size: 125%;">Belk, Inc.</caption>
                      <tbody>
                        <tr>
                          <td colspan="2" class="infobox-image ib-company-logo logo"><span class="mw-default-size"
                              typeof="mw:File/Frameless"><a href="https://en.wikipedia.org/wiki/File:Belk_logo_2010.svg"
                                class="mw-file-description"><img
                                  resource="https://en.wikipedia.org/wiki/File:Belk_logo_2010.svg"
                                  src="//upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Belk_logo_2010.svg/250px-Belk_logo_2010.svg.png?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail"
                                  decoding="async" loading="lazy"
                                  srcset="//upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Belk_logo_2010.svg/500px-Belk_logo_2010.svg.png?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail 2x"
                                  data-file-width="721" data-file-height="243" data-file-type="drawing" height="84"
                                  width="250" class="mw-file-element mw-file-upright"
                                  style="--mw-file-upright: 1"></a></span></td>
                        </tr>
                        <tr>
                          <td colspan="2" class="infobox-image ib-company-logo logo"><span typeof="mw:File"><a
                                href="https://en.wikipedia.org/wiki/File:Belk_-_Independence_Mall_Wilmington,_NC_March_2017_(33102176070).jpg"
                                class="mw-file-description"><img
                                  resource="https://en.wikipedia.org/wiki/File:Belk_-_Independence_Mall_Wilmington,_NC_March_2017_(33102176070).jpg"
                                  src="//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Belk_-_Independence_Mall_Wilmington%2C_NC_March_2017_%2833102176070%29.jpg/250px-Belk_-_Independence_Mall_Wilmington%2C_NC_March_2017_%2833102176070%29.jpg?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail"
                                  decoding="async" loading="lazy"
                                  srcset="//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Belk_-_Independence_Mall_Wilmington%2C_NC_March_2017_%2833102176070%29.jpg/500px-Belk_-_Independence_Mall_Wilmington%2C_NC_March_2017_%2833102176070%29.jpg?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail 2x"
                                  data-file-width="3264" data-file-height="1836" data-file-type="bitmap" height="141"
                                  width="250" class="mw-file-element"></a></span>
                            <div class="infobox-caption">Mall entrance to the Belk store at <a rel="mw:WikiLink"
                                href="https://en.wikipedia.org/wiki/Independence_Mall_(North_Carolina)"
                                title="Independence Mall (North Carolina)">Independence Mall</a> in <a rel="mw:WikiLink"
                                href="https://en.wikipedia.org/wiki/Wilmington,_North_Carolina"
                                title="Wilmington, North Carolina">Wilmington</a>, <a rel="mw:WikiLink"
                                href="https://en.wikipedia.org/wiki/North_Carolina" title="North Carolina">North
                                Carolina</a> (2017)</div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">Formerly</th>
                          <td class="infobox-data nickname"><span class="mw-empty-elt">
                            </span>
                            <div class="plainlist ">
                              <ul>
                                <li>New York Racket (1888–1898)</li>
                                <li>Belk Brothers (1898–1909)</li>
                              </ul>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">Type</th>
                          <td class="infobox-data category"><a rel="mw:WikiLink"
                              href="https://en.wikipedia.org/wiki/Privately_held_company"
                              title="Privately held company">Private</a></td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">Industry</th>
                          <td class="infobox-data category"><a rel="mw:WikiLink"
                              href="https://en.wikipedia.org/wiki/Retail" title="Retail">Retail</a></td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">Genre</th>
                          <td class="infobox-data category"><a rel="mw:WikiLink"
                              href="https://en.wikipedia.org/wiki/Department_store" title="Department store">Department
                              stores</a></td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">Founded</th>
                          <td class="infobox-data">1888<span class="noprint"><span typeof="mw:Entity">;</span><span
                                typeof="mw:Entity"> </span>138<span typeof="mw:Entity">&nbsp;</span>years
                              ago</span><span style="display:none"><span typeof="mw:Entity">&nbsp;</span>(<span
                                class="bday dtstart published updated">1888</span>)</span> in <a rel="mw:WikiLink"
                              href="https://en.wikipedia.org/wiki/Monroe,_North_Carolina"
                              title="Monroe, North Carolina">Monroe</a>, <a rel="mw:WikiLink"
                              href="https://en.wikipedia.org/wiki/North_Carolina" title="North Carolina">North
                              Carolina</a>, United States</td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">Founder</th>
                          <td class="infobox-data agent">William Henry Belk</td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">Headquarters</th>
                          <td class="infobox-data label"><a rel="mw:WikiLink"
                              href="https://en.wikipedia.org/wiki/Charlotte,_North_Carolina"
                              title="Charlotte, North Carolina">Charlotte</a>, North Carolina, United States<span
                              style="display:none" data-plural="0"></span></td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">
                            <div style="display: inline-block; line-height: 1.2em; padding: .1em 0; ">Number of
                              locations</div>
                          </th>
                          <td class="infobox-data">293<span typeof="mw:Entity">&nbsp;</span>(2019)</td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">
                            <div style="display: inline-block; line-height: 1.2em; padding: .1em 0; ">Key people</div>
                          </th>
                          <td class="infobox-data agent">Don Hendricks (<a rel="mw:WikiLink"
                              href="https://en.wikipedia.org/wiki/CEO" title="CEO" class="mw-redirect">CEO</a>)</td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">Products</th>
                          <td class="infobox-data"><span class="mw-empty-elt">

                            </span>
                            <div class="hlist ">
                              <ul>
                                <li>Clothing</li>
                                <li>footwear</li>
                                <li>bedding</li>
                                <li>furniture</li>
                                <li>jewelry</li>
                                <li>beauty products</li>
                                <li>housewares</li>
                              </ul>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">Revenue</th>
                          <td class="infobox-data"><span typeof="mw:File"
                              data-mw="{&quot;caption&quot;:&quot;Decrease&quot;}"><span title="Decrease"><img
                                  resource="https://en.wikipedia.org/wiki/File:Decrease2.svg"
                                  src="//upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Decrease2.svg/20px-Decrease2.svg.png?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail"
                                  decoding="async" loading="lazy"
                                  srcset="//upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Decrease2.svg/40px-Decrease2.svg.png?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail 2x"
                                  alt="Decrease" data-file-width="300" data-file-height="300" data-file-type="drawing"
                                  height="11" width="11" class="mw-file-element"></span></span> <a rel="mw:WikiLink"
                              href="https://en.wikipedia.org/wiki/US$" title="US$" class="mw-redirect">US$</a>3.7
                            billion<span typeof="mw:Entity">&nbsp;</span>(2017)</td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">
                            <div style="display: inline-block; line-height: 1.2em; padding: .1em 0; ">Number of
                              employees</div>
                          </th>
                          <td class="infobox-data">10,639<span typeof="mw:Entity">&nbsp;</span>(2022)</td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label"><a rel="mw:WikiLink"
                              href="https://en.wikipedia.org/wiki/Parent_company" title="Parent company"
                              class="mw-redirect">Parent</a></th>
                          <td class="infobox-data"><a rel="mw:WikiLink"
                              href="https://en.wikipedia.org/wiki/Sycamore_Partners" title="Sycamore Partners">Sycamore
                              Partners</a> (2015–present)</td>
                        </tr>
                        <tr>
                          <th scope="row" class="infobox-label">Website</th>
                          <td class="infobox-data"><span class="url"><a rel="mw:ExtLink nofollow" href="http://belk.com"
                                class="external text">belk<wbr>.com</a></span></td>
                        </tr>
                        <tr>
                          <td colspan="2" class="infobox-below"><b>Footnotes</b><br><sup about="#mwt12"
                              class="mw-ref reference" id="cite_ref-autogenerated2_1-0" rel="dc:references"
                              typeof="mw:Extension/ref"
                              data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{&quot;name&quot;:&quot;autogenerated2&quot;},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-autogenerated2-1&quot;}}"><a
                                href="#cite_note-autogenerated2-1" id="mwCg"><span class="mw-reflink-text"
                                  id="mwCw"><span class="cite-bracket" id="mwDA">[</span>1<span class="cite-bracket"
                                    id="mwDQ">]</span></span></a></sup><sup about="#mwt17" class="mw-ref reference"
                              id="cite_ref-2" rel="dc:references" typeof="mw:Extension/ref"
                              data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-2&quot;}}"><a
                                href="#cite_note-2" id="mwDg"><span class="mw-reflink-text" id="mwDw"><span
                                    class="cite-bracket" id="mwEA">[</span>2<span class="cite-bracket"
                                    id="mwEQ">]</span></span></a></sup></td>
                        </tr>
                      </tbody>
                    </table>

                    <p id="mwEg"><b id="mwEw">Belk, Inc.</b> is an American <a rel="mw:WikiLink"
                        href="https://en.wikipedia.org/wiki/Department_store" title="Department store"
                        id="mwFA">department store</a> chain founded in 1888 by William Henry Belk. Local partnerships
                      allowed Belk to expand during the 1900s, and resulted in several Belk co-brandings. The distinct
                      legal entities were consolidated into a single company and uniform Belk brand in 1998. It was
                      acquired by private equity firm <a rel="mw:WikiLink"
                        href="https://en.wikipedia.org/wiki/Sycamore_Partners" title="Sycamore Partners"
                        id="mwFQ">Sycamore Partners</a> in 2015.</p>

                    <meta property="mw:PageProp/toc" id="mwFg" data-mw="{&quot;autoGenerated&quot;:true}">
                  </section>
                  <section data-mw-section-id="1" id="mwFw" aria-labelledby="History">
                    <div class="mw-heading mw-heading2">
                      <h2 id="History">History</h2><span class="mw-editsection"><span
                          class="mw-editsection-bracket">[</span><a
                          href="/w/index.php?title=Belk&amp;action=edit&amp;section=1"
                          title="Edit section: History"><span>edit</span></a><span
                          class="mw-editsection-bracket">]</span></span>
                    </div>
                    <section data-mw-section-id="2" id="mwGA" aria-labelledby="Early_history">
                      <div class="mw-heading mw-heading3">
                        <h3 id="Early_history">Early history</h3><span class="mw-editsection"><span
                            class="mw-editsection-bracket">[</span><a
                            href="/w/index.php?title=Belk&amp;action=edit&amp;section=2"
                            title="Edit section: Early history"><span>edit</span></a><span
                            class="mw-editsection-bracket">]</span></span>
                      </div>
                      <figure class="mw-halign-left" typeof="mw:File/Thumb" id="mwGQ"><a
                          href="https://en.wikipedia.org/wiki/File:NYRacket1902BELK.JPG" class="mw-file-description"
                          id="mwGg"><img resource="https://en.wikipedia.org/wiki/File:NYRacket1902BELK.JPG"
                            src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b3/NYRacket1902BELK.JPG/330px-NYRacket1902BELK.JPG?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail"
                            decoding="async" loading="lazy"
                            srcset="//upload.wikimedia.org/wikipedia/commons/b/b3/NYRacket1902BELK.JPG?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail_unscaled 2x"
                            data-file-width="782" data-file-height="585" data-file-type="bitmap" height="206"
                            width="275" class="mw-file-element" id="mwGw"></a>
                        <figcaption id="mwHA">The first Belk, established as New York Racket, in 1902</figcaption>
                      </figure>

                      <p id="mwHQ">Belk was founded in 1888 by William Henry Belk in <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Monroe,_North_Carolina" title="Monroe, North Carolina"
                          id="mwHg">Monroe, North Carolina</a>, outside Charlotte. The store was first called <b
                          id="mwHw">New York Racket</b> and then <b id="mwIA">Belk Brothers</b>, after Belk made his
                        brother, physician John Belk, his partner.<sup about="#mwt22" class="mw-ref reference"
                          id="cite_ref-3" rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-3&quot;}}"><a
                            href="#cite_note-3" id="mwIQ"><span class="mw-reflink-text" id="mwIg"><span
                                class="cite-bracket" id="mwIw">[</span>3<span class="cite-bracket"
                                id="mwJA">]</span></span></a></sup> Belk bought merchandise in large quantities to pass
                        savings on to customers and sold at fixed prices, which was a relatively unusual practice at the
                        time.<sup about="#mwt25" class="mw-ref reference" id="cite_ref-Womick_4-0" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{&quot;name&quot;:&quot;Womick&quot;},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-Womick-4&quot;}}"><a
                            href="#cite_note-Womick-4" id="mwJQ"><span class="mw-reflink-text" id="mwJg"><span
                                class="cite-bracket" id="mwJw">[</span>4<span class="cite-bracket"
                                id="mwKA">]</span></span></a></sup></p>

                    </section>
                    <section data-mw-section-id="3" id="mwKQ" aria-labelledby="1900s">
                      <div class="mw-heading mw-heading3">
                        <h3 id="1900s">1900s</h3><span class="mw-editsection"><span
                            class="mw-editsection-bracket">[</span><a
                            href="/w/index.php?title=Belk&amp;action=edit&amp;section=3"
                            title="Edit section: 1900s"><span>edit</span></a><span
                            class="mw-editsection-bracket">]</span></span>
                      </div>
                      <p id="mwKg">By 1909, the company had moved its headquarters to Charlotte and built a huge
                        flagship store on Trade and Tryon Streets in downtown Charlotte, which would remain the
                        company's headquarters until it was closed in 1988 to make way for the construction of what is
                        now <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Bank_of_America_Corporate_Center"
                          title="Bank of America Corporate Center" id="mwKw">Bank of America Corporate Center</a>. The
                        business grew steadily, relying on "bargain sales" and advertising to grow the business and
                        increase its influence throughout the South.</p>

                      <p id="mwLA">Beginning in 1921 with the Leggett Bros. stores of <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/South_Boston,_Virginia" title="South Boston, Virginia"
                          id="mwLQ">South Boston, Virginia</a>, the Belk company grew by investing in various
                        partnerships with local merchandisers in nearby markets.<sup about="#mwt26"
                          class="mw-ref reference" id="cite_ref-Womick_4-1" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{&quot;name&quot;:&quot;Womick&quot;}}"><a
                            href="#cite_note-Womick-4" id="mwLg"><span class="mw-reflink-text" id="mwLw"><span
                                class="cite-bracket" id="mwMA">[</span>4<span class="cite-bracket"
                                id="mwMQ">]</span></span></a></sup> Belk's growth out of the Southeast was pushed by
                        Earl Jones Sr and the Belk-Jones brand that opened the first Belk west of the Mississippi in
                        1947. The Jones family and the Belk-Jones brand continued to grow Belk's westward expansion.
                        This complex story is chronicled in a book published by Belk—<i id="mwMg">Belk, Inc.: The
                          Company and the Family That Built It</i>—about the evolution of the company.<sup
                          about="#mwt29" class="mw-ref reference" id="cite_ref-autogenerated1_5-0" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{&quot;name&quot;:&quot;autogenerated1&quot;},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-autogenerated1-5&quot;}}"><a
                            href="#cite_note-autogenerated1-5" id="mwMw"><span class="mw-reflink-text" id="mwNA"><span
                                class="cite-bracket" id="mwNQ">[</span>5<span class="cite-bracket"
                                id="mwNg">]</span></span></a></sup></p>

                      <figure class="mw-halign-right" typeof="mw:File/Thumb" id="mwNw"><a
                          href="https://en.wikipedia.org/wiki/File:Belk-1910.jpg" class="mw-file-description"
                          id="mwOA"><img resource="https://en.wikipedia.org/wiki/File:Belk-1910.jpg"
                            src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Belk-1910.jpg/250px-Belk-1910.jpg?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail"
                            decoding="async" loading="lazy"
                            srcset="//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Belk-1910.jpg/500px-Belk-1910.jpg?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail 2x"
                            data-file-width="907" data-file-height="634" data-file-type="bitmap" height="169"
                            width="242" class="mw-file-element" id="mwOQ"></a>
                        <figcaption id="mwOg">Belk Bros. store in <a rel="mw:WikiLink"
                            href="https://en.wikipedia.org/wiki/Charlotte,_North_Carolina"
                            title="Charlotte, North Carolina" id="mwOw">Charlotte, North Carolina</a>, c. 1910
                        </figcaption>
                      </figure>

                      <p id="mwPA">This structure allowed Belk to expand quickly and permitted local variation, but
                        resulted in a diluted brand identity since most stores were co-branded. By the 1990s, the system
                        had become increasingly untenable: stores were held by over 350 separate legal entities, Belk
                        family members disagreed about whether to maintain or sweep away the structure, and some local
                        partners threatened stability by selling their stakes. For example, the heirs of John G. Parks,
                        majority owners of the Parks-Belk chain, sold their interests to <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Proffitt's" title="Proffitt's" id="mwPQ">Proffitt's</a>, a
                        competitor. The Belks quickly sold their stake as well, although Belk would later purchase the
                        stores back as part of its later acquisition of the entire Proffitt's chain. When Proffitt's
                        made an offer for the Leggett family's stake, which included 42 stores comprising about 20
                        percent of Belk's revenue, John and Tom Belk were forced to respond by forming a new company in
                        1996 that bought the Leggetts out. This move accelerated the slow trend of consolidating the
                        store's ownership under the Belks.<sup about="#mwt32" class="mw-ref reference" id="cite_ref-6"
                          rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-6&quot;}}"><a
                            href="#cite_note-6" id="mwPg"><span class="mw-reflink-text" id="mwPw"><span
                                class="cite-bracket" id="mwQA">[</span>6<span class="cite-bracket"
                                id="mwQQ">]</span></span></a></sup></p>

                      <p id="mwQg">In April 1997 Belk closed its smallest store located in the smallest town with a
                        Belk—Chesterfield, South Carolina—with a population of less than 1,500. In 1998, the company
                        formed a new entity (Belk, Inc.) that merged the 112 remaining Belk companies, swapping the
                        existing partners' local interests for shares in the combined entity; for example, the Hudson
                        family in Raleigh received almost 5% of the shares.<sup about="#mwt35" class="mw-ref reference"
                          id="cite_ref-7" rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-7&quot;}}"><a
                            href="#cite_note-7" id="mwQw"><span class="mw-reflink-text" id="mwRA"><span
                                class="cite-bracket" id="mwRQ">[</span>7<span class="cite-bracket"
                                id="mwRg">]</span></span></a></sup> The same year, Belk made a deal to acquire seven <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Dillard's" title="Dillard's"
                          id="mwRw">Dillard's</a> locations in exchange for nine of theirs so that each could build on
                        regional strengths. Slowly, Belk eliminated the dual brands, completing the process with a
                        chain-wide Belk rebranding in the fall of 2010.</p>

                    </section>
                    <section data-mw-section-id="4" id="mwSA" aria-labelledby="2000s">
                      <div class="mw-heading mw-heading3">
                        <h3 id="2000s">2000s</h3><span class="mw-editsection"><span
                            class="mw-editsection-bracket">[</span><a
                            href="/w/index.php?title=Belk&amp;action=edit&amp;section=4"
                            title="Edit section: 2000s"><span>edit</span></a><span
                            class="mw-editsection-bracket">]</span></span>
                      </div>
                      <figure class="mw-halign-left" typeof="mw:File/Thumb" id="mwSQ"><a
                          href="https://en.wikipedia.org/wiki/File:Belk,_Southgate_Mall,_Elizabeth_City,_NC_(east_anchor_1969-_present).JPG"
                          class="mw-file-description" id="mwSg"><img
                            resource="https://en.wikipedia.org/wiki/File:Belk,_Southgate_Mall,_Elizabeth_City,_NC_(east_anchor_1969-_present).JPG"
                            src="//upload.wikimedia.org/wikipedia/commons/thumb/3/38/Belk%2C_Southgate_Mall%2C_Elizabeth_City%2C_NC_%28east_anchor_1969-_present%29.JPG/330px-Belk%2C_Southgate_Mall%2C_Elizabeth_City%2C_NC_%28east_anchor_1969-_present%29.JPG?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail"
                            decoding="async" loading="lazy"
                            srcset="//upload.wikimedia.org/wikipedia/commons/thumb/3/38/Belk%2C_Southgate_Mall%2C_Elizabeth_City%2C_NC_%28east_anchor_1969-_present%29.JPG/960px-Belk%2C_Southgate_Mall%2C_Elizabeth_City%2C_NC_%28east_anchor_1969-_present%29.JPG?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail 2x"
                            data-file-width="4288" data-file-height="2416" data-file-type="bitmap" height="169"
                            width="300" class="mw-file-element" id="mwSw"></a>
                        <figcaption id="mwTA">One of the earliest prototype 1960s-era stores to feature the trademark
                          Belk arches, Southgate Mall, Elizabeth City, North Carolina, as shown in 2015</figcaption>
                      </figure>

                      <p id="mwTQ">On July 5, 2005, Belk completed the purchase of 47 <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Proffitt's" title="Proffitt's" id="mwTg">Proffitt's</a>
                        and <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/McRae's" title="McRae's"
                          id="mwTw">McRae's</a> department stores from <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Saks_Incorporated" title="Saks Incorporated"
                          class="mw-redirect" id="mwUA">Saks Incorporated</a>, primarily in Tennessee and Mississippi.
                        Belk rebranded the 39 Proffitt's and McRae's stores to the Belk nameplate on March 8, 2006.<sup
                          about="#mwt38" class="mw-ref reference" id="cite_ref-8" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-8&quot;}}"><a
                            href="#cite_note-8" id="mwUQ"><span class="mw-reflink-text" id="mwUg"><span
                                class="cite-bracket" id="mwUw">[</span>8<span class="cite-bracket"
                                id="mwVA">]</span></span></a></sup> Just over a year later, Belk purchased 38 <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Parisian_(department_store_chain)"
                          title="Parisian (department store chain)" class="mw-redirect" id="mwVQ">Parisian</a>
                        department stores from Saks on October 2, 2006. Although most Parisian stores were downgraded to
                        the Belk nameplate since September 12, 2007, some duplicate Parisian stores were closed, as at
                        <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Mall_at_Barnes_Crossing"
                          title="Mall at Barnes Crossing" id="mwVg">The Mall at Barnes Crossing</a> in Tupelo,
                        Mississippi, <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Richland_Mall_(South_Carolina)"
                          title="Richland Mall (South Carolina)" id="mwVw">Richland Mall</a> (then known as Midtown at
                        Forest Acres), <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Columbiana_Centre"
                          title="Columbiana Centre" id="mwWA">Columbiana Centre</a> in Columbia, South Carolina, and <a
                          rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Citadel_Mall_(Charleston,_South_Carolina)"
                          title="Citadel Mall (Charleston, South Carolina)" class="mw-redirect" id="mwWQ">Citadel
                          Mall</a> in Charleston, <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/South_Carolina" title="South Carolina" id="mwWg">South
                          Carolina</a>. Four Parisian stores in Indiana, Michigan, and Ohio, plus a store under
                        construction at the time in Michigan, were sold by Belk to <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Bon-Ton" title="Bon-Ton" class="mw-redirect" id="mwWw">The
                          Bon-Ton Stores, Inc</a>. Integrating the larger, more upscale Parisian stores proved a
                        challenge for Belk, and spurred the creation of the company's flagship strategy.<sup
                          about="#mwt41" class="mw-ref reference" id="cite_ref-9" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-9&quot;}}"><a
                            href="#cite_note-9" id="mwXA"><span class="mw-reflink-text" id="mwXQ"><span
                                class="cite-bracket" id="mwXg">[</span>9<span class="cite-bracket"
                                id="mwXw">]</span></span></a></sup>
                      </p>

                      <p id="mwYA">During the fourth quarter of 2005, Belk completed the sale of its private-label
                        credit card division, Belk National Bank, to GE MoneyBank, a division of <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/GE_Consumer_Finance" title="GE Consumer Finance"
                          class="mw-redirect" id="mwYQ">GE Consumer Finance</a>.<sup about="#mwt44"
                          class="mw-ref reference" id="cite_ref-cbj-2005nov21_10-0" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{&quot;name&quot;:&quot;cbj-2005nov21&quot;},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-cbj-2005nov21-10&quot;}}"><a
                            href="#cite_note-cbj-2005nov21-10" id="mwYg"><span class="mw-reflink-text" id="mwYw"><span
                                class="cite-bracket" id="mwZA">[</span>10<span class="cite-bracket"
                                id="mwZQ">]</span></span></a></sup> Consumers were issued new Belk credit cards
                        replacing the old ones issued by BNB. All new Belk cards are now issued by GE MoneyBank, now
                        known as <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Synchrony_Bank"
                          title="Synchrony Bank" class="mw-redirect" id="mwZg">Synchrony Bank</a>.<sup about="#mwt47"
                          class="mw-ref reference" id="cite_ref-Belk1_11-0" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{&quot;name&quot;:&quot;Belk1&quot;},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-Belk1-11&quot;}}"><a
                            href="#cite_note-Belk1-11" id="mwZw"><span class="mw-reflink-text" id="mwaA"><span
                                class="cite-bracket" id="mwaQ">[</span>11<span class="cite-bracket"
                                id="mwag">]</span></span></a></sup></p>

                      <p id="mwaw">As Belk made acquisitions, the websites acquired were changed to redirect to
                        Belk.com. Belk operated limited <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Electronic_commerce" title="Electronic commerce"
                          class="mw-redirect" id="mwbA">electronic commerce</a> on its website. Home furnishings such as
                        bedding, small kitchen appliances, crystal, dinnerware, and china have been offered for several
                        years to online shoppers as a part of the chain's online bridal and gift registry. The chain
                        revamped its website and registry on September 15, 2008. Celebrity-branded product lines were
                        also introduced, including a partnership with actress <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Kristin_Davis" title="Kristin Davis" id="mwbQ">Kristin
                          Davis</a> for women's apparel and accessories collection which debuted in fall 2008 in 125
                        store locations and online. However, that product line was discontinued in late 2009.</p>

                    </section>
                    <section data-mw-section-id="5" id="mwbg" aria-labelledby="2010s">
                      <div class="mw-heading mw-heading3">
                        <h3 id="2010s">2010s</h3><span class="mw-editsection"><span
                            class="mw-editsection-bracket">[</span><a
                            href="/w/index.php?title=Belk&amp;action=edit&amp;section=5"
                            title="Edit section: 2010s"><span>edit</span></a><span
                            class="mw-editsection-bracket">]</span></span>
                      </div>
                      <figure class="mw-default-size" typeof="mw:File/Thumb" id="mwbw"><a
                          href="https://en.wikipedia.org/wiki/File:Belk_at_Mall_of_Georgia.jpg"
                          class="mw-file-description" id="mwcA"><img
                            resource="https://en.wikipedia.org/wiki/File:Belk_at_Mall_of_Georgia.jpg"
                            src="//upload.wikimedia.org/wikipedia/commons/thumb/7/75/Belk_at_Mall_of_Georgia.jpg/250px-Belk_at_Mall_of_Georgia.jpg?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail"
                            decoding="async" loading="lazy"
                            srcset="//upload.wikimedia.org/wikipedia/commons/thumb/7/75/Belk_at_Mall_of_Georgia.jpg/500px-Belk_at_Mall_of_Georgia.jpg?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail 2x"
                            data-file-width="4608" data-file-height="3456" data-file-type="bitmap" height="188"
                            width="250" class="mw-file-element" id="mwcQ"></a>
                        <figcaption id="mwcg">Belk at the <a rel="mw:WikiLink"
                            href="https://en.wikipedia.org/wiki/Mall_of_Georgia" title="Mall of Georgia" id="mwcw">Mall
                            of Georgia</a> in <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Buford,_Georgia"
                            title="Buford, Georgia" id="mwdA">Buford, Georgia</a> (2019)</figcaption>
                      </figure>

                      <p id="mwdQ">On October 3, 2010, the <i id="mwdg"><a rel="mw:WikiLink"
                            href="https://en.wikipedia.org/wiki/News_&amp;_Observer" title="News &amp; Observer"
                            class="mw-redirect" id="mwdw">News &amp; Observer</a></i> reported that Belk planned to
                        update its logo.<sup about="#mwt51" class="mw-ref reference" id="cite_ref-12"
                          rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-12&quot;}}"><a
                            href="#cite_note-12" id="mweA"><span class="mw-reflink-text" id="mweQ"><span
                                class="cite-bracket" id="mweg">[</span>12<span class="cite-bracket"
                                id="mwew">]</span></span></a></sup> On October 12 at <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/SouthPark_Mall_(Charlotte,_North_Carolina)"
                          title="SouthPark Mall (Charlotte, North Carolina)" class="mw-redirect" id="mwfA">SouthPark
                          Mall</a>, Belk introduced the new logo, its first since 1967. The chain embarked on a $70
                        million marketing campaign that replaced the old slogan "All for You!" with a new slogan,
                        "Modern. Southern. Style." Sixty stores got new signs in the first phase, with the remainder
                        getting new signs throughout 2011.<sup about="#mwt54" class="mw-ref reference" id="cite_ref-13"
                          rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-13&quot;}}"><a
                            href="#cite_note-13" id="mwfQ"><span class="mw-reflink-text" id="mwfg"><span
                                class="cite-bracket" id="mwfw">[</span>13<span class="cite-bracket"
                                id="mwgA">]</span></span></a></sup> Advertisements for Belk &amp; Co. <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Jewelry" title="Jewelry"
                          class="mw-redirect" id="mwgQ">jewelry</a> continue to use a variation of the old logo.</p>

                      <p id="mwgg">By 2014, the chain operated 293 stores in 16 states, generating $4 billion in sales
                        in 2014. The state of North Carolina leads in the number of Belk stores with 65 stores followed
                        by Georgia and South Carolina with 45 and 35 stores respectively.<sup about="#mwt55"
                          class="mw-ref reference" id="cite_ref-autogenerated2_1-1" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{&quot;name&quot;:&quot;autogenerated2&quot;}}"><a
                            href="#cite_note-autogenerated2-1" id="mwgw"><span class="mw-reflink-text" id="mwhA"><span
                                class="cite-bracket" id="mwhQ">[</span>1<span class="cite-bracket"
                                id="mwhg">]</span></span></a></sup> Its typical store covers 100,000 to 180,000 square
                        feet. Fifty percent of its stores are in regional malls, another 40% in open-air community or <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Power_center_(retail)"
                          title="Power center (retail)" id="mwhw">retail parks</a>, and 10% in open-air <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Lifestyle_center_(retail)"
                          title="Lifestyle center (retail)" class="mw-redirect" id="mwiA">lifestyle centers</a>.<sup
                          about="#mwt58" class="mw-ref reference" id="cite_ref-14" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-14&quot;}}"><a
                            href="#cite_note-14" id="mwiQ"><span class="mw-reflink-text" id="mwig"><span
                                class="cite-bracket" id="mwiw">[</span>14<span class="cite-bracket"
                                id="mwjA">]</span></span></a></sup></p>

                    </section>
                    <section data-mw-section-id="6" id="mwjQ" aria-labelledby="Acquisition_by_Sycamore_Partners">
                      <div class="mw-heading mw-heading3">
                        <h3 id="Acquisition_by_Sycamore_Partners">Acquisition by Sycamore Partners</h3><span
                          class="mw-editsection"><span class="mw-editsection-bracket">[</span><a
                            href="/w/index.php?title=Belk&amp;action=edit&amp;section=6"
                            title="Edit section: Acquisition by Sycamore Partners"><span>edit</span></a><span
                            class="mw-editsection-bracket">]</span></span>
                      </div>
                      <figure class="mw-halign-right" typeof="mw:File/Thumb" id="mwjg"><a
                          href="https://en.wikipedia.org/wiki/File:BelkGRNVLE.jpg" class="mw-file-description"
                          id="mwjw"><img resource="https://en.wikipedia.org/wiki/File:BelkGRNVLE.jpg"
                            src="//upload.wikimedia.org/wikipedia/commons/thumb/6/6e/BelkGRNVLE.jpg/250px-BelkGRNVLE.jpg?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail"
                            decoding="async" loading="lazy"
                            srcset="//upload.wikimedia.org/wikipedia/commons/thumb/6/6e/BelkGRNVLE.jpg/500px-BelkGRNVLE.jpg?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail 2x"
                            data-file-width="1065" data-file-height="655" data-file-type="bitmap" height="154"
                            width="250" class="mw-file-element" id="mwkA"></a>
                        <figcaption id="mwkQ">Belk store at <a rel="mw:WikiLink"
                            href="https://en.wikipedia.org/wiki/Haywood_Mall" title="Haywood Mall" id="mwkg">Haywood
                            Mall</a> in <a rel="mw:WikiLink"
                            href="https://en.wikipedia.org/wiki/Greenville,_South_Carolina"
                            title="Greenville, South Carolina" id="mwkw">Greenville, South Carolina</a> (2016)
                        </figcaption>
                      </figure>

                      <p id="mwlA">On April 3, 2015, news reports revealed that Belk was exploring "strategic
                        alternatives," including a possible sale of the company.<sup about="#mwt61"
                          class="mw-ref reference" id="cite_ref-15" rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-15&quot;}}"><a
                            href="#cite_note-15" id="mwlQ"><span class="mw-reflink-text" id="mwlg"><span
                                class="cite-bracket" id="mwlw">[</span>15<span class="cite-bracket"
                                id="mwmA">]</span></span></a></sup></p>

                      <p id="mwmQ">On August 24, 2015, Belk announced that it had entered into a definitive merger
                        agreement to be acquired by New York–based private equity firm <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Sycamore_Partners" title="Sycamore Partners"
                          id="mwmg">Sycamore Partners</a>. The acquisition was completed on December 10, 2015.<sup
                          about="#mwt64" class="mw-ref reference" id="cite_ref-16" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-16&quot;}}"><a
                            href="#cite_note-16" id="mwmw"><span class="mw-reflink-text" id="mwnA"><span
                                class="cite-bracket" id="mwnQ">[</span>16<span class="cite-bracket"
                                id="mwng">]</span></span></a></sup></p>

                      <p id="mwnw">On June 29, 2016, Belk announced that effective as of July 5, Lisa Harper, CEO of <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Hot_Topic" title="Hot Topic"
                          id="mwoA">Hot Topic</a> (another Sycamore Partners-owned company), would replace Tim Belk as
                        CEO of Belk. This would be the first time since the founding of the company that a non-Belk
                        family member would head the company.<sup about="#mwt67" class="mw-ref reference"
                          id="cite_ref-17" rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-17&quot;}}"><a
                            href="#cite_note-17" id="mwoQ"><span class="mw-reflink-text" id="mwog"><span
                                class="cite-bracket" id="mwow">[</span>17<span class="cite-bracket"
                                id="mwpA">]</span></span></a></sup></p>

                      <p id="mwpQ">In July 2020, it was announced that Sycamore Partners had made a $1.75 billion offer
                        to acquire department store chain and competitor <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/JCPenney" title="JCPenney" id="mwpg">JCPenney</a> out of
                        bankruptcy. Under the terms of the plan, two hundred fifty JCPenney stores would have been
                        rebranded as Belk in an effort to compete directly with Macy's, while the remaining JCPenney
                        stores would be liquidated.<sup about="#mwt70" class="mw-ref reference" id="cite_ref-18"
                          rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-18&quot;}}"><a
                            href="#cite_note-18" id="mwpw"><span class="mw-reflink-text" id="mwqA"><span
                                class="cite-bracket" id="mwqQ">[</span>18<span class="cite-bracket"
                                id="mwqg">]</span></span></a></sup> But JCPenney was ultimately acquired by <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Brookfield_Property_Partners"
                          title="Brookfield Property Partners" id="mwqw">Brookfield Property Partners</a> and <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Simon_Property_Group"
                          title="Simon Property Group" id="mwrA">Simon Property Group</a>.<sup about="#mwt73"
                          class="mw-ref reference" id="cite_ref-19" rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-19&quot;}}"><a
                            href="#cite_note-19" id="mwrQ"><span class="mw-reflink-text" id="mwrg"><span
                                class="cite-bracket" id="mwrw">[</span>19<span class="cite-bracket"
                                id="mwsA">]</span></span></a></sup></p>

                    </section>
                    <section data-mw-section-id="7" id="mwsQ" aria-labelledby="2021:_One-day_bankruptcy">
                      <div class="mw-heading mw-heading3">
                        <h3 id="2021:_One-day_bankruptcy">2021: One-day bankruptcy</h3><span
                          class="mw-editsection"><span class="mw-editsection-bracket">[</span><a
                            href="/w/index.php?title=Belk&amp;action=edit&amp;section=7"
                            title="Edit section: 2021: One-day bankruptcy"><span>edit</span></a><span
                            class="mw-editsection-bracket">]</span></span>
                      </div>
                      <p id="mwsg">On January 20, 2021, it was announced that <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Kohlberg_Kravis_Roberts" title="Kohlberg Kravis Roberts"
                          class="mw-redirect" id="mwsw">KKR</a> and other major lenders were in talks with Belk to
                        prevent the chain from declaring bankruptcy, having proposed a deal under which a portion of
                        Belk's $2.6 billion debt would be converted to equity and Sycamore would retain an ownership
                        stake.<sup about="#mwt76" class="mw-ref reference" id="cite_ref-20" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-20&quot;}}"><a
                            href="#cite_note-20" id="mwtA"><span class="mw-reflink-text" id="mwtQ"><span
                                class="cite-bracket" id="mwtg">[</span>20<span class="cite-bracket"
                                id="mwtw">]</span></span></a></sup></p>

                      <p id="mwuA">On January 26, 2021, it was announced that Belk would file for Chapter 11 bankruptcy,
                        continuing to operate normally through the bankruptcy process, which Sycamore expected to exit
                        by the end of February 2021. Sycamore would retain majority control of Belk, while private
                        equity firms KKR and Blackstone Credit would receive a minority stake in the company following
                        its emergence from bankruptcy. The plan would liquidate about $450 million of debt and raise
                        $225 million in new capital, with no employee layoffs or store closures anticipated.<sup
                          about="#mwt79" class="mw-ref reference" id="cite_ref-21" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-21&quot;}}"><a
                            href="#cite_note-21" id="mwuQ"><span class="mw-reflink-text" id="mwug"><span
                                class="cite-bracket" id="mwuw">[</span>21<span class="cite-bracket"
                                id="mwvA">]</span></span></a></sup><sup about="#mwt82" class="mw-ref reference"
                          id="cite_ref-22" rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-22&quot;}}"><a
                            href="#cite_note-22" id="mwvQ"><span class="mw-reflink-text" id="mwvg"><span
                                class="cite-bracket" id="mwvw">[</span>22<span class="cite-bracket"
                                id="mwwA">]</span></span></a></sup></p>

                      <p id="mwwQ">On February 23, 2021, it was announced that Belk had filed Chapter 11 bankruptcy in
                        <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Houston" title="Houston"
                          id="mwwg">Houston</a>, the first step in an organization plan that would allow Belk's owner <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Sycamore_Partners"
                          title="Sycamore Partners" id="mwww">Sycamore Partners</a> to cede a large stake in the company
                        to its lenders while maintaining control of the company. If the bankruptcy plan were approved it
                        would give Belk new capital while cutting its debt load by about $450 million, reducing its
                        total debt to about $1.46 billion, according to the company.<sup about="#mwt85"
                          class="mw-ref reference" id="cite_ref-23" rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-23&quot;}}"><a
                            href="#cite_note-23" id="mwxA"><span class="mw-reflink-text" id="mwxQ"><span
                                class="cite-bracket" id="mwxg">[</span>23<span class="cite-bracket"
                                id="mwxw">]</span></span></a></sup><sup about="#mwt88" class="mw-ref reference"
                          id="cite_ref-Belk_Files_for_Chapter_11_Bankruptcy_24-0" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{&quot;name&quot;:&quot;Belk Files for Chapter 11 Bankruptcy&quot;},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-Belk_Files_for_Chapter_11_Bankruptcy-24&quot;}}"><a
                            href="#cite_note-Belk_Files_for_Chapter_11_Bankruptcy-24" id="mwyA"><span
                              class="mw-reflink-text" id="mwyQ"><span class="cite-bracket" id="mwyg">[</span>24<span
                                class="cite-bracket" id="mwyw">]</span></span></a></sup>
                      </p>

                      <p id="mwzA">On February 24, 2021, one day after filing for Chapter 11 bankruptcy, the company
                        announced that it had completed its financial restructuring, finalizing an expedited
                        pre-packaged, one-day reorganization and emerging well-positioned for long-term growth. As part
                        of the restructuring, Belk received $225 million of new capital, reduced its debt by
                        approximately $450 million, and extended maturities on all term loans until July 2025. The plan
                        received nearly unanimous support from existing lenders, supply providers, and landlords to be
                        paid in full as normal operations continue at all store locations, as well as on Belk's
                        e-commerce platform.<sup about="#mwt91" class="mw-ref reference" id="cite_ref-25"
                          rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-25&quot;}}"><a
                            href="#cite_note-25" id="mwzQ"><span class="mw-reflink-text" id="mwzg"><span
                                class="cite-bracket" id="mwzw">[</span>25<span class="cite-bracket"
                                id="mw0A">]</span></span></a></sup><sup about="#mwt94" class="mw-ref reference"
                          id="cite_ref-26" rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-26&quot;}}"><a
                            href="#cite_note-26" id="mw0Q"><span class="mw-reflink-text" id="mw0g"><span
                                class="cite-bracket" id="mw0w">[</span>26<span class="cite-bracket"
                                id="mw1A">]</span></span></a></sup><sup about="#mwt97" class="mw-ref reference"
                          id="cite_ref-27" rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-27&quot;}}"><a
                            href="#cite_note-27" id="mw1Q"><span class="mw-reflink-text" id="mw1g"><span
                                class="cite-bracket" id="mw1w">[</span>27<span class="cite-bracket"
                                id="mw2A">]</span></span></a></sup></p>

                    </section>
                    <section data-mw-section-id="8" id="mw2Q" aria-labelledby="New_growth">
                      <div class="mw-heading mw-heading3">
                        <h3 id="New_growth">New growth</h3><span class="mw-editsection"><span
                            class="mw-editsection-bracket">[</span><a
                            href="/w/index.php?title=Belk&amp;action=edit&amp;section=8"
                            title="Edit section: New growth"><span>edit</span></a><span
                            class="mw-editsection-bracket">]</span></span>
                      </div>
                      <p id="mw2g">On July 6, 2021, Belk announced that Nir Patel had been promoted to <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/CEO" title="CEO" class="mw-redirect"
                          id="mw2w">CEO</a> from his previous position of <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/President_(corporate_title)"
                          title="President (corporate title)" id="mw3A">president</a> and <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Chief_merchandising_officer"
                          title="Chief merchandising officer" id="mw3Q">chief merchandising officer</a>. Patel replaces
                        Lisa Harper, who had been the company's CEO since July 2016, and would now serve as <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Chairperson" title="Chairperson"
                          class="mw-redirect" id="mw3g">executive chair</a> of the Belk Board of Directors.<sup
                          about="#mwt100" class="mw-ref reference" id="cite_ref-28" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-28&quot;}}"><a
                            href="#cite_note-28" id="mw3w"><span class="mw-reflink-text" id="mw4A"><span
                                class="cite-bracket" id="mw4Q">[</span>28<span class="cite-bracket"
                                id="mw4g">]</span></span></a></sup> Along with the CEO change, Belk also announced that
                        Don Hendricks would be promoted from Chief Operating Officer to president. The company also
                        hired Chris Kolbe as EVP, Chief Merchandising Officer. </p>

                      <p id="mw4w">In May 2023, it was reported that Belk was expanding a new store format, Belk Outlet.
                        There were 16 locations, 10 of which had just recently opened.<sup about="#mwt103"
                          class="mw-ref reference" id="cite_ref-29" rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-29&quot;}}"><a
                            href="#cite_note-29" id="mw5A"><span class="mw-reflink-text" id="mw5Q"><span
                                class="cite-bracket" id="mw5g">[</span>29<span class="cite-bracket"
                                id="mw5w">]</span></span></a></sup></p>

                    </section>
                  </section>
                  <section data-mw-section-id="9" id="mw6A" aria-labelledby="Brand_identity">
                    <div class="mw-heading mw-heading2">
                      <h2 id="Brand_identity">Brand identity</h2><span class="mw-editsection"><span
                          class="mw-editsection-bracket">[</span><a
                          href="/w/index.php?title=Belk&amp;action=edit&amp;section=9"
                          title="Edit section: Brand identity"><span>edit</span></a><span
                          class="mw-editsection-bracket">]</span></span>
                    </div>
                    <ul class="gallery mw-gallery-traditional" typeof="mw:Extension/gallery" about="#mwt104" id="mw6Q"
                      data-mw="{&quot;name&quot;:&quot;gallery&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{}}">
                      <li class="gallerybox" style="width: 155px;" id="mw6g">
                        <div class="thumb" style="width: 150px; height: 150px;" id="mw6w"><span typeof="mw:File"
                            id="mw7A"><a href="https://en.wikipedia.org/wiki/File:Old_Belk_logo.png"
                              class="mw-file-description"
                              title="Belk logo used from 1968 until 2010; the &quot;all for you!&quot; slogan was introduced in the late 1990s"
                              id="mw7Q"><img resource="https://en.wikipedia.org/wiki/File:Old_Belk_logo.png"
                                src="//upload.wikimedia.org/wikipedia/en/thumb/4/45/Old_Belk_logo.png/120px-Old_Belk_logo.png?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail"
                                decoding="async" loading="lazy"
                                srcset="//upload.wikimedia.org/wikipedia/en/thumb/4/45/Old_Belk_logo.png/250px-Old_Belk_logo.png?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail 2x"
                                alt="Belk logo used from 1968 until 2010; the &quot;all for you!&quot; slogan was introduced in the late 1990s"
                                data-file-width="400" data-file-height="173" data-file-type="bitmap" height="52"
                                width="120" class="mw-file-element" id="mw7g"></a></span></div>
                        <div class="gallerytext" id="mw7w">Belk logo used from 1968 until 2010; the "all for you!"
                          slogan was introduced in the late 1990s</div>
                      </li>
                      <li class="gallerybox" style="width: 155px;" id="mw8A">
                        <div class="thumb" style="width: 150px; height: 150px;" id="mw8Q"><span typeof="mw:File"
                            id="mw8g"><a href="https://en.wikipedia.org/wiki/File:Belk_logo_2010.svg"
                              class="mw-file-description"
                              title="Belk logo with icon, used alongside a text-only version, since 2010" id="mw8w"><img
                                resource="https://en.wikipedia.org/wiki/File:Belk_logo_2010.svg"
                                src="//upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Belk_logo_2010.svg/120px-Belk_logo_2010.svg.png?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail"
                                decoding="async" loading="lazy"
                                srcset="//upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Belk_logo_2010.svg/250px-Belk_logo_2010.svg.png?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail 2x"
                                alt="Belk logo with icon, used alongside a text-only version, since 2010"
                                data-file-width="721" data-file-height="243" data-file-type="drawing" height="40"
                                width="120" class="mw-file-element" id="mw9A"></a></span></div>
                        <div class="gallerytext" id="mw9Q">Belk logo with icon, used alongside a text-only version,
                          since 2010</div>
                      </li>
                    </ul>

                  </section>
                  <section data-mw-section-id="10" id="mw9g" aria-labelledby="Sponsorships">
                    <div class="mw-heading mw-heading2">
                      <h2 id="Sponsorships">Sponsorships</h2><span class="mw-editsection"><span
                          class="mw-editsection-bracket">[</span><a
                          href="/w/index.php?title=Belk&amp;action=edit&amp;section=10"
                          title="Edit section: Sponsorships"><span>edit</span></a><span
                          class="mw-editsection-bracket">]</span></span>
                    </div>
                    <p id="mw9w">In December 2010, Belk announced that it would become the title sponsor for the former
                      Meineke Car Care Bowl (played in Charlotte), renamed as the <a rel="mw:WikiLink"
                        href="https://en.wikipedia.org/wiki/Belk_Bowl" title="Belk Bowl" class="mw-redirect"
                        id="mw-A">Belk Bowl</a> beginning in 2011. The sponsorship would continue for three years. On
                      July 18, 2013, Belk announced a six-year extension of the bowl partnership with the <a
                        rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Atlantic_Coast_Conference"
                        title="Atlantic Coast Conference" id="mw-Q">Atlantic Coast Conference</a> (ACC), beginning in
                      2014.<sup about="#mwt107" class="mw-ref reference" id="cite_ref-30" rel="dc:references"
                        typeof="mw:Extension/ref"
                        data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-30&quot;}}"><a
                          href="#cite_note-30" id="mw-g"><span class="mw-reflink-text" id="mw-w"><span
                              class="cite-bracket" id="mw_A">[</span>30<span class="cite-bracket"
                              id="mw_Q">]</span></span></a></sup> Under the agreement, the bowl featured teams from the
                      ACC and the <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Southeastern_Conference"
                        title="Southeastern Conference" id="mw_g">Southeastern Conference</a> (SEC). On November 20,
                      2019, Belk announced that it would no longer be the title sponsor for the bowl game following the
                      2019 bowl game.<sup about="#mwt110" class="mw-ref reference" id="cite_ref-31" rel="dc:references"
                        typeof="mw:Extension/ref"
                        data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-31&quot;}}"><a
                          href="#cite_note-31" id="mw_w"><span class="mw-reflink-text" id="mwAQA"><span
                              class="cite-bracket" id="mwAQE">[</span>31<span class="cite-bracket"
                              id="mwAQI">]</span></span></a></sup> Overall, Belk was the title sponsor for nine editions
                      of the bowl (2011–2019).<sup about="#mwt113" class="mw-ref reference" id="cite_ref-32"
                        rel="dc:references" typeof="mw:Extension/ref"
                        data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-32&quot;}}"><a
                          href="#cite_note-32" id="mwAQM"><span class="mw-reflink-text" id="mwAQQ"><span
                              class="cite-bracket" id="mwAQU">[</span>32<span class="cite-bracket"
                              id="mwAQY">]</span></span></a></sup></p>

                  </section>
                  <section data-mw-section-id="11" id="mwAQc" aria-labelledby="Flagship_locations">
                    <div class="mw-heading mw-heading2">
                      <h2 id="Flagship_locations">Flagship locations</h2><span class="mw-editsection"><span
                          class="mw-editsection-bracket">[</span><a
                          href="/w/index.php?title=Belk&amp;action=edit&amp;section=11"
                          title="Edit section: Flagship locations"><span>edit</span></a><span
                          class="mw-editsection-bracket">]</span></span>
                    </div>
                    <figure typeof="mw:File/Thumb" id="mwAQg"><a
                        href="https://en.wikipedia.org/wiki/File:Belk_Bridge_Street.jpg" class="mw-file-description"
                        id="mwAQk"><img resource="https://en.wikipedia.org/wiki/File:Belk_Bridge_Street.jpg"
                          src="//upload.wikimedia.org/wikipedia/commons/thumb/0/09/Belk_Bridge_Street.jpg/250px-Belk_Bridge_Street.jpg?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail"
                          decoding="async" loading="lazy"
                          srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/09/Belk_Bridge_Street.jpg/500px-Belk_Bridge_Street.jpg?utm_source=en.wikipedia.org&amp;utm_campaign=parser&amp;utm_content=thumbnail 2x"
                          data-file-width="3264" data-file-height="2448" data-file-type="bitmap" height="188"
                          width="250" class="mw-file-element" id="mwAQo"></a>
                      <figcaption id="mwAQs">A flagship store at <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Bridge_Street_Town_Centre"
                          title="Bridge Street Town Centre" id="mwAQw">Bridge Street Town Centre</a> in <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Huntsville,_Alabama"
                          title="Huntsville, Alabama" id="mwAQ0">Huntsville, Alabama</a></figcaption>
                    </figure>

                    <p id="mwAQ4">The chain has multiple "flagship" locations—larger locations in urban and metropolitan
                      centers,<sup about="#mwt116" class="mw-ref reference" id="cite_ref-33" rel="dc:references"
                        typeof="mw:Extension/ref"
                        data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-33&quot;}}"><a
                          href="#cite_note-33" id="mwAQ8"><span class="mw-reflink-text" id="mwARA"><span
                              class="cite-bracket" id="mwARE">[</span>33<span class="cite-bracket"
                              id="mwARI">]</span></span></a></sup> and a wider array of merchandise and services
                      including in-store salons.<sup about="#mwt119" class="mw-ref reference" id="cite_ref-34"
                        rel="dc:references" typeof="mw:Extension/ref"
                        data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-34&quot;}}"><a
                          href="#cite_note-34" id="mwARM"><span class="mw-reflink-text" id="mwARQ"><span
                              class="cite-bracket" id="mwARU">[</span>34<span class="cite-bracket"
                              id="mwARY">]</span></span></a></sup><sup about="#mwt122" class="mw-ref reference"
                        id="cite_ref-35" rel="dc:references" typeof="mw:Extension/ref"
                        data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-35&quot;}}"><a
                          href="#cite_note-35" id="mwARc"><span class="mw-reflink-text" id="mwARg"><span
                              class="cite-bracket" id="mwARk">[</span>35<span class="cite-bracket"
                              id="mwARo">]</span></span></a></sup> As of 2014, the chain had 18 flagship locations, and
                      was planning to upgrade more locations.</p>
                    <ul id="mwARs">
                      <li id="mwARw"><a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/SouthPark_Mall_(Charlotte,_North_Carolina)"
                          title="SouthPark Mall (Charlotte, North Carolina)" class="mw-redirect" id="mwAR0">SouthPark
                          Mall</a>, in <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Charlotte,_North_Carolina"
                          title="Charlotte, North Carolina" id="mwAR4">Charlotte, North Carolina</a>, houses the chain's
                        largest store, with more than <span about="#mwt123" typeof="mw:Transclusion" id="mwAR8"
                          data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;convert&quot;,&quot;href&quot;:&quot;./Template:Convert&quot;},&quot;params&quot;:{&quot;1&quot;:{&quot;wt&quot;:&quot;336414&quot;},&quot;2&quot;:{&quot;wt&quot;:&quot;ft2&quot;}},&quot;i&quot;:0}}]}">336,414
                          square feet (31,253.9</span><span typeof="mw:Entity" about="#mwt123">&nbsp;</span><span
                          about="#mwt123">m</span><sup about="#mwt123">2</sup><span about="#mwt123">)</span>. The store
                        was built in 1970 as one of the mall's original anchor stores. The mall was co-developed by the
                        Belk and <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Ivey's" title="Ivey's"
                          id="mwASA">Ivey</a> families.</li>
                      <li id="mwASE"><a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Riverchase_Galleria"
                          title="Riverchase Galleria" id="mwASI">Riverchase Galleria</a>, in <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Hoover,_Alabama" title="Hoover, Alabama"
                          id="mwASM">Hoover, Alabama</a>, houses a flagship store, made official after a recent
                        renovation brings it up to par with the mall's rival lifestyle center, <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/The_Summit_(Birmingham)" title="The Summit (Birmingham)"
                          class="mw-redirect" id="mwASQ">The Summit</a>.<sup about="#mwt126" class="mw-ref reference"
                          id="cite_ref-36" rel="dc:references" typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-36&quot;}}"><a
                            href="#cite_note-36" id="mwASU"><span class="mw-reflink-text" id="mwASY"><span
                                class="cite-bracket" id="mwASc">[</span>36<span class="cite-bracket"
                                id="mwASg">]</span></span></a></sup></li>
                      <li id="mwASk"><a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/The_Summit_(Birmingham)"
                          title="The Summit (Birmingham)" class="mw-redirect" id="mwASo">The Summit</a>, in <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Birmingham,_Alabama"
                          title="Birmingham, Alabama" id="mwASs">Birmingham, Alabama</a>, houses a flagship store built
                        in 1997 as a Parisian store and one of the lifestyle center's original anchors. Its intended
                        conversion to a Belk flagship was announced on April 25, 2007, with the reorganization complete
                        by September 2007. It had been Parisian's flagship store.</li>
                      <li id="mwASw"><a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Crabtree_Valley_Mall"
                          title="Crabtree Valley Mall" class="mw-redirect" id="mwAS0">Crabtree</a> in <a
                          rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Raleigh,_North_Carolina"
                          title="Raleigh, North Carolina" id="mwAS4">Raleigh, North Carolina</a>, where Hudson Belk
                        built an elaborate <span about="#mwt127" typeof="mw:Transclusion" id="mwAS8"
                          data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;convert&quot;,&quot;href&quot;:&quot;./Template:Convert&quot;},&quot;params&quot;:{&quot;1&quot;:{&quot;wt&quot;:&quot;236000&quot;},&quot;2&quot;:{&quot;wt&quot;:&quot;ft2&quot;},&quot;adj&quot;:{&quot;wt&quot;:&quot;on&quot;}},&quot;i&quot;:0}}]}">236,000-square-foot
                          (21,900</span><span typeof="mw:Entity" about="#mwt127">&nbsp;</span><span
                          about="#mwt127">m</span><sup about="#mwt127">2</sup><span about="#mwt127">)</span> store in
                        1972 (subsequently expanded to <span about="#mwt128" typeof="mw:Transclusion" id="mwATA"
                          data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;convert&quot;,&quot;href&quot;:&quot;./Template:Convert&quot;},&quot;params&quot;:{&quot;1&quot;:{&quot;wt&quot;:&quot;305000&quot;},&quot;2&quot;:{&quot;wt&quot;:&quot;ft2&quot;}},&quot;i&quot;:0}}]}">305,000
                          square feet (28,300</span><span typeof="mw:Entity" about="#mwt128">&nbsp;</span><span
                          about="#mwt128">m</span><sup about="#mwt128">2</sup><span about="#mwt128">)</span> in 2007,
                        with separate locations for menswear and in-mall cosmetics counters) in North Carolina's
                        high-tech <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Research_Triangle"
                          title="Research Triangle" id="mwATE">Research Triangle</a>.</li>
                      <li id="mwATI"><a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Columbiana_Centre"
                          title="Columbiana Centre" id="mwATM">Columbiana Centre</a> in <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Columbia,_South_Carolina" title="Columbia, South Carolina"
                          id="mwATQ">Columbia, South Carolina</a>, is home to one of Belk flagship stores, where Belk
                        expanded into the former <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/Sears"
                          title="Sears" id="mwATU">Sears</a> anchor location adding <span about="#mwt129"
                          typeof="mw:Transclusion" id="mwATY"
                          data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;convert&quot;,&quot;href&quot;:&quot;./Template:Convert&quot;},&quot;params&quot;:{&quot;1&quot;:{&quot;wt&quot;:&quot;50000&quot;},&quot;2&quot;:{&quot;wt&quot;:&quot;ft2&quot;},&quot;adj&quot;:{&quot;wt&quot;:&quot;on&quot;}},&quot;i&quot;:0}}]}">50,000-square-foot
                          (4,600</span><span typeof="mw:Entity" about="#mwt129">&nbsp;</span><span
                          about="#mwt129">m</span><sup about="#mwt129">2</sup><span about="#mwt129">)</span> to the
                        already over <span about="#mwt130" typeof="mw:Transclusion" id="mwATc"
                          data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;convert&quot;,&quot;href&quot;:&quot;./Template:Convert&quot;},&quot;params&quot;:{&quot;1&quot;:{&quot;wt&quot;:&quot;150000&quot;},&quot;2&quot;:{&quot;wt&quot;:&quot;ft2&quot;},&quot;adj&quot;:{&quot;wt&quot;:&quot;on&quot;}},&quot;i&quot;:0}}]}">150,000-square-foot
                          (14,000</span><span typeof="mw:Entity" about="#mwt130">&nbsp;</span><span
                          about="#mwt130">m</span><sup about="#mwt130">2</sup><span about="#mwt130">)</span> store in
                        2015, creating separate location for men's wear department, in one of South Carolina's biggest
                        malls.<sup about="#mwt133" class="mw-ref reference" id="cite_ref-37" rel="dc:references"
                          typeof="mw:Extension/ref"
                          data-mw="{&quot;name&quot;:&quot;ref&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;id&quot;:&quot;mw-reference-text-cite_note-37&quot;}}"><a
                            href="#cite_note-37" id="mwATg"><span class="mw-reflink-text" id="mwATk"><span
                                class="cite-bracket" id="mwATo">[</span>37<span class="cite-bracket"
                                id="mwATs">]</span></span></a></sup></li>
                      <li id="mwATw"><a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/The_Shoppes_at_Bel_Air"
                          title="The Shoppes at Bel Air" id="mwAT0">The Shoppes at Bel Air</a>, in <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Mobile,_Alabama" title="Mobile, Alabama"
                          id="mwAT4">Mobile, Alabama</a>, opened in September 2016, a <span about="#mwt134"
                          typeof="mw:Transclusion" id="mwAT8"
                          data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;convert&quot;,&quot;href&quot;:&quot;./Template:Convert&quot;},&quot;params&quot;:{&quot;1&quot;:{&quot;wt&quot;:&quot;237000&quot;},&quot;2&quot;:{&quot;wt&quot;:&quot;ft2&quot;},&quot;adj&quot;:{&quot;wt&quot;:&quot;on&quot;}},&quot;i&quot;:0}}]}">237,000-square-foot
                          (22,000</span><span typeof="mw:Entity" about="#mwt134">&nbsp;</span><span
                          about="#mwt134">m</span><sup about="#mwt134">2</sup><span about="#mwt134">)</span> that
                        replaced a former Sears. In order to do that, Belk closed two stores that were across from each
                        other: the former <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Parisian_(department_store)"
                          title="Parisian (department store)" id="mwAUA">Parisian</a> store in the mall and the former
                        <a rel="mw:WikiLink" href="https://en.wikipedia.org/wiki/McRae's" title="McRae's"
                          id="mwAUE">McRae's</a> across the street in the former <a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Springdale_Mall" title="Springdale Mall"
                          id="mwAUI">Springdale Mall</a>.
                      </li>
                    </ul>

                  </section>
                  <section data-mw-section-id="12" id="mwAUM" aria-labelledby="References">
                    <div class="mw-heading mw-heading2">
                      <h2 id="References">References</h2><span class="mw-editsection"><span
                          class="mw-editsection-bracket">[</span><a
                          href="/w/index.php?title=Belk&amp;action=edit&amp;section=12"
                          title="Edit section: References"><span>edit</span></a><span
                          class="mw-editsection-bracket">]</span></span>
                    </div>
                    <span class="mw-empty-elt" about="#mwt135" typeof="mw:Transclusion" id="mwAUQ"
                      data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;Reflist&quot;,&quot;href&quot;:&quot;./Template:Reflist&quot;},&quot;params&quot;:{},&quot;i&quot;:0}}]}">
                    </span>
                    <div about="#mwt135" id="mwAUU">
                      <div class="mw-references-wrap mw-references-columns" typeof="mw:Extension/references"
                        about="#mwt137" id="mwAUY"
                        data-mw="{&quot;name&quot;:&quot;references&quot;,&quot;attrs&quot;:{&quot;group&quot;:&quot;&quot;,&quot;responsive&quot;:&quot;1&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;}}">
                        <ol class="mw-references references" id="mwAUc">
                          <li about="#cite_note-autogenerated2-1" id="cite_note-autogenerated2-1"
                            data-mw-footnote-number="1"><span rel="mw:referencedBy" class="mw-cite-backlink"
                              id="mwAUg"><a href="#cite_ref-autogenerated2_1-0" id="mwAUk"><span
                                  class="cite-accessibility-label">Jump up to: </span><span class="mw-linkback-text"
                                  id="mwAUo">1</span></a> <a href="#cite_ref-autogenerated2_1-1" id="mwAUs"><span
                                  class="mw-linkback-text" id="mwAUw">2</span></a></span> <span
                              id="mw-reference-text-cite_note-autogenerated2-1"
                              class="mw-reference-text reference-text">
                              <cite class="citation web cs1" id="mwAU4"><a rel="mw:ExtLink nofollow"
                                  href="https://web.archive.org/web/20230321013239/https://www.belk.com/customer-service/store-directory/"
                                  class="external text" id="mwAU8">"Store Directory"</a>. belk. Archived from <a
                                  rel="mw:ExtLink nofollow"
                                  href="https://www.belk.com/customer-service/store-directory/" class="external text"
                                  id="mwAVA">the original</a> on March 21, 2023<span class="reference-accessdate"
                                  id="mwAVE">. Retrieved <span class="nowrap" id="mwAVI">August 18,</span>
                                  2020</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Store+Directory&amp;rft.pub=belk&amp;rft_id=https%3A%2F%2Fwww.belk.com%2Fcustomer-service%2Fstore-directory%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" id="mwAVM"></span>
                            </span></li>
                          <li about="#cite_note-2" id="cite_note-2" data-mw-footnote-number="2"><span
                              class="mw-cite-backlink" id="mwAVQ"><a href="#cite_ref-2" rel="mw:referencedBy" id="mwAVU"
                                aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAVY">↑</span></a></span> <span id="mw-reference-text-cite_note-2"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt16" typeof="mw:Extension/templatestyles" id="mwAVc"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;}}">
                              <cite class="citation web cs1" id="mwAVg"><a rel="mw:ExtLink nofollow"
                                  href="https://web.archive.org/web/20100919193413/http://www.manta.com/c/mm7xcrr/belk-inc"
                                  class="external text" id="mwAVk">"Belk Inc (Belk, Inc) - Charlotte, North Carolina
                                  (NC) | Company Profile"</a>. Archived from <a rel="mw:ExtLink nofollow"
                                  href="http://www.manta.com/c/mm7xcrr/belk-inc" class="external text" id="mwAVo">the
                                  original</a> on September 19, 2010.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Belk+Inc+%28Belk%2C+Inc%29+-+Charlotte%2C+North+Carolina+%28NC%29+%7C+Company+Profile&amp;rft_id=http%3A%2F%2Fwww.manta.com%2Fc%2Fmm7xcrr%2Fbelk-inc&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" id="mwAVs"></span>
                            </span></li>
                          <li about="#cite_note-3" id="cite_note-3" data-mw-footnote-number="3"><span
                              class="mw-cite-backlink" id="mwAVw"><a href="#cite_ref-3" rel="mw:referencedBy" id="mwAV0"
                                aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAV4">↑</span></a></span> <span id="mw-reference-text-cite_note-3"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt20" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAV8"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web &quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;title&quot;:{&quot;wt&quot;:&quot;Belk's Rooted in Monroe&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.ncdcr.gov/blog/2014/05/29/belks-rooted-in-monroe&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;This Day in North Carolina History&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;May 29, 2016&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;N.C. Department of Natural &amp; Cultural Resources&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;29 May 2019&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation web cs1" about="#mwt20" id="mwAWA"><a rel="mw:ExtLink nofollow"
                                  href="https://www.ncdcr.gov/blog/2014/05/29/belks-rooted-in-monroe"
                                  class="external text" id="mwAWE">"Belk's Rooted in Monroe"</a>. <i id="mwAWI">This Day
                                  in North Carolina History</i>. N.C. Department of Natural &amp; Cultural Resources.
                                May 29, 2016<span class="reference-accessdate" id="mwAWM">. Retrieved <span
                                    class="nowrap" id="mwAWQ">May 29,</span> 2019</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=This+Day+in+North+Carolina+History&amp;rft.atitle=Belk%27s+Rooted+in+Monroe&amp;rft.date=2016-05-29&amp;rft_id=https%3A%2F%2Fwww.ncdcr.gov%2Fblog%2F2014%2F05%2F29%2Fbelks-rooted-in-monroe&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt20" id="mwAWU"></span>
                            </span></li>
                          <li about="#cite_note-Womick-4" id="cite_note-Womick-4" data-mw-footnote-number="4"><span
                              rel="mw:referencedBy" class="mw-cite-backlink" id="mwAWY"><a href="#cite_ref-Womick_4-0"
                                id="mwAWc"><span class="cite-accessibility-label">Jump up to: </span><span
                                  class="mw-linkback-text" id="mwAWg">1</span></a> <a href="#cite_ref-Womick_4-1"
                                id="mwAWk"><span class="mw-linkback-text" id="mwAWo">2</span></a></span> <span
                              id="mw-reference-text-cite_note-Womick-4" class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt23" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAWs"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite news&quot;,&quot;href&quot;:&quot;./Template:Cite_news&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Womick&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Chip&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Main Street Merchant&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;http://www.ourstate.com/belks-history/&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;March 29, 2015&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;Our State&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;December 2010&quot;},&quot;archive-url&quot;:{&quot;wt&quot;:&quot;https://web.archive.org/web/20150402153828/http://www.ourstate.com/belks-history/&quot;},&quot;archive-date&quot;:{&quot;wt&quot;:&quot;April 2, 2015&quot;},&quot;url-status&quot;:{&quot;wt&quot;:&quot;dead&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFWomick2010" class="citation news cs1" about="#mwt23">Womick, Chip
                                (December 2010). <a rel="mw:ExtLink nofollow"
                                  href="https://web.archive.org/web/20150402153828/http://www.ourstate.com/belks-history/"
                                  class="external text" id="mwAWw">"Main Street Merchant"</a>. Our State. Archived from
                                <a rel="mw:ExtLink nofollow" href="http://www.ourstate.com/belks-history/"
                                  class="external text" id="mwAW0">the original</a> on April 2, 2015<span
                                  class="reference-accessdate" id="mwAW4">. Retrieved <span class="nowrap"
                                    id="mwAW8">March 29,</span> 2015</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Main+Street+Merchant&amp;rft.date=2010-12&amp;rft.aulast=Womick&amp;rft.aufirst=Chip&amp;rft_id=http%3A%2F%2Fwww.ourstate.com%2Fbelks-history%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt23" id="mwAXA"></span>
                            </span></li>
                          <li about="#cite_note-autogenerated1-5" id="cite_note-autogenerated1-5"
                            data-mw-footnote-number="5"><span class="mw-cite-backlink" id="mwAXE"><a
                                href="#cite_ref-autogenerated1_5-0" rel="mw:referencedBy" id="mwAXI"
                                aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAXM">↑</span></a></span> <span id="mw-reference-text-cite_note-autogenerated1-5"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt27" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAXQ"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web&quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.belk.com/customer-service/about-us/&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;History&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;Belk.com&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;January 1, 1970&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;October 27, 2016&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation web cs1" about="#mwt27" id="mwAXU"><a rel="mw:ExtLink nofollow"
                                  href="https://www.belk.com/customer-service/about-us/" class="external text"
                                  id="mwAXY">"History"</a>. <i id="mwAXc">Belk.com</i>. January 1, 1970<span
                                  class="reference-accessdate" id="mwAXg">. Retrieved <span class="nowrap"
                                    id="mwAXk">October 27,</span> 2016</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Belk.com&amp;rft.atitle=History&amp;rft.date=1970-01-01&amp;rft_id=https%3A%2F%2Fwww.belk.com%2Fcustomer-service%2Fabout-us%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt27" id="mwAXo"></span>
                            </span></li>
                          <li about="#cite_note-6" id="cite_note-6" data-mw-footnote-number="6"><span
                              class="mw-cite-backlink" id="mwAXs"><a href="#cite_ref-6" rel="mw:referencedBy" id="mwAXw"
                                aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAX0">↑</span></a></span> <span id="mw-reference-text-cite_note-6"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt30" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAX4"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite news&quot;,&quot;href&quot;:&quot;./Template:Cite_news&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Bull&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Becky&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk making small moves to fight foes&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;http://www.bizjournals.com/charlotte/stories/1996/10/07/story2.html?page=all&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;March 29, 2015&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;Charlotte Business Journal&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;October 7, 1996&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFBull1996" class="citation news cs1" about="#mwt30">Bull, Becky (October
                                7, 1996). <a rel="mw:ExtLink nofollow"
                                  href="http://www.bizjournals.com/charlotte/stories/1996/10/07/story2.html?page=all"
                                  class="external text" id="mwAX8">"Belk making small moves to fight foes"</a>.
                                Charlotte Business Journal<span class="reference-accessdate" id="mwAYA">. Retrieved
                                  <span class="nowrap" id="mwAYE">March 29,</span> 2015</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Belk+making+small+moves+to+fight+foes&amp;rft.date=1996-10-07&amp;rft.aulast=Bull&amp;rft.aufirst=Becky&amp;rft_id=http%3A%2F%2Fwww.bizjournals.com%2Fcharlotte%2Fstories%2F1996%2F10%2F07%2Fstory2.html%3Fpage%3Dall&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt30" id="mwAYI"></span>
                            </span></li>
                          <li about="#cite_note-7" id="cite_note-7" data-mw-footnote-number="7"><span
                              class="mw-cite-backlink" id="mwAYM"><a href="#cite_ref-7" rel="mw:referencedBy" id="mwAYQ"
                                aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAYU">↑</span></a></span> <span id="mw-reference-text-cite_note-7"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt33" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAYY"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite news&quot;,&quot;href&quot;:&quot;./Template:Cite_news&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Mildenberg&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;David&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Hudson role appears vital to Belk future&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;http://www.bizjournals.com/triangle/stories/1998/01/12/story3.html?page=all&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;March 29, 2015&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;Triangle Business Journal&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;January 12, 1998&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFMildenberg1998" class="citation news cs1" about="#mwt33">Mildenberg,
                                David (January 12, 1998). <a rel="mw:ExtLink nofollow"
                                  href="http://www.bizjournals.com/triangle/stories/1998/01/12/story3.html?page=all"
                                  class="external text" id="mwAYc">"Hudson role appears vital to Belk future"</a>.
                                Triangle Business Journal<span class="reference-accessdate" id="mwAYg">. Retrieved <span
                                    class="nowrap" id="mwAYk">March 29,</span> 2015</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Hudson+role+appears+vital+to+Belk+future&amp;rft.date=1998-01-12&amp;rft.aulast=Mildenberg&amp;rft.aufirst=David&amp;rft_id=http%3A%2F%2Fwww.bizjournals.com%2Ftriangle%2Fstories%2F1998%2F01%2F12%2Fstory3.html%3Fpage%3Dall&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt33" id="mwAYo"></span>
                            </span></li>
                          <li about="#cite_note-8" id="cite_note-8" data-mw-footnote-number="8"><span
                              class="mw-cite-backlink" id="mwAYs"><a href="#cite_ref-8" rel="mw:referencedBy" id="mwAYw"
                                aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAY0">↑</span></a></span> <span id="mw-reference-text-cite_note-8"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt36" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAY4"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web &quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;url&quot;:{&quot;wt&quot;:&quot;http://www.timesnews.net/article.dna?_StoryID=3608580&quot;},&quot;archive-url&quot;:{&quot;wt&quot;:&quot;https://web.archive.org/web/20160303233311/http://www.timesnews.net/article.dna?_StoryID=3608580&quot;},&quot;url-status&quot;:{&quot;wt&quot;:&quot;dead&quot;},&quot;archive-date&quot;:{&quot;wt&quot;:&quot;2016-03-03&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Kingsport Times-News&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation web cs1" about="#mwt36" id="mwAY8"><a rel="mw:ExtLink nofollow"
                                  href="https://web.archive.org/web/20160303233311/http://www.timesnews.net/article.dna?_StoryID=3608580"
                                  class="external text" id="mwAZA">"Kingsport Times-News"</a>. Archived from <a
                                  rel="mw:ExtLink nofollow" href="http://www.timesnews.net/article.dna?_StoryID=3608580"
                                  class="external text" id="mwAZE">the original</a> on March 3, 2016.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Kingsport+Times-News&amp;rft_id=http%3A%2F%2Fwww.timesnews.net%2Farticle.dna%3F_StoryID%3D3608580&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt36" id="mwAZI"></span>
                            </span></li>
                          <li about="#cite_note-9" id="cite_note-9" data-mw-footnote-number="9"><span
                              class="mw-cite-backlink" id="mwAZM"><a href="#cite_ref-9" rel="mw:referencedBy" id="mwAZQ"
                                aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAZU">↑</span></a></span> <span id="mw-reference-text-cite_note-9"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt39" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAZY"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite news &quot;,&quot;href&quot;:&quot;./Template:Cite_news&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Davis&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Lisa&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;What's in store for Belk&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;http://www.businessnc.com/articles/2008-11/what-s-in-store-for-belk-category/&quot;},&quot;issue&quot;:{&quot;wt&quot;:&quot;November 2008&quot;},&quot;url-status&quot;:{&quot;wt&quot;:&quot;dead&quot;},&quot;archive-url&quot;:{&quot;wt&quot;:&quot;https://web.archive.org/web/20150103104125/http://www.businessnc.com/articles/2008-11/what-s-in-store-for-belk-category&quot;},&quot;archive-date&quot;:{&quot;wt&quot;:&quot;January 3, 2015&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFDavis" class="citation news cs1" about="#mwt39">Davis, Lisa. <a
                                  rel="mw:ExtLink nofollow"
                                  href="https://web.archive.org/web/20150103104125/http://www.businessnc.com/articles/2008-11/what-s-in-store-for-belk-category"
                                  class="external text" id="mwAZc">"What's in store for Belk"</a>. No.<span
                                  typeof="mw:Entity" id="mwAZg">&nbsp;</span>November 2008. Archived from <a
                                  rel="mw:ExtLink nofollow"
                                  href="http://www.businessnc.com/articles/2008-11/what-s-in-store-for-belk-category/"
                                  class="external text" id="mwAZk">the original</a> on January 3, 2015.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=What%27s+in+store+for+Belk&amp;rft.issue=November+2008&amp;rft.aulast=Davis&amp;rft.aufirst=Lisa&amp;rft_id=http%3A%2F%2Fwww.businessnc.com%2Farticles%2F2008-11%2Fwhat-s-in-store-for-belk-category%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt39" id="mwAZo"></span>
                            </span></li>
                          <li about="#cite_note-cbj-2005nov21-10" id="cite_note-cbj-2005nov21-10"
                            data-mw-footnote-number="10"><span class="mw-cite-backlink" id="mwAZs"><a
                                href="#cite_ref-cbj-2005nov21_10-0" rel="mw:referencedBy" id="mwAZw"
                                aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAZ0">↑</span></a></span> <span id="mw-reference-text-cite_note-cbj-2005nov21-10"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt42" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAZ4"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite news &quot;,&quot;href&quot;:&quot;./Template:Cite_news&quot;},&quot;params&quot;:{&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.bizjournals.com/charlotte/stories/2005/11/21/daily9.html&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk to sell credit-card business to GE&quot;},&quot;work&quot;:{&quot;wt&quot;:&quot;[[Charlotte Business Journal]]&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;November 21, 2005&quot;},&quot;last&quot;:{&quot;wt&quot;:&quot;&lt;!--Staff writer(s); no by-line.--&gt;&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation news cs1" about="#mwt42" id="mwAZ8"><a rel="mw:ExtLink nofollow"
                                  href="https://www.bizjournals.com/charlotte/stories/2005/11/21/daily9.html"
                                  class="external text" id="mwAaA">"Belk to sell credit-card business to GE"</a>. <i
                                  id="mwAaE"><a rel="mw:WikiLink"
                                    href="https://en.wikipedia.org/wiki/Charlotte_Business_Journal"
                                    title="Charlotte Business Journal" class="mw-redirect" id="mwAaI">Charlotte Business
                                    Journal</a></i>. November 21, 2005.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Charlotte+Business+Journal&amp;rft.atitle=Belk+to+sell+credit-card+business+to+GE&amp;rft.date=2005-11-21&amp;rft_id=https%3A%2F%2Fwww.bizjournals.com%2Fcharlotte%2Fstories%2F2005%2F11%2F21%2Fdaily9.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt42" id="mwAaM"></span>
                            </span></li>
                          <li about="#cite_note-Belk1-11" id="cite_note-Belk1-11" data-mw-footnote-number="11"><span
                              class="mw-cite-backlink" id="mwAaQ"><a href="#cite_ref-Belk1_11-0" rel="mw:referencedBy"
                                id="mwAaU" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAaY">↑</span></a></span> <span id="mw-reference-text-cite_note-Belk1-11"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt45" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAac"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web&quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.belk.com/stores/?showForm=true&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;View All Stores&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;Belk.com&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;January 1, 1970&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;October 27, 2016&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation web cs1" about="#mwt45" id="mwAag"><a rel="mw:ExtLink nofollow"
                                  href="https://www.belk.com/stores/?showForm=true" class="external text"
                                  id="mwAak">"View All Stores"</a>. <i id="mwAao">Belk.com</i>. January 1, 1970<span
                                  class="reference-accessdate" id="mwAas">. Retrieved <span class="nowrap"
                                    id="mwAaw">October 27,</span> 2016</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Belk.com&amp;rft.atitle=View+All+Stores&amp;rft.date=1970-01-01&amp;rft_id=https%3A%2F%2Fwww.belk.com%2Fstores%2F%3FshowForm%3Dtrue&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt45" id="mwAa0"></span>
                            </span></li>
                          <li about="#cite_note-12" id="cite_note-12" data-mw-footnote-number="12"><span
                              class="mw-cite-backlink" id="mwAa4"><a href="#cite_ref-12" rel="mw:referencedBy"
                                id="mwAa8" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAbA">↑</span></a></span> <span id="mw-reference-text-cite_note-12"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt48" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAbE"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite news&quot;,&quot;href&quot;:&quot;./Template:Cite_news&quot;},&quot;params&quot;:{&quot;url&quot;:{&quot;wt&quot;:&quot;http://www.charlotteobserver.com/2010/10/03/1736520/nc-based-belk-department-stores.html&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;NC-based Belk department stores get new logo&quot;},&quot;work&quot;:{&quot;wt&quot;:&quot;[[The Charlotte Observer]]&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;October 3, 2010&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;October 15, 2010&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation news cs1" about="#mwt48" id="mwAbI"><a rel="mw:ExtLink nofollow"
                                  href="http://www.charlotteobserver.com/2010/10/03/1736520/nc-based-belk-department-stores.html"
                                  class="external text" id="mwAbM">"NC-based Belk department stores get new logo"</a>.
                                <i id="mwAbQ"><a rel="mw:WikiLink"
                                    href="https://en.wikipedia.org/wiki/The_Charlotte_Observer"
                                    title="The Charlotte Observer" id="mwAbU">The Charlotte Observer</a></i>. October 3,
                                2010<span class="reference-accessdate" id="mwAbY">. Retrieved <span class="nowrap"
                                    id="mwAbc">October 15,</span> 2010</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+Charlotte+Observer&amp;rft.atitle=NC-based+Belk+department+stores+get+new+logo&amp;rft.date=2010-10-03&amp;rft_id=http%3A%2F%2Fwww.charlotteobserver.com%2F2010%2F10%2F03%2F1736520%2Fnc-based-belk-department-stores.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt48" id="mwAbg"></span>
                              <link rel="mw:PageProp/Category" href="./Category:All_articles_with_dead_external_links"
                                about="#mwt50" typeof="mw:Transclusion" id="mwAbk"
                                data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;Dead link&quot;,&quot;href&quot;:&quot;./Template:Dead_link&quot;},&quot;params&quot;:{&quot;date&quot;:{&quot;wt&quot;:&quot;October 2010&quot;},&quot;bot&quot;:{&quot;wt&quot;:&quot;H3llBot&quot;}},&quot;i&quot;:0}}]}">
                              <link rel="mw:PageProp/Category"
                                href="./Category:Articles_with_dead_external_links_from_October_2010" about="#mwt50"
                                id="mwAbo"><sup class="noprint Inline-Template" about="#mwt50" id="mwAbs"><span
                                  style="white-space: nowrap;" id="mwAbw"><span typeof="mw:Entity" id="mwAb0">[</span><i
                                    id="mwAb4"><a rel="mw:WikiLink"
                                      href="https://en.wikipedia.org/wiki/Wikipedia:Link_rot" title="Wikipedia:Link rot"
                                      id="mwAb8"><span title="&nbsp;Dead link tagged October 2010" id="mwAcA">dead
                                        link</span></a></i><span typeof="mw:Entity" id="mwAcE">]</span></span></sup>
                            </span></li>
                          <li about="#cite_note-13" id="cite_note-13" data-mw-footnote-number="13"><span
                              class="mw-cite-backlink" id="mwAcI"><a href="#cite_ref-13" rel="mw:referencedBy"
                                id="mwAcM" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAcQ">↑</span></a></span> <span id="mw-reference-text-cite_note-13"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt52" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAcU"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite news&quot;,&quot;href&quot;:&quot;./Template:Cite_news&quot;},&quot;params&quot;:{&quot;url&quot;:{&quot;wt&quot;:&quot;http://www.charlotteobserver.com/2010/10/12/1757292/belk-unveils-new-logo-at-southpark.html&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk unveils its new logo at SouthPark&quot;},&quot;last&quot;:{&quot;wt&quot;:&quot;Valle&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Kirsten&quot;},&quot;work&quot;:{&quot;wt&quot;:&quot;[[The Charlotte Observer]]&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;October 12, 2010&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;October 13, 2010&quot;},&quot;url-status&quot;:{&quot;wt&quot;:&quot;dead&quot;},&quot;archive-url&quot;:{&quot;wt&quot;:&quot;https://web.archive.org/web/20110708140754/http://www.charlotteobserver.com/2010/10/12/1757292/belk-unveils-new-logo-at-southpark.html&quot;},&quot;archive-date&quot;:{&quot;wt&quot;:&quot;July 8, 2011&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFValle2010" class="citation news cs1" about="#mwt52">Valle, Kirsten
                                (October 12, 2010). <a rel="mw:ExtLink nofollow"
                                  href="https://web.archive.org/web/20110708140754/http://www.charlotteobserver.com/2010/10/12/1757292/belk-unveils-new-logo-at-southpark.html"
                                  class="external text" id="mwAcY">"Belk unveils its new logo at SouthPark"</a>. <i
                                  id="mwAcc"><a rel="mw:WikiLink"
                                    href="https://en.wikipedia.org/wiki/The_Charlotte_Observer"
                                    title="The Charlotte Observer" id="mwAcg">The Charlotte Observer</a></i>. Archived
                                from <a rel="mw:ExtLink nofollow"
                                  href="http://www.charlotteobserver.com/2010/10/12/1757292/belk-unveils-new-logo-at-southpark.html"
                                  class="external text" id="mwAck">the original</a> on July 8, 2011<span
                                  class="reference-accessdate" id="mwAco">. Retrieved <span class="nowrap"
                                    id="mwAcs">October 13,</span> 2010</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+Charlotte+Observer&amp;rft.atitle=Belk+unveils+its+new+logo+at+SouthPark&amp;rft.date=2010-10-12&amp;rft.aulast=Valle&amp;rft.aufirst=Kirsten&amp;rft_id=http%3A%2F%2Fwww.charlotteobserver.com%2F2010%2F10%2F12%2F1757292%2Fbelk-unveils-new-logo-at-southpark.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt52" id="mwAcw"></span>
                            </span></li>
                          <li about="#cite_note-14" id="cite_note-14" data-mw-footnote-number="14"><span
                              class="mw-cite-backlink" id="mwAc0"><a href="#cite_ref-14" rel="mw:referencedBy"
                                id="mwAc4" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAc8">↑</span></a></span> <span id="mw-reference-text-cite_note-14"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt56" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAdA"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web&quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Belk, Inc.&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Form 10-K Annual Report, Fiscal Year 2014&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.sec.gov/Archives/edgar/data/1051771/000119312514143944/d683930d10k.htm&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;US Securities and Exchange Commission&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;Sec.gov&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;March 29, 2015&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFBelk,_Inc." class="citation web cs1" about="#mwt56">Belk, Inc. <a
                                  rel="mw:ExtLink nofollow"
                                  href="https://www.sec.gov/Archives/edgar/data/1051771/000119312514143944/d683930d10k.htm"
                                  class="external text" id="mwAdE">"Form 10-K Annual Report, Fiscal Year 2014"</a>. <i
                                  id="mwAdI">Sec.gov</i>. US Securities and Exchange Commission<span
                                  class="reference-accessdate" id="mwAdM">. Retrieved <span class="nowrap"
                                    id="mwAdQ">March 29,</span> 2015</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Sec.gov&amp;rft.atitle=Form+10-K+Annual+Report%2C+Fiscal+Year+2014&amp;rft.au=Belk%2C+Inc.&amp;rft_id=https%3A%2F%2Fwww.sec.gov%2FArchives%2Fedgar%2Fdata%2F1051771%2F000119312514143944%2Fd683930d10k.htm&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt56" id="mwAdU"></span>
                            </span></li>
                          <li about="#cite_note-15" id="cite_note-15" data-mw-footnote-number="15"><span
                              class="mw-cite-backlink" id="mwAdY"><a href="#cite_ref-15" rel="mw:referencedBy"
                                id="mwAdc" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAdg">↑</span></a></span> <span id="mw-reference-text-cite_note-15"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt59" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAdk"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite news&quot;,&quot;href&quot;:&quot;./Template:Cite_news&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Peralta&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Katherine&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk exploring possibility of selling company&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;http://www.charlotteobserver.com/news/business/article17214833.html&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;April 3, 2015&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;Charlotte Observer&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;April 2, 2015&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFPeralta2015" class="citation news cs1" about="#mwt59">Peralta, Katherine
                                (April 2, 2015). <a rel="mw:ExtLink nofollow"
                                  href="http://www.charlotteobserver.com/news/business/article17214833.html"
                                  class="external text" id="mwAdo">"Belk exploring possibility of selling company"</a>.
                                Charlotte Observer<span class="reference-accessdate" id="mwAds">. Retrieved <span
                                    class="nowrap" id="mwAdw">April 3,</span> 2015</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Belk+exploring+possibility+of+selling+company&amp;rft.date=2015-04-02&amp;rft.aulast=Peralta&amp;rft.aufirst=Katherine&amp;rft_id=http%3A%2F%2Fwww.charlotteobserver.com%2Fnews%2Fbusiness%2Farticle17214833.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt59" id="mwAd0"></span>
                            </span></li>
                          <li about="#cite_note-16" id="cite_note-16" data-mw-footnote-number="16"><span
                              class="mw-cite-backlink" id="mwAd4"><a href="#cite_ref-16" rel="mw:referencedBy"
                                id="mwAd8" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAeA">↑</span></a></span> <span id="mw-reference-text-cite_note-16"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt62" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAeE"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite press release&quot;,&quot;href&quot;:&quot;./Template:Cite_press_release&quot;},&quot;params&quot;:{&quot;title&quot;:{&quot;wt&quot;:&quot;Sycamore Partners Completes Acquisition Of Belk, Inc.&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;http://www.prnewswire.com/news-releases/sycamore-partners-completes-acquisition-of-belk-inc-300191462.html&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;Prnewswire.com&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;December 11, 2015&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation pressrelease cs1" about="#mwt62" id="mwAeI"><a
                                  rel="mw:ExtLink nofollow"
                                  href="http://www.prnewswire.com/news-releases/sycamore-partners-completes-acquisition-of-belk-inc-300191462.html"
                                  class="external text" id="mwAeM">"Sycamore Partners Completes Acquisition Of Belk,
                                  Inc"</a>. <i id="mwAeQ">Prnewswire.com</i> (Press release)<span
                                  class="reference-accessdate" id="mwAeU">. Retrieved <span class="nowrap"
                                    id="mwAeY">December 11,</span> 2015</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Sycamore+Partners+Completes+Acquisition+Of+Belk%2C+Inc.&amp;rft_id=http%3A%2F%2Fwww.prnewswire.com%2Fnews-releases%2Fsycamore-partners-completes-acquisition-of-belk-inc-300191462.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt62" id="mwAec"></span>
                            </span></li>
                          <li about="#cite_note-17" id="cite_note-17" data-mw-footnote-number="17"><span
                              class="mw-cite-backlink" id="mwAeg"><a href="#cite_ref-17" rel="mw:referencedBy"
                                id="mwAek" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAeo">↑</span></a></span> <span id="mw-reference-text-cite_note-17"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt65" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAes"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web&quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;url&quot;:{&quot;wt&quot;:&quot;http://footwearnews.com/2016/business/retail/tim-belk-retire-step-down-ceo-belk-lisa-harper-hot-topic-236060/&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Tim Belk To Step Down As Belk CEO, Hot Topic's Lisa Harper To Step In&quot;},&quot;last&quot;:{&quot;wt&quot;:&quot;Butler-Young&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Sheena&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;June 29, 2016&quot;},&quot;language&quot;:{&quot;wt&quot;:&quot;en-US&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;Footwearnews.com&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;July 26, 2016&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFButler-Young2016" class="citation web cs1" about="#mwt65">Butler-Young,
                                Sheena (June 29, 2016). <a rel="mw:ExtLink nofollow"
                                  href="http://footwearnews.com/2016/business/retail/tim-belk-retire-step-down-ceo-belk-lisa-harper-hot-topic-236060/"
                                  class="external text" id="mwAew">"Tim Belk To Step Down As Belk CEO, Hot Topic's Lisa
                                  Harper To Step In"</a>. <i id="mwAe0">Footwearnews.com</i><span
                                  class="reference-accessdate" id="mwAe4">. Retrieved <span class="nowrap"
                                    id="mwAe8">July 26,</span> 2016</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Footwearnews.com&amp;rft.atitle=Tim+Belk+To+Step+Down+As+Belk+CEO%2C+Hot+Topic%27s+Lisa+Harper+To+Step+In&amp;rft.date=2016-06-29&amp;rft.aulast=Butler-Young&amp;rft.aufirst=Sheena&amp;rft_id=http%3A%2F%2Ffootwearnews.com%2F2016%2Fbusiness%2Fretail%2Ftim-belk-retire-step-down-ceo-belk-lisa-harper-hot-topic-236060%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt65" id="mwAfA"></span>
                            </span></li>
                          <li about="#cite_note-18" id="cite_note-18" data-mw-footnote-number="18"><span
                              class="mw-cite-backlink" id="mwAfE"><a href="#cite_ref-18" rel="mw:referencedBy"
                                id="mwAfI" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAfM">↑</span></a></span> <span id="mw-reference-text-cite_note-18"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt68" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAfQ"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web&quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Fickenscher&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Lisa&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.marketwatch.com/story/private-equity-firm-sycamore-poised-to-buy-jcpenney-merge-it-with-belks-2020-07-27&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Private-equity firm Sycamore poised to buy J.C. Penney, merge it with North Carolina chain Belks; Penney brand likely to vanish&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;MarketWatch&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;2020-07-28&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;2020-08-18&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFFickenscher2020" class="citation web cs1" about="#mwt68">Fickenscher,
                                Lisa (July 28, 2020). <a rel="mw:ExtLink nofollow"
                                  href="https://www.marketwatch.com/story/private-equity-firm-sycamore-poised-to-buy-jcpenney-merge-it-with-belks-2020-07-27"
                                  class="external text" id="mwAfU">"Private-equity firm Sycamore poised to buy J.C.
                                  Penney, merge it with North Carolina chain Belks; Penney brand likely to vanish"</a>.
                                MarketWatch<span class="reference-accessdate" id="mwAfY">. Retrieved <span
                                    class="nowrap" id="mwAfc">August 18,</span> 2020</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Private-equity+firm+Sycamore+poised+to+buy+J.C.+Penney%2C+merge+it+with+North+Carolina+chain+Belks%3B+Penney+brand+likely+to+vanish&amp;rft.pub=MarketWatch&amp;rft.date=2020-07-28&amp;rft.aulast=Fickenscher&amp;rft.aufirst=Lisa&amp;rft_id=https%3A%2F%2Fwww.marketwatch.com%2Fstory%2Fprivate-equity-firm-sycamore-poised-to-buy-jcpenney-merge-it-with-belks-2020-07-27&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt68" id="mwAfg"></span>
                            </span></li>
                          <li about="#cite_note-19" id="cite_note-19" data-mw-footnote-number="19"><span
                              class="mw-cite-backlink" id="mwAfk"><a href="#cite_ref-19" rel="mw:referencedBy"
                                id="mwAfo" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAfs">↑</span></a></span> <span id="mw-reference-text-cite_note-19"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt71" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAfw"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;Cite web &quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Ayers&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Rebecca&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;2020-09-09&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;The New York Times: J.C. Penney to sell retail business to Simon Property Group and Brookfield Property Partners&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.bizjournals.com/dallas/news/2020/09/09/jcpenny-retail-business-simon-property-brookfield.html&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;2020-11-25&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;bizjournals.com&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFAyers2020" class="citation web cs1" about="#mwt71">Ayers, Rebecca
                                (September 9, 2020). <a rel="mw:ExtLink nofollow"
                                  href="https://www.bizjournals.com/dallas/news/2020/09/09/jcpenny-retail-business-simon-property-brookfield.html"
                                  class="external text" id="mwAf0">"The New York Times: J.C. Penney to sell retail
                                  business to Simon Property Group and Brookfield Property Partners"</a>. <i
                                  id="mwAf4">bizjournals.com</i><span class="reference-accessdate" id="mwAf8">.
                                  Retrieved <span class="nowrap" id="mwAgA">November 25,</span> 2020</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=bizjournals.com&amp;rft.atitle=The+New+York+Times%3A+J.C.+Penney+to+sell+retail+business+to+Simon+Property+Group+and+Brookfield+Property+Partners&amp;rft.date=2020-09-09&amp;rft.aulast=Ayers&amp;rft.aufirst=Rebecca&amp;rft_id=https%3A%2F%2Fwww.bizjournals.com%2Fdallas%2Fnews%2F2020%2F09%2F09%2Fjcpenny-retail-business-simon-property-brookfield.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt71" id="mwAgE"></span>
                            </span></li>
                          <li about="#cite_note-20" id="cite_note-20" data-mw-footnote-number="20"><span
                              class="mw-cite-backlink" id="mwAgI"><a href="#cite_ref-20" rel="mw:referencedBy"
                                id="mwAgM" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAgQ">↑</span></a></span> <span id="mw-reference-text-cite_note-20"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt74" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAgU"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web &quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Thomas&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Laura&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk's top lenders, including KKR, looking to avoid taking department store through bankruptcy, WSJ says&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;January 20, 2021&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.cnbc.com/2021/01/20/belks-lenders-look-to-avoid-taking-retailer-through-bankruptcy-wsj.html&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;CNBC&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;22 January 2021&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFThomas2021" class="citation web cs1" about="#mwt74">Thomas, Laura
                                (January 20, 2021). <a rel="mw:ExtLink nofollow"
                                  href="https://www.cnbc.com/2021/01/20/belks-lenders-look-to-avoid-taking-retailer-through-bankruptcy-wsj.html"
                                  class="external text" id="mwAgY">"Belk's top lenders, including KKR, looking to avoid
                                  taking department store through bankruptcy, WSJ says"</a>. CNBC<span
                                  class="reference-accessdate" id="mwAgc">. Retrieved <span class="nowrap"
                                    id="mwAgg">January 22,</span> 2021</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Belk%27s+top+lenders%2C+including+KKR%2C+looking+to+avoid+taking+department+store+through+bankruptcy%2C+WSJ+says&amp;rft.pub=CNBC&amp;rft.date=2021-01-20&amp;rft.aulast=Thomas&amp;rft.aufirst=Laura&amp;rft_id=https%3A%2F%2Fwww.cnbc.com%2F2021%2F01%2F20%2Fbelks-lenders-look-to-avoid-taking-retailer-through-bankruptcy-wsj.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt74" id="mwAgk"></span>
                            </span></li>
                          <li about="#cite_note-21" id="cite_note-21" data-mw-footnote-number="21"><span
                              class="mw-cite-backlink" id="mwAgo"><a href="#cite_ref-21" rel="mw:referencedBy"
                                id="mwAgs" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAgw">↑</span></a></span> <span id="mw-reference-text-cite_note-21"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt77" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAg0"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web &quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;last1&quot;:{&quot;wt&quot;:&quot;Weinstein&quot;},&quot;first1&quot;:{&quot;wt&quot;:&quot;Austin&quot;},&quot;last2&quot;:{&quot;wt&quot;:&quot;Muccigrosso&quot;},&quot;first2&quot;:{&quot;wt&quot;:&quot;Catherine&quot;},&quot;name-list-style&quot;:{&quot;wt&quot;:&quot;and&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;January 26, 2021&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk to file bankruptcy. Retailer, hit hard by pandemic and debt, to stay open.&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.wbtv.com/2021/01/26/belk-file-bankruptcy-retailer-hit-hard-by-pandemic-debt-stay-open/&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;27 January 2021&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;[[WBTV]]&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFWeinsteinMuccigrosso2021" class="citation web cs1"
                                about="#mwt77">Weinstein, Austin and Muccigrosso, Catherine (January 26, 2021). <a
                                  rel="mw:ExtLink nofollow"
                                  href="https://www.wbtv.com/2021/01/26/belk-file-bankruptcy-retailer-hit-hard-by-pandemic-debt-stay-open/"
                                  class="external text" id="mwAg4">"Belk to file bankruptcy. Retailer, hit hard by
                                  pandemic and debt, to stay open"</a>. <a rel="mw:WikiLink"
                                  href="https://en.wikipedia.org/wiki/WBTV" title="WBTV" id="mwAg8">WBTV</a><span
                                  class="reference-accessdate" id="mwAhA">. Retrieved <span class="nowrap"
                                    id="mwAhE">January 27,</span> 2021</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Belk+to+file+bankruptcy.+Retailer%2C+hit+hard+by+pandemic+and+debt%2C+to+stay+open.&amp;rft.pub=WBTV&amp;rft.date=2021-01-26&amp;rft.aulast=Weinstein&amp;rft.aufirst=Austin&amp;rft.au=Muccigrosso%2C+Catherine&amp;rft_id=https%3A%2F%2Fwww.wbtv.com%2F2021%2F01%2F26%2Fbelk-file-bankruptcy-retailer-hit-hard-by-pandemic-debt-stay-open%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt77" id="mwAhI"></span>
                            </span></li>
                          <li about="#cite_note-22" id="cite_note-22" data-mw-footnote-number="22"><span
                              class="mw-cite-backlink" id="mwAhM"><a href="#cite_ref-22" rel="mw:referencedBy"
                                id="mwAhQ" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAhU">↑</span></a></span> <span id="mw-reference-text-cite_note-22"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt80" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAhY"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web &quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;title&quot;:{&quot;wt&quot;:&quot;After nearly 190 years, department store chain Belk will file for Chapter 11 bankruptcy&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.usatoday.com/story/money/business/2021/01/26/department-store-chain-belk-filing-chapter-11-bankruptcy/4268653001/&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;[[USA Today]]&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;27 January 2021&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation web cs1" about="#mwt80" id="mwAhc"><a rel="mw:ExtLink nofollow"
                                  href="https://www.usatoday.com/story/money/business/2021/01/26/department-store-chain-belk-filing-chapter-11-bankruptcy/4268653001/"
                                  class="external text" id="mwAhg">"After nearly 190 years, department store chain Belk
                                  will file for Chapter 11 bankruptcy"</a>. <a rel="mw:WikiLink"
                                  href="https://en.wikipedia.org/wiki/USA_Today" title="USA Today" id="mwAhk">USA
                                  Today</a><span class="reference-accessdate" id="mwAho">. Retrieved <span
                                    class="nowrap" id="mwAhs">January 27,</span> 2021</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=After+nearly+190+years%2C+department+store+chain+Belk+will+file+for+Chapter+11+bankruptcy&amp;rft.pub=USA+Today&amp;rft_id=https%3A%2F%2Fwww.usatoday.com%2Fstory%2Fmoney%2Fbusiness%2F2021%2F01%2F26%2Fdepartment-store-chain-belk-filing-chapter-11-bankruptcy%2F4268653001%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt80" id="mwAhw"></span>
                            </span></li>
                          <li about="#cite_note-23" id="cite_note-23" data-mw-footnote-number="23"><span
                              class="mw-cite-backlink" id="mwAh0"><a href="#cite_ref-23" rel="mw:referencedBy"
                                id="mwAh4" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAh8">↑</span></a></span> <span id="mw-reference-text-cite_note-23"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt83" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAiA"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web &quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Weinstein&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Austin&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk files Chapter 11 bankruptcy in Houston, giving the retail icon a lifeline&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.charlotteobserver.com/news/business/article249433360.html&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;The Charlotte Observer&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;23 February 2021&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFWeinstein" class="citation web cs1" about="#mwt83">Weinstein, Austin. <a
                                  rel="mw:ExtLink nofollow"
                                  href="https://www.charlotteobserver.com/news/business/article249433360.html"
                                  class="external text" id="mwAiE">"Belk files Chapter 11 bankruptcy in Houston, giving
                                  the retail icon a lifeline"</a>. The Charlotte Observer<span
                                  class="reference-accessdate" id="mwAiI">. Retrieved <span class="nowrap"
                                    id="mwAiM">February 23,</span> 2021</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Belk+files+Chapter+11+bankruptcy+in+Houston%2C+giving+the+retail+icon+a+lifeline&amp;rft.pub=The+Charlotte+Observer&amp;rft.aulast=Weinstein&amp;rft.aufirst=Austin&amp;rft_id=https%3A%2F%2Fwww.charlotteobserver.com%2Fnews%2Fbusiness%2Farticle249433360.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt83" id="mwAiQ"></span>
                            </span></li>
                          <li about="#cite_note-Belk_Files_for_Chapter_11_Bankruptcy-24"
                            id="cite_note-Belk_Files_for_Chapter_11_Bankruptcy-24" data-mw-footnote-number="24"><span
                              class="mw-cite-backlink" id="mwAiU"><a
                                href="#cite_ref-Belk_Files_for_Chapter_11_Bankruptcy_24-0" rel="mw:referencedBy"
                                id="mwAiY" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAic">↑</span></a></span> <span
                              id="mw-reference-text-cite_note-Belk_Files_for_Chapter_11_Bankruptcy-24"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt86" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAig"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite news &quot;,&quot;href&quot;:&quot;./Template:Cite_news&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Ronalds-Hannon&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Eliza&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Sycamore's Belk Files Bankruptcy to Tame Debt, Raise Cash&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.bloomberg.com/news/articles/2021-02-23/sycamore-s-belk-files-bankruptcy-to-tame-debt-raise-cash&quot;},&quot;newspaper&quot;:{&quot;wt&quot;:&quot;Bloomberg&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;February 23, 2021&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;23 February 2021&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFRonalds-Hannon2021" class="citation news cs1"
                                about="#mwt86">Ronalds-Hannon, Eliza (February 23, 2021). <a rel="mw:ExtLink nofollow"
                                  href="https://www.bloomberg.com/news/articles/2021-02-23/sycamore-s-belk-files-bankruptcy-to-tame-debt-raise-cash"
                                  class="external text" id="mwAik">"Sycamore's Belk Files Bankruptcy to Tame Debt, Raise
                                  Cash"</a>. <i id="mwAio">Bloomberg</i><span class="reference-accessdate" id="mwAis">.
                                  Retrieved <span class="nowrap" id="mwAiw">February 23,</span> 2021</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Bloomberg&amp;rft.atitle=Sycamore%27s+Belk+Files+Bankruptcy+to+Tame+Debt%2C+Raise+Cash&amp;rft.date=2021-02-23&amp;rft.aulast=Ronalds-Hannon&amp;rft.aufirst=Eliza&amp;rft_id=https%3A%2F%2Fwww.bloomberg.com%2Fnews%2Farticles%2F2021-02-23%2Fsycamore-s-belk-files-bankruptcy-to-tame-debt-raise-cash&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt86" id="mwAi0"></span>
                            </span></li>
                          <li about="#cite_note-25" id="cite_note-25" data-mw-footnote-number="25"><span
                              class="mw-cite-backlink" id="mwAi4"><a href="#cite_ref-25" rel="mw:referencedBy"
                                id="mwAi8" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAjA">↑</span></a></span> <span id="mw-reference-text-cite_note-25"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt89" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAjE"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web &quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;title&quot;:{&quot;wt&quot;:&quot;Belk Successfully Completes Pre-Packaged, One-Day Financial Restructuring with Backing of Majority Owner Sycamore Partners and Lenders Including KKR Credit and Blackstone Credit&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://newsroom.belk.com/2021-02-24-Belk-Successfully-Completes-Pre-Packaged-One-Day-Financial-Restructuring-with-Backing-of-Majority-Owner-Sycamore-Partners-and-Lenders-Including-KKR-Credit-and-Blackstone-Credit&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;Belk&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;26 February 2021&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation web cs1" about="#mwt89" id="mwAjI"><a rel="mw:ExtLink nofollow"
                                  href="https://newsroom.belk.com/2021-02-24-Belk-Successfully-Completes-Pre-Packaged-One-Day-Financial-Restructuring-with-Backing-of-Majority-Owner-Sycamore-Partners-and-Lenders-Including-KKR-Credit-and-Blackstone-Credit"
                                  class="external text" id="mwAjM">"Belk Successfully Completes Pre-Packaged, One-Day
                                  Financial Restructuring with Backing of Majority Owner Sycamore Partners and Lenders
                                  Including KKR Credit and Blackstone Credit"</a>. Belk<span
                                  class="reference-accessdate" id="mwAjQ">. Retrieved <span class="nowrap"
                                    id="mwAjU">February 26,</span> 2021</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Belk+Successfully+Completes+Pre-Packaged%2C+One-Day+Financial+Restructuring+with+Backing+of+Majority+Owner+Sycamore+Partners+and+Lenders+Including+KKR+Credit+and+Blackstone+Credit&amp;rft.pub=Belk&amp;rft_id=https%3A%2F%2Fnewsroom.belk.com%2F2021-02-24-Belk-Successfully-Completes-Pre-Packaged-One-Day-Financial-Restructuring-with-Backing-of-Majority-Owner-Sycamore-Partners-and-Lenders-Including-KKR-Credit-and-Blackstone-Credit&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt89" id="mwAjY"></span>
                            </span></li>
                          <li about="#cite_note-26" id="cite_note-26" data-mw-footnote-number="26"><span
                              class="mw-cite-backlink" id="mwAjc"><a href="#cite_ref-26" rel="mw:referencedBy"
                                id="mwAjg" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAjk">↑</span></a></span> <span id="mw-reference-text-cite_note-26"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt92" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAjo"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web &quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;title&quot;:{&quot;wt&quot;:&quot;Belk Successfully Completes Pre-Packaged, One-Day Financial Restructuring with Backing of Majority Owner Sycamore Partners and Lenders Including KKR Credit and Blackstone Credit&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://finance.yahoo.com/news/belk-successfully-completes-pre-packaged-204800587.html&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;Yahoo Finance&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;24 February 2021&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation web cs1" about="#mwt92" id="mwAjs"><a rel="mw:ExtLink nofollow"
                                  href="https://finance.yahoo.com/news/belk-successfully-completes-pre-packaged-204800587.html"
                                  class="external text" id="mwAjw">"Belk Successfully Completes Pre-Packaged, One-Day
                                  Financial Restructuring with Backing of Majority Owner Sycamore Partners and Lenders
                                  Including KKR Credit and Blackstone Credit"</a>. Yahoo Finance<span
                                  class="reference-accessdate" id="mwAj0">. Retrieved <span class="nowrap"
                                    id="mwAj4">February 24,</span> 2021</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Belk+Successfully+Completes+Pre-Packaged%2C+One-Day+Financial+Restructuring+with+Backing+of+Majority+Owner+Sycamore+Partners+and+Lenders+Including+KKR+Credit+and+Blackstone+Credit&amp;rft.pub=Yahoo+Finance&amp;rft_id=https%3A%2F%2Ffinance.yahoo.com%2Fnews%2Fbelk-successfully-completes-pre-packaged-204800587.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt92" id="mwAj8"></span>
                            </span></li>
                          <li about="#cite_note-27" id="cite_note-27" data-mw-footnote-number="27"><span
                              class="mw-cite-backlink" id="mwAkA"><a href="#cite_ref-27" rel="mw:referencedBy"
                                id="mwAkE" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAkI">↑</span></a></span> <span id="mw-reference-text-cite_note-27"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt95" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAkM"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web &quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Weinstein&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Austin&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk bankruptcy plan approved by judge. Iconic retailer gets the lifeline it sought.&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.charlotteobserver.com/news/business/article249433360.html&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;The Charlotte Observer&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;24 February 2021&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="mwAkQ" class="citation web cs1" about="#mwt95"
                                data-x-id="CITEREFWeinstein">Weinstein, Austin. <a rel="mw:ExtLink nofollow"
                                  href="https://www.charlotteobserver.com/news/business/article249433360.html"
                                  class="external text" id="mwAkU">"Belk bankruptcy plan approved by judge. Iconic
                                  retailer gets the lifeline it sought"</a>. The Charlotte Observer<span
                                  class="reference-accessdate" id="mwAkY">. Retrieved <span class="nowrap"
                                    id="mwAkc">February 24,</span> 2021</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Belk+bankruptcy+plan+approved+by+judge.+Iconic+retailer+gets+the+lifeline+it+sought.&amp;rft.pub=The+Charlotte+Observer&amp;rft.aulast=Weinstein&amp;rft.aufirst=Austin&amp;rft_id=https%3A%2F%2Fwww.charlotteobserver.com%2Fnews%2Fbusiness%2Farticle249433360.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt95" id="mwAkg"></span>
                            </span></li>
                          <li about="#cite_note-28" id="cite_note-28" data-mw-footnote-number="28"><span
                              class="mw-cite-backlink" id="mwAkk"><a href="#cite_ref-28" rel="mw:referencedBy"
                                id="mwAko" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAks">↑</span></a></span> <span id="mw-reference-text-cite_note-28"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt98" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAkw"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web &quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Muccigrosso&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Catherine&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk names new CEO months after the iconic department store chain left bankruptcy&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.heraldsun.com/news/state/north-carolina/article252605908.html&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;[[The Herald-Sun (Durham, North Carolina)]]&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;7 July 2021&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFMuccigrosso" class="citation web cs1" about="#mwt98">Muccigrosso,
                                Catherine. <a rel="mw:ExtLink nofollow"
                                  href="https://www.heraldsun.com/news/state/north-carolina/article252605908.html"
                                  class="external text" id="mwAk0">"Belk names new CEO months after the iconic
                                  department store chain left bankruptcy"</a>. <a rel="mw:WikiLink"
                                  href="https://en.wikipedia.org/wiki/The_Herald-Sun_(Durham,_North_Carolina)"
                                  title="The Herald-Sun (Durham, North Carolina)" id="mwAk4">The Herald-Sun (Durham,
                                  North Carolina)</a><span class="reference-accessdate" id="mwAk8">. Retrieved <span
                                    class="nowrap" id="mwAlA">July 7,</span> 2021</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Belk+names+new+CEO+months+after+the+iconic+department+store+chain+left+bankruptcy&amp;rft.pub=The+Herald-Sun+%28Durham%2C+North+Carolina%29&amp;rft.aulast=Muccigrosso&amp;rft.aufirst=Catherine&amp;rft_id=https%3A%2F%2Fwww.heraldsun.com%2Fnews%2Fstate%2Fnorth-carolina%2Farticle252605908.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt98" id="mwAlE"></span>
                            </span></li>
                          <li about="#cite_note-29" id="cite_note-29" data-mw-footnote-number="29"><span
                              class="mw-cite-backlink" id="mwAlI"><a href="#cite_ref-29" rel="mw:referencedBy"
                                id="mwAlM" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAlQ">↑</span></a></span> <span id="mw-reference-text-cite_note-29"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt101" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAlU"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web &quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Marks&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Jennifer&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk bulks up with more stores under its new outlet format&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;Home Textiles Today&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;18 May 2023&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.hometextilestoday.com/retailers/belk-bulks-up-with-more-stores-under-its-new-outlet-format/&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;20 February 2024&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFMarks2023" class="citation web cs1" about="#mwt101">Marks, Jennifer (May
                                18, 2023). <a rel="mw:ExtLink nofollow"
                                  href="https://www.hometextilestoday.com/retailers/belk-bulks-up-with-more-stores-under-its-new-outlet-format/"
                                  class="external text" id="mwAlY">"Belk bulks up with more stores under its new outlet
                                  format"</a>. <i id="mwAlc">Home Textiles Today</i><span class="reference-accessdate"
                                  id="mwAlg">. Retrieved <span class="nowrap" id="mwAlk">February 20,</span>
                                  2024</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Home+Textiles+Today&amp;rft.atitle=Belk+bulks+up+with+more+stores+under+its+new+outlet+format&amp;rft.date=2023-05-18&amp;rft.aulast=Marks&amp;rft.aufirst=Jennifer&amp;rft_id=https%3A%2F%2Fwww.hometextilestoday.com%2Fretailers%2Fbelk-bulks-up-with-more-stores-under-its-new-outlet-format%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt101" id="mwAlo"></span>
                            </span></li>
                          <li about="#cite_note-30" id="cite_note-30" data-mw-footnote-number="30"><span
                              class="mw-cite-backlink" id="mwAls"><a href="#cite_ref-30" rel="mw:referencedBy"
                                id="mwAlw" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAl0">↑</span></a></span> <span id="mw-reference-text-cite_note-30"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt105" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAl4"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web&quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;url&quot;:{&quot;wt&quot;:&quot;http://belkbowl.com/media_center/press_releases/belk_bowl_announces_six_year_extension_of_partnership_with_atlantic_coast_c/&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk Bowl&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;December 5, 2013&quot;},&quot;url-status&quot;:{&quot;wt&quot;:&quot;dead&quot;},&quot;archive-url&quot;:{&quot;wt&quot;:&quot;https://web.archive.org/web/20131218095431/http://belkbowl.com/media_center/press_releases/belk_bowl_announces_six_year_extension_of_partnership_with_atlantic_coast_c/&quot;},&quot;archive-date&quot;:{&quot;wt&quot;:&quot;December 18, 2013&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation web cs1" about="#mwt105" id="mwAl8"><a rel="mw:ExtLink nofollow"
                                  href="https://web.archive.org/web/20131218095431/http://belkbowl.com/media_center/press_releases/belk_bowl_announces_six_year_extension_of_partnership_with_atlantic_coast_c/"
                                  class="external text" id="mwAmA">"Belk Bowl"</a>. Archived from <a
                                  rel="mw:ExtLink nofollow"
                                  href="http://belkbowl.com/media_center/press_releases/belk_bowl_announces_six_year_extension_of_partnership_with_atlantic_coast_c/"
                                  class="external text" id="mwAmE">the original</a> on December 18, 2013<span
                                  class="reference-accessdate" id="mwAmI">. Retrieved <span class="nowrap"
                                    id="mwAmM">December 5,</span> 2013</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Belk+Bowl&amp;rft_id=http%3A%2F%2Fbelkbowl.com%2Fmedia_center%2Fpress_releases%2Fbelk_bowl_announces_six_year_extension_of_partnership_with_atlantic_coast_c%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt105" id="mwAmQ"></span>
                            </span></li>
                          <li about="#cite_note-31" id="cite_note-31" data-mw-footnote-number="31"><span
                              class="mw-cite-backlink" id="mwAmU"><a href="#cite_ref-31" rel="mw:referencedBy"
                                id="mwAmY" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAmc">↑</span></a></span> <span id="mw-reference-text-cite_note-31"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt108" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAmg"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;Cite news &quot;,&quot;href&quot;:&quot;./Template:Cite_news&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Spanberg&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Erik&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;November 20, 2019&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk out as sponsor of college football bowl game in Charlotte&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.bizjournals.com/charlotte/news/2019/11/20/belk-out-as-sponsor-of-college-football-bowl-game.html&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;2019-11-25&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;bizjournals.com&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFSpanberg2019" class="citation news cs1" about="#mwt108">Spanberg, Erik
                                (November 20, 2019). <a rel="mw:ExtLink nofollow"
                                  href="https://www.bizjournals.com/charlotte/news/2019/11/20/belk-out-as-sponsor-of-college-football-bowl-game.html"
                                  class="external text" id="mwAmk">"Belk out as sponsor of college football bowl game in
                                  Charlotte"</a>. <i id="mwAmo">bizjournals.com</i><span class="reference-accessdate"
                                  id="mwAms">. Retrieved <span class="nowrap" id="mwAmw">November 25,</span>
                                  2019</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=bizjournals.com&amp;rft.atitle=Belk+out+as+sponsor+of+college+football+bowl+game+in+Charlotte&amp;rft.date=2019-11-20&amp;rft.aulast=Spanberg&amp;rft.aufirst=Erik&amp;rft_id=https%3A%2F%2Fwww.bizjournals.com%2Fcharlotte%2Fnews%2F2019%2F11%2F20%2Fbelk-out-as-sponsor-of-college-football-bowl-game.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt108" id="mwAm0"></span>
                            </span></li>
                          <li about="#cite_note-32" id="cite_note-32" data-mw-footnote-number="32"><span
                              class="mw-cite-backlink" id="mwAm4"><a href="#cite_ref-32" rel="mw:referencedBy"
                                id="mwAm8" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAnA">↑</span></a></span> <span id="mw-reference-text-cite_note-32"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt111" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAnE"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;Cite web&quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Spanberg&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Erik&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;20 November 2019&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk out as sponsor of college football bowl game in Charlotte&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.bizjournals.com/charlotte/news/2019/11/20/belk-out-as-sponsor-of-college-football-bowl-game.html&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;24 March 2021&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;bizjournals&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="mwAnI" class="citation web cs1" about="#mwt111"
                                data-x-id="CITEREFSpanberg2019">Spanberg, Erik (November 20, 2019). <a
                                  rel="mw:ExtLink nofollow"
                                  href="https://www.bizjournals.com/charlotte/news/2019/11/20/belk-out-as-sponsor-of-college-football-bowl-game.html"
                                  class="external text" id="mwAnM">"Belk out as sponsor of college football bowl game in
                                  Charlotte"</a>. <i id="mwAnQ">bizjournals</i><span class="reference-accessdate"
                                  id="mwAnU">. Retrieved <span class="nowrap" id="mwAnY">March 24,</span>
                                  2021</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=bizjournals&amp;rft.atitle=Belk+out+as+sponsor+of+college+football+bowl+game+in+Charlotte&amp;rft.date=2019-11-20&amp;rft.aulast=Spanberg&amp;rft.aufirst=Erik&amp;rft_id=https%3A%2F%2Fwww.bizjournals.com%2Fcharlotte%2Fnews%2F2019%2F11%2F20%2Fbelk-out-as-sponsor-of-college-football-bowl-game.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt111" id="mwAnc"></span>
                            </span></li>
                          <li about="#cite_note-33" id="cite_note-33" data-mw-footnote-number="33"><span
                              class="mw-cite-backlink" id="mwAng"><a href="#cite_ref-33" rel="mw:referencedBy"
                                id="mwAnk" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAno">↑</span></a></span> <span id="mw-reference-text-cite_note-33"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt114" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAns"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite news&quot;,&quot;href&quot;:&quot;./Template:Cite_news&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Thomas&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Jennifer&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;http://www.bizjournals.com/charlotte/news/2014/04/09/belk-opens-flagship-store-in-dallas-photos.html&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;March 29, 2015&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;Charlotte Business Journal&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;April 9, 2014&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk opens flagship store in Dallas&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFThomas2014" class="citation news cs1" about="#mwt114">Thomas, Jennifer
                                (April 9, 2014). <a rel="mw:ExtLink nofollow"
                                  href="http://www.bizjournals.com/charlotte/news/2014/04/09/belk-opens-flagship-store-in-dallas-photos.html"
                                  class="external text" id="mwAnw">"Belk opens flagship store in Dallas"</a>. Charlotte
                                Business Journal<span class="reference-accessdate" id="mwAn0">. Retrieved <span
                                    class="nowrap" id="mwAn4">March 29,</span> 2015</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Belk+opens+flagship+store+in+Dallas&amp;rft.date=2014-04-09&amp;rft.aulast=Thomas&amp;rft.aufirst=Jennifer&amp;rft_id=http%3A%2F%2Fwww.bizjournals.com%2Fcharlotte%2Fnews%2F2014%2F04%2F09%2Fbelk-opens-flagship-store-in-dallas-photos.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt114" id="mwAn8"></span>
                            </span></li>
                          <li about="#cite_note-34" id="cite_note-34" data-mw-footnote-number="34"><span
                              class="mw-cite-backlink" id="mwAoA"><a href="#cite_ref-34" rel="mw:referencedBy"
                                id="mwAoE" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAoI">↑</span></a></span> <span id="mw-reference-text-cite_note-34"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt117" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAoM"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web&quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.belk.com/customer-service/salons-spas/&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;Belk Salons and Spas&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;April 4, 2015&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Customer Service - Belk.com&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation web cs1" about="#mwt117" id="mwAoQ"><a rel="mw:ExtLink nofollow"
                                  href="https://www.belk.com/customer-service/salons-spas/" class="external text"
                                  id="mwAoU">"Customer Service - Belk.com"</a>. <i id="mwAoY">Belk Salons and
                                  Spas</i><span class="reference-accessdate" id="mwAoc">. Retrieved <span class="nowrap"
                                    id="mwAog">April 4,</span> 2015</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Belk+Salons+and+Spas&amp;rft.atitle=Customer+Service+-+Belk.com&amp;rft_id=https%3A%2F%2Fwww.belk.com%2Fcustomer-service%2Fsalons-spas%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt117" id="mwAok"></span>
                            </span></li>
                          <li about="#cite_note-35" id="cite_note-35" data-mw-footnote-number="35"><span
                              class="mw-cite-backlink" id="mwAoo"><a href="#cite_ref-35" rel="mw:referencedBy"
                                id="mwAos" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAow">↑</span></a></span> <span id="mw-reference-text-cite_note-35"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt120" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAo0"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web&quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Berry&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Lucy&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;http://www.al.com/business/index.ssf/2013/06/store_openings_construction_ne.html#/0&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Store openings, construction, negotiations on summer agenda at Bridge Street Town Centre (photos)&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;AL.com&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;June 29, 2013&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;October 27, 2016&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="CITEREFBerry2013" class="citation web cs1" about="#mwt120">Berry, Lucy (June 29,
                                2013). <a rel="mw:ExtLink nofollow"
                                  href="http://www.al.com/business/index.ssf/2013/06/store_openings_construction_ne.html#/0"
                                  class="external text" id="mwAo4">"Store openings, construction, negotiations on summer
                                  agenda at Bridge Street Town Centre (photos)"</a>. <i id="mwAo8">AL.com</i><span
                                  class="reference-accessdate" id="mwApA">. Retrieved <span class="nowrap"
                                    id="mwApE">October 27,</span> 2016</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=AL.com&amp;rft.atitle=Store+openings%2C+construction%2C+negotiations+on+summer+agenda+at+Bridge+Street+Town+Centre+%28photos%29&amp;rft.date=2013-06-29&amp;rft.aulast=Berry&amp;rft.aufirst=Lucy&amp;rft_id=http%3A%2F%2Fwww.al.com%2Fbusiness%2Findex.ssf%2F2013%2F06%2Fstore_openings_construction_ne.html%23%2F0&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt120" id="mwApI"></span>
                            </span></li>
                          <li about="#cite_note-36" id="cite_note-36" data-mw-footnote-number="36"><span
                              class="mw-cite-backlink" id="mwApM"><a href="#cite_ref-36" rel="mw:referencedBy"
                                id="mwApQ" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwApU">↑</span></a></span> <span id="mw-reference-text-cite_note-36"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt124" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwApY"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite web&quot;,&quot;href&quot;:&quot;./Template:Cite_web&quot;},&quot;params&quot;:{&quot;url&quot;:{&quot;wt&quot;:&quot;http://www.al.com/business/index.ssf/2013/03/belk_plans_makeover_for_riverc.html&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk plans makeover for Riverchase Galleria store, other new investments across the chain&quot;},&quot;website&quot;:{&quot;wt&quot;:&quot;AL.com&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;March 11, 2013&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;October 27, 2016&quot;}},&quot;i&quot;:0}}]}">
                              <cite class="citation web cs1" about="#mwt124" id="mwApc"><a rel="mw:ExtLink nofollow"
                                  href="http://www.al.com/business/index.ssf/2013/03/belk_plans_makeover_for_riverc.html"
                                  class="external text" id="mwApg">"Belk plans makeover for Riverchase Galleria store,
                                  other new investments across the chain"</a>. <i id="mwApk">AL.com</i>. March 11,
                                2013<span class="reference-accessdate" id="mwApo">. Retrieved <span class="nowrap"
                                    id="mwAps">October 27,</span> 2016</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=AL.com&amp;rft.atitle=Belk+plans+makeover+for+Riverchase+Galleria+store%2C+other+new+investments+across+the+chain&amp;rft.date=2013-03-11&amp;rft_id=http%3A%2F%2Fwww.al.com%2Fbusiness%2Findex.ssf%2F2013%2F03%2Fbelk_plans_makeover_for_riverc.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt124" id="mwApw"></span>
                            </span></li>
                          <li about="#cite_note-37" id="cite_note-37" data-mw-footnote-number="37"><span
                              class="mw-cite-backlink" id="mwAp0"><a href="#cite_ref-37" rel="mw:referencedBy"
                                id="mwAp4" aria-label="Jump up" title="Jump up"><span class="mw-linkback-text"
                                  id="mwAp8">↑</span></a></span> <span id="mw-reference-text-cite_note-37"
                              class="mw-reference-text reference-text">
                              <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333433106"
                                about="#mwt131" typeof="mw:Extension/templatestyles mw:Transclusion" id="mwAqA"
                                data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Module:Citation/CS1/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;},&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;cite news&quot;,&quot;href&quot;:&quot;./Template:Cite_news&quot;},&quot;params&quot;:{&quot;last&quot;:{&quot;wt&quot;:&quot;Thomas&quot;},&quot;first&quot;:{&quot;wt&quot;:&quot;Jennifer&quot;},&quot;url&quot;:{&quot;wt&quot;:&quot;https://www.bizjournals.com/charlotte/news/2014/01/24/belk-plans-6-1m-investment-in-columbia-flagship.html&quot;},&quot;access-date&quot;:{&quot;wt&quot;:&quot;June 5, 2020&quot;},&quot;publisher&quot;:{&quot;wt&quot;:&quot;Charlotte Business Journal&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;January 24, 2014&quot;},&quot;title&quot;:{&quot;wt&quot;:&quot;Belk plans $6.1M investment in Columbia flagship store&quot;}},&quot;i&quot;:0}}]}">
                              <cite id="mwAqE" class="citation news cs1" about="#mwt131"
                                data-x-id="CITEREFThomas2014">Thomas, Jennifer (January 24, 2014). <a
                                  rel="mw:ExtLink nofollow"
                                  href="https://www.bizjournals.com/charlotte/news/2014/01/24/belk-plans-6-1m-investment-in-columbia-flagship.html"
                                  class="external text" id="mwAqI">"Belk plans $6.1M investment in Columbia flagship
                                  store"</a>. Charlotte Business Journal<span class="reference-accessdate" id="mwAqM">.
                                  Retrieved <span class="nowrap" id="mwAqQ">June 5,</span> 2020</span>.</cite><span
                                title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Belk+plans+%246.1M+investment+in+Columbia+flagship+store&amp;rft.date=2014-01-24&amp;rft.aulast=Thomas&amp;rft.aufirst=Jennifer&amp;rft_id=https%3A%2F%2Fwww.bizjournals.com%2Fcharlotte%2Fnews%2F2014%2F01%2F24%2Fbelk-plans-6-1m-investment-in-columbia-flagship.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABelk"
                                class="Z3988" about="#mwt131" id="mwAqU"></span>
                            </span></li>
                        </ol>
                      </div>
                    </div>

                  </section>
                  <section data-mw-section-id="13" id="mwAqY" aria-labelledby="External_links">
                    <div class="mw-heading mw-heading2">
                      <h2 id="External_links">External links</h2><span class="mw-editsection"><span
                          class="mw-editsection-bracket">[</span><a
                          href="/w/index.php?title=Belk&amp;action=edit&amp;section=13"
                          title="Edit section: External links"><span>edit</span></a><span
                          class="mw-editsection-bracket">]</span></span>
                    </div>
                    <ul id="mwAqc">
                      <li id="mwAqg"><span class="official-website" about="#mwt138" typeof="mw:Transclusion" id="mwAqk"
                          data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;Official website&quot;,&quot;href&quot;:&quot;./Template:Official_website&quot;},&quot;params&quot;:{&quot;1&quot;:{&quot;wt&quot;:&quot;belk.com&quot;}},&quot;i&quot;:0}}]}"><span
                            class="url"><a rel="mw:ExtLink nofollow" href="http://belk.com"
                              class="external text">Official website</a></span></span>
                        <link rel="mw:PageProp/Category"
                          href="./Category:Official_website_different_in_Wikidata_and_Wikipedia" about="#mwt138"
                          id="mwAqo">
                      </li>
                      <li id="mwAqs"><a rel="mw:ExtLink nofollow" href="https://belkbowl.com/" class="external text"
                          id="mwAqw">Belk Bowl</a> <a rel="mw:ExtLink nofollow"
                          href="https://web.archive.org/web/20200304103954/https://belkbowl.com/" about="#mwt139"
                          typeof="mw:Transclusion" class="external text" id="mwAq0"
                          data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;Webarchive&quot;,&quot;href&quot;:&quot;./Template:Webarchive&quot;},&quot;params&quot;:{&quot;url&quot;:{&quot;wt&quot;:&quot;https://web.archive.org/web/20200304103954/https://belkbowl.com/&quot;},&quot;date&quot;:{&quot;wt&quot;:&quot;March 4, 2020&quot;}},&quot;i&quot;:0}}]}">Archived</a><span
                          about="#mwt139"> March 4, 2020, at the </span><a rel="mw:WikiLink"
                          href="https://en.wikipedia.org/wiki/Wayback_Machine" title="Wayback Machine"
                          about="#mwt139">Wayback Machine</a>
                        <link rel="mw:PageProp/Category" href="./Category:Webarchive_template_wayback_links"
                          about="#mwt139" id="mwAq4">
                      </li>
                      <li id="mwAq8"><a rel="mw:ExtLink nofollow"
                          href="https://findingaids.uncc.edu/repositories/4/resources/93" class="external text"
                          id="mwArA">John M Belk Papers</a><span typeof="mw:DisplaySpace" id="mwArE">&nbsp;</span>: <a
                          rel="mw:ExtLink nofollow" href="https://library.uncc.edu/" class="external text"
                          id="mwArI">UNCC Atkins Library</a></li>
                    </ul>

                    <div class="navbox-styles" about="#mwt140" typeof="mw:Transclusion" id="mwArM"
                      data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;Department stores in the United States&quot;,&quot;href&quot;:&quot;./Template:Department_stores_in_the_United_States&quot;},&quot;params&quot;:{},&quot;i&quot;:0}}]}">
                      <span class="mw-empty-elt">
                        <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1333133064"
                          about="#mwt141" typeof="mw:Extension/templatestyles"
                          data-mw="{&quot;name&quot;:&quot;templatestyles&quot;,&quot;attrs&quot;:{&quot;src&quot;:&quot;Hlist/styles.css&quot;},&quot;body&quot;:{&quot;extsrc&quot;:&quot;&quot;}}">
                      </span>
                    </div>

                    <link rel="mw:PageProp/Category" href="./Category:Belk_family#%20" id="mwArc">
                    <link rel="mw:PageProp/Category" href="./Category:Companies_based_in_Charlotte,_North_Carolina"
                      id="mwArg">
                    <link rel="mw:PageProp/Category" href="./Category:Economy_of_the_Southeastern_United_States"
                      id="mwArk">
                    <link rel="mw:PageProp/Category" href="./Category:Department_stores_of_the_United_States"
                      id="mwAro">
                    <link rel="mw:PageProp/Category" href="./Category:American_companies_established_in_1888"
                      id="mwArs">
                    <link rel="mw:PageProp/Category" href="./Category:Retail_companies_established_in_1888" id="mwArw">
                    <link rel="mw:PageProp/Category" href="./Category:1888_establishments_in_North_Carolina" id="mwAr0">
                    <link rel="mw:PageProp/Category" href="./Category:Privately_held_companies_based_in_North_Carolina"
                      id="mwAr4">
                    <link rel="mw:PageProp/Category" href="./Category:2015_mergers_and_acquisitions" id="mwAr8">
                    <link rel="mw:PageProp/Category"
                      href="./Category:Companies_that_filed_for_Chapter_11_bankruptcy_in_2021" id="mwAsA">
                    <link rel="mw:PageProp/Category" href="./Category:KKR_&amp;_Co._companies" id="mwAsE">
                  </section>


                </div><noscript><img
                    src="https://en.wikipedia.org/wiki/Special:CentralAutoLogin/start?useformat=desktop&amp;type=1x1&amp;usesul3=1"
                    alt="" width="1" height="1" style="border: none; position: absolute;"></noscript>
                <div class="printfooter" data-nosnippet="">Retrieved from "<a dir="ltr"
                    href="https://en.wikipedia.org/w/index.php?title=Belk&amp;oldid=1363881013">https://en.wikipedia.org/w/index.php?title=Belk&amp;oldid=1363881013</a>"
                </div>
              </div>
              <div id="catlinks" class="catlinks" data-mw-interface="">
                <div id="mw-normal-catlinks" class="mw-normal-catlinks"><a href="/wiki/Help:Category"
                    title="Help:Category">Categories</a>: <ul>
                    <li><a href="/wiki/Category:Belk_family" title="Category:Belk family">Belk family</a></li>
                    <li><a href="/wiki/Category:Companies_based_in_Charlotte,_North_Carolina"
                        title="Category:Companies based in Charlotte, North Carolina">Companies based in Charlotte,
                        North Carolina</a></li>
                    <li><a href="/wiki/Category:Economy_of_the_Southeastern_United_States"
                        title="Category:Economy of the Southeastern United States">Economy of the Southeastern United
                        States</a></li>
                    <li><a href="/wiki/Category:Department_stores_of_the_United_States"
                        title="Category:Department stores of the United States">Department stores of the United
                        States</a></li>
                    <li><a href="/wiki/Category:American_companies_established_in_1888"
                        title="Category:American companies established in 1888">American companies established in
                        1888</a></li>
                    <li><a href="/wiki/Category:Retail_companies_established_in_1888"
                        title="Category:Retail companies established in 1888">Retail companies established in 1888</a>
                    </li>
                    <li><a href="/wiki/Category:1888_establishments_in_North_Carolina"
                        title="Category:1888 establishments in North Carolina">1888 establishments in North Carolina</a>
                    </li>
                    <li><a href="/wiki/Category:Privately_held_companies_based_in_North_Carolina"
                        title="Category:Privately held companies based in North Carolina">Privately held companies based
                        in North Carolina</a></li>
                    <li><a href="/wiki/Category:2015_mergers_and_acquisitions"
                        title="Category:2015 mergers and acquisitions">2015 mergers and acquisitions</a></li>
                    <li><a href="/wiki/Category:Companies_that_filed_for_Chapter_11_bankruptcy_in_2021"
                        title="Category:Companies that filed for Chapter 11 bankruptcy in 2021">Companies that filed for
                        Chapter 11 bankruptcy in 2021</a></li>
                    <li><a href="/wiki/Category:KKR_%26_Co._companies" title="Category:KKR &amp; Co. companies">KKR
                        &amp; Co. companies</a></li>
                  </ul>
                </div>
                <div id="mw-hidden-catlinks" class="mw-hidden-catlinks mw-hidden-cats-hidden">Hidden categories: <ul>
                    <li><a href="/wiki/Category:Articles_with_short_description"
                        title="Category:Articles with short description">Articles with short description</a></li>
                    <li><a href="/wiki/Category:Short_description_is_different_from_Wikidata"
                        title="Category:Short description is different from Wikidata">Short description is different
                        from Wikidata</a></li>
                    <li><a href="/wiki/Category:Use_mdy_dates_from_December_2016"
                        title="Category:Use mdy dates from December 2016">Use mdy dates from December 2016</a></li>
                    <li><a href="/wiki/Category:All_articles_with_dead_external_links"
                        title="Category:All articles with dead external links">All articles with dead external links</a>
                    </li>
                    <li><a href="/wiki/Category:Articles_with_dead_external_links_from_October_2010"
                        title="Category:Articles with dead external links from October 2010">Articles with dead external
                        links from October 2010</a></li>
                    <li><a href="/wiki/Category:Official_website_different_in_Wikidata_and_Wikipedia"
                        title="Category:Official website different in Wikidata and Wikipedia">Official website different
                        in Wikidata and Wikipedia</a></li>
                    <li><a href="/wiki/Category:Webarchive_template_wayback_links"
                        title="Category:Webarchive template wayback links">Webarchive template wayback links</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </main>

        </div>
        <div class="mw-footer-container">
          <footer id="footer" class="mw-footer">
            <ul id="footer-info" class="mw-portlet mw-portlet-footer-info">
              <li id="footer-info-lastmod"> This page was last edited on 13 July 2026, at 01:54<span
                  class="anonymous-show">&nbsp;(UTC)</span>.</li>
              <li id="footer-info-renderedwith">Page was rendered with <a
                  href="https://www.mediawiki.org/wiki/Special:MyLanguage/Parsoid" class="extiw"
                  title="mw:Special:MyLanguage/Parsoid">Parsoid</a>.</li>
              <li id="footer-info-copyright">Text is available under the <a
                  href="/wiki/Wikipedia:Text_of_the_Creative_Commons_Attribution-ShareAlike_4.0_International_License"
                  title="Wikipedia:Text of the Creative Commons Attribution-ShareAlike 4.0 International License">Creative
                  Commons Attribution-ShareAlike 4.0 License</a>;
                additional terms may apply. By using this site, you agree to the <a
                  href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Terms_of_Use" class="extiw"
                  title="foundation:Special:MyLanguage/Policy:Terms of Use">Terms of Use</a> and <a
                  href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Privacy_policy" class="extiw"
                  title="foundation:Special:MyLanguage/Policy:Privacy policy">Privacy Policy</a>. Wikipedia® is a
                registered trademark of the <a rel="nofollow" class="external text"
                  href="https://wikimediafoundation.org/">Wikimedia Foundation, Inc.</a>, a non-profit organization.
              </li>
            </ul>

            <ul id="footer-places" class="mw-portlet mw-portlet-footer-places">
              <li id="footer-places-privacy"><a
                  href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Privacy_policy">Privacy
                  policy</a></li>
              <li id="footer-places-about"><a href="/wiki/Wikipedia:About">About Wikipedia</a></li>
              <li id="footer-places-disclaimers"><a href="/wiki/Wikipedia:General_disclaimer">Disclaimers</a></li>
              <li id="footer-places-contact"><a href="//en.wikipedia.org/wiki/Wikipedia:Contact_us">Contact
                  Wikipedia</a></li>
              <li id="footer-places-legal-safety-contacts"><a
                  href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Legal:Wikimedia_Foundation_Legal_and_Safety_Contact_Information">Legal
                  &amp; safety contacts</a></li>
              <li id="footer-places-wm-codeofconduct"><a
                  href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Universal_Code_of_Conduct">Code
                  of Conduct</a></li>
              <li id="footer-places-developers"><a href="https://developer.wikimedia.org">Developers</a></li>
              <li id="footer-places-statslink"><a href="https://stats.wikimedia.org/#/en.wikipedia.org">Statistics</a>
              </li>
              <li id="footer-places-cookiestatement"><a
                  href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Cookie_statement">Cookie
                  statement</a></li>
              <li id="footer-places-mobileview"><a
                  href="//en.wikipedia.org/w/index.php?title=Belk&amp;mobileaction=toggle_view_mobile"
                  class="noprint stopMobileRedirectToggle">Mobile view</a></li>
              <li style="display: none;"><a href="#">Edit preview settings</a></li>
            </ul>

            <ul id="footer-icons" class="mw-portlet mw-portlet-footer-icons noprint">
              <li id="footer-copyrightico"><a href="https://www.wikimedia.org/"
                  class="cdx-button cdx-button--fake-button cdx-button--size-large cdx-button--fake-button--enabled">
                  <picture>
                    <source media="(min-width: 500px)" srcset="../assets/wikimedia-button.svg" width="84" height="29">
                    <img src="../assets/wikimedia.svg" width="25" height="25" alt="Wikimedia Foundation" lang="en"
                      loading="lazy">
                  </picture>
                </a></li>
              <li id="footer-poweredbyico"><a href="https://www.mediawiki.org/"
                  class="cdx-button cdx-button--fake-button cdx-button--size-large cdx-button--fake-button--enabled">
                  <picture>
                    <source media="(min-width: 500px)" srcset="../assets/poweredby_mediawiki.svg" width="88"
                      height="31"><img src="../assets/mediawiki_compact.svg" alt="Powered by MediaWiki" lang="en"
                      width="25" height="25" loading="lazy">
                  </picture>
                </a></li>
            </ul>

          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>