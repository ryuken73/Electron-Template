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
export default function App() {
  const params = useParams();
  const location = useLocation();
  const { pathname } = location;
  console.log(params, location)
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
