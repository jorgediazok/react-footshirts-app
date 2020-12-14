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

const InputTeams = ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [teams, setTeams] = useState([]);

  const handleChange = (event) => {
    setTeams(event.target.value);
  };

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
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={teams}
          onChange={handleChange}>
          {data.map((team) => (
            <MenuItem value={team}>{team.fields.model}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default InputTeams;
