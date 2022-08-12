interface Job {
    title: string
    description: string
}

type MyReadonly<T> = {
    readonly [Key in keyof T]: T[Key]
}
  
const Job: MyReadonly<Job> = {
    title: "Hey",
    description: "foobar"
}



const arr = ['a', 'b', 'c'];
