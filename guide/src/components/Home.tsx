
import { HashLink } from 'react-router-hash-link';

function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" py-4 pt-5 text-3xl font-bold">Søg</h1>
        <input type="text" className="  w-1/3 border border-black rounded" />
      </div>
      <div>
        <nav>
          <div className="animation start-home"></div>
          <ul className='text-2xl font-bold space-y-10 py-10 flex flex-col justify-center items-center'> 
         
            <li>
            <HashLink to={'/kopibillede'}>Flyt billede fra mobil til pc</HashLink>
            
            </li>
            <li>
              <HashLink to={'/genveje'}>Genveje</HashLink>
            </li>
            <li>
              <HashLink to={'/WordToPdf'}>Word til PDF</HashLink>
            </li>
            <li>
              <HashLink to={'/mappe'}>Lav en ny mappe</HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
