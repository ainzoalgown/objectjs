let obj = {
    firstname: "Sultan",
    lastname: "Dobriev",
    city: "Nazran",
    age: 16,
    height: 182,
    heightMeters: 1,
    born: 2004,
    haveCar: false,
    carName: undefined,
    haveSkills: false,
    level: 8,
    mobilePhone: 'Xiaomi'
}
obj.phone = ["mi a 1, 10k, mts, china]
    // task 1.3
    let galaxy - {
    name: "Млечный путь"
        age:1,351E10,
        size:100500
        stars: "400million",
        people: "8bln",
        weight: "6⋅1042 кг"
        brightness:"2,1+1-0,6*10**10"
}
// Task 1.3.2
    delete galaxy.size;

console.log(galaxy);
// Задача 1.4
let student = {
    name: 'Muhhamad',
    surname: 'Zurabov',
    regionResidence: 06
}
// Задача 1.5
student.age = 16;
console.log(student)

// Task 2.1
let students = [
    {
        name: 'Sultan',
        surname: 'Sultanov',
        place: 'Magas'
    },
    {
        name: 'Sultan',
        surname: 'Dobriev',
        place: 'Moscow'
    }
]
// Task 2.2
let messages = [
    {
        id: 1,
        author: 'Алви',
        text: 'Приветики🥰',
        type: 'входящее',
        time: '12:29'
    },
    {
        id: 2,
        author: 'Sultan',
        text: 'wowowoow',
        type: 'Send',
        time: '13:08'
    },
    {
        id: 3,
        author: 'Maga',
        text: 'Hi',
        type: 'Send',
        time: '14:00'
    },
    {
        id: 4,
        author: 'Tanjiro',
        text: 'шестая ката - водоворот',
        type: 'Send',
        time: '15:00'
    },
    {
        id: 5,
        author: 'ceiske',
        text: 'ohae',
        type: 'Send',
        time: '16:00'
    },
    {
        id: 6,
        author: 'JOJO',
        text: 'MUDA MUDA MUDA MUDAA',
        type: 'send',
        time: '17:00'
    },
    {
        id: 7,
        author: 'Islam',
        text: 'nice day',
        type: 'send',
        time: '18:00'
    },
    {
        id: 8,
        author: 'Tamerlan',
        text: 'gazel',
        type: 'send',
        time: '19:00'
    },
    {
        id: 9,
        author: 'Abulla',
        text: 'jajajajja',
        type: 'send',
        time: '20:00'
    },
    {
        id: 10,
        author: 'Ahmad',
        text: 'task completed',
        type: 'Send',
        time: '21:00'
    }
]

// Task 3.1
function getName(obj) {
    return obj.name;
}
// Task 3.2
function getNames(obj) {
    let arr = [];
    arr.push(obj.firstname,obj.lastname)
    return arr
}
// Task 3.3
function concatNames(obj,lastname) {
    return obj.firstname + ' ' + lastname;
}
// Task 3.4
function correctName(obj) {
    if (obj.fathername == undefined) {
        return obj.firstname;
    } else {
        return `${obj.firstname} ${obj.lastname} ${obj.fathername}`;
    }
}