import React from 'react';
import PropTypes from "prop-types";
import ReactFileReader from 'react-file-reader';

const BookForm = (props) => {

    const {
        errors,
        formRef,
        handleClickForm,
        setCount,
        authorsCount,
        handleFiles,
        file,
        book
    } = props;


    let autorList = [];

    if(book){
      autorList = book.autorList;
    } else  autorList = authorsCount;


    const img = book ? file ? file : book.img : file;
    return  (
     <div className='author'>
       <section>
        <div className='author__error'>
          {
            errors.map(function(item, i){
              return <li key={i}>{item}</li>
            })
          }
        </div>
        <form ref={formRef} onClick={(e)=>handleClickForm(e,{setCount, authorsCount})}>
          <div>
            <input name='ID' type='hidden' defaultValue={book ? book.id : ``}></input>
            <input name='TITLE' type='text' placeholder='заголовок' defaultValue={book ? book.title : ``}></input>
          </div>
          <div>
            список авторов
            <div className='author__list'>
              {authorsCount.map((index, key) => (
                  <li key={key}>
                    <div className='author-item'>    
                      <input 
                        name='AUTHOR_NAME[]' 
                        placeholder='Имя' 
                        defaultValue={book ? autorList[key] ? autorList[key].name : `` : ``}
                      >
                      </input>
                      <input 
                        name='AUTHOR_FAMILY[]' 
                        placeholder='Фамилия' 
                        defaultValue={book ? autorList[key] ? autorList[key].family : `` : ``}
                      >
                      </input>
                    </div>
                  </li>
                ))}
                <input data-action="addAuthor" type='button' value='+'></input>
                <input data-action="removeAuthor" type='button' value='-'></input>
            </div>
          </div>
          <p>
            Кол-во страниц: 
            <input defaultValue={book ? book.count  : ``} name='COUNT_PAGE' type='number'></input>
          </p>
          <p>
            Название издательства: 
            <input 
              defaultValue={book ? book.publishing ? book.publishing : `` : ''} 
              name='PUBLISHING' 
              placeholder='ООО "Рога и Копыта"' 
            >
            </input>
          </p>
          <p>
            Год публикации: 
            <input 
              name='AGE'  
              defaultValue={book ? book.age ? book.age : `` : ''} 
              type='number'
            >
            </input>
          </p>
          <p>Дата выхода в тираж: 
            <input 
              name='DATE' 
              defaultValue={book ? book.date ?  book.date : `` : ''} 
              type='date'
            >
            </input>
          </p>   
          <p>
            ISBN: 
            <input 
              name='ISBN' 
              placeholder='ISBN' 
              defaultValue={book ? book.isbn ? book.isbn  : `` : ''}  
            >
            </input>
          </p>
          <button data-action="saveBook">
            Сохранить
          </button>
        </form>
        <ReactFileReader fileTypes={[".jpeg",".jpg", ".png"]} base64={true} handleFiles={handleFiles}>
          <button className="btn">Загрузить изображение</button>
        </ReactFileReader>
         { img ? 
          <img src={img} />
          :
          null
        } 
        </section>
      </div>  
    )
}

BookForm.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.string
  ),
  handleClickForm: PropTypes.func,
  setCount: PropTypes.func,
  authorsCount: PropTypes.arrayOf(
    PropTypes.number
  ),
  handleFiles: PropTypes.func,
  file: PropTypes.string,
  addBook: PropTypes.func,
};


export default BookForm