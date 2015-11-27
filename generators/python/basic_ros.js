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

goog.provide('Blockly.Python.basic_ros');
goog.require('Blockly.Python');


Blockly.Python['twist_forward'] = function(block) {
	var text_forward_secs = block.getFieldValue('FORWARD_SECS');


	var code = ""
	code += "from rosimple.ros_basic_api import *\n"
	code += "move_forward(" + text_forward_secs.toString() + ")\n"

	return code;
};

Blockly.Python['twist_backward'] = function(block) {
	var text_forward_secs = block.getFieldValue('BACKWARD_SECS');


	var code = ""
	code += "from rosimple.ros_basic_api import *\n"
	code += "move_backward(" + text_forward_secs.toString() + ")\n"

	return code;
};

Blockly.Python['twist_turn_right'] = function(block) {
	var text_forward_secs = block.getFieldValue('TURN_RIGHT_SECS');


	var code = ""
	code += "from rosimple.ros_basic_api import *\n"
	code += "move_right(" + text_forward_secs.toString() + ")\n"

	return code;
};

Blockly.Python['twist_turn_left'] = function(block) {
	var text_forward_secs = block.getFieldValue('TURN_LEFT_SECS');


	var code = ""
	code += "from rosimple.ros_basic_api import *\n"
	code += "move_left(" + text_forward_secs.toString() + ")\n"

	return code;
};

Blockly.Python['publish_string'] = function(block) {
	var text_ = block.getFieldValue('STRING');


	var code = ""
	code += "from rosimple.ros_basic_api import *\n"
	code += "publish_string('" + text_.toString() + "')\n"

	return code;
};

Blockly.Python['play_motion'] = function(block) {
  var MOTIONS = {
    'wave': ['wave', Blockly.Python.ORDER_MEMBER],
    'head_tour': ['head_tour', Blockly.Python.ORDER_MEMBER]
  };
  var motion_name = block.getFieldValue('MOTIONS');

  var code = ""
  code += "from rosimple.ros_basic_api import *\n"
  code += "publish_string('" + motion_name.toString() + "')\n"

  return code;
};