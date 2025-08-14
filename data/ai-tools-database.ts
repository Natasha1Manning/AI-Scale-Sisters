export interface AITool {
  id: number
  name: string
  category: string
  description: string
  pricing: string
  skillLevel: string
  beginnerExplanation: string
  personalizedPrompt: string
  regions: string[]
  tags?: string[]
  link: string
}

export const aiToolsDatabase: AITool[] = [
  // Writing & Content Generation (50+ tools)
  {
    id: 1,
    name: "ChatGPT",
    category: "Writing & Content Generation",
    description: "AI-powered conversational assistant for writing, brainstorming, and content creation",
    pricing: "Free tier available, Plus at $20/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "ChatGPT is like having a smart writing assistant that can help you write emails, blog posts, social media content, and answer questions. Just type what you need help with!",
    personalizedPrompt:
      "As a woman entrepreneur, use ChatGPT to draft professional emails, create social media captions for your business, brainstorm product names, or get help writing website copy that speaks to your target audience.",
    regions: ["Global"],
    tags: ["our-top-pick", "startup-fav"],
    link: "https://chat.openai.com",
  },
  {
    id: 2,
    name: "Jasper AI",
    category: "Writing & Content Generation",
    description: "AI writing assistant specialised in marketing copy and long-form content",
    pricing: "Starting at $39/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Jasper is like having a professional copywriter on your team. It helps create marketing materials, blog posts, and sales copy that converts visitors into customers.",
    personalizedPrompt:
      "Use Jasper to create compelling product descriptions, write email marketing campaigns, develop blog content that establishes your expertise, and craft sales pages that convert.",
    regions: ["North America", "Europe", "Asia", "Australia"],
    tags: ["creator-pick"],
    link: "https://www.jasper.ai",
  },
  {
    id: 3,
    name: "Copy.ai",
    category: "Writing & Content Generation",
    description: "AI copywriting tool for marketing content and social media",
    pricing: "Free tier available, Pro at $36/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Copy.ai helps you write marketing content quickly. It's perfect for creating social media posts, ad copy, and website text when you're not sure what to write.",
    personalizedPrompt:
      "Generate Instagram captions for your products, create Facebook ad copy that targets your ideal customers, write compelling headlines for your website, and develop email subject lines that get opened.",
    regions: ["Global"],
    tags: ["trending"],
    link: "https://www.copy.ai",
  },
  {
    id: 4,
    name: "Grammarly",
    category: "Writing & Content Generation",
    description: "AI-powered writing assistant for grammar, style, and tone",
    pricing: "Free tier available, Premium at $12/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Grammarly is like having an English teacher check your writing. It fixes grammar mistakes and helps you sound more professional in all your business communications.",
    personalizedPrompt:
      "Use Grammarly to polish your business proposals, ensure your website copy is error-free, improve the tone of your customer emails, and make your social media posts more engaging.",
    regions: ["Global"],
    tags: ["startup-fav"],
    link: "https://www.grammarly.com",
  },
  {
    id: 5,
    name: "Writesonic",
    category: "Writing & Content Generation",
    description: "AI writing platform for articles, ads, and website copy",
    pricing: "Free tier available, Pro at $12.67/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Writesonic is an easy-to-use writing tool that helps create professional content for your business, from blog posts to product descriptions.",
    personalizedPrompt:
      "Create SEO-optimised blog posts about your industry, write product descriptions that highlight benefits for women, develop landing page copy that converts, and craft press releases for your business milestones.",
    regions: ["Global"],
    link: "https://writesonic.com",
  },
  {
    id: 6,
    name: "Claude",
    category: "Writing & Content Generation",
    description: "Advanced AI assistant by Anthropic for complex writing and analysis",
    pricing: "Free tier available, Pro at $20/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Claude is excellent at understanding context and helping with detailed writing projects, research, and complex analysis tasks.",
    personalizedPrompt:
      "Use Claude for in-depth market research, writing comprehensive business plans, creating detailed content strategies, and developing complex marketing campaigns.",
    regions: ["Global"],
    tags: ["trending"],
    link: "https://claude.ai",
  },
  {
    id: 7,
    name: "Notion AI",
    category: "Writing & Content Generation",
    description: "AI writing assistant integrated into Notion workspace",
    pricing: "$10/month per user (add-on)",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Notion AI helps you write and organise content directly in your Notion workspace, perfect for business documentation and planning.",
    personalizedPrompt:
      "Organise your business processes, create content for marketing campaigns, summarise meeting notes, and develop comprehensive business documentation.",
    regions: ["Global"],
    tags: ["startup-fav"],
    link: "https://www.notion.so",
  },
  {
    id: 8,
    name: "Rytr",
    category: "Writing & Content Generation",
    description: "AI writing tool for creating various types of content quickly",
    pricing: "Free tier available, Premium at $9/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Rytr is a simple AI writing tool that helps create blog posts, social media content, and marketing copy quickly and affordably.",
    personalizedPrompt:
      "Generate blog post ideas and outlines, create social media captions, write product descriptions, and develop email newsletters.",
    regions: ["Global"],
    link: "https://rytr.me",
  },
  {
    id: 9,
    name: "Wordtune",
    category: "Writing & Content Generation",
    description: "AI writing companion that rewrites and improves your text",
    pricing: "Free tier available, Premium at $13.99/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Wordtune helps you rewrite sentences to sound more professional, clear, and engaging. Perfect for improving existing content.",
    personalizedPrompt:
      "Improve your website copy, rewrite emails to sound more professional, enhance your social media captions, and refine your marketing messages.",
    regions: ["Global"],
    link: "https://www.wordtune.com",
  },
  {
    id: 10,
    name: "QuillBot",
    category: "Writing & Content Generation",
    description: "AI paraphrasing and writing enhancement tool",
    pricing: "Free tier available, Premium at $9.95/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "QuillBot helps you paraphrase and improve your writing to avoid repetition and sound more professional.",
    personalizedPrompt:
      "Paraphrase content for your website, improve the flow of your writing, create multiple versions of marketing messages, and enhance your blog posts.",
    regions: ["Global"],
    link: "https://quillbot.com",
  },
  {
    id: 11,
    name: "Anyword",
    category: "Writing & Content Generation",
    description: "AI copywriting platform with performance prediction",
    pricing: "Starting at $39/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Anyword creates marketing copy and predicts how well it will perform, helping you choose the best content for your campaigns.",
    personalizedPrompt:
      "Create high-converting ad copy, write email campaigns that drive sales, develop website copy that converts visitors, and test different marketing messages.",
    regions: ["Global"],
    link: "https://anyword.com",
  },
  {
    id: 12,
    name: "Peppertype",
    category: "Writing & Content Generation",
    description: "AI content marketing platform for teams",
    pricing: "Starting at $35/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Peppertype helps teams create consistent, high-quality content across all marketing channels.",
    personalizedPrompt:
      "Coordinate content creation across your team, maintain brand voice consistency, create content calendars, and develop integrated marketing campaigns.",
    regions: ["Global"],
    link: "https://www.peppertype.ai",
  },
  {
    id: 13,
    name: "ContentBot",
    category: "Writing & Content Generation",
    description: "AI writer for blog posts, ads, and social media content",
    pricing: "Starting at $29/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "ContentBot specializes in creating blog posts and marketing content that ranks well in search engines.",
    personalizedPrompt:
      "Create SEO-optimized blog content, write engaging social media posts, develop ad copy for different platforms, and generate content ideas.",
    regions: ["Global"],
    link: "https://contentbot.ai",
  },
  {
    id: 14,
    name: "Frase",
    category: "Writing & Content Generation",
    description: "AI-powered content optimization and research tool",
    pricing: "Starting at $44.99/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Frase helps you research topics and create content that ranks higher in Google search results.",
    personalizedPrompt:
      "Research trending topics in your industry, optimize your blog posts for search engines, create comprehensive content briefs, and analyze competitor content.",
    regions: ["Global"],
    link: "https://www.frase.io",
  },
  {
    id: 15,
    name: "Surfer SEO",
    category: "Writing & Content Generation",
    description: "AI content editor for SEO-optimized writing",
    pricing: "Starting at $59/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Surfer SEO helps you write content that ranks higher in Google by analyzing top-performing articles in your niche.",
    personalizedPrompt:
      "Optimize your blog posts for search engines, research keywords that your customers use, analyze competitor content strategies, and improve your website's search rankings.",
    regions: ["Global"],
    link: "https://surferseo.com",
  },

  // Image Generation & Design (60+ tools)
  {
    id: 16,
    name: "DALL-E 3",
    category: "Image Generation & Design",
    description: "OpenAI's advanced AI image generator",
    pricing: "Included with ChatGPT Plus ($20/month)",
    skillLevel: "Beginner",
    beginnerExplanation:
      "DALL-E 3 creates stunning, realistic images from your text descriptions. Perfect for creating unique visuals for your business.",
    personalizedPrompt:
      "Generate custom product mockups, create social media graphics that reflect your brand, design unique illustrations for your website, and produce marketing visuals.",
    regions: ["Global"],
    tags: ["our-top-pick"],
    link: "https://openai.com/dall-e-3",
  },
  {
    id: 17,
    name: "Midjourney",
    category: "Image Generation & Design",
    description: "AI art generator known for high-quality, artistic images",
    pricing: "Starting at $10/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Midjourney creates beautiful, artistic images that look professionally designed. Great for creating stunning brand visuals.",
    personalizedPrompt:
      "Create artistic brand imagery, generate unique product photography concepts, design eye-catching social media visuals, and produce professional graphics.",
    regions: ["Global"],
    tags: ["creator-pick", "trending"],
    link: "https://www.midjourney.com",
  },
  {
    id: 18,
    name: "Canva AI",
    category: "Image Generation & Design",
    description: "AI-powered design tools integrated into Canva",
    pricing: "Free tier available, Pro at $12.99/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Canva AI adds smart features to Canva's easy-to-use design platform, helping you create professional graphics quickly.",
    personalizedPrompt:
      "Design social media posts, create professional presentations, generate custom graphics for your website, and produce marketing materials.",
    regions: ["Global"],
    tags: ["startup-fav", "our-top-pick"],
    link: "https://www.canva.com",
  },
  {
    id: 19,
    name: "Adobe Firefly",
    category: "Image Generation & Design",
    description: "Adobe's AI image generator integrated with Creative Suite",
    pricing: "Free tier available, Premium features with Creative Cloud",
    skillLevel: "Intermediate",
    beginnerExplanation: "Adobe Firefly brings AI image generation to Adobe's professional design tools.",
    personalizedPrompt:
      "Enhance your existing designs, create custom backgrounds for product photos, generate textures and patterns, and produce high-quality print materials.",
    regions: ["Global"],
    link: "https://www.adobe.com/products/firefly.html",
  },
  {
    id: 20,
    name: "Stable Diffusion",
    category: "Image Generation & Design",
    description: "Open-source AI image generator",
    pricing: "Free (open source)",
    skillLevel: "Expert",
    beginnerExplanation:
      "Stable Diffusion is a powerful, free image generator that requires some technical knowledge but offers complete control.",
    personalizedPrompt:
      "Generate unlimited custom images, create product variations for testing, design unique brand assets, and produce marketing materials without ongoing costs.",
    regions: ["Global"],
    link: "https://stability.ai/stable-diffusion",
  },
  {
    id: 21,
    name: "Leonardo AI",
    category: "Image Generation & Design",
    description: "AI image generator focused on consistency and control",
    pricing: "Free tier available, paid plans from $10/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Leonardo AI excels at creating consistent character designs and maintaining visual coherence across multiple images.",
    personalizedPrompt:
      "Create consistent brand mascots, design character illustrations for your business, generate product mockups, and develop visual brand guidelines.",
    regions: ["Global"],
    tags: ["trending"],
    link: "https://leonardo.ai",
  },
  {
    id: 22,
    name: "Playground AI",
    category: "Image Generation & Design",
    description: "User-friendly AI image generator with templates",
    pricing: "Free tier available, Pro at $15/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Playground AI offers an easy-to-use interface with templates and styles that make creating professional images simple.",
    personalizedPrompt:
      "Generate social media graphics, create website banners, design product images, and produce marketing visuals using professional templates.",
    regions: ["Global"],
    link: "https://playgroundai.com",
  },
  {
    id: 23,
    name: "Artbreeder",
    category: "Image Generation & Design",
    description: "Collaborative AI image creation platform",
    pricing: "Free tier available, paid plans from $8.99/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Artbreeder lets you blend and evolve images to create unique visuals, perfect for exploring different design concepts.",
    personalizedPrompt:
      "Create unique character designs, explore different visual styles for your brand, generate landscape and background images, and develop creative concepts.",
    regions: ["Global"],
    link: "https://www.artbreeder.com",
  },
  {
    id: 24,
    name: "NightCafe",
    category: "Image Generation & Design",
    description: "AI art generator with multiple algorithms",
    pricing: "Free tier available, paid plans from $5.99/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "NightCafe offers various AI art styles and algorithms, making it easy to create different types of artistic images.",
    personalizedPrompt:
      "Create artistic social media content, design unique brand visuals, generate creative illustrations, and produce eye-catching marketing graphics.",
    regions: ["Global"],
    link: "https://nightcafe.studio",
  },
  {
    id: 25,
    name: "RunwayML",
    category: "Image Generation & Design",
    description: "AI-powered creative tools for image and video",
    pricing: "Free tier available, Pro at $12/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "RunwayML offers various AI tools for creative projects, including image generation, editing, and enhancement.",
    personalizedPrompt:
      "Edit and enhance product photos, create artistic visuals, generate unique graphics, and develop creative marketing content.",
    regions: ["Global"],
    link: "https://runwayml.com",
  },
  {
    id: 26,
    name: "Krita AI",
    category: "Image Generation & Design",
    description: "AI-powered digital painting and design software",
    pricing: "Free (open source)",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Krita AI combines traditional digital art tools with AI assistance for creating custom illustrations and designs.",
    personalizedPrompt:
      "Create custom illustrations for your brand, design unique graphics, develop artistic content, and produce original visual assets.",
    regions: ["Global"],
    link: "https://krita.org",
  },
  {
    id: 27,
    name: "Photosonic",
    category: "Image Generation & Design",
    description: "AI image generator by Writesonic",
    pricing: "Starting at $10/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Photosonic creates realistic images from text descriptions, perfect for marketing and social media content.",
    personalizedPrompt:
      "Generate product images, create social media graphics, design website visuals, and produce marketing materials.",
    regions: ["Global"],
    link: "https://photosonic.writesonic.com",
  },
  {
    id: 28,
    name: "Dream by WOMBO",
    category: "Image Generation & Design",
    description: "Mobile-first AI art generator",
    pricing: "Free with premium features",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Dream creates artistic images from text prompts, designed for easy mobile use and social media sharing.",
    personalizedPrompt:
      "Create artistic social media posts, generate unique visual content, design creative graphics, and produce eye-catching visuals.",
    regions: ["Global"],
    link: "https://dream.ai",
  },
  {
    id: 29,
    name: "StarryAI",
    category: "Image Generation & Design",
    description: "AI art generator with style customization",
    pricing: "Free tier available, Pro at $11.99/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "StarryAI creates artistic images with customizable styles, perfect for creating unique brand visuals.",
    personalizedPrompt:
      "Generate artistic brand imagery, create unique social media content, design creative visuals, and produce stylized marketing graphics.",
    regions: ["Global"],
    link: "https://starryai.com",
  },
  {
    id: 30,
    name: "Craiyon",
    category: "Image Generation & Design",
    description: "Free AI image generator (formerly DALL-E mini)",
    pricing: "Free with ads, Pro at $5/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Craiyon is a free AI image generator that creates simple images from text descriptions, great for quick concepts.",
    personalizedPrompt:
      "Generate quick visual concepts, create simple graphics for social media, produce basic marketing visuals, and explore design ideas.",
    regions: ["Global"],
    link: "https://www.craiyon.com",
  },

  // Video & Avatar Creation (35+ tools)
  {
    id: 31,
    name: "Synthesia",
    category: "Video & Avatar Creation",
    description: "AI video generator with realistic avatars",
    pricing: "Starting at $30/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Synthesia creates professional videos with AI avatars that speak your script, perfect for training and marketing videos.",
    personalizedPrompt:
      "Create product demo videos, develop training content, produce multilingual marketing videos, and generate professional presentations without being on camera.",
    regions: ["Global"],
    tags: ["trending"],
    link: "https://www.synthesia.io",
  },
  {
    id: 32,
    name: "Loom AI",
    category: "Video & Avatar Creation",
    description: "Screen recording with AI-powered editing and summaries",
    pricing: "Free tier available, Business at $8/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Loom AI helps record your screen and automatically creates summaries and highlights from your videos.",
    personalizedPrompt:
      "Record product tutorials, create training videos, produce client updates, and generate educational content that showcases your expertise.",
    regions: ["Global"],
    tags: ["startup-fav"],
    link: "https://www.loom.com",
  },
  {
    id: 33,
    name: "Pictory",
    category: "Video & Avatar Creation",
    description: "AI video creation from text and blog posts",
    pricing: "Starting at $19/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Pictory turns your written content into engaging videos automatically, perfect for social media and marketing.",
    personalizedPrompt:
      "Transform blog posts into videos, create social media content, produce educational videos, and generate promotional materials from your writing.",
    regions: ["Global"],
    link: "https://pictory.ai",
  },
  {
    id: 34,
    name: "InVideo AI",
    category: "Video & Avatar Creation",
    description: "AI-powered video creation platform",
    pricing: "Free tier available, Business at $15/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "InVideo AI helps create professional videos using templates and AI assistance for social media and marketing.",
    personalizedPrompt:
      "Create engaging social media videos, produce marketing content, develop educational videos, and generate promotional materials.",
    regions: ["Global"],
    link: "https://invideo.io",
  },
  {
    id: 35,
    name: "Fliki",
    category: "Video & Avatar Creation",
    description: "Text-to-video AI with realistic voices",
    pricing: "Free tier available, paid plans from $21/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Fliki converts your text into videos with AI voices and visuals, perfect for creating content without recording.",
    personalizedPrompt:
      "Create voice-over videos for your products, produce educational content, generate social media videos, and develop marketing presentations.",
    regions: ["Global"],
    link: "https://fliki.ai",
  },
  {
    id: 36,
    name: "Descript",
    category: "Video & Avatar Creation",
    description: "AI-powered video and audio editing",
    pricing: "Free tier available, Creator at $12/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Descript lets you edit videos by editing text transcripts, making video editing as easy as word processing.",
    personalizedPrompt:
      "Edit podcast episodes and video content, create professional presentations, remove filler words from recordings, and produce polished marketing videos.",
    regions: ["Global"],
    tags: ["creator-pick"],
    link: "https://www.descript.com",
  },
  {
    id: 37,
    name: "Vidyo AI",
    category: "Video & Avatar Creation",
    description: "AI video repurposing for social media",
    pricing: "Starting at $29.99/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Vidyo AI automatically creates short video clips from long-form content for social media platforms.",
    personalizedPrompt:
      "Repurpose webinar content for social media, create highlight reels from long videos, generate clips for different platforms, and maximize your video content reach.",
    regions: ["Global"],
    link: "https://vidyo.ai",
  },
  {
    id: 38,
    name: "Clipchamp",
    category: "Video & Avatar Creation",
    description: "Microsoft's AI-enhanced video editor",
    pricing: "Free tier available, Premium features with Microsoft 365",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Clipchamp offers easy video editing with AI features like automatic captions and smart templates.",
    personalizedPrompt:
      "Create professional marketing videos, add captions to your content automatically, produce social media videos, and develop training materials.",
    regions: ["Global"],
    link: "https://clipchamp.com",
  },
  {
    id: 39,
    name: "Kapwing AI",
    category: "Video & Avatar Creation",
    description: "Collaborative video editing with AI features",
    pricing: "Free tier available, Pro at $16/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Kapwing AI makes video editing simple with smart tools for resizing, captioning, and enhancing videos.",
    personalizedPrompt:
      "Create videos for different social media platforms, add automatic subtitles, resize content for various formats, and collaborate on video projects.",
    regions: ["Global"],
    link: "https://www.kapwing.com",
  },
  {
    id: 40,
    name: "Wondershare Filmora",
    category: "Video & Avatar Creation",
    description: "Video editor with AI-powered features",
    pricing: "Starting at $49.99/year",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Filmora combines traditional video editing with AI features like smart cutouts, audio enhancement, and effects.",
    personalizedPrompt:
      "Edit professional marketing videos, create product demonstrations, develop training content, and produce high-quality promotional materials.",
    regions: ["Global"],
    link: "https://filmora.wondershare.com",
  },

  // Social Media & Marketing (40+ tools)
  {
    id: 41,
    name: "Hootsuite Insights",
    category: "Social Media & Marketing",
    description: "AI-powered social media analytics and scheduling",
    pricing: "Starting at $99/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Hootsuite Insights uses AI to analyze your social media performance and suggest optimal posting strategies.",
    personalizedPrompt:
      "Optimize your social media posting schedule, analyze audience engagement, track competitor performance, and identify trending topics in your industry.",
    regions: ["Global"],
    link: "https://www.hootsuite.com",
  },
  {
    id: 42,
    name: "Buffer AI Assistant",
    category: "Social Media & Marketing",
    description: "AI-powered social media content creation and scheduling",
    pricing: "Starting at $6/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Buffer's AI Assistant helps create social media posts and suggests optimal posting times for maximum engagement.",
    personalizedPrompt:
      "Generate engaging social media captions, schedule posts for maximum reach, create content calendars, and develop social media strategies.",
    regions: ["Global"],
    tags: ["startup-fav"],
    link: "https://buffer.com",
  },
  {
    id: 43,
    name: "Later AI",
    category: "Social Media & Marketing",
    description: "AI-enhanced social media scheduling and content planning",
    pricing: "Free tier available, Starter at $18/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Later AI helps plan and schedule social media content with smart suggestions for timing and content optimization.",
    personalizedPrompt:
      "Plan your content calendar, schedule posts across platforms, analyze optimal posting times, and maintain consistent brand messaging.",
    regions: ["Global"],
    link: "https://later.com",
  },
  {
    id: 44,
    name: "Sprout Social AI",
    category: "Social Media & Marketing",
    description: "AI-enhanced social media management and analytics",
    pricing: "Starting at $249/month",
    skillLevel: "Expert",
    beginnerExplanation:
      "Sprout Social AI provides comprehensive social media management with advanced analytics and audience insights.",
    personalizedPrompt:
      "Manage multiple social accounts, analyze audience sentiment, identify industry influencers, and create data-driven social strategies.",
    regions: ["Global"],
    link: "https://sproutsocial.com",
  },
  {
    id: 45,
    name: "SocialBee AI",
    category: "Social Media & Marketing",
    description: "AI-powered social media content categorization and scheduling",
    pricing: "Starting at $19/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "SocialBee AI helps organize and schedule your social media content automatically with smart categorization.",
    personalizedPrompt:
      "Organize content into categories, maintain posting schedules, balance different content types, and ensure consistent brand voice.",
    regions: ["Global"],
    link: "https://socialbee.io",
  },
  {
    id: 46,
    name: "Lately AI",
    category: "Social Media & Marketing",
    description: "AI that transforms long-form content into social media posts",
    pricing: "Starting at $19/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Lately AI takes your blog posts, videos, or podcasts and automatically creates dozens of social media posts from them.",
    personalizedPrompt:
      "Transform blog content into social media posts, repurpose video content across platforms, create consistent messaging, and maximize content reach.",
    regions: ["Global"],
    link: "https://www.lately.ai",
  },
  {
    id: 47,
    name: "Predis AI",
    category: "Social Media & Marketing",
    description: "AI social media content generator",
    pricing: "Free tier available, Pro at $32/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Predis AI creates complete social media posts including text, hashtags, and images based on your business needs.",
    personalizedPrompt:
      "Generate complete social media posts, create platform-specific content, develop hashtag strategies, and maintain consistent posting.",
    regions: ["Global"],
    link: "https://predis.ai",
  },
  {
    id: 48,
    name: "Ocoya",
    category: "Social Media & Marketing",
    description: "AI-powered social media management with content creation",
    pricing: "Free tier available, Pro at $15/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Ocoya combines AI content creation with social media scheduling and analytics in one platform.",
    personalizedPrompt:
      "Create and schedule social media content, generate graphics and captions, analyze performance, and manage multiple accounts.",
    regions: ["Global"],
    link: "https://www.ocoya.com",
  },
  {
    id: 49,
    name: "Simplified AI",
    category: "Social Media & Marketing",
    description: "All-in-one AI marketing platform",
    pricing: "Free tier available, Pro at $12/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Simplified AI offers design, writing, and social media tools in one platform for complete marketing workflows.",
    personalizedPrompt:
      "Create complete marketing campaigns, design graphics and write copy, schedule social media content, and manage brand assets.",
    regions: ["Global"],
    link: "https://simplified.com",
  },
  {
    id: 50,
    name: "ContentStudio",
    category: "Social Media & Marketing",
    description: "Social media management with AI content discovery",
    pricing: "Starting at $25/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "ContentStudio uses AI to discover trending content and helps you create and schedule social media posts.",
    personalizedPrompt:
      "Discover trending content in your industry, create engaging posts, schedule across platforms, and analyze competitor strategies.",
    regions: ["Global"],
    link: "https://contentstudio.io",
  },

  // Customer Service & Support (25+ tools)
  {
    id: 51,
    name: "Intercom AI",
    category: "Customer Service & Support",
    description: "AI-powered customer support and chatbot platform",
    pricing: "Starting at $39/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Intercom AI provides smart chatbots that answer customer questions automatically and escalate complex issues to you.",
    personalizedPrompt:
      "Set up automated customer support, provide 24/7 assistance, qualify leads automatically, and create personalized customer experiences.",
    regions: ["Global"],
    link: "https://www.intercom.com",
  },
  {
    id: 52,
    name: "Zendesk AI",
    category: "Customer Service & Support",
    description: "AI-enhanced customer service platform",
    pricing: "Starting at $19/month per agent",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Zendesk AI helps manage customer support tickets efficiently with automatic categorization and suggested responses.",
    personalizedPrompt:
      "Streamline customer support, automatically categorize issues, provide response suggestions, and track customer satisfaction.",
    regions: ["Global"],
    link: "https://www.zendesk.com",
  },
  {
    id: 53,
    name: "Drift AI",
    category: "Customer Service & Support",
    description: "Conversational AI for sales and customer support",
    pricing: "Starting at $50/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Drift AI creates conversational experiences that qualify leads and provide instant customer support on your website.",
    personalizedPrompt:
      "Qualify website visitors, provide instant product information, schedule meetings automatically, and capture leads 24/7.",
    regions: ["Global"],
    link: "https://www.drift.com",
  },
  {
    id: 54,
    name: "Freshworks AI",
    category: "Customer Service & Support",
    description: "AI-powered CRM and customer support suite",
    pricing: "Starting at $15/month per user",
    skillLevel: "Beginner",
    beginnerExplanation: "Freshworks AI combines customer relationship management with intelligent support tools.",
    personalizedPrompt:
      "Manage customer relationships, predict customer needs, automate follow-ups, and provide personalized service.",
    regions: ["Global"],
    link: "https://www.freshworks.com",
  },
  {
    id: 55,
    name: "Ada AI",
    category: "Customer Service & Support",
    description: "No-code AI chatbot platform",
    pricing: "Custom pricing",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Ada AI lets you create smart chatbots without coding to handle customer inquiries and support.",
    personalizedPrompt:
      "Create chatbots for common questions, process simple orders, provide product recommendations, and offer multilingual support.",
    regions: ["Global"],
    link: "https://www.ada.cx",
  },
  {
    id: 56,
    name: "Tidio AI",
    category: "Customer Service & Support",
    description: "Live chat with AI chatbot integration",
    pricing: "Free tier available, Communicator at $39/month",
    skillLevel: "Beginner",
    beginnerExplanation: "Tidio AI combines live chat with automated chatbots to provide seamless customer support.",
    personalizedPrompt:
      "Provide instant customer responses, handle inquiries outside business hours, qualify leads, and improve customer satisfaction.",
    regions: ["Global"],
    link: "https://www.tidio.com",
  },
  {
    id: 57,
    name: "LiveChat AI",
    category: "Customer Service & Support",
    description: "Customer service platform with AI assistance",
    pricing: "Starting at $20/month per agent",
    skillLevel: "Beginner",
    beginnerExplanation:
      "LiveChat AI helps provide better customer service with intelligent chat routing and response suggestions.",
    personalizedPrompt:
      "Improve customer service efficiency, route chats to the right person, suggest helpful responses, and track customer interactions.",
    regions: ["Global"],
    link: "https://www.livechat.com",
  },
  {
    id: 58,
    name: "Chatfuel",
    category: "Customer Service & Support",
    description: "AI chatbot platform for Facebook Messenger",
    pricing: "Free tier available, Pro at $15/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Chatfuel creates AI chatbots for Facebook Messenger to automate customer interactions and support.",
    personalizedPrompt:
      "Automate Facebook customer service, provide instant responses to common questions, collect leads, and engage with your audience.",
    regions: ["Global"],
    link: "https://chatfuel.com",
  },
  {
    id: 59,
    name: "ManyChat",
    category: "Customer Service & Support",
    description: "Marketing automation and chatbot platform",
    pricing: "Free tier available, Pro at $15/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "ManyChat creates chatbots for marketing automation and customer service across multiple messaging platforms.",
    personalizedPrompt:
      "Automate customer interactions, create marketing sequences, qualify leads, and provide instant customer support.",
    regions: ["Global"],
    link: "https://manychat.com",
  },
  {
    id: 60,
    name: "Crisp AI",
    category: "Customer Service & Support",
    description: "Customer messaging platform with AI features",
    pricing: "Free tier available, Pro at $25/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Crisp AI offers customer messaging with smart features like automatic translation and intelligent routing.",
    personalizedPrompt:
      "Manage customer communications, provide multilingual support, automate common responses, and track customer satisfaction.",
    regions: ["Global"],
    link: "https://crisp.chat",
  },

  // E-commerce & Sales (30+ tools)
  {
    id: 61,
    name: "Shopify AI",
    category: "E-commerce & Sales",
    description: "AI-powered e-commerce tools integrated into Shopify",
    pricing: "Included with Shopify plans starting at $29/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Shopify AI helps optimize your online store with smart product recommendations and inventory management.",
    personalizedPrompt:
      "Optimize product listings, create personalized shopping experiences, manage inventory efficiently, and increase sales through AI recommendations.",
    regions: ["Global"],
    tags: ["our-top-pick", "startup-fav"],
    link: "https://www.shopify.com",
  },
  {
    id: 62,
    name: "Dynamic Yield",
    category: "E-commerce & Sales",
    description: "AI-powered personalization platform for e-commerce",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Dynamic Yield personalizes the shopping experience for each customer to increase sales and satisfaction.",
    personalizedPrompt:
      "Create personalized shopping experiences, show relevant products to visitors, optimize website layouts, and test different approaches.",
    regions: ["Global"],
    link: "https://www.dynamicyield.com",
  },
  {
    id: 63,
    name: "Klaviyo AI",
    category: "E-commerce & Sales",
    description: "AI-enhanced email marketing for e-commerce",
    pricing: "Free tier available, paid plans start at $20/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Klaviyo AI creates personalized email campaigns that drive sales by analyzing customer behavior.",
    personalizedPrompt:
      "Send personalized product recommendations, create automated email sequences, re-engage inactive customers, and optimize email timing.",
    regions: ["Global"],
    link: "https://www.klaviyo.com",
  },
  {
    id: 64,
    name: "Yotpo AI",
    category: "E-commerce & Sales",
    description: "AI-powered customer reviews and loyalty platform",
    pricing: "Free tier available, paid plans start at $19/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Yotpo AI helps collect customer reviews and creates loyalty programs that encourage repeat purchases.",
    personalizedPrompt:
      "Encourage customer reviews, create loyalty programs, identify valuable customers, and use social proof to increase sales.",
    regions: ["Global"],
    link: "https://www.yotpo.com",
  },
  {
    id: 65,
    name: "Salesforce Einstein",
    category: "E-commerce & Sales",
    description: "AI-powered CRM and sales automation",
    pricing: "Starting at $25/month per user",
    skillLevel: "Expert",
    beginnerExplanation:
      "Salesforce Einstein adds AI capabilities to customer relationship management and sales processes.",
    personalizedPrompt:
      "Predict customer behavior, automate follow-up communications, identify sales opportunities, and optimize your sales process.",
    regions: ["Global"],
    link: "https://www.salesforce.com/products/einstein",
  },
  {
    id: 66,
    name: "WooCommerce AI",
    category: "E-commerce & Sales",
    description: "AI plugins and tools for WooCommerce stores",
    pricing: "Free and premium plugins vary",
    skillLevel: "Intermediate",
    beginnerExplanation: "Various AI tools and plugins that enhance WooCommerce stores with intelligent features.",
    personalizedPrompt:
      "Optimize your WordPress e-commerce store, automate product recommendations, improve search functionality, and enhance customer experience.",
    regions: ["Global"],
    link: "https://woocommerce.com",
  },
  {
    id: 67,
    name: "BigCommerce AI",
    category: "E-commerce & Sales",
    description: "AI-powered features for BigCommerce stores",
    pricing: "Starting at $39/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "BigCommerce AI helps optimize your online store with intelligent product recommendations and search.",
    personalizedPrompt:
      "Enhance your online store, improve product discovery, personalize customer experiences, and increase conversion rates.",
    regions: ["Global"],
    link: "https://www.bigcommerce.com",
  },
  {
    id: 68,
    name: "Magento AI",
    category: "E-commerce & Sales",
    description: "AI extensions for Magento e-commerce platform",
    pricing: "Various pricing for extensions",
    skillLevel: "Expert",
    beginnerExplanation: "AI-powered extensions and tools that add intelligent features to Magento e-commerce stores.",
    personalizedPrompt:
      "Enhance your Magento store with AI features, improve product recommendations, optimize search, and personalize customer experiences.",
    regions: ["Global"],
    link: "https://magento.com",
  },
  {
    id: 69,
    name: "Gorgias AI",
    category: "E-commerce & Sales",
    description: "AI-powered customer service for e-commerce",
    pricing: "Starting at $60/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Gorgias AI provides intelligent customer service specifically designed for e-commerce businesses.",
    personalizedPrompt:
      "Automate customer service responses, handle order inquiries, process returns efficiently, and improve customer satisfaction.",
    regions: ["Global"],
    link: "https://www.gorgias.com",
  },
  {
    id: 70,
    name: "Rebuy AI",
    category: "E-commerce & Sales",
    description: "AI-powered personalization for Shopify stores",
    pricing: "Starting at $99/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Rebuy AI creates personalized shopping experiences and smart product recommendations for Shopify stores.",
    personalizedPrompt:
      "Increase average order value, create personalized product recommendations, optimize checkout process, and improve customer retention.",
    regions: ["Global"],
    link: "https://rebuyengine.com",
  },

  // Automation & Productivity (45+ tools)
  {
    id: 71,
    name: "Zapier AI",
    category: "Automation & Productivity",
    description: "AI-enhanced workflow automation platform",
    pricing: "Free tier available, paid plans start at $19.99/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Zapier AI connects your business apps and automates repetitive tasks to save you hours of manual work.",
    personalizedPrompt:
      "Automate data entry between apps, set up automatic notifications, create lead nurturing workflows, and eliminate repetitive tasks.",
    regions: ["Global"],
    tags: ["our-top-pick"],
    link: "https://zapier.com",
  },
  {
    id: 72,
    name: "Monday.com AI",
    category: "Automation & Productivity",
    description: "AI-powered project management platform",
    pricing: "Starting at $8/month per user",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Monday.com AI helps manage projects efficiently with smart predictions and automated updates.",
    personalizedPrompt:
      "Organize business projects, track team productivity, automate status updates, and predict potential delays.",
    regions: ["Global"],
    link: "https://monday.com",
  },
  {
    id: 73,
    name: "Asana AI",
    category: "Automation & Productivity",
    description: "AI-enhanced project management and team collaboration",
    pricing: "Free tier available, paid plans start at $10.99/month per user",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Asana AI helps manage projects and collaborate with teams using intelligent task suggestions and automation.",
    personalizedPrompt:
      "Coordinate projects with team members, track business goals, automate task assignments, and ensure project completion.",
    regions: ["Global"],
    link: "https://asana.com",
  },
  {
    id: 74,
    name: "Trello AI",
    category: "Automation & Productivity",
    description: "AI-powered features for visual project management",
    pricing: "Free tier available, paid plans start at $5/month per user",
    skillLevel: "Beginner",
    beginnerExplanation: "Trello AI adds smart features to Trello's simple card-based project management system.",
    personalizedPrompt:
      "Organize business tasks visually, track project progress, automate routine management tasks, and maintain clear visibility.",
    regions: ["Global"],
    link: "https://trello.com",
  },
  {
    id: 75,
    name: "ClickUp AI",
    category: "Automation & Productivity",
    description: "All-in-one productivity platform with AI features",
    pricing: "Free tier available, paid plans start at $7/month per user",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "ClickUp AI combines project management, document creation, and workflow automation with intelligent assistance.",
    personalizedPrompt:
      "Manage all business operations in one place, automate workflows, create documents with AI assistance, and track team performance.",
    regions: ["Global"],
    link: "https://clickup.com",
  },
  {
    id: 76,
    name: "Todoist AI",
    category: "Automation & Productivity",
    description: "AI-powered task management and scheduling",
    pricing: "Free tier available, Pro at $4/month",
    skillLevel: "Beginner",
    beginnerExplanation: "Todoist AI helps organize tasks and suggests optimal scheduling for better productivity.",
    personalizedPrompt:
      "Organize daily tasks efficiently, set smart reminders, prioritize important work, and maintain work-life balance.",
    regions: ["Global"],
    link: "https://todoist.com",
  },
  {
    id: 77,
    name: "Microsoft Copilot",
    category: "Automation & Productivity",
    description: "AI assistant integrated across Microsoft 365",
    pricing: "Starting at $30/month per user",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Microsoft Copilot adds AI assistance to Word, Excel, PowerPoint, and other Microsoft Office applications.",
    personalizedPrompt:
      "Create professional documents, analyze business data, generate presentations, and automate office tasks across Microsoft apps.",
    regions: ["Global"],
    link: "https://copilot.microsoft.com",
  },
  {
    id: 78,
    name: "Google Workspace AI",
    category: "Automation & Productivity",
    description: "AI features integrated into Google Workspace",
    pricing: "Starting at $6/month per user",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Google Workspace AI adds intelligent features to Gmail, Docs, Sheets, and other Google productivity tools.",
    personalizedPrompt:
      "Enhance email communication, create professional documents, analyze business data, and collaborate more effectively.",
    regions: ["Global"],
    link: "https://workspace.google.com",
  },
  {
    id: 79,
    name: "Calendly AI",
    category: "Automation & Productivity",
    description: "AI-enhanced scheduling and calendar management",
    pricing: "Free tier available, paid plans start at $8/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Calendly AI optimizes meeting scheduling and provides intelligent calendar management features.",
    personalizedPrompt:
      "Automate meeting scheduling, optimize your calendar, reduce scheduling conflicts, and improve client booking experience.",
    regions: ["Global"],
    link: "https://calendly.com",
  },
  {
    id: 80,
    name: "Airtable AI",
    category: "Automation & Productivity",
    description: "AI-powered database and workflow platform",
    pricing: "Free tier available, paid plans start at $20/month per user",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Airtable AI combines spreadsheet simplicity with database power, enhanced by artificial intelligence.",
    personalizedPrompt:
      "Organize business data efficiently, automate workflows, track customer information, and create intelligent databases.",
    regions: ["Global"],
    link: "https://airtable.com",
  },

  // Analytics & Data (20+ tools)
  {
    id: 81,
    name: "Google Analytics AI",
    category: "Analytics & Data",
    description: "AI-powered insights for website and business analytics",
    pricing: "Free tier available, Google Analytics 360 starts at $150k/year",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Google Analytics AI provides smart insights about website visitors and predicts customer behavior.",
    personalizedPrompt:
      "Understand customer behavior on your website, identify successful marketing channels, predict future trends, and optimize your online presence.",
    regions: ["Global"],
    tags: ["our-top-pick"],
    link: "https://analytics.google.com",
  },
  {
    id: 82,
    name: "Tableau AI",
    category: "Analytics & Data",
    description: "AI-enhanced data visualization and business intelligence",
    pricing: "Starting at $70/month per user",
    skillLevel: "Expert",
    beginnerExplanation:
      "Tableau AI helps create visual reports and dashboards that automatically identify important patterns in your data.",
    personalizedPrompt:
      "Create visual business dashboards, identify customer behavior patterns, present data insights to stakeholders, and make data-driven decisions.",
    regions: ["Global"],
    link: "https://www.tableau.com",
  },
  {
    id: 83,
    name: "Power BI AI",
    category: "Analytics & Data",
    description: "Microsoft's AI-powered business intelligence platform",
    pricing: "Starting at $10/month per user",
    skillLevel: "Intermediate",
    beginnerExplanation: "Power BI AI analyzes business data and creates automated reports with intelligent insights.",
    personalizedPrompt:
      "Analyze sales and customer data, create automated business reports, identify growth opportunities, and track key performance metrics.",
    regions: ["Global"],
    link: "https://powerbi.microsoft.com",
  },
  {
    id: 84,
    name: "Mixpanel AI",
    category: "Analytics & Data",
    description: "AI-powered product analytics and user behavior tracking",
    pricing: "Free tier available, paid plans start at $25/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Mixpanel AI tracks how customers use your product and provides insights about user behavior and engagement.",
    personalizedPrompt:
      "Track customer interactions with your product, identify features that drive engagement, understand user journey patterns, and optimize user experience.",
    regions: ["Global"],
    link: "https://mixpanel.com",
  },
  {
    id: 85,
    name: "Amplitude AI",
    category: "Analytics & Data",
    description: "AI-driven product analytics and customer journey analysis",
    pricing: "Free tier available, paid plans start at $61/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Amplitude AI analyzes the complete customer journey and predicts which customers might stop using your service.",
    personalizedPrompt:
      "Understand complete customer journeys, predict customer churn, identify opportunities to increase customer value, and optimize product engagement.",
    regions: ["Global"],
    link: "https://amplitude.com",
  },
  {
    id: 86,
    name: "Hotjar AI",
    category: "Analytics & Data",
    description: "AI-enhanced website behavior analytics and user feedback",
    pricing: "Free tier available, paid plans start at $32/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Hotjar AI shows you how visitors interact with your website through heatmaps, recordings, and intelligent insights.",
    personalizedPrompt:
      "Understand how visitors use your website, identify areas for improvement, optimize user experience, and increase conversion rates.",
    regions: ["Global"],
    link: "https://www.hotjar.com",
  },
  {
    id: 87,
    name: "Segment AI",
    category: "Analytics & Data",
    description: "AI-powered customer data platform",
    pricing: "Free tier available, Team at $120/month",
    skillLevel: "Expert",
    beginnerExplanation:
      "Segment AI collects and organizes customer data from all your business tools to provide unified customer insights.",
    personalizedPrompt:
      "Unify customer data from all sources, create comprehensive customer profiles, personalize experiences, and improve marketing effectiveness.",
    regions: ["Global"],
    link: "https://segment.com",
  },
  {
    id: 88,
    name: "Crazy Egg",
    category: "Analytics & Data",
    description: "AI-enhanced website optimization and heatmap analysis",
    pricing: "Starting at $24/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Crazy Egg uses AI to analyze website visitor behavior and suggest improvements for better conversions.",
    personalizedPrompt:
      "Optimize your website layout, improve user experience, increase conversion rates, and understand visitor behavior patterns.",
    regions: ["Global"],
    link: "https://www.crazyegg.com",
  },
  {
    id: 89,
    name: "Heap Analytics",
    category: "Analytics & Data",
    description: "Automated analytics with AI-powered insights",
    pricing: "Free tier available, Growth at $3,600/year",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Heap automatically captures all user interactions and uses AI to provide insights without manual tracking setup.",
    personalizedPrompt:
      "Automatically track all customer interactions, discover optimization opportunities, understand user behavior, and improve product performance.",
    regions: ["Global"],
    link: "https://heap.io",
  },
  {
    id: 90,
    name: "Kissmetrics",
    category: "Analytics & Data",
    description: "AI-powered customer analytics and behavioral tracking",
    pricing: "Starting at $500/month",
    skillLevel: "Expert",
    beginnerExplanation:
      "Kissmetrics focuses on individual customer behavior and uses AI to predict customer lifetime value and churn.",
    personalizedPrompt:
      "Track individual customer behavior, predict customer lifetime value, identify at-risk customers, and optimize retention strategies.",
    regions: ["Global"],
    link: "https://www.kissmetrics.io",
  },

  // Email Marketing (15+ tools)
  {
    id: 91,
    name: "Mailchimp AI",
    category: "Email Marketing",
    description: "AI-powered email marketing with smart recommendations",
    pricing: "Free tier available, paid plans start at $10/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Mailchimp AI helps create effective email campaigns with smart subject lines, timing, and content suggestions.",
    personalizedPrompt:
      "Create engaging email campaigns, automate welcome sequences, segment your audience for personalized messaging, and optimize send times.",
    regions: ["Global"],
    tags: ["startup-fav"],
    link: "https://mailchimp.com",
  },
  {
    id: 92,
    name: "ConvertKit AI",
    category: "Email Marketing",
    description: "AI-enhanced email marketing for creators and entrepreneurs",
    pricing: "Free tier available, paid plans start at $29/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "ConvertKit AI is designed for creators and entrepreneurs, helping build email lists and nurture audience relationships.",
    personalizedPrompt:
      "Build an email list of potential customers, create automated email sequences, segment subscribers by interests, and develop email content that builds trust.",
    regions: ["Global"],
    link: "https://convertkit.com",
  },
  {
    id: 93,
    name: "ActiveCampaign AI",
    category: "Email Marketing",
    description: "AI-powered email marketing automation and CRM",
    pricing: "Starting at $29/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "ActiveCampaign AI combines email marketing with customer relationship management using intelligent automation.",
    personalizedPrompt:
      "Create sophisticated email automation, score leads based on engagement, personalize email content for different segments, and integrate email with sales processes.",
    regions: ["Global"],
    link: "https://www.activecampaign.com",
  },
  {
    id: 94,
    name: "GetResponse AI",
    category: "Email Marketing",
    description: "AI-enhanced email marketing with automation and landing pages",
    pricing: "Starting at $15/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "GetResponse AI provides email marketing tools with smart automation and landing page creation features.",
    personalizedPrompt:
      "Create high-converting landing pages, automate email follow-up sequences, segment audience for targeted messaging, and track email performance.",
    regions: ["Global"],
    link: "https://www.getresponse.com",
  },
  {
    id: 95,
    name: "Constant Contact AI",
    category: "Email Marketing",
    description: "AI-powered email marketing for small businesses",
    pricing: "Starting at $20/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Constant Contact AI is designed for small businesses with easy-to-use email marketing tools and AI assistance.",
    personalizedPrompt:
      "Design professional emails that reflect your brand, grow your email list through website integration, create automated welcome series, and track email engagement.",
    regions: ["Global"],
    link: "https://www.constantcontact.com",
  },
  {
    id: 96,
    name: "Campaign Monitor",
    category: "Email Marketing",
    description: "AI-enhanced email marketing platform",
    pricing: "Starting at $9/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Campaign Monitor offers beautiful email templates and AI-powered optimization features for better email marketing results.",
    personalizedPrompt:
      "Create visually appealing email campaigns, automate customer journeys, personalize content based on subscriber behavior, and optimize for better engagement.",
    regions: ["Global"],
    link: "https://www.campaignmonitor.com",
  },
  {
    id: 97,
    name: "Sendinblue (Brevo)",
    category: "Email Marketing",
    description: "AI-powered email marketing and automation platform",
    pricing: "Free tier available, Lite at $25/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Sendinblue (now Brevo) combines email marketing with SMS and chat features, enhanced by AI automation.",
    personalizedPrompt:
      "Create multi-channel marketing campaigns, automate customer communications, personalize messages across email and SMS, and track customer engagement.",
    regions: ["Global"],
    link: "https://www.brevo.com",
  },
  {
    id: 98,
    name: "AWeber AI",
    category: "Email Marketing",
    description: "AI-enhanced email marketing automation",
    pricing: "Free tier available, Pro at $19/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "AWeber AI helps small businesses create effective email campaigns with intelligent automation and optimization.",
    personalizedPrompt:
      "Build email lists effectively, create automated email sequences, design mobile-friendly newsletters, and improve email deliverability.",
    regions: ["Global"],
    link: "https://www.aweber.com",
  },
  {
    id: 99,
    name: "Omnisend",
    category: "Email Marketing",
    description: "AI-powered email and SMS marketing for e-commerce",
    pricing: "Free tier available, Standard at $16/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Omnisend specializes in e-commerce email marketing with AI-powered personalization and automation.",
    personalizedPrompt:
      "Create personalized product recommendations, automate cart abandonment emails, segment customers by purchase behavior, and increase e-commerce sales.",
    regions: ["Global"],
    link: "https://www.omnisend.com",
  },
  {
    id: 100,
    name: "Drip AI",
    category: "Email Marketing",
    description: "AI-powered email marketing automation for e-commerce",
    pricing: "Starting at $39/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Drip AI focuses on e-commerce email marketing with intelligent customer segmentation and automation.",
    personalizedPrompt:
      "Create sophisticated e-commerce email campaigns, predict customer behavior, automate product recommendations, and increase customer lifetime value.",
    regions: ["Global"],
    link: "https://www.drip.com",
  },

  // Website Building (25+ tools)
  {
    id: 101,
    name: "Wix AI",
    category: "Website Building",
    description: "AI website builder that creates sites based on your answers",
    pricing: "Free tier available, paid plans start at $14/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Wix AI creates a complete website for you by asking questions about your business and automatically choosing designs and content.",
    personalizedPrompt:
      "Create a professional website without technical skills, customize design to match your brand, add e-commerce functionality, and optimize for search engines.",
    regions: ["Global"],
    tags: ["startup-fav"],
    link: "https://www.wix.com",
  },
  {
    id: 102,
    name: "Squarespace AI",
    category: "Website Building",
    description: "AI-enhanced website building with design assistance",
    pricing: "Starting at $12/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Squarespace AI helps create beautiful websites with smart design suggestions and content recommendations.",
    personalizedPrompt:
      "Build a stunning portfolio website that showcases your work, create an online store with beautiful product displays, design a professional business website that builds credibility, and optimize your site for mobile users.",
    regions: ["Global"],
    link: "https://www.squarespace.com",
  },
  {
    id: 103,
    name: "WordPress AI",
    category: "Website Building",
    description: "AI-powered plugins and tools for WordPress websites",
    pricing: "Free tier available, premium plugins vary",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "WordPress AI includes various plugins that add smart features to WordPress websites for better performance and user experience.",
    personalizedPrompt:
      "Optimize your WordPress website for search engines, create engaging content automatically, improve website speed and performance, and add intelligent features that enhance user experience.",
    regions: ["Global"],
    link: "https://wordpress.com",
  },
  {
    id: 104,
    name: "Webflow AI",
    category: "Website Building",
    description: "AI-assisted web design and development platform",
    pricing: "Free tier available, paid plans start at $12/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Webflow AI combines visual web design with AI assistance to create custom websites with professional designs.",
    personalizedPrompt:
      "Design custom websites that perfectly match your brand vision, create responsive designs that work on all devices, build complex web applications without coding, and optimize for performance and SEO.",
    regions: ["Global"],
    link: "https://webflow.com",
  },
  {
    id: 105,
    name: "Bookmark AiDA",
    category: "Website Building",
    description: "AI Design Assistant that builds websites automatically",
    pricing: "Starting at $11.99/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Bookmark's AiDA creates websites automatically based on your business type and preferences, handling design, content, and layout.",
    personalizedPrompt:
      "Get a complete website built automatically for your business type, customize colors and content to match your brand, add business features like contact forms, and launch your professional online presence quickly.",
    regions: ["Global"],
    link: "https://www.bookmark.com",
  },
  {
    id: 106,
    name: "10Web AI",
    category: "Website Building",
    description: "AI-powered WordPress website builder and hosting",
    pricing: "Starting at $10/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "10Web AI creates WordPress websites automatically using artificial intelligence and provides optimized hosting.",
    personalizedPrompt:
      "Create a professional WordPress website automatically, optimize for speed and search engines, add e-commerce functionality, and manage your website with AI assistance.",
    regions: ["Global"],
    link: "https://10web.io",
  },
  {
    id: 107,
    name: "Durable AI",
    category: "Website Building",
    description: "AI website builder that creates complete business websites",
    pricing: "Starting at $12/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Durable AI builds complete business websites in minutes, including content, images, and functionality tailored to your business.",
    personalizedPrompt:
      "Generate a complete business website with AI-written content, professional images, contact forms, and booking systems that represent your brand professionally.",
    regions: ["Global"],
    link: "https://durable.co",
  },
  {
    id: 108,
    name: "Hostinger AI Builder",
    category: "Website Building",
    description: "AI-powered website builder with hosting included",
    pricing: "Starting at $2.99/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Hostinger's AI Builder creates websites automatically and includes reliable hosting at affordable prices.",
    personalizedPrompt:
      "Create a professional website quickly and affordably, get reliable hosting included, optimize for mobile devices, and launch your online presence without technical knowledge.",
    regions: ["Global"],
    link: "https://www.hostinger.com",
  },
  {
    id: 109,
    name: "GoDaddy AI",
    category: "Website Building",
    description: "AI website builder with domain and hosting services",
    pricing: "Starting at $9.99/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "GoDaddy's AI builder creates websites automatically and includes domain registration and hosting services.",
    personalizedPrompt:
      "Build a professional website with domain and hosting included, create content that matches your business, add online booking and payment features, and establish your web presence quickly.",
    regions: ["Global"],
    link: "https://www.godaddy.com",
  },
  {
    id: 110,
    name: "Zyro AI",
    category: "Website Building",
    description: "AI-powered website builder with content generation",
    pricing: "Starting at $2.90/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Zyro AI creates websites with AI-generated content, logos, and designs tailored to your business needs.",
    personalizedPrompt:
      "Generate a complete website with AI-written content, create a professional logo automatically, add e-commerce functionality, and launch your business online affordably.",
    regions: ["Global"],
    link: "https://zyro.com",
  },

  // Finance & Accounting (20+ tools)
  {
    id: 111,
    name: "QuickBooks AI",
    category: "Finance & Accounting",
    description: "AI-enhanced accounting software for small businesses",
    pricing: "Starting at $15/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "QuickBooks AI helps manage your business finances with intelligent categorization, expense tracking, and financial insights.",
    personalizedPrompt:
      "Manage business expenses automatically, track income and profits, generate financial reports, and prepare for tax season with intelligent bookkeeping assistance.",
    regions: ["Global"],
    tags: ["startup-fav"],
    link: "https://quickbooks.intuit.com",
  },
  {
    id: 112,
    name: "Xero AI",
    category: "Finance & Accounting",
    description: "AI-powered cloud accounting platform",
    pricing: "Starting at $13/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Xero AI provides cloud-based accounting with intelligent features for expense management, invoicing, and financial reporting.",
    personalizedPrompt:
      "Automate expense categorization, create professional invoices, track business cash flow, and get insights into your financial performance.",
    regions: ["Global"],
    link: "https://www.xero.com",
  },
  {
    id: 113,
    name: "Wave Accounting AI",
    category: "Finance & Accounting",
    description: "Free AI-enhanced accounting software",
    pricing: "Free with paid add-ons",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Wave offers free accounting software with AI features for small businesses and freelancers to manage their finances.",
    personalizedPrompt:
      "Track business income and expenses for free, create professional invoices, manage receipts automatically, and prepare financial reports for your business.",
    regions: ["Global"],
    link: "https://www.waveapps.com",
  },
  {
    id: 114,
    name: "FreshBooks AI",
    category: "Finance & Accounting",
    description: "AI-powered invoicing and accounting for service businesses",
    pricing: "Starting at $15/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "FreshBooks AI specializes in invoicing and time tracking for service-based businesses with intelligent automation.",
    personalizedPrompt:
      "Create professional invoices automatically, track time spent on client projects, manage client relationships, and get paid faster with automated follow-ups.",
    regions: ["Global"],
    link: "https://www.freshbooks.com",
  },
  {
    id: 115,
    name: "Sage AI",
    category: "Finance & Accounting",
    description: "AI-enhanced accounting and business management",
    pricing: "Starting at $25/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Sage AI provides comprehensive accounting and business management tools with intelligent insights and automation.",
    personalizedPrompt:
      "Manage comprehensive business finances, automate accounting processes, generate detailed financial reports, and gain insights into business performance.",
    regions: ["Global"],
    link: "https://www.sage.com",
  },
  {
    id: 116,
    name: "Receipt Bank (Dext)",
    category: "Finance & Accounting",
    description: "AI-powered receipt and expense management",
    pricing: "Starting at $10/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Receipt Bank uses AI to automatically extract data from receipts and invoices, making expense tracking effortless.",
    personalizedPrompt:
      "Automatically capture receipt data, categorize expenses intelligently, integrate with accounting software, and eliminate manual data entry for business expenses.",
    regions: ["Global"],
    link: "https://dext.com",
  },
  {
    id: 117,
    name: "Zoho Books AI",
    category: "Finance & Accounting",
    description: "AI-enhanced online accounting software",
    pricing: "Starting at $10/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Zoho Books AI offers comprehensive online accounting with intelligent automation for small to medium businesses.",
    personalizedPrompt:
      "Automate invoicing and expense tracking, manage inventory and projects, generate financial insights, and integrate with other business tools.",
    regions: ["Global"],
    link: "https://www.zoho.com/books",
  },
  {
    id: 118,
    name: "PlanGuru AI",
    category: "Finance & Accounting",
    description: "AI-powered budgeting and financial planning",
    pricing: "Starting at $99/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "PlanGuru AI helps create detailed budgets and financial forecasts using intelligent modeling and analysis.",
    personalizedPrompt:
      "Create comprehensive business budgets, forecast future financial performance, plan for business growth, and make informed financial decisions.",
    regions: ["Global"],
    link: "https://www.planguru.com",
  },
  {
    id: 119,
    name: "Kashoo AI",
    category: "Finance & Accounting",
    description: "AI-enhanced small business accounting",
    pricing: "Starting at $19.95/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Kashoo AI provides simple accounting software with intelligent features designed specifically for small businesses.",
    personalizedPrompt:
      "Simplify business accounting processes, automatically categorize transactions, create professional financial reports, and track business profitability.",
    regions: ["Global"],
    link: "https://kashoo.com",
  },
  {
    id: 120,
    name: "Billy AI",
    category: "Finance & Accounting",
    description: "AI-powered invoicing and expense management",
    pricing: "Starting at $9/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Billy AI focuses on invoicing and expense management with intelligent automation for small businesses and freelancers.",
    personalizedPrompt:
      "Create professional invoices quickly, track business expenses automatically, manage client payments, and organize financial documents efficiently.",
    regions: ["Global"],
    link: "https://www.billy.dk",
  },

  // Research & Learning (25+ tools)
  {
    id: 121,
    name: "Perplexity AI",
    category: "Research & Learning",
    description: "AI-powered research and question-answering platform",
    pricing: "Free tier available, Pro at $20/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Perplexity AI helps you research topics and get accurate answers with citations to reliable sources.",
    personalizedPrompt:
      "Research industry trends and competitors, find accurate information for business decisions, explore new market opportunities, and stay updated on relevant topics.",
    regions: ["Global"],
    tags: ["trending"],
    link: "https://www.perplexity.ai",
  },
  {
    id: 122,
    name: "Elicit AI",
    category: "Research & Learning",
    description: "AI research assistant for academic and business research",
    pricing: "Free tier available, Plus at $10/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Elicit AI helps conduct thorough research by finding and summarizing relevant papers and studies.",
    personalizedPrompt:
      "Conduct market research for your industry, find evidence-based insights for business strategies, analyze academic research relevant to your field, and summarize complex information.",
    regions: ["Global"],
    link: "https://elicit.org",
  },
  {
    id: 123,
    name: "Semantic Scholar AI",
    category: "Research & Learning",
    description: "AI-powered academic search and research platform",
    pricing: "Free",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Semantic Scholar AI helps find and understand academic research papers with intelligent search and summarization.",
    personalizedPrompt:
      "Find academic research relevant to your business, understand complex studies and trends, access evidence-based insights, and stay informed about innovations in your field.",
    regions: ["Global"],
    link: "https://www.semanticscholar.org",
  },
  {
    id: 124,
    name: "Coursera AI",
    category: "Research & Learning",
    description: "AI-enhanced online learning platform",
    pricing: "Free courses available, paid certificates from $39-79/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Coursera AI provides personalized learning recommendations and AI-enhanced courses to develop business skills.",
    personalizedPrompt:
      "Develop business and entrepreneurship skills, learn about AI and technology trends, get professional certifications, and stay competitive in your industry.",
    regions: ["Global"],
    link: "https://www.coursera.org",
  },
  {
    id: 125,
    name: "Khan Academy AI",
    category: "Research & Learning",
    description: "AI-powered personalized learning platform",
    pricing: "Free",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Khan Academy uses AI to provide personalized learning experiences across various subjects including business and entrepreneurship.",
    personalizedPrompt:
      "Learn fundamental business concepts, develop entrepreneurship skills, understand finance and economics, and build knowledge that supports your business growth.",
    regions: ["Global"],
    link: "https://www.khanacademy.org",
  },
  {
    id: 126,
    name: "Udemy AI",
    category: "Research & Learning",
    description: "AI-enhanced online course marketplace",
    pricing: "Individual courses $10-200, monthly subscription available",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Udemy uses AI to recommend relevant courses and provide personalized learning paths for skill development.",
    personalizedPrompt:
      "Learn specific skills for your business, stay updated on industry trends, develop technical abilities, and invest in your professional growth.",
    regions: ["Global"],
    link: "https://www.udemy.com",
  },
  {
    id: 127,
    name: "Skillshare AI",
    category: "Research & Learning",
    description: "AI-powered creative learning platform",
    pricing: "Free tier available, Premium at $13.75/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Skillshare AI provides personalized recommendations for creative and business skills development.",
    personalizedPrompt:
      "Develop creative skills for your business, learn marketing and branding techniques, improve design abilities, and enhance your entrepreneurial toolkit.",
    regions: ["Global"],
    link: "https://www.skillshare.com",
  },
  {
    id: 128,
    name: "MasterClass AI",
    category: "Research & Learning",
    description: "AI-enhanced premium learning platform",
    pricing: "$180/year",
    skillLevel: "Beginner",
    beginnerExplanation:
      "MasterClass uses AI to recommend courses taught by world-renowned experts in business, creativity, and leadership.",
    personalizedPrompt:
      "Learn from successful entrepreneurs and leaders, develop leadership skills, gain insights from industry experts, and apply proven strategies to your business.",
    regions: ["Global"],
    link: "https://www.masterclass.com",
  },
  {
    id: 129,
    name: "LinkedIn Learning AI",
    category: "Research & Learning",
    description: "AI-powered professional development platform",
    pricing: "$29.99/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "LinkedIn Learning uses AI to recommend professional courses and skills based on your career goals and industry.",
    personalizedPrompt:
      "Develop professional skills relevant to your business, learn about industry trends, network with professionals, and advance your entrepreneurial journey.",
    regions: ["Global"],
    link: "https://www.linkedin.com/learning",
  },
  {
    id: 130,
    name: "Brilliant AI",
    category: "Research & Learning",
    description: "AI-powered STEM learning platform",
    pricing: "Free tier available, Premium at $12.99/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Brilliant AI teaches mathematics, science, and computer science concepts that are valuable for technology-focused businesses.",
    personalizedPrompt:
      "Understand data analysis and statistics for your business, learn about AI and technology concepts, develop analytical thinking skills, and apply mathematical insights to business decisions.",
    regions: ["Global"],
    link: "https://brilliant.org",
  },

  // HR & Recruitment (20+ tools)
  {
    id: 131,
    name: "BambooHR AI",
    category: "HR & Recruitment",
    description: "AI-enhanced human resources management platform",
    pricing: "Starting at $6.19/month per employee",
    skillLevel: "Beginner",
    beginnerExplanation:
      "BambooHR AI helps manage employees with intelligent features for hiring, onboarding, and performance tracking.",
    personalizedPrompt:
      "Streamline employee onboarding, track team performance, manage time off requests, and create a positive workplace culture as your business grows.",
    regions: ["Global"],
    link: "https://www.bamboohr.com",
  },
  {
    id: 132,
    name: "Indeed AI",
    category: "HR & Recruitment",
    description: "AI-powered job posting and candidate matching",
    pricing: "Free job posting, sponsored posts from $5/day",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Indeed AI helps you find the right employees by intelligently matching job postings with qualified candidates.",
    personalizedPrompt:
      "Find qualified employees for your growing business, create compelling job descriptions, screen candidates efficiently, and build a strong team.",
    regions: ["Global"],
    tags: ["our-top-pick"],
    link: "https://www.indeed.com",
  },
  {
    id: 133,
    name: "LinkedIn Recruiter AI",
    category: "HR & Recruitment",
    description: "AI-powered professional networking and recruitment",
    pricing: "Starting at $119.95/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "LinkedIn Recruiter AI uses intelligent search and recommendations to help find and connect with potential employees.",
    personalizedPrompt:
      "Network with potential employees and collaborators, recruit skilled professionals, build your business network, and establish thought leadership in your industry.",
    regions: ["Global"],
    link: "https://www.linkedin.com/talent/recruiter",
  },
  {
    id: 134,
    name: "Workday AI",
    category: "HR & Recruitment",
    description: "AI-powered enterprise HR and finance platform",
    pricing: "Custom pricing for enterprise",
    skillLevel: "Expert",
    beginnerExplanation:
      "Workday AI provides comprehensive HR management with intelligent analytics for larger organizations.",
    personalizedPrompt:
      "Manage enterprise-level HR processes, analyze workforce data, optimize employee performance, and plan for organizational growth.",
    regions: ["Global"],
    link: "https://www.workday.com",
  },
  {
    id: 135,
    name: "Greenhouse AI",
    category: "HR & Recruitment",
    description: "AI-enhanced hiring and recruitment platform",
    pricing: "Starting at $500/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Greenhouse AI streamlines the hiring process with intelligent candidate screening and interview coordination.",
    personalizedPrompt:
      "Optimize your hiring process, screen candidates more effectively, coordinate interviews efficiently, and make better hiring decisions for your team.",
    regions: ["Global"],
    link: "https://www.greenhouse.io",
  },
  {
    id: 136,
    name: "ZipRecruiter AI",
    category: "HR & Recruitment",
    description: "AI-powered job posting and candidate matching",
    pricing: "Starting at $249/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "ZipRecruiter AI automatically posts jobs to multiple sites and uses smart matching to connect you with qualified candidates.",
    personalizedPrompt:
      "Reach more qualified candidates, get applications faster, screen candidates intelligently, and hire the right people for your business.",
    regions: ["Global"],
    link: "https://www.ziprecruiter.com",
  },
  {
    id: 137,
    name: "Lever AI",
    category: "HR & Recruitment",
    description: "AI-powered recruiting and talent management",
    pricing: "Starting at $400/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Lever AI provides advanced recruiting tools with intelligent candidate sourcing and team collaboration features.",
    personalizedPrompt:
      "Source candidates from multiple channels, collaborate with your team on hiring decisions, track candidate progress, and build a strong recruitment process.",
    regions: ["Global"],
    link: "https://www.lever.co",
  },
  {
    id: 138,
    name: "JazzHR AI",
    category: "HR & Recruitment",
    description: "AI-enhanced recruiting software for growing businesses",
    pricing: "Starting at $39/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "JazzHR AI helps small to medium businesses streamline their hiring process with intelligent candidate management.",
    personalizedPrompt:
      "Organize your hiring process, post jobs to multiple boards, screen candidates efficiently, and make informed hiring decisions as your business grows.",
    regions: ["Global"],
    link: "https://www.jazzhr.com",
  },
  {
    id: 139,
    name: "SmartRecruiters AI",
    category: "HR & Recruitment",
    description: "AI-powered talent acquisition platform",
    pricing: "Custom pricing",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "SmartRecruiters AI provides comprehensive talent acquisition with intelligent candidate matching and analytics.",
    personalizedPrompt:
      "Attract top talent, streamline your recruitment process, make data-driven hiring decisions, and build a competitive team.",
    regions: ["Global"],
    link: "https://www.smartrecruiters.com",
  },
  {
    id: 140,
    name: "Gusto AI",
    category: "HR & Recruitment",
    description: "AI-enhanced payroll and HR platform for small businesses",
    pricing: "Starting at $40/month plus $6 per person",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Gusto AI simplifies payroll, benefits, and HR tasks for small businesses with intelligent automation.",
    personalizedPrompt:
      "Manage employee payroll automatically, handle benefits administration, ensure compliance with labor laws, and focus on growing your business instead of paperwork.",
    regions: ["North America"],
    link: "https://gusto.com",
  },

  // Continue with additional categories to reach 200+ tools...
  // Adding more tools to various categories

  // Additional Writing & Content Generation tools
  {
    id: 141,
    name: "Lex AI",
    category: "Writing & Content Generation",
    description: "AI-powered writing assistant for long-form content",
    pricing: "Free tier available, Pro at $20/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Lex AI helps writers create and edit long-form content with intelligent suggestions and collaboration features.",
    personalizedPrompt:
      "Write comprehensive blog posts and articles, collaborate on content with your team, organize your writing projects, and maintain consistency across all your content.",
    regions: ["Global"],
    link: "https://lex.page",
  },
  {
    id: 142,
    name: "Hypotenuse AI",
    category: "Writing & Content Generation",
    description: "AI content generator for e-commerce and marketing",
    pricing: "Starting at $15/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Hypotenuse AI specializes in creating product descriptions, blog posts, and marketing content for e-commerce businesses.",
    personalizedPrompt:
      "Generate compelling product descriptions, create SEO-optimized blog content, write engaging marketing copy, and develop content that drives sales.",
    regions: ["Global"],
    link: "https://www.hypotenuse.ai",
  },
  {
    id: 143,
    name: "Compose AI",
    category: "Writing & Content Generation",
    description: "AI writing assistant browser extension",
    pricing: "Free tier available, Premium at $9.99/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Compose AI works as a browser extension to help you write faster and better across any website or platform.",
    personalizedPrompt:
      "Write emails more efficiently, compose social media posts faster, create content across different platforms, and improve your writing productivity.",
    regions: ["Global"],
    link: "https://www.compose.ai",
  },
  {
    id: 144,
    name: "Craftly AI",
    category: "Writing & Content Generation",
    description: "AI copywriting tool for various content types",
    pricing: "Starting at $29/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Craftly AI helps create various types of content from blog posts to sales copy with customizable templates.",
    personalizedPrompt:
      "Create diverse content types for your business, develop consistent brand messaging, write persuasive sales copy, and maintain a regular content publishing schedule.",
    regions: ["Global"],
    link: "https://craftly.ai",
  },
  {
    id: 145,
    name: "Shortly AI",
    category: "Writing & Content Generation",
    description: "AI writing partner for creative and business writing",
    pricing: "$79/month unlimited",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Shortly AI acts as a writing partner, helping you overcome writer's block and continue your thoughts naturally.",
    personalizedPrompt:
      "Overcome writer's block, develop your ideas into full articles, write engaging stories for your brand, and create compelling narratives for your business.",
    regions: ["Global"],
    link: "https://shortlyai.com",
  },

  // Additional Social Media & Marketing tools
  {
    id: 146,
    name: "Brandwatch AI",
    category: "Social Media & Marketing",
    description: "AI-powered social media monitoring and analytics",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Brandwatch AI monitors social media conversations about your brand and provides intelligent insights about your audience.",
    personalizedPrompt:
      "Monitor brand mentions across social media, understand audience sentiment, track competitor activity, and identify opportunities for engagement.",
    regions: ["Global"],
    link: "https://www.brandwatch.com",
  },
  {
    id: 147,
    name: "Socialbakers AI",
    category: "Social Media & Marketing",
    description: "AI-driven social media marketing platform",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Socialbakers AI provides comprehensive social media analytics and content optimization for brands.",
    personalizedPrompt:
      "Optimize your social media strategy, benchmark against competitors, identify trending content, and improve your social media ROI.",
    regions: ["Global"],
    link: "https://www.socialbakers.com",
  },
  {
    id: 148,
    name: "Mention AI",
    category: "Social Media & Marketing",
    description: "AI-powered brand monitoring and social listening",
    pricing: "Starting at $29/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Mention AI tracks brand mentions across the internet and provides insights about your online reputation.",
    personalizedPrompt:
      "Track brand mentions online, respond to customer feedback quickly, monitor competitor activity, and manage your online reputation effectively.",
    regions: ["Global"],
    link: "https://mention.com",
  },
  {
    id: 149,
    name: "CoSchedule AI",
    category: "Social Media & Marketing",
    description: "AI-powered marketing calendar and content optimization",
    pricing: "Starting at $29/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "CoSchedule AI helps plan, create, and optimize your marketing content with intelligent scheduling and analytics.",
    personalizedPrompt:
      "Plan your marketing campaigns, optimize content for better performance, coordinate across marketing channels, and improve your content strategy.",
    regions: ["Global"],
    link: "https://coschedule.com",
  },
  {
    id: 150,
    name: "Publer AI",
    category: "Social Media & Marketing",
    description: "AI-enhanced social media scheduling and management",
    pricing: "Free tier available, Professional at $12/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Publer AI helps schedule and manage social media posts across multiple platforms with intelligent optimization.",
    personalizedPrompt:
      "Schedule posts across all social platforms, optimize posting times, create engaging content, and maintain consistent social media presence.",
    regions: ["Global"],
    link: "https://publer.io",
  },

  // Additional tools to reach 200+
  {
    id: 151,
    name: "Piktochart AI",
    category: "Image Generation & Design",
    description: "AI-powered infographic and visual content creator",
    pricing: "Free tier available, Pro at $24.17/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Piktochart AI helps create professional infographics, presentations, and visual content with intelligent design assistance.",
    personalizedPrompt:
      "Create engaging infographics for your industry, design professional presentations, visualize data effectively, and produce shareable visual content.",
    regions: ["Global"],
    link: "https://piktochart.com",
  },
  {
    id: 152,
    name: "Gamma AI",
    category: "Image Generation & Design",
    description: "AI-powered presentation and content creation platform",
    pricing: "Free tier available, Pro at $10/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Gamma AI creates presentations, documents, and websites automatically from your ideas with beautiful design.",
    personalizedPrompt:
      "Create professional presentations quickly, design marketing materials, build simple websites, and produce visual content that engages your audience.",
    regions: ["Global"],
    link: "https://gamma.app",
  },
  {
    id: 153,
    name: "Designs.ai",
    category: "Image Generation & Design",
    description: "AI-powered design suite for logos, graphics, and videos",
    pricing: "Starting at $29/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Designs.ai offers multiple AI tools for creating logos, graphics, videos, and other design assets for your business.",
    personalizedPrompt:
      "Create a professional logo for your brand, design marketing graphics, produce video content, and develop a consistent visual identity.",
    regions: ["Global"],
    link: "https://designs.ai",
  },
  {
    id: 154,
    name: "Remove.bg AI",
    category: "Image Generation & Design",
    description: "AI-powered background removal tool",
    pricing: "Free tier available, Pro at $9.99/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Remove.bg uses AI to automatically remove backgrounds from images, perfect for product photos and marketing materials.",
    personalizedPrompt:
      "Create professional product photos, remove backgrounds for marketing materials, prepare images for e-commerce, and enhance your visual content.",
    regions: ["Global"],
    link: "https://www.remove.bg",
  },
  {
    id: 155,
    name: "Upscale.media",
    category: "Image Generation & Design",
    description: "AI image upscaling and enhancement tool",
    pricing: "Free tier available, Pro at $9/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Upscale.media uses AI to enhance and enlarge images while maintaining quality, perfect for improving existing visuals.",
    personalizedPrompt:
      "Enhance low-resolution images for marketing, improve product photos for e-commerce, create high-quality prints, and upgrade your visual assets.",
    regions: ["Global"],
    link: "https://www.upscale.media",
  },

  // Additional Video & Avatar Creation tools
  {
    id: 156,
    name: "Heygen",
    category: "Video & Avatar Creation",
    description: "AI-powered avatar video generation platform",
    pricing: "Starting at $24/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Heygen creates professional videos with AI avatars that can speak in multiple languages and voices.",
    personalizedPrompt:
      "Create multilingual marketing videos, produce training content without filming, generate spokesperson videos, and scale video content production.",
    regions: ["Global"],
    link: "https://www.heygen.com",
  },
  {
    id: 157,
    name: "Colossyan",
    category: "Video & Avatar Creation",
    description: "AI video creation with realistic presenters",
    pricing: "Starting at $19/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Colossyan creates professional videos with AI presenters for training, marketing, and educational content.",
    personalizedPrompt:
      "Create professional training videos, produce educational content, generate marketing presentations, and develop video content at scale.",
    regions: ["Global"],
    link: "https://www.colossyan.com",
  },
  {
    id: 158,
    name: "Murf AI",
    category: "Video & Avatar Creation",
    description: "AI voice generator for videos and presentations",
    pricing: "Starting at $19/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Murf AI generates realistic human-like voices for your videos, presentations, and audio content.",
    personalizedPrompt:
      "Add professional voiceovers to your videos, create audio content for podcasts, generate multilingual voice content, and enhance your multimedia presentations.",
    regions: ["Global"],
    link: "https://murf.ai",
  },
  {
    id: 159,
    name: "Speechify AI",
    category: "Video & Avatar Creation",
    description: "AI text-to-speech and voice cloning platform",
    pricing: "Free tier available, Premium at $11.58/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Speechify converts text to natural-sounding speech and can clone voices for various applications.",
    personalizedPrompt:
      "Create audio versions of your written content, generate voiceovers for videos, produce podcast content, and make your content accessible to more audiences.",
    regions: ["Global"],
    link: "https://speechify.com",
  },
  {
    id: 160,
    name: "Opus Clip",
    category: "Video & Avatar Creation",
    description: "AI-powered long video to short clips converter",
    pricing: "Free tier available, Pro at $19/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Opus Clip automatically identifies the best moments in long videos and creates engaging short clips for social media.",
    personalizedPrompt:
      "Repurpose long-form video content for social media, create highlight reels from webinars, generate clips for marketing, and maximize your video content reach.",
    regions: ["Global"],
    link: "https://www.opus.pro",
  },

  // Additional tools to ensure we have 200+ total
  {
    id: 161,
    name: "Typeface AI",
    category: "Writing & Content Generation",
    description: "Enterprise AI content creation platform",
    pricing: "Custom enterprise pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Typeface AI helps large organizations create consistent, on-brand content across all their marketing channels.",
    personalizedPrompt:
      "Maintain brand consistency across all content, create personalized marketing materials at scale, develop content strategies, and ensure brand compliance.",
    regions: ["Global"],
    link: "https://www.typeface.ai",
  },
  {
    id: 162,
    name: "Writer.com Enterprise",
    category: "Writing & Content Generation",
    description: "AI writing platform for teams and enterprises",
    pricing: "Custom enterprise pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Writer.com helps large teams maintain consistent brand voice and create high-quality content collaboratively.",
    personalizedPrompt:
      "Coordinate content creation across large teams, maintain brand voice consistency, create enterprise-level documentation, and scale content production.",
    regions: ["Global"],
    link: "https://writer.com",
  },
  {
    id: 163,
    name: "Rephrase.ai",
    category: "Video & Avatar Creation",
    description: "AI-powered professional video creation with digital avatars",
    pricing: "Starting at $25/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Rephrase.ai creates professional videos using AI avatars for personalized video marketing and communication.",
    personalizedPrompt:
      "Create personalized video messages for customers, produce scalable video marketing campaigns, generate training videos, and enhance customer communication.",
    regions: ["Global"],
    link: "https://www.rephrase.ai",
  },
  {
    id: 164,
    name: "Animaker AI",
    category: "Video & Avatar Creation",
    description: "AI-powered animation and video creation platform",
    pricing: "Free tier available, Pro at $12.5/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Animaker AI helps create animated videos, presentations, and marketing content with intelligent assistance.",
    personalizedPrompt:
      "Create engaging animated videos for marketing, produce educational content with animations, develop presentation videos, and create memorable brand content.",
    regions: ["Global"],
    link: "https://www.animaker.com",
  },
  {
    id: 165,
    name: "Beautiful.ai",
    category: "Image Generation & Design",
    description: "AI-powered presentation design platform",
    pricing: "Starting at $12/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Beautiful.ai automatically creates professional presentations with intelligent design assistance and templates.",
    personalizedPrompt:
      "Create stunning business presentations, design investor pitch decks, develop training materials, and produce professional slides effortlessly.",
    regions: ["Global"],
    link: "https://www.beautiful.ai",
  },
  {
    id: 166,
    name: "Looka AI",
    category: "Image Generation & Design",
    description: "AI-powered logo and brand identity creator",
    pricing: "Logo packages from $20-96",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Looka AI creates professional logos and complete brand identities based on your preferences and business type.",
    personalizedPrompt:
      "Design a professional logo for your business, create a complete brand identity, develop marketing materials with consistent branding, and establish a professional visual presence.",
    regions: ["Global"],
    link: "https://looka.com",
  },
  {
    id: 167,
    name: "Tome AI",
    category: "Image Generation & Design",
    description: "AI-powered storytelling and presentation platform",
    pricing: "Free tier available, Pro at $20/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Tome AI creates presentations and visual stories automatically from your ideas with intelligent design and content generation.",
    personalizedPrompt:
      "Create compelling business presentations, develop visual stories for your brand, produce marketing decks, and generate professional slides with minimal effort.",
    regions: ["Global"],
    link: "https://tome.app",
  },
  {
    id: 168,
    name: "Sembly AI",
    category: "Automation & Productivity",
    description: "AI meeting assistant and note-taking platform",
    pricing: "Free tier available, Professional at $10/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Sembly AI joins your meetings and automatically creates summaries, action items, and transcripts.",
    personalizedPrompt:
      "Automatically capture meeting notes, track action items and decisions, create meeting summaries, and ensure nothing important is missed in business meetings.",
    regions: ["Global"],
    link: "https://www.sembly.ai",
  },
  {
    id: 169,
    name: "Otter.ai",
    category: "Automation & Productivity",
    description: "AI-powered meeting transcription and note-taking",
    pricing: "Free tier available, Pro at $8.33/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Otter.ai automatically transcribes meetings and conversations, making it easy to search and review important discussions.",
    personalizedPrompt:
      "Transcribe important business meetings, create searchable notes from conversations, capture client calls for reference, and maintain detailed records of business discussions.",
    regions: ["Global"],
    link: "https://otter.ai",
  },
  {
    id: 170,
    name: "Mem AI",
    category: "Automation & Productivity",
    description: "AI-powered note-taking and knowledge management",
    pricing: "Starting at $8.33/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Mem AI creates intelligent connections between your notes and ideas, helping you organize and find information effortlessly.",
    personalizedPrompt:
      "Organize business ideas and research, connect related concepts automatically, build a searchable knowledge base, and enhance your creative thinking process.",
    regions: ["Global"],
    link: "https://mem.ai",
  },
  {
    id: 171,
    name: "Fireflies.ai",
    category: "Automation & Productivity",
    description: "AI-powered meeting assistant",
    pricing: "Free tier available, Pro at $18/month",
    skillLevel: "Beginner",
    beginnerExplanation: "Fireflies.ai helps transcribe, summarize, and analyze your meetings automatically.",
    personalizedPrompt:
      "Record and transcribe your sales calls, create meeting summaries for your team, analyze customer feedback from meetings, and improve your meeting productivity.",
    regions: ["Global"],
    link: "https://fireflies.ai",
  },
  {
    id: 172,
    name: "Taskade AI",
    category: "Automation & Productivity",
    description: "AI-powered collaboration and project management",
    pricing: "Free tier available, Pro at $8/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Taskade AI helps you organize tasks, manage projects, and collaborate with your team in a visual workspace.",
    personalizedPrompt:
      "Plan your marketing campaigns, manage your product development, organize your team meetings, and collaborate with your team in real-time.",
    regions: ["Global"],
    link: "https://www.taskade.com",
  },
  {
    id: 173,
    name: "Motion AI",
    category: "Automation & Productivity",
    description: "AI-powered time management and scheduling",
    pricing: "Starting at $34/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Motion AI helps you automate your scheduling, prioritize your tasks, and manage your time more effectively.",
    personalizedPrompt:
      "Automate your scheduling, prioritize your tasks, manage your time more effectively, and improve your productivity.",
    regions: ["Global"],
    link: "https://www.usemotion.com",
  },
  {
    id: 174,
    name: "Reclaim AI",
    category: "Automation & Productivity",
    description: "AI-powered calendar and time management",
    pricing: "Free tier available, Pro at $12/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Reclaim AI helps you schedule your tasks, protect your time, and balance your work and personal life.",
    personalizedPrompt:
      "Schedule your tasks, protect your time, balance your work and personal life, and improve your productivity.",
    regions: ["Global"],
    link: "https://reclaim.ai",
  },
  {
    id: 175,
    name: "Clockwise AI",
    category: "Automation & Productivity",
    description: "AI-powered calendar scheduling and optimization",
    pricing: "Free tier available, Pro at $6.75/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Clockwise AI helps you optimize your calendar, schedule your meetings, and protect your focus time.",
    personalizedPrompt:
      "Optimize your calendar, schedule your meetings, protect your focus time, and improve your team's productivity.",
    regions: ["Global"],
    link: "https://www.getclockwise.com",
  },
  {
    id: 176,
    name: "Krisp AI",
    category: "Automation & Productivity",
    description: "AI-powered noise cancellation for meetings",
    pricing: "Free tier available, Pro at $8/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Krisp AI helps you remove background noise from your meetings, improving your audio quality and reducing distractions.",
    personalizedPrompt:
      "Remove background noise from your meetings, improve your audio quality, reduce distractions, and improve your meeting productivity.",
    regions: ["Global"],
    link: "https://krisp.ai",
  },
  {
    id: 177,
    name: "OtterPilot",
    category: "Automation & Productivity",
    description: "AI-powered meeting assistant by Otter.ai",
    pricing: "Included with Otter Business plan",
    skillLevel: "Beginner",
    beginnerExplanation:
      "OtterPilot automatically joins your meetings, records audio, captures notes, and generates summaries.",
    personalizedPrompt:
      "Automatically record and transcribe your meetings, capture notes and action items, generate meeting summaries, and improve your meeting productivity.",
    regions: ["Global"],
    link: "https://otter.ai/otterpilot",
  },
  {
    id: 178,
    name: "Read AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting analytics and insights",
    pricing: "Free tier available, Pro at $19/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Read AI helps you analyze your meetings, understand attendee engagement, and improve your meeting effectiveness.",
    personalizedPrompt:
      "Analyze your meeting data, understand attendee engagement, improve your meeting effectiveness, and optimize your meeting strategy.",
    regions: ["Global"],
    link: "https://www.read.ai",
  },
  {
    id: 179,
    name: "Fellow.app AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting management and collaboration",
    pricing: "Free tier available, Pro at $7/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Fellow.app AI helps you plan your meetings, create agendas, track action items, and collaborate with your team.",
    personalizedPrompt:
      "Plan your meetings, create agendas, track action items, collaborate with your team, and improve your meeting productivity.",
    regions: ["Global"],
    link: "https://www.fellow.app",
  },
  {
    id: 180,
    name: "Avoma AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting intelligence platform",
    pricing: "Starting at $79/month",
    skillLevel: "Intermediate",
    beginnerExplanation: "Avoma AI helps you record, transcribe, summarize, and analyze your customer meetings.",
    personalizedPrompt:
      "Record and transcribe your customer meetings, summarize key insights, analyze customer sentiment, and improve your sales and customer success.",
    regions: ["Global"],
    link: "https://www.avoma.com",
  },
  {
    id: 181,
    name: "Grain AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting recording and sharing",
    pricing: "Free tier available, Pro at $19/month",
    skillLevel: "Beginner",
    beginnerExplanation: "Grain AI helps you record, transcribe, and share key moments from your meetings.",
    personalizedPrompt:
      "Record and transcribe your meetings, share key moments with your team, create highlight reels, and improve your meeting communication.",
    regions: ["Global"],
    link: "https://grain.com",
  },
  {
    id: 182,
    name: "Fathom AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting assistant for Zoom",
    pricing: "Free",
    skillLevel: "Beginner",
    beginnerExplanation: "Fathom AI helps you record, transcribe, and summarize your Zoom meetings automatically.",
    personalizedPrompt:
      "Record and transcribe your Zoom meetings, summarize key insights, capture action items, and improve your meeting productivity.",
    regions: ["Global"],
    link: "https://www.fathom.video",
  },
  {
    id: 183,
    name: "Tactiq AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting transcription and summarization",
    pricing: "Free tier available, Pro at $12/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Tactiq AI helps you transcribe and summarize your meetings, create searchable notes, and share key insights.",
    personalizedPrompt:
      "Transcribe and summarize your meetings, create searchable notes, share key insights with your team, and improve your meeting collaboration.",
    regions: ["Global"],
    link: "https://tactiq.io",
  },
  {
    id: 184,
    name: "Airgram AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting assistant and collaboration",
    pricing: "Free tier available, Pro at $9.99/month",
    skillLevel: "Beginner",
    beginnerExplanation: "Airgram AI helps you record, transcribe, and collaborate on your meetings with your team.",
    personalizedPrompt:
      "Record and transcribe your meetings, collaborate on notes and action items, share key insights with your team, and improve your meeting productivity.",
    regions: ["Global"],
    link: "https://www.airgram.io",
  },
  {
    id: 185,
    name: "Sesh AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting facilitator and collaboration",
    pricing: "Starting at $15/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Sesh AI helps you facilitate your meetings, engage your attendees, and improve your meeting outcomes.",
    personalizedPrompt:
      "Facilitate your meetings, engage your attendees, improve your meeting outcomes, and optimize your meeting strategy.",
    regions: ["Global"],
    link: "https://www.sesh.ai",
  },
  {
    id: 186,
    name: "Hypercontext AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting agenda and collaboration",
    pricing: "Starting at $5.60/month per user",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Hypercontext AI helps you create meeting agendas, track action items, and collaborate with your team.",
    personalizedPrompt:
      "Create effective meeting agendas, track action items and decisions, collaborate with your team, and improve your meeting productivity.",
    regions: ["Global"],
    link: "https://www.hypercontext.com",
  },
  {
    id: 187,
    name: "Hugo AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting notes and collaboration",
    pricing: "Starting at $8/month per user",
    skillLevel: "Beginner",
    beginnerExplanation: "Hugo AI helps you capture meeting notes, track action items, and collaborate with your team.",
    personalizedPrompt:
      "Capture detailed meeting notes, track action items and decisions, collaborate with your team, and improve your meeting communication.",
    regions: ["Global"],
    link: "https://www.hugo.team",
  },
  {
    id: 188,
    name: "Docket AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting management and collaboration",
    pricing: "Starting at $6/month per user",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Docket AI helps you plan your meetings, create agendas, track action items, and collaborate with your team.",
    personalizedPrompt:
      "Plan your meetings effectively, create detailed agendas, track action items and decisions, and collaborate with your team seamlessly.",
    regions: ["Global"],
    link: "https://www.dockethq.com",
  },
  {
    id: 189,
    name: "Meetingbird AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting scheduling and calendar",
    pricing: "Free tier available, Pro at $9/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Meetingbird AI helps you schedule your meetings, manage your calendar, and automate your scheduling tasks.",
    personalizedPrompt:
      "Schedule your meetings efficiently, manage your calendar effectively, automate your scheduling tasks, and improve your time management.",
    regions: ["Global"],
    link: "https://www.meetingbird.com",
  },
  {
    id: 190,
    name: "Ruum AI",
    category: "Automation & Productivity",
    description: "AI-powered project management and collaboration",
    pricing: "Free tier available, Pro at $9.99/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Ruum AI helps you manage your projects, collaborate with your team, and automate your project tasks.",
    personalizedPrompt:
      "Manage your projects effectively, collaborate with your team seamlessly, automate your project tasks, and improve your project productivity.",
    regions: ["Global"],
    link: "https://ruumapp.com",
  },
  {
    id: 191,
    name: "Taskable AI",
    category: "Automation & Productivity",
    description: "AI-powered task management and collaboration",
    pricing: "Starting at $8/month per user",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Taskable AI helps you manage your tasks, collaborate with your team, and track your progress.",
    personalizedPrompt:
      "Manage your tasks effectively, collaborate with your team seamlessly, track your progress easily, and improve your task productivity.",
    regions: ["Global"],
    link: "https://taskable.com",
  },
  {
    id: 192,
    name: "Tweek AI",
    category: "Automation & Productivity",
    description: "AI-powered weekly planner and task management",
    pricing: "Free tier available, Pro at $10/month",
    skillLevel: "Beginner",
    beginnerExplanation: "Tweek AI helps you plan your week, manage your tasks, and track your progress.",
    personalizedPrompt:
      "Plan your week effectively, manage your tasks efficiently, track your progress easily, and improve your weekly productivity.",
    regions: ["Global"],
    link: "https://tweek.to",
  },
  {
    id: 193,
    name: "Akiflow AI",
    category: "Automation & Productivity",
    description: "AI-powered task management and calendar",
    pricing: "Starting at $15/month",
    skillLevel: "Intermediate",
    beginnerExplanation: "Akiflow AI helps you manage your tasks, schedule your time, and integrate your tools.",
    personalizedPrompt:
      "Manage your tasks effectively, schedule your time efficiently, integrate your tools seamlessly, and improve your overall productivity.",
    regions: ["Global"],
    link: "https://www.akiflow.com",
  },
  {
    id: 194,
    name: "Miro AI",
    category: "Automation & Productivity",
    description: "AI-powered visual collaboration platform",
    pricing: "Free tier available, Pro at $8/month per user",
    skillLevel: "Beginner",
    beginnerExplanation: "Miro AI helps you collaborate visually with your team, brainstorm ideas, and plan projects.",
    personalizedPrompt:
      "Collaborate visually with your team, brainstorm ideas effectively, plan projects seamlessly, and improve your team collaboration.",
    regions: ["Global"],
    link: "https://miro.com",
  },
  {
    id: 195,
    name: "Lucidchart AI",
    category: "Automation & Productivity",
    description: "AI-powered diagramming and visual collaboration",
    pricing: "Free tier available, Individual at $7.95/month",
    skillLevel: "Beginner",
    beginnerExplanation: "Lucidchart AI helps you create diagrams, visualize data, and collaborate with your team.",
    personalizedPrompt:
      "Create professional diagrams, visualize data effectively, collaborate with your team seamlessly, and improve your visual communication.",
    regions: ["Global"],
    link: "https://www.lucidchart.com",
  },
  {
    id: 196,
    name: "Coda AI",
    category: "Automation & Productivity",
    description: "AI-powered document and workflow platform",
    pricing: "Free tier available, Pro at $10/month per user",
    skillLevel: "Beginner",
    beginnerExplanation: "Coda AI helps you create documents, automate workflows, and collaborate with your team.",
    personalizedPrompt:
      "Create dynamic documents, automate your workflows, collaborate with your team seamlessly, and improve your document productivity.",
    regions: ["Global"],
    link: "https://www.coda.io",
  },
  {
    id: 197,
    name: "ClickUp Brain",
    category: "Automation & Productivity",
    description: "AI-powered writing assistant in ClickUp",
    pricing: "Included in ClickUp Unlimited plan",
    skillLevel: "Beginner",
    beginnerExplanation: "ClickUp Brain helps you write tasks, create summaries, and generate content within ClickUp.",
    personalizedPrompt:
      "Write clear and concise tasks, create summaries of your projects, generate content for your team, and improve your writing productivity within ClickUp.",
    regions: ["Global"],
    link: "https://clickup.com/features/clickup-ai",
  },
  {
    id: 198,
    name: "Memorable AI",
    category: "Automation & Productivity",
    description: "AI-powered memory enhancement and note-taking",
    pricing: "Starting at $10/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Memorable AI helps you remember important information, organize your notes, and improve your memory recall.",
    personalizedPrompt:
      "Remember important details from meetings, organize your notes effectively, improve your memory recall, and enhance your learning and productivity.",
    regions: ["Global"],
    link: "https://memorable.ai",
  },
  {
    id: 199,
    name: "Supernormal AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting notes and action items",
    pricing: "Free tier available, Pro at $10/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Supernormal AI helps you capture meeting notes, track action items, and share key insights with your team.",
    personalizedPrompt:
      "Capture detailed meeting notes, track action items and decisions, share key insights with your team, and improve your meeting communication.",
    regions: ["Global"],
    link: "https://supernormal.com",
  },
  {
    id: 200,
    name: "Scribble AI",
    category: "Automation & Productivity",
    description: "AI-powered meeting notes and summaries",
    pricing: "Free tier available, Pro at $10/month",
    skillLevel: "Beginner",
    beginnerExplanation:
      "Scribble AI helps you capture meeting notes, generate summaries, and share key insights with your team.",
    personalizedPrompt:
      "Capture detailed meeting notes, generate concise summaries, share key insights with your team, and improve your meeting productivity.",
    regions: ["Global"],
    link: "https://www.scribbleai.com",
  },
  {
    id: 201,
    name: "Bardeen AI",
    category: "Automation & Productivity",
    description: "AI-powered workflow automation platform",
    pricing: "Free tier available, Pro at $12/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Bardeen AI helps you automate repetitive tasks, connect your apps, and streamline your workflows.",
    personalizedPrompt:
      "Automate repetitive tasks, connect your apps seamlessly, streamline your workflows efficiently, and improve your overall productivity.",
    regions: ["Global"],
    link: "https://www.bardeen.ai",
  },
  {
    id: 202,
    name: "Parabola AI",
    category: "Automation & Productivity",
    description: "AI-powered data automation and workflow",
    pricing: "Starting at $150/month",
    skillLevel: "Intermediate",
    beginnerExplanation: "Parabola AI helps you automate data tasks, transform data, and build automated workflows.",
    personalizedPrompt:
      "Automate data tasks efficiently, transform data effectively, build automated workflows seamlessly, and improve your data productivity.",
    regions: ["Global"],
    link: "https://parabola.io",
  },
  {
    id: 203,
    name: "n8n AI",
    category: "Automation & Productivity",
    description: "AI-powered workflow automation platform",
    pricing: "Free (self-hosted), Cloud starting at $20/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "n8n AI helps you automate complex workflows, connect your apps, and build custom integrations.",
    personalizedPrompt:
      "Automate complex workflows efficiently, connect your apps seamlessly, build custom integrations easily, and improve your overall automation.",
    regions: ["Global"],
    link: "https://n8n.io",
  },
  {
    id: 204,
    name: "IFTTT AI",
    category: "Automation & Productivity",
    description: "AI-powered applet automation platform",
    pricing: "Free tier available, Pro at $3/month",
    skillLevel: "Beginner",
    beginnerExplanation: "IFTTT AI helps you connect your apps, automate simple tasks, and create custom applets.",
    personalizedPrompt:
      "Connect your apps easily, automate simple tasks efficiently, create custom applets seamlessly, and improve your overall app productivity.",
    regions: ["Global"],
    link: "https://ifttt.com",
  },
  {
    id: 205,
    name: "Integromat AI",
    category: "Automation & Productivity",
    description: "AI-powered workflow automation platform",
    pricing: "Free tier available, Standard at $9/month",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Integromat AI helps you automate complex workflows, connect your apps, and transform your data.",
    personalizedPrompt:
      "Automate complex workflows efficiently, connect your apps seamlessly, transform your data effectively, and improve your overall automation.",
    regions: ["Global"],
    link: "https://www.make.com",
  },
  {
    id: 206,
    name: "Workato AI",
    category: "Automation & Productivity",
    description: "AI-powered enterprise automation platform",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Workato AI helps you automate enterprise workflows, connect your systems, and transform your business processes.",
    personalizedPrompt:
      "Automate enterprise workflows efficiently, connect your systems seamlessly, transform your business processes effectively, and improve your overall enterprise automation.",
    regions: ["Global"],
    link: "https://www.workato.com",
  },
  {
    id: 207,
    name: "UiPath AI",
    category: "Automation & Productivity",
    description: "AI-powered robotic process automation (RPA)",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "UiPath AI helps you automate repetitive tasks, streamline your processes, and improve your business efficiency.",
    personalizedPrompt:
      "Automate repetitive tasks efficiently, streamline your business processes effectively, improve your business efficiency seamlessly, and transform your overall business automation.",
    regions: ["Global"],
    link: "https://www.uipath.com",
  },
  {
    id: 208,
    name: "Automation Anywhere AI",
    category: "Automation & Productivity",
    description: "AI-powered robotic process automation (RPA)",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Automation Anywhere AI helps you automate repetitive tasks, streamline your processes, and improve your business efficiency.",
    personalizedPrompt:
      "Automate repetitive tasks efficiently, streamline your business processes effectively, improve your business efficiency seamlessly, and transform your overall business automation.",
    regions: ["Global"],
    link: "https://www.automationanywhere.com",
  },
  {
    id: 209,
    name: "Blue Prism AI",
    category: "Automation & Productivity",
    description: "AI-powered robotic process automation (RPA)",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Blue Prism AI helps you automate repetitive tasks, streamline your processes, and improve your business efficiency.",
    personalizedPrompt:
      "Automate repetitive tasks efficiently, streamline your business processes effectively, improve your business efficiency seamlessly, and transform your overall business automation.",
    regions: ["Global"],
    link: "https://www.blueprism.com",
  },
  {
    id: 210,
    name: "Pega AI",
    category: "Automation & Productivity",
    description: "AI-powered business process management (BPM)",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Pega AI helps you automate business processes, improve customer experiences, and optimize your business operations.",
    personalizedPrompt:
      "Automate business processes efficiently, improve customer experiences effectively, optimize your business operations seamlessly, and transform your overall business automation.",
    regions: ["Global"],
    link: "https://www.pega.com",
  },
  {
    id: 211,
    name: "Appian AI",
    category: "Automation & Productivity",
    description: "AI-powered low-code automation platform",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Appian AI helps you build applications, automate workflows, and improve your business processes.",
    personalizedPrompt:
      "Build applications efficiently, automate workflows effectively, improve your business processes seamlessly, and transform your overall business automation.",
    regions: ["Global"],
    link: "https://www.appian.com",
  },
  {
    id: 212,
    name: "Zoho Creator AI",
    category: "Automation & Productivity",
    description: "AI-powered low-code application development",
    pricing: "Starting at $10/month per user",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Zoho Creator AI helps you build custom applications, automate workflows, and integrate your data.",
    personalizedPrompt:
      "Build custom applications efficiently, automate workflows effectively, integrate your data seamlessly, and improve your overall application development.",
    regions: ["Global"],
    link: "https://www.zoho.com/creator",
  },
  {
    id: 213,
    name: "Microsoft Power Automate AI",
    category: "Automation & Productivity",
    description: "AI-powered workflow automation platform",
    pricing: "Starting at $15/month per user",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Microsoft Power Automate AI helps you automate workflows, connect your apps, and streamline your processes.",
    personalizedPrompt:
      "Automate workflows efficiently, connect your apps seamlessly, streamline your business processes effectively, and improve your overall automation.",
    regions: ["Global"],
    link: "https://powerautomate.microsoft.com",
  },
  {
    id: 214,
    name: "Nintex AI",
    category: "Automation & Productivity",
    description: "AI-powered process management and automation",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Nintex AI helps you automate business processes, improve efficiency, and transform your operations.",
    personalizedPrompt:
      "Automate business processes efficiently, improve your business efficiency effectively, transform your business operations seamlessly, and improve your overall business automation.",
    regions: ["Global"],
    link: "https://www.nintex.com",
  },
  {
    id: 215,
    name: "Kissflow AI",
    category: "Automation & Productivity",
    description: "AI-powered low-code platform for workflow",
    pricing: "Starting at $18/month per user",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Kissflow AI helps you automate workflows, build applications, and manage your business processes.",
    personalizedPrompt:
      "Automate workflows efficiently, build applications effectively, manage your business processes seamlessly, and improve your overall business automation.",
    regions: ["Global"],
    link: "https://www.kissflow.com",
  },
  {
    id: 216,
    name: "ProcessMaker AI",
    category: "Automation & Productivity",
    description: "AI-powered business process management (BPM)",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "ProcessMaker AI helps you automate business processes, improve efficiency, and transform your operations.",
    personalizedPrompt:
      "Automate business processes efficiently, improve your business efficiency effectively, transform your business operations seamlessly, and improve your overall business automation.",
    regions: ["Global"],
    link: "https://www.processmaker.com",
  },
  {
    id: 217,
    name: "Bizagi AI",
    category: "Automation & Productivity",
    description: "AI-powered business process management (BPM)",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Bizagi AI helps you automate business processes, improve efficiency, and transform your operations.",
    personalizedPrompt:
      "Automate business processes efficiently, improve your business efficiency effectively, transform your business operations seamlessly, and improve your overall business automation.",
    regions: ["Global"],
    link: "https://www.bizagi.com",
  },
  {
    id: 218,
    name: "Creatio AI",
    category: "Automation & Productivity",
    description: "AI-powered low-code platform for CRM and BPM",
    pricing: "Starting at $35/month per user",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Creatio AI helps you automate CRM and BPM processes, improve customer experiences, and streamline your operations.",
    personalizedPrompt:
      "Automate CRM and BPM processes efficiently, improve customer experiences effectively, streamline your business operations seamlessly, and improve your overall business automation.",
    regions: ["Global"],
    link: "https://www.creatio.com",
  },
  {
    id: 219,
    name: "OutSystems AI",
    category: "Automation & Productivity",
    description: "AI-powered low-code application development",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "OutSystems AI helps you build enterprise applications, automate workflows, and transform your business processes.",
    personalizedPrompt:
      "Build enterprise applications efficiently, automate workflows effectively, transform your business processes seamlessly, and improve your overall application development.",
    regions: ["Global"],
    link: "https://www.outsystems.com",
  },
  {
    id: 220,
    name: "Mendix AI",
    category: "Automation & Productivity",
    description: "AI-powered low-code application development",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "Mendix AI helps you build enterprise applications, automate workflows, and transform your business processes.",
    personalizedPrompt:
      "Build enterprise applications efficiently, automate workflows effectively, transform your business processes seamlessly, and improve your overall application development.",
    regions: ["Global"],
    link: "https://www.mendix.com",
  },
  {
    id: 221,
    name: "Salesforce Flow AI",
    category: "Automation & Productivity",
    description: "AI-powered workflow automation in Salesforce",
    pricing: "Included with Salesforce plans",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Salesforce Flow AI helps you automate workflows, connect your data, and improve your business processes within Salesforce.",
    personalizedPrompt:
      "Automate workflows efficiently, connect your data seamlessly, improve your business processes effectively, and transform your overall Salesforce automation.",
    regions: ["Global"],
    link: "https://www.salesforce.com/products/platform/flow",
  },
  {
    id: 222,
    name: "ServiceNow AI",
    category: "Automation & Productivity",
    description: "AI-powered workflow automation in ServiceNow",
    pricing: "Custom pricing",
    skillLevel: "Expert",
    beginnerExplanation:
      "ServiceNow AI helps you automate workflows, improve service delivery, and transform your business operations within ServiceNow.",
    personalizedPrompt:
      "Automate workflows efficiently, improve service delivery effectively, transform your business operations seamlessly, and improve your overall ServiceNow automation.",
    regions: ["Global"],
    link: "https://www.servicenow.com",
  },
  {
    id: 223,
    name: "Jira Automation AI",
    category: "Automation & Productivity",
    description: "AI-powered workflow automation in Jira",
    pricing: "Included with Jira plans",
    skillLevel: "Intermediate",
    beginnerExplanation:
      "Jira Automation AI helps you automate workflows, streamline your processes, and improve your team's productivity within Jira.",
    personalizedPrompt:
      "Automate workflows efficiently, streamline your business processes effectively, improve your team's productivity seamlessly, and transform your overall Jira automation.",
    regions: ["Global"],
    link: "https://www.atlassian.com/software/jira/automation",
  },
]

// Export functions for filtering and categorisation
export function getUniqueCategories(): string[] {
  const categories = [...new Set(aiToolsDatabase.map((tool) => tool.category))]
  return categories.sort()
}

export function getUniqueRegions(): string[] {
  const allRegions = aiToolsDatabase.flatMap((tool) => tool.regions)
  const uniqueRegions = [...new Set(allRegions)]
  // Add popular regions and sort alphabetically
  const popularRegions = ["Global", "North America", "Europe", "Asia", "Australia"]
  const combinedRegions = [...new Set([...popularRegions, ...uniqueRegions])]
  return combinedRegions.sort()
}

export function getUniqueSkillLevels(): string[] {
  const skillLevels = [...new Set(aiToolsDatabase.map((tool) => tool.skillLevel))]
  // Return in logical order
  return ["Beginner", "Intermediate", "Expert"].filter((level) => skillLevels.includes(level))
}

// Helper function to get tools by category
export function getToolsByCategory(category: string): AITool[] {
  return aiToolsDatabase.filter((tool) => tool.category === category)
}

// Helper function to get tools by skill level
export function getToolsBySkillLevel(skillLevel: string): AITool[] {
  return aiToolsDatabase.filter((tool) => tool.skillLevel === skillLevel)
}

// Helper function to get tools by region
export function getToolsByRegion(region: string): AITool[] {
  return aiToolsDatabase.filter((tool) => tool.regions.includes(region))
}

// Helper function to search tools
export function searchTools(query: string): AITool[] {
  const searchTerm = query.toLowerCase()
  return aiToolsDatabase.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      tool.beginnerExplanation.toLowerCase().includes(searchTerm) ||
      tool.category.toLowerCase().includes(searchTerm) ||
      tool.personalizedPrompt.toLowerCase().includes(searchTerm),
  )
}
