import React from 'react';
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai';
import { DialogPortal, DialogTitle, DialogDescription } from '@radix-ui/react-dialog';
import YouTube from 'react-youtube';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  ProfileVideoWrapper,
  Thumbnail,
  PlayButton,
  Dialog,
  ImageOverlay,
  Backdrop,
  VideoPlayer,
  VideoDescription,
  CloseIcon,
} from './ProfileVideo.style';

const videoOptions = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const ProfileVideo = () => {
  return (
    <ProfileVideoWrapper>
      <Thumbnail ratio={2.2 / 1}>
        <ImageOverlay />
        <img
          src="https://images.pexels.com/photos/690729/pexels-photo-690729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Video Profile Thumbnail"
        />
        <Dialog>
          {/* Trigger */}
          <PlayButton aria-label="Play profile video">
            <AiFillPlayCircle />
          </PlayButton>

          {/* Portal */}
          <DialogPortal>
            {/* Overlay */}
            <Backdrop />

            {/* Content */}
            <VideoPlayer>
              <CloseIcon id="pol">
                <AiOutlineClose />
              </CloseIcon>

              <YouTube
                containerClassName="youtubeContainer"
                videoId="6stlCkUDG_s"
                opts={videoOptions}
              />

              {/* For accessibility */}
              <VisuallyHidden asChild>
                <VideoDescription>
                  <DialogTitle>Company Profile Video</DialogTitle>
                  <DialogDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nulla.</DialogDescription>
                </VideoDescription>
              </VisuallyHidden>
            </VideoPlayer>
          </DialogPortal>
        </Dialog>
      </Thumbnail>
    </ProfileVideoWrapper>
  );
};

export default ProfileVideo;
