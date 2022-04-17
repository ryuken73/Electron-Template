import {Routes, Route, useParams, useLocation} from 'react-router-dom';
import Header from 'renderer/Components/Header';
import Home from 'renderer/Components/Pages/Home';
import Send from 'renderer/Components/Pages/Send'
import Receive from 'renderer/Components/Pages/Receive'
import History from 'renderer/Components/Pages/History'
import Config from 'renderer/Components/Pages/Config'
import DnD from 'renderer/Components/Common/DnD';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  height: 100%;
  border: white 2px solid;
  box-sizing: border-box;
`
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`
const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`
const FooterContainer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`
const LeftPane = styled.div`
  flex: 1;
`;
const CenterPane = styled.div`
  flex: 9;
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
  console.log(params, location)
  return (
    <AppContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <BodyContainer>
        <LeftPane>
          <div>left pane</div>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LeftPane>
        <CenterPane>
          <div>center pane</div>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/index.html" element={<Home />} />
            {/* <Route path="/send" render={(routerProps)=><Send {...routerProps} />} />
            <Route path="/receive" render={(routerProps)=><Receive {...routerProps} />} />
            <Route path="/history" render={(routerProps)=><History {...routerProps} />} />
            <Route path="/config" render={(routerProps)=><Config {...routerProps} />} /> */}
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
