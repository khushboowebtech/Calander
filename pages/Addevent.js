import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Grid } from "@mui/material";





  

const Addevent = ({newEvent,setNewEvent,handleEvent,handleClose}) => {
  
  return (
    <>
      <Grid>

        <TextField size="small"
          id="outlined-basic"
           label="Add Title"
            variant="outlined"
          value={newEvent.title}
          placeholder="Add Title"
          style={{ width: "100%", marginBottom: "10px" }}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <TextField size="small"
        id="outlined-basic"
        label="Description"
         variant="outlined"
          value={newEvent.description}
          placeholder="Add Description"
          style={{ width: "100%", marginBottom: "10px" }}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
          
        />
        <Box style={{display:"flex"}} >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
        label="start Date"
        selected={newEvent.start}
        value={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
       
        renderInput={(params) => <TextField style={{marginRight:10}} size="small"{...params} />}
      />


         

        <DatePicker
        label="End Date"
        selected={newEvent.end}
        value={newEvent.end}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
       
        renderInput={(params) => <TextField size="small" {...params} />}
      />
    </LocalizationProvider>
    </Box>
        <Box style={{display:"flex", marginTop:10}}>
        <Button variant="contained" onClick={handleEvent} style={{marginRight:15}} >Add Event</Button>
        <Button variant="contained" onClick={handleClose} >BACK</Button>
                
        </Box>

      </Grid>
    </>
  )
}

export default Addevent
