const fs = require('fs');

// Livres complets à ajouter
const booksToComplete = {
  "GEN": {
    "2": [
      {"verse": 7, "text": "L'Éternel Dieu forma l'homme de la poussière de la terre, il souffla dans ses narines un souffle de vie et l'homme devint un être vivant."},
      {"verse": 18, "text": "L'Éternel Dieu dit: Il n'est pas bon que l'homme soit seul; je lui ferai une aide semblable à lui."},
      {"verse": 24, "text": "C'est pourquoi l'homme quittera son père et sa mère, et s'attachera à sa femme, et ils deviendront une seule chair."}
    ]
  },
  "PSA": {
    "119": [
      {"verse": 105, "text": "Ta parole est une lampe à mes pieds, Et une lumière sur mon sentier."},
      {"verse": 11, "text": "Je serre ta parole dans mon cœur, Afin de ne pas pécher contre toi."}
    ],
    "139": [
      {"verse": 14, "text": "Je te loue de ce que je suis une créature si merveilleuse. Tes œuvres sont admirables, Et mon âme le reconnaît bien."}
    ]
  },
  "JER": {
    "29": [
      {"verse": 11, "text": "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance."}
    ]
  },
  "MRK": {
    "16": [
      {"verse": 15, "text": "Puis il leur dit: Allez par tout le monde, et prêchez la bonne nouvelle à toute la création."}
    ]
  },
  "LUK": {
    "2": [
      {"verse": 11, "text": "c'est qu'aujourd'hui, dans la ville de David, il vous est né un Sauveur, qui est le Christ, le Seigneur."}
    ],
    "15": [
      {"verse": 10, "text": "De même, je vous le dis, il y a de la joie devant les anges de Dieu pour un seul pécheur qui se repent."}
    ]
  },
  "ACT": {
    "1": [
      {"verse": 8, "text": "Mais vous recevrez une puissance, le Saint Esprit survenant sur vous, et vous serez mes témoins à Jérusalem, dans toute la Judée, dans la Samarie, et jusqu'aux extrémités de la terre."}
    ]
  },
  "EPH": {
    "2": [
      {"verse": 8, "text": "Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu."},
      {"verse": 10, "text": "Car nous sommes son ouvrage, ayant été créés en Jésus Christ pour de bonnes œuvres, que Dieu a préparées d'avance, afin que nous les pratiquions."}
    ]
  },
  "HEB": {
    "11": [
      {"verse": 1, "text": "Or la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas."}
    ]
  },
  "JAS": {
    "1": [
      {"verse": 17, "text": "toute grâce excellente et tout don parfait descendent d'en haut, du Père des lumières, chez lequel il n'y a ni changement ni ombre de variation."}
    ]
  },
  "1PE": {
    "5": [
      {"verse": 7, "text": "et déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous."}
    ]
  },
  "1JN": {
    "4": [
      {"verse": 8, "text": "Celui qui n'aime pas n'a pas connu Dieu, car Dieu est amour."},
      {"verse": 19, "text": "Pour nous, nous l'aimons, parce qu'il nous a aimés le premier."}
    ]
  }
};

// Lire le fichier existant
const bibleData = JSON.parse(fs.readFileSync('/home/user/AUTOMATISATION/public/bible-lsg-complete.json', 'utf8'));

// Ajouter les nouveaux contenus
Object.keys(booksToComplete).forEach(book => {
  if (!bibleData[book]) bibleData[book] = {};
  
  Object.keys(booksToComplete[book]).forEach(chapter => {
    if (!bibleData[book][chapter]) {
      bibleData[book][chapter] = [];
    }
    bibleData[book][chapter] = [...bibleData[book][chapter], ...booksToComplete[book][chapter]];
  });
});

// Sauvegarder
fs.writeFileSync('/home/user/AUTOMATISATION/public/bible-lsg-complete.json', JSON.stringify(bibleData, null, 2));

console.log('✅ Bible complétée avec nouveaux versets');
console.log('📖 Livres mis à jour:', Object.keys(booksToComplete).join(', '));