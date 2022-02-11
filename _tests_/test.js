const { execSync } = require('child_process')
const fs = require('fs')

const reconstructedFilename = 'reconstructed.js'

const loopString = () => {
    let solution = fs.readFileSync('./index.js', 'utf-8')

    fs.writeFileSync(reconstructedFilename, solution)

    return String(execSync(`node ${reconstructedFilename}`))
}

const countLoop = () => {
      let solution = fs.readFileSync('./index.js', 'utf-8')
    
      let countFor = (solution.toLowerCase().match(/for/g) || []).length;
      let countWhile = (solution.toLowerCase().match(/while/g) || []).length;
    
      return {countFor, countWhile}
}

const hasil = () => {
    return `LOOPING FOR PERTAMA
1 - I love coding
2 - I love coding
3 - I love coding
4 - I love coding
5 - I love coding
6 - I love coding
7 - I love coding
8 - I love coding
9 - I love coding
10 - I love coding
11 - I love coding
12 - I love coding
13 - I love coding
14 - I love coding
15 - I love coding
16 - I love coding
17 - I love coding
18 - I love coding
19 - I love coding
20 - I love coding
LOOPING FOR KEDUA
20 - I will become fullstack developer
19 - I will become fullstack developer
18 - I will become fullstack developer
17 - I will become fullstack developer
16 - I will become fullstack developer
15 - I will become fullstack developer
14 - I will become fullstack developer
13 - I will become fullstack developer
12 - I will become fullstack developer
11 - I will become fullstack developer
10 - I will become fullstack developer
9 - I will become fullstack developer
8 - I will become fullstack developer
7 - I will become fullstack developer
6 - I will become fullstack developer
5 - I will become fullstack developer
4 - I will become fullstack developer
3 - I will become fullstack developer
2 - I will become fullstack developer
1 - I will become fullstack developer
LOOPING WHILE PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING WHILE KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer`
}

afterAll(() => {
    if (fs.existsSync(reconstructedFilename)) {
        fs.unlinkSync(reconstructedFilename)
    }
})

describe('I Love Coding', () => {
    describe('Check loops and message', () => {
      it('should have minimum 2 for and 2 while loops', () => {
        const {countFor, countWhile} = countLoop()
        expect(countFor).toBeGreaterThanOrEqual(2)
        expect(countWhile).toBeGreaterThanOrEqual(2)
      })
      it('should correctly print out message', () => {
        const result = loopString()
        expect(result).toMatch(hasil())
      })
    })
  })

