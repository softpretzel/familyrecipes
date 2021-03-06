import React, { useEffect } from 'react'
import useFormInput from '../hooks/useFormInput'

const Directions = (props) => {

    const [values, changeForm, resetForm] = useFormInput({...props.formData})

    let manageFunc = props.manageForm

    useEffect( () => {
        manageFunc('directions', values)
    }, [values])

        return (
        
                <div >
                    
                    <h1>Directions</h1>


                    <textarea
                        type="text"
                        name="directions"
                        className="directions"
                        placeholder="First step is to..."
                        onChange= {changeForm}
                        value={values.directions || ''}
                    />
                </div>

        )

}

export default Directions
