package com.reindextodomvc;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.pubnub.api.*;
import org.json.*;

import java.util.Map;

public class PubNubModule extends ReactContextBaseJavaModule {

// Available as NativeModules.MyCustomModule.processString
  public PubNubModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }
  @ReactMethod
  public void show(String message) {
     Toast.makeText(getReactApplicationContext(), message, 1000).show();
  }

  @ReactMethod
  public void testShow(String message){ 
  	 Pubnub pubnub = new Pubnub(message, message);
  	 Toast.makeText(getReactApplicationContext(), pubnub.toString(), 1000).show();
  }
  @Override 
  public String getName() {
    return "PubNubModule";
  }
}