import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
@Component({
  selector: 'page-dream',
  templateUrl: 'dream.html'
})
export class DreamPage {
  url: any;
  downloadStatus: boolean = false;
  downloadLink: string;
  downloading: boolean = false;
  playing: boolean = false;
  currentDuration: string;
  totalDuration: string;
  playingFile: any;
  public loadProgress : number = 0.0;
  download() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'https://github.com/mirza339/dreamRings/raw/master/music_src/dream.mp3';
    this.downloading = true;
    fileTransfer.download(url, this.file.dataDirectory + '/music/dream.mp3').then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.downloadLink = entry.toURL();
      localStorage.setItem('dream', this.downloadLink);
      this.downloading = false;
      this.downloadStatus = true;
    }, (error) => {
      alert('error downloading file');
      this.downloading = false;
      // handle error
    });
    fileTransfer.onProgress((progressEvent) => {
      console.log(progressEvent);
      if (progressEvent.lengthComputable) {
        console.log((progressEvent.loaded / progressEvent.total) * 100);
        this.loadProgress = (progressEvent.loaded / progressEvent.total) * 100;
        console.log(this.loadProgress);
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
    const file: MediaObject = this.media.create(this.downloadLink);
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
  checkDownloads() {
    const dreamLink = localStorage.getItem('dream');
    if (!dreamLink || dreamLink === null) {
      console.log(dreamLink);
      this.downloadStatus = false;
    } else {
      this.downloadLink = dreamLink;
      this.downloadStatus = true;
      console.log(this.downloadLink);
    }
  }
  play() {
    const file: MediaObject = this.media.create(this.downloadLink);
    console.log('hello');
    console.log('hello');
    this.playingFile = file;
    this.playingFile.onSuccess.subscribe((data) => {
      console.log('Action is successful');
      console.log(data);
    });
    this.playingFile.onError.subscribe(error => console.log('Error!', error));
    setTimeout(() => {
      console.log('in play');
      this.playing = true;
      this.playingFile.play();
    }, 500)
    setInterval(() => {
      function fancyTimeFormat(duration)
      {
        // Hours, minutes and seconds
        var hrs = ~~(duration / 3600);
        var mins = ~~((duration % 3600) / 60);
        var secs = ~~duration % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
      }
      console.log(fancyTimeFormat(this.playingFile.getDuration()));
      this.totalDuration = fancyTimeFormat(this.playingFile.getDuration());
      this.playingFile.getCurrentPosition().then((data111) => {
        console.log(data111);
        this.currentDuration = fancyTimeFormat(data111);
        this.loadProgress = (data111 / this.playingFile.getDuration()) * 100;
        // console.log((data111 / file.getDuration()) * 100);
        // console.log(fancyTimeFormat(data111));
      }).catch((error) => {
        console.log(error);
      })
      // console.log();
    }, 100)
  }
  pause() {
    this.playingFile.pause();
    this.playing = false;
  }
  ngOnInit() {
    // Test interval to show the progress bar
    setInterval(() => {
      console.log(this.loadProgress);
    }, 50);
  }
  constructor(public navCtrl: NavController, private media: Media, private file: File,
              public transfer: FileTransfer) {
    // const lng = localStorage.getItem('language');
    this.checkDownloads();
    // localStorage.removeItem('dream');
    // localStorage.setItem('dream', 'file:///data/user/0/io.ionic.music/files/music/focus.mp3');
    // if (!lng || lng === null) {
    //   console.log(lng);
    //   localStorage.setItem('language', 'en');
    // } else {
    //   console.log(lng);
    // }
    // localStorage.setItem('language', 'data');
  }

}
