import 'dart:io';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:picbucks/providers/user_provider.dart';
import 'package:picbucks/responsive/mobile_screen_layout.dart';
import 'package:picbucks/responsive/responsive_layout.dart';
import 'package:picbucks/responsive/web_screen_layout.dart';
import 'package:picbucks/screens/home/pages/initial_slider.dart';
import 'package:picbucks/screens/login_screen.dart';
import 'package:picbucks/utils/colors.dart';
import 'package:provider/provider.dart';
import 'package:flutter_windowmanager/flutter_windowmanager.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // initialise app based on platform- web or mobile
  if (kIsWeb) {
    await Firebase.initializeApp(
      options: const FirebaseOptions(
          apiKey: "AIzaSyCZ-xrXqD5D19Snauto-Fx_nLD7PLrBXGM",
          appId: "1:585119731880:web:eca6e4b3c42a755cee329d",
          messagingSenderId: "585119731880",
          projectId: "instagram-clone-4cea4",
          storageBucket: 'instagram-clone-4cea4.appspot.com'),
    );
  } else {
    await Firebase.initializeApp();
  }
  runApp(const MyApp());
  // WidgetsBinding.instance.addPostFrameCallback((timeStamp) async {
  //   if (Platform.isAndroid||Platform.isIOS) {
  //     var bool = await FlutterWindowManager.addFlags(FlutterWindowManager.FLAG_SECURE);
  //   }
  // });
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(
          create: (_) => UserProvider(),
        ),
      ],
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'PicsBuck',
        theme: ThemeData.dark().copyWith(
          scaffoldBackgroundColor: mobileBackgroundColor,
        ),
        home: sliderPage(),
        // home: StreamBuilder(
        //   stream: FirebaseAuth.instance.authStateChanges(),
        //   builder: (context, snapshot) {
        //     if (snapshot.connectionState == ConnectionState.active) {
        //       // Checking if the snapshot has any data or not
        //       if (snapshot.hasData) {
        //         // if snapshot has data which means user is logged in then we check the width of screen and accordingly display the screen layout
        //         return const LoginScreen();
        //       } else if (snapshot.hasError) {
        //         return Center(
        //           child: Text('${snapshot.error}'),
        //         );
        //       }
        //     }

        //     // means connection to future hasnt been made yet
        //     if (snapshot.connectionState == ConnectionState.waiting) {
        //       return const Center(
        //         child: CircularProgressIndicator(),
        //       );
        //     }

        //     return const LoginScreen();
        //   },
        // ),
      ),
    );
  }
}
