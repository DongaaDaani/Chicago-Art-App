
import React, { useState } from 'react';
import Art from '../Art/ArtList.tsx';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

/*
-A Filter Component, where you get the complete ArtList property and filtered them by the filteredArts methods.
-You can set the searchField. 
In this component call the Main Component, where you set the ArtList Propery using Axios.
*/
export default function SearchArt({ artList }) {

    const [searchField, setSearchField] = useState("");

    const filteredArts = artList.filter(
        arts => {
            return (
                arts.title.toLowerCase().includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <Art filteredArts={filteredArts} />
        );
    }

    return (
        <div className="pa2">
            <InputGroup size="lg" className="mb-5" style={{ width: '18rem' }}>
                <Form.Control
                    onChange={handleChange}
                    aria-label="Small"
                    placeholder='Search Artist by name'
                    aria-describedby="inputGroup-sizing-sm"
                />
            </InputGroup>
            {searchList()}
        </div>
    );
}
