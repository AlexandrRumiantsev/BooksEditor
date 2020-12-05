export const createSendObjectBook = async (form, type) => {
    switch(type){
        case 'EDIT':
            return createEditObject(form)
        case 'ADD':
            return createAddObject(form)
    }
}


const createAddObject = async (form) => {
    let books = localStorage.books ? JSON.parse(localStorage.books) : [];
    let id = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
    }
    console.log(books);
    const bookObj = {
        id: id(),
        title: form.get('TITLE'),
        autorList: [
          {
            name: `Пушкин`,
            family: ``
          },
          {
            name: `Пушкин`,
            family: ``
          },
          {
            name: `Пушкин`,
            family: ``
          },
        ],
        img: form.get('FILE')
      } 

      books.push(bookObj);
      localStorage.setItem(
        `books`, 
        JSON.stringify(books)
      );


      return books
}


const createEditObject = async (form) => {

    let r = JSON.parse(localStorage.books).filter(element => {
        if(element.id != form.get('ID')){
            return element;
        }else return ''; 
    });



    let boObj = {
        id: form.get('ID'),
        title: form.get('TITLE'),
        autorList: [
          {
            name: `Пушкин`,
            family: ``
          },
          {
            name: `Пушкин`,
            family: ``
          },
          {
            name: `Пушкин`,
            family: ``
          },
        ],
        img: form.get('FILE')
      } 

        r.push(boObj);

      localStorage.removeItem(
        `books`
      );

      localStorage.setItem(
        `books`, 
        JSON.stringify(r)
      ); 

      return r;
}