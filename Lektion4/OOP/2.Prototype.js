function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.revised = false;

    // this.read = () => {
    //     console.log('read');
    // }
  }

  const book = new Book('Banan', "Kalle", 1909)
  const book2 = new Book('Banan', "Kalle", 1909)
//   book.read = 4;
//   book2.read = {}
  console.log(book);


  Book.prototype.read = function(){
    console.log('read');
  }

  console.log(book);
 