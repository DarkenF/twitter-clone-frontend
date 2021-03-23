import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import React from 'react';

const useHomeStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 38,
  },
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  sideMenuListItem: {
    display: 'flex',
    alignItems: 'center',
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15
  },
  sideMenuListItemIcon: {
    fontSize: 28,
  }
}))

export const Home = () => {
  const classes = useHomeStyles()

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
              <IconButton className={classes.logo} aria-label="delete" color="primary">
                <TwitterIcon className={classes.logoIcon} color={"primary"}/>
              </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="delete" >
                <SearchIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="delete" >
                <NotificationsNoneIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="delete" >
                <MailOutlineIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="delete" >
                <BookmarkIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="delete" >
                <ListAltIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="delete" >
                <PermIdentityIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">Профиль</Typography>
            </li>

          </ul>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
