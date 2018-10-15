import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class MainService{
    constructor(private http:HttpClient){

    }

    getData(){
        return this.http.get("/assets/json/app-data.json");
    }

    getMoreData(){
         return this.http.get<any>("/assets/json/huge-app-data.json");
    }
}