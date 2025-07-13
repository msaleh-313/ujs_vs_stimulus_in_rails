import { Controller } from "@hotwired/stimulus";
export default class extends Controller {

  static targets=["slide"];

  //We initialize the controller by showing the first slide,
  initialize(){
    this.index=0;  //the currently selected slide
    this.showCurrentSlide();
  }

  //rewind the current slide.
  previous(){
    if(this.index==0){
      this.index=this.slideTargets.length-1;
    }else{
      this.index--;
    }
    this.showCurrentSlide();
  }

  //advance the current slide.
  next(){
    if(this.index==this.slideTargets.length-1){
      this.index=0;
    }else{
      this.index++;
    }
    this.showCurrentSlide();
  }

  showCurrentSlide(){
    this.slideTargets.forEach((element,index)=> {
      if (index==this.index){
        element.hidden=false;
      } else{
        element.hidden=true;
      }
    });
  }

  

}