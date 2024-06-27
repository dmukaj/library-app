const fs = require("fs");

// Load the JSON data
fs.readFile("./books.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const books = JSON.parse(data);

  // Function to transform the book data
  const transformBook = (book) => {
    return {
      title: book.title.trim(),
      author: book.author.trim(),
      numberInStock: 10, // Default value, adjust as needed
      dailyRentalRate: 5.0,
      favorited: false,
      imageLink: book.imageLink.trim(), // Default value, adjust as needed
    };
  };

  // Transform all books
  const transformedBooks = books.map(transformBook);

  // Save the transformed data
  fs.writeFile(
    "./transformed_books.json",
    JSON.stringify(transformedBooks, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      console.log("Books transformed successfully!");
    }
  );
});
