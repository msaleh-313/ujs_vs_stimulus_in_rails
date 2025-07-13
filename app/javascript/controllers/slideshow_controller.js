import { Controller } from "@hotwired/stimulus";
export default class extends Controller {

  static targets = ["slide"];
  static values = { index: {type: Number,default: 0} }

  //We initialize the controller by showing the first slide,
  initialize(){
    this.showCurrentSlide();  
  }

  //rewind the current slide.
  previous(){
    if(this.indexValue==0){
      this.indexValue=this.slideTargets.length-1;
    }else{
      this.indexValue--;
    }
  }

  //advance the current slide.
  next(){
    if(this.indexValue==this.slideTargets.length-1){
      this.indexValue=0;
    }else{
      this.indexValue++;    
    }
  }

  //it is called whenever the state is changed
  indexValueChanged(){
    this.showCurrentSlide();
  }

  showCurrentSlide(){
    this.slideTargets.forEach((element,index)=> {
      if (index==this.indexValue){
        element.hidden=false;
      } else{
        element.hidden=true;
      }
    });
  }

}