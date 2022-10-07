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

export default function AddPersonForm() {
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [dateStarted, setDateStarted] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    createUser({firstName: firstName, lastName: lastName, dateStarted: dateStarted});
    e.preventDefaults()
    handleClose();
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