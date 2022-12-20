
import React from 'react';
import './PersonCard.css';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

export const AddEventPopup = ({ isOpen, handleClose }) => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    React.useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    const handleSaveEvent = (event) => {
        let localErrorMessage = '';
        if (title.trim() === '' || location.trim() === '' || date.toString().trim() === '' || time.toString().trim() === '') {
            setErrorMessage('Empty fields!');
            localErrorMessage = 'Empty fields!';
            return;
        } else {
            localErrorMessage = '';
            setErrorMessage('');
        }

        if (localErrorMessage.trim() === '') {
            //add new event for the auth user
        }
    };

    return (
        <Modal open={open}>
            <div className='addEventPopup'>
                <p
                    className='closePopup'
                    onClick={handleClose}
                >x</p>
                <p className='titlePopup'>New event</p>
                <TextField
                    type='text'
                    className='inputField'
                    label='Title'
                    variant='standard'
                    onChange={(e) => setTitle(e.target.value)}
                >
                </TextField>
                <TextField
                    type='text'
                    className='inputField'
                    label='Location'
                    variant='standard'
                    onChange={(e) => setLocation(e.target.value)}
                >
                </TextField>
                <TextField
                    type='date'
                    className='inputField'
                    label='   '
                    variant='standard'
                    onChange={(e) => setDate(e.target.value)}
                >
                </TextField>
                <TextField
                    type='time'
                    className='inputField'
                    variant='standard'
                    onChange={(e) => setTime(e.target.value)}
                >
                </TextField>
                <TextField
                    type='text'
                    className='inputField'
                    label='Description'
                    variant='standard'
                    onChange={(e) => setDescription(e.target.value)}
                >
                </TextField>
                <br></br>
                {errorMessage && <div className="ErrorMessage">{errorMessage}</div>}
                <div className='saveButton'>
                    <button onClick={handleSaveEvent}>Save</button>
                </div>
            </div>
        </Modal>
    );
};