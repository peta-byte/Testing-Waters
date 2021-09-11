# Testing Waters

This is a simple app per Reggie Dawson's Getting Started course for React Native on Pluralsight. Some aspects have been adjusted. To use these files to run this app:

Ideally, go over the course but...you can:

1. Create a template React Native app: Run `npx react-native init TestingWaters`
2. Update the template app's files with the ones in this repo
3. Install the app's dependencies: Run `npm i`
4. Set up the fonts in assets for the projects: `npx react-native link`
<hr/>
<h3> Skip the following steps if you are not interested in a release bundle </h3>

- Create a keystore with Java for this app. Update the gradle properties file with the info.
- Add the keystore file to the `android > app` file
- Run `gradlew bundleRelease` in the `android` folder
<hr/>

4. Open an emulator or have your device ready
5. Run for android: `npx react-native run-android`

🤔 updating...for any missing steps
