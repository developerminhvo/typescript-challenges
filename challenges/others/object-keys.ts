interface User {
    name: string,
    age: number,
    career: string
}

const obj_keys: User = {
    name: 'Minh',
    age: 24,
    career: 'IT'
}

const advancedObjKey = function<T>(obj:T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}

// const a = Object.keys(obj_keys) as (keyof User)[]

// a.forEach((key) => {
//     console.log(obj_keys[key]);
// });


