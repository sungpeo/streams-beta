# streams-beta

## Simple web app

Click index.html
or, browse (http://sungpeo.hulkook.com/streams-beta/)


## Electron packaging

``` shell
# install electron-prebuilt
npm i --save-dev electron-prebuilt

# start demo
npm start

# install electron-packager
npm i --save-dev electron-packager

# mac dependencies
brew install wine

# create package
electron-packager . hello-streams --overwrite --asar --platform=win32 --arch=x64 --icon=stack-of-cards.png --prune=true --out=release-builds --version-string.CompanyName=hulkook --version-string.FileDescription=hulkook --version-string.ProductName="Hello Streams"
```
