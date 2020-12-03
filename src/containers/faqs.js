import React from 'react'
import faqData from '../fixtures/faqs.json'
import {Accordion} from '../components/'

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {
               faqData.map(item=>
                <Accordion.Item key={item.id}>
                <Accordion.Header>{item.header}</Accordion.Header>
               <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>) 
            }
           
        </Accordion>
    )
}
