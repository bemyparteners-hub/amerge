# INFINIMETAL × PLIALU

Environnement de chiffrage interne regroupant deux applications web dans un
**hub central**.

## Structure

```
/
├── index.html                 # Hub central (point d'entrée)
├── assets/
│   ├── css/
│   │   ├── theme.css          # Design system commun (extrait d'INFINIMETAL)
│   │   └── hub.css            # Styles propres à la page d'accueil
│   ├── js/hub.js              # Logique légère du hub
│   └── img/logos/             # Logos utilisés par le hub
│
├── infinimetal/
│   └── index.html             # App INFINIMETAL — calculateur de prix tôles
│
└── plialu/
    ├── index.html  calcul.html  devis.html
    ├── configurateur.html  dessinateur.html
    ├── config-v2.html  nouvelle-page.html   # pages expérimentales (conservées)
    ├── css/plialu-theme.css   # Harmonisation visuelle légère (Phase 1)
    ├── js/                    # JS/CSS PLIALU (plialu-data, materials, geometry, easytest…)
    ├── img/pieces/            # Images du catalogue de pièces
    └── *.PNG / *.png          # Images racine (référencées par nom dans le JS)
```

## Utilisation

Ouvrir `index.html` à la racine. Le hub permet d'accéder à INFINIMETAL ou à
PLIALU. Un bouton **« ← Retour au hub »** est présent dans chaque module.

> Les pages chargent des librairies externes (Google Fonts, jsPDF, html2canvas,
> Bootstrap…) via CDN : une connexion internet est nécessaire au premier chargement.
