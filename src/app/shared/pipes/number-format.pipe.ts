import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
  standalone: true
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number | string, unit?: 'millions' | 'thousands'): string {
    let numberValue = typeof value === 'string'
      ? parseFloat(value.replace(/,/g, ''))
      : Number(value);

    if (isNaN(numberValue)) return '';

    if (unit === 'millions') {
      numberValue = numberValue / 1_000_000;
    } else if (unit === 'thousands') {
      numberValue = numberValue / 1_000;
    }

    return numberValue.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }
}
