import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
    title: {
        marginBottom: 16,
        fontSize: 14,
      },
    message:{
        marginLeft: 10,
        marginRight: 10
    },
    flex: {
        flexGrow: 1,
      },
};

//on change
class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {
          userName: '',
        };
      }

      onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
      }
    
    render(){
        const { userName } = this.state;    
        return(
            <div>
            <Card>
            <AppBar position='static' color='primary'> 
                <Toolbar>
                    <Typography variant='title' color='inherit' style={styles.flex}>
                        Messenger-App v1    
                    </Typography>
                </Toolbar>
            </AppBar>
                
                <div>
                <CardActions>
                <TextField
                    id="name"
                    label="Name"
                    margin="normal"
                    />
                
                </CardActions>
                <Card style={styles.message}>
                    <CardContent>
                        <Typography>
                        </Typography>
                    </CardContent>
                </Card>
                <CardActions>
                <div>
                    
                    <TextField
                        id="message"
                        label="Message"
                        margin="normal"
                        />
                </div>
                </CardActions>
                <CardActions>
                <div>
                    <Button variant="contained" color="primary">
                        Send
                    </Button>
                </div>
                </CardActions>
                </div>
            </Card>
            </div>
        );
    }
}
export default Form;
