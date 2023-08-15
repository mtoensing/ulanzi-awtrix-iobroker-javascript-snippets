[![Click to Watch](https://marc.tv/media/2023/08/ulanzi-spotify.jpg)](https://marc.tv/media/2023/08/ulanzi-spotify.mp4)

# JavaScript Snippets for ioBroker JavaScript Adapter and Awtrix Adapter

This repository contains a collection of JavaScript snippets designed for use with the [JavaScript Adapter](https://github.com/ioBroker/ioBroker.javascript) and the [Awtrix Adapter](https://github.com/klein0r/ioBroker.awtrix-light) for the Ulanzi TC0001 device for [ioBroker](https://iobroker.net/).

## What is Awtrix Adapter and Ulanzi TC0001?

The Awtrix Adapter is a component that connects ioBroker with the Ulanzi TC0001, a device designed for visual notifications and displays. This allows you to create dynamic and interactive displays for notifications, weather updates, time, and more.

[Purchase the Ulanzi TC0001 device here](https://marc.tv/out/smartpixel)


## What is ioBroker?

ioBroker is an open-source home automation platform that allows you to integrate and control various smart devices and systems in your home. The JavaScript Adapter within ioBroker enables you to write custom scripts and automate actions based on events and conditions.

## Repository Contents

- `basic-example.js`: An example snippet demonstrating basic usage of the Awtrix Adapter and ioBroker JavaScript Adapter.
- `ff_fanfare.txt`: A text file containing a melody in RTTTL-format. Needs to be uploaded onto the device.
- `marctv-api-pull.js`: A snippet for pulling data from the marctv API and displaying it through the Awtrix Adapter.
- `marctv-notification-with-sound.js`: A snippet for displaying notifications with sound through the Awtrix Adapter using the marctv API.
- `meross-garage-notification.js`: A snippet for sending garage notifications using the Meross integration and Awtrix Adapter. Needs the Meross Adapter for ioBroker.
- `meross-merge-values.js`: A snippet demonstrating how to merge values from Meross devices for display on the Awtrix Adapter. Needs the Meross Adapter for ioBroker.
- `spotify-notification-new-track.js`: A snippet for notifying and displaying new Spotify tracks on the Awtrix Adapter. Needs the Spotify Adapter for ioBroker.

## Snippets Included

This repository provides a collection of JavaScript code snippets that you can use with the JavaScript Adapter and Awtrix Adapter combination. These snippets cover a range of functionalities, from basic display commands to more advanced interactive features.

## Usage

1. Clone this repository to your local machine.
2. Navigate to the specific snippet you want to use.
3. Copy the JavaScript code from the snippet.
4. Paste the code into your ioBroker JavaScript Adapter script or Awtrix Adapter configuration, as needed.
5. Customize the code to suit your requirements.

## Contributions

Feel free to contribute your own JavaScript snippets that enhance the functionality of the ioBroker JavaScript Adapter and Awtrix Adapter. Simply fork this repository, create a new branch, add your snippets, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
