import './App.css';
import Router from './router/Router';
import AOS from 'aos';
import 'antd/dist/antd.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles


AOS.init({
  offset:"50",
  delay:"50",
  duration:"500",
  mirror:"true",
  easing:"ease-in-out"
});
function App() {
  return (
    <>
    <div>
      <Router/>
    </div>
    </>
  );
}

export default App;
