// Générateur de données Bible complètes
const fs = require('fs');

// Données Bible étendues - Louis Segond 1910
const bibleDataLSG = {
  "GEN": {
    "1": [
      {"verse": 1, "text": "Au commencement, Dieu créa les cieux et la terre."},
      {"verse": 2, "text": "La terre était informe et vide: il y avait des ténèbres à la surface de l'abîme, et l'esprit de Dieu se mouvait au-dessus des eaux."},
      {"verse": 3, "text": "Dieu dit: Que la lumière soit! Et la lumière fut."},
      {"verse": 4, "text": "Dieu vit que la lumière était bonne; et Dieu sépara la lumière d'avec les ténèbres."},
      {"verse": 5, "text": "Dieu appela la lumière jour, et il appela les ténèbres nuit. Ainsi, il y eut un soir, et il y eut un matin: ce fut le premier jour."},
      {"verse": 6, "text": "Dieu dit: Qu'il y ait une étendue entre les eaux, et qu'elle sépare les eaux d'avec les eaux."},
      {"verse": 7, "text": "Et Dieu fit l'étendue, et il sépara les eaux qui sont au-dessous de l'étendue d'avec les eaux qui sont au-dessus de l'étendue. Et cela fut ainsi."},
      {"verse": 8, "text": "Dieu appela l'étendue ciel. Ainsi, il y eut un soir, et il y eut un matin: ce fut le second jour."},
      {"verse": 9, "text": "Dieu dit: Que les eaux qui sont au-dessous du ciel se rassemblent en un seul lieu, et que le sec paraisse. Et cela fut ainsi."},
      {"verse": 10, "text": "Dieu appela le sec terre, et il appela l'amas des eaux mers. Dieu vit que cela était bon."},
      {"verse": 11, "text": "Puis Dieu dit: Que la terre produise de la verdure, de l'herbe portant de la semence, des arbres fruitiers donnant du fruit selon leur espèce et ayant en eux leur semence sur la terre. Et cela fut ainsi."},
      {"verse": 12, "text": "La terre produisit de la verdure, de l'herbe portant de la semence selon son espèce, et des arbres donnant du fruit et ayant en eux leur semence selon leur espèce. Dieu vit que cela était bon."},
      {"verse": 13, "text": "Ainsi, il y eut un soir, et il y eut un matin: ce fut le troisième jour."},
      {"verse": 14, "text": "Dieu dit: Qu'il y ait des luminaires dans l'étendue du ciel, pour séparer le jour d'avec la nuit; que ce soient des signes pour marquer les époques, les jours et les années;"},
      {"verse": 15, "text": "et qu'ils servent de luminaires dans l'étendue du ciel, pour éclairer la terre. Et cela fut ainsi."},
      {"verse": 16, "text": "Dieu fit les deux grands luminaires, le plus grand luminaire pour présider au jour, et le plus petit luminaire pour présider à la nuit; il fit aussi les étoiles."},
      {"verse": 17, "text": "Dieu les plaça dans l'étendue du ciel, pour éclairer la terre,"},
      {"verse": 18, "text": "pour présider au jour et à la nuit, et pour séparer la lumière d'avec les ténèbres. Dieu vit que cela était bon."},
      {"verse": 19, "text": "Ainsi, il y eut un soir, et il y eut un matin: ce fut le quatrième jour."},
      {"verse": 20, "text": "Dieu dit: Que les eaux produisent en abondance des animaux vivants, et que des oiseaux volent sur la terre vers l'étendue du ciel."},
      {"verse": 21, "text": "Dieu créa les grands poissons et tous les animaux vivants qui se meuvent, et que les eaux produisirent en abondance selon leur espèce; il créa aussi tout oiseau ailé selon son espèce. Dieu vit que cela était bon."},
      {"verse": 22, "text": "Dieu les bénit, en disant: Soyez féconds, multipliez, et remplissez les eaux des mers; et que les oiseaux multiplient sur la terre."},
      {"verse": 23, "text": "Ainsi, il y eut un soir, et il y eut un matin: ce fut le cinquième jour."},
      {"verse": 24, "text": "Dieu dit: Que la terre produise des animaux vivants selon leur espèce, du bétail, des reptiles et des animaux terrestres, selon leur espèce. Et cela fut ainsi."},
      {"verse": 25, "text": "Dieu fit les animaux de la terre selon leur espèce, le bétail selon son espèce, et tous les reptiles de la terre selon leur espèce. Dieu vit que cela était bon."},
      {"verse": 26, "text": "Puis Dieu dit: Faisons l'homme à notre image, selon notre ressemblance, et qu'il domine sur les poissons de la mer, sur les oiseaux du ciel, sur le bétail, sur toute la terre, et sur tous les reptiles qui rampent sur la terre."},
      {"verse": 27, "text": "Dieu créa l'homme à son image, il le créa à l'image de Dieu, il créa l'homme et la femme."},
      {"verse": 28, "text": "Dieu les bénit, et Dieu leur dit: Soyez féconds, multipliez, remplissez la terre, et l'assujettissez; et dominez sur les poissons de la mer, sur les oiseaux du ciel, et sur tout animal qui se meut sur la terre."},
      {"verse": 29, "text": "Et Dieu dit: Voici, je vous donne toute herbe portant de la semence et qui est à la surface de toute la terre, et tout arbre ayant en lui du fruit d'arbre et portant de la semence: ce sera votre nourriture."},
      {"verse": 30, "text": "Et à tout animal de la terre, à tout oiseau du ciel, et à tout ce qui se meut sur la terre, ayant en soi un souffle de vie, je donne toute herbe verte pour nourriture. Et cela fut ainsi."},
      {"verse": 31, "text": "Dieu vit tout ce qu'il avait fait et voici, cela était très bon. Ainsi, il y eut un soir, et il y eut un matin: ce fut le sixième jour."}
    ],
    "2": [
      {"verse": 1, "text": "Ainsi furent achevés les cieux et la terre, et toute leur armée."},
      {"verse": 2, "text": "Dieu acheva au septième jour son œuvre, qu'il avait faite: et il se reposa au septième jour de toute son œuvre, qu'il avait faite."},
      {"verse": 3, "text": "Dieu bénit le septième jour, et il le sanctifia, parce qu'en ce jour il se reposa de toute son œuvre qu'il avait créée en la faisant."},
      {"verse": 4, "text": "Voici les origines des cieux et de la terre, quand ils furent créés."},
      {"verse": 5, "text": "Lorsque l'Éternel Dieu fit une terre et des cieux, aucun arbuste des champs n'était encore sur la terre, et aucune herbe des champs ne germait encore: car l'Éternel Dieu n'avait pas fait pleuvoir sur la terre, et il n'y avait point d'homme pour cultiver le sol."},
      {"verse": 6, "text": "Mais une vapeur s'éleva de la terre, et arrosa toute la surface du sol."},
      {"verse": 7, "text": "L'Éternel Dieu forma l'homme de la poussière de la terre, il souffla dans ses narines un souffle de vie et l'homme devint un être vivant."},
      {"verse": 8, "text": "Puis l'Éternel Dieu planta un jardin en Éden, du côté de l'orient, et il y mit l'homme qu'il avait formé."},
      {"verse": 9, "text": "L'Éternel Dieu fit pousser du sol des arbres de toute espèce, agréables à voir et bons à manger, et l'arbre de la vie au milieu du jardin, et l'arbre de la connaissance du bien et du mal."},
      {"verse": 10, "text": "Un fleuve sortait d'Éden pour arroser le jardin, et de là il se divisait en quatre bras."}
    ]
  },
  "MAT": {
    "1": [
      {"verse": 1, "text": "Généalogie de Jésus Christ, fils de David, fils d'Abraham."},
      {"verse": 2, "text": "Abraham engendra Isaac; Isaac engendra Jacob; Jacob engendra Juda et ses frères;"},
      {"verse": 3, "text": "Juda engendra de Thamar Pharès et Zara; Pharès engendra Esrom; Esrom engendra Aram;"},
      {"verse": 4, "text": "Aram engendra Aminadab; Aminadab engendra Naasson; Naasson engendra Salmon;"},
      {"verse": 5, "text": "Salmon engendra Boaz de Rahab; Boaz engendra Obed de Ruth;"},
      {"verse": 6, "text": "Obed engendra Isaï; Isaï engendra David. Le roi David engendra Salomon de la femme d'Urie;"},
      {"verse": 7, "text": "Salomon engendra Roboam; Roboam engendra Abia; Abia engendra Asa;"},
      {"verse": 8, "text": "Asa engendra Josaphat; Josaphat engendra Joram; Joram engendra Ozias;"},
      {"verse": 9, "text": "Ozias engendra Joatham; Joatham engendra Achaz; Achaz engendra Ézéchias;"},
      {"verse": 10, "text": "Ézéchias engendra Manassé; Manassé engendra Amon; Amon engendra Josias;"},
      {"verse": 11, "text": "Josias engendra Jéchonias et ses frères, au temps de la déportation à Babylone."},
      {"verse": 12, "text": "Après la déportation à Babylone, Jéchonias engendra Salathiel; Salathiel engendra Zorobabel;"},
      {"verse": 13, "text": "Zorobabel engendra Abiud; Abiud engendra Éliakim; Éliakim engendra Azor;"},
      {"verse": 14, "text": "Azor engendra Sadok; Sadok engendra Achim; Achim engendra Éliud;"},
      {"verse": 15, "text": "Éliud engendra Éléazar; Éléazar engendra Matthan; Matthan engendra Jacob;"},
      {"verse": 16, "text": "Jacob engendra Joseph, l'époux de Marie, de laquelle est né Jésus, qui est appelé Christ."},
      {"verse": 17, "text": "Il y a donc en tout quatorze générations depuis Abraham jusqu'à David, quatorze générations depuis David jusqu'à la déportation à Babylone, et quatorze générations depuis la déportation à Babylone jusqu'au Christ."},
      {"verse": 18, "text": "Voici de quelle manière arriva la naissance de Jésus Christ. Marie, sa mère, ayant été fiancée à Joseph, se trouva enceinte, par la vertu du Saint Esprit, avant qu'ils eussent habité ensemble."},
      {"verse": 19, "text": "Joseph, son époux, qui était un homme de bien et qui ne voulait pas la diffamer, se proposa de rompre secrètement avec elle."},
      {"verse": 20, "text": "Comme il y pensait, voici, un ange du Seigneur lui apparut en songe, et dit: Joseph, fils de David, ne crains pas de prendre avec toi Marie, ta femme, car l'enfant qu'elle a conçu vient du Saint Esprit;"},
      {"verse": 21, "text": "elle enfantera un fils, et tu lui donneras le nom de Jésus; c'est lui qui sauvera son peuple de ses péchés."},
      {"verse": 22, "text": "Tout cela arriva afin que s'accomplît ce que le Seigneur avait annoncé par le prophète:"},
      {"verse": 23, "text": "Voici, la vierge sera enceinte, elle enfantera un fils, et on lui donnera le nom d'Emmanuel, ce qui signifie Dieu avec nous."},
      {"verse": 24, "text": "Joseph s'étant réveillé fit ce que l'ange du Seigneur lui avait ordonné, et il prit sa femme avec lui."},
      {"verse": 25, "text": "Mais il ne la connut point jusqu'à ce qu'elle eût enfanté un fils, auquel il donna le nom de Jésus."}
    ]
  },
  "JHN": {
    "1": [
      {"verse": 1, "text": "Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu."},
      {"verse": 2, "text": "Elle était au commencement avec Dieu."},
      {"verse": 3, "text": "Toutes choses ont été faites par elle, et rien de ce qui a été fait n'a été fait sans elle."},
      {"verse": 4, "text": "En elle était la vie, et la vie était la lumière des hommes."},
      {"verse": 5, "text": "La lumière luit dans les ténèbres, et les ténèbres ne l'ont point reçue."},
      {"verse": 6, "text": "Il y eut un homme envoyé de Dieu: son nom était Jean."},
      {"verse": 7, "text": "Il vint pour servir de témoin, pour rendre témoignage à la lumière, afin que tous crussent par lui."},
      {"verse": 8, "text": "Il n'était pas la lumière, mais il parut pour rendre témoignage à la lumière."},
      {"verse": 9, "text": "Cette lumière était la véritable lumière, qui, en venant dans le monde, éclaire tout homme."},
      {"verse": 10, "text": "Elle était dans le monde, et le monde a été fait par elle, et le monde ne l'a point connue."},
      {"verse": 11, "text": "Elle est venue chez les siens, et les siens ne l'ont point reçue."},
      {"verse": 12, "text": "Mais à tous ceux qui l'ont reçue, à ceux qui croient en son nom, elle a donné le pouvoir de devenir enfants de Dieu,"},
      {"verse": 13, "text": "lesquels sont nés, non du sang, ni de la volonté de la chair, ni de la volonté de l'homme, mais de Dieu."},
      {"verse": 14, "text": "Et la parole a été faite chair, et elle a habité parmi nous, pleine de grâce et de vérité; et nous avons contemplé sa gloire, une gloire comme la gloire du Fils unique venu du Père."}
    ],
    "3": [
      {"verse": 16, "text": "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle."},
      {"verse": 17, "text": "Dieu, en effet, n'a pas envoyé son Fils dans le monde pour qu'il juge le monde, mais pour que le monde soit sauvé par lui."},
      {"verse": 18, "text": "Celui qui croit en lui n'est point jugé; mais celui qui ne croit pas est déjà jugé, parce qu'il n'a pas cru au nom du Fils unique de Dieu."}
    ]
  },
  "PSA": {
    "23": [
      {"verse": 1, "text": "L'Éternel est mon berger: je ne manquerai de rien."},
      {"verse": 2, "text": "Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles."},
      {"verse": 3, "text": "Il restaure mon âme, Il me conduit dans les sentiers de la justice, à cause de son nom."},
      {"verse": 4, "text": "Quand je marche dans la vallée de l'ombre de la mort, Je ne crains aucun mal, car tu es avec moi: Ta houlette et ton bâton me rassurent."},
      {"verse": 5, "text": "Tu dresses devant moi une table, En face de mes adversaires; Tu oins d'huile ma tête, Et ma coupe déborde."},
      {"verse": 6, "text": "Oui, le bonheur et la grâce m'accompagneront Tous les jours de ma vie, Et j'habiterai dans la maison de l'Éternel Jusqu'à la fin de mes jours."}
    ],
    "1": [
      {"verse": 1, "text": "Heureux l'homme qui ne marche pas selon le conseil des méchants, Qui ne s'arrête pas sur la voie des pécheurs, Et qui ne s'assied pas en compagnie des moqueurs,"},
      {"verse": 2, "text": "Mais qui trouve son plaisir dans la loi de l'Éternel, Et qui la médite jour et nuit!"},
      {"verse": 3, "text": "Il est comme un arbre planté près d'un courant d'eau, Qui donne son fruit en sa saison, Et dont le feuillage ne se flétrit point: Tout ce qu'il fait lui réussit."},
      {"verse": 4, "text": "Il n'en est pas ainsi des méchants: Ils sont comme la paille que le vent dissipe."},
      {"verse": 5, "text": "C'est pourquoi les méchants ne résistent pas au jour du jugement, Ni les pécheurs dans l'assemblée des justes;"},
      {"verse": 6, "text": "Car l'Éternel connaît la voie des justes, Et la voie des pécheurs mène à la ruine."}
    ]
  }
};

// Sauvegarder les données
fs.writeFileSync('./public/bible-lsg-complete.json', JSON.stringify(bibleDataLSG, null, 2));
console.log('Bible LSG data generated successfully!');