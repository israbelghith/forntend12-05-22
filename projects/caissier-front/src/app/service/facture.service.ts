import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../Model/Facture';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  apiURL: string = 'http://localhost:8080/caisses/facture';
    constructor(private http : HttpClient) {
    }
    chercherFactureRefFacture(id : number): Observable<Facture[]>{
        const url = `${this.apiURL}/refFacture/${id}`;
    return this.http.get<Facture[]>(url);
    }
    chercherFactureRefContrat(id : number): Observable<Facture[]>{
        const url = `${this.apiURL}/refContrat/${id}`;
    return this.http.get<Facture[]>(url);
    }
    chercherFactureRefclient(id : number): Observable<Facture[]>{
        const url = `${this.apiURL}/refClient/${id}`;
    return this.http.get<Facture[]>(url);
    }
}
