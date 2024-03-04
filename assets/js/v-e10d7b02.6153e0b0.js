"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[14218],{54253:(e,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o=JSON.parse('{"key":"v-e10d7b02","path":"/devices/ZG-205Z_A.html","title":"TuYa ZG-205Z/A control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa ZG-205Z/A control via MQTT","description":"Integrate your TuYa ZG-205Z/A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-26T06:45:18.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Large motion detection sensitivity (numeric)","slug":"large-motion-detection-sensitivity-numeric","link":"#large-motion-detection-sensitivity-numeric","children":[]},{"level":3,"title":"Large motion detection distance (numeric)","slug":"large-motion-detection-distance-numeric","link":"#large-motion-detection-distance-numeric","children":[]},{"level":3,"title":"Motion state (enum)","slug":"motion-state-enum","link":"#motion-state-enum","children":[]},{"level":3,"title":"Fading time (numeric)","slug":"fading-time-numeric","link":"#fading-time-numeric","children":[]},{"level":3,"title":"Medium motion detection distance (numeric)","slug":"medium-motion-detection-distance-numeric","link":"#medium-motion-detection-distance-numeric","children":[]},{"level":3,"title":"Medium motion detection sensitivity (numeric)","slug":"medium-motion-detection-sensitivity-numeric","link":"#medium-motion-detection-sensitivity-numeric","children":[]},{"level":3,"title":"Indicator (binary)","slug":"indicator-binary","link":"#indicator-binary","children":[]},{"level":3,"title":"Small detection distance (numeric)","slug":"small-detection-distance-numeric","link":"#small-detection-distance-numeric","children":[]},{"level":3,"title":"Small detection sensitivity (numeric)","slug":"small-detection-sensitivity-numeric","link":"#small-detection-sensitivity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1709554704000},"filePathRelative":"devices/ZG-205Z_A.md"}')},404797:(e,i,t)=>{t.r(i),t.d(i,{default:()=>_});var o=t(166252);const n=(0,o._)("h1",{id:"tuya-zg-205z-a",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#tuya-zg-205z-a","aria-hidden":"true"},"#"),(0,o.Uk)(" TuYa ZG-205Z/A")],-1),d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),a=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"ZG-205Z/A")],-1),c=(0,o._)("td",null,"Vendor",-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"5.8Ghz Human presence sensor")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"presence, illuminance, large_motion_detection_sensitivity, large_motion_detection_distance, motion_state, fading_time, medium_motion_detection_distance, medium_motion_detection_sensitivity, indicator, small_detection_distance, small_detection_sensitivity, linkquality")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZG-205Z-A.png",alt:"TuYa ZG-205Z/A"})])],-1),u=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),m=(0,o._)("h3",{id:"pairing",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,o.Uk)(" Pairing")],-1),h=(0,o._)("p",null,"To start pairing, press the button (pinhole on the side of the device) using a pin/paperclip for approx. 5 seconds. The led will turn on, then start blinking while the pairing process is in progress.",-1),p=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),v=(0,o.uE)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="large-motion-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#large-motion-detection-sensitivity-numeric" aria-hidden="true">#</a> Large motion detection sensitivity (numeric)</h3><p>Motion detection sensitivity. Value can be found in the published state on the <code>large_motion_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;large_motion_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>x</code>.</p><h3 id="large-motion-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#large-motion-detection-distance-numeric" aria-hidden="true">#</a> Large motion detection distance (numeric)</h3><p>Motion detection distance. Value can be found in the published state on the <code>large_motion_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;large_motion_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>m</code>.</p><h3 id="motion-state-enum" tabindex="-1"><a class="header-anchor" href="#motion-state-enum" aria-hidden="true">#</a> Motion state (enum)</h3><p>State of the motion. Value can be found in the published state on the <code>motion_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code>.</p><h3 id="fading-time-numeric" tabindex="-1"><a class="header-anchor" href="#fading-time-numeric" aria-hidden="true">#</a> Fading time (numeric)</h3><p>For how much time presence should stay true after detecting it. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>28800</code>. The unit of this value is <code>s</code>.</p><h3 id="medium-motion-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#medium-motion-detection-distance-numeric" aria-hidden="true">#</a> Medium motion detection distance (numeric)</h3><p>Medium motion detection distance. Value can be found in the published state on the <code>medium_motion_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;medium_motion_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>6</code>. The unit of this value is <code>m</code>.</p><h3 id="medium-motion-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#medium-motion-detection-sensitivity-numeric" aria-hidden="true">#</a> Medium motion detection sensitivity (numeric)</h3><p>Medium motion detection sensitivity. Value can be found in the published state on the <code>medium_motion_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;medium_motion_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>x</code>.</p><h3 id="indicator-binary" tabindex="-1"><a class="header-anchor" href="#indicator-binary" aria-hidden="true">#</a> Indicator (binary)</h3><p>LED Indicator. Value can be found in the published state on the <code>indicator</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> indicator is ON, if <code>OFF</code> OFF.</p><h3 id="small-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#small-detection-distance-numeric" aria-hidden="true">#</a> Small detection distance (numeric)</h3><p>Small detection distance. Value can be found in the published state on the <code>small_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;small_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>6</code>. The unit of this value is <code>m</code>.</p><h3 id="small-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#small-detection-sensitivity-numeric" aria-hidden="true">#</a> Small detection sensitivity (numeric)</h3><p>Small detection sensitivity. Value can be found in the published state on the <code>small_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;small_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>x</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',26),g={},_=(0,t(983744).Z)(g,[["render",function(e,i){const t=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),n,(0,o._)("table",null,[d,(0,o._)("tbody",null,[a,(0,o._)("tr",null,[c,(0,o._)("td",null,[(0,o.Wm)(t,{to:"/supported-devices/#v=TuYa"},{default:(0,o.w5)((()=>[(0,o.Uk)("TuYa")])),_:1})])]),s,l,r])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,m,h,(0,o.kq)(" Notes END: Do not edit below this line "),p,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),v])}]])}}]);