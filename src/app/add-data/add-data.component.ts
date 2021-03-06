import { Component, OnInit } from '@angular/core';
import { Photos } from 'app/models/photos';
import { PhotoServiceService } from 'app/services/photo-service.service';
declare var $: any;
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  photoList: Photos[];

  constructor(private photoServiceService:PhotoServiceService ) { }

 
  ngOnInit() {
    this.photoServiceService.getPhotos().subscribe(photoList => {
      this.photoList = photoList;
    });
  }

  //onDelete
  onDelete(item){
    //delete from ui
    this.photoList = this.photoList.filter(e => e.id !== item.id);
    //delete from service
    this.photoServiceService.deletePhoto(item).subscribe();
    this.showNotification('top','right','delete');
  }

  onSubmit(form: any){
   this.photoServiceService.addPhoto(form.value).subscribe(item => {
      this.photoList.push(item);
    });

    form.reset();
    this.showNotification('top','right','submit');

    
  
  }

  showNotification(from, align, action){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);
    if(action == 'submit'){
        $.notify({
          icon: "notifications",
          message: "You have successfully added a new data."

        },{
          type: type[color],
          timer: 3000,
          placement: {
              from: from,
              align: align
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
        });
      }else{
        $.notify({
          icon: "notifications",
          message: "You have successfully deleted the selected data."

        },{
          type: type[color],
          timer: 3000,
          placement: {
              from: from,
              align: align
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
        });
      }
    }
    

}
