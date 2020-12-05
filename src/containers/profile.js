import React from 'react';
import {Header} from '../components'
import {Profiles} from '../components';
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export default function SelectProfileContainer({user, setProfile}) {
    return (
       <><Header bg={false}>
           <Header.Frame>
               <Header.Logo to={ROUTES.HOME} src={logo} alt="NetFlix"/>
           </Header.Frame>
           </Header> 

           <Profiles>
              <Profiles.Title>WHo is wating?</Profiles.Title> 
               <Profiles.List>
                   <Profiles.Picture src={user.photoURL}/>
                     <Profiles.Name> {user.displayName}</Profiles.Name>

                   
               </Profiles.List>
           </Profiles>
           </>
    );
}
