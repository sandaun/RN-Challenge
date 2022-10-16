# RN_Challenge

App to retrieve and add new documents

## Installation

npm install
pod install

## Usage

To add a document click on "+ Add document" button. Add a title, version and sample file.

You can choose to order documents by title or version on the dropdown.

You can choose to list them on a list or grid.

Notifications are displayed on the bell icon on the top right till 9 notifications. After that will show 9+. To reset
notifications click on the bell button and reset will be done.

## Deploy

To deploy the app I would use App Center for the CD/CI. To do so, I would connect Github withe the App Center App by looking at the Marketplace.

Once done, I would choose which repositories I would like to include into App Center.

In App Center I would choose the repository which I'm going to use and do the setup for iOS and Android. After that, will be possible to build the app and deploy it on both App Store and Google Play Store.

It is also possible to setup the way the apps are going to be build. For example, on every PR merged to master branch, or even do it manually by triggering the build directly inside App Center.
