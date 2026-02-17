import { Pipe,PipeTransform} from "@angular/core";

@Pipe({
   name:'summary'
})

export class SummaryPipe implements PipeTransform
{
   transform(value:string, limit?: number)
    {
      if(!value)
      {
        return null
      }
      //if we have limit in varable used it othervise use 50
      let actualLimit = (limit)? limit : 50;
      return value.substr(0,actualLimit) + '.....';
   }
}
