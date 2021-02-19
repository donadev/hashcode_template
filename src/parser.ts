import * as fs from 'fs'

export type Input = {}

const parse = (file : string) : Input => {
    const data = fs.readFileSync(file, 'ascii')
    return {}
}

export const readScore = (file : string) : number => {    
    try {
        const data = fs.readFileSync(file, 'ascii')
        return parseFloat(data)
    } catch {
        return 0
    }
}

export default parse