import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

/**
 * Class used for Gets & Posts with back-end
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * Load some dependency injection.
   * @param _http HttpClient injection to perform HTTP requests
   * @param _logger Logger injection that provides the possibility to display messages @ window.console in a centralized way.
   */
  constructor(private _http: HttpClient) {}
  /**
   * It uses [HttpClient API]{@link https://angular.io/guide/http} to proceed
   * with GET requests.
   * @param {string} url to request.
   * @param {Object} options not mandatory information to attach to a GET request,
   *  for instance, to download.
   * @returns response or error
   */
  get<T>(url: string, options = {}): Observable<T> {
    return this._http.get<T>(url, options);
  }
  /**
   * It uses [HttpClient API]{@link https://angular.io/guide/http} to proceed
   * with POST requests.
   * @param url to request.
   * @param body to attach to the POST request, for instance, a form.
   * @returns response or error
   */
  post(url, body, options = {}) : Observable<any> {
    options["observe"] = "response";
    return this._http
      .post(url, body, options);
  }
  /**
   * It uses [HttpClient API]{@link https://angular.io/guide/http} to proceed
   * with PUT requests.
   * @param url to request.
   * @param body to attach to the PUT request, for instance, a form.
   * @returns response or error
   */
  put(url, body, options = {}): Observable<any> {
    options["observe"] = "response";
    return this._http
      .put<any>(url, body, options);
  }
  /**
   * It uses [HttpClient API]{@link https://angular.io/guide/http} to proceed
   * with DELETE requests.
   * @param url to request.
   * @param options to attach to the DELETE reques.
   * @returns response or error
   */
  delete<T>(url: string, options = {}): Observable<any> {
    options["observe"] = "response";
    return this._http
      .delete<T>(url, options);
  }
}