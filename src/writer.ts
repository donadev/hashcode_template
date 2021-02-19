import * as fs from "fs"
import { Solution } from './solver'

const write = (solution : Solution, file : string) => {
    const data : string = "test+"
    fs.writeFileSync(file, data)
}

export const writeScore = (score : number, file : string) => {
    fs.writeFileSync(file, `${score}`)
}

export default write