(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ProjectsBackgroundAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsBackgroundAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ProjectsBackgroundAnimation() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pageHeight, setPageHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsBackgroundAnimation.useEffect": ()=>{
            // Update page height when content changes
            const updatePageHeight = {
                "ProjectsBackgroundAnimation.useEffect.updatePageHeight": ()=>{
                    const height = Math.max(window.innerHeight, document.documentElement.scrollHeight, document.body.scrollHeight);
                    setPageHeight(height);
                }
            }["ProjectsBackgroundAnimation.useEffect.updatePageHeight"];
            updatePageHeight();
            window.addEventListener("resize", updatePageHeight);
            window.addEventListener("scroll", updatePageHeight);
            // Use MutationObserver to detect content changes
            const observer = new MutationObserver(updatePageHeight);
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true
            });
            return ({
                "ProjectsBackgroundAnimation.useEffect": ()=>{
                    window.removeEventListener("resize", updatePageHeight);
                    window.removeEventListener("scroll", updatePageHeight);
                    observer.disconnect();
                }
            })["ProjectsBackgroundAnimation.useEffect"];
        }
    }["ProjectsBackgroundAnimation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsBackgroundAnimation.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas || pageHeight === 0) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            // Set canvas size to cover entire page
            let canvasWidth = window.innerWidth;
            let canvasHeight = Math.max(window.innerHeight, document.documentElement.scrollHeight, document.body.scrollHeight, pageHeight);
            const resizeCanvas = {
                "ProjectsBackgroundAnimation.useEffect.resizeCanvas": ()=>{
                    const oldHeight = canvasHeight;
                    canvasWidth = window.innerWidth;
                    canvasHeight = Math.max(window.innerHeight, document.documentElement.scrollHeight, document.body.scrollHeight, pageHeight);
                    canvas.width = canvasWidth;
                    canvas.height = canvasHeight;
                    // If height changed significantly, reinitialize
                    if (Math.abs(canvasHeight - oldHeight) > 100) {
                        initializeElements();
                    }
                }
            }["ProjectsBackgroundAnimation.useEffect.resizeCanvas"];
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            window.addEventListener("resize", resizeCanvas);
            // Circuit board style nodes
            class CircuitNode {
                x;
                y;
                radius;
                pulsePhase;
                pulseSpeed;
                constructor(canvasWidth, canvasHeight){
                    this.x = Math.random() * canvasWidth;
                    this.y = Math.random() * canvasHeight;
                    this.radius = Math.random() * 3 + 2;
                    this.pulsePhase = Math.random() * Math.PI * 2;
                    this.pulseSpeed = Math.random() * 0.02 + 0.01;
                }
                update() {
                    this.pulsePhase += this.pulseSpeed;
                }
                draw() {
                    if (!ctx) return;
                    const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${0.2 * pulse})`;
                    ctx.fill();
                    // Outer glow
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * pulse})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
            // Circuit paths (connecting lines)
            class CircuitPath {
                node1;
                node2;
                distance;
                dataFlow;
                flowSpeed;
                constructor(n1, n2){
                    this.node1 = n1;
                    this.node2 = n2;
                    this.distance = Math.sqrt(Math.pow(n1.x - n2.x, 2) + Math.pow(n1.y - n2.y, 2));
                    this.dataFlow = Math.random();
                    this.flowSpeed = Math.random() * 0.02 + 0.01;
                }
                update() {
                    this.distance = Math.sqrt(Math.pow(this.node1.x - this.node2.x, 2) + Math.pow(this.node1.y - this.node2.y, 2));
                    this.dataFlow += this.flowSpeed;
                    if (this.dataFlow > 1) this.dataFlow = 0;
                }
                draw() {
                    if (!ctx || this.distance > 250) return;
                    const opacity = (1 - this.distance / 250) * 0.2;
                    // Draw main path
                    ctx.beginPath();
                    ctx.moveTo(this.node1.x, this.node1.y);
                    ctx.lineTo(this.node2.x, this.node2.y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                    // Draw data flow along path
                    if (this.distance > 50) {
                        const flowX = this.node1.x + (this.node2.x - this.node1.x) * this.dataFlow;
                        const flowY = this.node1.y + (this.node2.y - this.node1.y) * this.dataFlow;
                        ctx.beginPath();
                        ctx.arc(flowX, flowY, 2, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 2})`;
                        ctx.fill();
                    }
                }
            }
            // Hexagonal grid pattern
            const hexSize = 40;
            let hexOffsetX = 0;
            let hexOffsetY = 0;
            const drawHexGrid = {
                "ProjectsBackgroundAnimation.useEffect.drawHexGrid": ()=>{
                    if (!ctx) return;
                    ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
                    ctx.lineWidth = 0.5;
                    const hexHeight = hexSize * Math.sqrt(3);
                    const startX = hexOffsetX % (hexSize * 1.5);
                    const startY = hexOffsetY % hexHeight;
                    for(let y = startY - hexHeight; y < canvasHeight + hexHeight; y += hexHeight){
                        for(let x = startX - hexSize; x < canvasWidth + hexSize; x += hexSize * 1.5){
                            ctx.beginPath();
                            for(let i = 0; i < 6; i++){
                                const angle = Math.PI / 3 * i;
                                const hx = x + hexSize * Math.cos(angle);
                                const hy = y + hexSize * Math.sin(angle);
                                if (i === 0) {
                                    ctx.moveTo(hx, hy);
                                } else {
                                    ctx.lineTo(hx, hy);
                                }
                            }
                            ctx.closePath();
                            ctx.stroke();
                        }
                    }
                    hexOffsetX += 0.1;
                    hexOffsetY += 0.1;
                }
            }["ProjectsBackgroundAnimation.useEffect.drawHexGrid"];
            // Radial waves
            class RadialWave {
                x;
                y;
                radius;
                maxRadius;
                opacity;
                speed;
                constructor(){
                    this.x = Math.random() * canvasWidth;
                    this.y = Math.random() * canvasHeight;
                    this.radius = 0;
                    this.maxRadius = Math.random() * 200 + 100;
                    this.opacity = 0.3;
                    this.speed = Math.random() * 0.5 + 0.3;
                }
                update() {
                    this.radius += this.speed;
                    this.opacity = Math.max(0, this.opacity - 0.01);
                    if (this.radius > this.maxRadius || this.opacity <= 0) {
                        this.x = Math.random() * canvasWidth;
                        this.y = Math.random() * canvasHeight;
                        this.radius = 0;
                        this.opacity = 0.3;
                    }
                }
                draw() {
                    if (!ctx) return;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
            // Initialize elements
            const getNodeCount = {
                "ProjectsBackgroundAnimation.useEffect.getNodeCount": ()=>Math.max(60, Math.floor(canvasWidth * canvasHeight / 18000))
            }["ProjectsBackgroundAnimation.useEffect.getNodeCount"];
            let nodes = [];
            const paths = [];
            const waves = [];
            const initializeElements = {
                "ProjectsBackgroundAnimation.useEffect.initializeElements": ()=>{
                    const nodeCount = getNodeCount();
                    nodes = [];
                    for(let i = 0; i < nodeCount; i++){
                        nodes.push(new CircuitNode(canvasWidth, canvasHeight));
                    }
                    // Create paths between nearby nodes
                    paths.length = 0;
                    for(let i = 0; i < nodes.length; i++){
                        for(let j = i + 1; j < nodes.length; j++){
                            const dist = Math.sqrt(Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2));
                            if (dist < 250) {
                                paths.push(new CircuitPath(nodes[i], nodes[j]));
                            }
                        }
                    }
                    // Initialize waves
                    waves.length = 0;
                    for(let i = 0; i < 8; i++){
                        waves.push(new RadialWave());
                    }
                }
            }["ProjectsBackgroundAnimation.useEffect.initializeElements"];
            initializeElements();
            // Animation loop
            let animationFrameId;
            const animate = {
                "ProjectsBackgroundAnimation.useEffect.animate": ()=>{
                    // Clear with fade
                    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // Draw hex grid
                    drawHexGrid();
                    // Update and draw waves
                    waves.forEach({
                        "ProjectsBackgroundAnimation.useEffect.animate": (wave)=>{
                            wave.update();
                            wave.draw();
                        }
                    }["ProjectsBackgroundAnimation.useEffect.animate"]);
                    // Update and draw nodes
                    nodes.forEach({
                        "ProjectsBackgroundAnimation.useEffect.animate": (node)=>{
                            node.update();
                            node.draw();
                        }
                    }["ProjectsBackgroundAnimation.useEffect.animate"]);
                    // Update and draw paths
                    paths.forEach({
                        "ProjectsBackgroundAnimation.useEffect.animate": (path)=>{
                            path.update();
                            path.draw();
                        }
                    }["ProjectsBackgroundAnimation.useEffect.animate"]);
                    animationFrameId = requestAnimationFrame(animate);
                }
            }["ProjectsBackgroundAnimation.useEffect.animate"];
            animate();
            // Cleanup
            return ({
                "ProjectsBackgroundAnimation.useEffect": ()=>{
                    window.removeEventListener("resize", resizeCanvas);
                    cancelAnimationFrame(animationFrameId);
                }
            })["ProjectsBackgroundAnimation.useEffect"];
        }
    }["ProjectsBackgroundAnimation.useEffect"], [
        pageHeight
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed top-0 left-0 pointer-events-none z-0",
        style: {
            background: "transparent",
            width: "100%",
            height: pageHeight > 0 ? `${pageHeight}px` : "100vh",
            minHeight: "100vh"
        }
    }, void 0, false, {
        fileName: "[project]/components/ProjectsBackgroundAnimation.tsx",
        lineNumber: 317,
        columnNumber: 5
    }, this);
}
_s(ProjectsBackgroundAnimation, "iz0aWdzP11fG8knEiuTGqceo3iM=");
_c = ProjectsBackgroundAnimation;
var _c;
__turbopack_context__.k.register(_c, "ProjectsBackgroundAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_ProjectsBackgroundAnimation_tsx_c6a33872._.js.map