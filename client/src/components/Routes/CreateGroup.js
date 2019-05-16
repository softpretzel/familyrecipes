import React, { useState, useContext } from 'react'
import { AuthContext } from "../../lib/auth"
import { createGroup } from '../../actions/actions'
import Header from '../header'
import Footer from '../footer'
// import { getGroups } from '../actions/actions'
// import { useSelector } from 'react-redux'
// import {Link} from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import store from '../store'



const CreateGroup = props => {

    const { user } = useContext(AuthContext)

    const [groupName, setGroupName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        createGroup(groupName, user).then(() => {
            props.history.goBack()
        })

    }



    return (
      <div>
        <Header />
                <div className = "createGroup">
                <span>Create Group</span>
                <form id="postCreatedGroup" onSubmit={handleSubmit}>
                <label>Title:</label>
                    <input
                        autocomplete="off"
                        type="text"
                        id="groupName"
                        name="groupName"
                        placeholder="Enter a group name..."
                        onChange={e => setGroupName(e.target.value)}
                    />
                    <button type="submit">
                        Create group
                    </button>


                </form>



                </div>
          <Footer />
        </div>



    )
}

export default CreateGroup
