import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ERROR_MESSAGE = {
  TITLE_ERROR: `Заголовок обязательный параметр, не более 30 символов`,
  TITLE_ERROR_NULL: `Заголовок обязательный параметр`,
  AUTOR_COUNT_ERROR: `Книга должна содержать хотя бы одного автора`,
  AUTOR_NAME_ERROR: `Имя автора (обязательный параметр, не более 20 символов)`,
  AUTHOR_FAMILY_ERROR: `Фамилия автора (обязательный параметр, не более 20 символов)`,
  COUNT_PAGE_ERROR: `количество страниц (обязательный параметр, больше 0 и не более 10000)`,
  PUBLISHING_ERROR: `название издательства (опциональный параметр, не более 30 символов)`,
  YEAR_ERROR: `год публикации (опциональный параметр, не раньше 1800)`,
  MIN_DATE_TIR: `01.01.1800`,
  MIN_DATE_TIR_TEXT: `дата выхода в тираж (опциональный параметр, не раньше 01.01.1800)`,
  CORRECT_IBSNs: [
    `99921-58-10-7`,
    `9971-5-0210-0`,
    `960-425-059-0`,
    `80-902734-1-6`,
    `85-359-0277-5`,
    `1-84356-028-3`,
    `0-684-84328-5`,
    `0-8044-2957-X`,
    `0-85131-041-9`,
    `93-86954-21-4`,
    `0-943396-04-2`,
    `0-9752298-0-X`	
  ],
  IBSN_ERROR_TEXT: `ISBN не корректный`,
}


const withValidation = (ComponentOutside) => {
    const WithValidation = (props) => {
   
        const [authorsCount, setCount] = useState([]);
        const [file, setFile] = useState(null);
        const [errors, setErrors] = useState([]);
        const formRef = React.createRef();
        
        const {addBook} = props; 


        const validationForm = (form) => {
          const errorList = [];
          const formData = new FormData(form.current);
          /*
          Список условий:
            - заголовок (обязательный параметр, не более 30 символов)
            - список авторов (книга должна содержать хотя бы одного автора)
              - имя автора (обязательный параметр, не более 20 символов)
              - фамилия автора (обязательный параметр, не более 20 символов)    
            - количество страниц (обязательный параметр, больше 0 и не более 10000)
            - название издательства (опциональный параметр, не более 30 символов)
            - год публикации (опциональный параметр, не раньше 1800)
            - дата выхода в тираж (опциональный параметр, не раньше 01.01.1800)
            - ISBN с валидацией (опциональный параметр, http://en.wikipedia.org/wiki/International_Standard_Book_Number)
            - изображение (опциональный параметр)
          */
      
          if (formData.get('TITLE').length > 30) {
            errorList.push(ERROR_MESSAGE.TITLE_ERROR);
          }else if(formData.get('TITLE').length == 0){
            errorList.push(ERROR_MESSAGE.TITLE_ERROR_NULL);
          }
          if(Number(authorsCount.length) === 0){
            errorList.push(ERROR_MESSAGE.AUTOR_COUNT_ERROR);
          }else{
            for(let i = 0; i < authorsCount.length; i++){
              if(formData.get(`AUTHOR_NAME[${i}]`).length > 20){
                errorList.push(ERROR_MESSAGE.AUTOR_NAME_ERROR);
              }
              if(formData.get(`AUTHOR_FAMILY[${i}]`).length > 20){
                errorList.push(ERROR_MESSAGE.AUTHOR_FAMILY_ERROR);
              }
            }
          }
          
          if(Number(formData.get(`COUNT_PAGE`)) === 0 || Number(formData.get(`COUNT_PAGE`)) > 10000 ){
            errorList.push(ERROR_MESSAGE.COUNT_PAGE_ERROR);
          }
    
          if(formData.get(`PUBLISHING`) > 30 ){
            errorList.push(ERROR_MESSAGE.PUBLISHING_ERROR);
          }
    
          if(formData.get(`AGE`) && formData.get(`AGE`) < 1800 ){
            errorList.push(ERROR_MESSAGE.YEAR_ERROR);
          }
     
          if(
            formData.get(`DATE`) && new Date(ERROR_MESSAGE.MIN_DATE_TIR) < new Date(formData.get(`DATE`))
          ){
            errorList.push(ERROR_MESSAGE.MIN_DATE_TIR_TEXT);
          }
    
          if(
            formData.get(`ISBN`)
          ){
            let ibsn;
            for(let i = 0; i < ERROR_MESSAGE.CORRECT_IBSNs.length; i++){
              if (ERROR_MESSAGE.CORRECT_IBSNs[i] == formData.get(`ISBN`)) {
                ibsn = true;
                break;
              }else ibsn = false;
            }
            !ibsn ? errorList.push(ERROR_MESSAGE.IBSN_ERROR_TEXT) : null ;
          }
          
          if(errorList.length > 0){
            setErrors(
              errorList
            );
            return null
          }
          return true;
        }
    
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
          data.append('FILE',file);
          addBook(data);
        }
        const handleFiles = files => {
          setFile(files.base64);
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
                validationForm(formRef) ? saveBook(formRef) : null;    
              break;
            }
        }
   
        return  <ComponentOutside 
                    handleFiles={handleFiles}
                    handleClickForm={handleClickForm}
                    errors={errors}
                    formRef={formRef}
                    setCount={setCount}
                    authorsCount={authorsCount}
                    file={file}
                />
    }



    return WithValidation;
};

export default withValidation;
