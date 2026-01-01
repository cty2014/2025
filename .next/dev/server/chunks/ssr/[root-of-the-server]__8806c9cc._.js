module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
function Logo({ className = "", showText = true, size = "md", variant = "default" }) {
    const sizeClasses = {
        sm: "text-xs sm:text-sm",
        md: "text-sm sm:text-base",
        lg: "text-base sm:text-lg"
    };
    const logoSizes = {
        sm: {
            width: 32,
            height: 32,
            strokeWidth: 1.5
        },
        md: {
            width: 40,
            height: 40,
            strokeWidth: 2
        },
        lg: {
            width: 64,
            height: 64,
            strokeWidth: 2.5
        }
    };
    const currentSize = logoSizes[size];
    // Hexagon path points
    const hexagonPath = (size)=>{
        const centerX = size / 2;
        const centerY = size / 2;
        const radius = size * 0.4;
        const points = [];
        for(let i = 0; i < 6; i++){
            const angle = Math.PI / 3 * i - Math.PI / 6;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
        }
        return points.join(' ') + ' Z';
    };
    // Infinity symbol path - cleaner implementation
    const infinityPath = (size)=>{
        const centerX = size / 2;
        const centerY = size / 2;
        const radiusX = size * 0.18;
        const radiusY = size * 0.12;
        const offset = size * 0.22;
        // Create a proper infinity symbol (lemniscate) using two overlapping circles
        return `
      M ${centerX - offset} ${centerY}
      A ${radiusX} ${radiusY} 0 1 1 ${centerX - offset} ${centerY - radiusY * 1.5}
      A ${radiusX} ${radiusY} 0 0 1 ${centerX} ${centerY}
      A ${radiusX} ${radiusY} 0 0 1 ${centerX + offset} ${centerY - radiusY * 1.5}
      A ${radiusX} ${radiusY} 0 1 1 ${centerX + offset} ${centerY}
      A ${radiusX} ${radiusY} 0 1 1 ${centerX + offset} ${centerY + radiusY * 1.5}
      A ${radiusX} ${radiusY} 0 0 1 ${centerX} ${centerY}
      A ${radiusX} ${radiusY} 0 0 1 ${centerX - offset} ${centerY + radiusY * 1.5}
      A ${radiusX} ${radiusY} 0 1 1 ${centerX - offset} ${centerY}
      Z
    `;
    };
    const LogoIcon = ()=>{
        const viewBoxSize = 100;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 blur-lg opacity-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: currentSize.width,
                        height: currentSize.height,
                        viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`,
                        className: "w-full h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: hexagonPath(viewBoxSize),
                            fill: "white",
                            opacity: "0.3"
                        }, void 0, false, {
                            fileName: "[project]/components/Logo.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Logo.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: currentSize.width,
                    height: currentSize.height,
                    viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`,
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: hexagonPath(viewBoxSize),
                            fill: "none",
                            stroke: "white",
                            strokeWidth: currentSize.strokeWidth * 2.5,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]",
                            opacity: "0.95"
                        }, void 0, false, {
                            fileName: "[project]/components/Logo.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: viewBoxSize / 2,
                            y: viewBoxSize / 2,
                            textAnchor: "middle",
                            dominantBaseline: "central",
                            fill: "white",
                            className: "drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]",
                            fontSize: viewBoxSize * 0.35,
                            fontWeight: "700",
                            fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif",
                            letterSpacing: "-0.05em",
                            opacity: "0.95",
                            children: "WV"
                        }, void 0, false, {
                            fileName: "[project]/components/Logo.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Logo.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Logo.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this);
    };
    if (variant === "icon-only") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: `inline-block group ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoIcon, {}, void 0, false, {
                fileName: "[project]/components/Logo.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Logo.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: `flex flex-col items-center group ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoIcon, {}, void 0, false, {
                    fileName: "[project]/components/Logo.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Logo.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            showText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-bold ${sizeClasses[size]} tracking-wider text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]`,
                    children: "WISE VENTURE"
                }, void 0, false, {
                    fileName: "[project]/components/Logo.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Logo.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Logo.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
}),
"[project]/contexts/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const translations = {
    en: {
        // Navigation
        "nav.companies": "Companies",
        "nav.buildWithUs": "Build With Us",
        "nav.team": "Team",
        "nav.contact": "Contact",
        // Home page
        "home.hero.title": "First Believers in\nAI Native Founders",
        "home.hero.subtitle": "Zero to one capital and hands-on support for builders of AI Native applications, infrastructure, and developer tools.",
        "home.hero.description": "50% Investment Fund",
        "home.hero.bitfinex": "Bitfinex Lending",
        "home.hero.techAdvisory": " + 50% Tech Advisory",
        "home.hero.learnMore": "Learn more",
        "home.mission.title": "Our aim is to be the most important partner to the most impactful AI and infrastructure companies",
        "home.mission.link": "Our portfolio companies",
        // Projects page
        "projects.header.label": "OUR PORTFOLIO",
        "projects.header.title": "Projects",
        "projects.header.description": "Explore our innovative tech investments and advisory projects, witnessing how AI technology transforms the business world",
        "projects.stats.title": "Investment Results",
        "projects.stats.projects": "Investment Projects",
        "projects.stats.founded": "Founded",
        "projects.stats.technology": "AI Technology",
        "projects.stats.growth": "Continuous Growth",
        "projects.learnMore": "Learn More",
        // About page
        "about.header.label": "ABOUT US",
        "about.header.title": "About Us",
        "about.header.description": "Founded in 2020, we are an investment fund and tech advisory firm focused on tech startups",
        "about.investment.title": "Investment Fund Portfolio",
        "about.investment.bonds.title": "Traditional Financial Bonds",
        "about.investment.bonds.description": "We invest in high-quality traditional financial bonds, providing a stable income foundation for our portfolio through rigorous credit analysis and risk assessment. We focus on diversified fixed-income products including government bonds and corporate bonds.",
        "about.investment.crypto.title": "Cryptocurrency Lending",
        "about.investment.crypto.description": "This is our core focus area. We provide professional cryptocurrency lending services through Bitfinex, creating value for both borrowers and lenders through smart contract technology and risk management mechanisms.",
        "about.investment.crypto.platform": "Bitfinex Lending",
        "about.investment.crypto.platformDesc": "Our primary platform for crypto lending operations, offering secure and efficient lending services.",
        "about.investment.strategy.title": "Investment Strategy",
        "about.investment.strategy.1": "Diversified asset allocation balancing risk and return",
        "about.investment.strategy.2": "Strict risk management and compliance review",
        "about.investment.strategy.3": "Continuous market research and investment opportunity discovery",
        "about.investment.strategy.4": "Transparent investment reporting and performance tracking",
        "about.tech.title": "Tech Advisory",
        "about.tech.incubation.title": "Early-Stage AI Application Incubation",
        "about.tech.incubation.description": "We focus on identifying and nurturing promising AI application startups. From proof of concept to product-market fit, we provide comprehensive support including technical guidance, market strategy, and funding connections.",
        "about.tech.optimization.title": "Business Model Optimization",
        "about.tech.optimization.description": "We help tech companies optimize their business models to enhance market competitiveness and profitability. Through technology equity exchange partnerships, we establish long-term strategic partnerships with startups for mutual growth and development.",
        "about.tech.services.title": "Service Offerings",
        "about.tech.services.1": "AI technology application consulting and architecture design",
        "about.tech.services.2": "Business model optimization and market positioning strategy",
        "about.tech.services.3": "Early-stage investment and resource connections",
        "about.tech.services.4": "Technology equity partnerships and long-term strategic planning",
        "about.tech.services.5": "Team building and talent referrals",
        "about.values.title": "Our Values",
        "about.values.innovation.title": "Innovation",
        "about.values.innovation.description": "Continuously exploring possibilities in new technologies and business models",
        "about.values.trust.title": "Trust",
        "about.values.trust.description": "Building long-term stable partnerships and mutual trust",
        "about.values.growth.title": "Growth",
        "about.values.growth.description": "Growing together with partners to create long-term value",
        // Contact page
        "contact.header.label": "GET IN TOUCH",
        "contact.header.title": "Contact Us",
        "contact.header.description": "We look forward to collaborating with you to explore the infinite possibilities in tech startups",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.company": "Company",
        "contact.form.message": "Message",
        "contact.form.submit": "Send Message",
        "contact.info.title": "Contact Information",
        "contact.info.email": "Email",
        "contact.info.address": "Address",
        "contact.info.address.value": "8F, No. 42, Xuchang Street\nZhongzheng District, Taipei, Taiwan",
        // Build With Us page
        "build.header.label": "BUILD WITH US",
        "build.header.title": "Build with us",
        "build.header.description": "We partner with entrepreneurs to create the great AI companies of tomorrow. Building a startup is hard. From startup veterans and seasoned investors, to machine learning experts and talent leaders, our team is ready to fill in the gaps around your expertise. We are here to support you so your company succeeds.",
        "build.cta": "Let's Build Together",
        "build.process.title": "A Proven Process for Building Companies",
        "build.process.step1.title": "Business Idea Validation",
        "build.process.step1.description": "Our team of startup builders performs market and technical validation on the idea.",
        "build.process.step2.title": "Recruit Future CEO (Founder in Residence) and Board Member (Venture Advisor)",
        "build.process.step2.description": "Next, we bring on a seasoned entrepreneur with domain expertise as a Founder in Residence (they will be the CEO upon launch) and pair them with an AI Fund Builder and Venture Advisor (who will be a future board member after launch).",
        "build.process.step3.title": "Build with Founder in Residence",
        "build.process.step3.description": "Founders in Residence spend three months with us developing the idea and iterating rapidly to de-risk the new business through in-depth business analysis and customer research. Technical validation includes AI model selection and product prototyping. The Founder in Residence collaborates very closely on this with our in-house builders, the Venture Advisor, and our ML engineering team to structure a go-to-market strategy and product proof of concept.",
        "build.process.step4.title": "Pre-Seed Launch",
        "build.process.step4.description": "If the Build stage is successful, we stand the company up with a pre-seed investment of up to $1 million. Our recruiting team will help assemble your core team (including co-founder matchmaking if needed) and the building team will support you in getting early customer traction, building the product, and preparing for seed financing.",
        "build.process.step5.title": "Seed, Growth, and Scale",
        "build.process.step5.description": "As a good co-founder, we will be working alongside you. We support you as you grow with ongoing business strategy and the leverage that comes from a deep and vibrant ecosystem.",
        "build.why.title": "Why Partner with AI Fund?",
        "build.why.p1": "We've been there. We've founded and scaled successful companies ourselves, and we know that creating meaningful startups is really hard. Instead of spending years plodding away on an idea, validate it quickly in our Founder in Residence program.",
        "build.why.p2": "We shorten a process that can take years down to months. We make sure you are going after the right market, are fully validated, and are surrounded by great teammates. Lastly, we make sure you see the world through the lens of a data scientist and machine learning expert, which is the perspective any meaningful AI company in the future must have. But, we also know that the process is not about us. It's about great founders and empowering them to do impactful things.",
        "build.why.p3": "Partnering with a venture studio to launch your company is a force multiplier. Founders in our studio program leverage lower barriers to entry, financial support, and higher levels of operational involvement to springboard great companies.",
        "build.faq.title": "FAQ",
        "build.faq.q1.title": "What is a venture studio?",
        "build.faq.q1.p1": "A venture studio differs from a typical venture capital firm, in that it focuses on building companies from the ground up, rather than investing in already growing companies.",
        "build.faq.q1.p2": "At AI Fund, we source ideas from within our organization, our network of industry and academic partners, and entrepreneurs like yourself. We will validate your idea together through our Founder in Residence program and support you in turning your idea into a venture-backable business—including recruiting your team, developing the product proof of concept, and acquiring first customers.",
        "build.faq.q1.p3": "We are more than simply investors. As a venture studio, we are co-founders with you.",
        "build.faq.q2.title": "Is there a deadline for applications?",
        "build.faq.q2.p1": "We want to partner with entrepreneurs who want to make a difference in the world using AI. If you have an idea, but haven't built the product yet, then it's the perfect time to reach out to us. If you want to build something but don't have a company idea yet, check our careers page for open Founder-in-Residence roles.",
        "build.faq.q3.title": "How much capital does AI Fund invest in pre-seed companies?",
        "build.faq.q3.p1": "We prefer to be the first institutional money in a company and we invest up to $1 million in a convertible note to found the company.",
        "build.faq.q4.title": "What is the difference between a Founder in Residence and a Venture Advisor?",
        "build.faq.q4.p1": "A Founder in Residence is a full time, paid role that transitions into CEO of the new company when it launches as a pre-seed funded company. A Venture Advisor is typically a successful entrepreneur whom AI Fund has engaged to counsel the Founder in Residence. When the company launches, the Venture Advisor holds AI Fund's board seat.",
        "build.faq.q5.title": "What kind of support does AI Fund offer Founders in Residence?",
        "build.faq.q5.p1": "We surround each new startup with a team of specialists with expertise around ML engineering and data science, talent and recruiting, fundraising, product development, corporate partnerships, and more.",
        "build.together.title": "Let's Work Together",
        "build.together.subtitle": "Ready to build something great?",
        "build.together.founders": "For Founders",
        "build.together.partners": "For Partners"
    },
    zh: {
        // Navigation
        "nav.companies": "專案案例",
        "nav.buildWithUs": "與我們合作",
        "nav.team": "關於我們",
        "nav.contact": "聯絡我們",
        // Home page
        "home.hero.title": "AI 原生創辦人的\n首批支持者",
        "home.hero.subtitle": "為 AI 原生應用、基礎設施和開發者工具的建設者提供從零到一的資金和實質支持。",
        "home.hero.description": "50% 投資基金",
        "home.hero.bitfinex": "Bitfinex 借貸",
        "home.hero.techAdvisory": " + 50% 技術顧問",
        "home.hero.learnMore": "了解更多",
        "home.mission.title": "我們的目標是成為最具影響力的 AI 和基礎設施公司最重要的合作夥伴",
        "home.mission.link": "我們的投資組合公司",
        // Projects page
        "projects.header.label": "我們的投資組合",
        "projects.header.title": "專案",
        "projects.header.description": "探索我們的創新科技投資和顧問專案，見證 AI 技術如何改變商業世界",
        "projects.stats.title": "投資成果",
        "projects.stats.projects": "投資專案",
        "projects.stats.founded": "成立年份",
        "projects.stats.technology": "AI 技術",
        "projects.stats.growth": "持續成長",
        "projects.learnMore": "了解更多",
        // About page
        "about.header.label": "關於我們",
        "about.header.title": "關於我們",
        "about.header.description": "成立於 2020 年，我們是一家專注於科技新創的投資基金和技術顧問公司",
        "about.investment.title": "投資基金組合",
        "about.investment.bonds.title": "傳統金融債券",
        "about.investment.bonds.description": "我們投資高品質的傳統金融債券，透過嚴格的信用分析和風險評估，為我們的投資組合提供穩定的收入基礎。我們專注於多元化的固定收益產品，包括政府債券和公司債券。",
        "about.investment.crypto.title": "加密貨幣借貸",
        "about.investment.crypto.description": "這是我們的核心重點領域。我們透過 Bitfinex 提供專業的加密貨幣借貸服務，透過智能合約技術和風險管理機制為借款人和貸款人創造價值。",
        "about.investment.crypto.platform": "Bitfinex 借貸",
        "about.investment.crypto.platformDesc": "我們進行加密貨幣借貸業務的主要平台，提供安全高效的借貸服務。",
        "about.investment.strategy.title": "投資策略",
        "about.investment.strategy.1": "平衡風險與回報的多元化資產配置",
        "about.investment.strategy.2": "嚴格的風險管理和合規審查",
        "about.investment.strategy.3": "持續的市場研究和投資機會發現",
        "about.investment.strategy.4": "透明的投資報告和績效追蹤",
        "about.tech.title": "技術顧問",
        "about.tech.incubation.title": "早期 AI 應用孵化",
        "about.tech.incubation.description": "我們專注於識別和培育有前景的 AI 應用新創公司。從概念驗證到產品市場契合，我們提供全面的支持，包括技術指導、市場策略和資金連接。",
        "about.tech.optimization.title": "商業模式優化",
        "about.tech.optimization.description": "我們幫助科技公司優化其商業模式，以提高市場競爭力和盈利能力。透過技術股權交換合作夥伴關係，我們與新創公司建立長期戰略合作夥伴關係，實現共同成長和發展。",
        "about.tech.services.title": "服務項目",
        "about.tech.services.1": "AI 技術應用諮詢和架構設計",
        "about.tech.services.2": "商業模式優化和市場定位策略",
        "about.tech.services.3": "早期投資和資源連接",
        "about.tech.services.4": "技術股權合作夥伴關係和長期戰略規劃",
        "about.tech.services.5": "團隊建設和人才推薦",
        "about.values.title": "我們的價值觀",
        "about.values.innovation.title": "創新",
        "about.values.innovation.description": "持續探索新技術和商業模式的可能性",
        "about.values.trust.title": "信任",
        "about.values.trust.description": "建立長期穩定的合作夥伴關係和相互信任",
        "about.values.growth.title": "成長",
        "about.values.growth.description": "與合作夥伴共同成長，創造長期價值",
        // Contact page
        "contact.header.label": "聯絡我們",
        "contact.header.title": "聯絡我們",
        "contact.header.description": "我們期待與您合作，探索科技新創的無限可能",
        "contact.form.name": "姓名",
        "contact.form.email": "電子郵件",
        "contact.form.company": "公司",
        "contact.form.message": "訊息",
        "contact.form.submit": "發送訊息",
        "contact.info.title": "聯絡資訊",
        "contact.info.email": "電子郵件",
        "contact.info.address": "地址",
        "contact.info.address.value": "8F, No. 42, Xuchang Street\n中正區, 台北, 台灣",
        // Build With Us page
        "build.header.label": "與我們合作",
        "build.header.title": "與我們合作",
        "build.header.description": "我們與企業家合作，創造未來的偉大 AI 公司。創辦新創公司很困難。從新創資深人士和經驗豐富的投資者，到機器學習專家和人才領導者，我們的團隊隨時準備填補您專業領域的空白。我們在這裡支持您，讓您的公司成功。",
        "build.cta": "讓我們一起建設",
        "build.process.title": "經過驗證的公司建設流程",
        "build.process.step1.title": "商業想法驗證",
        "build.process.step1.description": "我們的新創建設團隊對想法進行市場和技術驗證。",
        "build.process.step2.title": "招募未來 CEO（駐場創辦人）和董事會成員（風險顧問）",
        "build.process.step2.description": "接下來，我們聘請一位具有領域專業知識的資深企業家作為駐場創辦人（他們將在啟動時擔任 CEO），並將他們與 AI Fund 建設者和風險顧問（將在啟動後成為未來的董事會成員）配對。",
        "build.process.step3.title": "與駐場創辦人一起建設",
        "build.process.step3.description": "駐場創辦人與我們一起度過三個月，開發想法並快速迭代，透過深入的業務分析和客戶研究來降低新業務的風險。技術驗證包括 AI 模型選擇和產品原型設計。駐場創辦人與我們的內部建設者、風險顧問和 ML 工程團隊密切合作，構建上市策略和產品概念驗證。",
        "build.process.step4.title": "種子前啟動",
        "build.process.step4.description": "如果建設階段成功，我們將以高達 100 萬美元的種子前投資成立公司。我們的招聘團隊將幫助組建您的核心團隊（包括聯合創辦人配對，如果需要），建設團隊將支持您獲得早期客戶吸引力、建設產品並準備種子融資。",
        "build.process.step5.title": "種子、成長和擴展",
        "build.process.step5.description": "作為優秀的聯合創辦人，我們將與您並肩工作。我們在您成長過程中提供持續的業務策略支持，以及來自深度和充滿活力的生態系統的槓桿作用。",
        "build.why.title": "為什麼要與 AI Fund 合作？",
        "build.why.p1": "我們經歷過。我們自己創辦並擴展了成功的公司，我們知道創建有意義的新創公司真的很困難。與其花費數年時間在一個想法上緩慢前進，不如在我們的駐場創辦人計劃中快速驗證它。",
        "build.why.p2": "我們將可能需要數年的過程縮短到數月。我們確保您瞄準正確的市場，完全驗證，並被優秀的團隊成員包圍。最後，我們確保您透過數據科學家和機器學習專家的視角看待世界，這是任何有意義的 AI 公司在未來都必須具備的視角。但是，我們也知道這個過程不是關於我們。這是關於優秀的創辦人並賦予他們做有影響力的事情的能力。",
        "build.why.p3": "與風險工作室合作啟動您的公司是一個力量倍增器。我們工作室計劃中的創辦人利用較低的進入門檻、財務支持和更高水平的運營參與來啟動偉大的公司。",
        "build.faq.title": "常見問題",
        "build.faq.q1.title": "什麼是風險工作室？",
        "build.faq.q1.p1": "風險工作室與典型的風險投資公司不同，它專注於從零開始建設公司，而不是投資已經成長的公司。",
        "build.faq.q1.p2": "在 AI Fund，我們從我們的組織內部、我們的行業和學術合作夥伴網絡以及像您這樣的企業家那裡獲取想法。我們將透過我們的駐場創辦人計劃一起驗證您的想法，並支持您將想法轉變為可獲得風險投資的業務——包括招募您的團隊、開發產品概念驗證和獲得第一批客戶。",
        "build.faq.q1.p3": "我們不僅僅是投資者。作為風險工作室，我們是您的聯合創辦人。",
        "build.faq.q2.title": "申請有截止日期嗎？",
        "build.faq.q2.p1": "我們希望與想要使用 AI 改變世界的企業家合作。如果您有一個想法，但還沒有建立產品，那麼現在是聯繫我們的完美時機。如果您想建立一些東西但還沒有公司想法，請查看我們的職業頁面以了解開放的駐場創辦人職位。",
        "build.faq.q3.title": "AI Fund 在種子前公司投資多少資金？",
        "build.faq.q3.p1": "我們希望成為公司的第一筆機構資金，我們以可轉換票據的形式投資高達 100 萬美元來成立公司。",
        "build.faq.q4.title": "駐場創辦人和風險顧問有什麼區別？",
        "build.faq.q4.p1": "駐場創辦人是一個全職、有薪的職位，當公司作為種子前資助公司啟動時，會轉變為新公司的 CEO。風險顧問通常是 AI Fund 聘請來為駐場創辦人提供諮詢的成功企業家。當公司啟動時，風險顧問持有 AI Fund 的董事會席位。",
        "build.faq.q5.title": "AI Fund 為駐場創辦人提供什麼樣的支持？",
        "build.faq.q5.p1": "我們為每個新創公司配備一個專家團隊，在 ML 工程和數據科學、人才和招聘、籌資、產品開發、企業合作夥伴關係等方面具有專業知識。",
        "build.together.title": "讓我們一起工作",
        "build.together.subtitle": "準備建立一些偉大的東西嗎？",
        "build.together.founders": "給創辦人",
        "build.together.partners": "給合作夥伴"
    }
};
function LanguageProvider({ children }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load language from localStorage or default to English
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage === "en" || savedLanguage === "zh") {
            setLanguage(savedLanguage);
        }
    }, []);
    const toggleLanguage = ()=>{
        const newLanguage = language === "en" ? "zh" : "en";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            toggleLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/LanguageContext.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
}),
"[project]/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Navigation() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { language, toggleLanguage, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const navItems = [
        {
            href: "/projects",
            labelKey: "nav.companies"
        },
        {
            href: "/build-with-us",
            labelKey: "nav.buildWithUs"
        },
        {
            href: "/about",
            labelKey: "nav.team"
        },
        {
            href: "/contact",
            labelKey: "nav.contact"
        }
    ];
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = ()=>{
        setIsMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-black sticky top-0 z-50 border-b border-white/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16 sm:h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: closeMobileMenu,
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    size: "md",
                                    showText: false,
                                    variant: "icon-only"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-3 text-base sm:text-lg font-medium tracking-wide text-white",
                                    children: "Wise Venture"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-6 lg:space-x-8",
                            children: [
                                navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: `text-sm lg:text-base font-medium transition-colors ${pathname === item.href ? "text-white" : "text-white/60 hover:text-white"}`,
                                        children: t(item.labelKey)
                                    }, item.href, false, {
                                        fileName: "[project]/components/Navigation.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleLanguage,
                                    className: "text-sm lg:text-base font-medium text-white/60 hover:text-white transition-colors px-3 py-1 border border-white/10 hover:border-white/20 rounded-none",
                                    "aria-label": "Toggle language",
                                    children: language === "en" ? "中文" : "EN"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleMobileMenu,
                                className: "text-white/70 hover:text-white transition-colors p-2",
                                "aria-label": "Toggle menu",
                                children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navigation.tsx",
                                        lineNumber: 72,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navigation.tsx",
                                        lineNumber: 76,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navigation.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden border-t border-white/5 bg-black",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-4 space-y-1",
                        children: [
                            navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: closeMobileMenu,
                                    className: `block py-3 text-base font-medium transition-colors ${pathname === item.href ? "text-white" : "text-white/60 hover:text-white"}`,
                                    children: t(item.labelKey)
                                }, item.href, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    toggleLanguage();
                                    closeMobileMenu();
                                },
                                className: "block w-full text-left py-3 text-base font-medium text-white/60 hover:text-white transition-colors border-t border-white/5 mt-2 pt-3",
                                "aria-label": "Toggle language",
                                children: language === "en" ? "中文" : "English"
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navigation.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navigation.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navigation.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8806c9cc._.js.map