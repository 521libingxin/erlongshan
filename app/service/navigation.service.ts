
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class NavService {
  private missionConfirmedSource = new Subject<string>();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();
  confirmMission(astronaut: any) {
    this.missionConfirmedSource.next(astronaut);
  }
}
