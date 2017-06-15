import { Component, OnInit, Input } from '@angular/core';
import { InvitedService } from '../../shared/models/invited.services';
import { Plenary } from '../../shared/models/plenary.model';

@Component({
  selector: 'app-admin-invited-speaker-form',
  templateUrl: './admin-invited-speaker-form.component.html',
  styleUrls: ['./admin-invited-speaker-form.component.css']
})
export class AdminInvitedSpeakerFormComponent implements OnInit {

  constructor(private prodServ: InvitedService) { }
  
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
