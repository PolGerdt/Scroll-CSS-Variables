document.addEventListener("DOMContentLoaded", () => {
    let params = [
        { elId: "s1", startScroll: -100, varName: "tx", outputFunc: (sy) => 0.6 * sy, units: "px" },
        { elId: "s2", startScroll: -400, varName: "sc", outputFunc: (sy) => 1.0 + 0.005 * sy, units: "" },
        { elId: "s3", startScroll: -600, varName: "ro", outputFunc: (sy) => 0.1 * sy, units: "deg" },
        { elId: "s3", startScroll: -600, varName: "tx", outputFunc: (sy) => 0.5 * sy, units: "px" }
    ];
    setScrollVariables(params);
});