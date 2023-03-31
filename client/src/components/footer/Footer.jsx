import { FaFacebookF, FaTwitter, FaInstagram, FaGithub} from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-gray-900'>
      <div className='container px-6 py-12 mx-auto'>
        <nav className='flex flex-wrap justify-center mb-8'>
          <a
            href='/'
            className='mx-3 text-gray-300 hover:text-gray-100 transition-colors duration-200'
          >
            Home
          </a>
          <a
            href='#'
            className='mx-3 text-gray-300 hover:text-gray-100 transition-colors duration-200'
          >
            About
          </a>
          <a
            href='#'
            className='mx-3 text-gray-300 hover:text-gray-100 transition-colors duration-200'
          >
            Services
          </a>
          
          <a
            href='#'
            className='mx-3 text-gray-300 hover:text-gray-100 transition-colors duration-200'
          >
            Contact
          </a>
          <a
            href='#'
            className='mx-3 text-gray-300 hover:text-gray-100 transition-colors duration-200'
          >
            Privacy Policy
          </a>
        </nav>
        <div className='flex justify-center mb-8'>
          <a href='#'>
            <FaFacebookF className='text-2xl text-gray-300 hover:text-gray-100 transition-colors duration-200 mx-3' />
          </a>
          <a href='#'>
            <FaTwitter className='text-2xl text-gray-300 hover:text-gray-100 transition-colors duration-200 mx-3' />
          </a>
          <a href='#'>
            <FaInstagram className='text-2xl text-gray-300 hover:text-gray-100 transition-colors duration-200 mx-3' />
          </a>
          <a href='#'>
            <FaGithub className='text-2xl text-gray-300 hover:text-gray-100 transition-colors duration-200 mx-3' />
          </a>
        </div>
        <div className='text-center text-gray-300 text-sm'>
          <p>&copy; {new Date().getFullYear()} Your Company Name</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
