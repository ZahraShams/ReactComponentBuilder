import { ComponentState } from './ComponentState';
import { AppSubsrcibersLookUp } from './AppSubsrcibersLookUp';
import { Action } from './utils/Actions';

export type AppContextType = {
  subscribers: AppSubsrcibersLookUp | undefined;
  elementTree: JSX.Element;
  addComponentToSubscribers: (
    key: string,
    state: ComponentState
  ) => void;
  triggeredComponent: triggeredComponent;
  handleEvent: (action: Action) => void;
};
