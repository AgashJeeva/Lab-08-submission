import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Card'
import Button from './components/Button'
import Banner from './components/Banner'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <div className="container">
      {/* Exercise 01 */}
      <Greeting />

      {/* Exercise 02 */}
      <NavBar />

      {/* Exercise 03 */}
      <Banner />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '20px 0' }}>
        <Card
          image="https://picsum.photos/400/250"
          title="Premium Service"
          description="Experience the best quality services with our expert team."
        />
        <Card
          image="https://picsum.photos/400/251"
          title="Innovative Solutions"
          description="We provide cutting-edge technology for your business growth."
        />
      </div>

      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <Button text="Get Started" variant="primary" size="large" />
        <Button text="Learn More" variant="secondary" size="medium" />
        <Button text="Cancel" variant="danger" size="small" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Testimonial
          quote="The service was absolutely phenomenal. Highly recommended!"
          name="Alex Johnson"
          image="https://i.pravatar.cc/150?u=alex"
        />
      </div>

      <Footer />
    </div>
  )
}

export default App
