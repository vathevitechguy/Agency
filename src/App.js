import './App.scss';
import SiteHeader from './components/organisms/Headers/SiteHeader/index';
import SiteHeaderTwo from './components/organisms/Headers/SiteHeaderTwo';
import SiteFooter from './components/SiteFooter/index';

function App() {
  return (
    <div className="App">
      <br />
      <center>
        <h1>Header 1</h1>
      </center>
      <br />
      <SiteHeader />

      <br />
      <center>
        <h1>Header 2</h1>
      </center>
      <br />
      <SiteHeaderTwo
        logoTitle="Agency"
        title="About Us"
        subtitle="Agency provides a full service range including technical skills,
              design, business understanding."
      />

      {/* <SiteFooter /> */}
    </div>
  );
}

export default App;
