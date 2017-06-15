import { Component, OnInit, Input } from '@angular/core';
import { LocalComService } from '../../shared/models/localcom.service';
import { Plenary } from '../../shared/models/plenary.model';

@Component({
  selector: 'app-local-committee-form',
  templateUrl: './local-committee-form.component.html',
  styleUrls: ['./local-committee-form.component.css']
})
export class LocalCommitteeFormComponent implements OnInit {

  constructor(private prodServ: LocalComService) { }
  
  imageUrl: string;

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.msgL = "";
    this.msg1L = "";
  }

  @Input() plenaryL: Plenary;
  @Input() addPlenaryL: boolean;
  
  msgL: string;
  msg1L: string;

  updateInvited() {
    this.prodServ.updatePlenary(this.plenaryL).then(resolve => 
          {
            this.msgL = "Updated Successfully";
            this.plenaryL = null;
          }
        )
      .catch(onreject => this.msg1L = onreject.message);
  }

  deleteInvited() {
    this.prodServ.deletePlenary(this.plenaryL).then(resolve => 
          {
            this.msgL = "Deleted Successfully";
            this.plenaryL = null;
          }
        )
      .catch(onreject => this.msg1L = onreject.message);;
  }

  addNew() {
    this.prodServ.addPlenary(this.plenaryL).then(resolve => 
          {
            this.msgL = "Added Successfully";
            this.plenaryL = null;
          }
        )
      .catch(onreject => this.msg1L = onreject.message);;
  }

}
