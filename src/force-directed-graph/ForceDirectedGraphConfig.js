const config = {
    node: {
        radius: 30,
        enlargedRadius: 50,
        labelOffsetX: 25,
        labelOffsetY: 25,
        labelFontSize: "15px",
        labelFontColor: "#FCFCFC"
    },
    link: {
        defaultStrokeWidth: 1,
        strokeColor: "#999",
        thicknessScaleFactor: 10,
        dashedThreshold: 0.3,
        dashArray: "5,5",
        linkDistance: 200
    },
    zoom: {
        scaleExtent: [0.1, 10],
        zoomFactor: 1.2,
        translation: 100
    },
    drag: {
        alphaTarget: 0.3
    },
    force: {
        chargeStrength: -1000
    },
    backgroundColor: "#212121"
};

export default config;
