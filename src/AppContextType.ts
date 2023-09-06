import { AllowedEventsKeys } from './AllowedEventsKeys';
import { ComponentState } from './ComponentState';
import { AppSubsrcibersLookUp } from './AppSubsrcibersLookUp';

export type AppContextType = {
  subscribers: AppSubsrcibersLookUp | undefined;
  elementTree: JSX.Element;
  addComponentToSubscribers: (
    key: string,
    state: ComponentState
  ) => AppSubsrcibersLookUp;
  triggeredComponent: triggeredComponent;
  handleEvent: (key: AllowedEventsKeys) => void;
};
