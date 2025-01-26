import { Pipe, PipeTransform } from '@angular/core';
import { format, formatDistanceToNow } from 'date-fns';
import { pt as ptAO } from 'date-fns/locale';

@Pipe({ name: 'periodIfEmpty' })
export class PeriodIfEmptyPipe implements PipeTransform {
  transform(value: string | undefined | null, start_date?: string): string {
    if (value === undefined || value === null || value === '' || !value) {
      const distanceToNow: string = formatDistanceToNow(
        new Date(start_date || ''),
        {
          locale: ptAO,
        }
      );
      return `Presente (${distanceToNow})`;
    }

    /* 
    if (typeof value === 'number' && isNaN(value)) {
      return '-';
    }
    if (typeof value === 'object' && Object.keys(value).length === 0) {
      return '-';
    }
    */

    return format(new Date(value), 'MMM yyyy', { locale: ptAO });
  }
}
