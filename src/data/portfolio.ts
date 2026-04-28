export type WorkMode = "remote" | "hybrid" | "on-site";

export type PortfolioLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  mode: WorkMode;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  products?: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  coursework: string[];
};

export type AchievementItem = {
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
  evidence?: PortfolioLink[];
};

export type ProductItem = {
  name: string;
  role?: string;
  status?: string;
  tagline?: string;
  description: string;
  detailedDescription?: string;
  architecture?: {
    label: string;
    value: string;
  }[];
  featureGroups?: {
    title: string;
    items: string[];
  }[];
  outcomes?: string[];
  highlights: string[];
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  storeLinks?: PortfolioLink[];
  privacyNote?: string;
  links?: PortfolioLink[];
  media?: PortfolioLink[];
};

export type CertificateItem = {
  title: string;
  issuer: string;
  date?: string;
  description?: string;
  credentialUrl?: string;
  scanPath?: string;
};

export type PortfolioProfile = {
  person: {
    name: string;
    headline: string;
    location: string;
    email: string;
    image: string;
    summary: string;
    availability: string[];
    links: PortfolioLink[];
  };
  metrics: {
    label: string;
    value: string;
    detail?: string;
  }[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  products: ProductItem[];
  achievements: AchievementItem[];
  certificates: CertificateItem[];
};

export const portfolioProfile: PortfolioProfile = {
  person: {
    name: "Mergen Taganov",
    headline: "Flutter Developer | Cross-Platform Mobile",
    location: "Ashgabat, Turkmenistan",
    email: "mergentaganow@gmail.com",
    image: "/profile/mergen-taganov.jpg",
    summary:
      "Flutter Developer with 5+ years of experience delivering high-quality cross-platform mobile applications for Android and iOS. Published 10+ applications on Google Play Store and Apple App Store, including apps with 10K+ downloads. Specialized in scalable, performance-optimized Flutter applications with clean architecture, robust state management, real-time systems, and device-connected experiences.",
    availability: [
      "Open to challenging Flutter opportunities",
      "Interested in scalable architecture, real-time systems, and device-connected applications",
      "Open to remote roles and relocation opportunities",
    ],
    links: [
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/mergen",
      },
      {
        label: "GitHub",
        href: "https://github.com/MergenTaganow",
      },
      {
        label: "Email",
        href: "mailto:mergentaganow@gmail.com",
      },
    ],
  },
  metrics: [
    {
      label: "Experience",
      value: "5+ years",
      detail: "Cross-platform mobile development",
    },
    {
      label: "Published Apps",
      value: "10+",
      detail: "Google Play Store and Apple App Store",
    },
    {
      label: "Downloads",
      value: "10K+",
      detail: "Across published applications",
    },
    {
      label: "Operational Impact",
      value: "7x",
      detail: "Productivity improvement at Timar",
    },
  ],
  experience: [
    {
      company: "Meninki",
      role: "Founding Flutter Engineer",
      location: "Turkmenistan",
      mode: "hybrid",
      startDate: "2025",
      endDate: "Present",
      summary:
        "Owns end-to-end mobile development for a product-driven short-video marketplace platform where every video is attached to a marketplace product.",
      highlights: [
        "Building a TikTok-style reels experience with commercial product context, keeping content directly tied to marketplace intent.",
        "Architecting a high-performance vertical video feed with seamless infinite scroll, optimized caching, and smooth playback across iOS and Android.",
        "Building real-time engagement systems including reactions, comments, and interaction tracking.",
        "Contributing to AI-driven personalization mechanisms that analyze user behavior and recommend relevant product-based reels.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Video playback",
        "Caching",
        "Real-time engagement",
        "AI personalization",
        "iOS",
        "Android",
      ],
      products: ["Meninki short-video marketplace"],
    },
    {
      company: "Timar",
      role: "Flutter Engineer / Team Lead",
      location: "Turkmenistan",
      mode: "on-site",
      startDate: "2022",
      endDate: "2025",
      summary:
        "Led and contributed to a suite of actively used mobile applications, combining hands-on Flutter development with team coordination and product delivery.",
      highlights: [
        "Oversaw 6 actively used and continuously updated applications on Google Play Store and Apple App Store.",
        "Mentored and coordinated the development team while contributing to architecture, feature prioritization, and delivery timelines.",
        "Improved productivity by 7x, helping management teams plan and supervise executor tasks more efficiently.",
        "Helped save 32% of daily operational time through workflow improvements.",
        "Implemented AI-powered task insights and analytics for monitoring workflows, identifying bottlenecks, and supporting data-driven decisions.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Team leadership",
        "Mobile architecture",
        "AI analytics",
        "App Store",
        "Google Play",
      ],
      products: ["Timar mobile application suite"],
    },
    {
      company: "Arcalyk",
      role: "Flutter Developer",
      location: "Turkmenistan",
      mode: "on-site",
      startDate: "2021",
      endDate: "2022",
      summary:
        "Contributed to core mobile app features, API integration, UI development, performance improvements, and stability work.",
      highlights: [
        "Assisted in building core app features including data handling, API connections, and basic user interfaces.",
        "Participated in performance improvements and bug fixes as user load increased.",
        "Supported integration of content discovery features with a focus on smooth mobile responsiveness.",
      ],
      technologies: ["Flutter", "Dart", "API integration", "Mobile UI", "Performance optimization"],
    },
  ],
  education: [
    {
      institution: "International University for the Humanities and Development",
      degree: "Bachelor's degree, Computer Science",
      location: "Turkmenistan",
      startDate: "2021",
      endDate: "2026",
      coursework: [
        "Data Structures",
        "Algorithms",
        "Databases",
        "Statistics",
        "Cybersecurity",
        "Calculus",
      ],
    },
  ],
  skills: [
    {
      title: "Programming Languages",
      items: ["Dart", "C++", "Java", "Kotlin", "Swift", "Objective-C"],
    },
    {
      title: "Flutter & Mobile",
      items: [
        "Flutter",
        "Riverpod",
        "Bloc",
        "Provider",
        "GetX",
        "Cupertino Widgets",
        "Material Widgets",
        "VideoPlayer",
        "PhotoView",
        "flutter_cube",
        "WebView",
      ],
    },
    {
      title: "Backend, Data & Storage",
      items: [
        "Firebase Firestore",
        "Realtime Database",
        "SQLite",
        "Hive",
        "SharedPreferences",
        "LocalStorage",
        "Realm",
        "ObjectBox",
        "Socket.IO",
        "Google Maps",
      ],
    },
    {
      title: "AI & Analytics",
      items: [
        "AI-driven personalization",
        "Recommendation engines",
        "User behavior tracking",
        "Analytics dashboards",
        "Firebase Analytics",
        "ML Kit",
        "OpenAI APIs",
      ],
    },
    {
      title: "Release, Monitoring & DevOps",
      items: [
        "App Store release pipelines",
        "Play Store release pipelines",
        "Codemagic",
        "GitHub Actions",
        "Fastlane",
        "App signing",
        "Provisioning",
        "Firebase Crashlytics",
        "Sentry",
      ],
    },
    {
      title: "Tools",
      items: [
        "Git",
        "Android Studio",
        "Xcode",
        "Postman",
        "Figma",
        "Zeplin",
        "Video optimization",
        "Image optimization",
      ],
    },
  ],
  products: [
    {
      name: "Meninki",
      role: "Founding Flutter Engineer",
      status: "Uploading",
      tagline: "Social commerce and marketplace platform combining shopping, stores, product reels, ads, basket, orders, and seller workflows.",
      description:
        "Reels-based marketplace where every short video is attached to a marketplace product, combining entertainment-style discovery with commercial intent.",
      detailedDescription:
        "Meninki is a full-featured social commerce and marketplace mobile application that combines online shopping, store management, short-form product videos, advertisements, and order processing in one unified platform. It serves both regular customers and sellers, with product discovery through feeds and reels, rich media workflows, multilingual product data, real-time notifications, advanced filtering, and integrated basket/order flows.",
      architecture: [
        { label: "Framework", value: "Flutter cross-platform mobile" },
        { label: "State Management", value: "BLoC and Cubit architecture" },
        { label: "Dependency Injection", value: "GetIt service locator" },
        { label: "Networking", value: "Dio REST APIs with JWT refresh and retry" },
        { label: "Video Playback", value: "BetterPlayer with HLS streaming, caching, and buffering control" },
        { label: "Notifications", value: "Firebase Messaging with local notification routing" },
        { label: "Deep Links", value: "App Links to reels, products, stores, and profiles" },
        { label: "Localization", value: "Turkmen, Russian, and English content/interface support" },
      ],
      featureGroups: [
        {
          title: "Marketplace & Store Management",
          items: [
            "Store creation and editing with profile image, contacts, address, descriptions, and custom colors",
            "Public/private store details, store-specific product listings, search, filtering, favorites, and seller navigation",
            "Seller-side order management and market banner support",
          ],
        },
        {
          title: "Product Management",
          items: [
            "Product creation/editing with categories, subcategories, brands, covers, galleries, and multilingual content",
            "Attribute and parameter management with variation/composition generation, such as size and color combinations",
            "Inventory input for generated product compositions, product feeds, favorites, watch tracking, and detailed pages",
          ],
        },
        {
          title: "Reels & Social Commerce Feed",
          items: [
            "TikTok-style vertical product reel viewer with HLS streaming, caching, buffering, and custom interactions",
            "Product-linked reels with likes, comments, reposts, watcher tracking, search, sorting, filtering, pagination, and market grouping",
            "Reel creation with video upload, store/account publishing selection, media processing polling, and deep links",
          ],
        },
        {
          title: "Basket & Order System",
          items: [
            "Add/remove products by composition, quantity updates, basket clearing, and prepared basket flow",
            "Order creation, customer order history, seller order management, and order detail pages",
          ],
        },
        {
          title: "Ads & Promotions",
          items: [
            "Advertisement creation, public ad listings, ad details, my ads management, favorites, filtering, and search",
            "Banner integration across home and marketplace sections",
          ],
        },
        {
          title: "Interactions & Communication",
          items: [
            "Comment system for reels with bottom-sheet interactions and notification/reference loading",
            "Like/favorite systems for reels, products, stores, and ads, plus repost support and public profiles",
            "Notification center with unread count and appeal/report creation for different content types",
          ],
        },
        {
          title: "File Uploading & Downloading",
          items: [
            "Multi-file uploads for galleries, single cover uploads, video upload, progress tracking, retry, and removal",
            "Server-side media processing status tracking and background downloads with isolate callbacks",
            "Download completion scanning into the device media library",
          ],
        },
        {
          title: "Advanced UX & Platform Features",
          items: [
            "Infinite scrolling and pagination across products, reels, stores, ads, and banners",
            "Skeleton loading, pull-to-refresh, masonry reel discovery, horizontal product/store sections, and reusable image handling",
            "Centralized sort/filter Cubits for province, region, category, brand, key-value, and price filtering",
          ],
        },
      ],
      outcomes: [
        "Built a complete social commerce platform from a single Flutter codebase.",
        "Combined marketplace, catalog, reels, ads, basket, orders, seller tools, notifications, and deep links in one app.",
        "Implemented complex media workflows covering upload, processing, playback, caching, downloads, and retry behavior.",
        "Supported localized commerce with Turkmen, Russian, and English content for a regional marketplace audience.",
        "Enabled sellers to manage stores, products, variations, and orders from mobile.",
      ],
      highlights: [
        "Vertical infinite video feed",
        "Product-attached reels",
        "Optimized video caching and playback",
        "Real-time reactions and comments",
        "Store, product, ads, basket, orders, downloads, notifications, and deep linking",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "BLoC",
        "Cubit",
        "GetIt",
        "Dio",
        "REST APIs",
        "JWT Authentication",
        "Firebase Messaging",
        "Local Notifications",
        "BetterPlayer",
        "HLS Video Streaming",
        "Flutter Downloader",
        "SharedPreferences",
        "App Links",
        "File Picker",
        "Image Cropper",
        "Cached Network Images",
        "Skeletonizer",
        "Flutter SVG",
        "Localization",
        "Deep Linking",
        "Background Isolates",
        "Media Uploading",
        "Marketplace Architecture",
      ],
      metrics: [
        { label: "Domain", value: "Social commerce" },
        { label: "Audience", value: "Customers & sellers" },
        { label: "Status", value: "Uploading to stores" },
      ],
      githubUrl: "https://github.com/MergenTaganow/meninki",
      privacyNote: "Store links will be added after the app finishes publishing.",
      media: [
        {
          label: "Product screenshots",
          href: "/products/meninki/",
        },
      ],
    },
    {
      name: "TimixHR",
      role: "Flutter Engineer / Team Lead",
      status: "Built at Timar",
      tagline: "Comprehensive HR operations platform for employee management, tasks, recruitment, analytics, and communication.",
      description:
        "Comprehensive human resources management system for enterprise employee operations, planning, and internal workflows.",
      detailedDescription:
        "TimixHR is a full-featured HR management mobile application built to streamline how businesses handle human resources operations. It brings employee management, task coordination, recruitment, document workflows, performance tracking, and communication into one cross-platform mobile experience.",
      architecture: [
        { label: "Framework", value: "Flutter cross-platform mobile" },
        { label: "State Management", value: "BLoC pattern" },
        { label: "Backend", value: "REST APIs with real-time notifications" },
        { label: "Local Storage", value: "Hive for offline functionality" },
        { label: "Authentication", value: "JWT-based secure authentication" },
        { label: "Languages", value: "8-language multilingual support" },
      ],
      featureGroups: [
        {
          title: "Employee Management",
          items: [
            "Complete employee profiles with detailed information",
            "Company, department, division, and group structure management",
            "Employee transfers, assets, skills, education, and KPI tracking",
          ],
        },
        {
          title: "Task & Project Management",
          items: [
            "Task creation, assignment, priority organization, and status tracking",
            "Collaborative task comments, updates, urgent notifications, and alerts",
          ],
        },
        {
          title: "Document Management",
          items: [
            "Secure document storage, upload, filtering, and categorized access",
            "Permission-aware document access with offline availability",
          ],
        },
        {
          title: "Recruitment & Hiring",
          items: [
            "Vacancy creation, candidate tracking, interview notes, and offer workflows",
            "Recruitment source tracking and salary negotiation support",
          ],
        },
        {
          title: "Performance Analytics",
          items: [
            "KPI dashboard for departments and individual employees",
            "Task completion analytics, responsibility tracking, and visual reports",
          ],
        },
        {
          title: "Communication Hub",
          items: [
            "Real-time chat, push notifications, file sharing, and voice messages",
            "Centralized notification management for operational updates",
          ],
        },
        {
          title: "Advanced Mobile Features",
          items: [
            "QR authentication, offline mode with synchronization, and themes",
            "Voice recording, camera capture, file download, and offline access",
          ],
        },
      ],
      outcomes: [
        "Built with clean architecture principles for long-term maintainability and scale.",
        "Designed an interface usable by both technical and non-technical employees.",
        "Improved HR efficiency by reducing repetitive administrative overhead.",
        "Enabled better data-driven decisions through analytics and KPI reporting.",
      ],
      highlights: [
        "Employee and HR workflow management",
        "Mobile-first enterprise operations",
        "Designed for internal teams and managers",
      ],
      technologies: ["Flutter", "Dart", "Enterprise mobile", "HR systems"],
      metrics: [
        { label: "Domain", value: "Human resources" },
        { label: "Audience", value: "Enterprise teams" },
        { label: "Platform", value: "Mobile" },
      ],
      storeLinks: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=timar_hr.biz&pcampaignid=web_share",
        },
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/timix-hr/id6470371339",
        },
      ],
      privacyNote: "GitHub repository is hidden for company privacy.",
      media: [
        {
          label: "Product screenshots",
          href: "/products/timixhr/",
        },
      ],
    },
    {
      name: "Timar",
      role: "Flutter Engineer / Team Lead",
      status: "Published and actively maintained",
      tagline: "Production e-commerce mobile application for furniture hardware retail in Turkmenistan.",
      description:
        "Full-stack Flutter e-commerce solution for furniture hardware retail.",
      detailedDescription:
        "Timar is a comprehensive e-commerce mobile application built for a leading furniture hardware retailer in Turkmenistan. The product bridges traditional retail with modern mobile commerce through product discovery, QR scanning, intelligent search, flexible payments, delivery options, order tracking, promotions, and user account flows.",
      architecture: [
        { label: "Framework", value: "Flutter cross-platform mobile" },
        { label: "Storage", value: "Hive caching for offline capability" },
        { label: "Notifications", value: "Firebase push notifications and analytics" },
        { label: "Security", value: "Secure data handling and screenshot prevention" },
        { label: "Media", value: "Integrated product video playback" },
        { label: "Authentication", value: "OTP-based registration and login" },
      ],
      featureGroups: [
        {
          title: "Smart Shopping Experience",
          items: [
            "QR product scanning so customers can instantly view product details, prices, and availability",
            "Advanced product search with filters, categories, and recommendation-style discovery",
            "Integrated product videos for detailed product demonstrations",
          ],
        },
        {
          title: "Payment & Delivery",
          items: [
            "Multiple payment options including cash on delivery, terminal payments, and online transactions",
            "Express delivery, scheduled delivery, and store pickup options",
            "Real-time order lifecycle tracking with status updates",
          ],
        },
        {
          title: "Promotions & Membership",
          items: [
            "Coupon codes, discounts, promotional campaigns, and membership benefits",
            "Promotion-driven commerce flows to support retail sales and repeat customers",
          ],
        },
        {
          title: "User-Centric Design",
          items: [
            "Secure OTP-based authentication and account access",
            "Profile management with address management and order history",
            "Firebase-powered push notifications for order updates and promotions",
          ],
        },
        {
          title: "Retail Operations",
          items: [
            "Furniture hardware catalog browsing and product detail flows",
            "Availability and pricing visibility for customers",
            "Operationally reliable app experience for active app-store users",
          ],
        },
      ],
      outcomes: [
        "Helped transform a traditional furniture hardware retail experience into a mobile commerce channel.",
        "Improved customer access to product information through QR scanning, search, filters, and videos.",
        "Supported flexible purchasing with multiple payment and delivery methods.",
        "Reached 5K+ downloads on Google Play.",
      ],
      highlights: [
        "Retail e-commerce mobile experience",
        "Furniture hardware catalog and shopping flows",
        "QR code product scanning",
        "Flexible payment and delivery options",
        "Maintained for active users across app stores",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "E-commerce",
        "Firebase",
        "Hive",
        "Push Notifications",
        "QR Code Scanner",
        "Product Video Playback",
        "State Management",
        "Offline Caching",
        "Secure Data Handling",
        "App Store",
        "Google Play",
      ],
      metrics: [
        { label: "Domain", value: "E-commerce" },
        { label: "Downloads", value: "5K+ on Google Play" },
        { label: "Distribution", value: "App stores" },
      ],
      storeLinks: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=tm.com.timar_mobile_app&pcampaignid=web_share",
        },
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/timar/id6449247142",
        },
      ],
      privacyNote: "GitHub repository is hidden for company privacy.",
      media: [
        {
          label: "Product screenshots",
          href: "/products/timar/",
        },
      ],
    },
    {
      name: "Tiz Taxi Driver",
      role: "Flutter Developer",
      status: "Private deployment",
      tagline: "Professional taxi-driver application with real-time orders, GPS tracking, taximeter logic, and background operation.",
      description:
        "Professional taxi management application for drivers and taxi operations.",
      detailedDescription:
        "Tiz Taxi Driver is a comprehensive Flutter-based taxi-driver application designed for modern taxi operations. It combines real-time GPS tracking, intelligent fare calculation, order management, audio guidance, and reliable background connectivity into a driver-focused mobile workflow.",
      architecture: [
        { label: "Architecture", value: "Clean Architecture with BLoC state management" },
        { label: "Platform", value: "Cross-platform Flutter application" },
        { label: "Backend", value: "REST APIs with Socket.IO for real-time communication" },
        { label: "Location", value: "Advanced GPS tracking with movement detection algorithms" },
        { label: "Background Processing", value: "Flutter Background Service for continuous operation" },
        { label: "Persistence", value: "Hive local storage" },
      ],
      featureGroups: [
        {
          title: "Smart Location & Navigation",
          items: [
            "Real-time GPS tracking with background location services",
            "Automatic movement detection between driving and waiting states",
            "Dynamic tariff calculation based on geographical regions",
            "Precise distance measurement and route logging",
          ],
        },
        {
          title: "Intelligent Taximeter",
          items: [
            "Real-time fare calculation with base fare, distance, and waiting time",
            "Automatic switching between driving and waiting modes",
            "Free waiting-period management with countdown timers",
            "Minimum order price enforcement and detailed trip analytics",
          ],
        },
        {
          title: "Order Management",
          items: [
            "Real-time order notifications with a 30-second acceptance window",
            "Arrival countdown with visual progress indicators",
            "Direct client communication through call functionality",
            "Order status lifecycle from arriving to waiting, driving, and completion",
            "Offline request queuing for network reliability",
          ],
        },
        {
          title: "Voice & Audio Features",
          items: [
            "Russian text-to-speech announcements",
            "Audio notifications for new orders and status changes",
            "Configurable sound levels and vibration alerts",
          ],
        },
        {
          title: "Connectivity & Background Operation",
          items: [
            "WebSocket-based real-time communication",
            "Background service for continuous operation",
            "Overlay window support for multitasking",
            "Network monitoring with automatic retry mechanisms",
          ],
        },
        {
          title: "Driver Dashboard & Daily Use",
          items: [
            "Real-time balance tracking",
            "District-based service areas",
            "Message and notification center",
            "Settings, profile management, statistics, and payment tracking",
          ],
        },
        {
          title: "Advanced Features",
          items: [
            "Automatic tariff switching based on location polygons",
            "Movement detection with configurable thresholds",
            "Road-details logging for trip verification",
            "Queued request system for offline scenarios",
            "Admin communication system",
          ],
        },
      ],
      outcomes: [
        "Delivered a driver-focused mobile tool for modern taxi operations.",
        "Combined real-time systems, taximeter logic, GPS services, and background execution in one app.",
        "Improved operational reliability with offline request queuing and retry behavior.",
        "Enhanced usability through voice guidance, audio feedback, and dark-theme mobile UI.",
      ],
      highlights: [
        "Real-time GPS tracking and movement detection",
        "Intelligent fare calculation with waiting/drive mode switching",
        "WebSocket order flow with 30-second acceptance logic",
        "Audio guidance, voice announcements, and vibration alerts",
        "Background service and offline reliability mechanisms",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "BLoC",
        "Clean Architecture",
        "REST APIs",
        "Socket.IO",
        "GPS Tracking",
        "Background Location",
        "Flutter Background Service",
        "Hive",
        "Text-to-Speech",
        "Audio Notifications",
        "Overlay Window",
        "Offline Queueing",
        "Taxi Operations",
      ],
      metrics: [
        { label: "Domain", value: "Taxi operations" },
        { label: "Audience", value: "Drivers" },
        { label: "Focus", value: "Real-time driver workflow" },
      ],
      githubUrl: "https://github.com/MergenTaganow/resul_taxi",
      privacyNote:
        "Not published on public app stores because the product depends on active server-side deployment, operational restrictions, and ongoing private updates. This kind of app is often distributed directly to drivers or client devices outside public stores.",
      media: [
        {
          label: "Product screenshots",
          href: "/products/tiz-taxi-driver/",
        },
      ],
    },
    {
      name: "Shop Terminal",
      role: "Flutter Developer",
      status: "Built at Timar",
      tagline: "QR-based shopping assistant for interactive self-service retail and personalized in-store product discovery.",
      description:
        "QR-based shopping assistant for improving in-store and assisted shopping workflows.",
      detailedDescription:
        "Shop Terminal is a Flutter-based terminal application for retail stores that transforms traditional shopping into an interactive self-service experience. Customers can independently scan products, access detailed information, explore recommendations, manage a basket, and receive personalized pricing through loyalty-card integration.",
      architecture: [
        { label: "Framework", value: "Flutter with Dart" },
        { label: "State Management", value: "BLoC with Riverpod" },
        { label: "Real-time Communication", value: "Socket.IO synchronization" },
        { label: "Storage", value: "SharedPreferences for offline persistence" },
        { label: "Networking", value: "REST APIs with Dio" },
        { label: "Security", value: "Certificate pinning and encrypted transmission" },
      ],
      featureGroups: [
        {
          title: "Smart Product Discovery",
          items: [
            "QR and barcode scanning for instant product lookup",
            "Real-time database integration with live inventory systems",
            "Detailed product information with pricing, descriptions, and specifications",
            "Localized product browsing in Turkish, Russian, and Turkmen",
          ],
        },
        {
          title: "Personalized Shopping",
          items: [
            "Loyalty-card integration for customer-specific discount flows",
            "Dynamic pricing based on discount-card rules",
            "Personalized recommendations, alternatives, and substitute products",
            "Shopping basket management with quantity adjustments",
          ],
        },
        {
          title: "Analytics & Promotions",
          items: [
            "Weekly and monthly trending products",
            "Cross-selling opportunities through recommendation logic",
            "News, promotions, and new-product announcements",
            "Category-based product navigation for faster discovery",
          ],
        },
        {
          title: "Enterprise Device Security",
          items: [
            "Anti-theft mechanisms with location-based alerts",
            "Kiosk mode for locked-down terminal operation",
            "OTA updates and centralized device control",
            "Connection monitoring and battery-status management",
          ],
        },
        {
          title: "Retail UX",
          items: [
            "Clean self-service UI designed for a wide age range",
            "Audio alerts for important system events",
            "Portrait-optimized touch interactions",
            "Offline capability for core shopping flows during connectivity issues",
          ],
        },
      ],
      outcomes: [
        "Enabled stores to operate with less dependence on in-person sales staff.",
        "Improved customer access to product information through self-service scanning and live inventory visibility.",
        "Reduced operational friction with real-time pricing, promotions, and recommendation support.",
        "Created a scalable retail-terminal architecture for multiple stores and large product catalogs.",
      ],
      highlights: [
        "QR-based shopping flows",
        "Self-service product discovery",
        "Dynamic customer-specific pricing",
        "Recommendation-driven retail assistance",
        "Kiosk-mode secure terminal experience",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "BLoC",
        "Riverpod",
        "Socket.IO",
        "REST APIs",
        "Dio",
        "QR Scanning",
        "Barcode Scanning",
        "SharedPreferences",
        "Certificate Pinning",
        "Firebase",
        "Retail Systems",
        "Offline Support",
      ],
      metrics: [
        { label: "Domain", value: "Retail" },
        { label: "Core flow", value: "QR shopping" },
        { label: "Audience", value: "In-store customers" },
      ],
      privacyNote: "Company product links and repository are private.",
      media: [
        {
          label: "Product screenshots",
          href: "/products/shop-terminal/",
        },
      ],
    },
    {
      name: "Timar Exhibition",
      role: "Flutter Developer",
      status: "Built at Timar",
      tagline: "Smart exhibition companion for rapid company capture, contact management, and follow-up readiness in trade-show environments.",
      description:
        "Smart exhibition management app for organizing exhibition activity and visitor/product interactions.",
      detailedDescription:
        "Timar Exhibition is a mobile application built to help professionals navigate trade exhibitions and business events without losing valuable information. It focuses on fast company capture, smart note-taking, media capture, QR-based data import, and structured follow-up after time-sensitive exhibition interactions.",
      architecture: [
        { label: "Framework", value: "Flutter cross-platform mobile" },
        { label: "State Management", value: "Riverpod with BLoC-style business logic separation" },
        { label: "Local Storage", value: "Hive for offline-first storage and caching" },
        { label: "Capture Stack", value: "Camera integration with image compression and audio recording" },
        { label: "Sync Strategy", value: "Offline-first architecture with cloud synchronization" },
        { label: "Languages", value: "Turkish, Russian, and English support" },
      ],
      featureGroups: [
        {
          title: "Problem Solving in Exhibition Environments",
          items: [
            "Designed for time-limited trade-show environments where important information is easy to lose",
            "Helps reduce missed opportunities caused by overload, lost contact details, and fragmented notes",
            "Supports faster company learning, structured capture, and better post-event follow-up",
          ],
        },
        {
          title: "Smart QR Code Integration",
          items: [
            "Instant data capture from QR codes containing company information",
            "Automatic filling for company, contact, and product details",
            "VCard support for fast contact import",
          ],
        },
        {
          title: "Rapid Information Capture",
          items: [
            "One-sentence company notes for fast reference",
            "Voice recording with adjustable playback speed for hands-free note-taking",
            "Photo and video capture for visual documentation",
          ],
        },
        {
          title: "Company & Contact Management",
          items: [
            "Comprehensive company profiles with hierarchy and categorization",
            "Detailed contact records with multiple communication channels",
            "Location tracking inside exhibition venues",
          ],
        },
        {
          title: "Synchronization & Reliability",
          items: [
            "Offline-first architecture for use during unstable connectivity at crowded events",
            "Cloud synchronization to keep data aligned across devices",
            "Multi-language support for broader exhibition usage",
          ],
        },
      ],
      outcomes: [
        "Reduced manual data entry time by 75%.",
        "Improved information retention by 90%.",
        "Increased follow-up conversion rates by 50%.",
        "Created a more structured workflow for exhibition navigation and post-event business follow-up.",
      ],
      highlights: [
        "QR-based company and contact capture",
        "Fast note-taking with voice, photo, and video support",
        "Offline-first exhibition workflows",
        "Structured company and contact management",
        "Improved follow-up efficiency after business events",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Riverpod",
        "BLoC",
        "Hive",
        "QR Scanning",
        "VCard Import",
        "Camera Integration",
        "Image Compression",
        "Audio Recording",
        "Offline-first Sync",
        "Cloud Synchronization",
        "Multi-language Support",
        "Exhibition Management",
      ],
      metrics: [
        { label: "Domain", value: "Events" },
        { label: "Use case", value: "Trade-show intelligence" },
        { label: "Impact", value: "75% less manual entry" },
      ],
      storeLinks: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=org.timar.esergi",
        },
      ],
      privacyNote: "GitHub repository is hidden for company privacy.",
      media: [
        {
          label: "Product screenshots",
          href: "/products/timar-exhibition/",
        },
      ],
    },
    {
      name: "CRM Recorder Mobile",
      role: "Flutter Developer",
      status: "Enterprise product",
      tagline: "Background communication automation platform for work devices, customer messaging, call handling, and CRM synchronization.",
      description:
        "Enterprise communication automation platform for recording, organizing, and improving CRM-related communication workflows.",
      detailedDescription:
        "CRM Recorder Mobile is a Flutter-based enterprise solution built for seamless communication management on work devices. The app operates quietly in the background, automating customer messages, OTP flows, call recording, synchronization, and device-side communication tasks without interrupting daily business operations.",
      architecture: [
        { label: "Frontend", value: "Flutter with Riverpod state management" },
        { label: "Backend", value: "REST APIs with WebSocket real-time communication" },
        { label: "Background Execution", value: "Foreground task handling for continuous operation" },
        { label: "Data Strategy", value: "Local caching with cloud synchronization" },
        { label: "Security", value: "JWT authentication and encrypted data transmission" },
        { label: "Deployment", value: "Multi-device enterprise rollout" },
      ],
      featureGroups: [
        {
          title: "Automated SMS Management",
          items: [
            "Automated SMS sending for order confirmations and customer notifications",
            "OTP generation and delivery flows",
            "Background SMS monitoring and processing",
            "Real-time synchronization with the central CRM system",
          ],
        },
        {
          title: "Call Recording & Communication Tracking",
          items: [
            "Automatic call recording with audio compression",
            "Call-log tracking and analysis",
            "Incoming and outgoing call-state monitoring",
            "Call-data synchronization for downstream CRM workflows",
          ],
        },
        {
          title: "Real-time Communication Hub",
          items: [
            "WebSocket-based instant communication",
            "Live synchronization across multiple devices",
            "Background service management with foreground task handling",
            "Automatic retry for failed communication attempts",
          ],
        },
        {
          title: "Location & Device Intelligence",
          items: [
            "GPS tracking and location services",
            "Device identification and management",
            "Battery optimization and performance monitoring",
            "Cross-platform support for Android and iOS workflows",
          ],
        },
        {
          title: "Update & Configuration System",
          items: [
            "QR-based device configuration and setup",
            "Over-the-Air update mechanism",
            "Automatic version checking and deployment support",
            "Centralized configuration management",
          ],
        },
      ],
      outcomes: [
        "Eliminated manual communication overhead for customer-facing business operations.",
        "Allowed employees to focus on core work while messaging and communication tasks ran automatically.",
        "Improved visibility into calls, messages, and CRM-linked communication analytics.",
        "Created a scalable mobile architecture for multi-device enterprise deployment.",
      ],
      highlights: [
        "Background SMS automation and OTP delivery",
        "Automatic call recording and synchronization",
        "WebSocket-based real-time communication",
        "QR-based setup and OTA configuration flows",
        "Built for invisible day-to-day enterprise operation",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Riverpod",
        "WebSocket",
        "REST APIs",
        "SQLite",
        "Background Services",
        "Location Services",
        "QR Code Integration",
        "OTA Updates",
        "JWT Authentication",
        "CRM",
        "Enterprise Automation",
      ],
      metrics: [
        { label: "Domain", value: "CRM" },
        { label: "Audience", value: "Enterprise teams" },
        { label: "Focus", value: "Communication automation" },
      ],
      privacyNote:
        "Repository is hidden for company privacy. The product uses a server-side updating and deployment system rather than public store distribution.",
      media: [
        {
          label: "Product screenshots",
          href: "/products/crm-recorder-mobile/",
        },
      ],
    },
    {
      name: "Aluminum Manufacturing Management System",
      role: "Flutter Developer",
      status: "Enterprise product",
      tagline: "Digital manufacturing operations platform for aluminum door and window production workflows.",
      description:
        "Flutter mobile app for manufacturing workflow management in aluminum production.",
      detailedDescription:
        "This Flutter mobile application serves as a central operational system for aluminum manufacturing. It helps factory employees manage order processing, production stages, barcode workflows, printing, analytics, employee coordination, and quality control through a multilingual mobile interface.",
      architecture: [
        { label: "Architecture", value: "Clean Architecture with BLoC state management" },
        { label: "Dependency Injection", value: "GetIt service locator" },
        { label: "Data Layer", value: "Repository pattern with REST API integration" },
        { label: "Frontend", value: "Flutter with Dart" },
        { label: "Networking", value: "Dio HTTP client" },
        { label: "Storage", value: "SharedPreferences and SQLite" },
      ],
      featureGroups: [
        {
          title: "Order Management",
          items: [
            "Complete order lifecycle tracking from creation to delivery",
            "Real-time status updates, deadline monitoring, and action history",
            "Advanced filtering and sorting for production operations",
          ],
        },
        {
          title: "Production Workflow Management",
          items: [
            "Multi-stage tracking for glass cutting, profile cutting, assembly, painting, and quality inspection",
            "Employee assignment and task management across production stages",
            "Production timeline monitoring with rework and quality-control processes",
          ],
        },
        {
          title: "Barcode & QR Integration",
          items: [
            "Barcode and QR scanning for products and orders",
            "Support for handheld, Honeywell, and Urova scanner devices",
            "Real-time validation and seamless workflow integration during production",
          ],
        },
        {
          title: "Printing & Labeling",
          items: [
            "Wireless printer connectivity",
            "Custom product-label generation",
            "Print history tracking and support for multiple paper sizes and types",
          ],
        },
        {
          title: "Analytics & Performance Dashboard",
          items: [
            "Real-time production metrics and KPI visibility",
            "Employee performance tracking",
            "Order completion statistics with visual charts and operational insights",
          ],
        },
        {
          title: "Employee & File Management",
          items: [
            "Role-based access control and employee task tracking",
            "Multi-language support in Turkish, English, and Russian",
            "Document/image uploads, order attachments, and image viewing workflows",
          ],
        },
        {
          title: "Advanced Platform Features",
          items: [
            "Real-time notifications and updates",
            "Offline capability with synchronization",
            "Automatic app updates, geolocation services, and camera capture",
          ],
        },
      ],
      outcomes: [
        "Transformed paper-based manufacturing processes into a digital operational ecosystem.",
        "Reduced manual errors through structured mobile workflows and real-time data handling.",
        "Improved quality control with stage-based inspection and rework tracking.",
        "Enabled data-driven operational decisions with dashboards, KPIs, and analytics.",
      ],
      highlights: [
        "End-to-end order and production lifecycle tracking",
        "Barcode and QR support for factory workflows",
        "Printing and custom product labeling",
        "Real-time production analytics and employee tracking",
        "Built for factory-floor multilingual usage",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Flutter BLoC",
        "GetIt",
        "Repository Pattern",
        "REST APIs",
        "Dio",
        "SharedPreferences",
        "SQLite",
        "QR Scanning",
        "Barcode Scanning",
        "fl_chart",
        "Printing Services",
        "Localization",
        "Offline Synchronization",
        "Camera Integration",
        "Manufacturing Systems",
        "Enterprise Mobile",
      ],
      metrics: [
        { label: "Domain", value: "Manufacturing" },
        { label: "Audience", value: "Production teams" },
        { label: "Focus", value: "Digital factory operations" },
      ],
      storeLinks: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.timar.alumin_orders",
        },
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/alýumin-önümçilik/id6757517246",
        },
      ],
      privacyNote: "GitHub repository is hidden for company privacy.",
      media: [
        {
          label: "Product screenshots",
          href: "/products/aluminum-manufacturing-management/",
        },
      ],
    },
    {
      name: "QR Employee Mobile",
      role: "Flutter Developer",
      status: "Enterprise product",
      tagline: "Enterprise mobile system for inventory control, customer management, QR workflows, and business analytics.",
      description:
        "Enterprise inventory and customer management system built around QR-based mobile workflows.",
      detailedDescription:
        "QR Employee Mobile is a Flutter-based enterprise application built to streamline daily employee operations across retail and warehouse environments. It combines inventory visibility, QR workflows, customer management, analytics, and printing into a centralized mobile tool for faster and more informed operational work.",
      architecture: [
        { label: "Frontend", value: "Flutter with Dart" },
        { label: "Architecture", value: "Clean Architecture with BLoC pattern" },
        { label: "State Management", value: "Flutter Bloc for reactive state handling" },
        { label: "Local Storage", value: "SharedPreferences and SQLite for offline workflows" },
        { label: "Networking", value: "HTTP client with custom error handling" },
        { label: "UI/UX", value: "Material Design with custom theming and animations" },
      ],
      featureGroups: [
        {
          title: "Inventory Management",
          items: [
            "Real-time stock tracking across multiple warehouses",
            "QR scanning for instant product identification",
            "Stock analysis with visual charts and reporting",
            "Negative-stock and zero-stock monitoring",
            "Multi-location inventory synchronization",
          ],
        },
        {
          title: "Customer Relationship Management",
          items: [
            "Comprehensive customer database with detailed profiles",
            "Customer purchase history and behavioral analytics",
            "Birthday notifications and promotional workflows",
            "Client-device QR generation for personalized access",
            "Customer balance and credit management",
          ],
        },
        {
          title: "Analytics & Reporting",
          items: [
            "Sales analysis with interactive charts and graphs",
            "Item-performance metrics and trend analysis",
            "Customer behavior insights and purchase-pattern visibility",
            "Stock movement tracking and forecasting support",
            "Configurable reporting periods and filters",
          ],
        },
        {
          title: "Label & Print Management",
          items: [
            "QR and barcode label generation",
            "Wireless printer integration and management",
            "Customizable label sizes and formats",
            "Batch printing with print-history tracking",
          ],
        },
        {
          title: "Synchronization & Reliability",
          items: [
            "Offline-first architecture with local caching",
            "Real-time synchronization with enterprise backend systems",
            "Conflict resolution and data-integrity support",
            "Automated and manual synchronization modes",
            "Multi-language support in Turkish, English, and Russian",
          ],
        },
        {
          title: "User Experience & Platform Features",
          items: [
            "Tab-based mobile navigation for employee workflows",
            "Responsive layouts, animations, and loading states",
            "Accessibility support and screenshot-prevention security measures",
            "Android-first support with maintained iOS compatibility",
          ],
        },
      ],
      outcomes: [
        "Improved employee access to critical inventory and customer data in real time.",
        "Reduced manual operational work through QR-based product and label workflows.",
        "Enabled better data-driven decisions with sales, stock, and customer analytics.",
        "Created a reliable offline-capable mobile tool for warehouse and retail teams.",
      ],
      highlights: [
        "Real-time stock and warehouse visibility",
        "QR workflows for product identification and employee operations",
        "Customer analytics, balances, and purchase history",
        "Label generation and wireless printing",
        "Offline-first enterprise synchronization",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "BLoC Pattern",
        "REST APIs",
        "SQLite",
        "SharedPreferences",
        "QR Code Technology",
        "Chart Visualization",
        "Local Notifications",
        "Background Tasks",
        "Camera Integration",
        "Network Connectivity Monitoring",
        "Inventory Systems",
        "Customer Management",
      ],
      metrics: [
        { label: "Domain", value: "Inventory & CRM" },
        { label: "Core flow", value: "QR workflows" },
        { label: "Audience", value: "Retail & warehouse employees" },
      ],
      storeLinks: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=tm.com.timar.dukanda_ishgar",
        },
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/qr-işgär/id6742496249",
        },
      ],
      privacyNote: "GitHub repository is hidden for company privacy.",
      media: [
        {
          label: "Product screenshots",
          href: "/products/qr-employee-mobile/",
        },
      ],
    },
  ],
  achievements: [
    {
      title: "Published 10+ mobile applications",
      description: "Published applications across Google Play Store and Apple App Store.",
    },
    {
      title: "10K+ application downloads",
      description: "Built and maintained apps that reached more than 10K downloads.",
    },
    {
      title: "Turkmen State Olympiad among university students, Programming",
      issuer: "Turkmen State Olympiad",
      date: "2023-2024",
      description: "Silver medal in 2023 and bronze medal in 2024.",
      evidence: [
        {
          label: "2023 silver medal certificate",
          href: "/certificates/turkmen-state-olympiad-programming-2023-silver.jpg",
        },
        {
          label: "2024 bronze medal certificate",
          href: "/certificates/turkmen-state-olympiad-programming-2024-bronze.jpg",
        },
      ],
    },
    {
      title: "International Open Internet Olympiad in Informatics",
      issuer: "International Open Internet Olympiad",
      date: "2023",
      description: "Bronze medal and silver medal in 2023.",
      evidence: [
        {
          label: "2023 bronze medal certificate",
          href: "/certificates/international-open-internet-olympiad-informatics-2023-bronze.jpg",
        },
        {
          label: "2023 silver medal certificate",
          href: "/certificates/international-open-internet-olympiad-informatics-2023-silver.jpg",
        },
      ],
    },
    {
      title: "Open Mathematical Olympiad for University Students",
      issuer: "Open Mathematical Olympiad",
      date: "2024-2026",
      description: "Bronze medal in 2024, silver medal in 2025, and silver medal in 2026.",
      evidence: [
        {
          label: "2024 bronze medal certificate",
          href: "/certificates/open-mathematical-olympiad-2024-bronze.jpg",
        },
        {
          label: "2025 silver medal certificate",
          href: "/certificates/open-mathematical-olympiad-2025-silver.jpg",
        },
        {
          label: "2026 silver medal certificate",
          href: "/certificates/open-mathematical-olympiad-2026-silver.jpg",
        },
      ],
    },
    {
      title: "Cryptography Olympiad among university students",
      date: "2023",
      description: "3rd place.",
      evidence: [
        {
          label: "2023 3rd place certificate",
          href: "/certificates/cryptography-olympiad-2023-third-place.jpg",
        },
      ],
    },
    {
      title: "Olympiads among university students, Programming",
      date: "2023-2024",
      description: "2nd place in 2023 and 3rd place in 2024.",
      evidence: [
        {
          label: "2023 2nd place certificate",
          href: "/certificates/university-students-programming-olympiad-2023-second-place.jpg",
        },
        {
          label: "2024 3rd place certificate",
          href: "/certificates/university-students-programming-olympiad-2024-third-place.jpg",
        },
      ],
    },
    {
      title: "17th International Zhautykov Olympiad",
      issuer: "International Zhautykov Olympiad",
      date: "2021",
      description: "Participation certificate.",
      evidence: [
        {
          label: "Participation certificate",
          href: "/certificates/international-zhautykov-olympiad-17-participation.jpg",
        },
      ],
    },
    {
      title: "Appreciation letters from the rector of the university",
      issuer: "International University for the Humanities and Development",
      date: "2024-2026",
      description:
        "Three appreciation letters received over the last three years.",
      evidence: [
        {
          label: "Appreciation letter 2024",
          href: "/certificates/rector-appreciation-letter-2024.jpg",
        },
        {
          label: "Appreciation letter 2025",
          href: "/certificates/rector-appreciation-letter-2025.jpg",
        },
        {
          label: "Appreciation letter 2026",
          href: "/certificates/rector-appreciation-letter-2026.jpg",
        },
      ],
    },
  ],
  certificates: [
    {
      title: "Turkmen State Olympiad, Programming - Silver Medal",
      issuer: "Turkmen State Olympiad",
      date: "2023",
      scanPath: "/certificates/turkmen-state-olympiad-programming-2023-silver.jpg",
    },
    {
      title: "Turkmen State Olympiad, Programming - Bronze Medal",
      issuer: "Turkmen State Olympiad",
      date: "2024",
      scanPath: "/certificates/turkmen-state-olympiad-programming-2024-bronze.jpg",
    },
    {
      title: "International Open Internet Olympiad in Informatics - Bronze Medal",
      issuer: "International Open Internet Olympiad",
      date: "2023",
      scanPath: "/certificates/international-open-internet-olympiad-informatics-2023-bronze.jpg",
    },
    {
      title: "International Open Internet Olympiad in Informatics - Silver Medal",
      issuer: "International Open Internet Olympiad",
      date: "2023",
      scanPath: "/certificates/international-open-internet-olympiad-informatics-2023-silver.jpg",
    },
    {
      title: "Open Mathematical Olympiad - Bronze Medal",
      issuer: "Open Mathematical Olympiad",
      date: "2024",
      scanPath: "/certificates/open-mathematical-olympiad-2024-bronze.jpg",
    },
    {
      title: "Open Mathematical Olympiad - Silver Medal",
      issuer: "Open Mathematical Olympiad",
      date: "2025",
      scanPath: "/certificates/open-mathematical-olympiad-2025-silver.jpg",
    },
    {
      title: "Open Mathematical Olympiad - Silver Medal",
      issuer: "Open Mathematical Olympiad",
      date: "2026",
      scanPath: "/certificates/open-mathematical-olympiad-2026-silver.jpg",
    },
    {
      title: "Cryptography Olympiad - 3rd Place",
      issuer: "University students cryptography olympiad",
      date: "2023",
      scanPath: "/certificates/cryptography-olympiad-2023-third-place.jpg",
    },
    {
      title: "University Students Programming Olympiad - 2nd Place",
      issuer: "Olympiad among university students",
      date: "2023",
      scanPath: "/certificates/university-students-programming-olympiad-2023-second-place.jpg",
    },
    {
      title: "University Students Programming Olympiad - 3rd Place",
      issuer: "Olympiad among university students",
      date: "2024",
      scanPath: "/certificates/university-students-programming-olympiad-2024-third-place.jpg",
    },
    {
      title: "17th International Zhautykov Olympiad - Participation",
      issuer: "International Zhautykov Olympiad",
      date: "2021",
      scanPath: "/certificates/international-zhautykov-olympiad-17-participation.jpg",
    },
    {
      title: "Rector Appreciation Letter",
      issuer: "International University for the Humanities and Development",
      date: "2024",
      scanPath: "/certificates/rector-appreciation-letter-2024.jpg",
    },
    {
      title: "Rector Appreciation Letter",
      issuer: "International University for the Humanities and Development",
      date: "2025",
      scanPath: "/certificates/rector-appreciation-letter-2025.jpg",
    },
    {
      title: "Rector Appreciation Letter",
      issuer: "International University for the Humanities and Development",
      date: "2026",
      scanPath: "/certificates/rector-appreciation-letter-2026.jpg",
    },
  ],
};
