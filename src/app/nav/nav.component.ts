import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private modalService: NgbModal) {}


  createPost(){
    this.modalService.open(CreatePostModalComponent);
  }



}
