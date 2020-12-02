import React from 'react'
import {Footer} from '../components'

export function FooterContainer(){
    return (
        <Footer>
           <Footer.Title>Questions? Contact us</Footer.Title>
           <Footer.Break/>
           <Footer.Row>
               <Footer.Column>
                   <Footer.Link href="#">FAQ </Footer.Link>
                   <Footer.Link href="#">Community Relations</Footer.Link>
                   <Footer.Link href="#">Ways to Watch</Footer.Link>
                   <Footer.Link href="#">Corporate Infomation</Footer.Link>
                   
               </Footer.Column>

               <Footer.Column>
                   <Footer.Link href="#">Help Center </Footer.Link>
                   <Footer.Link href="#">Jobs</Footer.Link>
                   <Footer.Link href="#">Terms of Use</Footer.Link>
                   <Footer.Link href="#">Contact Us</Footer.Link>
                  
               </Footer.Column>

               <Footer.Column>
                   <Footer.Link href="#">Help Center </Footer.Link>
                   <Footer.Link href="#">Jobs</Footer.Link>
                   <Footer.Link href="#">Cookie Policy</Footer.Link>
                   <Footer.Link href="#">Legal Notice</Footer.Link>
                  
               </Footer.Column>

               <Footer.Column>
                   <Footer.Link href="#">About Suruga Creater Village</Footer.Link>
                   <Footer.Link href="#">Musician Application</Footer.Link>
                   <Footer.Link href="#">Videographer Application</Footer.Link>
                   <Footer.Link href="#">Investor Application</Footer.Link>
                  
               </Footer.Column>

           </Footer.Row>
           <Footer.Break/>
         <Footer.Text>Copyrights @ Shizflix Shizuoka Japan - SCV </Footer.Text>
        </Footer>
    )
}