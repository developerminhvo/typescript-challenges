type IF<T extends boolean, U, K> = T extends true ? U : K;

type A = IF<true, 'a', 'b'>  // expected to be 'a'
type B = IF<false, 'a', 'b'>