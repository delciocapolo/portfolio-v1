import { Pipe, PipeTransform } from '@angular/core';

namespace NamespacePairAndPadStartPipe {
  export type typeHandler = 'pair' | 'pad';
}

@Pipe({
  name: 'pairAndPadStart',
})
export class PairAndPadStartPipe implements PipeTransform {
  transform(
    value: unknown,
    type: NamespacePairAndPadStartPipe.typeHandler,
    increment: boolean
  ) {
    if (type === 'pad') {
      if (typeof value === 'string') {
        return value.padStart(2, '0');
      }
      if (typeof value === 'number') {
        return (increment ? value + 1 : value).toString().padStart(2, '0');
      }
    }

    if (type === 'pair') {
      if (typeof value !== 'number') {
        return null;
      }

      return (increment ? value + 1 : value) % 2 === 0
        ? 'right-side'
        : 'left-side';
    }

    return null;
  }
}
