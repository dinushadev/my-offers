import React,{Component} from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import TextField from 'material-ui/lib/text-field';
import Helmet from 'react-helmet';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import PersonalTheme from '../../themes/personal';
import { bindActionCreators } from 'redux';
import * as UserActions from '../../actions/user';
import AddNewItem from '../addItem/AddNewItem';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout(this.props.user);
  }

  handleToggle() {
    console.log('blabla');
    this.setState({open: !this.state.open});
  }

  render() {
    const {user} = this.props;
    return (
      <div>
        <AppBar
          zDepth={0}
          title={<Link style={{color: '#fff'}} to="/">OFFERS</Link>}

          iconElementRight={<div>
            <span>
              <TextField hintText="Search" />
              <IconButton iconStyle={{color: '#fff'}} iconClassName="fa fa-search"></IconButton>
            </span>
            <AddNewItem />
            <a target="_blank" href="https://github.com/WapGeaR/redux-react-material-boilerplate"><IconButton iconStyle={{color: '#fff'}} iconClassName="fa fa-sign-in"></IconButton></a>
            <a target="_blank" href="http://www.material-ui.com/#/components/app-bar"><IconButton iconStyle={{color: '#fff'}} iconClassName="fa fa-signin"></IconButton></a>
          </div>}
          />

        <LeftNav style={{paddingTop:'70px'}} open={this.state.open}>
          <Link to="/home"><MenuItem>Electronice</MenuItem></Link>
          {!user.info && <Link to="/login"><MenuItem>Fashion</MenuItem></Link>}
          {!user.info && <Link to="/register"><MenuItem>Home & Living</MenuItem></Link>}
          {!user.info && <Link to="/register"><MenuItem>Motor & Accessories</MenuItem></Link>}
          {!user.info && <Link to="/register"><MenuItem>Sport</MenuItem></Link>}
          {!user.info && <Link to="/register"><MenuItem>Computer, Laptop</MenuItem></Link>}
          {user.info && <MenuItem>Hi, {user.info.username}</MenuItem>}
          {user.info && <Link to="/dashboard"><MenuItem>Dashboard</MenuItem></Link>}

          <Link to="/about"><MenuItem secondaryText="&#8984;B">About</MenuItem></Link>
        </LeftNav>

      </div>
    );
  }
}

Header.getChildContext = {
  muiTheme: ThemeManager.getMuiTheme(PersonalTheme)
};

function mapStateToProps(state) {
  return {
    user : state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
