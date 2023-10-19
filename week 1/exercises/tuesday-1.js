/*  The following array contains multiple data types.
	Normalize them by converting them all to numbers using a function
	and log the result in the console */

const data = [1, 2, "3", "4", 5];

function convertArrayStringsToNumbers() {
  /* Your code here should convert the data array to an array containing only numbers and no strings and log the code to the console. */
  const newData = data.map((str) => Number(str));
  console.log(newData);

  const newDataTwo = [];
  data.forEach((str) => {
    newDataTwo.push(Number(str));
  });
  console.log(newDataTwo);
}

convertArrayStringsToNumbers();
