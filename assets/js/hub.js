/* hub.js — logique légère de la page d'accueil.
   Volontairement minimal : le hub est statique. Ce fichier
   sert de point d'extension (analytics, raccourcis clavier…). */
(function () {
  // Raccourcis clavier : 1 -> INFINIMETAL, 2 -> PLIALU
  document.addEventListener('keydown', function (e) {
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    if (e.key === '1') window.location.href = 'infinimetal/index.html';
    if (e.key === '2') window.location.href = 'plialu/index.html';
  });
})();
