import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/src/widgets/framework.dart';

import '../widgets/responsive_button.dart';
// import 'package:picbucks/pages/initial_slider.dart';
// import 'package:picbucks/widgets/responsive_button.dart';

class sliderPage extends StatefulWidget {
  const sliderPage({super.key});

  @override
  State<sliderPage> createState() => _sliderPageState();
}

class _sliderPageState extends State<sliderPage> {
  List Images = [
    "Image1.jpg",
    "Image2.jpg",
    "Image3.jpg",
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: PageView.builder(
          scrollDirection: Axis.horizontal,
          itemCount: Images.length,
          itemBuilder: (_, index) {
            return Container(
              width: double.maxFinite,
              height: double.maxFinite,
              decoration: BoxDecoration(
                  image: DecorationImage(
                      image: AssetImage("img/" + Images[index]),
                      fit: BoxFit.cover)),
              child:
                  Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SizedBox(
                      height: 500,
                    ),
                    ResponsiveButton(
                      width: 150,
                    ),
                    SizedBox(
                      height: 50,
                    ),
                    Row(
                      children: List.generate(3, (indexDots) {
                        return Container(
                          margin: EdgeInsets.only(left: 5),
                          height: 8,
                          width: index == indexDots ? 25 : 8,
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(8),
                              color: index == indexDots
                                  ? Colors.cyan
                                  : Colors.cyan.withOpacity(0.3)),
                        );
                      }),
                    )
                  ],
                ),
              ]),
            );
          }),
    );
  }
}
