
import './App.css'
import { AboutUs } from './template/AboutUs/AboutUs';
import BottomPanel from './template/BottomPanel/BottomPanel';
import { CurrentProjects } from './template/CurrentProjects/CurrentProjects';
import Header from './template/header/Header'
import { WhyWe } from './template/WhyWe/WhyWe';

export default function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <CurrentProjects />
      <WhyWe />
      <BottomPanel></BottomPanel>
    </>
  )
}