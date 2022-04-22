import React, { useContext, useState } from 'react';

// ---------- ViewStateContext ----------
type ViewState = { isEditing: boolean };
type ViewStateSetter = (ViewState: ViewState) => void;

/** ViewStateContext contains ViewState and ViewStateSetter */
const ViewStateContext = React.createContext<
  { ViewState: ViewState; setViewState: ViewStateSetter } | undefined
>(undefined);

// ---------- ViewStateContextProvider ----------
interface ViewStateContextProviderProps {
  children?: React.ReactNode;
}

function ViewStateContextProvider({ children }: ViewStateContextProviderProps) {
  const [ViewState, setViewState] = useState<ViewState>({
    isEditing: false,
  });

  const value = { ViewState, setViewState };
  return (
    <ViewStateContext.Provider value={value}>
      {children}
    </ViewStateContext.Provider>
  );
}

// ---------- useViewStateContext ----------
function useViewStateContext() {
  const ViewStateContext = useContext(ViewStateContext);
  /* istanbul ignore next */
  if (ViewStateContext === undefined) {
    throw new Error(
      'useViewStateContext must be used within a ViewStateContextProvider'
    );
  }
  return ViewStateContext;
}

export { ViewStateContextProvider, useViewStateContext };
