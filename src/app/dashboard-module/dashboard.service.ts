import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService{
    constructor(private http:HttpClient){

    }

    getDummyData(){
        return this.http.get("http://thingcontrol.io/api/tenant/devices?limit=30&textSearch=",{
            headers:{
                "X-Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJncmVlbmlvLmFzaWFAZ21haWwuY29tIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJ1c2VySWQiOiI1MmUyY2UyMC05YWQ0LTExZTgtOTZhNy05YjRjM2ZhNGI4NzkiLCJmaXJzdE5hbWUiOiJpdHRpY2hhaSIsImxhc3ROYW1lIjoicGhvb21zaXJpdmlsYWkiLCJlbmFibGVkIjp0cnVlLCJwcml2YWN5UG9saWN5QWNjZXB0ZWQiOnRydWUsImlzUHVibGljIjpmYWxzZSwidGVuYW50SWQiOiI1MmRjMTc2MC05YWQ0LTExZTgtOTZhNy05YjRjM2ZhNGI4NzkiLCJjdXN0b21lcklkIjoiMTM4MTQwMDAtMWRkMi0xMWIyLTgwODAtODA4MDgwODA4MDgwIiwiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJpYXQiOjE1MzY3MzUwMDgsImV4cCI6MTUzODUzNTAwOH0.NfY-zPic7rhDlCt0pJlb0gub6jS06xZjYO9trhRrlj7tgVx2rVjgKfJ6FNUarL3rJrTxlBE1zkzpXet2I_Ud3g"
            }
        });
    }
}