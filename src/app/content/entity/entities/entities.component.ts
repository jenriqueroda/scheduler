import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {

  public allEntities: Object;

  constructor(private http: HttpClient) {

  }


  ngOnInit(): void {
    this.http.get('http://localhost:8080/scheduler-webapp/rest/person').subscribe(data => {
      console.log(data);
      this.allEntities = data;
    });
  }

}
