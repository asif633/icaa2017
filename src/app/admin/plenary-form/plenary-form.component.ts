import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PlenaryService } from '../../shared/models/plenary.service';
import { Plenary } from '../../shared/models/plenary.model';

@Component({
  selector: 'app-plenary-form',
  templateUrl: './plenary-form.component.html',
  styleUrls: ['./plenary-form.component.css']
})
export class PlenaryFormComponent implements OnInit, OnChanges {

  constructor(private prodServ: PlenaryService) { }
  
  imageUrl: string;

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.msg = "";
    this.msg1 = "";
  }

  @Input() plenary: Plenary;
  @Input() addPlenary: boolean;
  
  msg: string;
  msg1: string;

  updatePlenary() {
    let fle: File;
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
      fle = selectedFile;
    };
    this.prodServ.updatePlenary(this.plenary, fle).then(resolve => 
          {
            this.msg = "Updated Successfully";
            this.plenary = null;
          }
        )
      .catch(onreject => this.msg1 = onreject.message);
  }

  deletePlenary() {
    this.prodServ.deletePlenary(this.plenary).then(resolve => 
          {
            this.msg = "Deleted Successfully";
            this.plenary = null;
          }
        )
      .catch(onreject => this.msg1 = onreject.message);;
  }

  addNew() {
    let fle: File;
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
      fle = selectedFile;
    };
    this.prodServ.addPlenary(this.plenary, fle).then(resolve => 
          {
            this.msg = "Added Successfully";
            this.plenary = null;
          }
        )
      .catch(onreject => this.msg1 = onreject.message);;
  }

}
