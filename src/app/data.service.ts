import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['Zip line through the jungle', 'Journey through Tibet', 'Jump out of a plane/Sky diving', 'Visit the Grand Canyon', 'Go tuna fishing']);
  goal = this.goals.asObservable(); 

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
