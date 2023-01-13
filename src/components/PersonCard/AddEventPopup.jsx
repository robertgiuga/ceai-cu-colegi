import React from 'react';
import './PersonCard.css';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { Select, Option } from '@mui/joy';
import { HOST, PORT } from '../../prodURL';
import axios from "axios";

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function formatHour(date) {
    var d = new Date(date),
        hour = '' + d.getHours(),
        minutes = '' + d.getMinutes();

    if (hour.length < 2)
        hour = '0' + hour;
    if (minutes.length < 2)
        minutes = '0' + minutes;

    return [hour, minutes].join(':');
}

export const AddEventPopup = ({ isOpen, handleClose }) => {
    var today = new Date();
    const todayDate = formatDate(today);
    const todayHour = formatHour(today);

    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [hour, setHour] = React.useState(todayHour);
    const [datetime, setDatetime] = React.useState(todayDate);
    const [description, setDescription] = React.useState('');
    const [participantsNumber, setParticipantsNumber] = React.useState(3);
    const [imgSrc, setImgSrc] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [participants, setParticipants] = React.useState([]);
    const [availableUsers, setAvailableUsers] = React.useState([]);

    const handleChange = (event) => {
        const participant = availableUsers.find(user => user.email === event.target.outerText);
        setParticipants([participant]);
    };

    React.useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    const inputs = {
        title,
        location,
        description,
        datetime,
        hour,
        imgSrc,
        participantsNumber,
        participants
    };

    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    };

    const handleSaveEvent = (event) => {
        let localErrorMessage = '';
        if (title.trim() === '' || location.trim() === '' || datetime.toString().trim() === '' || hour.toString().trim() === ''
         || imgSrc.trim() === '' || participants.length === 0) {
            setErrorMessage('Empty fields!');
            localErrorMessage = 'Empty fields!';
            return;
        } else {
            localErrorMessage = '';
            setErrorMessage('');
        }

        if (localErrorMessage.trim() === '') {
            const url = `http://${HOST}:${PORT}/addEvent`;
            axios
                .post(url, inputs, { headers })
                .then(resp => {
                    console.log(resp);
                    handleClose();
                    window.location.reload();
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    React.useEffect(() => {
        const url = `http://${HOST}:${PORT}/users-available?date=${datetime}&time=${hour}`;
        fetch(url, { headers })
            .then(resp => resp.json())
            .then(resp => setAvailableUsers(resp))
            .catch(error => console.log({ error }))
    }, [datetime, hour]);

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const uploadImage = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        setImgSrc(base64);
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
                    InputProps={{ inputProps: { min: todayDate } }}
                    onChange={(e) => setDatetime(e.target.value)}
                    defaultValue={todayDate}
                >
                </TextField>
                <TextField
                    type='time'
                    className='inputField'
                    variant='standard'
                    onChange={(e) => setHour(e.target.value)}
                    defaultValue={todayHour}
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
                <TextField
                    type='number'
                    className='inputField'
                    label='Number of participants'
                    variant='standard'
                    InputProps={{ inputProps: { min: 3 } }}
                    onChange={(e) => setParticipantsNumber(e.target.value)}
                >
                </TextField>
                <TextField
                    type='file'
                    className='inputField'
                    label='Upload image'
                    variant='standard'
                    onChange={(e) => uploadImage(e)}
                >
                </TextField>
                <Select
                    placeholder="Choose participant.."
                    onChange={handleChange}
                    className="dropdown"
                >
                    {availableUsers.map((user) => {
                        return <Option value={user.email} style={{ backgroundColor: "#ffffff" }}>{user.email}</Option>
                    })}
                </Select>
                <br></br>
                {errorMessage && <div className="ErrorMessage">{errorMessage}</div>}
                <div className='saveButton'>
                    <button onClick={handleSaveEvent}>Save</button>
                </div>
            </div>
        </Modal >
    );
};
