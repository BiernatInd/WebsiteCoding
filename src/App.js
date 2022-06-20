import React, {useState, useEffect} from 'react'
//CSS
import './App.css';
//Components
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
//Packages
import { Switch, Route } from 'react-router-dom'
import { css } from '@emotion/react'
import MessengerCustomerChat from 'react-messenger-customer-chat'
//Route Menu
import Section1 from './Components/Section__1/Home/Home'
import Section2 from './Components/Section__2/Blogs/Blogs'
import Section3 from './Components/Section__3/Website/Website'
import Section4 from './Components/Section__4/Shop/Shop'
import Section5 from './Components/Section__5/Positioning/Positioning'
import Section6 from './Components/Section__6/Programmers/Programmers'
import Section7 from './Components/Section__7/Graphics/Graphics'
import Section8 from './Components/Section__8/AboutOurCompany/AboutOurCompany'
import Section9 from './Components/Section__9/Collaboration/Collaboration'
import Section10 from './Components/Section__10/PolicyPrivacy/PolicyPrivacy'
import Section11 from './Components/Section__11/Contact__2/Contact__2'


function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1300)
    
  }, [])
  const override = css`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 400px;
  @media only screen and (max-width: 768px){ 
    margin-top: 320px;
  }
`;
  return (
    <div className="App">
      <div className="Components">
        <MessengerCustomerChat pageId="104569585509539" appId="541969750678597" language='pl_PL' themeColor={'#5674E6;'} />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Section1} />
          <Route path='/blogi' component={Section2} />
          <Route path='/strony-internetowe' component={Section3} />
          <Route path='/sklepy-internetowe' component={Section4} />
          <Route path='/pozycjonowanie' component={Section5} />
          <Route path='/programisci' component={Section6} />
          <Route path='/graficy' component={Section7} />
          <Route path='/o-naszej-firmie' component={Section8} />
          <Route path='/wspolpraca' component={Section9} />
          <Route path='/polityka-prywatnosci' component={Section10} />
          <Route path='/kontakt' component={Section11} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
