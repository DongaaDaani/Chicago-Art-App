import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect,useState } from 'react';
import { Button } from 'react-bootstrap';

export default function FavoriteList() {

const [items, setItems] = useState(JSON.parse(localStorage.getItem('favItems')));

const removeItem=(list,name)=>{     
    list = list.filter((item) => item.title !== name)    
    localStorage.setItem('favItems', JSON.stringify(list));      
    setItems(list)
};
 
  return (
   
    <Table striped bordered hover>
       
      <thead>
        <tr>
          <th>Title</th>
          <th>Artlist</th>
          <th>Place of Origin</th>
          <th>Department</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
      {items.map((item) =>
                  <tr>
                     <td>{item.title}</td> 
                     <td>{item.artist_display}</td> 
                     <td>{item.place_of_origin}</td>
                     <td>{item.department_title}</td>
                     <td><Button onClick={()=>{removeItem(items,item.title); }}  variant="danger">Remove</Button> </td>
                      </tr>
                )}     
      </tbody>
    </Table>
  );
}
