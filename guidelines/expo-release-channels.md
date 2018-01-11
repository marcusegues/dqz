#### expo release channels
Documentation - https://docs.expo.io/versions/latest/guides/release-channels.html   
CI is publishing expo releases.

#### DAZIT release-channels
##### develop channel [https://expo.io/@ambrite/dazit?release-channel=develop]
When you push commit or merge Pull request to **develop branch** - CI will run:
```bash
exp publish --release-channel develop
``` 
##### release-x.x.x channel [https://expo.io/@ambrite/dazit?release-channel=release-0.2.1]
When you push commit or merge Pull request to **release-x.x.x branch** - CI will run:
```bash
exp publish --release-channel release-0.2.1
``` 
##### Tag x.x.x channel [https://expo.io/@ambrite/dazit?release-channel=0.2.1]
When you create Tag x.y.z - CI will run:
```bash
exp publish --release-channel x.y.z
``` 
### Naming explanation
Release branch can be any string starting with `release` (regexp: `/release-.*/`).    
Example: release-0.2.1, release-minorfix, release-fix11042017.

Tag name is restricted to digits and can be only 0.2.5 (regexp: `/\d+\.\d+\.\d+/`.   
Example: 0.10.2, 1.7.4, 0.0.5.

Develop branch are strict to string 'develop'.

