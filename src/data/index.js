import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min:4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  },
})

const capitalizeFirstLetter = ([first, ...rest]) =>
  first.toLocaleUpperCase() + rest.join('')

const data = []

for (let i = 0; i < 20; i++) {
  data.push({
    id: i,
    title: capitalizeFirstLetter(
      lorem.generateWords(Math.ceil(Math.random() * 5) + 4)
    ),
    body: capitalizeFirstLetter(
      lorem.generateSentences(Math.ceil(Math.random() * 30) + 10)
    )
  })
}

export { data }
