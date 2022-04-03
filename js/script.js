// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the speed in kilometers.
 */
function calculate () {
  // input
  const distance = parseFloat(document.getElementById('distance-traveled').value)
  const time = parseFloat(document.getElementById('time-traveled').value)

  // process
  const speed = (distance / time) 

  // output
  document.getElementById('speed').innerHTML = 'The Speed youre travelling is: ' + speed + ' km/h'.toFixed(2)
}
