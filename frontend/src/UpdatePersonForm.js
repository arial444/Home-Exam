import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import { updateUser } from './shared/headers';

export default function UpadatePersonForm(doc) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [role, setRole] = React.useState('');
  const [salary, setSalary] = React.useState('');
  const [manager, setManager] = React.useState('');

  const handleClickOpen = () => {
    setEmail(doc.doc.email);
    setRole(doc.doc.role);
    setSalary(doc.doc.salary);
    setManager(doc.doc.manager);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    updateUser(doc.doc.id, {'email': email, 'role': role, 'salary': salary, 'manager': manager});
    handleClose();
  }

  return (
    <div>
        <IconButton color='primary' onClick={handleClickOpen}>
            <EditOutlinedIcon />
        </IconButton>
      <Dialog open={open} onClose={handleClose}>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <DialogTitle>Edit Person</DialogTitle>
        <DialogContent>
            <TextField
                id="firstName"
                label="First Name"
                fullWidth
                style={{marginTop: '20px'}}
                InputProps={{
                    readOnly: true,
                }}
                variant="filled"
                value={doc.doc.firstName}
            />
            <TextField
                id="lastName"
                label="Last Name"
                fullWidth
                style={{marginTop: '10px'}}
                InputProps={{
                    readOnly: true,
                }}
                variant="filled"
                value={doc.doc.lastName}
            />
            <TextField
                id="email"
                label="Email"
                fullWidth
                style={{marginTop: '10px'}}
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={doc.doc.email}
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
                InputProps={{
                    readOnly: true,
                }}
                variant="filled"
                value={doc.doc.dateStarted}
            />
            <TextField
                id="role"
                label="Role"
                fullWidth
                select
                style={{marginTop: '10px'}}
                onChange={(e) => setRole(e.target.value)}
                defaultValue={doc.doc.role}
            >
                <MenuItem value='Manager'>Manager</MenuItem>
                <MenuItem value='Worker'>Worker</MenuItem>
                <MenuItem value='Driver'>Driver</MenuItem>
            </TextField>
            <TextField
                id="salary"
                label="Salary"
                fullWidth
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                style={{marginTop: '10px'}}
                onChange={(e) => setSalary(e.target.value)}
                defaultValue={doc.doc.salary}
            />
            <TextField
                id="manager"
                label="Manager"
                fullWidth
                style={{marginTop: '10px'}}
                onChange={(e) => setManager(e.target.value)}
                defaultValue={doc.doc.manager}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}