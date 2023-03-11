// import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
// import 'package:ss_block/pages/text/AppLargeText.dart';
// import 'package:ss_block/pages/text/AppText.dart';
// import 'package:ss_block/pages/text/search.dart';
// import 'package:ss_block/ss_block.dart';

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
            Container(
              padding: const EdgeInsets.only(top: 70, left: 20, right: 20),
              child: Row(
                children: [
                  Icon(Icons.menu, size: 30, color: Colors.cyan),
                  Expanded(
                      child: Container(
                    margin: const EdgeInsets.only(right: 20),
                    width: 50,
                    height: 50,
                  )),
                  Container(
                    padding: const EdgeInsets.only(top: 70, right: 10),
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      color: Colors.cyan.withOpacity(0.5),
                    ),
                  ),
                ],
              ),
            ),
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
                    unselectedLabelColor: Color.fromARGB(255, 38, 35, 63),
                    isScrollable: true,
                    indicatorSize: TabBarIndicatorSize.label,
                    indicator:
                        CircleTabIndicator(color: Colors.cyan, radius: 4),
                    tabs: [
                      Tab(text: "Photos"),
                      Tab(text: "Reels"),
                    ]),
              ),
            ),
            SizedBox(height: 60),
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
                      mainAxisSpacing: 6,
                      crossAxisCount: 2,
                      crossAxisSpacing: 6),
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
                      mainAxisSpacing: 6,
                      crossAxisCount: 2,
                      crossAxisSpacing: 6),
                ),
              ]),
            ),
            Container(),
          ],
        ));
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
