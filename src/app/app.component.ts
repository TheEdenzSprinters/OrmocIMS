import { Component, OnInit } from '@angular/core';
import { SubCategoryServiceService } from './services/sub-category-service.service';
import { AllSubCategories } from './models/all-sub-categories.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OrmocIMS';
  displaySubCategories:AllSubCategories[];

  constructor(private subCategoryServiceService:SubCategoryServiceService) {}

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
