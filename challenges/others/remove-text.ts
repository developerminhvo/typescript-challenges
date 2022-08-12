interface ApiData {
    "map:longtitue": string,
    "map:latitue": string
}

type RemoveMapFromObj<T> = {
    [key in keyof T as RemoveMap<key>] : T[key]
}

type RemoveMap<T> = T extends `map:${infer K}` ? K : T;

type RemovePreview = RemoveMapFromObj<ApiData>