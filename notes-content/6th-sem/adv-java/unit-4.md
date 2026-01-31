# Unit 4: Android and Design Pattern

**Author: Deepak Modi**    

**Syllabus :**      
**Android:** Introduction, history & versions, architecture, building blocks, emulator, android widgets, activity and intents, android fragments, android menu, android service, SQLite, XML & JSON, android speech, multimedia, telephony, maps        
**Design Pattern:** Java design pattern, creational, structural, behavioral, J2EE patterns, presentation layers

## MDU PYQs:
### Android Development  

1. **Android Short Questions**
   - Describe Android R.java file (2023, 2.5 marks)
   - Android Widgets (2024, 2.5 marks)

2. **Android Architecture & Components** (2021-2024) - **HIGH PRIORITY**
   - Explain building blocks and architecture of Android. (2021, 2022, 2024, 15 marks)
   - Explain Android Widgets in details. (2023, 15 marks)
   - Explain Android and its various versions. (2024, part of 15 marks)

### Design Patterns  

1. **Design Patterns Short Questions**
   - J2EE design pattern(s) (2021, 2022, 2.5 marks)

2. **Java Design Patterns** (2021-2024) - **HIGH PRIORITY**
   - Explain structural and behavioural Java design patterns. (2021, 2022, 15 marks)
   - Write short note on: Creational Pattern, Behavioral Pattern, Structural Pattern, J2EE Pattern, Presentation Layer. (2023, 15 marks)
   - Explain the various design patterns in detail. (2024, 15 marks)

---

## **Section 1 : Android**

### **1.1 : Introduction to Android**

> PYQ: Explain Android and its various versions. (2024, part of 15 marks)

Android is an open-source, Linux-based operating system designed primarily for touchscreen mobile devices such as smartphones and tablets. It provides a complete set of software for mobile devices: an operating system, middleware, and key mobile applications.

**Key Features of Android:**
- **Open Source Platform:** Android is built on the open-source Linux kernel, allowing for customization by device manufacturers.
- **Component-Based Architecture:** Android applications are composed of loosely coupled components that can be individually replaced and reused.
- **Rich Development Environment:** Android Studio provides a comprehensive IDE for Android app development.
- **Multi-Language Support:** While Java was the primary language for Android development, Kotlin is now the preferred language.
- **Hardware Adaptation:** Android can be adapted to work with various hardware configurations and form factors.
- **Seamless Integration:** Google services and APIs are tightly integrated into the Android ecosystem.

### **1.2 : History & Versions of Android**

**Brief History:**
- Android Inc. was founded in 2003 by Andy Rubin, Rich Miner, Nick Sears, and Chris White.
- Google acquired Android Inc. in 2005.
- The first commercial Android device, the HTC Dream (T-Mobile G1), was launched in 2008.

**Major Android Versions:**

| Version | Name | Release Year | Key Features |
|---------|------|-------------|--------------|
| 1.0 | (No codename) | 2008 | Basic Android features |
| 1.5 | Cupcake | 2009 | On-screen keyboard, widgets |
| 1.6 | Donut | 2009 | CDMA support, improved search |
| 2.0-2.1 | Eclair | 2009 | Google Maps navigation, live wallpapers |
| 2.2 | Froyo | 2010 | Performance improvements, Flash support |
| 2.3 | Gingerbread | 2010 | NFC support, improved UI |
| 3.0-3.2 | Honeycomb | 2011 | Tablet support, holographic UI |
| 4.0 | Ice Cream Sandwich | 2011 | Unified smartphone/tablet UI |
| 4.1-4.3 | Jelly Bean | 2012-2013 | Project Butter, Google Now |
| 4.4 | KitKat | 2013 | Immersive mode, memory optimizations |
| 5.0-5.1 | Lollipop | 2014-2015 | Material Design, ART runtime |
| 6.0 | Marshmallow | 2015 | Runtime permissions, Doze mode |
| 7.0-7.1 | Nougat | 2016 | Multi-window, JIT compiler |
| 8.0-8.1 | Oreo | 2017 | Picture-in-picture, notification channels |
| 9 | Pie | 2018 | Gesture navigation, Digital Wellbeing |
| 10 | Android 10 | 2019 | Dark theme, privacy controls |
| 11 | Android 11 | 2020 | Conversation notifications, one-time permissions |
| 12 | Android 12 | 2021 | Material You, Privacy Dashboard |
| 13 | Android 13 | 2022 | Themed app icons, per-app language preferences |
| 14 | Android 14 | 2023 | Enhanced privacy features, better large screen support |
| 15 | Android 15 | 2024 | Improved performance, Privacy features, and new APIs |

> Mnemonic: C ─► D ─► E ─► F ─► G ─► H ─► I ─► J ─► K ─► L ─► M ─► N ─► O ─► P ─► Q

### **1.3 : Android Architecture**

> PYQ: Explain building blocks and architecture of Android. (2021, 2022, 2024, 15 marks)

Android architecture is organized in five main layers, each providing specific functionalities and services to the applications built on top of it.

**Android Architecture Layers:**
| Layer                        | Description                                                                       | Key Components                                                           |
| ---------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **1. Applications**          | Top layer containing pre-installed and user-installed apps                        | Dialer, Contacts, Browser, Email, Third-party apps                       |
| **2. Application Framework** | High-level services and APIs that form the environment for app development        | Activity Manager, Window Manager, Content Providers, Resource Manager    |
| **3. Android Runtime (ART)** | Execution environment that runs Android applications                             | Core Java libraries, ART/Dalvik Virtual Machine                          |
| **4. Native Libraries**      | C/C++ libraries that provide essential functionality to the Android system        | SQLite, WebKit, OpenGL ES, SSL, Media Framework, Surface Manager         |
| **5. Linux Kernel**          | Core of Android that handles core system functionality and hardware abstraction  | Process and Memory Management, Security, Network, Drivers |

**Android Architecture Diagram:**

```
┌─────────────────────────────┐
│          Applications       │
├─────────────────────────────┤
│    Application Framework    │
├─────────────────────────────┤
│        Android Runtime      │
├─────────────────────────────┤
│      Native Libraries       │
├─────────────────────────────┤
│         Linux Kernel        │
└─────────────────────────────┘
```

### **1.4 : Building Blocks of Android**

> PYQ: Explain building blocks and architecture of Android. (2021, 2022, 2024, 15 marks)

Android applications are built using four main components, which are the building blocks of any Android app. These components can work independently or together to create a complete application.

**1. Activities:**
   - Single screen with a user interface
   - Each Activity is independent but can communicate with others
   - Follows a specific lifecycle (onCreate, onStart, onResume, etc.)

**2. Services:**
   - Components that run in the background without UI
   - Types: Started Services and Bound Services

**3. Broadcast Receivers:**
   - Respond to system-wide broadcast announcements
   - Allow applications to respond to events even when not running

**4. Content Providers:**
   - Manage structured sets of application data
   - Present data to applications as tables


**How Components Work Together:**

```
┌───────────┐     Intents     ┌───────────┐
│ Activity  │◄────────────────┤ Activity  │
└─────┬─────┘                 └─────▲─────┘
      │ Intents                     │ Intents
┌─────▼─────┐     Queries    ┌──────┴────┐
│  Service  │◄──────────────►│  Content  │
└─────┬─────┘                │ Provider  │
      │  Broadcasts          └───────────┘
┌─────▼─────┐
│ Broadcast │
│ Receiver  │
└───────────┘
```

**Additional Building Blocks:**
- **Intents:** Messaging objects for component communication
- **Manifest File:** XML file describing application components
- **R.java File:** Auto-generated resource reference file

> PYQ: Describe Android R.java file (2023, 2.5 marks)

The R.java file is an auto-generated file in Android that contains references to all resources in the application. It is created during the build process and provides a unique identifier for each resource, allowing developers to access them programmatically. It includes references to layouts, strings, drawables, colors, and other resources defined in the /res directory. It is important to note that developers should not modify the R.java file directly, as it is automatically generated and managed by the Android build system.

### **1.5 : Android Emulator**

The Android Emulator is a virtual device that simulates Android devices on your computer, allowing you to test applications without having a physical device.

**Key Features:**
- **Virtual Hardware:** Simulates various hardware configurations (screen size, memory, storage)
- **System Images:** Offers different API levels and architectures (ARM, x86)
- **Network Simulation:** Simulates various network conditions and speeds
- **Sensor Simulation:** Emulates sensors like GPS, accelerometer, and camera
- **Telephony Features:** Simulates phone calls and SMS messages

**Using the Android Emulator:**
1. **Creation Process:**
   - Created and managed through AVD (Android Virtual Device) Manager
   - Customizable parameters: device type, API level, memory size, storage
   
2. **Performance Optimization:**
   - Hardware acceleration using Intel HAXM or KVM
   - GPU acceleration for faster rendering
   - Snapshot feature to save and quickly reload device states

3. **Testing Capabilities:**
   - Simulate incoming calls, SMS messages
   - Set mock locations for GPS testing
   - Rotate screen and simulate different network conditions
   - Debug applications using built-in developer tools

### **1.6 : Android Widgets**

> PYQ: Android Widgets (2024, 2.5 marks)
> PYQ: Explain Android Widgets in details. (2023, 15 marks)

Android Widgets are reusable UI components that can be combined to create user interfaces. They are the building blocks of Android applications and provide a way to display data and interact with users. 

**Characteristics of Android Widgets:**
1. **Reusable:** Widgets can be reused across different activities and applications.
2. **Customizable:** Widgets can be customized to fit the application's design and functionality.
3. **Event-Driven:** Widgets respond to user interactions through event listeners.
4. **Hierarchical Structure:** Widgets can be nested within other widgets to create complex layouts.
5. **Theming:** Widgets can be styled and themed to match the application's overall design.


**Types of Android Widgets:**

**1. View Widgets:**
   - TextView, EditText, Button, ImageView
   - CheckBox, RadioButton, Switch
   - ProgressBar, SeekBar, RatingBar

**2. Layout Widgets:**
   - LinearLayout: Arranges in a row or column
   - ConstraintLayout: Positions using constraints
   - FrameLayout, TableLayout, GridLayout

**3. Advanced Widgets:**
   - RecyclerView, ListView, GridView
   - ViewPager, WebView, CardView
   - TabLayout, NavigationView, BottomNavigationView

**4. App Widgets:**
   - Miniature app views on the home screen
   - Implemented using AppWidgetProvider

### **1.7 : Activities and Intents**

#### **Activities**

An Activity represents a single screen with a user interface where users can interact. Each Activity in Android has a specific lifecycle that is managed by the Android system.

**Activity Lifecycle:**
1. **onCreate():** Called when activity is first created. Initialize essential components.
2. **onStart():** Activity becomes visible to the user.
3. **onResume():** Activity starts interacting with the user.
4. **onPause():** Another activity comes into foreground.
5. **onStop():** Activity is no longer visible.
6. **onRestart():** Activity restarts after stopping.
7. **onDestroy():** Activity is destroyed completely.

**Activity Stack:**
- Activities in Android follow a Last-In-First-Out (LIFO) stack structure
- When a new activity starts, it's pushed on top of the stack and takes focus
- The previous activity remains in the stack but is stopped
- When the user presses the back button, the current activity is popped from the stack

**Activity Launch Modes:**
- **Standard:** Default mode. Creates a new instance of the activity every time.
- **SingleTop:** If an instance of the activity already exists at the top of the stack, reuses it.
- **SingleTask:** Creates a new task and puts the activity at the root of the task.
- **SingleInstance:** Similar to SingleTask but the task can only contain that single activity.

#### **Intents**

Intents are messaging objects used to request actions from app components.

**Types of Intents:**

**1. Explicit Intents:**
- Specifies the exact component to start by name
- Typically used for starting components within your own application

**2. Implicit Intents:**
- Does not name a specific component
- Describes the action to be performed
- Android system finds appropriate component based on intent filters

**Intent Components:**
- **Action:** The action to be performed (e.g., ACTION_VIEW, ACTION_EDIT)
- **Data:** The URI of the data to operate on
- **Category:** Provides additional information about the component that should handle the intent
- **Type:** Specifies the MIME type of the data
- **Component:** The explicit name of the component to start
- **Extras:** Key-value pairs for additional information

**Intent Filters:**
- Declared in the Android Manifest
- Specifies what types of intents a component can respond to
- Includes actions, categories, and data specifications

**Common Uses for Intents:**
- Starting activities and services
- Delivering broadcasts
- Sharing data between applications
- Opening system settings or other apps

### **1.8 : Android Fragments**

Fragments represent a portion of the user interface within an Activity. They enable more modular designs and facilitate UI adaptations for different screen sizes.

**Key Characteristics:**

- **Modular UI Components:** Fragments are self-contained UI components with their own lifecycle
- **Reusability:** The same fragment can be used in multiple activities
- **Adaptability:** Allows different layouts for different screen sizes and orientations
- **Independent Lifecycle:** Similar to activities but managed by the hosting activity

**Fragment Lifecycle:**
1. **onAttach():** Fragment is associated with its activity
2. **onCreate():** Fragment is created (without UI)
3. **onCreateView():** Fragment creates its UI view hierarchy
4. **onActivityCreated():** Host activity's onCreate() completed
5. **onStart():** Fragment becomes visible
6. **onResume():** Fragment is active and ready for user interaction
7. **onPause():** Fragment is no longer interacting with the user
8. **onStop():** Fragment is no longer visible
9. **onDestroyView():** View hierarchy is destroyed
10. **onDestroy():** Fragment is destroyed
11. **onDetach():** Fragment is detached from the activity

**Types of Fragments:**

1. **UI Fragments:**
   - Create visible UI components
   - Most common type of fragment
   
2. **Non-UI Fragments:**
   - Headless fragments with no UI
   - Used for background operations that need lifecycle awareness

**Fragment Manager:**
- Manages fragments within an activity
- Handles fragment transactions (add, remove, replace)
- Maintains a back stack for fragment transactions

**Fragment Communication:**
1. **Via Host Activity:**
   - Define an interface in the fragment
   - Implement the interface in the activity
   - Call interface methods to communicate

2. **Using Shared ViewModel:**
   - Modern approach using Architecture Components
   - Fragments observe the same ViewModel instance

3. **Fragment Result API:**
   - Added in AndroidX Fragment 1.3.0
   - Allows setting and listening for results between fragments

### **1.9 : Android Menu**

Menus in Android provide a user interface component for navigation and actions.

**Types of Menus:**

1. **Options Menu:**
   - Primary menu for an activity
   - Accessed via device's menu button or overflow icon in the app bar
   - Defined by overriding `onCreateOptionsMenu()` and `onOptionsItemSelected()`
   
2. **Context Menu:**
   - Floating menu that appears when users long-press an element
   - Provides actions specific to the selected item
   - Defined by registering views with `registerForContextMenu()` and overriding `onCreateContextMenu()` and `onContextItemSelected()`
   
3. **Popup Menu:**
   - Anchored to a view and displays a menu below it (similar to dropdown)
   - Disappears when a menu item is selected or when touched outside
   
4. **ActionBar Menu:**
   - Modern representation of the options menu
   - Can display important actions directly in the ActionBar
   
5. **NavigationView:**
   - Used with DrawerLayout to create navigation drawer

### **1.10 : Android Service**

Services are components that run in the background without a user interface, allowing apps to perform long-running operations while not interacting with the user. It can be used for tasks such as playing music, downloading files, or performing network operations.

**Types of Services:**

1. **Foreground Service:**
   - Performs operations noticeable to the user
   - Continues running even when the user isn't interacting with the app
   - Displays a persistent notification
   - Requires `FOREGROUND_SERVICE` permission
   - Used for: music playback, file downloads, tracking location

2. **Background Service:**
   - Performs operations not directly noticed by the user
   - Subject to background execution limits in newer Android versions
   - Used for: data synchronization, periodic updates

3. **Bound Service:**
   - Provides client-server interface
   - Allows components to interact with the service
   - Runs only as long as other application components are bound to it
   - Used for: interprocess communication, sharing resources

**Service Lifecycle:**

1. **Started Services:**
   - **onCreate():** Called once when the service is created
   - **onStartCommand():** Called every time the service is started via `startService()`
   - **onDestroy():** Called when the service is being destroyed

2. **Bound Services:**
   - **onCreate():** Called once when the service is created
   - **onBind():** Called when a component binds to the service via `bindService()`
   - **onUnbind():** Called when all clients have disconnected
   - **onRebind():** Called when new clients bind after `onUnbind()` returns true
   - **onDestroy():** Called when the service is being destroyed

**Common Use Cases:**
- Media playback
- Network operations
- File I/O operations
- Content providers
- Sensor monitoring
- Processing intents from notifications

### **1.11 : SQLite in Android**

SQLite is a lightweight, embedded relational database system included in Android that provides structured data storage for applications.

**Key Features:**
- **Self-contained:** Requires minimal support from external libraries or the OS
- **Zero-configuration:** No setup or administration needed
- **Serverless:** Reads and writes directly to disk files
- **Transactional:** All changes within a transaction succeed or fail together
- **Small footprint:** Uses minimal memory and storage

### **1.13 : Android Speech**

Android provides comprehensive speech capabilities that allow applications to incorporate voice features, enhancing user experience through hands-free interaction.

#### **Speech to Text (Voice Recognition)**

Android's speech recognition functionality converts spoken words into text that applications can process.

**Key Components:**

1. **RecognizerIntent:**
    - Primary interface for accessing speech recognition services
    - Launches the system speech recognition activity
    - Handles language modeling and recognition preferences

**Recognition Process:**
    - The system captures audio through the device microphone
    - Audio is processed locally or sent to Google's servers (depending on device capabilities)
    - Recognition results are returned as a list of possible text matches
    - Applications can specify recognition parameters like language, prompt text, and recognition mode

**Common Use Cases:**
    - Voice search functionality
    - Voice commands for app navigation
    - Dictation for text input
    - Accessibility features for users with disabilities

#### **Text to Speech (TTS)**

Android's Text-to-Speech system converts written text into natural-sounding speech.

**Key Components:**

1. **TextToSpeech Engine:**
    - Core component that synthesizes speech from text
    - Supports multiple languages and voice types
    - Provides controls for speech rate, pitch, and volume

**TTS Features:**
    - Language and locale selection
    - Voice selection (male/female, different accents)
    - Speech rate and pitch adjustment
    - Queue management (flush or add to existing queue)
    - Utterance progress listeners for tracking speech events

**Common Use Cases:**
    - Reading content aloud for accessibility
    - Navigation instructions
    - Language learning applications
    - Audio feedback for user actions
    - Reading notifications in hands-free scenarios

#### **Voice Commands and Voice Actions**

Voice commands allow users to control applications through spoken instructions.

**Types of Voice Integration:**

1. **In-App Voice Commands:**
    - Custom voice recognition within the application
    - Application-specific command vocabulary
    - Can work offline with proper implementation

2. **System Voice Actions:**
    - Standard intents that can be triggered by voice
    - Integrate with the Android system's voice capabilities
    - Examples include calling contacts, sending messages, and opening applications

3. **Google Assistant Integration:**
    - App Actions: Define custom voice commands that trigger specific app functionality
    - Conversational Actions: Create voice-driven conversational experiences
    - Slices: Display interactive app content within Assistant responses

**Benefits of Speech Integration:**
    - Improved accessibility for users with visual or motor impairments
    - Hands-free operation in situations where touching the device is impractical
    - More natural and intuitive user interactions
    - Faster input for certain tasks compared to typing
    - Support for multilingual users with language switching capabilities

Android's speech capabilities continue to evolve with each platform release, offering increasingly sophisticated and natural voice interactions that make applications more accessible and user-friendly.

### **1.14 : Android Multimedia**

Android provides extensive support for multimedia operations, including playing and recording audio and video, as well as capturing images and videos through comprehensive APIs that give developers full control over media experiences.

#### **Audio Playback**

**1. MediaPlayer:**
    - Primary API for audio and video playback in Android
    - Supports various media sources including resources, files, streams, and network URLs
    - Handles multiple audio formats: MP3, AAC, WAV, FLAC, and others
    - Provides a complete state machine with distinct states (Idle, Initialized, Prepared, Started, Paused, Stopped, etc.)
    - Offers callbacks for various events like completion, buffering, and error handling

**MediaPlayer Lifecycle:**
    - The lifecycle follows a specific sequence of states that must be respected
    - Improper state transitions can result in IllegalStateException
    - Resources must be properly released when no longer needed to avoid memory leaks

**2. ExoPlayer:**
    - Google's advanced open-source media player library
    - Offers more flexibility and features compared to the native MediaPlayer
    - Supports adaptive streaming protocols like DASH, HLS, and SmoothStreaming
    - Provides advanced features such as custom track selection, DRM support, and extensive customization
    - Better handling of network conditions and buffering strategies

#### **Audio Recording**

**MediaRecorder:**
    - Primary component for capturing audio and video in Android
    - Supports multiple audio sources: microphone, voice call, voice uplink/downlink
    - Various output formats: 3GPP, MPEG-4, AMR, AAC
    - Configurable audio encoders with different quality settings
    - Requires explicit permission handling for microphone access
    - Records directly to storage with configurable bit rates and channel configurations

**AudioRecord:**
    - Lower-level API for raw audio data capture
    - Provides access to raw PCM audio data in real-time
    - Useful for applications requiring audio processing (voice recognition, sound analysis)
    - More complex to implement but offers greater control over the recording process

#### **Video Playback**

**1. VideoView:**
    - Specialized view for displaying video content
    - Encapsulates MediaPlayer functionality with a simpler interface
    - Handles surface creation and media controller UI
    - Supports basic playback controls through MediaController
    - Limited customization options compared to ExoPlayer

**2. SurfaceView and TextureView:**
    - Lower-level components used for custom video rendering
    - SurfaceView provides a dedicated drawing surface for efficient video rendering
    - TextureView offers better integration with animations and transformations
    - Used in conjunction with MediaPlayer or ExoPlayer for custom video playback implementations

#### **Camera Operations**

**1. Camera API (Legacy):**
    - Original camera framework for devices before Android 5.0 (Lollipop)
    - Provides access to camera hardware features like flash, focus modes, and zoom
    - Simpler implementation but with limited capabilities
    - Still used in applications targeting older Android versions

**2. Camera2 API:**
    - Modern camera framework introduced in Android 5.0
    - Pipeline-based architecture with request-driven model
    - Advanced features: RAW image capture, burst mode, manual controls
    - Exposure compensation, white balance, and focus control
    - Access to metadata and camera sensor information
    - Complex implementation requiring careful state management

**3. CameraX:**
    - Jetpack library that simplifies camera implementation
    - Provides use cases for common scenarios: Preview, Image Capture, Video Capture
    - Handles device compatibility and vendor-specific implementations
    - Lifecycle-aware components that integrate with Android Architecture Components
    - Extensions for portrait mode, HDR, night mode (on supported devices)

#### **Media Scanning and Content Management**

**MediaStore:**
    - System database for indexing media files on the device
    - Provides ContentProvider interfaces for querying and manipulating media
    - Categorizes content by type: Images, Audio, Video, Downloads
    - Handles media permissions and access control

**MediaScanner:**
    - Updates Android's media database when new media is created
    - Makes media files visible to gallery apps and other media applications
    - Important for applications that generate media files programmatically

**MediaMetadataRetriever:**
    - Extracts metadata from media files (duration, dimensions, bitrate)
    - Retrieves frame thumbnails from video files
    - Reads embedded metadata like artist, album, and title from audio files

#### **Audio Effects and Processing**

**AudioEffect:**
    - Framework for applying real-time audio processing
    - Supports equalizers, virtualizers, bass boost, and noise suppression
    - Can be attached to audio tracks or global audio output

**Visualizer:**
    - Provides frequency and waveform data from audio output
    - Used for creating audio visualization components
    - Works with both MediaPlayer and ExoPlayer

Android's multimedia framework provides developers with comprehensive tools to create rich media experiences, from simple audio playback to complex camera applications. The platform continues to evolve with each Android version, introducing new capabilities while maintaining backward compatibility through libraries like CameraX and ExoPlayer.

### **1.15 : Android Telephony**

Android's telephony framework provides a comprehensive set of APIs that allow applications to interact with the device's phone functionality. These APIs enable developers to create applications that can make calls, send and receive SMS messages, access SIM card information, and monitor phone state changes.

#### **Core Telephony Components**

**1. TelephonyManager:**
    - Central class for accessing telephony services
    - Provides information about the telephony services on the device
    - Offers methods to access network information, phone state, and subscriber details
    - Requires appropriate permissions for accessing sensitive telephony information

**2. PhoneStateListener:**
    - Used to monitor changes in the telephony state
    - Provides callback methods for various telephony events
    - Can monitor call states, signal strength changes, and network service changes

#### **Phone Call Functionality**

**1. Initiating Phone Calls:**
    - Android provides multiple intents for call handling:
      - `ACTION_CALL`: Directly initiates a phone call (requires CALL_PHONE permission)
      - `ACTION_DIAL`: Opens the dialer with a pre-filled number (no special permissions)
    - Applications can choose between direct calling or presenting the dialer interface

**2. Call State Monitoring:**
    - Applications can monitor call states using PhoneStateListener:
      - `CALL_STATE_IDLE`: No calls are active
      - `CALL_STATE_RINGING`: A call is incoming and ringing
      - `CALL_STATE_OFFHOOK`: At least one call is active or on hold

**3. Call Log Access:**
    - Android provides ContentProvider to access call history
    - Applications can query, add, modify, or delete call log entries
    - Requires READ_CALL_LOG or WRITE_CALL_LOG permissions

#### **SMS Messaging**

**1. SMS Manager:**
    - Central class for sending SMS messages programmatically
    - Supports sending single and multipart messages
    - Handles message segmentation for long texts
    - Provides delivery status reporting

**2. SMS Reception:**
    - Applications can receive incoming SMS through BroadcastReceivers
    - SMS_RECEIVED_ACTION broadcasts are sent when new messages arrive
    - Full SMS reception requires RECEIVE_SMS permission
    - Messages can be processed before reaching the default SMS app

**3. SMS Verification:**
    - Android provides APIs for automated SMS verification
    - Consent-based SMS receiver for verification codes
    - Reduces friction in authentication flows

#### **SIM Card Information**

**1. SIM Details:**
    - Access to carrier information
    - SIM state monitoring (ready, absent, locked)
    - Multi-SIM support on compatible devices
    - International mobile subscriber identity (IMSI) access

**2. Network Information:**
    - Mobile country code (MCC) and mobile network code (MNC)
    - Network operator name
    - Roaming status
    - Network type (2G, 3G, 4G, 5G)

#### **Advanced Telephony Features**

**1. Voice Mail:**
    - Access to voice mail number
    - Voice mail notification handling

**2. Emergency Calls:**
    - Special handling for emergency numbers
    - Override certain restrictions for emergency situations

**3. Carrier Services:**
    - Integration with carrier-specific features
    - Visual voicemail support
    - Rich Communication Services (RCS) integration

#### **Security and Permissions**

Telephony functionality involves sensitive operations that require explicit permissions:

**1. Call-related Permissions:**
    - `CALL_PHONE`: For making calls directly
    - `READ_PHONE_STATE`: For accessing phone state information
    - `READ_CALL_LOG`/`WRITE_CALL_LOG`: For call history access

**2. SMS-related Permissions:**
    - `SEND_SMS`: For sending SMS messages
    - `RECEIVE_SMS`: For receiving SMS broadcasts
    - `READ_SMS`: For accessing stored messages

The Android telephony framework provides developers with powerful tools to integrate phone functionality into applications while maintaining user privacy through the permissions system. When implemented properly, telephony features can significantly enhance the utility of mobile applications that need to communicate via traditional cellular networks.

### **1.16 : Android Maps**

Android provides comprehensive mapping capabilities through the Google Maps API, allowing developers to integrate interactive maps into their applications.

#### **Introduction to Google Maps in Android**

Google Maps API for Android provides a powerful framework for displaying maps and geographic data in Android applications. It enables developers to create location-based applications with rich mapping features.

**Key Features:**
- Display interactive maps with various visualization types
- Add and customize map markers, shapes, and overlays
- Implement location tracking and navigation
- Perform geocoding and reverse geocoding
- Calculate routes and distances

#### **Setting Up Google Maps**

To integrate Google Maps into an Android application, developers need to complete several configuration steps:

1. **Prerequisites:**
    - Obtain a Google Maps API key from the Google Cloud Console
    - Add Google Play Services dependency to the application
    - Configure appropriate permissions in the AndroidManifest.xml

2. **Map Components:**
    - SupportMapFragment: Main container for displaying the map
    - MapView: Alternative lightweight component for embedding maps
    - OnMapReadyCallback: Interface to handle map initialization events

#### **Map Types and Visualization**

Google Maps API offers different map types to suit various application needs:

1. **Standard Map Types:**
    - **Normal:** Default road map with streets, buildings, and landmarks
    - **Satellite:** Aerial/satellite imagery of the Earth's surface
    - **Terrain:** Topographic details like mountains and vegetation
    - **Hybrid:** Combination of satellite imagery with road maps overlay

2. **Custom Styling:**
    - JSON-based styling to customize map colors and feature visibility
    - Night mode, custom themes, and branded maps

#### **Map Features and Interactions**

The Google Maps API provides numerous interactive elements:

1. **Markers:**
    - Customizable pins that identify specific locations
    - Support for custom icons, colors, and info windows
    - Click events and drag functionality

2. **Camera Control:**
    - Methods to move, animate, and position the map view
    - Zoom, tilt, bearing, and target position adjustments
    - Bounds adjustment to fit multiple points

3. **Map Shapes:**
    - **Polylines:** Connected line segments for paths and routes
    - **Polygons:** Enclosed areas with customizable fill and stroke
    - **Circles:** Circular regions defined by center and radius
    - **Ground Overlays:** Images overlaid on map at specific coordinates

#### **Location Services Integration**

Google Maps works seamlessly with Android's location services:

1. **Fused Location Provider:**
    - High-level location API that intelligently combines sensors
    - Power-efficient location tracking with configurable accuracy
    - Handles provider switching and availability

2. **User Location Display:**
    - Built-in "My Location" layer showing user's current position
    - Location permission handling and status indicators
    - Location change listeners for real-time updates

#### **Geocoding Services**

Geocoding services translate between addresses and geographic coordinates:

1. **Forward Geocoding:**
    - Converting street addresses or place names to coordinates
    - Support for partial matches and multiple results

2. **Reverse Geocoding:**
    - Converting geographic coordinates to human-readable addresses
    - Different levels of detail (street address, city, country)

#### **Advanced Features**

1. **Street View Integration:**
    - Immersive 360° panoramic views of streets and locations
    - Programmatic control of viewpoint and orientation

2. **Directions and Routes:**
    - Calculate routes between locations with alternatives
    - Support for different transportation modes
    - Turn-by-turn navigation instructions

3. **Places API Integration:**
    - Search for nearby places and points of interest
    - Autocomplete functionality for location search
    - Place details including reviews, photos, and opening hours

4. **Heat Maps:**
    - Visualize density of data points using color gradients
    - Useful for showing concentrations of activities or events

#### **Performance Considerations**

When implementing maps in Android applications, developers should consider:

1. **Memory Usage:**
    - Maps consume significant memory resources
    - Proper lifecycle management to release resources

2. **Offline Capabilities:**
    - Caching map data for offline use
    - Handling connectivity issues gracefully

3. **Battery Impact:**
    - Location services can drain battery quickly
    - Implementing appropriate update intervals

Google Maps integration enhances Android applications with powerful spatial capabilities, enabling developers to create engaging location-based experiences for users across a wide range of use cases from navigation and travel to social networking and business applications.

--- 

## **Section 2 : Design Pattern**

### **2.1 : JAVA Design Pattern**

> PYQ: Explain the various design patterns in detail. (2024, 15 marks)

Design patterns are typical solutions to common problems in software design. They represent best practices evolved over time by experienced software developers. Design patterns provide a standardized way to solve recurring design problems, making code more flexible, reusable, and maintainable.

```
┌──────────────────┐         ┌──────────────────┐
│   REAL WORLD     │         │   CODE WORLD     │
│                  │         │                  │
│ 🏠 House plans   │  ====>  │ 🏭 Design       │
│ 🚗 Car templates │  ====>  │    patterns     │
│ 👔 Clothing      │  ====>  │                 │
│    patterns      │         │                  │
└──────────────────┘         └──────────────────┘
```

**Benefits of Design Patterns:**
- Provide tested, proven development paradigms
- Facilitate reuse of successful designs
- Prevent subtle issues that can cause major problems
- Improve code readability for developers familiar with the patterns
- Establish a common vocabulary for discussing design solutions

**Classification of Design Patterns:**
Design patterns in Java (and in general object-oriented design) are classified into three main categories, based on their purpose and scope. These patterns are part of the Gang of Four (GoF) design patterns from the book "Design Patterns: Elements of Reusable Object-Oriented Software" by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides.

1. **Creational Patterns:** Deal with the way of creating objects.
   - Singleton Pattern
   - Factory Method Pattern
   - Abstract Factory Pattern
   - Builder Pattern
   - Prototype Pattern

2. **Structural Patterns:** Deal with how classes and objects are composed to form larger structures.
    - Adapter Pattern
    - Bridge Pattern
    - Composite Pattern
    - Decorator Pattern
    - Facade Pattern
    - Flyweight Pattern
    - Proxy Pattern

3. **Behavioral Patterns:** Deal with the interaction and responsibility of objects.
    - Chain of Responsibility Pattern
    - Command Pattern
    - Interpreter Pattern
    - Iterator Pattern
    - Mediator Pattern
    - Memento Pattern
    - Observer Pattern
    - State Pattern
    - Strategy Pattern
    - Template Method Pattern
    - Visitor Pattern

### **2.2 : Creational Design Patterns**

> PYQ: Write short note on: Creational Pattern, Behavioral Pattern, Structural Pattern, J2EE Pattern, Presentation Layer. (2023, 15 marks)

Creational design patterns deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. They help make the system independent of how its objects are created, composed, and represented.

Creational patterns are about CLASS CREATION or OBJECT CREATION.

```
  ┌──────────┐
  │ Class    │
  │ Creation │
  └──────────┘
       │
       ▼
  ┌──────────┐
  │ Object   │
  │ Creation │
  └──────────┘
```

**Common Use Cases:** Object creation, resource management

**Common Creational Patterns:**
| Pattern              | Description                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Singleton**        | Ensures a class has only one instance and provides a global access point.                                            |
| **Factory Method**   | Defines an interface for creating an object but allows subclasses to alter the type of objects that will be created. |
| **Abstract Factory** | Provides an interface to create families of related or dependent objects without specifying their concrete classes.  |
| **Builder**          | Separates the construction of a complex object from its representation.                                              |
| **Prototype**        | Creates new objects by cloning an existing object.                                                                   |

### **2.3 : Structural Design Patterns**

> PYQ: Explain structural and behavioural Java design patterns. (2021, 2022, 15 marks)
> PYQ: Write short note on: Creational Pattern, Behavioral Pattern, Structural Pattern, J2EE Pattern, Presentation Layer. (2023, 15 marks)

Structural design patterns focus on how classes and objects are composed to form larger structures. They help ensure that when parts of a system change, the entire system doesn't need to change.

Structural patterns are about RELATIONSHIPS between objects.
```
  ┌──────┐     ┌──────┐     ┌──────┐
  │Object│─────│Object│─────│Object│
  └──────┘     └──────┘     └──────┘
      │            │            │
    ┌─┴────────────┴────────────┴─┐
    │      Larger Structure       │
    └─────────────────────────────┘
```

**Common Use Cases:** UI components, data structures, and object composition

**Common Structural Patterns:**
| Pattern       | Description                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------- |
| **Adapter**   | Converts one interface to another interface that clients expect.                             |
| **Bridge**    | Separates an object’s abstraction from its implementation so the two can vary independently. |
| **Composite** | Composes objects into tree structures to represent part-whole hierarchies.                   |
| **Decorator** | Adds responsibilities to objects dynamically.                                                |
| **Facade**    | Provides a simplified interface to a complex system.                                         |
| **Flyweight** | Reduces memory usage by sharing as much data as possible with similar objects.               |
| **Proxy**     | Provides a surrogate or placeholder for another object to control access to it.              |

### **2.4 : Behavioral Design Patterns**

> PYQ: Explain structural and behavioural Java design patterns. (2021, 2022, 15 marks)
> PYQ: Write short note on: Creational Pattern, Behavioral Pattern, Structural Pattern, J2EE Pattern, Presentation Layer. (2023, 15 marks)

Behavioral design patterns focus on algorithms and the assignment of responsibilities between objects. They characterize complex control flows that are difficult to follow at runtime and help define how objects interact and distribute responsibility.

**Common Use Cases:** Framework methods, data processing pipelines

**Common Behavioral Patterns:**
| Pattern                     | Description                                                                           |
| --------------------------- | ------------------------------------------------------------------------------------- |
| **Chain of Responsibility** | Passes a request along a chain of handlers.                                           |
| **Command**                 | Encapsulates a request as an object, thereby letting users parameterize clients.      |
| **Interpreter**             | Provides a way to evaluate language grammar or expressions.                           |
| **Iterator**                | Provides a way to access the elements of an aggregate object sequentially.            |
| **Mediator**                | Reduces communication complexity between objects.                                     |
| **Memento**                 | Captures and restores an object’s internal state.                                     |
| **Observer**                | Allows a subject to notify all observers automatically of any state changes.          |
| **State**                   | Allows an object to alter its behavior when its internal state changes.               |
| **Strategy**                | Enables selecting an algorithm's behavior at runtime.                                 |
| **Template Method**         | Defines the skeleton of an algorithm in a method, deferring some steps to subclasses. |
| **Visitor**                 | Allows adding new operations to existing object structures without modifying them.    |

### **2.5 : J2EE Design Patterns**

> PYQ: J2EE design pattern(s) (2021, 2022, 2.5 marks)
> PYQ: Write short note on: Creational Pattern, Behavioral Pattern, Structural Pattern, J2EE Pattern, Presentation Layer. (2023, 15 marks)

J2EE (Java 2 Enterprise Edition) design patterns are specific patterns used in enterprise Java applications. These patterns address common challenges in developing complex enterprise systems.

These are broadly categorized into three types by Sun Microsystems (now Oracle):
1. **Presentation Tier Patterns:** Focus on the user interface and presentation logic.
2. **Business Tier Patterns:** Focus on the business logic and processing.
3. **Integration Tier Patterns:** Focus on the integration of different systems and data sources.

#### **Presentation Tier Patterns**
These patterns are used in the web layer (front-end interaction with users) to manage how data is displayed and handled in a web application.

**Common Presentation Tier Patterns:**
| Pattern                 | Description                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| **Intercepting Filter** | Pre/post-processing of requests and responses (e.g., authentication, logging).                    |
| **Front Controller**    | A single handler for all requests (e.g., servlet/controller that delegates requests to handlers). |
| **View Helper**         | Helps in separating business logic from UI code (e.g., using JSP tags or custom tags).            |
| **Composite View**      | Composes views from multiple subviews (e.g., reusable UI components in JSPs).                     |
| **Dispatcher View**     | A controller determines which view to render and delegates request.                               |
| **Service to Worker**   | Combines Front Controller + View Helper; controller handles navigation & helpers handle logic.    |

#### **Business Tier Patterns**
These patterns are used in the business logic layer to manage the core functionality of the application.

**Common Business Tier Patterns:**
| Pattern                       | Description                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| **Business Delegate**         | Hides the complexity of EJB and provides a simple interface to the presentation tier. |
| **Session Facade**            | Provides a unified interface to a set of EJBs or business components.                 |
| **Application Service**       | Centralizes business logic into a service layer (stateless).                          |
| **Service Locator**           | Abstracts the lookup of services like EJBs, JMS, JNDI to reduce code duplication.     |
| **Transfer Object (DTO)**     | Used to transfer data between layers (serializable object carrying multiple values).  |
| **Transfer Object Assembler** | Combines multiple DTOs into a single DTO for transfer.                                |

#### **Integration Tier Patterns**
These patterns deal with data access and integration with external systems, databases, and services.
These patterns help in managing the complexity of integrating different systems and data sources.

**Common Integration Tier Patterns:**
| Pattern                      | Description                                                                 |
| ---------------------------- | --------------------------------------------------------------------------- |
| **Data Access Object (DAO)** | Abstracts and encapsulates all access to the data source (DB operations).   |
| **Service Activator**        | Listens for events (e.g., JMS messages) and invokes business services.      |
| **Web Service Broker**       | Mediates between service consumers and providers using web services.        |
| **Domain Store**             | Maps objects to persistent storage and vice versa (used in ORM frameworks). |


---
*These notes were compiled by Deepak Modi, MDU (2026)*
*Contact: deepakmodidev@gmail.com*