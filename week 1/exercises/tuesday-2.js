/*  The following array contains strings with randomized capitals.
	You're tasked with converting all strings to lowercase with a
	first letter capitalized */

const data = ["robert", "vincent", "lAuRa", "Cas", "wIMER", "rOOs"];

/* This should the result be:

	const data = [
		"Robert",
		"Vincent",
		"Laura",
		"Cas",
		"Wimer",
		"Roos"
	];

*/

function convertArrayStringsToCapitalized() {
  /* Write your functionality here and log the result */
  const newData = data.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
  console.log(newData);
}

convertArrayStringsToCapitalized();
