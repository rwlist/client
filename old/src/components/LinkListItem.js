import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import { withRouter } from 'react-router-dom'

const LinkListItem = withRouter(({ history, to, children }) => (
    <ListItem button onClick={() => history.push(to)}>
        {children}
    </ListItem>
))

export default LinkListItem