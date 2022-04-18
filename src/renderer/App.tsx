import React from 'react';
import {Routes, Route, useParams, useLocation} from 'react-router-dom';
import Header from 'renderer/Components/Header';
import Home from 'renderer/Components/Pages/Home';
import Send from 'renderer/Components/Pages/Send'
import SendItem from 'renderer/Components/Pages/Send/SendItem'
import Receive from 'renderer/Components/Pages/Receive'
import History from 'renderer/Components/Pages/History'
import Config from 'renderer/Components/Pages/Config'
import DnD from 'renderer/Components/Common/DnD';
import styled from 'styled-components';
import constants from 'renderer/config/constants';
import useSocketIO from 'renderer/hooks/useSocketIO';

const { SOCKET_SERVER_URL } = constants;

const BasicBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: grey 1px solid;
  box-sizing: border-box;
  border-collapse: collapse;
  font-size: calc(10px + 2vmin);
`

const AppContainer = styled(BasicBox)`
  text-align: center;
  background-color: #282c34;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
`
const HeaderContainer = styled(BasicBox)`
  height: 100px;
  margin-bottom: -1px;
`
const BodyContainer = styled(BasicBox)`
  flex-direction: row;
  justify-content: flex-start;
  margin-left: -1px;
  margin-right: -1px;
`
const FooterContainer = styled(BasicBox)`
  height: 70px;
  margin-top: -1px;
`
const LeftPane = styled(BasicBox)`
  flex: 1;
  flex-direction: column;
  font-size: calc(1px + 2vmin);
  margin-left: -1px;
`;
const CenterPane = styled(BasicBox)`
  flex: 9;
  flex-direction: column;
  font-size: calc(1px + 2vmin);
  margin-right: -1px;
`;
const Index = () => {
  return <div>index</div>
}
const NotFound = () => {
  return <div>not found</div>
}
const Footer = () => {
  return <div>footer</div>
}
const IP = '127.0.0.1';
const PORT = 7000;
export default function App() {
  const [connected, setSocketConnected] = React.useState(false);
  const params = useParams();
  const location = useLocation();
  const { socket } = useSocketIO({
    hostAddress: SOCKET_SERVER_URL,
    setSocketConnected,
  });
  const { pathname } = location;
  console.log(params, location)
  const handleProgress = React.useCallback(props => {
    const {clientId, progress} = props;
    console.log(`progress event: ${clientId}, ${progress}`);
  },[])
  React.useEffect(() => {
    window.electron.util
    .tcpPing(IP, PORT)
      .then((result) => {
        result && console.log(`webserver is ready on ${IP}:${PORT}`);
        return true;
      })
      .catch((error) => {
        console.log(`webserver is not ready on ${IP}:${PORT}`);
      });
    window.electron.ipcRenderer.on('progress', handleProgress)
  },[])
  return (
    <AppContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <BodyContainer>
        {pathname !== '/history' && (
          <LeftPane>
            <div>left pane</div>
            <Routes>
              <Route index element={<Index />} />
              <Route path="/index.html" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LeftPane>
        )}
        <CenterPane>
          <div>center pane</div>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/send" element={<Send />}>
              <Route path=":sendId" element={<SendItem />} />
            </Route>
            <Route path="/receive" element={<Receive />} />
            <Route path="/history" element={<History />} />
            <Route path="/config" element={<Config />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CenterPane>
      </BodyContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </AppContainer>
  );
}
