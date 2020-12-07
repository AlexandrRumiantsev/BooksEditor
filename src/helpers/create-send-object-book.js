 
export const createSendObjectBook = async (form, type) => {
    switch(type){
        case 'EDIT':
            return createEditObject(form)
        case 'ADD':
            return createAddObject(form)
    }
}

const id = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
    }

const createBook = (form, type) => {
    const autorList = [];
    form.getAll('AUTHOR_NAME[]').map(function(item, i){
        const obj = {
            name: item,
            family: form.getAll('AUTHOR_FAMILY[]')[i]
        }
        autorList.push(obj)
    })
    return {
        id: type == 'EDIT' ? form.get('ID') : id(),
        title: form.get('TITLE'),
        autorList,
        img: form.get('FILE'),
        count: form.get('COUNT_PAGE'),
        publishing: form.get('PUBLISHING'),
        age: form.get('AGE'),
        date: form.get('DATE'),
        isbn: form.get('ISBN'),
      } 
}

const createAddObject = async (form) => {
    let books = localStorage.books ? JSON.parse(localStorage.books) : [];
    books.push(
        createBook(form)
    );
    localStorage.setItem(
        `books`, 
        JSON.stringify(books)
    );
    return books
}


const createEditObject = async (form) => {
    let booksEdit = JSON.parse(localStorage.books).filter(element => {
        if(element.id != form.get('ID')){
            return element;
        }else return ''; 
    })
    
    booksEdit.push(
        createBook(form , 'edit')
    );
    
    localStorage.removeItem(
        `books`
    );
    console.log(booksEdit);
    localStorage.setItem(
        `books`, 
        JSON.stringify(booksEdit)
    ); 
    return booksEdit;
}