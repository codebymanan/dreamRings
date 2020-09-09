import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
  selector: 'page-dream',
  templateUrl: 'dream.html'
})
export class DreamPage {
  url: any = 'file:///data/user/0/io.ionic.music/files/file.mp3';
  download() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'https://raw.githubusercontent.com/mirza339/poaride_c/master/src/assets/imgs/accepted.png';
    fileTransfer.download(url, this.file.dataDirectory + 'file.mp3').then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.url = entry.toURL();
    }, (error) => {
      // handle error
    });
    fileTransfer.onProgress((progressEvent) => {
      console.log(progressEvent);
      if (progressEvent.lengthComputable) {
        console.log((progressEvent.loaded / progressEvent.total) * 100);
      } else {
        console.log('in else');
      }

    })
  }
  testing1() {
    this.download();
  }
  testing() {
    console.log('hello');
    // console.log(this.file.applicationDirectory);
    // console.log(this.file.listDir('file:///android_asset', 'www/assets/music').then((data) => {
    //   console.log(data);
    // }))
    // this.file.checkDir(this.file.dataDirectory,
    //   'www/assets/music/sleep.mp3').then(_ => console.log('Directory exists')).catch(err => {
    //     console.log('Directory doesn\'t exist');
    //     console.log(err);
    // });
    // const file: MediaObject = this.media.create('file:///storage/emulated/0/Android/data/io.ionic.music/files/manan339/new.mp3');
    const file: MediaObject = this.media.create(this.url);
    console.log('hello');
    file.onSuccess.subscribe((data) => {
      console.log('Action is successful');
      console.log(data);
    });
    file.onError.subscribe(error => console.log('Error!', error));
    setTimeout(() => {
      console.log('in play');
      file.play();
    }, 2000)
    // const file: MediaObject = this.media.create('file21.mp3');
    // file.onSuccess.subscribe((data) => {
    //   console.log('Action is successful');
    //   console.log(data);
    // });
    // file.onError.subscribe(error => console.log('Error!', error));
    // setTimeout(() => {
    //   console.log('in record');
    //   file.startRecord();
    // }, 1000)
    // setTimeout(() => {
    //   console.log('in stop');
    //   file.stopRecord();
    // }, 10000)
    // setTimeout(() => {
    //   console.log('in play');
    //   file.play();
    // }, 15000)
  }
  constructor(public navCtrl: NavController, private media: Media, private file: File, public transfer: FileTransfer) {
  }

}
