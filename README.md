> **react-native layout examples for common cases.**
>
> This project is a playground to compare common layouts with pure react-native
> and with my keep it simple and add semantic library
> [react-native-layout](https://github.com/jerolimov/react-native-layout).

### Prepare dev setup

This project requires [node](https://nodejs.org/) 4+ and
[react-native](https://facebook.github.io/react-native/) 0.14.

Use npm to install the local dependencies:

    npm install

### Run Android version

Requires that the Android SDK is installed and the env variable `ANDROID_HOME`
is defined correctly.

Start the server which allows the app to load the javascript bundle locally:

    npm start

Setup a tcp reverse proxy to allow devices and emulators to connect to the
local server:

    adb reverse tcp:8081 tcp:8081

Build the apk, deploy and start the application on a device or emulator:

    npm run start:android

### Run iOS version

Start the server which allows the app to load the javascript bundle locally:

    npm start

Start Xcode and run the application on a device or simulator:

    open ios/RNNavigationExamples.xcodeproj
    # cmd+r or project > run...
