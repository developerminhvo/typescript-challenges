type MyIncludes<T extends readonly any[], U> = U extends T[number] ? true : false;

const pillar = ['Kars', 'Esidisi', 'Wamuu', 'Santana'] as const;

type isPillarMen = MyIncludes<typeof pillar, 'asdfl'>







