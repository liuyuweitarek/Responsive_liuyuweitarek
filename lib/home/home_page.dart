import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:portfolio/home/components/appbar_slogan.dart';
import 'package:portfolio/theme.dart';
import 'package:portfolio/home/components/appbar.dart';

class HomePage extends StatefulWidget {
  static const String route = '/';

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late ScrollController _scrollController;
  double _scrollPosition = 0;
  double _opacity = 0;
  Map<String, GlobalKey> anchorSectionPoints = {};

  _scrollListener() {
    setState(() {
      _scrollPosition = _scrollController.position.pixels;
    });
  }

  @override
  void initState() {
    _scrollController = ScrollController();
    _scrollController.addListener(_scrollListener);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    Size _size = MediaQuery.of(context).size;

    _opacity = _scrollPosition < _size.height * 0.20
        ? _scrollPosition / (_size.height * 0.20)
        : 1;

    return SafeArea(
        child: Scaffold(
            backgroundColor: Theme.of(context).backgroundColor,
            appBar: PreferredSize(
                preferredSize: const Size.fromHeight(80.0),
                child: Container(
                    color: Theme.of(context)
                        .bottomAppBarColor
                        .withOpacity(_opacity),
                    child: AppBarSlogan())),
            body: Container()));
  }
}
