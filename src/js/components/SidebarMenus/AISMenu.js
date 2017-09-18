import React, {Component} from 'react'
import { Link } from 'react-router'
import Icon from '../Icon'


class AISMenu extends Component {

  linkClassName = (link) => {
    if (this.props.location.pathname.startsWith('/'+link)){
      return 'active'
    } else {
      return null
    }
  }

  render = () => {
    let menuItems = this.props.menuItems.map((menuItem) => {
      let iconName = undefined
      let iconSrc= undefined
      if(menuItem.icon.startsWith("http://")) {
        iconSrc = menuItem.icon
      } else {
        iconName = menuItem.icon
      }

      return <Link key={menuItem.href} className={this.linkClassName(menuItem.href)} to={global.baseURL+menuItem.href}>
        <Icon name={iconName} src={iconSrc} />
        {menuItem.name}
      </Link>
    })

    if(this.props.enabled) {
    return <section>
      <title>AI-Speaker</title>
      {menuItems}
    </section>
    } else {
      return null;
    }
  }
}

export default AISMenu