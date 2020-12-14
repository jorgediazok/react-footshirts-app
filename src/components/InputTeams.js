import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const InputTeams = ({ teamsList, handleChange, selectedTeam }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Choose Your Team
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Team</InputLabel>
        <Select
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selectedTeam}
          onChange={handleChange}>
          {teamsList.map((team) => (
            <MenuItem key={team.fields.id} value={team.fields.id}>
              {team.fields.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default InputTeams;
