import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    card: {
        minWidth: 275,
    }
})

class StringSettingCard extends Component {
    state = {
        newValue: '',
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        {this.props.name}
                    </Typography>
                    <Typography variant="title" component="p">
                        Current value: {this.props.value}
                    </Typography>
                    <TextField
                        id="new-value"
                        label="New value"
                        value={this.state.newValue}
                        onChange={this.handleChange('newValue')}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => this.props.update(this.state.newValue)}
                    >
                        Update
                    </Button>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(StringSettingCard)