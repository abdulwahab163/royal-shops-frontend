import {
  NavLink as RouterLink,
  matchPath,
  useLocation
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, ListItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { logout } from './../redux/actions/auth.actions'

const NavItem = ({
  href,
  icon: Icon,
  title,
  ...rest
}) => {
  const location = useLocation();
  const dispatch = useDispatch()

  const active = href ? !!matchPath({
    path: href,
    end: false
  }, location.pathname) : false;
  return (

    <ListItem
      onClick={() => { rest.isclick && dispatch(logout()) }}
      disableGutters
      sx={{
        display: 'flex',
        py: 0
      }}
      {...rest}
    >
      <Button
        component={RouterLink}
        sx={{
          color: 'text.secondary',
          fontWeight: 'medium',
          justifyContent: 'flex-start',
          letterSpacing: 0,
          py: 1.25,
          textTransform: 'none',
          width: '100%',
          ...(active && {
            color: 'primary.main'
          }),
          '& svg': {
            mr: 1
          }
        }}
        to={href}
      >
        {Icon && (
          <Icon size="20" />
        )}
        <span>
          {title}
        </span>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
