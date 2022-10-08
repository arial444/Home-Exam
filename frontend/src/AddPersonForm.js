import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import { createUser } from './shared/headers';
import Alert from '@mui/material/Alert';

export default function AddPersonForm() {
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [dateStarted, setDateStarted] = React.useState('');
  const [severity, setSeverity] = React.useState('info');
  const [message, setMessage] = React.useState('Please fill all the fields.');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSeverity('info');
    setMessage('Please fill all the fields.');
  };

  const handleSubmit = (e) => {
    if (firstName === '' || lastName === '' || dateStarted === '')
    {
      e.preventDefault();
      setSeverity('error');
      setMessage('One or more fields are empty.');
    }
    else {
      createUser({firstName: firstName, lastName: lastName, dateStarted: dateStarted});
      //e.preventDefaults();
      handleClose();
    }
  };

  return (
    <div>
        <IconButton color='primary' onClick={handleClickOpen}>
            <AddCircleIcon />
            Add
        </IconButton>
      <Dialog open={open} onClose={handleClose}>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <DialogTitle>Add Person</DialogTitle>
        <DialogContent>
            <Alert severity={severity}>{message}</Alert>
            <TextField
                id="firstName"
                label="First Name"
                fullWidth
                style={{marginTop: '20px'}}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
                id="lastName"
                label="Last Name"
                fullWidth
                style={{marginTop: '10px'}}
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
                id="dateStarted"
                label="Date Started"
                type="date"
                defaultValue="2022-05-24"
                fullWidth
                style={{marginTop: '10px'}}
                InputLabelProps={{
                shrink: true,
                }}
                onChange={(e) => setDateStarted(e.target.value)}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}