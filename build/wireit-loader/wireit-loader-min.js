YUI().use(function(e){var t={groups:{wireit:{base:"wireit/src/",combine:!1,modules:{"arrow-wire":{requires:["wire-base"]},"bezier-wire":{requires:["wire-base"]},"bidirectional-arrow-wire":{requires:["wire-base"]},container:{requires:["container-base","widget-icons"],skinnable:!0},"container-base":{requires:["overlay","widget-parent","widget-child","dd","resize","terminal","wires-delegate"]},"form-container":{requires:["container","inputex-wirable-fields"],skinnable:!0},"image-container":{requires:["container"],skinnable:!0},"inout-container":{requires:["container"]},"inputex-wirable":{requires:["terminal","inputex-field"]},"inputex-wirable-fields":{requires:["inputex-wirable","inputex-group","inputex-string","inputex-list"]},layer:{requires:["widget-parent","container","wires-delegate"],skinnable:"true"},"straight-wire":{requires:["wire-base"]},terminal:{requires:["terminal-base","terminal-dragedit","terminal-scissors","terminal-ddgroups"],skinnable:!0},"terminal-base":{requires:["widget","widget-child","widget-position","widget-position-align","wire-base","wires-delegate"]},"terminal-ddgroups":{requires:["terminal-dragedit"]},"terminal-dragedit":{requires:["bezier-wire","dd-drop","dd-drag","dd-proxy"]},"terminal-input":{requires:["terminal"]},"terminal-output":{requires:["terminal"]},"terminal-scissors":{requires:["overlay"],skinnable:!0},"textarea-container":{requires:["container"]},"widget-icons":{requires:[],skinnable:!0},"wire-base":{requires:["graphics"],skinnable:!0},"wireit-app":{requires:["app","handlebars","model","model-list","json","view","layer","bezier-wire","anim"]},"wires-delegate":{requires:["wire-base"]}}}}};if(typeof YUI_config=="undefined")YUI_config={groups:{}};else if(YUI_config.groups.inputex)for(var n in YUI_config.groups.inputex.modules)if(YUI_config.groups.inputex.modules.hasOwnProperty(n)){var r=YUI_config.groups.inputex.modules[n];if(r.requires){var i=r.requires.indexOf("inputex-field");i!=-1&&(r.requires[i]="inputex-wirable")}}e.mix(YUI_config.groups,t.groups)});
