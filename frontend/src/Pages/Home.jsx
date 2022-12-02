// import logo from './logo.svg';
// import './App.css';
import Header from '../Components/Header';
import Hero from '../Components/Hero/Hero';
import ProductsSection from '../Components/ProductsSection/ProductsSection';
import QueriesForm from '../Components/Queries/QueriesSection';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div style={{margin: '0 auto', padding: '3.5rem 10rem', backgroundColor: 'rgba(18, 33, 54, 0.1)'}}>
        <h1 style={{marginTop: '0'}}>Why Invest In Gold?</h1>
        <p style={{lineHeight: '1.75rem'}}>When you buy Gold, you're investing in a solid value asset that’s as old as civilization itself. 
        If you're just thinking about investing in Gold and have any questions, anything at all, just let us know. 
        One of our experienced specialists in the Gold Investment will answer those to suit your needs.</p>
      </div>

      <ProductsSection />
      <QueriesForm />
    </div>
  );
}

export default Home;
