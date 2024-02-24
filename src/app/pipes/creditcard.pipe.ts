import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard',
  standalone: true
})
export class CreditcardPipe implements PipeTransform {

  transform(value: string): string {
       value = value.replace(/\D/g, '');
    
       const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 - ');
       
       return formattedValue;
  }

}
