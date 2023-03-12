import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:picbucks/screens/home/pages/profile_page.dart';

import '../widgets/search_bar.dart';
import 'gallery_page.dart';
import 'navbar.dart';
// import 'package:picbucks/misc/AppLargeText.dart';
// import 'package:picbucks/misc/AppText.dart';
// import 'package:picbucks/misc/search.dart';
// import 'package:picbucks/pages/gallery_page.dart';
// import 'package:picbucks/pages/initial_slider.dart';
// import 'package:picbucks/pages/navbar.dart';
// import 'package:flutter/src/widgets/icon.dart';
// import 'package:picbucks/pages/profile_page.dart';
// import 'package:picbucks/widgets/search_bar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with TickerProviderStateMixin {
  @override
  Widget build(BuildContext context) {
    TabController _tabController = TabController(length: 2, vsync: this);
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 11, 3, 31),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            height: 40,
          ),
          //tabbar
          Container(
            child: Align(
              alignment: Alignment.center,
              child: TabBar(
                  labelPadding: const EdgeInsets.only(left: 20, right: 20),
                  controller: _tabController,
                  labelColor: Colors.cyan,
                  unselectedLabelColor: Colors.cyan.withOpacity(0.4),
                  isScrollable: true,
                  indicatorSize: TabBarIndicatorSize.label,
                  indicator: CircleTabIndicator(color: Colors.cyan, radius: 4),
                  tabs: [
                    Tab(text: "Photos"),
                    Tab(text: "Reels"),
                  ]),
            ),
          ),
          SizedBox(height: 10),
          Container(
            padding: const EdgeInsets.only(bottom: 0, left: 20),
            height: 500,
            width: double.maxFinite,
            child: TabBarView(controller: _tabController, children: [
              GridView.builder(
                itemCount: 14,
                scrollDirection: Axis.vertical,
                itemBuilder: (BuildContext context, int index) {
                  return Container(
                    margin: const EdgeInsets.only(right: 15, top: 10),
                    width: 200,
                    height: 300,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        color: Color.fromARGB(255, 4, 14, 41),
                        image: DecorationImage(
                            image: AssetImage("img/mountain.jpeg"),
                            fit: BoxFit.cover)),
                  );
                },
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    mainAxisSpacing: 6, crossAxisCount: 2, crossAxisSpacing: 6),
              ),
              GridView.builder(
                itemCount: 14,
                scrollDirection: Axis.vertical,
                itemBuilder: (BuildContext context, int index) {
                  return Container(
                    margin: const EdgeInsets.only(right: 15, top: 10),
                    width: 200,
                    height: 300,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        color: Colors.black12,
                        image: DecorationImage(
                            image: AssetImage("img/mountain.jpeg"),
                            fit: BoxFit.cover)),
                  );
                },
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    mainAxisSpacing: 6, crossAxisCount: 2, crossAxisSpacing: 6),
              ),
            ]),
          ),
          IconButton(
            padding: EdgeInsets.symmetric(horizontal: 152, vertical: 10),
            onPressed: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => GalleryPage()));
            },
            icon: Icon(Icons.add_circle_rounded),
            color: Colors.cyanAccent,
            iconSize: 60,
          ),
        ],
      ),
      appBar: AppBar(
        title: Text(
          'PicBucks',
          style: TextStyle(fontSize: 40, fontFamily: 'TiltPrism'),
        ),
        backgroundColor: Color.fromARGB(255, 11, 3, 31),
        iconTheme: IconThemeData(color: Colors.cyan, size: 30),
        actions: [
          IconButton(
            onPressed: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => SearchBar()));
            },
            icon: Icon(Icons.search),
          ),
          IconButton(
              onPressed: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => ProfilePage()));
              },
              icon: Icon(Icons.person)),
        ],
      ),
      drawer: MyDrawer(),
    );
  }
}

class CircleTabIndicator extends Decoration {
  final Color color;
  double radius;
  CircleTabIndicator({required this.color, required this.radius});
  @override
  BoxPainter createBoxPainter([VoidCallback? onChanged]) {
    // TODO: implement createBoxPainter
    return _CirclePainter(color: color, radius: radius);
  }
}

class _CirclePainter extends BoxPainter {
  final Color color;
  double radius;
  _CirclePainter({required this.color, required this.radius});

  @override
  void paint(Canvas canvas, Offset offset, ImageConfiguration configuration) {
    Paint _paint = Paint();
    _paint.color = color;
    _paint.isAntiAlias = true;
    final Offset circleOffset = Offset(
        configuration.size!.width / 2 - radius / 2,
        configuration.size!.height - radius);
    canvas.drawCircle(offset + circleOffset, radius, _paint);
  }
}