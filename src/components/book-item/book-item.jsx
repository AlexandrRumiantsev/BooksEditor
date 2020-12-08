import React from "react";
import {
    Link,
  } from "react-router-dom";
import PropTypes from "prop-types";

import {bookItem} from "../../shapes/book-item";

const BookItem = ({book, delBook}) => {

    return  (
        <article className='books-list__item item-book'>
            <header>
                <div className='item-book__img-box'>
                    <div style={{backgroundImage: `url(${book.img})`}}>
                        {book.title}
                    </div>
                    <button onClick={()=> delBook(book.id)}>
                        Удалить
                    </button>
                    <Link to={`/edit/${book.id}`}> Редактировать </Link>
                </div>
                <div className='item-book__discription'>
                    <p><b>Год публикации:</b> <i>{book.age}</i></p>
                    <p><b>Количество страниц:</b> <i>{book.count}</i></p>
                    <p><b>Дата выхода в тираж:</b> <i>{book.date}</i></p>
                    <p><b>ISBN:</b> <i>{book.isbn}</i></p>
                    <p><b>Название издательств:</b> <i>{book.publishing}</i></p>
                    <b>Список авторов:</b> 
                    <ul>
                        {
                            book.autorList.map((author, index) => {
                                return <li key={index}>Имя: {author.name} Фамилия: {author.family}</li>
                            })
                        }
                    </ul>
                </div>
                
            </header>
            <main>
                
            </main>
            <footer>
                
            </footer>
        </article>
    )
}

BookItem.propTypes = {
    delBook: PropTypes.func,
    book: bookItem
};

export default BookItem;