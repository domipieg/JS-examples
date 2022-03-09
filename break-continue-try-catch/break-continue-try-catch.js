const numbers = [5, 3, 1, 6, 2, 5, 7, 2, 3, 6, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 2, 3, 6, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 2, 3, 6, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 2, 3, 6, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 2, 3, 22, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 2, 3, 6, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 11, 3, 6, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 2, 3, 6, 3, 6, 3, 2];
  
    
  const numbers2 = [5, 3, 1, 6, 2, 5, 7, 2, 3, 6, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 2, 3, 6, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 2, 3, 6, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 2, 3, 6, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 2, 3, 2, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 2, 3, 6, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 1, 3, 600, 3, 6, 3, 2,
    5, 3, 1, 6, 2, 5, 7, 2, 3, 6, 3, 6, 3, 2];
  
  
  //// BREAK
  
  // for (let i = 0; i < numbers.length; i++) {
  //   console.log(`Checking (times: ${i})`);
    
  //   if (numbers[i] > 10) {
  //     console.log("This array has number bigger than 10!");
  //     break;
  //   }
  // }
  
  // console.log("and you can see this");
  
  //// CONTINUE
  
  // for (let i = 0; i < numbers.length; i++) {
  //   console.log(`Checking (times: ${i})`);
    
  //   if (numbers[i] > 3) {
  //     console.log("The number > 3");
  //     continue;
  //   }
  
  //   if (numbers[i] > 3) {
  //     console.log("The number === 2");
  //   }
  // }
  
  
  //// FUNCTION
  
  // function findFirstBiggerThan10(array) {
  //   let firstBiggerThan10;
  //   for (let i = 0; i < array.length; i++) {
  //     //console.log(`Checking (times: ${i})`);
    
  //     if (array[i] > 10) {
  //       //console.log("This array has number bigger than 9!");
  //       firstBiggerThan10 = array[i];
  //       break;
  //     }
  //   }
  //   return firstBiggerThan10;
  // }
  
  // const result = findFirstBiggerThan10(numbers);
  // console.log(`First number bigger than 10 is: ${result}`);
  
  // const result2 = findFirstBiggerThan10(numbers2);
  // console.log(`First number bigger than 10 is: ${result2}`);
  
  
  // for (let i = 0; i < 10; i++) {
  //   console.log("Outer loop " + i);
  
  
  //   for (let k = 0; k < 10; k++) {
  //     console.log("Inner loop " + k);
  //     if (i === 3) {
  //       break;
  //     }
  //   }
  
  
  // }
  
  
  const iAmNumber = 10;
  
  try {
    iAmNumber();
  } catch (error) {
    console.log(error)
    console.log("Uh oh, the error happened")
  }
  
  console.log("You can see me :))))")