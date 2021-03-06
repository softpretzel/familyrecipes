import React, { useEffect, useState } from 'react'
import useFormInput from '../hooks/useFormInput'






const Name = (props) => {


    // const [name, setName] = useState('')
    // const [nameError, setNameError] = useState('')

    // let valid = true
    // // if name input is empty
    // if (setName.length === 0) {
    //   valid = false
    //   setName('Cannot be blank')
    //   setNameError({
    //     nameClass: 'error'
    //   })
    // }

    // function nameValidate(e) {
    //   e.preventDefault()
    //   let valid = true
    //
    //   if (name === '') {
    //     valid = false
    //     setNameError('Cannot be blank')
    //   }
    //
    //   if (valid == true) {
    //     // send this to action file
    //   }
    //
    // }


    const [values, changeForm] = useFormInput({...props.formData});

    let manageFunc = props.manageForm;

    useEffect(() => {
        manageFunc('name', values);
    }, [values]);

          return (

              <div>
                <h1>Name</h1>
                <input
                  type="text"
                  name="name"
                  className="formInput"
                  onChange= {changeForm}
                  value=  {values.name || ''}
                  placeholder="Grandma's Famous Chicken"
                />
              </div>

        )
    }


export default Name;
