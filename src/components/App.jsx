import MainPageTitle from './shared/MyPageTitle/MyPageTitle';

import '../styles/styles.scss';
export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <MainPageTitle text="My recipes" />
    </div>
  );
};
