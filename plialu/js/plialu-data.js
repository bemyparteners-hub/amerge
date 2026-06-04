/**
 * PLIALU — Données métier
 * Source : Liste_des_Articles_Configurateurs_.xlsx
 * 275 articles / 15 familles
 * Mise à jour : 2026-04-22
 */

const PLIALU_FAMILLES = [
  "Bavette",
  "Bavette Accessoire",
  "Couvertine",
  "Couvertine Accessoire",
  "Couvre Joint",
  "Departs",
  "Divers",
  "GeExtrude",
  "Habillage",
  "Lateraux",
  "Lisses",
  "Profils Divers",
  "Solin et Ge Pliées",
  "Solins et Ge Pliées Accessoires",
  "Test"
];

const PLIALU_ARTICLES = [
  // ── Bavette ──────────────────────────────────────────────────────────────
  { id: 1,   famille: "Bavette", article: "Bv2Biaise", img: "Bv2Biaise.PNG" },
  { id: 2,   famille: "Bavette", article: "Bv2Plis", img: "Bv2Plis.PNG" },
  { id: 3,   famille: "Bavette", article: "Bv2Plis-90deg", img: "Bv2Plis-90deg.PNG" },
  { id: 4,   famille: "Bavette", article: "Bv3Plis", img: "Bv3Plis.PNG" },
  { id: 5,   famille: "Bavette", article: "Bv3Plis-90deg", img: "Bv3Plis-90deg.PNG" },
  { id: 6,   famille: "Bavette", article: "Bv3PlisBiaise", img: "Bv3PlisBiaise.PNG" },
  { id: 7,   famille: "Bavette", article: "Bv4Plis", img: "Bv4Plis.PNG" },
  { id: 8,   famille: "Bavette", article: "Bv4Plis-90deg", img: "Bv4Plis-90deg.PNG" },
  { id: 9,   famille: "Bavette", article: "Bv4PlisBiaise", img: "Bv4PlisBiaise.PNG" },
  { id: 10,  famille: "Bavette", article: "Bv4PlisPerfos", img: "Bv4PlisPerfos.PNG" },
  { id: 11,  famille: "Bavette", article: "Bavette 2 Plis Encoche Droite Generique", img: "Capture Bavette 2 Plis Encoche Droite Generique.PNG" },
  { id: 12,  famille: "Bavette", article: "Bavette 2 Plis Encoche Gauche Generique", img: "Capture Bavette 2 Plis Encoche Gauche Generique.PNG" },
  { id: 13,  famille: "Bavette", article: "Bavette 2 Plis Encoche Generique", img: "Capture Bavette 2 Plis Encoche Generique.PNG" },
  { id: 14,  famille: "Bavette", article: "Bavette 2 Plis Generique", img: "Capture Bavette 2 Plis Generique.PNG" },
  { id: 15,  famille: "Bavette", article: "Bavette 2 Plis Rayonne", img: "Capture Bavette 2 Plis Rayonne.PNG" },
  { id: 16,  famille: "Bavette", article: "Bavette 3 Plis Encoche Droite Generique", img: "Capture Bavette 3 Plis Encoche Droite Generique.PNG" },
  { id: 17,  famille: "Bavette", article: "Bavette 3 Plis Encoche Gauche Generique", img: "Capture Bavette 3 Plis Encoche Gauche Generique.PNG" },
  { id: 18,  famille: "Bavette", article: "Bavette 3 Plis Encoche Generique", img: "Capture Bavette 3 Plis Encoche Generique.PNG" },
  { id: 19,  famille: "Bavette", article: "Bavette 3 Plis Encoche", img: "Capture Bavette 3 Plis Encoche.PNG" },
  { id: 20,  famille: "Bavette", article: "Bavette 3 Plis Encoches et Relevées", img: "Capture Bavette 3 Plis Encoches et Relevées .PNG" },
  { id: 21,  famille: "Bavette", article: "Bavette 3 Plis Generique", img: "Capture Bavette 3 Plis Generique.PNG" },
  { id: 22,  famille: "Bavette", article: "Bavette 3 Plis Rayonne", img: "Capture Bavette 3 Plis Rayonne.PNG" },
  { id: 23,  famille: "Bavette", article: "Bavette 3 Plis Releve Droite", img: "Capture Bavette 3 Plis Releve Droite.PNG" },
  { id: 24,  famille: "Bavette", article: "Bavette 3 Plis Releve Gauche", img: "Capture Bavette 3 Plis Releve Gauche.PNG" },
  { id: 25,  famille: "Bavette", article: "Bavette 3 Plis Releves", img: "Capture Bavette 3 Plis Releves.PNG" },
  { id: 26,  famille: "Bavette", article: "Bavette 4 Plis Encoche Droite Generique", img: "Capture Bavette 4 Plis Encoche Droite Generique.PNG" },
  { id: 27,  famille: "Bavette", article: "Bavette 4 Plis Encoche Gauche Generique", img: "Capture Bavette 4 Plis Encoche Gauche Generique.PNG" },
  { id: 28,  famille: "Bavette", article: "Bavette 4 Plis Encoche Generique", img: "Capture Bavette 4 Plis Encoche Generique.PNG" },
  { id: 29,  famille: "Bavette", article: "Bavette 4 Plis Generique", img: "Capture Bavette 4 Plis Generique.PNG" },
  { id: 30,  famille: "Bavette", article: "Bavette 4 Plis Rayonne", img: "Capture Bavette 4 Plis Rayonne.PNG" },
  { id: 31,  famille: "Bavette", article: "Bavette Pente 2 Plis Rabat à droite", img: "Capture Bavette Pente 2 Plis Rabat à droite.PNG" },
  { id: 32,  famille: "Bavette", article: "Bavette Pente 2 Plis Rabat à Gauche", img: "Capture Bavette Pente 2 Plis Rabat à Gauche.PNG" },
  { id: 33,  famille: "Bavette", article: "Bavette Pente 2 Plis Rabat+Ge à droite", img: "Capture Bavette Pente 2 Plis Rabat+Ge à droite.PNG" },
  { id: 34,  famille: "Bavette", article: "Bavette Pente 2 Plis Rabat+Ge à gauche", img: "Capture Bavette Pente 2 Plis Rabat+Ge à gauche.PNG" },
  { id: 35,  famille: "Bavette", article: "Bavette Pente 2 Plis Rabats+Ge", img: "Capture Bavette Pente 2 Plis Rabats+Ge.PNG" },
  { id: 36,  famille: "Bavette", article: "Bavette Pente 3 Plis Rabat à droite", img: "Capture Bavette Pente 3 Plis Rabat à droite.PNG" },
  { id: 37,  famille: "Bavette", article: "Bavette Pente 3 Plis Rabat à Gauche", img: "Capture Bavette Pente 3 Plis Rabat à Gauche.PNG" },
  { id: 38,  famille: "Bavette", article: "Bavette Pente 3 Plis Rabat+Ge à droite", img: "Capture Bavette Pente 3 Plis Rabat+Ge à droite.PNG" },
  { id: 39,  famille: "Bavette", article: "Bavette Pente 3 Plis Rabat+Ge à gauche", img: "Capture Bavette Pente 3 Plis Rabat+Ge à gauche.PNG" },
  { id: 40,  famille: "Bavette", article: "Bavette Pente 3 Plis Rabats+Ge", img: "Capture Bavette Pente 3 Plis Rabats+Ge.PNG" },
  { id: 41,  famille: "Bavette", article: "Bavette Pente 4 Plis Rabat à droite", img: "Capture Bavette Pente 4 Plis Rabat à droite.PNG" },
  { id: 42,  famille: "Bavette", article: "Bavette Pente 4 Plis Rabat à Gauche", img: "Capture Bavette Pente 4 Plis Rabat à Gauche.PNG" },
  { id: 43,  famille: "Bavette", article: "Bavette Pente 4 Plis Rabat+Ge à droite", img: "Capture Bavette Pente 4 Plis Rabat+Ge à droite.PNG" },
  { id: 44,  famille: "Bavette", article: "Bavette Pente 4 Plis Rabat+Ge à gauche", img: "Capture Bavette Pente 4 Plis Rabat+Ge à gauche.PNG" },
  { id: 45,  famille: "Bavette", article: "Bavette Pente 4 Plis Rabats+Ge", img: "Capture Bavette Pente 4 Plis Rabats+Ge.PNG" },
  { id: 46,  famille: "Bavette", article: "Bavette Plate 2 Plis Rabat à droite", img: "Capture Bavette Plate 2 Plis Rabat à droite.PNG" },
  { id: 47,  famille: "Bavette", article: "Bavette Plate 2 Plis Rabat à Gauche", img: "Capture Bavette Plate 2 Plis Rabat à Gauche.PNG" },
  { id: 48,  famille: "Bavette", article: "Bavette Plate 2 Plis RabatGe à droite", img: "Capture Bavette Plate 2 Plis RabatGe à droite.PNG" },
  { id: 49,  famille: "Bavette", article: "Bavette Plate 2 Plis RabatGe à gauche", img: "Capture Bavette Plate 2 Plis RabatGe à gauche.PNG" },
  { id: 50,  famille: "Bavette", article: "Bavette Plate 3 Plis Rabat à droite", img: "Capture Bavette Plate 3 Plis Rabat à droite.PNG" },
  { id: 51,  famille: "Bavette", article: "Bavette Plate 3 Plis Rabat à Gauche", img: "Capture Bavette Plate 3 Plis Rabat à Gauche.PNG" },
  { id: 52,  famille: "Bavette", article: "Bavette Plate 3 Plis RabatGe à droite", img: "Capture Bavette Plate 3 Plis RabatGe à droite.PNG" },
  { id: 53,  famille: "Bavette", article: "Bavette Plate 3 Plis RabatGe à gauche", img: "Capture Bavette Plate 3 Plis RabatGe à gauche.PNG" },
  { id: 54,  famille: "Bavette", article: "Bavette Plate 4 Plis Rabat à droite", img: "Capture Bavette Plate 4 Plis Rabat à droite.PNG" },
  { id: 55,  famille: "Bavette", article: "Bavette Plate 4 Plis Rabat à Gauche", img: "Capture Bavette Plate 4 Plis Rabat à Gauche.PNG" },
  { id: 56,  famille: "Bavette", article: "Bavette Plate 4 Plis RabatGe à droite", img: "Capture Bavette Plate 4 Plis RabatGe à droite.PNG" },
  { id: 57,  famille: "Bavette", article: "Bavette Plate 4 Plis RabatGe à gauche", img: "Capture Bavette Plate 4 Plis RabatGe à gauche.PNG" },
  { id: 58,  famille: "Bavette", article: "Bavettes Generique", img: "Capture Bavettes Generique.PNG" },
  { id: 59,  famille: "Bavette", article: "Bv 4 Plis Plate", img: "Capture Bv 4 Plis Plate.PNG" },
  { id: 60,  famille: "Bavette", article: "Bv Pente 2 Plis Ge Ecrasée", img: "Capture Bv Pente 2 Plis Ge Ecrasée.PNG" },
  { id: 61,  famille: "Bavette", article: "Bv Pente 3 Plis Ge Ecrasée", img: "Capture Bv Pente 3 Plis Ge Ecrasée.PNG" },
  { id: 62,  famille: "Bavette", article: "Bv Pente 4 Plis Ge Ecrasée", img: "Capture Bv Pente 4 Plis Ge Ecrasée.PNG" },
  { id: 63,  famille: "Bavette", article: "Bv Plate 2 Plis Ge Ecrasée", img: "Capture Bv Plate 2 Plis Ge Ecrasée.PNG" },
  { id: 64,  famille: "Bavette", article: "Bv Plate 3 Plis Ge Ecrasée", img: "Capture Bv Plate 3 Plis Ge Ecrasée.PNG" },
  { id: 65,  famille: "Bavette", article: "Bv Plate 4 Plis Ge Ecrasée", img: "Capture Bv Plate 4 Plis Ge Ecrasée.PNG" },
  { id: 66,  famille: "Bavette", article: "Epingle" },
  { id: 67,  famille: "Bavette", article: "Habillage Generique" },
  { id: 68,  famille: "Bavette", article: "Habillage Perfos 1 Rangee" },
  { id: 69,  famille: "Bavette", article: "Habillage Perfos 2 Rangees" },
  { id: 70,  famille: "Bavette", article: "Habillage Perfos 3 Rangees" },
  { id: 71,  famille: "Bavette", article: "Tableau" },

  // ── Bavette Accessoire ───────────────────────────────────────────────────
  { id: 72,  famille: "Bavette Accessoire", article: "AnglePenteRentrantBv2", img: "Capture AnglePenteRentrantBv2.PNG" },
  { id: 73,  famille: "Bavette Accessoire", article: "AnglePenteRentrantBv3", img: "Capture AnglePenteRentrantBv3.PNG" },
  { id: 74,  famille: "Bavette Accessoire", article: "AnglePenteRentrantBv4", img: "Capture AnglePenteRentrantBv4.PNG" },
  { id: 75,  famille: "Bavette Accessoire", article: "AnglePenteSortantBv2", img: "Capture AnglePenteSortantBv2.PNG" },
  { id: 76,  famille: "Bavette Accessoire", article: "AnglePenteSortantBv3", img: "Capture AnglePenteSortantBv3.PNG" },
  { id: 77,  famille: "Bavette Accessoire", article: "AnglePenteSortantBv4", img: "Capture AnglePenteSortantBv4.PNG" },
  { id: 78,  famille: "Bavette Accessoire", article: "AnglePlatRentrantBv2", img: "Capture AnglePlatRentrantBv2.PNG" },
  { id: 79,  famille: "Bavette Accessoire", article: "AnglePlatRentrantBv3", img: "Capture AnglePlatRentrantBv3.PNG" },
  { id: 80,  famille: "Bavette Accessoire", article: "AnglePlatRentrantBv4", img: "Capture AnglePlatRentrantBv4.PNG" },
  { id: 81,  famille: "Bavette Accessoire", article: "AnglePlatSortantBv2", img: "Capture AnglePlatSortantBv2.PNG" },
  { id: 82,  famille: "Bavette Accessoire", article: "AnglePlatSortantBv3", img: "Capture AnglePlatSortantBv3.PNG" },
  { id: 83,  famille: "Bavette Accessoire", article: "AnglePlatSortantBv4", img: "Capture AnglePlatSortantBv4.PNG" },
  { id: 84,  famille: "Bavette Accessoire", article: "BouchBvPente-D", img: "Capture BouchBvPente-D.PNG" },
  { id: 85,  famille: "Bavette Accessoire", article: "BouchBvPente-G", img: "Capture BouchBvPente-G.PNG" },
  { id: 86,  famille: "Bavette Accessoire", article: "BouchBvPlate-D", img: "Capture BouchBvPlate-D.PNG" },
  { id: 87,  famille: "Bavette Accessoire", article: "BouchBvPlate-G", img: "Capture BouchBvPlate-G.PNG" },
  { id: 88,  famille: "Bavette Accessoire", article: "EqAC Ext A Coller", img: "Capture EqAC Ext A Coller.PNG" },
  { id: 89,  famille: "Bavette Accessoire", article: "EqAC Int A Coller", img: "Capture EqAC Int A Coller.PNG" },
  { id: 90,  famille: "Bavette Accessoire", article: "Equerre de Finition Laquage Ext", img: "Capture Equerre de Finition Laquage Ext.PNG" },
  { id: 91,  famille: "Bavette Accessoire", article: "Equerre de Finition Laquage Int", img: "Capture Equerre de Finition Laquage Int.PNG" },
  { id: 92,  famille: "Bavette Accessoire", article: "Releve 1 Pli Droite", img: "Capture Releve 1 Pli Droite.PNG" },
  { id: 93,  famille: "Bavette Accessoire", article: "Releve 1 Pli Gauche", img: "Capture Releve 1 Pli Gauche.PNG" },
  { id: 94,  famille: "Bavette Accessoire", article: "Releve 1 Pli", img: "Capture Releve 1 Pli.PNG" },
  { id: 95,  famille: "Bavette Accessoire", article: "Releve 2 Plis Droite", img: "Capture Releve 2 Plis Droite.PNG" },
  { id: 96,  famille: "Bavette Accessoire", article: "Releve 2 Plis Gauche", img: "Capture Releve 2 Plis Gauche.PNG" },
  { id: 97,  famille: "Bavette Accessoire", article: "Releve 2 Plis", img: "Capture Releve 2 Plis.PNG" },
  { id: 98,  famille: "Bavette Accessoire", article: "Releve Type1 Bavette Rayonnée Droite", img: "Capture Releve Type1 Bavette Rayonnée Droite.PNG" },
  { id: 99,  famille: "Bavette Accessoire", article: "Releve Type1 Bavette Rayonnée Gauche", img: "Capture Releve Type1 Bavette Rayonnée Gauche.PNG" },
  { id: 100, famille: "Bavette Accessoire", article: "Releve Type2 Bavette Rayonnée Droite", img: "Capture Releve Type2 Bavette Rayonnée Droite.PNG" },
  { id: 101, famille: "Bavette Accessoire", article: "Releve Type2 Bavette Rayonnée Gauche", img: "Capture Releve Type2 Bavette Rayonnée Gauche.PNG" },
  { id: 102, famille: "Bavette Accessoire", article: "Support Bavette Pentée 1 Pli", img: "Capture Support Bavette Pentée 1 Pli.PNG" },
  { id: 103, famille: "Bavette Accessoire", article: "Support Bavette Pentée 2 Plis", img: "Capture Support Bavette Pentée 2 Plis.PNG" },
  { id: 104, famille: "Bavette Accessoire", article: "Support Bavette Plate 1 Pli", img: "Capture Support Bavette Plate 1 Pli.PNG" },
  { id: 105, famille: "Bavette Accessoire", article: "Support Bavette Plate 2 Plis", img: "Capture Support Bavette Plate 2 Plis.PNG" },
  { id: 106, famille: "Bavette Accessoire", article: "EclExtBv2", img: "EclExtBv2.PNG" },
  { id: 107, famille: "Bavette Accessoire", article: "EclExtBv2Ray", img: "EclExtBv2Ray.PNG" },
  { id: 108, famille: "Bavette Accessoire", article: "EclExtBv3", img: "EclExtBv3.PNG" },
  { id: 109, famille: "Bavette Accessoire", article: "EclExtBv3Plate", img: "EclExtBv3Plate.PNG" },
  { id: 110, famille: "Bavette Accessoire", article: "EclExtBv3Ray", img: "EclExtBv3Ray.PNG" },
  { id: 111, famille: "Bavette Accessoire", article: "EclExtBv4", img: "EclExtBv4.PNG" },
  { id: 112, famille: "Bavette Accessoire", article: "EclExtBv4Plate", img: "EclExtBv4Plate.PNG" },
  { id: 113, famille: "Bavette Accessoire", article: "EclExtBv4Ray", img: "EclExtBv4Ray.PNG" },
  { id: 114, famille: "Bavette Accessoire", article: "EclIntBv2", img: "EclIntBv2.PNG" },
  { id: 115, famille: "Bavette Accessoire", article: "EclIntBv3et4", img: "EclIntBv3et4.PNG" },

  // ── Couvertine ───────────────────────────────────────────────────────────
  { id: 116, famille: "Couvertine", article: "Couvertine Pente Clipse", img: "Capture Couvertine Pente Clipse.PNG" },
  { id: 117, famille: "Couvertine", article: "Couvertine Pente Collee", img: "Capture Couvertine Pente Collee.PNG" },
  { id: 118, famille: "Couvertine", article: "Couvertine Pente Ge Ecrasé", img: "Capture Couvertine Pente Ge Ecrasé.PNG" },
  { id: 119, famille: "Couvertine", article: "Couvertine Plate 1 Rabat Ge", img: "Capture Couvertine Plate 1 Rabat Ge.PNG" },
  { id: 120, famille: "Couvertine", article: "Couvertine Plate 1 Rabat", img: "Capture Couvertine Plate 1 Rabat.PNG" },
  { id: 121, famille: "Couvertine", article: "Couvertine Plate 2 Rabats Ge", img: "Capture Couvertine Plate 2 Rabats Ge.PNG" },
  { id: 122, famille: "Couvertine", article: "Couvertine Plate 2 Rabats", img: "Capture Couvertine Plate 2 Rabats.PNG" },
  { id: 123, famille: "Couvertine", article: "Couvertine Plate Clipse", img: "Capture Couvertine Plate Clipse.PNG" },
  { id: 124, famille: "Couvertine", article: "Couvertine Plate Collee Ge Ecrasé", img: "Capture Couvertine Plate Collee Ge Ecrasé.PNG" },
  { id: 125, famille: "Couvertine", article: "Couvertine Plate Collee", img: "Capture Couvertine Plate Collee.PNG" },
  { id: 126, famille: "Couvertine", article: "Couvertine Plate Descendante", img: "Capture Couvertine Plate Descendante.PNG" },
  { id: 127, famille: "Couvertine", article: "Couvertine Plate Montante", img: "Capture Couvertine Plate Montante.PNG" },
  { id: 128, famille: "Couvertine", article: "Couvertines", img: "Capture Couvertines generique.PNG" },

  // ── Couvertine Accessoire ────────────────────────────────────────────────
  { id: 129, famille: "Couvertine Accessoire", article: "Angle Couvertine Plate Collee Ouverture Variable", img: "Capture Angle Couvertine Plate Collee Ouverture Variable.PNG" },
  { id: 130, famille: "Couvertine Accessoire", article: "Angle Couvertine Plate Collee", img: "Capture Angle Couvertine Plate Collee.PNG" },
  { id: 131, famille: "Couvertine Accessoire", article: "Angle Rentrant Couvertine Clipse Ouverture Variable", img: "Capture Angle Rentrant Couvertine Clipse Ouverture Variable.PNG" },
  { id: 132, famille: "Couvertine Accessoire", article: "Angle Rentrant Couvertine Clipse", img: "Capture Angle Rentrant Couvertine Clipse.PNG" },
  { id: 133, famille: "Couvertine Accessoire", article: "Angle Rentrant Couvertine Collee", img: "Capture Angle Rentrant Couvertine Collee.PNG" },
  { id: 134, famille: "Couvertine Accessoire", article: "Angle Rentrant Couvertine Plate Clipse", img: "Capture Angle Rentrant Couvertine Plate Clipse.PNG" },
  { id: 135, famille: "Couvertine Accessoire", article: "Angle Sortant Couvertine Clipse Ouverture Variable", img: "Capture Angle Sortant Couvertine Clipse Ouverture Variable.PNG" },
  { id: 136, famille: "Couvertine Accessoire", article: "Angle Sortant Couvertine Clipse", img: "Capture Angle Sortant Couvertine Clipse.PNG" },
  { id: 137, famille: "Couvertine Accessoire", article: "Angle Sortant Couvertine Collee", img: "Capture Angle Sortant Couvertine Collee.PNG" },
  { id: 138, famille: "Couvertine Accessoire", article: "Angle Sortant Couvertine Plate Clipse Ouverture Variable", img: "Capture Angle Sortant Couvertine Plate Clipse Ouverture Variable.PNG" },
  { id: 139, famille: "Couvertine Accessoire", article: "Angle Sortant Couvertine Plate Clipse", img: "Capture Angle Sortant Couvertine Plate Clipse.PNG" },
  { id: 140, famille: "Couvertine Accessoire", article: "Angle Sortant Couvertine Plate", img: "Capture Angle Sortant Couvertine Plate.PNG" },
  { id: 141, famille: "Couvertine Accessoire", article: "Angle T couvertine Pente Clipse", img: "Capture Angle T couvertine Pente Clipse.PNG" },
  { id: 142, famille: "Couvertine Accessoire", article: "Angle T couvertine Pente Collee", img: "Capture Angle T couvertine Pente Collee.PNG" },
  { id: 143, famille: "Couvertine Accessoire", article: "Angle T Couvertine Plate Clipse", img: "Capture Angle T Couvertine Plate Clipse.PNG" },
  { id: 144, famille: "Couvertine Accessoire", article: "Angle T Couvertine Plate Collee", img: "Capture Angle T Couvertine Plate Collee.PNG" },
  { id: 145, famille: "Couvertine Accessoire", article: "BouchCouvPente-D", img: "Capture BouchCouvPente-D.PNG" },
  { id: 146, famille: "Couvertine Accessoire", article: "BouchCouvPente-D-Ge", img: "Capture BouchCouvPente-D-Ge.PNG" },
  { id: 147, famille: "Couvertine Accessoire", article: "BouchCouvPente-G", img: "Capture BouchCouvPente-G.PNG" },
  { id: 148, famille: "Couvertine Accessoire", article: "BouchCouvPente-G-Ge", img: "Capture BouchCouvPente-G-Ge.PNG" },
  { id: 149, famille: "Couvertine Accessoire", article: "Bouchon Couvertine Plate Ge", img: "Capture Bouchon Couvertine Plate Ge.PNG" },
  { id: 150, famille: "Couvertine Accessoire", article: "Bouchon Couvertine Plate", img: "Capture Bouchon Couvertine Plate.PNG" },
  { id: 151, famille: "Couvertine Accessoire", article: "EclExt Couvertine Pente Clipse", img: "Capture EclExt Couvertine Pente Clipse.PNG" },
  { id: 152, famille: "Couvertine Accessoire", article: "EclExt Couvertine Pente Collee", img: "Capture EclExt Couvertine Pente Collee.PNG" },
  { id: 153, famille: "Couvertine Accessoire", article: "EclExt Couvertine Plate Clipse", img: "Capture EclExt Couvertine Plate Clipse.PNG" },
  { id: 154, famille: "Couvertine Accessoire", article: "EclExt Couvertine Plate Collee", img: "Capture EclExt Couvertine Plate Collee.PNG" },
  { id: 155, famille: "Couvertine Accessoire", article: "EclInt Couvertine Pente Clipse", img: "Capture EclInt Couvertine Pente Clipse.PNG" },
  { id: 156, famille: "Couvertine Accessoire", article: "EclInt Couvertine Pente Collee", img: "Capture EclInt Couvertine Pente Collee.PNG" },
  { id: 157, famille: "Couvertine Accessoire", article: "EclInt Couvertine Plate Clipse", img: "Capture EclInt Couvertine Plate Clipse.PNG" },
  { id: 158, famille: "Couvertine Accessoire", article: "EclInt Couvertine Plate Collee", img: "Capture EclInt Couvertine Plate Collee.PNG" },
  { id: 159, famille: "Couvertine Accessoire", article: "EqAC Ext A Coller", img: "Capture EqAC Ext A Coller.PNG" },
  { id: 160, famille: "Couvertine Accessoire", article: "EqAC Int A Coller", img: "Capture EqAC Int A Coller.PNG" },
  { id: 161, famille: "Couvertine Accessoire", article: "Releve Couvertine", img: "Capture Releve Couvertine.PNG" },
  { id: 162, famille: "Couvertine Accessoire", article: "Rustine à Coller", img: "Capture Rustine à Coller.PNG" },
  { id: 163, famille: "Couvertine Accessoire", article: "Support Nervure Couvertine Création de Pente", img: "Capture Support Nervure Couvertine Création de Pente.PNG" },
  { id: 164, famille: "Couvertine Accessoire", article: "Support Nervure Couvertine pente", img: "Capture Support Nervure Couvertine pente.PNG" },
  { id: 165, famille: "Couvertine Accessoire", article: "Support Nervure Couvertine penteRetombVerticales", img: "Capture Support Nervure Couvertine penteRetombVerticales.PNG" },
  { id: 166, famille: "Couvertine Accessoire", article: "Support Nervure Couvertine plate", img: "Capture Support Nervure Couvertine plate.PNG" },
  { id: 167, famille: "Couvertine Accessoire", article: "Support Nervure Couvertine plateRetombVerticales", img: "Capture Support Nervure Couvertine plateRetombVerticales.PNG" },

  // ── Couvre Joint ─────────────────────────────────────────────────────────
  { id: 168, famille: "Couvre Joint", article: "BouchPente-D", img: "Capture BouchPente-D.PNG" },
  { id: 169, famille: "Couvre Joint", article: "BouchPlat-D", img: "Capture BouchPlat-D.PNG" },
  { id: 170, famille: "Couvre Joint", article: "BouchPlat-G", img: "Capture BouchPlat-G.PNG" },
  { id: 171, famille: "Couvre Joint", article: "Couvre joint Angle Ext Perfos", img: "Capture Couvre joint Angle Ext Perfos.PNG" },
  { id: 172, famille: "Couvre Joint", article: "Couvre joint Angle Ext", img: "Capture Couvre joint Angle Ext.PNG" },
  { id: 173, famille: "Couvre Joint", article: "Couvre joint Angle Int Perfos", img: "Capture Couvre joint Angle Int Perfos.PNG" },
  { id: 174, famille: "Couvre Joint", article: "Couvre joint Angle Int", img: "Capture Couvre joint Angle Int.PNG" },
  { id: 175, famille: "Couvre Joint", article: "Couvre joint Angle Z", img: "Capture Couvre joint Angle Z.PNG" },
  { id: 176, famille: "Couvre Joint", article: "Couvre joint Angle Z-Perfos", img: "Capture Couvre joint Angle Z-Perfos.PNG" },
  { id: 177, famille: "Couvre Joint", article: "Couvre joint Angle Z-PerfosHaute", img: "Capture Couvre joint Angle Z-PerfosHaute.PNG" },
  { id: 178, famille: "Couvre Joint", article: "Couvre Joint Plat Perfos", img: "Capture Couvre Joint Plat Perfos.PNG" },
  { id: 179, famille: "Couvre Joint", article: "Couvre joint Plat", img: "Capture Couvre joint Plat.PNG" },
  { id: 180, famille: "Couvre Joint", article: "Omega Laque Ext", img: "Capture Omega Laque Ext.PNG" },
  { id: 181, famille: "Couvre Joint", article: "Omega Laque Int", img: "Capture Omega Laque Int.PNG" },
  { id: 182, famille: "Couvre Joint", article: "Omega", img: "Capture Omega.PNG" },
  { id: 183, famille: "Couvre Joint", article: "Releve 1 Pli", img: "Capture Releve 1 Pli.PNG" },
  { id: 184, famille: "Couvre Joint", article: "Releve 2 Plis", img: "Capture Releve 2 Plis.PNG" },
  { id: 185, famille: "Couvre Joint", article: "Couvre Joint General", img: "Couvre Joint General.PNG" },

  // ── Departs ──────────────────────────────────────────────────────────────
  { id: 186, famille: "Departs", article: "Depart Type 1", img: "Capture Depart Type 1.PNG" },
  { id: 187, famille: "Departs", article: "Depart Type OSP", img: "Capture Depart Type OSP.PNG" },
  { id: 188, famille: "Departs", article: "Depart", img: "Capture Depart.PNG" },

  // ── Divers ───────────────────────────────────────────────────────────────
  { id: 189, famille: "Divers", article: "Angle Corn Ext" },
  { id: 190, famille: "Divers", article: "A Débit" },
  { id: 191, famille: "Divers", article: "Angle" },
  { id: 192, famille: "Divers", article: "Corn 1 Pli Ecrase Exterieur Ferme" },
  { id: 193, famille: "Divers", article: "Corn 1 Pli Ecrase Exterieur Ouvert" },
  { id: 194, famille: "Divers", article: "Corn 1 Pli Ecrase Interieur Ferme" },
  { id: 195, famille: "Divers", article: "Corn 1 Pli Ecrase Interieur Ouvert" },
  { id: 196, famille: "Divers", article: "Corn 1 Pli Ecrase" },
  { id: 197, famille: "Divers", article: "Corn 1 Pli Exterieur Ecrase" },
  { id: 198, famille: "Divers", article: "Corn 2 Plis Ecrases Exterieur Ferme" },
  { id: 199, famille: "Divers", article: "Corn 2 Plis Ecrases Exterieur Ouvert" },
  { id: 200, famille: "Divers", article: "Corn 2 Plis Ecrases Interieur Ferme" },
  { id: 201, famille: "Divers", article: "Corn 2 Plis Ecrases Interieur Ouvert" },
  { id: 202, famille: "Divers", article: "Corn 2 Plis Ecrases Interieur" },
  { id: 203, famille: "Divers", article: "Corn 2 Plis Ecrases" },
  { id: 204, famille: "Divers", article: "Corn 2 Plis Laquage Ext" },
  { id: 205, famille: "Divers", article: "Corn 2 Plis Laquage Int" },
  { id: 206, famille: "Divers", article: "Corn Brut Fermee" },
  { id: 207, famille: "Divers", article: "Corn Brut Ouverte" },
  { id: 208, famille: "Divers", article: "Corn Brut" },
  { id: 209, famille: "Divers", article: "Corn Ep" },
  { id: 210, famille: "Divers", article: "Corn Ext Fermee" },
  { id: 211, famille: "Divers", article: "Corn Ext Ouverte" },
  { id: 212, famille: "Divers", article: "Corn Ext" },
  { id: 213, famille: "Divers", article: "Corn Int Fermee" },
  { id: 214, famille: "Divers", article: "Corn Int Ouverte" },
  { id: 215, famille: "Divers", article: "Corn Int" },
  { id: 216, famille: "Divers", article: "Corn R5T7" },
  { id: 217, famille: "Divers", article: "Divers" },
  { id: 218, famille: "Divers", article: "Epingle" },
  { id: 219, famille: "Divers", article: "Omega Brut" },
  { id: 220, famille: "Divers", article: "Omega Laque Ext" },
  { id: 221, famille: "Divers", article: "Omega Laque Int" },
  { id: 222, famille: "Divers", article: "Plat" },
  { id: 223, famille: "Divers", article: "U Brut cote Int" },
  { id: 224, famille: "Divers", article: "U Brut" },
  { id: 225, famille: "Divers", article: "U Ext cote Int" },
  { id: 226, famille: "Divers", article: "U Ext" },
  { id: 227, famille: "Divers", article: "U Int cote Int" },
  { id: 228, famille: "Divers", article: "U Int" },
  { id: 229, famille: "Divers", article: "Z Brut" },
  { id: 230, famille: "Divers", article: "Z Ext" },
  { id: 231, famille: "Divers", article: "Z Int" },
  { id: 232, famille: "Divers", article: "Tube" },

  // ── GeExtrude ────────────────────────────────────────────────────────────
  { id: 233, famille: "GeExtrude", article: "AngleRentrantGeExtrude" },
  { id: 234, famille: "GeExtrude", article: "AngleSortantGeExtrude" },
  { id: 235, famille: "GeExtrude", article: "Bouchon Ge Droite" },
  { id: 236, famille: "GeExtrude", article: "Bouchon Ge Gauche" },
  { id: 237, famille: "GeExtrude", article: "CJEXTangle95" },
  { id: 238, famille: "GeExtrude", article: "CJEXTplat95" },
  { id: 239, famille: "GeExtrude", article: "EclGe" },
  { id: 240, famille: "GeExtrude", article: "GeExtrude" },
  { id: 241, famille: "GeExtrude", article: "GénéralGeExtrude" },

  // ── Habillage ────────────────────────────────────────────────────────────
  { id: 242, famille: "Habillage", article: "Angle Double Ep" },
  { id: 243, famille: "Habillage", article: "Double Epingle" },
  { id: 244, famille: "Habillage", article: "Epingle" },
  { id: 245, famille: "Habillage", article: "Habillage Perfos 1 Rangée" },
  { id: 246, famille: "Habillage", article: "Habillage Perfos 3 Rangées" },
  { id: 247, famille: "Habillage", article: "Linteau Rab Perfos Type1" },
  { id: 248, famille: "Habillage", article: "Linteau Rab Perfos Type2" },
  { id: 249, famille: "Habillage", article: "Linteau Rab Perfos Type3" },
  { id: 250, famille: "Habillage", article: "Linteau Type1" },
  { id: 251, famille: "Habillage", article: "LintSpec-1" },
  { id: 252, famille: "Habillage", article: "Tableau Droit" },
  { id: 253, famille: "Habillage", article: "Tableau Droite Type1" },
  { id: 254, famille: "Habillage", article: "Tableau Gauche Type1" },
  { id: 255, famille: "Habillage", article: "Tableau Gauche" },
  { id: 256, famille: "Habillage", article: "Tableau" },

  // ── Lateraux ─────────────────────────────────────────────────────────────
  { id: 257, famille: "Lateraux", article: "Lateraux", img: "Capture Lateraux.PNG" },

  // ── Lisses ───────────────────────────────────────────────────────────────
  { id: 258, famille: "Lisses", article: "Goussets Lisse Type 3", img: "Capture Goussets Lisse Type 3.PNG" },
  { id: 259, famille: "Lisses", article: "Lisse Poralu", img: "Capture Lisse Poralu.PNG" },
  { id: 260, famille: "Lisses", article: "Lisse PoraluType2", img: "Capture Lisse PoraluType2.PNG" },
  { id: 261, famille: "Lisses", article: "Lisse Type 1", img: "Capture Lisse Type 1.PNG" },
  { id: 262, famille: "Lisses", article: "Lisse Type 2", img: "Capture Lisse Type 2.PNG" },
  { id: 263, famille: "Lisses", article: "Lisse Type 3", img: "Capture Lisse Type 3.PNG" },
  { id: 264, famille: "Lisses", article: "Lisse Type 3-Goussets", img: "Capture Lisse Type 3-Goussets.PNG" },
  { id: 265, famille: "Lisses", article: "Lisse Type 4", img: "Capture Lisse Type 4.PNG" },

  // ── Profils Divers ───────────────────────────────────────────────────────
  { id: 266, famille: "Profils Divers", article: "Profil Divers", img: "Profil Divers.PNG" },
  { id: 267, famille: "Profils Divers", article: "Profil-1", img: "Profil-1.PNG" },
  { id: 268, famille: "Profils Divers", article: "Profil-1-Perfos Type 1", img: "Profil-1-Perfos Type  1.PNG" },
  { id: 269, famille: "Profils Divers", article: "Profil-1-Perfos Type 2", img: "Profil-1-Perfos Type  2.PNG" },

  // ── Solin et Ge Pliées ───────────────────────────────────────────────────
  { id: 270, famille: "Solin et Ge Pliées", article: "Ge Type 1", img: "Capture Ge Type 1.PNG" },
  { id: 271, famille: "Solin et Ge Pliées", article: "Solins et Ge Pliées", img: "Capture Solins et Ge Pliées.PNG" },
  { id: 272, famille: "Solin et Ge Pliées", article: "Ge Type 1 Non Perfores", img: "Ge Type 1 Non Perfores.PNG" },

  // ── Solins et Ge Pliées Accessoires ─────────────────────────────────────
  { id: 273, famille: "Solins et Ge Pliées Accessoires", article: "Accessoires Solins et Ge Pliées", img: "Capture Accessoires Solins et Ge Pliées.PNG" },
  { id: 274, famille: "Solins et Ge Pliées Accessoires", article: "EclInt Ge Type 1", img: "Capture EclInt Ge Type 1.PNG" }
];

/**
 * Référence matière — Convention AL
 * AL{epaisseur}-{RAL}{finition}
 * Épaisseurs : 06=0.6mm, 075=0.75mm, 10=1.0mm, 12=1.2mm, 15=1.5mm, 20=2.0mm
 * Finitions   : M=Mat, B=Brillant, NF=Non fini, ANO=Anodisé, BRT=Brut
 */
const PLIALU_EPAISSEURS = [
  { valeur: 0.6,  code: "06"  },
  { valeur: 0.75, code: "075" },
  { valeur: 1.0,  code: "10"  },
  { valeur: 1.2,  code: "12"  },
  { valeur: 1.5,  code: "15"  },
  { valeur: 2.0,  code: "20"  }
];

const PLIALU_FINITIONS = [
  { code: "M",   label: "Mat"       },
  { code: "B",   label: "Brillant"  },
  { code: "NF",  label: "Non fini"  },
  { code: "ANO", label: "Anodisé"   },
  { code: "BRT", label: "Brut"      }
];

/**
 * Référence pièce — Convention nommage
 * Préfixe + face principale (face la plus grande en mm)
 */
const PLIALU_PREFIXES = {
  "Bavette":                      "Bv",
  "Bavette Accessoire":           "BvAcc",
  "Couvertine":                   "C",
  "Couvertine Accessoire":        "CAcc",
  "Couvre Joint":                 "CJ",
  "Departs":                      "Dep",
  "Divers":                       "Div",
  "GeExtrude":                    "GeExt",
  "Habillage":                    "Hab",
  "Lateraux":                     "Lat",
  "Lisses":                       "Lis",
  "Profils Divers":               "Prof",
  "Solin et Ge Pliées":           "Sol",
  "Solins et Ge Pliées Accessoires": "SolAcc"
};

/**
 * Tarifs matière (€/m²) — à ajuster selon vos prix
 */
const PLIALU_TARIFS = {
  "AL06":  12.00,
  "AL075": 14.50,
  "AL10":  16.00,
  "AL12":  18.00,
  "AL15":  20.00,
  "AL20":  26.00
};

// Helper : récupérer les articles d'une famille
function getArticlesByFamille(famille) {
  return PLIALU_ARTICLES.filter(a => a.famille === famille);
}

// Helper : construire la référence matière
function buildRefMatiere(epaisseurValeur, ral, finitionCode) {
  const ep = PLIALU_EPAISSEURS.find(e => e.valeur === epaisseurValeur);
  if (!ep) return "";
  const ralStr = ral ? ral.toString().replace(/\s/g, "") : "BRNF";
  const fin = finitionCode || "NF";
  if (fin === "BRT" || !ral) return `AL${ep.code}-BRNF`;
  return `AL${ep.code}-${ralStr}${fin}`;
}

// Helper : construire la référence pièce
function buildRefPiece(famille, faces) {
  const prefix = PLIALU_PREFIXES[famille] || famille.substring(0, 3).toUpperCase();
  const valeurs = Object.values(faces).filter(v => v > 0);
  if (valeurs.length === 0) return prefix;
  const facePrincipale = Math.max(...valeurs);
  return `${prefix}${facePrincipale}`;
}
