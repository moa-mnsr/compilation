// FIRST COLUMN OF POEM - in the code, we will call this box "Hippo"

// data for holding which line we are on
let hippoNumber = 0

// holding the content for each line
const hippos = [
  { text: "not a portrait bare"},
  { text: "჻"},
  { text: "public waters"},
  { text: "჻჻"},
  { text: "of dying perfect"},
  { text: "჻"},
  { text: "how is care"},
  { text: "at our sleep"},
  { text: "჻"},
  { text: "჻჻"},
  { text: "it was good to have"},
  { text: "a few"},
  { text: "჻"},
  { text: "sometimes learnt"},
  { text: "a thing"},
  { text: "჻"},
  { text: "the room to realize"},
  { text: "჻"},
  { text: "჻჻"},
  { text: "each as it yearns"},
]

// picking the relevant tags
const hippoTag = document.querySelector("section.hippo")

// making a next function to increase LineANumber
const nextHippo = function () {
  hippoNumber = hippoNumber + 1

  if (hippoNumber > hippos.length - 1) {
    hippoNumber = 0
  }

  updateHippo()
}

// updating the content of the section
const updateHippo = function () {
  hippoTag.innerHTML = hippos[hippoNumber].text
}

// on click of box, run this
hippoTag.addEventListener("click", function () {
  nextHippo()
})

// SECOND COLUMN OF POEM - in the code, we will call this box "Zebra"

// data fr holding which line we are on
let zebraNumber = 0

// holding the content for each line
const zebras = [
  { text: "but knew"},
  { text: "own tooth"},
  { text: "჻"},
  { text: "჻჻"},
  { text: "჻჻჻"},
  { text: "we write about"},
  { text: "the blue not needed"},
  { text: "჻"},
  { text: "and how sad to think"},
  { text: "჻"},
  { text: "჻჻"},
  { text: "years’ glances"},
  { text: "჻"},
  { text: "჻჻"},
  { text: "჻჻჻"},
  { text: "჻჻჻჻"},
  { text: "჻჻჻჻჻"},
  { text: "of a neckline and distillery"},
  { text: "჻"},
  { text: "჻჻"},
  { text: "but knew"},

  
]

// picking the relevant tags
const zebraTag = document.querySelector("section.zebra")

// making a next function to increase LineANumber
const nextZebra = function () {
  zebraNumber = zebraNumber + 1

  if (zebraNumber > zebras.length - 1) {
    zebraNumber = 0
  }

  updateZebra()
}

// updating the content of the section
const updateZebra = function () {
  zebraTag.innerHTML = zebras[zebraNumber].text
}

// on click of box, run this
zebraTag.addEventListener("click", function () {
  nextZebra()
})
