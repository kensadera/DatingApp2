import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }

  confirm(message: string, okCallback: () => any) {
// tslint:disable-next-line: only-arrow-functions
    alertify.confirm(message, function(e) {
      if (e) {
        okCallback();
      } else {}
    });

}
error(message: string) {
  alertify.error(message);
}

 success(message: string) {
  alertify.success(message);
}

 warning(message: string) {
  alertify.warning(message);
}

 message(message: string) {
  alertify.message(message);
}

}
