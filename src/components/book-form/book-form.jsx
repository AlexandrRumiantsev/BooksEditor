import React, { useState } from 'react';
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
        file
    } = props;

    return  (
     <div className='author'>
        <div className='author__error'>
          {
            errors.map(function(item, i){
              return <li key={i}>{item}</li>
            })
          }
        </div>
        <form ref={formRef} onClick={(e)=>handleClickForm(e,{setCount, authorsCount})}>
          <div>
            <input name='TITLE' type='text' placeholder='заголовок'></input>
          </div>
          <div>
            список авторов
            <div className='author__list'>
                {authorsCount.map(index => (
                  <li key={index}>
                    <div className='author-item'>    
                      <input name={`AUTHOR_NAME[${index}]`} placeholder='Имя'></input>
                      <input name={`AUTHOR_FAMILY[${index}]`} placeholder='Фамилия'></input>
                    </div>
                  </li>
                ))}
                <input data-action="addAuthor" type='button' value='+'></input>
                <input data-action="removeAuthor" type='button' value='-'></input>
            </div>
          </div>
          <p>Кол-во страниц: <input name='COUNT_PAGE' type='number'></input></p>
          <p>Название издательства: <input name='PUBLISHING' placeholder='ООО "Рога и Копыта"' ></input></p>
          <p>Год публикации: <input name='AGE' type='number'></input></p>
          <p>Дата выхода в тираж: <input name='DATE' type='date'></input></p>   
          <p>ISBN: <input name='ISBN' placeholder='ISBN'></input></p>
          <button data-action="saveBook">Добавить</button>
        </form>
        <ReactFileReader fileTypes={[".jpeg",".jpg", ".png"]} base64={true} handleFiles={handleFiles}>
          <button className="btn">Upload</button>
        </ReactFileReader>
         { file ? 
          <img src={file} />
          :
          null
        } 
      </div>  
    )
}


export default BookForm