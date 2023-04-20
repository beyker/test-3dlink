import { Pipe, PipeTransform } from "@angular/core";
import { FormsModule } from "@angular/forms"

@Pipe({
    name: 'searchFilter',
    pure: false
})
export class SearchFilterPipe implements PipeTransform{
 transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();
    //debugger;
    return value.filter(function(item: any) {
      return JSON.stringify(item)
      .toLowerCase()
      .includes(args);
    })
 }
}
