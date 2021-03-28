import React from 'react';
import clsx from "clsx";
import {Avatar, Grid, Paper, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import {useHomeStyles} from "../pages/Home";

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  }
}

export const Tweet: React.FC<TweetProps> = ({classes, text,user  }) : React.ReactElement => {
  return (
    <Paper className={clsx( classes.tweetsHeader, classes.tweet)} variant="outlined">
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователя ${user.fullName}`}
            src={user.avatarUrl} />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <b>{user.fullName}</b>
            <span className={classes.tweetsUserName}>@{user.userName}</span>&nbsp;
            <span className={classes.tweetsUserName}>·</span>
            <span className={classes.tweetsUserName}>1ч</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi at, autem deleniti eum facilis magnam minima necessitatibus quaerat voluptas.
          </Typography>
          <div className={classes.tweetsFooter}>
            <div>
              <IconButton color="primary">
                <CommentIcon style={{ fontSize: 20 }}></CommentIcon>
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton color="primary">
                <RepostIcon style={{ fontSize: 20 }}></RepostIcon>
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <LikeIcon style={{ fontSize: 20 }}></LikeIcon>
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <ShareIcon style={{ fontSize: 20 }}></ShareIcon>
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
};

