import React from 'react';

import * as AllIcons from '../components/icons'
import Avatar from '../components/avatar'

export default {
  title: 'Icons',
};

export const allIcons = () => (
  <div className="allicons">
    <AllIcons.ArrowBottom />
    <AllIcons.Bookmark />
    <AllIcons.BookmarkFill />
    <AllIcons.Emoji />
    <AllIcons.Explore />
    <AllIcons.ExplorerFill />
    <AllIcons.Gif />
    <AllIcons.Home />
    <AllIcons.HomeFill />
    <AllIcons.Like />
    <AllIcons.Lists />
    <AllIcons.ListsFill />
    <AllIcons.Media />
    <AllIcons.Messages />
    <AllIcons.MessagesFill />
    <AllIcons.More />
    <AllIcons.Notification />
    <AllIcons.NotificationFill />
    <AllIcons.Options />
    <AllIcons.Profile />
    <AllIcons.ProfileFill />
    <AllIcons.Question />
    <AllIcons.Reply />
    <AllIcons.Retweet />
    <AllIcons.Search />
    <AllIcons.Share />
    <AllIcons.TimelineProp />
    <AllIcons.Twitter />
  </div>
);


export const ProfilePhoto = () => (
  <Avatar />
)
