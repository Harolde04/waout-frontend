## Ce qui change

- **Carte qui ne s'affichait plus** : les tuiles CARTO exigent maintenant une clé API (la carte affichait « API KEY REQUIRED »). Remplacées par Esri World Street Map (gratuit, sans clé) pour la carte globale et la mini-carte de détail.
- **Mélange de langues sur la carte** : Esri affiche tous les libellés en alphabet latin (anglais), au lieu de la langue locale de chaque pays. Les popups de la carte (« Gratuit », prix, « Voir ») sont maintenant traduites via `t()`.
- **Listes de pays supprimées** : cliquer sur un continent (barre Zone ou menu ☰) filtre directement les événements par continent (`CCONT` remplace `CP`, `setPays`/`menuPays` supprimés).
- **Partage** : vrais logos SVG WhatsApp et Instagram (+ icône lien). Le bouton Instagram ouvre le partage natif (`navigator.share`), sinon copie le lien.
- **Filtres sorties** : `Tous / Où manger / Culture / Loisirs / Bons plans`. Un groupe sélectionné affiche une ligne de sous-filtres (ex. Restaurant, Brunch, À volonté, Café). Bons plans = sorties gratuites. Nouveaux textes traduits dans les 9 langues.

## À savoir pour la revue

- Les sous-filtres reposent sur la colonne `cat` des sorties dans Supabase. Nouvelles valeurs attendues : `brunch`, `buffet`, `cafe`, `expo`, `theatre`, `parc`, `jeux`, `photo`. Les valeurs existantes (`resto`, `escape`, `musee`, `cinema`, `sport`, `activite`) restent compatibles.
- Testé en local : tuiles de carte chargées, filtre Afrique → uniquement Côte d'Ivoire/Sénégal, groupes et sous-filtres des sorties, rendu des logos de partage.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
