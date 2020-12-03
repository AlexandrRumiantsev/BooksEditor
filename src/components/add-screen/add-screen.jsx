import React, { useState } from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {addBook} from "../../store/actions/books/books";

const formRef = React.createRef();


const AddScreen = ({addBookDispatch}) => {
   
    const [authorsCount, setCount] = useState([1]);
    const removeAuthor = () => {
      const arrCount = [];
      for(let i = 1; i <  authorsCount.length; i++){
        arrCount.push(i);
      }
      (arrCount.length !== 0) ? setCount(arrCount) : null;
    }

    const addAuthor = (set, count) => {
      const arrCount = [];
      for(let i = 0; i <=  count.length; i++){
        arrCount.push(i);
      }
      set(arrCount);

    }
    const saveBook = (form) => {
      const data = new FormData(form.current);
      //data.get('TITLE')
      addBookDispatch(data);
      
    }
    const handleClickForm = (event, form) => {
      event.preventDefault();
      switch(event.target.dataset.action){
        case `addAuthor`:
          addAuthor(form.setCount, form.authorsCount)
          break;
        case `removeAuthor`:
          removeAuthor(form.setCount, form.authorsCount)
        break;  
        case `saveBook`:
          saveBook(formRef)
        break;
      }
    
    }

    return  (
        <form ref={formRef} onClick={(e)=>handleClickForm(e,{setCount, authorsCount})}>
          <div>
            <input name='TITLE' type='text' placeholder='заголовок'></input>
          </div>
          <div>
            список авторов
            <div className='author-list'>
                {authorsCount.map(index => (
                  <li key={index}>
                    <div className='author-item'>    
                      <input name='AUTHOR_NAME[]' placeholder='Имя'></input>
                      <input name='AUTHOR_FAMILY[]' placeholder='Фамилия'></input>
                    </div>
                  </li>
                ))}
                <input data-action="addAuthor" type='button' value='+'></input>
                <input data-action="removeAuthor" type='button' value='-'></input>
            </div>
          </div>
          <input placeholder='количество страниц '></input>
          <input placeholder='название издательства' ></input>
          <input placeholder='год публикации'></input>
          <input placeholder='дата выхода в тираж'></input>      
          <input placeholder='ISBN'></input>
          <input placeholder='изображение'></input>
          <button data-action="saveBook">Добавить</button>
        </form>
    )
}


const mapDispatchToProps = (dispatch) => ({
  addBookDispatch(form) {
    console.log(form)
    dispatch(addBook(form));
  }
});

const mapStateToProps = (state) => {
  return {}
}

export {AddScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);