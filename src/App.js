import React from 'react'
import Adresse from './component/profile/Adresse'
import FullName from './component/profile/FullName'
import ProfilePhoto from './component/profile/ProfilePhoto'

function App(){
    return(


        <div className="container">
            <ProfilePhoto/>
            <FullName/>
            <Adresse/>
            
            
        </div>

    )
}
export default App;