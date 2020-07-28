import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/servicos/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private storageService: StorageService) {
  }
  title = 'chamaris';
  ngOnInit() {
    this.storageService.initStorage();
  }
}
