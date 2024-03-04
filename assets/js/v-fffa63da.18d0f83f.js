"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[23707],{545400:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s=JSON.parse('{"key":"v-fffa63da","path":"/guide/configuration/more-config-options.html","title":"More configuration options","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"excerpt":"","headers":[{"level":2,"title":"Network map","slug":"network-map","link":"#network-map","children":[]},{"level":2,"title":"External converters","slug":"external-converters","link":"#external-converters","children":[]}],"git":{"updatedTime":1709554704000},"filePathRelative":"guide/configuration/more-config-options.md"}')},780476:(n,e,a)=>{a.r(e),a.d(e,{default:()=>k});var s=a(166252);const t=(0,s.uE)('<h1 id="more-configuration-options" tabindex="-1"><a class="header-anchor" href="#more-configuration-options" aria-hidden="true">#</a> More configuration options</h1><h2 id="network-map" tabindex="-1"><a class="header-anchor" href="#network-map" aria-hidden="true">#</a> Network map</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Optional: networkmap options</span>\n<span class="token key atrule">map_options</span><span class="token punctuation">:</span>\n  <span class="token key atrule">graphviz</span><span class="token punctuation">:</span>\n    <span class="token comment"># Optional: Colors to be used in the graphviz network map (default: shown below)</span>\n    <span class="token key atrule">colors</span><span class="token punctuation">:</span>\n      <span class="token key atrule">fill</span><span class="token punctuation">:</span>\n        <span class="token key atrule">enddevice</span><span class="token punctuation">:</span> <span class="token string">&#39;#fff8ce&#39;</span>\n        <span class="token key atrule">coordinator</span><span class="token punctuation">:</span> <span class="token string">&#39;#e04e5d&#39;</span>\n        <span class="token key atrule">router</span><span class="token punctuation">:</span> <span class="token string">&#39;#4ea3e0&#39;</span>\n      <span class="token key atrule">font</span><span class="token punctuation">:</span>\n        <span class="token key atrule">coordinator</span><span class="token punctuation">:</span> <span class="token string">&#39;#ffffff&#39;</span>\n        <span class="token key atrule">router</span><span class="token punctuation">:</span> <span class="token string">&#39;#ffffff&#39;</span>\n        <span class="token key atrule">enddevice</span><span class="token punctuation">:</span> <span class="token string">&#39;#000000&#39;</span>\n      <span class="token key atrule">line</span><span class="token punctuation">:</span>\n        <span class="token key atrule">active</span><span class="token punctuation">:</span> <span class="token string">&#39;#009900&#39;</span>\n        <span class="token key atrule">inactive</span><span class="token punctuation">:</span> <span class="token string">&#39;#994444&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="external-converters" tabindex="-1"><a class="header-anchor" href="#external-converters" aria-hidden="true">#</a> External converters</h2>',4),o=(0,s._)("code",null,".js",-1),i=(0,s._)("code",null,"data",-1),r=(0,s._)("code",null,"devices",-1),l={href:"https://github.com/Koenkk/zigbee2mqtt.io/tree/master/docs/externalConvertersExample",target:"_blank",rel:"noopener noreferrer"},p=(0,s._)("code",null,"data",-1),c=(0,s._)("code",null,"configuration.yaml",-1),u=(0,s.uE)('<p>Note that external converters take precedence of standard converters</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">external_converters</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> freepad_ext.js\n  <span class="token punctuation">-</span> one<span class="token punctuation">-</span>more<span class="token punctuation">-</span>converter.js\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),d={},k=(0,a(983744).Z)(d,[["render",function(n,e){const a=(0,s.up)("ExternalLinkIcon"),d=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[t,(0,s._)("p",null,[(0,s.Uk)("You can define external converters to e.g. add support for a DiY device. The extension can be a file with "),o,(0,s.Uk)(" extension in the "),i,(0,s.Uk)(" directory or a NPM package. Ensure that default export from your external converter exports an array or device object (refer to the definition in the "),r,(0,s.Uk)(" folder of zigbee-herdsman-converters). Some examples can be found "),(0,s._)("a",l,[(0,s.Uk)("here"),(0,s.Wm)(a)]),(0,s.Uk)(". For this example put the files in the "),p,(0,s.Uk)(" folder and add the following to "),c,(0,s.Uk)(":")]),u,(0,s._)("p",null,[(0,s.Uk)("See also "),(0,s.Wm)(d,{to:"/advanced/support-new-devices/01_support_new_devices.html"},{default:(0,s.w5)((()=>[(0,s.Uk)("How to support new devices")])),_:1}),(0,s.Uk)(".")])])}]])}}]);