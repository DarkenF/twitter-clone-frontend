import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import {Typography} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import {useHomeStyles} from "../pages/Home";
import Button from '@material-ui/core/Button';

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}): React.ReactElement => {

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton className={classes.logo} aria-label="delete" color="primary">
            <TwitterIcon className={classes.logoIcon} color={"primary"}/>
          </IconButton>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
            <SearchIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
            <NotificationsNoneIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
            <MailOutlineIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
            <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
            <ListAltIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <PermIdentityIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Профиль</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth>
          Твитнуть
        </Button>
      </li>
    </ul>
  )
};