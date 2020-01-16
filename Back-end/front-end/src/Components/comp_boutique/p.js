// import React from 'react'

// class P extends React.Component {

//     render() {
//         return (
//             < header class="head " role = "banner" >
//         <div class="head__inner">

//             <button type="button" class="head__hamburger js-drawer-open-left js-is-mobile" aria-controls="NavDrawer" aria-expanded="false"><span class="head__hamburger__line1"></span><span class="head__hamburger__line2"></span><span class="head__hamburger__line3"></span></button><div class="head__logo">
//                 <a href="/" class="head__logo-link">
//                     <img src="//cdn.shopify.com/s/files/1/0849/5778/files/FL_essentials_logo-04.svg?18160" alt="Freeletics Essentials" height="45" width="140" class="head__logo-image"/>
// 					</a>
// 				</div>

//                 <nav class="headnav" role="navigation">
//                     <ul class="headnav__l1-wrapper">

//                         <li aria-haspopup="true" class="headnav__l1-entry"><a href="/collections/men" class="headnav__l1-link">Hommes</a><ul class="headnav__l2-wrapper">
//                             <li class="headnav__l2-entry">
//                             <a href="/collections/tops-men" class="headnav__l2-link">T-shirts / vestes</a>
//                         </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/shorts-pants-men" class="headnav__l2-link">Pantalons / shorts	</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/men" class="headnav__l2-link">									Tous les produits								</a>
//                             </li>

//                         </ul>

//                         </li>



//                         <li aria-haspopup="true" class="headnav__l1-entry"><a href="/collections/women" class="headnav__l1-link">Femmes</a><ul class="headnav__l2-wrapper"><li class="headnav__l2-entry">
//                             <a href="/collections/tops-women" class="headnav__l2-link">									T-shirts / vestes								</a>
//                         </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/shorts-pants-women" class="headnav__l2-link">									Pantalons / shorts								</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/women" class="headnav__l2-link">									Tous les produits								</a>
//                             </li>

//                         </ul>

//                         </li>



//                         <li aria-haspopup="true" class="headnav__l1-entry"><a href="/collections/accessories" class="headnav__l1-link">Accessoires</a><ul class="headnav__l2-wrapper"><li class="headnav__l2-entry">
//                             <a href="/collections/accessories-gloves" class="headnav__l2-link">									Gants								</a>
//                         </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/accessories-backpacks-bags" class="headnav__l2-link">									Sacs à dos &amp; sacs								</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/accessories-hats-caps" class="headnav__l2-link">									Bonnets &amp; casquettes								</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/accessories-phone-collection" class="headnav__l2-link">									Étuis pour téléphone								</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/towel" class="headnav__l2-link">									Serviettes								</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/gift-card" class="headnav__l2-link">									Cartes-Cadeaux								</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/accessories" class="headnav__l2-link">									Tous les produits								</a>
//                             </li>

//                         </ul>

//                         </li>



//                         <li aria-haspopup="true" class="headnav__l1-entry"><a href="/collections/gear" class="headnav__l1-link headnav__l1-link--active">Équipement</a><ul class="headnav__l2-wrapper"><li class="headnav__l2-entry">
//                             <a href="/collections/equipment-pullup-bar" class="headnav__l2-link">									Barre de traction								</a>
//                         </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/equipment-mat" class="headnav__l2-link">									Tapis d'entraînement								</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/equipment-bands" class="headnav__l2-link">									Bandes de résistance								</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/gear-bundles" class="headnav__l2-link">									Packs d'équipements								</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/gear" class="headnav__l2-link">									Tous les produits								</a>
//                             </li>

//                         </ul>

//                         </li>



//                         <li aria-haspopup="true" class="headnav__l1-entry"><a href="/collections/gear-bundles" class="headnav__l1-link headnav__l1-link--active">Packs</a><ul class="headnav__l2-wrapper"><li class="headnav__l2-entry">
//                             <a href="/collections/body-mind-exclusive" class="headnav__l2-link">									Corps &amp; Mental								</a>
//                         </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/gear-bundles" class="headnav__l2-link">									Packs d'équipements								</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/gift-card" class="headnav__l2-link">									Cartes-Cadeaux								</a>
//                             </li>

//                         </ul>

//                         </li>



//                         <li aria-haspopup="true" class="headnav__l1-entry"><a href="/collections/sale" class="headnav__l1-link">Soldes</a><ul class="headnav__l2-wrapper"><li class="headnav__l2-entry">
//                             <a href="/collections/sale-men" class="headnav__l2-link">									Hommes								</a>
//                         </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/sale-women" class="headnav__l2-link">									Femmes								</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/sale" class="headnav__l2-link">									Tous les produits								</a>
//                             </li>

//                         </ul>

//                         </li>



//                         <li aria-haspopup="true" class="headnav__l1-entry"><a href="http://www.freeletics.com" class="headnav__l1-link">Applis</a><ul class="headnav__l2-wrapper"><li class="headnav__l2-entry">
//                             <a href="https://www.freeletics.com/training" class="headnav__l2-link">									Entraînement								</a>
//                         </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="https://www.freeletics.com/nutrition" class="headnav__l2-link">
//                                     Nutrition
// 								</a>
//                             </li>
//                             <li class="headnav__l2-entry">
//                                 <a href="/collections/gift-card" class="headnav__l2-link">									Cartes-Cadeaux								</a>
//                             </li>

//                         </ul>

//                         </li>

//                     </ul>

//                 </nav>

//                 <div class="head__search">
//                     <label class="js-toggle-search" for="searchfield">
//                         <svg viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
//                             <path d="M99.992 88.688L73.363 62.059A39.792 39.792 0 0079.993 40c0-22.094-17.907-40-39.997-40S0 17.91 0 40.004c0 22.086 17.906 40 39.996 40a39.824 39.824 0 0022.06-6.633L88.68 100l11.312-11.312zm-88.66-48.68c0-15.832 12.836-28.66 28.664-28.66 15.832 0 28.668 12.828 28.668 28.66S55.828 68.676 39.996 68.676c-15.828 0-28.664-12.836-28.664-28.668z" fill-rule="nonzero" class="head__svg-fill">
//                         </path>
//                         </svg>
//                         </label>
//                     <div class="c-searchform" role="search">
//                         <form action="/search" method="get" role="search" class="c-searchform__form js-search-form">
//                             <input type="hidden" name="type" value="product">
//                                 <input type="text" name="q" value="" class="c-searchform__input js-search-input aa-input" aria-label="Suchen" id="searchfield" autocomplete="off" spellcheck="false" dir="auto" disabled=""><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: &quot;\&quot;aktiv-grotesk\&quot;&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
//                                     <input type="submit" class="c-searchform__button button button--blue" value="Rechercher">
// 		</form>
// 	</div>
// </div>


//                             <div class="head__aside">


//                                 <div class="head__account">


//                                     <a href="/account" class="head__account-link js-toggle-active" data-target="modal_account">
//                                         <div class="avatar">
//                                             <img src="//cdn.shopify.com/s/files/1/0849/5778/t/42/assets/img_avatar.png?v=4116897930453084737" alt="" height="30" width="30"/>
// 								</div>	
//                                 Se connecter / s'inscrire							</a>
						
// 						</div>


//                                     <div class="head__switcher">
//                                         <div class="head__switcher__current">
//                                             <div class="js-country-code" bablic-exclude="" data-x-bidi="">fr</div>
//                                             <div class="js-currency-symbol">€</div>
//                                         </div>
//                                         <div class="head__switcher__wrapper">

//                                             <ul class="head__switcher__currencies js-country-list fr">

//                                                 <li><a href="javascript:bablic.redirectTo('de',{forceRedirect:true});" class="country-de">Deutsch</a>
//                                                 </li>

//                                                 <li><a href="javascript:bablic.redirectTo('en',{forceRedirect:true});" class="country-en">English</a>
//                                                 </li>

//                                                 <li><a href="javascript:bablic.redirectTo('fr',{forceRedirect:true});" class="country-fr">Français</a>
//                                                 </li>

//                                                 <li><a href="javascript:bablic.redirectTo('es',{forceRedirect:true});" class="country-es">Español</a>
//                                                 </li>

//                                                 <li><a href="javascript:bablic.redirectTo('it',{forceRedirect:true});" class="country-it">Italiano</a>
//                                                 </li>

//                                             </ul>


//                                             <ul class="head__switcher__countries js-currency-list EUR">

//                                                 <li>
//                                                     <a href="javascript:switchCurrency('EUR');" class="currency-eur">EUR</a>
//                                                 </li>

//                                                 <li>
//                                                     <a href="javascript:switchCurrency('USD');" class="currency-usd">USD</a>
//                                                 </li>

//                                                 <li>
//                                                     <a href="javascript:switchCurrency('GBP');" class="currency-gbp">GBP</a>
//                                                 </li>

//                                                 <li>
//                                                     <a href="javascript:switchCurrency('CAD');" class="currency-cad">CAD</a>
//                                                 </li>

//                                                 <li>
//                                                     <a href="javascript:switchCurrency('AUD');" class="currency-aud">AUD</a>
//                                                 </li>

//                                                 <li>
//                                                     <a href="javascript:switchCurrency('SGD');" class="currency-sgd">SGD</a>
//                                                 </li>

//                                             </ul>

//                                         </div>
//                                     </div>

//                                     <div class="head__cart">

//                                         <a href="/cart?locale=fr" id="cartToggle" class="head__cart-link js-drawer-open-right" aria-controls="CartDrawer" aria-expanded="false">
//                                             <span class="head__cart-icon">
//                                                 <svg viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
//                                                     <g class="head__svg-fill">
//                                                         <path d="M22.35 4.1c-.175-.275-.475-.475-.8-.475L5.75 2.9 5.2.75A.992.992 0 004.225 0H1C.45 0 0 .45 0 1s.45 1 1 1h2.45L6.2 12.7l-.675 2.8c-.075.3 0 .625.175.85.2.25.475.375.775.375h12.25c.55 0 1-.45 1-1s-.45-1-1-1H7.775l.275-1.15 10-.475c.375-.025.7-.25.85-.575l3.5-7.5c.15-.275.125-.625-.05-.925">
//                                                         </path>
//                                                         <circle cx="7.125" cy="19.13" r="1.875">
//                                                         </circle>
//                                                         <circle cx="18.375" cy="19.13" r="1.875">
//                                                         </circle>
//                                                     </g>
//                                                 </svg>
//                                             </span>

//                                             <span class="head__cart-cost" id="CartCost">0.00</span>
//                                             <span class="head__cart-count" id="CartCount">0 </span>
//                                         </a>
//                                     </div>

//                                 </div>

//                             </div>

// 		</header>
           
//         )
//     }
// }

// export default P


    