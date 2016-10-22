const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//electron.crashReporter.start();

let mainWindow

app.on('window-all-closed', function() {
  //if (process.platform != 'darwin') {
    app.quit();
  //}
});

app.on('ready', function() {
  // call python?
  //var subpy = require('child_process').spawn('python', ['./hello.py']);
  //var subpy = require('child_process').spawn('./dist/hello.exe');
  //var rq = require('request-promise');
  //var mainAddr = 'http://localhost:5000';
  var mainAddr = 'http://localhost:8069';

  var openWindow = function(){
    mainWindow = new BrowserWindow({
    fullscreen: true,
    toolbar: false,
    title: 'REVS APP',
    icon: mainAddr+'/web/static/src/img/favicon.ico',
    width: 800, 
    height: 600, 
    'auto-hide-menu-bar': true,
    webPreferences: {
        nodeIntegration: false
          }
    });
    // mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.loadURL(mainAddr);
    mainWindow.setMenuBarVisibility(false);
    mainWindow.setAutoHideMenuBar(true);
//    mainWindow.setMenu(null);
    //mainWindow.loadURL('http://localhost:8069');
//    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function() {
      mainWindow = null;
      //subpy.kill('SIGINT');
    });
  };
 console.log('Odoo Started to '+ mainAddr);
 openWindow();
//  var startUp = function(){
//   rq(mainAddr)
//      .then(function(htmlString){
//        console.log('server started!');
//        openWindow();
//      })
//      .catch(function(err){
        //console.log('waiting for the server start...');
//        startUp();
//      });
//  };

  // fire!
//  startUp();
});
