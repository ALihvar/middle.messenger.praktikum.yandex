import { Block } from "./block";

export interface Listeners {
  [key: string]: Function[];
}

export type Props = {
  components?: { [key: string]: Block };
  events?: {
    [key: string]: (event: Event) => void;
  };
};
export interface Meta {
  props: Props;
}
