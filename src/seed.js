import firebase from './lib/firebase.prod'

export function seedDatabase(firebase) {
   
const db = firebase.firestore()

const series = [
  {   
      "id":1,
      "title": 'Tiger King',
      "description": 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
      "genre": 'documentaries',
      "maturity": '18',
      "slug": 'tiger-king',
  },
  {
      "id":2,
      "title": 'Amanda Knox',
        "description": 'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
        "genre": 'documentaries',
        "maturity": '12',
        "slug": 'amanda-knox',
  },
  {   
      "id":3,
      "title": 'Super Size Me',
      "description":
        "Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds",
      "genre": 'documentaries',
      "maturity": '12',
      "slug": 'super-size-me',
  
  },
  {
      "id":4,
      "title": 'Man on Wire',
      "description":
        "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
      "genre": 'documentaries',
      "maturity": '12',
      "slug": 'man-on-wire',
  },
  {  "id":5,
      "title": 'The Office',
      "description":
      'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
      "genre": 'comedies',
      "maturity": '15',
      "slug": 'the-office',
  },
  {
      "id":6,
      "title": 'Arrested Development',
      "description":
        'The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.',
      "genre": 'comedies',
      "maturity": '15',
      "slug": 'arrested-development',
      
  },
  {
      "id":7,
      "title": 'Curb Your Enthusiasm',
      "description":
        'Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.',
      "genre": 'comedies',
      "maturity": '15',
      "slug": 'curb-your-enthusiasm',
      
  },
  {
      "id":8,
      "title": 'Family Guy',
      "description":
        'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
      "genre": 'comedies',
      "maturity": '15',
      "slug": 'family-guy',
      
  },
  {
      "id":9,
      "title": 'South Park',
      "description":
        'Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.',
      "genre": 'comedies',
      "maturity": '15',
      "slug": 'south-park',
      
  },
  {
      "id":10,
      "title": 'Peppa Pig',
      "description":
        'Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.',
      "genre": 'children',
      "maturity": '0',
      "slug": 'peppa-pig',
      
  },
  ]
  const films =[
      {
          "id":11,
          "title": 'The Prestige',
          "description":
            'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
          "genre": 'drama',
          "maturity": '15',
          "slug": 'the-prestige',
      },
      {
          "id":12,
          "title": 'Fight Club',
          "description":
            'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
          "genre": 'drama',
          "maturity": '15',
          "slug": 'fight-club',
      },
      {
          "id":13,
          "title": 'Kings Speech',
          "description":
            'King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.',
          "genre": 'drama',
          "maturity": '15',
          "slug": 'kings-speech',
      },
      { 
          "id":14,
           "title": 'The Revenant',
      "description":
        'Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.',
      "genre": 'drama',
      "maturity": '15',
      "slug": 'the-revenant',
          
      },
      {
          "id":15,
          "title": 'The Social Network',
          "description":
            'Mark Zuckerberg creates a social networking site, Facebook, with the help of his friend Eduardo Saverin. But soon, a string of lies tears their relationship apart even as Facebook connects people.',
          "genre": 'drama',
          "maturity": '12',
          "slug": 'the-social-network',
          
      },
      {
          "id":16,
          "title": 'Shutter Island',
          "description":
            'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
          "genre": 'suspense',
          "maturity": '15',
          "slug": 'shutter-island',
          
      },
      {
          "id":17,
          "title": 'Gone Girl',
          "description":
            'Nick Dunne discovers that the entire media focus has shifted on him when his wife Amy Dunne disappears on the day of their fifth wedding anniversary.',
          "genre": 'suspense',
          "maturity": '15',
          "slug": 'gone-girl',
      },
      {
          "id":18,
          "title": 'Prisoners',
          "description":
            "When the police take time to find Keller Dover's daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life.",
          "genre": 'suspense',
          "maturity": '15',
          "slug": 'prisoners',
          
      },
      {
          "id":20,
          "title": 'Seven',
          "description":
            'A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.',
          "genre": 'suspense',
          "maturity": '15',
          "slug": 'seven',
      },
      {
          "id":21,
          "title": 'Zodiac',
          "description":
            'Robert Graysmith, a cartoonist by profession, finds himself obsessively thinking about the Zodiac killer. He uses his puzzle-solving abilities to get closer to revealing the identity of the killer.',
          "genre": 'suspense',
          "maturity": '15',
          "slug": 'zodiac',
      },
      {
          "id":22,
          "title": 'Hotel Transylvania',
        "description":
          'Dracula, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Jonathan, a human.',
        "genre": 'children',
        "maturity": '0',
        "slug": 'hotel-transylvania',
      },
      {
          "id":23,
          "title": 'Despicable Me',
          "description":
            'Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.',
          "genre": 'children',
          "maturity": '0',
          "slug": 'despicable-me',
      },
      {
          "id":24,
          "title": 'Frozen',
        "description":
          'Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.',
        "genre": 'children',
        "maturity": '0',
        "slug": 'frozen',
          
      },
      {
          "id":25,
          "title": 'Spirited Away',
          "description":
            'In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.',
          "genre": 'children',
          "maturity": '0',
          "slug": 'spirited-away',
          
      },
      {
          "id":26,
          "title": 'Up',
          "description":
            "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
          "genre": 'children',
          "maturity": '0',
          "slug": 'up',
      },
      {
          "id":27,
          "title": 'Joker',
          "description":
            'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.',
          "genre": 'thriller',
          "maturity": '15',
          "slug": 'joker',
      },
      {
          "id":28,
          "title": 'A Quiet Place',
          "description":
            'The Abbott family must now face the terrors of the outside world as they fight for survival in silence. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
          "genre": 'thriller',
          "maturity": '15',
          "slug": 'a-quiet-place',
          
      },
      {
          "id":29,
          "title": 'Black Swan',
          "description":
            'Nina, a ballerina, gets the chance to play the White Swan, Princess Odette. But she finds herself slipping into madness when Thomas, the artistic director, decides that Lily might fit the role better.',
          "genre": 'thriller',
          "maturity": '15',
          "slug": 'black-swan',
      },
      {
          "id":30,
          "title": 'Nightcrawler',
          "description":
            'Louis Bloom, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them.',
          "genre": 'thriller',
          "maturity": '15',
          "slug": 'nightcrawler',
      },
      {  "id":31,
          "title": 'The Silence of The Lambs',
          "description":
            'Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.',
          "genre": 'thriller',
          "maturity": '15',
          "slug": 'the-silence-of-the-lambs',
      },
      {
          "id":32,
          "title": 'A Star Is Born',
          "description":
            'After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.',
          "genre": 'romance',
          "maturity": '15',
          "slug": 'a-star-is-born',
          
      },
  
  ]
  


// films.forEach(function(obj){
//     db.collection("films").add({
//        id: obj.id,
//        title: obj.title,
//        description: obj.description,
//        genre: obj.genre,
//        maturity: obj.maturity,
//        slug: obj.slug
//     }).then(function(docRef){
//         console.log("doc written with ID", docRef.id);
//     }).catch(function(error){
//         console.log("Error adding doc ", error)
//     });
// });



// series.forEach(function(obj){
//     db.collection("series").add({
//        id: obj.id,
//        title: obj.title,
//        description: obj.description,
//        genre: obj.genre,
//        maturity: obj.maturity,
//        slug: obj.slug
//     }).then(function(docRef){
//         console.log("doc written with ID", docRef.id);
//     }).catch(function(error){
//         console.log("Error adding doc ", error)
//     });
// });


  }
  