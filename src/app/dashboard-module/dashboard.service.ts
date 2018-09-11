import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService{
    constructor(private http:HttpClient){

    }

    getDummyData(){
        return this.http.get("https://jsonplaceholder.typicode.com/comments");
    }
}