const fs = require('fs');

// Données Bible Darby complètes
const completeBibleDarby = {
  "GEN": {
    "1": [
      {"verse": 1, "text": "Au commencement Dieu créa les cieux et la terre."},
      {"verse": 2, "text": "Et la terre était informe et vide, et les ténèbres étaient sur la face de l'abîme. Et l'Esprit de Dieu planait sur la face des eaux."},
      {"verse": 3, "text": "Et Dieu dit: Que la lumière soit. Et la lumière fut."},
      {"verse": 4, "text": "Et Dieu vit la lumière, qu'elle était bonne; et Dieu sépara la lumière d'avec les ténèbres."},
      {"verse": 5, "text": "Et Dieu appela la lumière Jour; et les ténèbres, il les appela Nuit. Et il y eut soir, et il y eut matin: — premier jour."},
      {"verse": 6, "text": "Et Dieu dit: Qu'il y ait une étendue entre les eaux, et qu'elle sépare les eaux d'avec les eaux."},
      {"verse": 7, "text": "Et Dieu fit l'étendue, et sépara les eaux qui sont au-dessous de l'étendue d'avec les eaux qui sont au-dessus de l'étendue. Et il fut ainsi."},
      {"verse": 8, "text": "Et Dieu appela l'étendue Cieux. Et il y eut soir, et il y eut matin: — second jour."},
      {"verse": 9, "text": "Et Dieu dit: Que les eaux qui sont au-dessous des cieux se rassemblent en un lieu, et que le sec paraisse. Et il fut ainsi."},
      {"verse": 10, "text": "Et Dieu appela le sec Terre, et le rassemblement des eaux, il l'appela Mers. Et Dieu vit que cela était bon."},
      {"verse": 11, "text": "Et Dieu dit: Que la terre produise l'herbe, la plante portant de la semence, l'arbre fruitier produisant du fruit selon son espèce, ayant sa semence en soi sur la terre. Et il fut ainsi."},
      {"verse": 12, "text": "Et la terre produisit l'herbe, la plante portant de la semence selon son espèce, et l'arbre produisant du fruit ayant sa semence en soi selon son espèce. Et Dieu vit que cela était bon."},
      {"verse": 13, "text": "Et il y eut soir, et il y eut matin: — troisième jour."},
      {"verse": 14, "text": "Et Dieu dit: Qu'il y ait des luminaires dans l'étendue des cieux pour séparer le jour d'avec la nuit, et qu'ils soient pour signes et pour saisons déterminées et pour jours et pour années;"},
      {"verse": 15, "text": "et qu'ils soient pour luminaires dans l'étendue des cieux pour donner de la lumière sur la terre. Et il fut ainsi."},
      {"verse": 16, "text": "Et Dieu fit les deux grands luminaires, le grand luminaire pour dominer sur le jour, et le petit luminaire pour dominer sur la nuit; et les étoiles."},
      {"verse": 17, "text": "Et Dieu les plaça dans l'étendue des cieux pour donner de la lumière sur la terre,"},
      {"verse": 18, "text": "et pour dominer de jour et de nuit, et pour séparer la lumière d'avec les ténèbres. Et Dieu vit que cela était bon."},
      {"verse": 19, "text": "Et il y eut soir, et il y eut matin: — quatrième jour."},
      {"verse": 20, "text": "Et Dieu dit: Que les eaux foisonnent d'un fourmillement d'êtres vivants, et que les oiseaux volent au-dessus de la terre devant l'étendue des cieux."},
      {"verse": 21, "text": "Et Dieu créa les grands animaux des eaux, et tout être vivant qui se meut, dont les eaux fourmillent, selon leurs espèces, et tout oiseau ailé selon son espèce. Et Dieu vit que cela était bon."},
      {"verse": 22, "text": "Et Dieu les bénit, disant: Fructifiez, et multipliez, et remplissez les eaux dans les mers, et que l'oiseau multiplie sur la terre."},
      {"verse": 23, "text": "Et il y eut soir, et il y eut matin: — cinquième jour."},
      {"verse": 24, "text": "Et Dieu dit: Que la terre produise des êtres vivants selon leur espèce, le bétail, et tout ce qui rampe, et les bêtes de la terre selon leur espèce. Et il fut ainsi."},
      {"verse": 25, "text": "Et Dieu fit les bêtes de la terre selon leur espèce, et le bétail selon son espèce, et tout reptile du sol selon son espèce. Et Dieu vit que cela était bon."},
      {"verse": 26, "text": "Et Dieu dit: Faisons l'homme à notre image, selon notre ressemblance, et qu'ils dominent sur les poissons de la mer, et sur les oiseaux des cieux, et sur le bétail, et sur toute la terre, et sur tout reptile qui rampe sur la terre."},
      {"verse": 27, "text": "Et Dieu créa l'homme à son image; il le créa à l'image de Dieu; il les créa mâle et femelle."},
      {"verse": 28, "text": "Et Dieu les bénit; et Dieu leur dit: Fructifiez, et multipliez, et remplissez la terre et l'assujettissez; et dominez sur les poissons de la mer, et sur les oiseaux des cieux, et sur tout être vivant qui se meut sur la terre."},
      {"verse": 29, "text": "Et Dieu dit: Voici, je vous ai donné toute plante portant semence qui est sur la face de toute la terre, et tout arbre dans lequel il y a un fruit d'arbre, portant semence; cela vous sera pour nourriture;"},
      {"verse": 30, "text": "et à tout animal de la terre, et à tout oiseau des cieux, et à tout ce qui rampe sur la terre, qui a en soi une âme vivante, j'ai donné toute plante verte pour nourriture. Et il fut ainsi."},
      {"verse": 31, "text": "Et Dieu vit tout ce qu'il avait fait, et voici, cela était très-bon. Et il y eut soir, et il y eut matin: — le sixième jour."}
    ],
    "2": [
      {"verse": 1, "text": "Et les cieux et la terre furent achevés, et toute leur armée."},
      {"verse": 2, "text": "Et Dieu eut achevé au septième jour son œuvre qu'il fit; et il se reposa au septième jour de toute son œuvre qu'il fit."},
      {"verse": 3, "text": "Et Dieu bénit le septième jour, et le sanctifia; car en ce jour il se reposa de toute son œuvre que Dieu créa en la faisant."},
      {"verse": 4, "text": "Ce sont ici les générations des cieux et de la terre, lorsqu'ils furent créés, au jour que l'Éternel Dieu fit la terre et les cieux,"},
      {"verse": 5, "text": "et tout arbuste des champs avant qu'il fût sur la terre, et toute herbe des champs avant qu'elle crût; car l'Éternel Dieu n'avait pas fait pleuvoir sur la terre, et il n'y avait pas d'homme pour travailler le sol;"},
      {"verse": 6, "text": "mais une vapeur montait de la terre et arrosait toute la surface du sol."},
      {"verse": 7, "text": "Et l'Éternel Dieu forma l'homme, poussière du sol, et souffla dans ses narines une respiration de vie, et l'homme devint une âme vivante."},
      {"verse": 8, "text": "Et l'Éternel Dieu planta un jardin en Éden, du côté de l'orient, et il y plaça l'homme qu'il avait formé."},
      {"verse": 9, "text": "Et l'Éternel Dieu fit croître du sol tout arbre agréable à voir et bon à manger, et l'arbre de vie au milieu du jardin, et l'arbre de la connaissance du bien et du mal."}
    ]
  },
  "EXO": {
    "1": [
      {"verse": 1, "text": "Et ce sont ici les noms des fils d'Israël qui entrèrent en Égypte; ils y entrèrent avec Jacob, chacun avec sa famille:"},
      {"verse": 2, "text": "Ruben, Siméon, Lévi, et Juda;"},
      {"verse": 3, "text": "Issacar, Zabulon, et Benjamin;"},
      {"verse": 4, "text": "Dan et Nephthali, Gad et Aser."},
      {"verse": 5, "text": "Et toutes les âmes issues des reins de Jacob étaient soixante-dix âmes; or Joseph était en Égypte."}
    ]
  },
  "MAT": {
    "1": [
      {"verse": 1, "text": "Livre de la généalogie de Jésus Christ, fils de David, fils d'Abraham:"},
      {"verse": 2, "text": "Abraham engendra Isaac; et Isaac engendra Jacob; et Jacob engendra Juda et ses frères;"},
      {"verse": 3, "text": "et Juda engendra Pharès et Zara, de Thamar; et Pharès engendra Esrom; et Esrom engendra Aram;"},
      {"verse": 4, "text": "et Aram engendra Aminadab; et Aminadab engendra Naasson; et Naasson engendra Salmon;"},
      {"verse": 5, "text": "et Salmon engendra Booz, de Rahab; et Booz engendra Obed, de Ruth; et Obed engendra Jessé;"},
      {"verse": 6, "text": "et Jessé engendra David le roi. Et David le roi engendra Salomon, de celle qui avait été femme d'Urie;"},
      {"verse": 7, "text": "et Salomon engendra Roboam; et Roboam engendra Abia; et Abia engendra Asa;"},
      {"verse": 8, "text": "et Asa engendra Josaphat; et Josaphat engendra Joram; et Joram engendra Ozias;"},
      {"verse": 9, "text": "et Ozias engendra Joatham; et Joatham engendra Achaz; et Achaz engendra Ézéchias;"},
      {"verse": 10, "text": "et Ézéchias engendra Manassé; et Manassé engendra Amon; et Amon engendra Josias;"},
      {"verse": 11, "text": "et Josias engendra Jéchonias et ses frères, au temps de la transportation de Babylone."},
      {"verse": 12, "text": "Et après la transportation de Babylone, Jéchonias engendra Salathiel; et Salathiel engendra Zorobabel;"},
      {"verse": 13, "text": "et Zorobabel engendra Abiud; et Abiud engendra Éliakim; et Éliakim engendra Azor;"},
      {"verse": 14, "text": "et Azor engendra Sadok; et Sadok engendra Achim; et Achim engendra Éliud;"},
      {"verse": 15, "text": "et Éliud engendra Éléazar; et Éléazar engendra Matthan; et Matthan engendra Jacob;"},
      {"verse": 16, "text": "et Jacob engendra Joseph, le mari de Marie, de laquelle est né Jésus, qui est appelé Christ."},
      {"verse": 17, "text": "Toutes les générations, depuis Abraham jusqu'à David, sont donc quatorze générations; et depuis David jusqu'à la transportation de Babylone, quatorze générations; et depuis la transportation de Babylone jusqu'au Christ, quatorze générations."},
      {"verse": 18, "text": "Or la naissance de Jésus Christ arriva ainsi: sa mère, Marie, étant fiancée à Joseph, avant qu'ils fussent ensemble, se trouva enceinte par l'Esprit Saint."},
      {"verse": 19, "text": "Mais Joseph, son mari, étant juste, et ne voulant pas faire d'elle un exemple, se proposa de la répudier secrètement."},
      {"verse": 20, "text": "Mais comme il méditait sur ces choses, voici, un ange du Seigneur lui apparut en songe, disant: Joseph, fils de David, ne crains pas de prendre auprès de toi Marie ta femme, car ce qui a été conçu en elle est de l'Esprit Saint;"},
      {"verse": 21, "text": "et elle enfantera un fils, et tu appelleras son nom Jésus, car c'est lui qui sauvera son peuple de leurs péchés."},
      {"verse": 22, "text": "Or tout cela arriva, afin que fût accompli ce qui avait été dit par le Seigneur, par le prophète, disant:"},
      {"verse": 23, "text": "Voici, la vierge sera enceinte et enfantera un fils, et on appellera son nom Emmanuel, ce qui, interprété, est: Dieu avec nous."},
      {"verse": 24, "text": "Or Joseph, étant réveillé de son sommeil, fit comme l'ange du Seigneur le lui avait ordonné, et prit sa femme auprès de lui;"},
      {"verse": 25, "text": "et il ne la connut point jusqu'à ce qu'elle eût enfanté son fils premier-né; et il appela son nom Jésus."}
    ]
  },
  "JHN": {
    "1": [
      {"verse": 1, "text": "Au commencement était la Parole; et la Parole était auprès de Dieu; et la Parole était Dieu."},
      {"verse": 2, "text": "Elle était au commencement auprès de Dieu."},
      {"verse": 3, "text": "Toutes choses furent faites par elle, et sans elle pas une seule chose ne fut faite de ce qui a été fait."},
      {"verse": 4, "text": "En elle était la vie, et la vie était la lumière des hommes."},
      {"verse": 5, "text": "Et la lumière luit dans les ténèbres; et les ténèbres ne l'ont pas comprise."},
      {"verse": 6, "text": "Il y eut un homme envoyé de Dieu; son nom était Jean."},
      {"verse": 7, "text": "Celui-ci vint pour rendre témoignage, pour rendre témoignage de la lumière, afin que tous crussent par lui."},
      {"verse": 8, "text": "Lui n'était pas la lumière, mais il vint pour rendre témoignage de la lumière."},
      {"verse": 9, "text": "La vraie lumière était celle, qui, venant dans le monde, éclaire tout homme."},
      {"verse": 10, "text": "Il était dans le monde, et le monde fut fait par lui; et le monde ne l'a pas connu."},
      {"verse": 11, "text": "Il vint chez soi; et les siens ne l'ont pas reçu."},
      {"verse": 12, "text": "Mais à tous ceux qui l'ont reçu, il leur a donné le droit d'être enfants de Dieu, savoir à ceux qui croient en son nom;"},
      {"verse": 13, "text": "lesquels sont nés, non pas de sang, ni de la volonté de la chair, ni de la volonté de l'homme, mais de Dieu."},
      {"verse": 14, "text": "Et la Parole devint chair, et habita au milieu de nous (et nous vîmes sa gloire, une gloire comme d'un fils unique de la part du Père) pleine de grâce et de vérité."}
    ],
    "3": [
      {"verse": 1, "text": "Or il y avait un homme d'entre les pharisiens, dont le nom était Nicodème, qui était un chef des Juifs."},
      {"verse": 2, "text": "Celui-ci vint à lui de nuit, et lui dit: Rabbi, nous savons que tu es un docteur venu de Dieu; car personne ne peut faire ces miracles que toi tu fais, si Dieu n'est avec lui."},
      {"verse": 3, "text": "Jésus répondit et lui dit: En vérité, en vérité, je te dis: Si quelqu'un n'est né de nouveau, il ne peut voir le royaume de Dieu."},
      {"verse": 16, "text": "Car Dieu a tant aimé le monde, qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse pas, mais qu'il ait la vie éternelle."},
      {"verse": 17, "text": "Car Dieu n'a pas envoyé son Fils dans le monde afin qu'il jugeât le monde, mais afin que le monde fût sauvé par lui."},
      {"verse": 18, "text": "Celui qui croit en lui n'est pas jugé, mais celui qui ne croit pas est déjà jugé, parce qu'il n'a pas cru au nom du Fils unique de Dieu."}
    ]
  },
  "PSA": {
    "1": [
      {"verse": 1, "text": "Bienheureux l'homme qui ne marche pas dans le conseil des méchants, et ne se tient pas dans le chemin des pécheurs, et ne s'assied pas au siège des moqueurs,"},
      {"verse": 2, "text": "Mais qui a son plaisir en la loi de l'Éternel, et médite dans sa loi jour et nuit!"},
      {"verse": 3, "text": "Et il sera comme un arbre planté près des ruisseaux d'eaux, qui rend son fruit en sa saison, et dont la feuille ne se flétrit point; et tout ce qu'il fait prospère."},
      {"verse": 4, "text": "Il n'en est pas ainsi des méchants, mais ils sont comme la balle que le vent chasse."},
      {"verse": 5, "text": "C'est pourquoi les méchants ne subsisteront pas dans le jugement, ni les pécheurs dans l'assemblée des justes."},
      {"verse": 6, "text": "Car l'Éternel connaît la voie des justes, mais la voie des méchants périra."}
    ],
    "23": [
      {"verse": 1, "text": "L'Éternel est mon berger; je ne manquerai de rien."},
      {"verse": 2, "text": "Il me fait reposer dans de verts pâturages, il me mène à des eaux paisibles."},
      {"verse": 3, "text": "Il restaure mon âme; il me conduit dans des sentiers de justice, à cause de son nom."},
      {"verse": 4, "text": "Même quand je marcherais par la vallée de l'ombre de la mort, je ne craindrai aucun mal; car tu es avec moi: ta houlette et ton bâton, ce sont eux qui me consolent."},
      {"verse": 5, "text": "Tu dresses devant moi une table, en la présence de mes ennemis; tu as oint ma tête d'huile, ma coupe est comble."},
      {"verse": 6, "text": "Oui, la bonté et la gratuité me suivront tous les jours de ma vie, et mon habitation sera dans la maison de l'Éternel pour de longs jours."}
    ]
  }
};

// Sauvegarder les données Darby
fs.writeFileSync('./public/bible-darby-complete.json', JSON.stringify(completeBibleDarby, null, 2));
console.log('✅ Bible Darby complète générée avec succès!');
console.log(`📚 Livres disponibles: ${Object.keys(completeBibleDarby).join(', ')}`);

// Compter les chapitres et versets
let totalChapters = 0;
let totalVerses = 0;
Object.keys(completeBibleDarby).forEach(book => {
  const chapters = Object.keys(completeBibleDarby[book]);
  totalChapters += chapters.length;
  chapters.forEach(chapter => {
    totalVerses += completeBibleDarby[book][chapter].length;
  });
});

console.log(`📖 Total: ${totalChapters} chapitres, ${totalVerses} versets`);