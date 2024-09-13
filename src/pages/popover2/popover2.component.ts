import { Component} from "@angular/core";
import { PopoverController, AlertController } from "@ionic/angular";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
    selector: 'popover2',
    templateUrl: './popover2.component.html',
    styleUrls: ['./popover2.component.css']
})
export class Popover2Component {
    


    constructor(public popoverController: PopoverController,
                public alertController: AlertController,
                private inAppBrowser: InAppBrowser){}
    
    redirect() {
        this.inAppBrowser.create("https://tour-br.metareal.com/apps/player?asset=4b885b33-87cd-4a0f-8dc3-c1ca84f18653","_self", "location=no");
    }

    close(){
        this.popoverController.dismiss();
    }

}