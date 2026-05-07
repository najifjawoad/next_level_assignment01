//Problem - 1 :
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]);



// problem - 2 :
const reverseString = (something: string): string => {
  return something.split("").reverse().join("");
};
reverseString("typescript");




// problem - 3 :
type StringOrNumber = string | number;

const checkType = (something: StringOrNumber): string => {
  if (typeof something === "string") {
    return "String";
  } else {
    return "Number";
  }
};
checkType("Hello");
checkType(42);



// problem - 4 :
const getProperty = <T, X extends keyof T>(obj: T, key: X): T[X] => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");




// problem - 5 :
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

type isRead = boolean;
const toggleReadStatus = (book: Book): object => {
  return {
    ...book,
    isRead: true,
  };
};
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

toggleReadStatus(myBook);




// problem-6 :
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name : ${this.name} , Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student("Alice", 20, "A");



// problem - 7 :
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((number) => arr2.includes(number));
};

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
