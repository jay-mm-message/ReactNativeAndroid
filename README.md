book:
  ReactNative 頂尖跨平台行動裝置應用開發框架
出版社:
  佳魁資訊
年份:
  2019


Create Project:
  react-native init <project-name>

Example:
  react-native init android


AVD:
  Pixel2
  system image: API 27 (Oreo)

Error:
Can't open emulator by using react-native `run-andrid`
  vim ~/.zshrc
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools

Gradle Failed:
    File -> Project Structure -> Project(on the left panel)
    > Android Gradle Plugin Version: 4.2.2
    > Gradle Version: 7.2
================================================================================
    Solution 3: Just upgrade the Gradle version Method 2

    Upgrading Gradle version 6.8.3 to 7.0 solved my problem. You can upgrade it

    File -> Project Structure -> Project(on the left panel)
    Change Gradle Version 7.0
It works with Android Gradle Plugin version 4.2.0
================================================================================
