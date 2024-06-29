
import { HashLink } from 'react-router-hash-link';

function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Søg</h1>
        <input type="text" className="w-1/3 border border-black rounded" />
      </div>
      <div>
        <nav>
          <div className="animation start-home"></div>
          <ul className='text-lg font-bold space-y-4 py-10 flex flex-col justify-center items-center'> 
            <li>
              <HashLink to={'/kopitext'}>Kopiere tekst</HashLink>
            </li>
            <li>
            <HashLink to={'/kopibillede'}>Kopiere billede</HashLink>
            
            </li>
            <li>
              <HashLink to={'/genveje'}>Genveje</HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
