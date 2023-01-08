import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import ArtDetail from './ArtDetail.tsx'
import FavoriteAddAlert from '../FavoriteAddAlert.tsx'


export default function Art({ filteredArts }) {


    const [addModelShow, setAddModelShow] = useState(false)
    const [favoriteModelShow, setFavoriteModelShow] = useState(false)
    const [selectedItem, setSelectedItem] = useState("")
    const [favoriteItems, setFavoriteItems] = useState([])


    const addModalClose = () => setAddModelShow(false);
    const addFavoriteModalClose = () => setFavoriteModelShow(false);



    const addFavorite = (item) => {
        console.log(item)
        let array = favoriteItems
        if(array){
            array.push(item)
            setFavoriteItems(array)
            localStorage.setItem('favItems', JSON.stringify(favoriteItems));
        }
    }


    return (

        <div className='conatiner'>
            <Row >
                {filteredArts.map((item) =>
                    <Col>
                        <Card style={{ width: '15rem', height: '28rem' }}>
                            <Card.Img variant="top" style={{ width: '15rem', height: '15rem' }} src={`https://www.artic.edu/iiif/2/${item.image_id}/full/100,/0/default.jpg`} />
                            <Card.Body>
                                <h5>{item.title}</h5>  <br />
                            </Card.Body>
                            <Card.Title>
                            </Card.Title>
                            <Button variant="outline-primary" onClick={() => { setSelectedItem(item); setAddModelShow(true) }}>See Details</Button>
                            <Button variant="outline-success" onClick={() => { addFavorite(item); setFavoriteModelShow(true); }}>Add to Favorite List</Button>
                        </Card>
                        <br />
                    </Col>
                )}
            </Row>
            <ArtDetail item={selectedItem} favoriteList={favoriteItems} provenance={selectedItem.provenance_text ? selectedItem.provenance_text : "Unknow"} credit={selectedItem.credit_line ? selectedItem.credit_line : "Unknow"} history={selectedItem.artist_display} place={selectedItem.place_of_origin ? selectedItem.place_of_origin : "Unknow"} show={addModelShow} title={selectedItem.title} department={selectedItem.department_title ? selectedItem.department_title : "Unknow"} artist={selectedItem.artist_title ? selectedItem.artist_title : "Unknow"} url={`https://www.artic.edu/iiif/2/${selectedItem.image_id}/full/100,/0/default.jpg`} onHide={addModalClose} />
            <FavoriteAddAlert show={favoriteModelShow} onHide={addFavoriteModalClose} />
        </div>
    )
}