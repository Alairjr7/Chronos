import { CirclePlay } from 'lucide-react';
import CountDown from '../CountDown/CountDown';
import DefautInput from '../DefautInput/DefautInput';

export default function Task() {
  return (
    <section className='flex flex-col items-center gap-5 '>
      <div>
        <CountDown />
      </div>
      <div className='flex flex-col items-center'>
        <form action='' className='flex flex-col items-center  gap-5'>
          <DefautInput id='task' labelText='task:' name='task' type='text' placeholder='Digite uma tarefa' />

          <p>
            Nesse ciclo <strong>foque</strong> por <strong>25 min.</strong>
          </p>

          <div>
            <p>Ciclos:</p>
            <p>0 0 0 0 0 </p>
          </div>

          <button
            type='submit'
            className='bg-primary w-10/12 flex items-center justify-center py-2 rounded-lg cursor-pointer hover:bg-primary/80 transition-colors duration-300 ease-in-out'
          >
            <CirclePlay className='text-gray-900' />
          </button>
        </form>
      </div>
    </section>
  );
}
