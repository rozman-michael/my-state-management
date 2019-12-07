import React, { useReducer, createContext, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

const ActionsContext = createContext()
const StoreContext = createContext()

export const useActions = () => useContext(ActionsContext)
export const useStore = () => useContext(StoreContext)

export const StoreProvider = props => {
  const [ state, dispatch ] = useReducer(props.reducers, {});
  const actionsBindedWithDispatch = props.actions(dispatch);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <ActionsContext.Provider value={actionsBindedWithDispatch}>
        {props.children}
      </ActionsContext.Provider>
    </StoreContext.Provider>
  )
}

StoreProvider.propTypes = {
  reducers: PropTypes.func.isRequired,
  actions: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
}