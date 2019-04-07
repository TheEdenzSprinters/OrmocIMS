import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { AllSubCategories } from '../models/all-sub-categories.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SubCategoryServiceService {
  serviceUrl:string = 'http://localhost:49995/';
  getSubCategoriesUrl = 'api/ItemManagement/GetAllSubCategories';
  getSubCategoriesByCategoyUrl = 'api/ItemManagement/GetAllSubCategoriesByCategory'

  constructor(private http:HttpClient) { }

  getAllSubCategories():Observable<AllSubCategories[]> {
    return this.http.get<AllSubCategories[]>(`${this.serviceUrl}${this.getSubCategoriesUrl}`);
  }

  getAllSubCategoriesByCategory(categoryId:number):Observable<AllSubCategories[]> {
    return this.http.post<AllSubCategories[]>(`${this.serviceUrl}${this.getSubCategoriesByCategoyUrl}`, categoryId, httpOptions)
  }
}