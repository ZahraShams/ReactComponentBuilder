import { AllowedEventsKeys } from './AllowedEventsKeys';
import { ComponentState } from './ComponentState';
import { AppSubsrcibersLookUp } from './AppContext';

export type AppContextType = {
  subscribers: AppSubsrcibersLookUp | undefined;
  handleOpenEvent: (key: string) => void;
  elementTree: JSX.Element;
  addComponentToSubscribers: (
    key: string,
    state: ComponentState
  ) => AppSubsrcibersLookUp;
  triggeredComponent: triggeredComponent;
  handleEvent: (key: AllowedEventsKeys) => void;
};
