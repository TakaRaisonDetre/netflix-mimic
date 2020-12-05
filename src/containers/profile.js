import React from 'react';
import {Header} from '../components'
import { Profile } from '../components/header/styles/header';
import * as ROUTES from '../constants/routes'
import logo from '../log.svg'

export default function SelectProfileContainer({user, setProfile}) {
    return (
       <><Header bg={false}>
           <Header.Frame>
               <Header.Logo to={ROUTES.HOME} src={logo} alt="NetFlix"/>
           </Header.Frame>
           </Header> 

           <Profiles>
               <Profiles.Title>WHo is wating?</Profiles.Title>
               <Profile.List>
                   <Profiles.User src={user.photoURL}>
                     <Profiles.Name> {user.displayName}</Profiles.Name>

                   </Profiles.User>
               </Profile.List>
           </Profiles>
           </>
    );
}
