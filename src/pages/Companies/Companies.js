import AltIconAvatar from 'rmw-shell/lib/components/AltIconAvatar'
import Business from '@material-ui/icons/Business'
import Divider from '@material-ui/core/Divider'
import ListActivity from 'rmw-shell/lib/containers/Activities/ListActivity'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import React, { Component } from 'react'
import { compose } from 'redux'
import { injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import { Activity } from 'rmw-shell'

class Companies extends Component {
  
  render() {
    const { intl } = this.props
    return (
      <Activity 
      root={{flexGrow:1}}     
      title={intl.formatMessage({ id: 'Relatorios' })}> 
        
      </Activity>
    )
  }
}

export default compose(
  injectIntl,
  withRouter,
  withTheme
)(Companies)
