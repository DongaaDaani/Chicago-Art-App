import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import SearchArt from './Search/SearchArt.tsx'
import { Button } from 'react-bootstrap';
export default function Main() {


    const [arts, setArts] = useState([])
    const [pageNumber, setPageNumber] = useState(2)
    const [loadingClass, setLoadingClass] = useState("spinner-border text-primary")


    const getArtsInformation = async () => {
        const artRes = await Axios.get(`https://api.artic.edu/api/v1/artworks?page=${pageNumber}&limit=25`)
        console.log(artRes)
        setArts(artRes.data.data)
        setLoadingClass("");
    }


    useEffect(() => {
        getArtsInformation()
    }, []);

    return (
        <div>
            <h3 id="top" >Search:</h3>
            <div class="d-flex justify-content-center">
                <div class={loadingClass} role="status">
                </div>
            </div>

            <SearchArt details={arts} />

            <div className='d-flex justify-content-center'>
                <Button href="#top" variant='outline-primary' onClick={() => { setPageNumber(pageNumber - 1); getArtsInformation() }}>Vissza</Button>
                <Button href="#top" variant='outline-primary' onClick={() => { setPageNumber(pageNumber - 1); getArtsInformation() }}>{pageNumber - 1}</Button>
                <Button> {pageNumber} </Button>
                <Button href="#top" variant='outline-primary' onClick={() => { setPageNumber(pageNumber + 1); getArtsInformation() }}>{pageNumber + 1}</Button>
                <Button href="#top" variant='danger' onClick={() => { setPageNumber(pageNumber + 1); getArtsInformation() }}>Tovább</Button>
            </div>
        </div>
    )
}