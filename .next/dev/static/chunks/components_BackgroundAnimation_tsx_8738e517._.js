(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/BackgroundAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BackgroundAnimation() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pageHeight, setPageHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundAnimation.useEffect": ()=>{
            // Update page height when content changes
            const updatePageHeight = {
                "BackgroundAnimation.useEffect.updatePageHeight": ()=>{
                    const height = Math.max(window.innerHeight, document.documentElement.scrollHeight, document.body.scrollHeight);
                    setPageHeight(height);
                }
            }["BackgroundAnimation.useEffect.updatePageHeight"];
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
                "BackgroundAnimation.useEffect": ()=>{
                    window.removeEventListener("resize", updatePageHeight);
                    window.removeEventListener("scroll", updatePageHeight);
                    observer.disconnect();
                }
            })["BackgroundAnimation.useEffect"];
        }
    }["BackgroundAnimation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundAnimation.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas || pageHeight === 0) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            // Set canvas size to cover entire page
            let canvasWidth = window.innerWidth;
            let canvasHeight = Math.max(window.innerHeight, document.documentElement.scrollHeight, document.body.scrollHeight, pageHeight);
            const resizeCanvas = {
                "BackgroundAnimation.useEffect.resizeCanvas": ()=>{
                    const oldHeight = canvasHeight;
                    canvasWidth = window.innerWidth;
                    canvasHeight = Math.max(window.innerHeight, document.documentElement.scrollHeight, document.body.scrollHeight, pageHeight);
                    canvas.width = canvasWidth;
                    canvas.height = canvasHeight;
                    // Update canvas size for all particles and data streams
                    particles.forEach({
                        "BackgroundAnimation.useEffect.resizeCanvas": (particle)=>{
                            particle.updateCanvasSize(canvasWidth, canvasHeight);
                        }
                    }["BackgroundAnimation.useEffect.resizeCanvas"]);
                    dataStreams.forEach({
                        "BackgroundAnimation.useEffect.resizeCanvas": (stream)=>{
                            stream.updateCanvasSize(canvasWidth, canvasHeight);
                        }
                    }["BackgroundAnimation.useEffect.resizeCanvas"]);
                    // If height changed significantly, reinitialize particles
                    if (Math.abs(canvasHeight - oldHeight) > 100) {
                        initializeParticles();
                    }
                }
            }["BackgroundAnimation.useEffect.resizeCanvas"];
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            window.addEventListener("resize", resizeCanvas);
            // Particle system
            class Particle {
                x;
                y;
                vx;
                vy;
                radius;
                opacity;
                targetOpacity;
                canvasWidth;
                canvasHeight;
                constructor(canvasWidth, canvasHeight){
                    this.x = Math.random() * canvasWidth;
                    this.y = Math.random() * canvasHeight;
                    this.vx = (Math.random() - 0.5) * 0.5;
                    this.vy = (Math.random() - 0.5) * 0.5;
                    this.radius = Math.random() * 1.5 + 0.5;
                    this.opacity = Math.random() * 0.3 + 0.1;
                    this.targetOpacity = this.opacity;
                    this.canvasWidth = canvasWidth;
                    this.canvasHeight = canvasHeight;
                }
                update() {
                    this.x += this.vx;
                    this.y += this.vy;
                    // Wrap around edges
                    if (this.x < 0) this.x = this.canvasWidth;
                    if (this.x > this.canvasWidth) this.x = 0;
                    if (this.y < 0) this.y = this.canvasHeight;
                    if (this.y > this.canvasHeight) this.y = 0;
                    // Fade in/out effect
                    this.opacity += (this.targetOpacity - this.opacity) * 0.02;
                    if (Math.random() < 0.005) {
                        this.targetOpacity = Math.random() * 0.3 + 0.1;
                    }
                }
                updateCanvasSize(width, height) {
                    this.canvasWidth = width;
                    this.canvasHeight = height;
                }
                draw() {
                    if (!ctx) return;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                    ctx.fill();
                }
            }
            // Connection lines
            class Connection {
                particle1;
                particle2;
                distance;
                opacity;
                constructor(p1, p2){
                    this.particle1 = p1;
                    this.particle2 = p2;
                    this.distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
                    this.opacity = 0;
                }
                update() {
                    this.distance = Math.sqrt(Math.pow(this.particle1.x - this.particle2.x, 2) + Math.pow(this.particle1.y - this.particle2.y, 2));
                    const maxDistance = 200;
                    if (this.distance < maxDistance) {
                        this.opacity = (1 - this.distance / maxDistance) * 0.15;
                    } else {
                        this.opacity = 0;
                    }
                }
                draw() {
                    if (!ctx || this.opacity === 0) return;
                    ctx.beginPath();
                    ctx.moveTo(this.particle1.x, this.particle1.y);
                    ctx.lineTo(this.particle2.x, this.particle2.y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
            // Grid system for tech feel
            const gridSize = 50;
            let gridOffsetX = 0;
            let gridOffsetY = 0;
            // Create particles distributed across entire canvas
            const getParticleCount = {
                "BackgroundAnimation.useEffect.getParticleCount": ()=>Math.max(80, Math.floor(canvasWidth * canvasHeight / 15000))
            }["BackgroundAnimation.useEffect.getParticleCount"];
            let particles = [];
            const connections = [];
            const initializeParticles = {
                "BackgroundAnimation.useEffect.initializeParticles": ()=>{
                    const particleCount = getParticleCount();
                    particles = [];
                    for(let i = 0; i < particleCount; i++){
                        particles.push(new Particle(canvasWidth, canvasHeight));
                    }
                    // Recreate connections
                    connections.length = 0;
                    for(let i = 0; i < particles.length; i++){
                        for(let j = i + 1; j < particles.length; j++){
                            connections.push(new Connection(particles[i], particles[j]));
                        }
                    }
                }
            }["BackgroundAnimation.useEffect.initializeParticles"];
            initializeParticles();
            // Draw animated grid
            const drawGrid = {
                "BackgroundAnimation.useEffect.drawGrid": ()=>{
                    if (!ctx) return;
                    ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
                    ctx.lineWidth = 0.5;
                    // Vertical lines
                    for(let x = gridOffsetX % gridSize; x < canvasWidth; x += gridSize){
                        ctx.beginPath();
                        ctx.moveTo(x, 0);
                        ctx.lineTo(x, canvasHeight);
                        ctx.stroke();
                    }
                    // Horizontal lines
                    for(let y = gridOffsetY % gridSize; y < canvasHeight; y += gridSize){
                        ctx.beginPath();
                        ctx.moveTo(0, y);
                        ctx.lineTo(canvasWidth, y);
                        ctx.stroke();
                    }
                    // Animate grid
                    gridOffsetX += 0.2;
                    gridOffsetY += 0.2;
                }
            }["BackgroundAnimation.useEffect.drawGrid"];
            // Draw scan lines effect
            let scanLineY = 0;
            const drawScanLines = {
                "BackgroundAnimation.useEffect.drawScanLines": ()=>{
                    if (!ctx) return;
                    const gradient = ctx.createLinearGradient(0, scanLineY - 100, 0, scanLineY + 100);
                    gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
                    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.02)");
                    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, scanLineY - 100, canvasWidth, 200);
                    scanLineY += 1;
                    if (scanLineY > canvasHeight + 100) {
                        scanLineY = -100;
                    }
                }
            }["BackgroundAnimation.useEffect.drawScanLines"];
            // Data stream particles (moving dots for tech feel) - Optimized for large count
            class DataStream {
                x;
                y;
                speed;
                size;
                opacity;
                canvasWidth;
                canvasHeight;
                constructor(width, height){
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.speed = Math.random() * 1.5 + 0.5;
                    this.size = Math.random() * 0.8 + 0.3; // Smaller size for better performance
                    this.opacity = Math.random() * 0.2 + 0.05; // Lower opacity for density
                    this.canvasWidth = width;
                    this.canvasHeight = height;
                }
                update() {
                    this.y += this.speed;
                    if (this.y > this.canvasHeight + 10) {
                        this.y = -10;
                        this.x = Math.random() * this.canvasWidth;
                    }
                }
                updateCanvasSize(width, height) {
                    this.canvasWidth = width;
                    this.canvasHeight = height;
                }
                draw() {
                    if (!ctx) return;
                    // Use fillRect for better performance with many particles
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                    ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
                }
            }
            const dataStreams = [];
            const streamCount = 500;
            // Initialize particles
            for(let i = 0; i < streamCount; i++){
                dataStreams.push(new DataStream(canvasWidth, canvasHeight));
            }
            // Animation loop
            let animationFrameId;
            const animate = {
                "BackgroundAnimation.useEffect.animate": ()=>{
                    // Clear with slight fade for trail effect
                    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
                    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                    // Draw grid
                    drawGrid();
                    // Draw scan lines
                    drawScanLines();
                    // Update and draw data streams - optimized batch rendering
                    // Only render particles that are visible on screen
                    const viewportMargin = 100;
                    const visibleStreams = dataStreams.filter({
                        "BackgroundAnimation.useEffect.animate.visibleStreams": (stream)=>{
                            return stream.y >= -viewportMargin && stream.y <= canvasHeight + viewportMargin;
                        }
                    }["BackgroundAnimation.useEffect.animate.visibleStreams"]);
                    // Update all streams
                    dataStreams.forEach({
                        "BackgroundAnimation.useEffect.animate": (stream)=>{
                            stream.update();
                        }
                    }["BackgroundAnimation.useEffect.animate"]);
                    // Only draw visible streams for performance
                    visibleStreams.forEach({
                        "BackgroundAnimation.useEffect.animate": (stream)=>{
                            stream.draw();
                        }
                    }["BackgroundAnimation.useEffect.animate"]);
                    // Update and draw particles
                    particles.forEach({
                        "BackgroundAnimation.useEffect.animate": (particle)=>{
                            particle.update();
                            particle.draw();
                        }
                    }["BackgroundAnimation.useEffect.animate"]);
                    // Update and draw connections
                    connections.forEach({
                        "BackgroundAnimation.useEffect.animate": (connection)=>{
                            connection.update();
                            connection.draw();
                        }
                    }["BackgroundAnimation.useEffect.animate"]);
                    animationFrameId = requestAnimationFrame(animate);
                }
            }["BackgroundAnimation.useEffect.animate"];
            animate();
            // Cleanup
            return ({
                "BackgroundAnimation.useEffect": ()=>{
                    window.removeEventListener("resize", resizeCanvas);
                    cancelAnimationFrame(animationFrameId);
                }
            })["BackgroundAnimation.useEffect"];
        }
    }["BackgroundAnimation.useEffect"], [
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
        fileName: "[project]/components/BackgroundAnimation.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
}
_s(BackgroundAnimation, "iz0aWdzP11fG8knEiuTGqceo3iM=");
_c = BackgroundAnimation;
var _c;
__turbopack_context__.k.register(_c, "BackgroundAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_BackgroundAnimation_tsx_8738e517._.js.map