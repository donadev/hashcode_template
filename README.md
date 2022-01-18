# hashcode_starter

The simple template to excel on Google Hashcode Competition

- [Why?](#why)
- [How to use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)
- [Maintainer](#maintainer)


## Why?

If you ever competed in the [Google Hashcode Coding Competition](https://codingcompetitions.withgoogle.com/hashcode/), **you already know the answer**. 

You have a few hours to solve the problem and nothing sucks more than starting late because **your environment isn't set off.** 😭

This repository is here for you. 😼

You can create the: 
- **file reader/writer**, 
- **scorer**,
- **data model** 

in minutes, using the remaining time only to find the __top class algorithm__ that will make you excel in the competition! 🏆

## Installing
... is as simple as
```
git clone https://github.com/donadev/hashcode_starter.git
cd hashcode_starter && npm i
```



## How to use

1. Define your input data model populating the **Input** type on **src/parser.ts**:
    ```ts
    export type Input = {}
    ```
2. Write the input parser on **src/parser.ts**
    ```ts
    const parse = (file : string) : Input => {
      const data = fs.readFileSync(file, 'ascii')
      //TODO: transform 'data' to the input dataset according to the problem specs
      return {}
    }
    ```
3. Define your output data model populating the **Solution** type on **src/solver.ts**:
    ```ts
    export type Solution = {}
    ```
4. Write the output serializer on **src/writer.ts**
    ```ts
    const write = (solution : Solution, file : string) => {
      const data : string = "test+"
      //TODO: map the solution to the output file according to the specs of the problem
      fs.writeFileSync(file, data)
    }
    ```
5. Write your solution on **src/solver.ts**
    ```ts
    const solve = (dataset : Input) : Solution => {
        //TODO: provide the best fucking solution in order to beat the competition
        return {}
    }
    ```
6. Write the scorer for a solution on **src/scorer.ts**
    ```ts
    const score = (input : Input, solution : Solution) => {
        //TODO: compute the score for the solution according to the problem specs
        return 1
    }
    ```
7. Put your test cases as ```.in``` files on **inputs** folder
8. Run your program with:
    ```sh
    npm run start
    ```
9. That's it! You will find:
    - on **outputs/**: the output files as ```.out``` files;
    - on **scores/** the scores of the solutions as ```.score``` files. 

NB: The script saves, for every input file, the solution only if the computed score is greater or equal than the saved on for that file.

## Contributing

1. Clone this repo
2. Create a branch: `git checkout -b your-feature`
3. Make some changes
4. Test your changes by [running your local version](#developing-locally)
5. Push your branch and open a Pull Request


## License

This code is open source software licensed under the Apache 2.0 License.

## Maintainer

Luigi Donadel - [@luigidonadel](https://twitter.com/luigidonadel) - luigi.donadel@gmail.com

Project Link: [https://github.com/donadev/hashcode_starter](https://github.com/donadev/hashcode_starter)
