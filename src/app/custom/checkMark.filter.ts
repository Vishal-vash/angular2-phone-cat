import {Pipe } from '@angular/core';

@Pipe({
    name : 'checkMark'
})

export class CheckMarkFilter{
    transform(input){
        return input ? '\u2713' : '\u2718';
    }
}