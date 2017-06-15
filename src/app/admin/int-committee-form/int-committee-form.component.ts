import { Component, OnInit, Input } from '@angular/core';
import { IntComService } from '../../shared/models/intcom.service';
import { Plenary } from '../../shared/models/plenary.model';

@Component({
  selector: 'app-int-committee-form',
  templateUrl: './int-committee-form.component.html',
  styleUrls: ['./int-committee-form.component.css']
})
export class IntCommitteeFormComponent implements OnInit {

  constructor(private prodServ: IntComService) { }
  
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

  updateInvited() {
    this.prodServ.updatePlenary(this.plenary).then(resolve => 
          {
            this.msg = "Updated Successfully";
            this.plenary = null;
          }
        )
      .catch(onreject => this.msg1 = onreject.message);
  }

  deleteInvited() {
    this.prodServ.deletePlenary(this.plenary).then(resolve => 
          {
            this.msg = "Deleted Successfully";
            this.plenary = null;
          }
        )
      .catch(onreject => this.msg1 = onreject.message);;
  }

  addNew() {
    this.prodServ.addPlenary(this.plenary).then(resolve => 
          {
            this.msg = "Added Successfully";
            this.plenary = null;
          }
        )
      .catch(onreject => this.msg1 = onreject.message);;
  }

}
