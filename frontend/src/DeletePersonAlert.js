import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { deleteUser } from './shared/headers';
import EnhancedTable from './PersonTable';

export default function DeletePersonAlert(id) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    deleteUser(id.id);
    handleClose();
  }

  return (
    <div>
        <IconButton color='primary' onClick={handleClickOpen}>
            <DeleteOutlineOutlinedIcon />
        </IconButton>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' autoFocus style = {{color:'red'}}>
            Delete
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}