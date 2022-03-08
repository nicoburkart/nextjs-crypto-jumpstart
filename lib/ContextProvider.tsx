import { createContext, ReactNode, useReducer } from 'react';
import { ctxReducer, defaultUser, IUserContext } from './userReducer';

//add more interfaces and implement like the userReducer
interface IContext {
  userCtx: IUserContext;
}

type Props = {
  children?: ReactNode;
};

export const AppCtx = createContext<IContext | null>(null);

export const CtxProvider = (props: Props) => {
  const [user, dispatch] = useReducer(ctxReducer, defaultUser);
  return (
    <AppCtx.Provider value={{ userCtx: { user, dispatch } }}>
      {props.children}
    </AppCtx.Provider>
  );
};
