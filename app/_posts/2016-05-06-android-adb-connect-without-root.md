---
layout: post
comments: yes
tags: [android]
title: "adb connect android device via WiFi without root"
description: "NO ROOT REQUIRED"
---

How to connect your android device via WiFi without root?

#### Steps to get it working:

1. Enable USB Debugging on your android device.
2. Connect your android device via usb cable to your PC.
3. Run `adb tcpip 5555`.
4. Run `adb connect your-android-device-ip`.
5. Now you can pull out your usb cable.

#### To revert back to using adb via usb:

1. Connect your android device via usb cable to your PC.
2. Run `adb usb`

#### Notes:

1. The device may also revert back to USB mode after reboot.
2. USB debugging must be enabled on your device.

**Enjoy it!**
