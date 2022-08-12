import type { Equal, Expect } from "@type-challenges/utils"

type First<T extends any[]> = T extends [infer TFirst, ...any[]] ? TFirst : never;

type RemoveText<T extends string> = T extends `text_${infer K}` ? K : T;

type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>,
    Expect<Equal<RemoveText<'text_name'>, 'name'>>
];


//Infer is only available to us inside a conditional check,
//and a conditional type is basically when we check 
