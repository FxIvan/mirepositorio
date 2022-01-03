import React, {Component} from 'react'
import {withGetScreen} from 'react-getscreen'
import { Desktop } from '../desktop/Desktop'
import { Mobile } from '../mobile/Mobile'

class Screen extends Component{

    render(){
        if(this.props.isMobile()){
            return <Mobile/>
        }
        if(this.props.isTablet()){
            return <Mobile/>
        }
        return <Desktop/>
    }
}

export default withGetScreen(Screen)