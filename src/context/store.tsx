import React, { useContext, ReactNode, useEffect } from 'react';
import { useImmerReducer, Reducer } from 'use-immer';

export enum ActionType {
  SET_ITEM = 'setItem',
  RESET_APP = 'resetApp',
}

export const initialState: AppState = {
  item: {},
};

export type AppState = {
  item: any;
};

export type DispatchedAction = {
  type: string;
  payload?: any;
};

export const reducer: Reducer<AppState, DispatchedAction> = (state, action) => {
  switch (action.type) {
    case ActionType.SET_ITEM:
      state.item = action.payload?.item;
      break;
    case ActionType.RESET_APP:
      return initialState;
    default:
      throw new Error(`Invalid action dispatched, type: ${action.type}`);
  }
};

const initialDispatch: React.Dispatch<DispatchedAction> = () => ({});

const StateContext = React.createContext(initialState);
const DispatchContext = React.createContext(initialDispatch);

type ProviderProps = {
  children: ReactNode[] | ReactNode;
};

export const initializer = (initializedState = initialState) => {
  return initializedState;
};

export const AppProvider = ({ children }: ProviderProps): JSX.Element => {
  const [state, dispatch] = useImmerReducer<AppState, DispatchedAction>(reducer, initialState, initializer);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAppState = (): AppState => useContext(StateContext);
export const useAppDispatch = (): React.Dispatch<DispatchedAction> => useContext(DispatchContext);
