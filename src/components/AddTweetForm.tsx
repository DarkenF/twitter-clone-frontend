import React, {useState} from 'react';
import clsx from "clsx";

import Avatar from '@material-ui/core/Avatar/Avatar';
import Button from '@material-ui/core/Button/Button';
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {useHomeStyles} from "../pages/Home/theme";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}

const MAX_LENGTH = 280

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes, maxRows}): React.ReactElement => {
  const [text, setText] = useState<string>('')
  const textLimitPercent = text.length / MAX_LENGTH * 100;
  const textLimit = MAX_LENGTH - text.length

  const handleChangeTextArea = (e :React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget){
      setText(e.currentTarget.value)
    }
  }

  const handleClickAddTweet = (): void => {
    setText('')
  }


  return (
   <div>
     <div className={classes.addFormBody}>
       <Avatar
         className={classes.tweetAvatar}
         alt={`Аватарка пользователя UserAvatar`}
         src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg"
       />
       <TextareaAutosize
         onChange={handleChangeTextArea}
         className={classes.addFormTextarea}
         placeholder="Что происходит?"
         value={text}
         rowsMax={maxRows}
       />
     </div>
     <div className={classes.addFormBottom}>
       <div className={clsx(classes.tweetFooter, classes.addFormBottomActions)}>
         <IconButton color="primary">
           <ImageOutlinedIcon style={{ fontSize: 26 }} />
         </IconButton>
         <IconButton color="primary">
           <EmojiIcon style={{ fontSize: 26 }} />
         </IconButton>
       </div>
       <div className={classes.addFormBottomRight}>
         { text &&
          <>
             <span>{textLimit}</span>
             <div className={classes.addFormCircleProgress}>
                <CircularProgress
                   variant="static"
                   size={20}
                   thickness={5}
                   value={ text.length > MAX_LENGTH ? 100 : textLimitPercent}
                   style={  text.length >= MAX_LENGTH? { color: 'red'} : undefined}
                />
                <CircularProgress
                   style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                   variant="static"
                   size={20}
                   thickness={5}
                   value={100}
                />
             </div>
          </>
         }
         <Button
           disabled={ text.length > MAX_LENGTH}
           onClick={handleClickAddTweet}
           color="primary"
           variant="contained">
           Твитнуть
         </Button>
       </div>
     </div>
   </div>
 );
};