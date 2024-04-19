const options = {
  timeZone: "Asia/Kolkata",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};
const todaysDate = new Date()
  .toLocaleDateString("en-IN", options)
  .split("/")
  .reverse()
  .join("-")
  .slice(0, 10);
const suggestionCards = [
  {
    prompt: "What is the chemical formula for carbon dioxide?",
    result:
      "Carbon dioxide is a colorless gas with a faint, slightly sour taste and a faintly sweet scent. It is composed of one carbon atom bonded to two oxygen atoms. This compound is a vital part of the Earth's atmosphere, playing a crucial role in photosynthesis, the carbon cycle, and regulating the planet's temperature. Carbon dioxide is also produced by various natural processes and human activities, including burning fossil fuels, deforestation, and industrial processes.",
    date: todaysDate,
  },
  {
    prompt: "Who composed the 'Moonlight Sonata'?",
    result:
      "The 'Moonlight Sonata' is one of Ludwig van Beethoven's most famous piano compositions. Composed in 1801, it is formally known as Piano Sonata No. 14 in C-sharp minor 'Quasi una fantasia', Op. 27, No. 2. The sonata is admired for its hauntingly beautiful melody in the first movement, marked 'Adagio sostenuto', which evokes a moonlit scene. Beethoven's 'Moonlight Sonata' is a timeless masterpiece that has captivated audiences for centuries with its emotional depth and exquisite musicality.",
    date: todaysDate,
  },
  {
    prompt: "What is the largest desert in the world?",
    result:
      "The Sahara Desert is the largest hot desert in the world, covering an area of approximately 9.2 million square kilometers (3.6 million square miles). It stretches across North Africa, encompassing parts of Algeria, Chad, Egypt, Libya, Mali, Mauritania, Morocco, Niger, Western Sahara, Sudan, and Tunisia. Despite its arid climate and harsh conditions, the Sahara supports a diverse ecosystem, including desert-adapted plants and animals. The desert's vast sand dunes, rocky plateaus, and ancient oases make it a fascinating and enigmatic landscape.",
    date: todaysDate,
  },
  {
    prompt: "Who was the first person to walk on the moon?",
    result:
      "Neil Armstrong was the first person to walk on the moon. On July 20, 1969, as part of NASA's Apollo 11 mission, Armstrong descended from the lunar module Eagle and took his historic first steps onto the lunar surface. He famously declared, 'That's one small step for man, one giant leap for mankind.' Armstrong's iconic moonwalk marked a significant milestone in human history and space exploration, demonstrating the capabilities of human ingenuity and the spirit of exploration.",
    date: todaysDate,
  },
];
export default suggestionCards