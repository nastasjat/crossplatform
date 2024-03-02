import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-json',
  templateUrl: './json.page.html',
  styleUrls: ['./json.page.scss'],
})
  
export class JsonPage implements OnInit {

  constructor(public loadingController: LoadingController) { }

  data: any = [];
  data_lectures: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  inputGroup: string = '';

  url = 'https://api.jsonbin.io/v3/b/65e20a0a266cfc3fde91b4eb';
  loading: any;

  ngOnInit() {
  }

  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading..'
    });
    await this.loading.present();

    fetch(this.url).then(result => result.json())
      .then(json => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        console.log(this.data);
        while (this.data[i] != undefined) {
          this.data_lectures.push(this.data[i][0]);
          i++;
        }
        this.loading.dismiss();
      });
    
     this.data_lectures = [];
  }

  toggleDetails(i: number) {
    this.showDetails[i] = !this.showDetails[i];
  }


  getColor(group: string) {
  for (const key in this.data_lectures) {
    if (this.data_lectures[key]["group"] === group && group === this.inputGroup) {
      return 'yellow';
    }
  }
  return 'white';
  }

}