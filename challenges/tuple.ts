//---------- Tuple Length ----------

type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

type Length<T extends readonly any[]> = T["length"];

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5


//---------- Tuple to Object ----------

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type ArrayMember = tesla[number];
type ArrayMemberTwo = typeof tuple[0]

type TupleToObject<T extends readonly any[]> = {
    [key in T[number]]: key
}

type result = TupleToObject<typeof tuple> 

type blelaldf = TupleToObject<[]>

