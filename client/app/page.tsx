import Auth from './components/Auth';
import { Calculator } from './components/Calculator';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center m-5'>
      <Auth />
      <Calculator />
    </div>
  );
}
