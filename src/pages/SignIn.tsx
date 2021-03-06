import {makeStyles, Typography} from '@material-ui/core';
import React, {useState} from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ChatBubbleOutline';
import { ModalBlock } from '../components/ModalBlock';
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";



export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71C9F8',
    flex: '0 0 50%',
    position: 'relative',
    overflow: 'hidden',
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '45%',
    top: '53%',
    transform: 'translate(-50%, -50%)',
    width: '350%',
    height: '350%',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    }
  },
  blueSideListInfoItem: {
    marginBottom: 40
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 10,
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  }
}));


export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn()
  const [visibleModal, setVisibleModal] = useState<'signIn'|'signUp'>();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn')
  }

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp')
  }

  const handleCloseModal = () : void => {
    setVisibleModal(undefined)
  }

  return(
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon}/>
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon}/>
              ?????????????? ?? ??????, ?????? ?????? ??????????????????.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcon}/>
              ??????????????, ?? ?????? ?????????????? ?? ????????.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListInfoIcon}/>
              ?????????????????????????????? ?? ??????????????.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={classes.loginSideTwitterIcon}/>
          <Typography className={classes.loginSideTitle} variant="h4">
            ??????????????, ?????? ???????????? ???????????????????? ?? ???????? ?????????? ????????????
          </Typography>
          <Typography>
            <b>?????????????????????????????? ?? ???????????????? ?????????? ????????????!</b>
          </Typography>
          <br/>
          <Button onClick={handleClickOpenSignUp} style={{marginBottom: 20}} variant="contained" color="primary" fullWidth>????????????????????????????????????</Button>
          <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>??????????</Button>
          <ModalBlock
            visible={visibleModal === 'signIn'}
            title="?????????? ?? ??????????????"
            classes={classes}
            onClose={handleCloseModal}
          >
              <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                  <TextField
                    className={classes.loginSideField}
                    autoFocus
                    id="email"
                    label="E-Mail"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    className={classes.loginSideField}
                    autoFocus
                    id="password"
                    label="????????????"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    type="password"
                    fullWidth
                  />
                  <Button onClick={handleCloseModal} color="primary" variant="contained" fullWidth>
                    ??????????
                  </Button>
                </FormGroup>
              </FormControl>
          </ModalBlock>
          <ModalBlock
            visible={visibleModal === 'signUp'}
            title="???????????????? ?????????????? ????????????"
            classes={classes}
            onClose={handleCloseModal}
          >
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id=""
                  label="??????"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="????????????"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button onClick={handleCloseModal} color="primary" variant="contained" fullWidth>
                  ??????????
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  )
};