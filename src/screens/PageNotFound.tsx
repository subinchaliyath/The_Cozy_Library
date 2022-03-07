import errorimg from '../assets/images/404.svg'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <div>
        <img src={errorimg} alt="Page not found" />
        <div>
          <h1>Page not found !</h1>
          <p>
            The page you were looking for doesn&apos;t exist. You may have
            mistyped <br /> the address or the page may have removed.
          </p>
          <Link to="/">
            <button>Go to home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
