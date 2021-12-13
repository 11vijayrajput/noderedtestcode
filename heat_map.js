[
    {
        "id": "484a93a2f518105f",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "2e442781.0c5608",
        "type": "ui_group",
        "name": "Default",
        "tab": "4779176.99cd2e8",
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "4779176.99cd2e8",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    },
    {
        "id": "948d15ed.a58878",
        "type": "function",
        "z": "484a93a2f518105f",
        "name": "Generate random matrix",
        "func": "// Generate some random data\n// See https://www.patrick-wied.at/static/heatmapjs/example-minimal-config.html\nvar len = 200;\n\nmsg.payload = [];\n\nwhile (len--) {\n  var value = Math.floor(Math.random()*100);\n  msg.payload.push(value);\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 510,
        "y": 240,
        "wires": [
            [
                "a9e0a477.fdca68",
                "c48772d7dd66fd5d"
            ]
        ]
    },
    {
        "id": "cac56ba6.c46e18",
        "type": "inject",
        "z": "484a93a2f518105f",
        "name": "Show heatmap",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "1",
        "payloadType": "num",
        "x": 280,
        "y": 240,
        "wires": [
            [
                "948d15ed.a58878"
            ]
        ]
    },
    {
        "id": "a9e0a477.fdca68",
        "type": "ui_heat_map",
        "z": "484a93a2f518105f",
        "group": "[somegroup]Heatmap",
        "order": 0,
        "width": "6",
        "height": "5",
        "name": "",
        "rows": "5",
        "columns": "6",
        "minMax": true,
        "minimumValue": 0,
        "maximumValue": 0,
        "backgroundType": "image",
        "backgroundColor": "#ffffff",
        "image": "request",
        "radius": 40,
        "opacity": "1",
        "blur": "1",
        "showValues": false,
        "gridType": "keys",
        "valuesDecimals": 0,
        "showLegend": false,
        "legendType": "vals",
        "legendDecimals": 0,
        "legendCount": 2,
        "x": 730,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "c48772d7dd66fd5d",
        "type": "debug",
        "z": "484a93a2f518105f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 720,
        "y": 360,
        "wires": []
    }
]