import React from 'react'
import {useContent} from '../hooks'
import selectionFilter from '../utils/selection-filter'

export default function Browse() {
// series
const {series} = useContent('series');
const {films} = useContent('films');


console.log(series)
console.log(films)
//const slides=selectionFilter({series, films})
//console.log(slides)



    // we need the series and films and slide of them and pass it to the browse container
    return <BrowseContainer series={series} films={films}/>
}
