import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [fName, setName] = React.useState("");
  const handleReset = () => {
    setName("");
  };

  return (<div className="App">
  <header className="App-header">
    <div>
      <h1>TryIT</h1>
    </div>
    <div className="Ui">
    <div className="icon">
      <Button id="icon" onClick={handleClickOpen}>{<SettingsIcon/>}</Button>
      <div>
      <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>JsSIP UA settings</DialogTitle>
        <DialogContent>
        <TextField
          id="uriID"
          label="SIP URI"
          
        />
        </DialogContent>
        <DialogContent>
        <TextField
          required
          id="passId"
          label="SIP Passworld"
        />
         </DialogContent>
        <DialogContent>
          <TextField
          id="soketUri"
          label="Web SoketURI"
          value="wss://tryit.jssip.net:10443"
        />
         </DialogContent>
        <DialogContent>
        <FormGroup>
        <FormControlLabel label="Session Timers" id="sesstion"  labelPlacement="start" control={<Switch defaultChecked />} />
        </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
      </React.Fragment>
      </div>
    </div>
    <br></br>
      <div> 
        <TextField  onChange={(e) => setName(e.target.value)} 
value={fName}  label="Your name" variant="filled"/>
      </div>
      <br></br>
      <div className="btnReset"> 
        <Button variant='outlined' id="Reset" onClick={handleReset} >Reset</Button>
      </div> 
    </div>
    <br></br>
    <div className="Btnlogin">
      <Button id="login">{<ArrowForwardIcon/>}</Button>
    </div>
  </header>
</div>);
}
