import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { FirebaseVisionOriginal } from '@awesome-cordova-plugins/firebase-vision';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
/*import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@awesome-cordova-plugins/camera-preview/ngx';

const cameraPreviewOpts: CameraPreviewOptions = {
  x: 0,
  y: 0,
  width: window.screen.width,
  height: window.screen.height,
  camera: 'rear',
  tapPhoto: true,
  previewDrag: true,
  toBack: true,
  alpha: 1,
  storeToFile: false
}

const pictureOpts: CameraPreviewPictureOptions = {
  width: 1280,
  height: 1280,
  quality: 85
}*/

//var settings = cordova.plugins.scanner.getDefaultSettings();
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  data: any;

  picture: any;

  constructor(private activatedRoute: ActivatedRoute, private barcodeScanner: BarcodeScanner//, private cameraPreview: CameraPreview
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  scan() {
    this.data = null;
    this.barcodeScanner.scan({showFlipCameraButton : true,showTorchButton : true}).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  scan2() {
    window["MLKitBarcodeScanner"].scanBarcode(0, (code) => {this.data = code}, (message) => {alert(message)});

    /*
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });

      this.cameraPreview.takeSnapshot(pictureOpts).then((imageData) => {
        this.picture = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        console.log(err);
        this.picture = 'assets/img/test.jpg';
      });*/

    /*cordova.plugins.scanner.startScanning(
      p_Result => {
        this.data = p_Result;
        alert(p_Result);
      }, 
      p_Error => {
        throw p_Error
      }, 
      settings
    );*/
  }
}
