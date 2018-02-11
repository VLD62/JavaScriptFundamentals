function countWordsWithMaps (arr) {
    let myMap = new Map()

    for (let str of arr ) {
        let words = str.split(/[^0-9a-zA-Z_]/).filter(s => s.trim() !== '')

        for (let word of words) {
            word = word.toLowerCase()
            if(myMap.has(word)) {
                myMap.set(word, (myMap.get(word) + 1))
            } else {
                myMap.set(word, 1)
            }
        }

    }
    let arr1 = Array.from(myMap.keys()).sort((a,b) => a.localeCompare(b))
    for (let key of arr1) {
        console.log("'" + key + "'" + ' -> ' + myMap.get(key) + ' times')
    }
}