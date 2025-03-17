package com.test

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.BatteryManager;
import android.content.Intent;
import android.content.IntentFilter;

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "test"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}


public int getBatteryLevel() {
    IntentFilter batteryFilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
    Intent batteryStatus = registerReceiver(null, batteryFilter);
    int level = batteryStatus.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
    return level;
}
