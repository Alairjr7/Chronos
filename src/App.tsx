import { Timer, House, History, Bolt, Sun } from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';
import Heading from './components/Heading/Heading';
import ButtonLink from './components/ButtonLink/ButtonLink';

export default function App() {
  return (
    <main>
      <section className='flex flex-col justify-center items-center gap-14 pt-14 mx-auto'>
        <h1 className='text-5xl flex flex-col items-center text-primary font-bold'>
          <span>
            <Timer size={64} />
          </span>
          Chronos
        </h1>
        <div className='flex items-center gap-5'>
          <ButtonLink to='/' icon={<House />} />
          <ButtonLink to='/Historico' icon={<History />} />
          <ButtonLink to='/Configuracoes' icon={<Bolt />} />
          <ButtonLink to='/Sobre' icon={<Sun />} />
        </div>
      </section>

      <section className='flex items-center justify-center'>
        <Outlet />
      </section>
      {/* <Heading text='teste'>
        <button type='button'>
          <Timer />
        </button>
      </Heading> */}
    </main>
  );
}
