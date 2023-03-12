// ignore_for_file: prefer_const_constructors

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class MyDrawer extends StatelessWidget {
  const MyDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    // ignore: prefer_const_declarations, non_constant_identifier_names
    final img_url = "https://images7.alphacoders.com/550/550739.jpg";
    return Drawer(
      child: Container(
        color: Color.fromARGB(255, 11, 3, 31),
        child: ListView(
          children: [
            // DrawerHeader(
            //   padding: EdgeInsets.zero,
            //   child: UserAccountsDrawerHeader(
            //     margin: EdgeInsets.zero,
            //     decoration: BoxDecoration(
            //       color: Colors.cyan,
            //     ),
            //     accountName: Text(
            //       "test",
            //       style: TextStyle(color: Color.fromARGB(255, 11, 3, 31)),
            //     ),
            //     accountEmail: Text(
            //       "test@gmail.com",
            //       style: TextStyle(color: Color.fromARGB(255, 11, 3, 31)),
            //     ),
            //     currentAccountPicture: CircleAvatar(
            //       backgroundImage: NetworkImage(img_url),
            //     ),
            //   ),
            // ),
            ListTile(
              leading: Icon(
                CupertinoIcons.home,
                color: Colors.cyan,
              ),
              title: Text(
                "Home",
                textScaleFactor: 1.2,
                style: TextStyle(
                  color: Colors.cyan,
                ),
              ),
            ),
            ListTile(

              leading: Icon(
                CupertinoIcons.profile_circled,
                color: Colors.cyan,
              ),
              title: Text(
                "Jobs",
                textScaleFactor: 1.2,
                style: TextStyle(
                  color: Colors.cyan,
                ),
              ),
            ),
            ListTile(
              leading: Icon(
                CupertinoIcons.star,
                color: Colors.cyan,
              ),
              title: Text(
                "Competitions",
                textScaleFactor: 1.2,
                style: TextStyle(
                  color: Colors.cyan,
                ),
              ),
            ),
            ListTile(
              leading: Icon(
                CupertinoIcons.book,
                color: Colors.cyan,
              ),
              title: Text(
                "Courses",
                textScaleFactor: 1.2,
                style: TextStyle(
                  color: Colors.cyan,
                ),
              ),
            ),
            ListTile(
              leading: Icon(
                CupertinoIcons.settings,
                color: Colors.cyan,
              ),
              title: Text(
                "Settings",
                textScaleFactor: 1.2,
                style: TextStyle(
                  color: Colors.cyan,
                ),
              ),
            ),
            ListTile(
              leading: Icon(
                CupertinoIcons.info,
                color: Colors.cyan,
              ),
              title: Text(
                "About Us",
                textScaleFactor: 1.2,
                style: TextStyle(
                  color: Colors.cyan,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
