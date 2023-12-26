//1
// const me = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
//   };

//   const objectString = Object.entries(me)
//     .map(([key, value]) => {
//       if (Array.isArray(value)) {
//         return `${key}: ${value.join(",")}`;
//       } else {
//         return `${key}: ${value}`;
//       }
//     })
//     .join("\n");
  
//   console.log(objectString);



//2
// function createSquareObjects(n) {
//     const result = {};
  
//     for (let i = 1; i <= n; i++) {
//       result[i] = i * i;
//     }
  
//     return result;
//   }
  
//   const n = 5; 
//   const squareObjects = createSquareObjects(n);
  
//   console.log(squareObjects);


//3
// const exampleObject = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//   };
  

//   const keys = Object.keys(exampleObject);
  
 
//   const values = Object.values(exampleObject);
  

//   const sumOfKeysAndValues = keys.concat(values);
  
//   console.log(sumOfKeysAndValues);
  

//4
// function createLengthObject(array) {
//     const result = {};
  
//     for (let i = 0; i < array.length; i++) {
//       const element = array[i];
//       result[element] = element.length;
//     }
  
//     return result;
//   }
  
//   const inputArray = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
//   const lengthObject = createLengthObject(inputArray);
  
//   console.log(lengthObject);


//5
// const products = {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000};


// const productTypes = Array.from(new Set(Object.values(products)));

// console.log(productTypes);


//6
// function defineObject(obj) {
//     const keys = Object.keys(obj);
  
//     for (let i = 0; i < keys.length; i++) {
//       if (typeof keys[i] !== 'string') {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   const exampleObject = { abc: 1, 123: 2, d: 5 };
//   const result = defineObject(exampleObject);
  
//   console.log(result);



//7
// function removeFalsyValues(obj) {
//     const result = {};
  
//     Object.keys(obj).forEach(key => {
//       const value = obj[key];
//       if (value) {
//         result[key] = value;
//       }
//     });
  
//     return result;
//   }
  
//   const exampleObject = { a: false, b: 12, c: true, d: 0 };
//   const filteredObject = removeFalsyValues(exampleObject);
  
//   console.log(filteredObject);



//8
// function createFrequencyObject(arr) {
//     const frequencyObject = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       const num = arr[i];
//       if (frequencyObject[num] === undefined) {
//         frequencyObject[num] = 1;
//       } else {
//         frequencyObject[num]++;
//       }
//     }
  
//     return frequencyObject;
//   }
  
//   const inputArray = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
//   const frequencyObject = createFrequencyObject(inputArray);
  
//   console.log(frequencyObject);



//9
// function createClassObject(number) {
//     const numberString = number.toString();
//     const classObject = {};
  
//     for (let i = 0; i < numberString.length; i++) {
//       const digit = parseInt(numberString[i]);
//       const digitClass = parseInt(digit / 2);
      
//       if (classObject[digitClass] === undefined) {
//         classObject[digitClass] = [];
//       }
  
//       classObject[digitClass].push(digit);
//     }
  
//     return classObject;
//   }
  
//   const inputNumber = 8945472985629;
//   const classObject = createClassObject(inputNumber);
  
//   console.log(classObject);



//10
// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
//   ];
  
//   for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.alreadyRead) {
//       console.log(`${book.title} kitobini o'qigan.`);
//     } else {
//       console.log(`${book.title} kitobini o'qimagan.`);
//     }
//   }
  
  
  
  
//11
// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
  
//   let totalAmount = 0;
  
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const discountedPrice = product.price - (product.price * product.discount) / 100;
//     const subtotal = discountedPrice * product.quantity;
//     totalAmount += subtotal;
//   }
  
//   console.log("Umumiy summa:", totalAmount);




//12
// const obj = {
//     "it": 20,
//     "mushuk": 10,
//     "sigir": 200,
//     "tovuq": 2
//   };
  
//   const arrayFromObject = Object.entries(obj);
  
//   console.log(arrayFromObject);
  

//13
// const grades = [
//     { name: "Fizika", grade: 4, kredit: 6 },
//     { name: "Matematika", grade: 5, kredit: 6 },
//     { name: "Tarix", grade: 4, kredit: 4 },
//     { name: "Dasturlash", grade: 5, kredit: 8 },
//     { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
//   ];
  
//   function calculateGPA(grades) {
//     let totalPoints = 0;
//     let totalCredits = 0;
  
//     for (let i = 0; i < grades.length; i++) {
//       const subject = grades[i];
//       totalPoints += subject.grade * subject.kredit;
//       totalCredits += subject.kredit;
//     }
  
//     if (totalCredits === 0) {
//       return "Kreditlar soni 0 bo'lganligi uchun GPA hisoblanmaydi.";
//     }
  
//     const gpa = totalPoints / totalCredits;
//     return gpa.toFixed(2); 
//   }
  
//   const result = calculateGPA(grades);
//   console.log("GPA:", result);




//14
// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
// const myAnswers = {1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C"};

// function calculateScore(rightAnswers, myAnswers) {
//   let correctCount = 0;
//   let incorrectCount = 0;

//   for (let questionNumber in rightAnswers) {
//     const rightAnswer = rightAnswers[questionNumber];
//     const myAnswer = myAnswers[questionNumber];

//     if (rightAnswer === myAnswer) {
//       correctCount++;
//     } else {
//       incorrectCount++;
//     }
//   }

//   return { correct: correctCount, incorrect: incorrectCount };
// }

// const score = calculateScore(rightAnswers, myAnswers);
// console.log("To'g'ri javoblar:", score.correct);
// console.log("Noto'g'ri javoblar:", score.incorrect);


//15

// function getMultipleValues(n, obj) {
//     const result = {};
  
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         result[key] = obj[key] * n;
//       }
//     }
  
//     return result;
//   }
  
//   let n = 3;
//   const obj = { a: 2, b: 3, c: 4, d: 6 };
  
//   const multipliedValues = getMultipleValues(n, obj);
//   console.log(multipliedValues);
  

//16
// const product = {
//     name: "Iphone 14",
//     company: {
//       name: "Apple",
//       price: "200 mlrd",
//       founder: {
//         firstName: "Steve",
//         lastName: "Jobs",
//         birthDate: 1950,
//       },
//     },
//   };
  
//   const {
//     name: productName,
//     company: {
//       name: companyName,
//       price: companyPrice,
//       founder: {
//         firstName: founderFirstName,
//         lastName: founderLastName,
//         birthDate: founderBirthDate,
//       },
//     },
//   } = product;
  
//   console.log("productName:", productName);
//   console.log("companyName:", companyName);
//   console.log("companyPrice:", companyPrice);
//   console.log("founderFirstName:", founderFirstName);
//   console.log("founderLastName:", founderLastName);
//   console.log("founderBirthDate:", founderBirthDate);
  
  
  
//17
// const students = [
//     { name: "Ali", score: 80 },
//     { name: "Vali", score: 90 },
//     { name: "Asad", score: 75 },
//     { name: "John", score: 85 },
//   ];
  
 
//   const totalScore = students.reduce((sum, student) => sum + student.score, 0);
//   const averageScore = totalScore / students.length;
  
  
//   const newStudentsArray = students.map(student => ({
//     name: student.name,
//     score: student.score,
//     percentage: (student.score / 100) * 100,
//     aboveAverage: student.score > averageScore,
//   }));
  
//   console.log("O'rtacha percentage:", averageScore);
//   console.log("Yangi massiv:", newStudentsArray);
  
  

//18




//19
// const students = [
//     { name: "Ali", score: 80 },
//     { name: "Vali", score: 90 },
//     { name: "Asad", score: 75 },
//     { name: "John", score: 85 },
//   ];
  

//   const totalScore = students.reduce((sum, student) => sum + student.score, 0);
//   const averageScore = totalScore / students.length;
  

//   const newStudentsArray = students.map(student => ({
//     name: student.name,
//     score: student.score,
//     percentage: (student.score / 100) * 100,
//     aboveAverage: student.score > averageScore,
//     isPassed: (student.score / 100) * 100 >= 70,
//   }));
  
//   console.log("Yangi massiv:", newStudentsArray);
  



//20