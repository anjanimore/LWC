import { LightningElement ,track} from 'lwc';

export default class HelloWorld extends LightningElement {
    @track greeting ='World';
    changeHandler(event)
    {
        console.log('Hello I am inside changeHandler..');
        this.greeting=event.target.value;
    }
}