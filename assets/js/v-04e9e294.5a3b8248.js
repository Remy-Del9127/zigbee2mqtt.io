"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82603],{218903:(e,n,i)=>{i.r(n),i.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-04e9e294","path":"/advanced/zigbee/04_sniff_zigbee_traffic.html","title":"Sniff Zigbee traffic","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"With CC2531","slug":"with-cc2531","link":"#with-cc2531","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"1. Flashing the CC2531 stick","slug":"_1-flashing-the-cc2531-stick","link":"#_1-flashing-the-cc2531-stick","children":[]},{"level":3,"title":"2. Installing required tools","slug":"_2-installing-required-tools","link":"#_2-installing-required-tools","children":[]},{"level":3,"title":"3. Sniffing traffic","slug":"_3-sniffing-traffic","link":"#_3-sniffing-traffic","children":[]}]},{"level":2,"title":"With HUSBZB-1 and EZSP USB sticks","slug":"with-husbzb-1-and-ezsp-usb-sticks","link":"#with-husbzb-1-and-ezsp-usb-sticks","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites-1","link":"#prerequisites-1","children":[]},{"level":3,"title":"1. Install drivers","slug":"_1-install-drivers","link":"#_1-install-drivers","children":[]},{"level":3,"title":"2. Installing required tools","slug":"_2-installing-required-tools-1","link":"#_2-installing-required-tools-1","children":[]},{"level":3,"title":"3. Sniffing traffic","slug":"_3-sniffing-traffic-1","link":"#_3-sniffing-traffic-1","children":[]}]}],"git":{"updatedTime":1709554704000},"filePathRelative":"advanced/zigbee/04_sniff_zigbee_traffic.md"}')},780847:(e,n,i)=>{i.r(n),i.d(n,{default:()=>H});var a=i(166252);const t=i.p+"assets/img/wireshark_tclink_key.a6e17a18.png",s=i.p+"assets/img/wireshark_network_key.52632d94.png",r=i.p+"assets/img/wireshark_packet.c4d91df4.png",o=(0,a.uE)('<h1 id="sniff-zigbee-traffic" tabindex="-1"><a class="header-anchor" href="#sniff-zigbee-traffic" aria-hidden="true">#</a> Sniff Zigbee traffic</h1><p>Sniffing Zigbee traffic can be handy sometimes. E.g. when you want to analyze the commands used by a device.</p><h2 id="with-cc2531" tabindex="-1"><a class="header-anchor" href="#with-cc2531" aria-hidden="true">#</a> With CC2531</h2><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h3><ul><li>Computer <ul><li>Ubuntu / Debian machine (tested with Ubuntu 18.04 / 18.10 and Debian 10)</li><li>Windows machine (tested with Windows 10)</li></ul></li><li>CC2531 stick</li></ul><h3 id="_1-flashing-the-cc2531-stick" tabindex="-1"><a class="header-anchor" href="#_1-flashing-the-cc2531-stick" aria-hidden="true">#</a> 1. Flashing the CC2531 stick</h3>',6),l=(0,a._)("h4",{id:"linux",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#linux","aria-hidden":"true"},"#"),(0,a.Uk)(" Linux")],-1),d={href:"http://www.ti.com/tool/PACKET-SNIFFER",target:"_blank",rel:"noopener noreferrer"},c=(0,a._)("strong",null,"PACKET-SNIFFER-2!",-1),u=(0,a.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">unzip</span> swrc045z.zip <span class="token parameter variable">-d</span> PACKET-SNIFFER\n7z e PACKET-SNIFFER/Setup_SmartRF_Packet_Sniffer_2.18.0.exe bin/general/firmware/sniffer_fw_cc2531.hex\n<span class="token function">sudo</span> <span class="token operator">&lt;</span>path-to<span class="token operator">&gt;</span>/cc-tool <span class="token parameter variable">-e</span> <span class="token parameter variable">-w</span> <span class="token operator">&lt;</span>path-to<span class="token operator">&gt;</span>/sniffer_fw_cc2531.hex\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="windows-and-possibly-ubuntu" tabindex="-1"><a class="header-anchor" href="#windows-and-possibly-ubuntu" aria-hidden="true">#</a> Windows (and possibly Ubuntu)</h4>',2),h={href:"https://dsr-iot.com/downloads",target:"_blank",rel:"noopener noreferrer"},p=(0,a._)("em",null,"Zigbee sniffer package rev. 2.0",-1),f=(0,a._)("code",null,"zb_sniffer_bin\\zb_sniffer_target\\CC2531 USB dongle\\zboss_sniffer.hex",-1),k=(0,a.uE)('<h3 id="_2-installing-required-tools" tabindex="-1"><a class="header-anchor" href="#_2-installing-required-tools" aria-hidden="true">#</a> 2. Installing required tools</h3><h4 id="ubuntu-debian" tabindex="-1"><a class="header-anchor" href="#ubuntu-debian" aria-hidden="true">#</a> Ubuntu / Debian</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> libusb-1.0-0-dev wireshark\n<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/homewsn/whsniff/archive/v1.3.tar.gz <span class="token operator">|</span> <span class="token function">tar</span> zx\n<span class="token builtin class-name">cd</span> whsniff-1.3\n<span class="token function">make</span>\n<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h4>',4),g={href:"https://www.wireshark.org/download.html",target:"_blank",rel:"noopener noreferrer"},b=(0,a._)("h3",{id:"_3-sniffing-traffic",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_3-sniffing-traffic","aria-hidden":"true"},"#"),(0,a.Uk)(" 3. Sniffing traffic")],-1),m=(0,a._)("code",null,"sudo whsniff -c ZIGBEE_CHANNEL_NUMBER | wireshark -k -i -",-1),w=(0,a._)("code",null,"end of file on pipe magic during open",-1),_=(0,a._)("code",null,"wireshark -k -i <( path/to/whsniff -c channel_number )",-1),v={href:"https://github.com/homewsn/whsniff#how-to-use-locally",target:"_blank",rel:"noopener noreferrer"},y=(0,a.uE)('<p>If you just want to save the sniffed data for later analysis you can run this command (compression with gzip is optional):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> whsniff <span class="token parameter variable">-c</span> ZIGBEE_CHANNEL_NUMBER <span class="token operator">|</span> <span class="token punctuation">(</span> <span class="token function">gzip</span> <span class="token parameter variable">-c</span> <span class="token operator">&gt;</span> <span class="token string">&quot;zigbee_sniff_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&quot;%FT%H%M%S&quot;</span><span class="token variable">)</span></span>.pcap&quot;</span>.gz <span class="token operator">&amp;</span> <span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For Windows run the ZBOSS executable in <code>gui\\zboss_sniffer.exe</code>, enter the path to your Wireshark executable and click on the <code>Start</code> button. For ZBOSS make sure the correct Zigbee channel is set, by default it will sniff on channel <code>0x0C (12)</code> but the default Zigbee2MQTT channel is 11 (<code>0x0B (11)</code>).</p><p>Wireshark will start and log the Zigbee messages. As these messages are encrypted we need to add 2 encryption keys. The first one is the Trust Center link key, which is the same for (almost) every Zigbee network. The second one is the network encryption key (Transport Key).</p><p>Add the Trust Center link key by going to to Edit -&gt; Preferences -&gt; Protocols -&gt; ZigBee. Set Security Level to <em>AES-128 Encryption, 32-bit Integrity Protection</em> and click on <em>Edit</em>. Click on <em>+</em> and add <code>5A:69:67:42:65:65:41:6C:6C:69:61:6E:63:65:30:39</code> with Byte Order Normal.</p>',5),U={href:"https://peeveeone.com/2016/11/breakout-breakthrough/",target:"_blank",rel:"noopener noreferrer"},S=(0,a._)("p",null,[(0,a._)("img",{src:t,alt:"Wireshark Trust Center link key"})],-1),x=(0,a._)("p",null,"Next we need to figure out the network encryption key (Transport Key). There are two ways to do this:",-1),q=(0,a.uE)("<p>By default, if you haven&#39;t changed <code>network_key</code> in your <code>configuration.yaml</code> this will be <code>01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D</code>. If you changed your <code>network_key</code>, then convert each number into its 2-digit hexadecimal value, and combine them all with <code>:</code> between. E.g. <code>[1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]</code> -&gt; <code>01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D</code>.</p><p>You can paste your network_key below to convert it. PS: Of course it gets not sent anywhere, just a local in-browser converter.</p>",2),C=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("If you don't want to translate the numbers, the network encryption key is also exposed when a device joins the network. Pair a new device to the network (or re-pair an existing one) and grab the message where the Info is "),(0,a._)("em",null,"Device Announcement...."),(0,a.Uk)(". Open the message and expand "),(0,a._)("em",null,"ZigBee Network Layer Data"),(0,a.Uk)(" -> "),(0,a._)("em",null,"ZigBee Security Header"),(0,a.Uk)(".")])],-1),E=(0,a._)("p",null,[(0,a._)("img",{src:s,alt:"Wireshark network key"})],-1),W=(0,a._)("p",null,"Copy the key value, as shown above and go to Edit -> Preferences -> Protocols -> ZigBee -> Edit and add the key with Byte Order Normal.",-1),B=(0,a._)("p",null,"Now Wireshark is able to decrypt the messages. When e.g. turning on a light you will see a message similar to:",-1),P=(0,a._)("p",null,[(0,a._)("img",{src:r,alt:"Wireshark packet"})],-1),Z=(0,a._)("h4",{id:"troubleshooting",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#troubleshooting","aria-hidden":"true"},"#"),(0,a.Uk)(" Troubleshooting")],-1),z=(0,a._)("li",null,[(0,a.Uk)("If you get "),(0,a._)("code",null,"couldn't run /usr/bin/dumpcap in child process: permission denied"),(0,a.Uk)(" when running whsniff, check if /usr/bin/dumpcap is executable for everyone. Or "),(0,a._)("code",null,"chmod 755 /usr/bin/dumpcap"),(0,a.Uk)(".")],-1),T=(0,a._)("code",null,"modemmanager",-1),N=(0,a.uE)('<h2 id="with-husbzb-1-and-ezsp-usb-sticks" tabindex="-1"><a class="header-anchor" href="#with-husbzb-1-and-ezsp-usb-sticks" aria-hidden="true">#</a> With HUSBZB-1 and EZSP USB sticks</h2><p>If you happen to have a spare HUSBZB-1 or EZSP stick, you can also use this to sniff traffic.</p><h3 id="prerequisites-1" tabindex="-1"><a class="header-anchor" href="#prerequisites-1" aria-hidden="true">#</a> Prerequisites</h3><ul><li>Computer <ul><li>Ubuntu machine (tested with 18.10)</li><li>Windows machine (tested with Windows 10)</li></ul></li><li>HUSBZB-1 or EZSP stick</li><li>Wireshark</li><li>Java</li></ul><h3 id="_1-install-drivers" tabindex="-1"><a class="header-anchor" href="#_1-install-drivers" aria-hidden="true">#</a> 1. Install drivers</h3><h4 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h4><p>On linux systems, the HUSBZB-1 or EZSP stick should work out of the box with no modifications.</p><h4 id="windows-1" tabindex="-1"><a class="header-anchor" href="#windows-1" aria-hidden="true">#</a> Windows</h4>',8),I={href:"https://www.amazon.com/gp/customer-reviews/RSPH6UCG0N3WK/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers",target:"_blank",rel:"noopener noreferrer"},D=(0,a.uE)("<li>Extract drivers to a folder (I&#39;ll use C:\\CP210x_Windows_Drivers as an example)</li><li>Open Windows Device Manager (Win+X, M)</li><li>Right-click on &quot;Other Devices &gt; HubZ ZigBee Com Port&quot; (NOT Z-Wave) and select &quot;Update driver&quot;</li><li>Select &quot;Browse my computer for driver software&quot;</li><li>Select &quot;Let me pick from a list of available drivers on my computer&quot;</li><li>Leave &quot;Show All Devices&quot; selected and click &quot;Next&quot;</li><li>Click &quot;Have Disk&quot;</li><li>Enter the folder name where you extracted the downloaded drivers: C:\\CP210x_Windows_Drivers</li><li>Select &quot;Silicon Labs CP210x USB to UART Bridge&quot; and click &quot;Next&quot;</li><li>Windows will prompt that it cannot confirm the device ID, click &quot;Yes&quot; to proceed.</li><li>Write down the com port of the ZigBee device, something like COM5 or COM6.</li><li>You can find this by going to &quot;Ports (COM &amp; LPT)&quot; in the device manager</li>",12),F=(0,a._)("h3",{id:"_2-installing-required-tools-1",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_2-installing-required-tools-1","aria-hidden":"true"},"#"),(0,a.Uk)(" 2. Installing required tools")],-1),R={href:"https://github.com/zsmartsystems/com.zsmartsystems.zigbee.sniffer",target:"_blank",rel:"noopener noreferrer"},A=(0,a.uE)('<h4 id="ubuntu-1" tabindex="-1"><a class="header-anchor" href="#ubuntu-1" aria-hidden="true">#</a> Ubuntu</h4><p>No extra software besides <code>ZigbeeSniffer.jar</code> and Wireshark is needed. Some EZSP keys use the exact same USB identifiers as a brltty udev-registered device, so if your EZSP USB dongle is not recognized by Linux, just disable the rule of brltty for idVendor=1a86, idProduct=7523 (same as the CH340 serial converter used in the EZSP key). Edit /<code>usr/lib/udev/rules.d/85-brltty.rules</code> and comment <code># ENV{PRODUCT}==&quot;1a86/7523/*&quot;, ENV{BRLTTY_BRAILLE_DRIVER}=&quot;bm&quot;, GOTO=&quot;brltty_usb_run&quot;</code>. Unplug and replug the EZSP key.</p><h4 id="windows-2" tabindex="-1"><a class="header-anchor" href="#windows-2" aria-hidden="true">#</a> Windows</h4><p>Download and install https://nmap.org/npcap/ and make sure you select to install the &quot;Npcap Loopback Adapter&quot; when installing. It shouldn&#39;t matter whether or not you use Winpcap compatibility mode.</p><h3 id="_3-sniffing-traffic-1" tabindex="-1"><a class="header-anchor" href="#_3-sniffing-traffic-1" aria-hidden="true">#</a> 3. Sniffing traffic</h3><p>In a terminal or command line, run <code>java -jar ZigbeeSniffer.jar -baud 115200 -flow hardware -port {PORT} -c {CHANNEL}</code>. On Windows, <code>PORT</code> should be replaced by <code>COM5</code> or whatever you wrote down in step 1. On linux, <code>PORT</code> will be something like <code>/dev/ttyUSB0</code> or wherever you plugged in your HUSBZB-1 device.</p><p>Once you have the application running, you should see it connect to and start sniffing traffic on the network.</p><p>After that, open up Wireshark and start capturing on the loopback adapter.</p><p>Then, apply a filter <code>udp port 17754</code> in order to filter down to only Zigbee traffic.</p><p>Lastly, follow the steps of the CC2531 instructions above to set up your encryption keys the same.</p>',10),L={},H=(0,i(983744).Z)(L,[["render",function(e,n){const i=(0,a.up)("RouterLink"),t=(0,a.up)("ExternalLinkIcon"),s=(0,a.up)("NetworkKeyConverter");return(0,a.wg)(),(0,a.iD)("div",null,[o,(0,a._)("p",null,[(0,a.Uk)("The CC2531 needs to be flashed with a sniffer firmware. Flash the firmware using the instructions from "),(0,a.Wm)(i,{to:"/guide/adapters/flashing/flashing_the_cc2531.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Flashing the CC2531")])),_:1}),(0,a.Uk)(".")]),l,(0,a._)("p",null,[(0,a.Uk)("The firmware is included with "),(0,a._)("a",d,[(0,a.Uk)("PACKET-SNIFFER"),(0,a.Wm)(t)]),(0,a.Uk)(" (not "),c,(0,a.Uk)("). Download PACKET-SNIFFER. As the sniffer firmware is only available in the windows installer we need to extract the hex file. This would require 7zip (p7zip-full or p7zip-plugins package depending on distro)")]),u,(0,a._)("p",null,[(0,a.Uk)("For Windows this firmware is included with "),(0,a._)("a",h,[(0,a.Uk)("ZBOSS"),(0,a.Wm)(t)]),(0,a.Uk)(". Register an account and download "),p,(0,a.Uk)(". Included in the ZIP file is the firmware in subfolder "),f,(0,a.Uk)(". Please note that ZBOSS is also available for Ubuntu 64-bit.")]),k,(0,a._)("p",null,[(0,a.Uk)("Download and install the latest version of "),(0,a._)("a",g,[(0,a.Uk)("Wireshark"),(0,a.Wm)(t)]),(0,a.Uk)(". ZBOSS itself is portable and won't need to be installed.")]),b,(0,a._)("p",null,[(0,a.Uk)("On Ubuntu / Debian start wireshark with "),m,(0,a.Uk)(". "),(0,a._)("em",null,[(0,a.Uk)("Note: Depending on your distro and installed packages, this may result in a broken pipe after some time. You will notice that Wireshark has stopped capturing, and attmpeting to resume by clicking the shark fin icon will present you with an error "),w,(0,a.Uk)(", if this happens you may need to start with "),_,(0,a.Uk)(" instead. Alternative uses are detailed on the "),(0,a._)("a",v,[(0,a.Uk)("whsniff project page"),(0,a.Wm)(t)]),(0,a.Uk)(".")])]),y,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Uk)("NOTE: The Hue bridge uses a "),(0,a._)("a",U,[(0,a.Uk)("different Trust Center link key"),(0,a.Wm)(t)])])]),S,x,(0,a._)("ol",null,[(0,a._)("li",null,[q,(0,a.Wm)(s)]),C]),E,W,B,P,Z,(0,a._)("ul",null,[z,(0,a._)("li",null,[(0,a.Uk)("You may need to remove "),T,(0,a.Uk)(" as this has been known to cause issues. "),(0,a.Wm)(i,{to:"/guide/faq/#modemmanager-is-installed"},{default:(0,a.w5)((()=>[(0,a.Uk)("Howto")])),_:1})])]),N,(0,a._)("p",null,[(0,a.Uk)("Found on "),(0,a._)("a",I,[(0,a.Uk)("https://www.amazon.com/gp/customer-reviews/RSPH6UCG0N3WK/"),(0,a.Wm)(t)])]),(0,a._)("ol",null,[(0,a._)("li",null,[(0,a.Uk)("Download Silicon Labs "),(0,a._)("a",O,[(0,a.Uk)("CP210x drivers"),(0,a.Wm)(t)])]),D]),F,(0,a._)("p",null,[(0,a.Uk)("Both Windows and Ubuntu use the same program for sniffing. You can fetch a precompiled jar file from the release section of the "),(0,a._)("a",R,[(0,a.Uk)("ZSmart Systems sniffer"),(0,a.Wm)(t)]),(0,a.Uk)(".")]),A])}]])}}]);