import 'dart:ui';

import 'package:flutter/material.dart';

var lightThemeData = ThemeData(
    bottomAppBarColor: Colors.blueGrey[900],
    iconTheme: IconThemeData(color: Colors.blueGrey),
    brightness: Brightness.light,
    primarySwatch: Colors.blueGrey,
    backgroundColor: Colors.white,
    cardColor: Colors.blueGrey[50],
    primaryTextTheme: TextTheme(
      button: TextStyle(
        color: Colors.blueGrey,
        decorationColor: Colors.blueGrey[300],
      ),
      subtitle1: TextStyle(
        color: Colors.black,
      ),
      subtitle2: TextStyle(
        color: Colors.blueGrey[900],
      ),
      headline1: TextStyle(color: Colors.blueGrey[800]),
      headline2: TextStyle(
        fontWeight: FontWeight.bold,
        color: Colors.black,
      ),
      headline3: TextStyle(
        fontWeight: FontWeight.bold,
        color: Colors.black,
      ),
      headline5: TextStyle(
          fontWeight: FontWeight.bold, height: 1.5, color: Colors.black),
      headline6: TextStyle(
          fontSize: 14,
          fontWeight: FontWeight.w400,
          color: Color.fromARGB(255, 2, 53, 53)),
      bodyText1: TextStyle(color: Color(0xFF707070)),
    ));

var darkThemeData = ThemeData(
  textTheme: TextTheme(),
  bottomAppBarColor: Colors.black,
  iconTheme: IconThemeData(color: Colors.blueGrey[200]),
  brightness: Brightness.dark,
  primarySwatch: Colors.blueGrey,
  backgroundColor: Colors.blueGrey[900],
  cardColor: Colors.blueGrey[900],
  primaryTextTheme: TextTheme(
    button: TextStyle(
      color: Colors.blueGrey[200],
      decorationColor: Colors.blueGrey[50],
    ),
    subtitle1: TextStyle(
      color: Colors.blueGrey[300],
    ),
    subtitle2: TextStyle(
      color: Colors.white,
    ),
    headline1: TextStyle(
      color: Colors.white70,
    ),
    headline2: TextStyle(
      fontWeight: FontWeight.bold,
      color: Colors.white,
    ),
    headline3: TextStyle(
      fontWeight: FontWeight.bold,
      color: Colors.white,
    ),
    headline5: TextStyle(
        fontWeight: FontWeight.bold,
        height: 1.5,
        color: Color.fromARGB(255, 152, 253, 221)),
    headline6: TextStyle(
        fontSize: 14,
        fontWeight: FontWeight.w300,
        color: Color.fromARGB(255, 161, 200, 251)),
    bodyText1: TextStyle(
      color: Colors.white,
    ),
  ),
);
