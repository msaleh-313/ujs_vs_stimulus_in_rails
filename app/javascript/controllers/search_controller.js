import { Controller } from "@hotwired/stimulus";
export default class extends Controller{
  connect(){
    console.log("Stimulus controller attached");
  }
  log(){
    console.log("input detected");
  }
}