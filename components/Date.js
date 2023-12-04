import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {

    console.log('dateString:', dateString);
    if(!dateString) return null;
  
    return (
      <time dateTime={dateString}>
        {format(new Date(dateString), 'LLLL d, yyyy')}
      </time>
    )
  
  }