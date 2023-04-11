import 'package:easy_dynamic_theme/easy_dynamic_theme.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:overlay_support/overlay_support.dart';

class HomeAppBar extends StatefulWidget {
  final double opacity;
  final Map anchorSectionPoints;
  HomeAppBar(this.opacity, this.anchorSectionPoints);

  @override
  State<HomeAppBar> createState() => _HomeAppBarState();
}

class _HomeAppBarState extends State<HomeAppBar> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return PreferredSize(
        preferredSize: Size(size.width, 1000),
        child: Container(
            color:
                Theme.of(context).bottomAppBarColor.withOpacity(widget.opacity),
            child: Padding(
                padding: EdgeInsets.all(20.0),
                child: Row(
                  children: [Text("test")],
                ))));
  }
}
