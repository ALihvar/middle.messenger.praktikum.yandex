export interface AvatarProps {
  events?: {
    [key: string]: (event: Event) => void;
  };
}
