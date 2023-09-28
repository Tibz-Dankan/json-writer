const fs = require("fs");

const startTime = new Date();

// Sample JSON data
const jsonData = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};

// Convert JSON data to a string
const jsonString = JSON.stringify(jsonData, null, 2); // The 'null, 2' argument adds indentation for readability

// Specify the file path
const filePath = "data.json";

// Write JSON data to the file
fs.writeFile(filePath, jsonString, (err) => {
  const endTime = new Date();
  if (err) {
    console.error("Error writing JSON file:", err);
  } else {
    const timeTaken = endTime - startTime;
    console.log("JSON data has been written to", filePath);
    console.log(
      "Time taken to create and write data:",
      timeTaken,
      "milliseconds"
    );
  }
});

// Read the existing JSON file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }

  // Parse the existing JSON data
  let jsonData = JSON.parse(data);

  // Add more content to the JSON object
  jsonData.favoriteSports = "football";

  // Convert the updated JSON data to a string
  const updatedJsonString = JSON.stringify(jsonData, null, 2);

  // Write the updated JSON data back to the file
  fs.writeFile(filePath, updatedJsonString, (writeErr) => {
    if (writeErr) {
      console.error("Error writing JSON file:", writeErr);
    } else {
      console.log("JSON data has been updated and written to", filePath);
    }
  });
});
