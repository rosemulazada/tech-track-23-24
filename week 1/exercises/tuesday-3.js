/*  This array of objects contains some weird data, and some useless points,
	You're tasked in transforming and normalizing this data to the second
	example */

const data = [
  {
    name: "robert",
    age: "29",
    residence: "amsterdam",
    work: {
      title: "Lecturer",
      employer: "Hogeschool van Amsterdam",
    },
  },
  {
    name: "berend",
    age: "32",
    residence: "rotterdam",
    work: {
      title: "Front-end Developer",
      employer: "DEPT",
    },
  },
  {
    name: "ubaida",
    age: "26",
    residence: "Amersfoort",
    work: {
      title: "Project Manager",
      employer: "Clarify",
    },
  },
];

/* Filter by age, normalize capitals in names, convert ages to numbers, remove work.

	const data = [
		{
			name: "Robert",
			age: 29,
			residence: "Amsterdam",
		},
		{
			name: "Berend",
			age: 32,
			residence: "Rotterdam",
		}
	];

*/

// function transformArrOfObj() {
//   /* Write your functionality here and log the result */
//     const normalizedData = data.map((item) => {
//         return {
//             name:
//                 item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase(),
//             age: (Number(item.age)),
//             residence: item.residence.charAt(0).toUpperCase() + item.residence.slice(1).toLowerCase()
//         };
//   });
//   console.log(normalizedData);
// }

function transformArrOfObj() {
  /* Write your functionality here and log the result */
  const normalizedData = data.map((item) => {
    const normalizedName =
        item.name.charAt(0).toUpperCase() +
        item.name.slice(1).toLowerCase();

    const normalizedAge = Number(item.age);

    const normalizedResidence =
      item.residence.charAt(0).toUpperCase() +
      item.residence.slice(1).toLowerCase();

    return {
      name: normalizedName,
      age: normalizedAge,
      residence: normalizedResidence,
    };
  });
  return normalizedData;
}

const normalizedData = transformArrOfObj();
console.log(normalizedData);
