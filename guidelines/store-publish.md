## Publish application to Play Store and Apple Store
### Building Standalone Apps
Full documentation - https://docs.expo.io/versions/latest/guides/building-standalone-apps.html
#### 1. Install exp
```javascript
npm install -g exp   
```

#### 2. Update package.json

Increase version number.
```javascript
{
    "version": "0.6.3",
}
```

#### 3. Configure app.json
Important fields - must be changed *manually* upon release:
```javascript
{
    "sdkVersion": "25.0.0",
    "version": "0.6.3",
    
    "ios": {
      "buildNumber": "0.6.3",
    },
    
    "android": {
      "versionCode": 6
    }
}
```
**sdkVersion** - need check using sdkVersion of expo with package.json. Only changes when upgrading expo. 
**version** - Must be same as in package.json. Used for Google Store.  
**buildNumber** - Must be same as version in package.json. Used for Apple Store.  
**versionCode** - Version number(integer). Each new google store release should be increased(+1).  
https://developer.android.com/studio/publish/versioning.html

#### 4. Start the build
```javascript
exp start
```
This is necessary because during the build process your app will be republished to ensure it is the latest version.

Build for Google Store(*We have backup with keystore*)
```javascript
exp build:android --release-channel build-0.6.3
```
Build for Apple Store
```javascript
exp build:ios --release-channel build-0.6.3
```
IMPORTANT! **exp build** command include **exp publish** command and if **--release-channel** is ***empty*** exp will update **default** release channel.   
*WARNING: Channel features are in beta.*
#### 5. Wait for it to finish building
[List of builds](https://expo.io/@ambrite/dazit/builds) - https://expo.io/@ambrite/dazit/builds   
Download .apk (Android) or .ipa (iOS) file.

#### Submit app to the Google store
Need login to Play store (https://play.google.com/apps/publish) and upload .apk file as new release.

#### Submit app to the Apple store
Need to use Application Loader for uploading .ipa to itunesconnect(https://itunesconnect.apple.com) and prepare new release.
