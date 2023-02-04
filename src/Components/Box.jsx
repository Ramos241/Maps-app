import React, { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const NOMINATIM_URL = ("https://nominatim.openstreetmap.org/search?");
const params = {
  q: "",
  format: "json",
  addressdetails: "ddressdetails"
}

const Box = (props) => {

  const {seletPosition, setSeletPosition} = props;

  const [serach, setSearch] = useState("");
  const [list, setList] = useState ([]);
  return (
    <div className='cont-Box' >
      <div className='sub-box'>
        <div className='OutlinedInput'>
          <OutlinedInput value={serach} onChange={(e) => {
            setSearch(e.target.value)
          }}
          />
        </div>
        <div className='cont-boton'>
          <Button variant="contained" color="primary" onClick={() => {
            const params = {
              q: serach,
              format: "json",
              addressdetails:1,
              polygon_geojson: 0
            };
            const queryString = new URLSearchParams(params).toString();
            const requestOptions = {
              method: "GET",
              redirect: "follow"
            };
            fetch(`${NOMINATIM_URL}${queryString}`,requestOptions)
            .then((response)=> response.text())
            .then((result)=>{
              // console.log(JSON.parse(result));
              setList((JSON.parse(result)));
            })
            .catch((err) => console.log("err: ", err))
          }}>
              Buscar
          </Button>
        </div>
      </div>
      <div className='lista'>
        <List component="nav" aria-label="main mailbox folders">
          {list.map(item => {
            return (
              <div key={item?.osm_id}>
                <ListItem button onClick={() =>{
                  setSeletPosition(item);
                }}>
                  <ListItemIcon>
                    <img className='imagen' src="../Popup.png" />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
                <Divider />
              </div>
            )
          })}
        </List>
      </div>
    </div>
  )
}

export default Box