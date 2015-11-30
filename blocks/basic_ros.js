/**
 * @license
 *
 * Copyright 2015 PAL Robotics
 * http://pal-robotics.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for Basic ROS publications.
 * @author sam.pfeiffer@pal-robotics.com (Sammy Pfeiffer)
 */
'use strict';

goog.provide('Blockly.Blocks.basic_ros');
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.basic_ros.HUE = 13;


Blockly.Blocks['twist_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go forward")
        .appendField(new Blockly.FieldTextInput("2"), "FORWARD_SECS")
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.basic_ros.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://pal-robotics.com/');
  }
};

Blockly.Blocks['twist_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go backwards")
        .appendField(new Blockly.FieldTextInput("3"), "BACKWARD_SECS")
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.basic_ros.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://pal-robotics.com/');
  }
};


Blockly.Blocks['twist_turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn right")
        .appendField(new Blockly.FieldTextInput("1"), "TURN_RIGHT_SECS")
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.basic_ros.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://pal-robotics.com/');
  }
};


Blockly.Blocks['twist_turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn left")
        .appendField(new Blockly.FieldTextInput("1"), "TURN_LEFT_SECS")
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.basic_ros.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://pal-robotics.com/');
  }
};


Blockly.Blocks['publish_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Publish string")
        .appendField(new Blockly.FieldTextInput("hello world"), "STRING");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.basic_ros.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://pal-robotics.com/');
  }
};

Blockly.Blocks['play_motion'] = {
  init: function() {
    var MOTIONS =
        [['wave', 'wave'],
         ['head_tour', 'head_tour']];
    this.setHelpUrl('http://pal-robotics.com/');
    this.setColour(Blockly.Blocks.basic_ros.HUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // this.setOutput(true, 'Number');
    this.appendDummyInput()
        .appendField("Do motion ")
        .appendField(new Blockly.FieldDropdown(MOTIONS), 'MOTIONS');
    this.setTooltip('');
  }
};

