import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from 'src/app/interface/UserModel';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:UserModel[] | null,field:string,query:string): UserModel[] |null {
   if(value){
    const regex = new RegExp(query,'i')
    if(query === '')return value
   
   else if(field === 'name'){
    return value.filter((res:UserModel)=> res.name.match(regex) || res.email.match(regex))
   }
   else if(field === 'company_name'){
    return value.filter((res:UserModel)=> res.company.name.match(regex) )
   }
   else if(field === 'desingnation'){
    return value.filter((res:UserModel)=> res.company.designation.match(regex))
   }
   
  }
    
    return [];
  }

}
  