
type Concat<T extends any[], U extends any[]> = [...T, ...U];

type ConcatPreview = Concat<[1], [2]> 


