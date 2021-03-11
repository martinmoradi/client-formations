import { Provider } from 'react-redux';
import { store } from '../../redux/store';

interface Props {
  children: JSX.Element[] | JSX.Element | React.ReactNode
}

const AppWrapper: React.FC<Props> = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
  )

export default AppWrapper
