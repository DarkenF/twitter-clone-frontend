import {
  Container,
  createStyles,
  Grid, InputBase,
  makeStyles,
  Paper,
  Typography, withStyles
} from '@material-ui/core';
import React from 'react';
import {grey} from "@material-ui/core/colors";
import { Tweet } from '../components/Tweet';
import {SideMenu} from "../components/SideMenu";


export const useHomeStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 230,
  },
  sideMenuListItem: {
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        }
      },
    },
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      left: -10,
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: 'background-color 0.1s ease-in-out'
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweet: {
    paddingTop: 15,
    paddingLeft: 20,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)',
    },
  },
  tweetAvatar: {
      width: theme.spacing(5),
      height: theme.spacing(5),
  },
  tweetsHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: '10px 15px',

    '& h6': {
      fontWeight: 800,
    }
  },
  tweetsFooter: {
    display: 'flex',
    position: 'relative',
    left: -13,
    justifyContent: 'space-between',
    width: 450
  },
  tweetsUserName: {
    color: grey[500],
  },

}))

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#e6ecf0',
      height: 45,
      padding: 0,
    }
  })
)(InputBase);

export const Home = () => {
  const classes = useHomeStyles()

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SideMenu classes={classes}/>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">
                Главная
              </Typography>
            </Paper>
            {
              [...new Array(20).fill(<Tweet
                user={{
                  fullName: 'Glafira Zhur',
                  userName: 'GlafiraZhur',
                  avatarUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1158&q=80',
                }}
                classes={classes}
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iusto laboriosam laborum maiores maxime non odio officia, provident quaerat vitae."
              />)]
            }
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField
            fullWidth
            placeholder="Поиск в Твиттере"
          />
        </Grid>
      </Grid>
    </Container>
  );
};
