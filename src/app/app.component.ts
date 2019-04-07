import { Component, OnInit } from '@angular/core';
import { SubCategoryServiceService } from './services/sub-category-service.service';
import { AllSubCategories } from './models/all-sub-categories.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OrmocIMS';
  mobHeight: any;
  mobWidth: any;
  displaySubCategories:AllSubCategories[];

  constructor(private subCategoryServiceService:SubCategoryServiceService, private router: Router) {
    this.mobHeight = (window.screen.height) + 'px';
    this.mobWidth = (window.screen.width) + 'px';
    console.log(this.mobHeight);
    console.log(this.mobWidth);
  }

  ngOnInit() {
    this.subCategoryServiceService.getAllSubCategories().subscribe(displaySubCategories => {
      this.displaySubCategories = displaySubCategories;
      console.log(displaySubCategories);
    });

    this.subCategoryServiceService.getAllSubCategoriesByCategory(1).subscribe(displaySubCategories => {
      this.displaySubCategories = this.displaySubCategories;
      console.log(this.displaySubCategories);
    });
  }
}

