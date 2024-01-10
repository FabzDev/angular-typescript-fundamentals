 
 function classDeco<T extends { new (...args:any[]): {} }>(constructor: T){
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'world';
    } 
 }
 
 @classDeco
 export class SuperClass{
    public myProperty: string = 'Original Property';

    print(){
        console.log("Hey Arnold");
    }
 }

 console.log(SuperClass);

 const myClass = new SuperClass();

 console.log(myClass);
 
 