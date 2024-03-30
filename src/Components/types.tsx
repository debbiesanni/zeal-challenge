interface PositionInt {
  x: number;
  y: number;
}
export interface ModalInt {
  open: boolean;
  leaveComment: Function;
  setComment: Function;
  position: PositionInt;
  comment: Array<{
    text: string;
    position: PositionInt;
    emoji: string;
  }>;
}

export type ModalFunct = (props: ModalInt) => JSX.Element;
export type HomeFunct = () => JSX.Element;
export type HomeContentFunct = () => JSX.Element;
