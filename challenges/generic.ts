interface Dog {
    name: string,
    bark(): void
}

interface Cat {
    name: string,
    moew(): void
}


abstract class BaseSerivce<T> {
    protected model!: T

    constructor(model: T) {
        this.model = model
    }

    public findOne(): T {
        return this.model;
    }
}

class DogService extends BaseSerivce<Dog> {
    constructor(model: Dog) {
        super(model)
    }
}

class CatService extends BaseSerivce<Cat> {
    constructor(model: Cat) {
        super(model)
    }
}

const dogService = new DogService({
    name: 'Chihuahua',
    bark() {
        console.log(`I'm Dog, and my name is ` + this.name);
    },
});


const cat = {
    name: 'Beauty',
    moew(){
        console.log(`I'm Cat, and my name is ` + this.name);
    },
}

const catService = new CatService(cat);

// dogService.findOne().bark();
// catService.findOne().moew();


//-----------------------------


interface Student {
    name: string,
    studentID: string,
    age: number
}

interface Staff {
    name: string,
    staffID: string
}

type StudentOrStaff<T extends Student | Staff> = T extends Student ? { studentName: string } : { staffName: string }

const getHuman = function<T extends Student | Staff>(item: T): StudentOrStaff<T> {
    if('studentID' in item){
        return {
            studentName: item.name + item.studentID
        } as StudentOrStaff<T>
    } else {
        return {
            staffName: item.name + item.staffID
        } as StudentOrStaff<T>
    }
}

const human = getHuman<Staff>({
    name: 'Minh',
    staffID: 'SE130676'
})





