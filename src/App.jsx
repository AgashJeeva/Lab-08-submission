import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Card'
import Button from './components/Button'
import Banner from './components/Banner'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <div>
      {/* Exercise 01 */}
      <Greeting />

      {/* Exercise 02 */}
      <NavBar />

      {/* Exercise 03 */}
      <Banner />

      <Card
        image="https://picsum.photos/300/200"
        title="Sample Card"
        description="This is a simple card component displaying an image, title, and description."
      />

      <div>
        <Button text="Primary" variant="primary" size="small" />
        <Button text="Secondary" variant="secondary" size="medium" />
        <Button text="Danger" variant="danger" size="large" />
      </div>

      <Testimonial
        quote="This is an amazing product!"
        name="Jane Doe"
        image="https://i.pravatar.cc/60"
      />

      <Footer />
    </div>
  )
}

export default App
