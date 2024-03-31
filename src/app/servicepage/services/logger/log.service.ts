import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  write(message: string) {
    console.log(message);
  }
  constructor() { }
}
