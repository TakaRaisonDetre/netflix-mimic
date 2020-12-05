import React from 'react'
import {OptForm, Feature} from '../components'
import {HeaderContainer} from '../containers/header'
import {JumbotronContainer} from '../containers/jumbotron'
import {FaqsContainer} from '../containers/faqs'
import {FooterContainer} from '../containers/footer'

export default function home() {
    return (
        <div>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited Music, Video and Anime more from Japan</Feature.Title>
                    <Feature.SubTitle>
                        Watch from anywhere ! Cancel at Any Time !
                    </Feature.SubTitle>
                <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
                </Feature>
           
            </HeaderContainer>
            
            <JumbotronContainer/>
            <FaqsContainer/>
           <FooterContainer/>
           
        </div>
    )
}
