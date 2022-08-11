type MyRecord<T extends PropertyKey, U> = {
    [key in T]: U
}

const record: MyRecord<string, number> = {
    'tesing': 24
}