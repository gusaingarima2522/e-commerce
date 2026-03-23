import { Link } from "react-router-dom"
import './home.css'
function Home() {
  return (
    <>
    <div id="main">
    {/* <div id="home">
      <h1>Hello!</h1>
      <h2>Shopping Buddy</h2>
      <p>Lets shop together and enjoy the latest trends in fashion, electronics, and more!</p>
      <Link to='/products'>Shop Now</Link>

      </div>

      <div id="side">
         <h1>Sign up Here ----</h1>
        <form id="homeform" action="Submit" >
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="number" name="phone" placeholder="Phone Number" required />
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit">Login</button>
        </form>
    </div> */}
    <div id="home">
      <h1>Hello!</h1>
      <h2>Shopping Buddy</h2>
      <p>Lets shop together and enjoy the latest trends in fashion, electronics, and more!</p>
      <Link to='/products'>Shop Now</Link>

    </div>
    <div id="side">
         <h1>Sign up Here ----</h1>
        <form id="homeform" action="Submit" >
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="number" name="phone" placeholder="Phone Number" required />
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit">Login</button>
        </form>

    </div>
    </div>
      
    </>
  )
}

export default Home
