import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
// import styles from '../styles/Home.module.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Popping from "./popping";
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { eventThunk } from './redux/eventReducer';

import Addevent from './Addevent';

const locales = {
  'en-US': enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const events = [
  // {
  //   title: 'exam preparation',
  //   description: 'IAS exam is very soon',
  //   start: new Date(2022, 12, 0),
  //   end: new Date(2022, 12, 0),
  // },
  // {
  //   title: 'shopping',
  //   description: 'i love shopping',
  //   start: new Date(2022, 11, 4),
  //   end: new Date(2022, 11, 10),
  // },
  // {
  //   title: 'coding compition',
  //   description: 'leetcode is best platform',
  //   start: new Date(2022, 12, 20),
  //   end: new Date(2022, 12, 22),
  // },
];
export default function Home() {
  const dispatch = useDispatch();
  const { addevent } = useSelector((state) => state.eventReducer);
  const myArray = [...events, addevent];
  const [allEvents, setAllEvents] = useState(myArray);
  console.log('addevent', addevent);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    start: '',
    end: '',
  });
  const handleEvent = () => {
    var addnewEvent=newEvent
    addnewEvent['title']=newEvent.title +'-'+newEvent.description
    dispatch(eventThunk(addnewEvent));
    setAllEvents([...allEvents, addnewEvent]);

    showEventForm(false);
  };
  const [eventForm, showEventForm] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    showEventForm(false);
  };
  const closeEventClick = () => {
    setOpen(false);
    setTimeout(() => closeEvent(), 300);
  };
  const openEventClick = (event) => {
    setOpen(true);
    if (event.id) {
      ShowEventApi(event.id);
    }
  };
  return (
    <div style={{backgroundColor:"black",color:"white", padding:5}}>
      <h1 style={{textAlign:"center"}}>Calender app</h1>

      {console.log('kushbo', allEvents)}

      <Calendar
        selectable
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={() => showEventForm(true)}
        style={{ height: 500, backgroundColor: 'black', margin: '50px', color:"green"}}
      />
      <Modal show={eventForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-capitalize">{'Add Events'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Addevent
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            handleEvent={handleEvent}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}