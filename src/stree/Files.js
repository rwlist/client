import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import File from './File';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExplorerAPI from './ExplorerAPI';

const styles = theme => ({
    path: {
        padding: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 1,
    },
    list: {
        maxHeight: 600,
        overflow: 'auto',
    }
});

class Files extends Component {
    render() {
        const { classes, status } = this.props;
        // TODO: material design components
        const displayed = [];
        const dir = this.props.path[this.props.path.length - 1];
        if (dir.ParentID && status !== 'multiselect') {
            displayed.push(['..', {
                ID: dir.ParentID,
                Type: 'directory',
            }]); 
        }
        if (this.props.files) {
            displayed.push(...(this.props.files.map(it => [it.Name, it])));
        }

        let listContent;
        if (status === 'ready') {
            listContent = (
                <List>
                    {displayed.map((it, index) => (
                        <File
                            name={it[0]}
                            type={it[1].Type}
                            key={it[1].ID}
                            onOpen={() => this.props.onOpen(it[1])}
                            onSelect={() => this.props.onSelect(it[1])}
                            selected={this.props.selected != null && it[1].ID === this.props.selected.ID}
                        />
                    ))}
                </List>
            );
        }
        if (status === 'multiselect') {
            listContent = (
                <List>
                    {displayed.map((it, index) => (
                        <File
                            name={it[0]}
                            type={it[1].Type}
                            key={it[1].ID}
                            onSelect={() => this.props.onSelect(it[1])}
                            selected={ExplorerAPI.isSelected(it[1], this.props.selected)}
                            multiselect
                        />
                    ))}
                </List>
            );
        }

        return (
            <Paper>
                <Typography variant="body2" gutterBottom className={classes.path}>
                    {this.props.path.map((it, index) => (
                        <a onClick={() => {console.log('go to dir', it)}} key={index}>
                            {it.Name + '/'}
                        </a>
                    ))}
                </Typography>
                <Divider/>
                {status === 'loading' && <CircularProgress />}
                <List className={classes.list}>
                    {listContent}
                </List>
            </Paper>
        )
    }
}

export default withStyles(styles)(Files);