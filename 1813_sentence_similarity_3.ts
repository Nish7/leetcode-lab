function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
    let sentence1Words = sentence1.split(' ')
    let sentence2Words = sentence2.split(' ')

    let small = Math.min(sentence1Words.length, sentence2Words.length)

    let start = 0
    // loop from the start to end
    while (start < small && sentence2Words[start] == sentence1Words[start]) {
        start++
    }

    // [my name is jane] = 4  [my jane] =2
    let end = 0
    while (
        end < small &&
        sentence2Words[sentence2Words.length - end - 1] ==
            sentence1Words[sentence1Words.length - end - 1]
    ) {
        end++
    }

    return start + end >= small
}

console.log(areSentencesSimilar('Hello my name is Jane', 'Hello Jane'))
console.log(areSentencesSimilar('of', 'Hello Jane'))
console.log(areSentencesSimilar('h G', 'H G'))
