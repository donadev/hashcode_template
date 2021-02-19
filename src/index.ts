
import parse, {readScore} from './parser'
import score from './scorer'
import write, {writeScore} from './writer'
import solve from './solver'
import * as path from 'path'
import * as fs from 'fs'


const input_dir = "inputs"
const output_dir = "solutions"
const scores_dir = "best_scores"
const inputs_path = path.join(__dirname, "..", input_dir)


fs.readdir(inputs_path, (err, files) => {
    if(err) return console.error(err)
    files.forEach(file => {
        const input_path = path.join(inputs_path, file)
        const output_path = input_path.replace(input_dir, output_dir).replace(".in", ".out")
        const score_path = input_path.replace(input_dir, scores_dir).replace(".in", ".score")
        const data = parse(input_path)
        const solution = solve(data)
        const points = score(solution)
        const bestScore = readScore(score_path)
        console.log(`Case ${file}: solution score`, points, "best score", bestScore)
        if(points > bestScore) {
            write(solution, output_path)
            writeScore(points, score_path)
        }
    })
})

