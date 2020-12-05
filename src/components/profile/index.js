import React from 'react'

import {Container, Title, List, Picture, Name} from './styles/profile'

export default function Profiles({children, ...restProps}){
return <Container {...restProps}>{children}</Container>
};

// Parts

Profiles.Title = function ProfileTitle({children, ...restProps}){
return <Title {...restProps}>{children}</Title>
};

Profiles.List = function ProfilesList({children, ...restProps}){
return <List {...restProps}>{children}</List>
}

Profiles.Name = function ProfilesName({children, ...restProps}){
    return <Name {...restProps}>{children}</Name>
}

Profiles.Picture = function ProfilesPicture({src, ...restProps}){
return <Picture {...restProps} src={src? `/images/users/${src}.png` : 
`/image/misc/loading.gic`}/>
}
