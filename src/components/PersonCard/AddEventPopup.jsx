import React from "react";
import "./PersonCard.css";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { HOST, PORT } from "../../prodURL";
import axios from "axios";

export const AddEventPopup = ({ isOpen, handleClose }) => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [hour, setHour] = React.useState("");
  const [datetime, setDatetime] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [participants, setParticipants] = React.useState(2);
  const [imgSrc, setImgSrc] = React.useState(
    "https://www.shutterstock.com/image-photo/cup-herbal-tea-various-herbs-600w-1059447062.jpg"
  );
  const [errorMessage, setErrorMessage] = React.useState("");

  var today = new Date();
  const todayDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const inputs = {
    title,
    location,
    hour,
    datetime,
    description,
    imgSrc,
  };

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleSaveEvent = (event) => {
    let localErrorMessage = "";
    if (
      title.trim() === "" ||
      location.trim() === "" ||
      datetime.toString().trim() === "" ||
      hour.toString().trim() === ""
    ) {
      setErrorMessage("Empty fields!");
      localErrorMessage = "Empty fields!";
      return;
    } else {
      localErrorMessage = "";
      setErrorMessage("");
    }

    if (localErrorMessage.trim() === "") {
      const url = `http://${HOST}:${PORT}/addEvent`;
      console.log({token:localStorage.getItem("token")});
      axios
        .post(url, inputs, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((resp) => {
          console.log(resp);
          handleClose();
          window.location.reload();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  // const convertBase64 = (file) => {
  //     return new Promise((resolve, reject) => {
  //         const fileReader = new FileReader();
  //         fileReader.readAsDataURL(file);

  //         fileReader.onload = () => {
  //             resolve(fileReader.result);
  //         };

  //         fileReader.onerror = (error) => {
  //             reject(error);
  //         };
  //     });
  // };

  // const uploadImage = async (event) => {
  //     const file = event.target.files[0];
  //     const base64 = await convertBase64(file);
  //     setBase(base64);
  // };

  return (
    <Modal open={open}>
      <div className="addEventPopup">
        <p className="closePopup" onClick={handleClose}>
          x
        </p>
        <p className="titlePopup">New event</p>
        <TextField
          type="text"
          className="inputField"
          label="Title"
          variant="standard"
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>
        <TextField
          type="text"
          className="inputField"
          label="Location"
          variant="standard"
          onChange={(e) => setLocation(e.target.value)}
        ></TextField>
        <TextField
          type="date"
          className="inputField"
          label="   "
          variant="standard"
          InputProps={{ inputProps: { min: todayDate } }}
          onChange={(e) => setDatetime(e.target.value)}
        ></TextField>
        <TextField
          type="time"
          className="inputField"
          variant="standard"
          onChange={(e) => setHour(e.target.value)}
        ></TextField>
        <TextField
          type="text"
          className="inputField"
          label="Description"
          variant="standard"
          onChange={(e) => setDescription(e.target.value)}
        ></TextField>
        {/* <TextField
          type="number"
          className="inputField"
          label="Number of participants"
          variant="standard"
          InputProps={{ inputProps: { min: 2 } }}
          onChange={(e) => setParticipants(e.target.value)}
        ></TextField> */}
        {/* <TextField
                    type='file'
                    className='inputField'
                    label='Upload image'
                    variant='standard'
                    onChange={(e) => uploadImage(e)}
                >
                </TextField> */}
        <br></br>
        {errorMessage && <div className="ErrorMessage">{errorMessage}</div>}
        <div className="saveButton">
          <button onClick={handleSaveEvent}>Save</button>
        </div>
      </div>
    </Modal>
  );
};
