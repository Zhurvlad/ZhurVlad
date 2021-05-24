import React from 'react';
import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import ChatBubbleIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplyIcon from "@material-ui/icons/Reply";
import {useHomeStyles} from "../pages/Home";


interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export const Tweet: React.FC<TweetProps> = ({classes, text, user}:TweetProps): React.ReactElement => {

    return (
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant={"outlined"}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar className={classes.tweetAvatar} alt={`Аватарка пользователя ${user.username}`}
                                src={user.avatarUrl}
                        />
                    </Grid>
                    <Grid item xs={11} style={{padding: '12px 12px 12px 30px'}}>
                        <Typography>
                            <b>{user.username}</b>&nbsp;
                            <span className={classes.tweetUserName}>@{user.fullname}</span>&nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>1 ч</span>
                        </Typography>
                        <Typography variant={'body1'} gutterBottom>
                            {text}
                        </Typography>
                        <div className={classes.tweetFooter}>
                            <div>
                                <IconButton>
                                    <ChatBubbleIcon style={{fontSize: 20}}/>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <RepeatIcon style={{fontSize: 20}}/>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <FavoriteBorderIcon style={{fontSize: 20}}/>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <ReplyIcon style={{fontSize: 20}}/>
                                </IconButton>
                                <span>1</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
    );
};
