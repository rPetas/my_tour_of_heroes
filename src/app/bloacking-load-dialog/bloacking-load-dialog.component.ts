import { ApiService } from './../core/api.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface LoadDialogData {
  message: string;
  additionalMessage: string;
}

@Component({
  selector: 'app-bloacking-load-dialog',
  templateUrl: './bloacking-load-dialog.component.html',
  styleUrls: ['./bloacking-load-dialog.component.css']
})
export class BloackingLoadDialogComponent implements OnInit {

  message = 'This proccess may take a few moments to finish. Please wait.';

  constructor(
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: LoadDialogData
  ) { }

  ngOnInit() {
    if (this.data.message) {
      this.message = this.data.message;
    }
  }

  private news() {
    const newsEndpoint = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI';
    const params = {
                      autoCorrect: 'false',
                      pageNumber: '1',
                      pageSize: '10',
                      q: 'banking',
                      safeSearch: 'false'
                    };
    const headers = {
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
      'X-RapidAPI-Key': '4bd15fec5amsha116a0e0d0ea251p151aa7jsn835b6065762b'
    };
    this.apiService.get<object>(newsEndpoint, { headers, params }).subscribe((r) => {
      console.log('GOT SOME NEWS FOR YOU', r);
    });
  }

}
