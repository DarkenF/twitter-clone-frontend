import React from 'react';
import clsx from 'clsx';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

import { Avatar, IconButton, Paper, Typography } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({text, user, classes,}): React.ReactElement => {

  return (
    <Paper className={clsx(classes.tweet, classes.tweetsHeader)} variant="outlined">
      <Avatar
        className={classes.tweetAvatar}
        alt={`Аватарка пользователя ${user.fullName}`}
        src={user.avatarUrl}
      />
      <div>
        <Typography>
          <b>{user.fullName}</b>&nbsp;
          <span className={classes.tweetUserName}>@{user.userName}</span>&nbsp;
          <span className={classes.tweetUserName}>·</span>&nbsp;
          <span className={classes.tweetUserName}>1 ч</span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
        <div className={classes.tweetFooter}>
          <div>
            <IconButton>
              <CommentIcon style={{ fontSize: 20 }} />
            </IconButton>
            <span>1</span>
          </div>
          <div>
            <IconButton>
              <RepostIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <LikeIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <ShareIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
        </div>
      </div>
    </Paper>
  );
};
