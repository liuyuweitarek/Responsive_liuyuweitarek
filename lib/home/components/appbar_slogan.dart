import 'package:flutter/material.dart';

InkWell AppBarSlogon(BuildContext context) {
  return InkWell(
    onTap: () {
      final snackBar = SnackBar(
        content: const Text('Scroll to the anchor point not implemented'),
      );
      ScaffoldMessenger.of(context).showSnackBar(snackBar);
    },
    child: Text("LAPSY",
        style: TextStyle(
            color: Colors.blueGrey[300],
            fontSize: 20,
            fontWeight: FontWeight.w400,
            fontFamily: "Montserrat",
            letterSpacing: 3)),
  );
}
