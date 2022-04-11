import tw, { styled } from 'twin.macro';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as RadixDialog from '@radix-ui/react-dialog';
import { Wrapper } from '../Wrapper';

export const ProfileVideoWrapper = styled(Wrapper)`
  ${tw`
    py-10
  `}
`;

export const Thumbnail = styled(AspectRatio.Root)`
  ${tw`
    flex
    w-full
    items-center 
    justify-center
    overflow-hidden
    relative
  `}

  img{
    ${tw`
      w-full
    `}
  }
`;

export const ImageOverlay = styled.div`
  ${tw`
    w-full
    h-full 
    absolute 
    bg-black 
    opacity-40 
    top-0 
    left-0
  `}
`;

export const Dialog = styled(RadixDialog.Root)``;

export const PlayButton = styled(RadixDialog.Trigger)`
  ${tw`
    text-[120px]
    absolute
    rounded-full
    flex 
    items-center 
    justify-center
    text-accent
  `}
`;

export const Backdrop = styled(RadixDialog.Overlay)`
  ${tw`
    top-0 
    left-0
    w-full 
    h-screen 
    fixed 
    bg-black 
    opacity-80 
    z-[14000]
  `}
`;

export const VideoPlayer = styled(RadixDialog.Content)`
  ${tw`
    fixed 
    flex 
    justify-center 
    items-center
    top-1/2 
    left-1/2 
    -translate-x-1/2
    -translate-y-1/2
    w-11/12 
    md:w-7/12
    z-[15000]
  `}

  .youtubeContainer {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    ${tw`
      bg-[#1E1E1E]
    `}
  }

  .youtubeContainer iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const VideoDescription = styled.div`
  ${tw`
    absolute
  `}
`;

export const CloseIcon = styled(RadixDialog.Close)`
  ${tw`
    fixed 
    bottom-full 
    right-0
    mb-2
    text-lg
    sm:text-2xl
    text-white 
    z-[9999]
    bg-white
    dark:bg-accent 
    text-primary
    p-1
    sm:p-2 
    rounded-full
  `}
`;
