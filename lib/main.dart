import 'package:get/get.dart';
import 'package:flutter/material.dart';
import 'package:overlay_support/overlay_support.dart';
import 'package:portfolio/theme.dart';
import 'package:portfolio/home/home_page.dart';

void main() {
  runApp(const PortfolioApp());
}

class PortfolioApp extends StatelessWidget {
  const PortfolioApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return OverlaySupport.global(
        child: GetMaterialApp(
            debugShowCheckedModeBanner: false,
            title: 'Tarek Liu',
            theme: darkThemeData,
            themeMode: ThemeMode.system,
            home: HomePage()));
  }
}
