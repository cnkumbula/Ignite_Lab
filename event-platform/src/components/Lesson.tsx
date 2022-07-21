import { CheckCircle, Lock } from 'phosphor-react';
import {isPast, format} from 'date-fns';
import pt from 'date-fns/locale/pt'
import { Link } from 'react-router-dom';


interface LessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';

  }  



export function Lesson(props: LessonProps) {

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormat = format(props.availableAt,"EEEE' • 'd' de 'MMMM' • 'k'h'mm",{
        locale: pt
    });


  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
        <span className="text-gray-300">
            {availableDateFormat}
        </span>
        <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
            <header className="flex items-center justify-between">
                {isLessonAvailable? (                
                    <span className="text-sm text-blue-500 font-medium flex item gap-2">
                        <CheckCircle className="w-4 h-4 mr-2"/>
                        Conteudo liberado
                    </span>
                ):(
                    <span className="text-sm text-orange-500 font-medium flex item gap-2">
                        <Lock className="w-4 h-4 mr-2"/>
                        Em Breve
                    </span>)}

                <span className="text-xs rounded py-[2px] px-2 text-white border border-green-300 font-bold">
                    {props.type === 'live' ? 'Aula ao vivo' : 'Aula pratica'}
                </span>
            </header>
            <strong className="text-gray-200 mt-5 block">
                {props.title}
            </strong>
        </div>
    </Link>
  );
}