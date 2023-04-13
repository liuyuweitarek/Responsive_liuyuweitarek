import 'package:flutter/material.dart';

class AppBarSlogan extends StatefulWidget {
  const AppBarSlogan({Key? key}) : super(key: key);

  @override
  State<AppBarSlogan> createState() => _AppBarSloganState();
}

class _AppBarSloganState extends State<AppBarSlogan> {
  final List _isHovering = [false, false, false, false];
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Padding(
        padding: EdgeInsets.all(20.0),
        child: Row(children: [
          InkWell(
              onTap: () {},
              child: Text("LAPSY",
                  style: TextStyle(
                      color: Colors.blueGrey[300],
                      fontSize: 20,
                      fontWeight: FontWeight.w400,
                      fontFamily: "Montserrat",
                      letterSpacing: 3))),
          Expanded(
              child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [
            SizedBox(width: size.width / 8),
            InkWell(
                onHover: (value) {
                  setState(() {
                    value ? _isHovering[0] = true : _isHovering[0] = false;
                  });
                },
                child: Column(mainAxisSize: MainAxisSize.min, children: [
                  Text("About",
                      style: TextStyle(
                          letterSpacing: 2,
                          fontSize: 18,
                          fontFamily: 'Montserrat',
                          color: _isHovering[0]
                              ? Color.fromARGB(255, 55, 250, 250)
                              : Colors.white)),
                  SizedBox(height: 5),
                  Visibility(
                      maintainAnimation: true,
                      maintainState: true,
                      maintainSize: true,
                      visible: _isHovering[0],
                      child: Container(
                          height: 2,
                          width: 20,
                          color: Color.fromARGB(255, 55, 250, 250)))
                ]))
          ]))
        ]));
  }
}
