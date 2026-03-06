import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, X, Maximize2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Fazyo_video from "@/assets/Fazyo video 3.mp4";
import Super_you_video from "@/assets/Super you video.mp4";
import AI_Woman_cloth_Product from "@/assets/AI Woman cloth Product.mp4";
import Men_Fashion_cloth from "@/assets/02.mp4";
import Men_Fashion_cloths from "@/assets/03.mp4";
import Infants_Boy from "@/assets/Infants/Boys/17.png";
import Infants_Girl from "@/assets/Infants/Girls/31.png";
import Infants from "@/assets/Infants/Girls/18.png";
import Mens from "@/assets/Mens/3/1.png";
import Womans from "@/assets/Womans/1/5.png";
import StudioImage from "@/assets/Studio/Men/1/3.png";
import StudioMens from "@/assets/Studio/Men/1/1.png";
import StudioWomans from "@/assets/Studio/Woman/1/1.png";
import Necklaces from "@/assets/Jewellery/Necklaces/21.png";
import ChockSet from "@/assets/Jewellery/ChockSet/21.png";
import Bracelet from "@/assets/Jewellery/Bracelet/21.png";
import Jewellery from "@/assets/Jewellery/Necklaces/3.png";
import DiningTable from "@/assets/Farnichar/DiningTable/1.png";
import Chair from "@/assets/Farnichar/Chair/1.png";
import Bed from "@/assets/Farnichar/Bed/1.png";
import Furniture from "@/assets/Farnichar/Chair/1.png";
import sunglasses from "@/assets/sunglasses.mp4";
import Hoodie from "@/assets/Hoodie.mp4";
import christmas_video from "@/assets/christmas video.mp4";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";

// Placeholder imports for Kids categories (replace with actual images)
import Kids from "@/assets/Kids/EarlyLearners/Lifestyle/12.png"; // placeholder
import EarlyLearners from "@/assets/Kids/EarlyLearners/Creative/4.png"; // placeholder
import JuniorGroup from "@/assets/Kids/JuniorGroup/Lifestyle/2.png"; // placeholder
import SeniorKids from "@/assets/Kids/SeniorKids/Creative/19.png"; // placeholder
import EarlyLearnersStudioThumb from "@/assets/Kids/EarlyLearners/Studio/1.png"; // placeholder
import JuniorGroupStudioThumb from "@/assets/Kids/JuniorGroup/Studio/1.png"; // placeholder
import SeniorKidsStudioThumb from "@/assets/Kids/SeniorKids/Studio/1.png"; // placeholder
import EarlyLearnersLifestyleThumb from "@/assets/Kids/EarlyLearners/Lifestyle/1.png"; // placeholder
import JuniorGroupLifestyleThumb from "@/assets/Kids/JuniorGroup/Lifestyle/1.png"; // placeholder
import SeniorKidsLifestyleThumb from "@/assets/Kids/SeniorKids/Lifestyle/2.png"; // placeholder
import EarlyLearnersCreativeThumb from "@/assets/Kids/EarlyLearners/Creative/1.png"; // placeholder
import JuniorGroupCreativeThumb from "@/assets/Kids/JuniorGroup/Creative/8.png"; // placeholder
import SeniorKidsCreativeThumb from "@/assets/Kids/SeniorKids/Creative/1.png"; // placeholder
import Shoes from "@/assets/Shoes/20.png"; // placeholder
import SunglassesThumb from "@/assets/Sunglasses/11.png"; // placeholder

// Dynamic import of Womans images
const womansImages = import.meta.glob('/src/assets/Womans/**/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Mens images
const mensImages = import.meta.glob('/src/assets/Mens/**/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Boys images
const boysImages = import.meta.glob('/src/assets/Infants/Boys/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Girls images
const girlsImages = import.meta.glob('/src/assets/Infants/Girls/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Bracelet images
const braceletImages = import.meta.glob('/src/assets/Jewellery/Bracelet/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Necklaces images
const necklacesImages = import.meta.glob('/src/assets/Jewellery/Necklaces/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Chock Set images
const chockSetImages = import.meta.glob('/src/assets/Jewellery/ChockSet/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Dining Table images
const diningTableImages = import.meta.glob('/src/assets/Farnichar/DiningTable/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Chair images
const chairImages = import.meta.glob('/src/assets/Farnichar/Chair/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Bed images
const bedImages = import.meta.glob('/src/assets/Farnichar/Bed/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Studio Womans images
const studioWomansImages = import.meta.glob('/src/assets/Studio/Woman/**/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Studio Mens images
const studioMensImages = import.meta.glob('/src/assets/Studio/Men/**/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Kids images
const earlyLearnersStudioImages = import.meta.glob('/src/assets/Kids/EarlyLearners/Studio/*.png', { eager: true }) as Record<string, { default: string }>;
const earlyLearnersLifestyleImages = import.meta.glob('/src/assets/Kids/EarlyLearners/Lifestyle/*.png', { eager: true }) as Record<string, { default: string }>;
const earlyLearnersCreativeImages = import.meta.glob('/src/assets/Kids/EarlyLearners/Creative/*.png', { eager: true }) as Record<string, { default: string }>;
const juniorGroupStudioImages = import.meta.glob('/src/assets/Kids/JuniorGroup/Studio/*.png', { eager: true }) as Record<string, { default: string }>;
const juniorGroupLifestyleImages = import.meta.glob('/src/assets/Kids/JuniorGroup/Lifestyle/*.png', { eager: true }) as Record<string, { default: string }>;
const juniorGroupCreativeImages = import.meta.glob('/src/assets/Kids/JuniorGroup/Creative/*.png', { eager: true }) as Record<string, { default: string }>;
const seniorKidsStudioImages = import.meta.glob('/src/assets/Kids/SeniorKids/Studio/*.png', { eager: true }) as Record<string, { default: string }>;
const seniorKidsLifestyleImages = import.meta.glob('/src/assets/Kids/SeniorKids/Lifestyle/*.png', { eager: true }) as Record<string, { default: string }>;
const seniorKidsCreativeImages = import.meta.glob('/src/assets/Kids/SeniorKids/Creative/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Shoes images
const shoesImages = import.meta.glob('/src/assets/Shoes/*.png', { eager: true }) as Record<string, { default: string }>;

// Dynamic import of Sunglasses images
const sunglassesImages = import.meta.glob('/src/assets/Sunglasses/*.png', { eager: true }) as Record<string, { default: string }>;

const subCategoryData: Record<string, { title: string; description: string; images: { id: number; src: string; alt: string }[] }> = {
  "womans": {
    title: "Womans",
    description: "AI-generated portraits and figures",
    images: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      src: womansImages[`/src/assets/Womans/${Math.floor(i / 5) + 1}/${(i % 5) + 1}.png`]?.default || '',
      alt: `AI portrait ${i + 1}`
    }))

  },
  "mens": {
    title: "Mens",
    description: "AI-generated portraits and figures",
    images: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      src: mensImages[`/src/assets/Mens/${Math.floor(i / 5) + 1}/${(i % 5) + 1}.png`]?.default || '',
      alt: `AI portrait ${i + 1}`
    }))

  },
  "shoes": {
    title: "Shoes",
    description: "AI-generated footwear visuals showcasing design, style, and realism",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: shoesImages[`/src/assets/Shoes/${i + 1}.png`]?.default || '',
      alt: `AI shoe ${i + 1}`
    }))
  },
  "sunglasses": {
    title: "Sunglasses",
    description: "AI-generated sunglasses visuals focusing on fashion, realism, and product styling",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: sunglassesImages[`/src/assets/Sunglasses/${i + 1}.png`]?.default || '',
      alt: `AI sunglasses ${i + 1}`
    }))
  },
  "boy": {
    title: "Boy",
    description: "AI-generated infant boy portraits and concepts",
    images: Array.from({ length: 32 }, (_, i) => ({
      id: i + 1,
      src: boysImages[`/src/assets/Infants/Boys/${i + 1}.png`]?.default || '',
      alt: `AI infant boy ${i + 1}`
    }))
  },
  "girl": {
    title: "Girl",
    description: "AI-generated infant girl portraits and concepts",
    images: Array.from({ length: 32 }, (_, i) => ({
      id: i + 1,
      src: girlsImages[`/src/assets/Infants/Girls/${i + 1}.png`]?.default || '',
      alt: `AI infant girl ${i + 1}`
    }))
  },
  "bracelet": {
    title: "Bracelet",
    description: "AI-generated bracelet product visuals",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: braceletImages[`/src/assets/Jewellery/Bracelet/${i + 1}.png`]?.default || '',
      alt: `AI bracelet ${i + 1}`
    }))
  },
  "necklaces": {
    title: "Necklaces",
    description: "AI-generated necklace product visuals",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: necklacesImages[`/src/assets/Jewellery/Necklaces/${i + 1}.png`]?.default || '',
      alt: `AI necklace ${i + 1}`
    }))
  },
  "chock-set": {
    title: "Chock Set",
    description: "AI-generated chock set product visuals",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: chockSetImages[`/src/assets/Jewellery/ChockSet/${i + 1}.png`]?.default || '',
      alt: `AI chock set ${i + 1}`
    }))
  },
  "dining-table": {
    title: "Dining Table",
    description: "AI-generated dining table product visuals",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: diningTableImages[`/src/assets/Farnichar/DiningTable/${i + 1}.png`]?.default || '',
      alt: `AI dining table ${i + 1}`
    }))
  },
  "chair": {
    title: "Chair",
    description: "AI-generated chair product visuals",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: chairImages[`/src/assets/Farnichar/Chair/${i + 1}.png`]?.default || '',
      alt: `AI chair ${i + 1}`
    }))
  },
  "bed": {
    title: "Bed",
    description: "AI-generated bed product visuals",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: bedImages[`/src/assets/Farnichar/Bed/${i + 1}.png`]?.default || '',
      alt: `AI bed ${i + 1}`
    }))
  },
  "early-learners-studio": {
    title: "Studio",
    description: "AI-generated studio-style early learners portraits",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: earlyLearnersStudioImages[`/src/assets/Kids/EarlyLearners/Studio/${i + 1}.png`]?.default || '',
      alt: `Early Learners Studio ${i + 1}`
    }))
  },
  "early-learners-lifestyle": {
    title: "Lifestyle",
    description: "AI-generated lifestyle early learners portraits",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: earlyLearnersLifestyleImages[`/src/assets/Kids/EarlyLearners/Lifestyle/${i + 1}.png`]?.default || '',
      alt: `Early Learners Lifestyle ${i + 1}`
    }))
  },
  "early-learners-creative": {
    title: "Creative",
    description: "AI-generated creative early learners portraits",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: earlyLearnersCreativeImages[`/src/assets/Kids/EarlyLearners/Creative/${i + 1}.png`]?.default || '',
      alt: `Early Learners Creative ${i + 1}`
    }))
  },
  "junior-group-studio": {
    title: "Studio",
    description: "AI-generated studio-style junior group portraits",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: juniorGroupStudioImages[`/src/assets/Kids/JuniorGroup/Studio/${i + 1}.png`]?.default || '',
      alt: `Junior Group Studio ${i + 1}`
    }))
  },
  "junior-group-lifestyle": {
    title: "Lifestyle",
    description: "AI-generated lifestyle junior group portraits",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: juniorGroupLifestyleImages[`/src/assets/Kids/JuniorGroup/Lifestyle/${i + 1}.png`]?.default || '',
      alt: `Junior Group Lifestyle ${i + 1}`
    }))
  },
  "junior-group-creative": {
    title: "Creative",
    description: "AI-generated creative junior group portraits",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: juniorGroupCreativeImages[`/src/assets/Kids/JuniorGroup/Creative/${i + 1}.png`]?.default || '',
      alt: `Junior Group Creative ${i + 1}`
    }))
  },
  "senior-kids-studio": {
    title: "Studio",
    description: "AI-generated studio-style senior kids portraits",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: seniorKidsStudioImages[`/src/assets/Kids/SeniorKids/Studio/${i + 1}.png`]?.default || '',
      alt: `Senior Kids Studio ${i + 1}`
    }))
  },
  "senior-kids-lifestyle": {
    title: "Lifestyle",
    description: "AI-generated lifestyle senior kids portraits",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: seniorKidsLifestyleImages[`/src/assets/Kids/SeniorKids/Lifestyle/${i + 1}.png`]?.default || '',
      alt: `Senior Kids Lifestyle ${i + 1}`
    }))
  },
  "senior-kids-creative": {
    title: "Creative",
    description: "AI-generated creative senior kids portraits",
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: seniorKidsCreativeImages[`/src/assets/Kids/SeniorKids/Creative/${i + 1}.png`]?.default || '',
      alt: `Senior Kids Creative ${i + 1}`
    }))
  },
};

const foldersData: Record<string, { id: number; title: string; thumbnail: string; images: string[] }[]> = {
  "womans": Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Folder ${i + 1}`,
    thumbnail: womansImages[`/src/assets/Womans/${i + 1}/1.png`]?.default || '',
    images: Array.from({ length: 5 }, (_, j) => womansImages[`/src/assets/Womans/${i + 1}/${j + 1}.png`]?.default || '')
  })),
  "mens": Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Folder ${i + 1}`,
    thumbnail: mensImages[`/src/assets/Mens/${i + 1}/1.png`]?.default || '',
    images: Array.from({ length: 5 }, (_, j) => mensImages[`/src/assets/Mens/${i + 1}/${j + 1}.png`]?.default || '')
  })),
  "studio-womans": Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Folder ${i + 1}`,
    thumbnail: studioWomansImages[`/src/assets/Studio/Woman/${i + 1}/1.png`]?.default || '',
    images: Array.from({ length: 5 }, (_, j) => studioWomansImages[`/src/assets/Studio/Woman/${i + 1}/${j + 1}.png`]?.default || '')
  })),
  "studio-mens": Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Folder ${i + 1}`,
    thumbnail: studioMensImages[`/src/assets/Studio/Men/${i + 1}/1.png`]?.default || '',
    images: Array.from({ length: 5 }, (_, j) => studioMensImages[`/src/assets/Studio/Men/${i + 1}/${j + 1}.png`]?.default || '')
  }))
};

const infantsSubCategories: { id: number; title: string; description: string; image: string; slug: string }[] = [
  { id: 1, title: "Boy", description: "AI-generated infant boy portraits", image: Infants_Boy, slug: "boy" },
  { id: 2, title: "Girl", description: "AI-generated infant girl portraits", image: Infants_Girl, slug: "girl" },
];

const jewellerySubCategories: { id: number; title: string; description: string; image: string; slug: string }[] = [
  { id: 1, title: "Bracelet", description: "AI-generated bracelet product visuals", image: Bracelet, slug: "bracelet" },
  { id: 2, title: "Necklaces", description: "AI-generated necklace product visuals", image: Necklaces, slug: "necklaces" },
  { id: 3, title: "Chock Set", description: "AI-generated chock set product visuals", image: ChockSet, slug: "chock-set" },
];

const furnitureSubCategories: { id: number; title: string; description: string; image: string; slug: string }[] = [
  { id: 1, title: "Dining Table", description: "AI-generated dining table product visuals", image: DiningTable, slug: "dining-table" },
  { id: 2, title: "Chair", description: "AI-generated chair product visuals", image: Chair, slug: "chair" },
  { id: 3, title: "Bed", description: "AI-generated bed product visuals", image: Bed, slug: "bed" },
];

const studioSubCategories: { id: number; title: string; description: string; image: string; slug: string }[] = [
  { id: 1, title: "Womans", description: "AI-generated studio-style woman portraits", image: StudioWomans, slug: "womans" },
  { id: 2, title: "Mens", description: "AI-generated studio-style man portraits", image: StudioMens, slug: "mens" },
];

const kidsSubCategories: { id: number; title: string; description: string; image: string; slug: string }[] = [
  { id: 1, title: "EarlyLearners", description: "AI-generated portraits for early learners", image: EarlyLearners, slug: "early-learners" },
  { id: 2, title: "JuniorGroup", description: "AI-generated portraits for junior group", image: JuniorGroup, slug: "junior-group" },
  { id: 3, title: "SeniorKids", description: "AI-generated portraits for senior kids", image: SeniorKids, slug: "senior-kids" },
];

const earlyLearnersSubCategories: { id: number; title: string; description: string; image: string; slug: string }[] = [
  { id: 1, title: "Studio", description: "AI-generated studio-style early learners portraits", image: EarlyLearnersStudioThumb, slug: "early-learners-studio" },
  { id: 2, title: "Lifestyle", description: "AI-generated lifestyle early learners portraits", image: EarlyLearnersLifestyleThumb, slug: "early-learners-lifestyle" },
  { id: 3, title: "Creative", description: "AI-generated creative early learners portraits", image: EarlyLearnersCreativeThumb, slug: "early-learners-creative" },
];

const juniorGroupSubCategories: { id: number; title: string; description: string; image: string; slug: string }[] = [
  { id: 1, title: "Studio", description: "AI-generated studio-style junior group portraits", image: JuniorGroupStudioThumb, slug: "junior-group-studio" },
  { id: 2, title: "Lifestyle", description: "AI-generated lifestyle junior group portraits", image: JuniorGroupLifestyleThumb, slug: "junior-group-lifestyle" },
  { id: 3, title: "Creative", description: "AI-generated creative junior group portraits", image: JuniorGroupCreativeThumb, slug: "junior-group-creative" },
];

const seniorKidsSubCategories: { id: number; title: string; description: string; image: string; slug: string }[] = [
  { id: 1, title: "Studio", description: "AI-generated studio-style senior kids portraits", image: SeniorKidsStudioThumb, slug: "senior-kids-studio" },
  { id: 2, title: "Lifestyle", description: "AI-generated lifestyle senior kids portraits", image: SeniorKidsLifestyleThumb, slug: "senior-kids-lifestyle" },
  { id: 3, title: "Creative", description: "AI-generated creative senior kids portraits", image: SeniorKidsCreativeThumb, slug: "senior-kids-creative" },
];


const categoryData: Record<string, { title: string; description: string; items?: { id: number; title: string; image?: string; video?: string; tags: string[] }[]; subCategories?: { id: number; title: string; description: string; image: string; slug: string }[] }> = {
  "ai-generation": {
    title: "AI Template Images",
    description: "Exploring the boundaries of artificial creativity through machine learning and neural networks.",
    subCategories: [
      { id: 1, title: "Womans", description: "AI-generated portraits and figures", image: Womans, slug: "womans" },
      { id: 2, title: "Mens", description: "AI-generated portraits and figures", image: Mens, slug: "mens" },
      { id: 3, title: "Infants", description: "AI-generated infant portraits and concepts", image: Infants, slug: "infants" },
      { id: 4, title: "Jewellery", description: "AI-generated jewellery product visuals", image: Jewellery, slug: "jewellery" },
      { id: 5, title: "Furniture", description: "AI-generated furniture product visualizations", image: Furniture, slug: "furniture" },
      { id: 6, title: "Studio Images", description: "AI-generated studio-style portraits and compositions", image: StudioImage, slug: "studio-images" },
      { id: 7, title: "Kids", description: "AI-generated kids portraits and concepts", image: Kids, slug: "kids" },
      { id: 8, title: "Shoes", description: "AI-generated footwear visuals", image: Shoes, slug: "shoes" },
      { id: 9, title: "Sunglasses", description: "AI-generated sunglasses visuals", image: SunglassesThumb, slug: "sunglasses" },
    ],
  },
  "AI-Video-Generation": {
    title: "AI Video Generation",
    description: "Cinematic storytelling in motion through high-quality video production.",
    items: [
      { id: 1, title: "AI Woman Product", video: Fazyo_video, tags: ["AI Generated", "Product"] },
      { id: 2, title: "AI Christmas Ad", video: christmas_video, tags: ["AI Generated", "Holiday"] },
      { id: 3, title: "AI Sunglasses Films", video: sunglasses, tags: ["AI Generated", "Fashion"] },
      { id: 4, title: "AI Hoodie Promo", video: Hoodie, tags: ["AI Generated", "Apparel"] },
      { id: 5, title: "Super You Promo", video: Super_you_video, tags: ["AI Generated", "Apparel"] },
      { id: 6, title: "AI Woman cloth Product", video: AI_Woman_cloth_Product, tags: ["AI Generated", "Apparel"] },
      { id: 7, title: "AI Men Fashion cloth", video: Men_Fashion_cloth, tags: ["AI Generated", "Apparel"] },
      { id: 7, title: "AI Men Fashion", video: Men_Fashion_cloths, tags: ["AI Generated", "Apparel"] },

    ],
  },
};

const WorkCategory = () => {
  const { categoryId, subCategoryId, subSubCategoryId, subSubSubCategoryId } = useParams<{ categoryId: string; subCategoryId?: string; subSubCategoryId?: string; subSubSubCategoryId?: string }>();
  const category = categoryData[categoryId || ""] || categoryData["ai-generation"];
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openVideoModal = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const openImageModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const openFolderModal = (folderId: number) => {
    setSelectedFolderId(folderId);
    setActiveImageIndex(0);
  };

  const closeFolderModal = () => {
    setSelectedFolderId(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeImageModal();
        closeVideoModal();
        closeFolderModal();
      }
      if (selectedFolderId !== null) {
        if (event.key === 'ArrowLeft') {
          setActiveImageIndex((activeImageIndex - 1 + 5) % 5);
        } else if (event.key === 'ArrowRight') {
          setActiveImageIndex((activeImageIndex + 1) % 5);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedFolderId, activeImageIndex]);

  // If subCategoryId exists, render sub-category page
  if (subCategoryId) {
    // Special case for infants with sub-sub-categories
    if (subCategoryId === "infants" && !subSubCategoryId) {
      return (
        <div className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/works/${categoryId}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {category.title}
              </Link>
            </motion.div>

            {/* Header */}
            <ScrollReveal>
              <div className="mb-16">
                <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                  Infants
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  AI-generated infant portraits and concepts
                </p>
              </div>
            </ScrollReveal>

            {/* Infants Sub-Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infantsSubCategories.map((subCategory, index) => (
                <ScrollReveal key={subCategory.id}>
                  <Link to={`/works/${categoryId}/${subCategoryId}/${subCategory.slug}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                      whileHover={{ y: -8 }}
                    >
                      <div className="aspect-square overflow-hidden">
                        <motion.img
                          src={subCategory.image}
                          alt={subCategory.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-xl font-bold mb-2">{subCategory.title}</h3>
                        <p className="text-muted-foreground text-sm">{subCategory.description}</p>
                      </div>

                      {/* View icon */}
                      <motion.div
                        className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </motion.div>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Special case for studio-images with sub-sub-categories
    if (subCategoryId === "studio-images" && !subSubCategoryId) {
      return (
        <div className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/works/${categoryId}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {category.title}
              </Link>
            </motion.div>

            {/* Header */}
            <ScrollReveal>
              <div className="mb-16">
                <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                  Studio Images
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  AI-generated studio-style portraits and compositions
                </p>
              </div>
            </ScrollReveal>

            {/* Studio Sub-Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {studioSubCategories.map((subCategory, index) => (
                <ScrollReveal key={subCategory.id}>
                  <Link to={`/works/${categoryId}/${subCategoryId}/${subCategory.slug}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                      whileHover={{ y: -8 }}
                    >
                      <div className="aspect-[3/4] overflow-hidden">
                        <motion.img
                          src={subCategory.image}
                          alt={subCategory.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-xl font-bold mb-2">{subCategory.title}</h3>
                        <p className="text-muted-foreground text-sm">{subCategory.description}</p>
                      </div>

                      {/* View icon */}
                      <motion.div
                        className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </motion.div>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Special case for kids with sub-sub-categories
    if (subCategoryId === "kids" && !subSubCategoryId) {
      return (
        <div className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/works/${categoryId}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {category.title}
              </Link>
            </motion.div>

            {/* Header */}
            <ScrollReveal>
              <div className="mb-16">
                <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                  Kids
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  AI-generated kids portraits and concepts
                </p>
              </div>
            </ScrollReveal>

            {/* Kids Sub-Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {kidsSubCategories.map((subCategory, index) => (
                <ScrollReveal key={subCategory.id}>
                  <Link to={`/works/${categoryId}/${subCategoryId}/${subCategory.slug}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                      whileHover={{ y: -8 }}
                    >
                      <div className="aspect-square overflow-hidden">
                        <motion.img
                          src={subCategory.image}
                          alt={subCategory.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-xl font-bold mb-2">{subCategory.title}</h3>
                        <p className="text-muted-foreground text-sm">{subCategory.description}</p>
                      </div>

                      {/* View icon */}
                      <motion.div
                        className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </motion.div>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Special case for early-learners with sub-sub-sub-categories
    if (subSubCategoryId === "early-learners" && !subSubSubCategoryId) {
      return (
        <div className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/works/${categoryId}/${subCategoryId}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Kids
              </Link>
            </motion.div>

            {/* Header */}
            <ScrollReveal>
              <div className="mb-16">
                <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                  Early Learners (Ages 3–4)
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  AI-generated portraits for early learners
                </p>
              </div>
            </ScrollReveal>

            {/* Early Learners Sub-Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {earlyLearnersSubCategories.map((subCategory, index) => (
                <ScrollReveal key={subCategory.id}>
                  <Link to={`/works/${categoryId}/${subCategoryId}/${subSubCategoryId}/${subCategory.slug}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                      whileHover={{ y: -8 }}
                    >
                      <div className="aspect-[3/4] overflow-hidden">
                        <motion.img
                          src={subCategory.image}
                          alt={subCategory.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-xl font-bold mb-2">{subCategory.title}</h3>
                        <p className="text-muted-foreground text-sm">{subCategory.description}</p>
                      </div>

                      {/* View icon */}
                      <motion.div
                        className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </motion.div>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Special case for junior-group with sub-sub-sub-categories
    if (subSubCategoryId === "junior-group" && !subSubSubCategoryId) {
      return (
        <div className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/works/${categoryId}/${subCategoryId}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Kids
              </Link>
            </motion.div>

            {/* Header */}
            <ScrollReveal>
              <div className="mb-16">
                <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                  Junior Group (Ages 6–7)
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  AI-generated portraits for junior group
                </p>
              </div>
            </ScrollReveal>

            {/* Junior Group Sub-Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {juniorGroupSubCategories.map((subCategory, index) => (
                <ScrollReveal key={subCategory.id}>
                  <Link to={`/works/${categoryId}/${subCategoryId}/${subSubCategoryId}/${subCategory.slug}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                      whileHover={{ y: -8 }}
                    >
                      <div className="aspect-[3/4] overflow-hidden">
                        <motion.img
                          src={subCategory.image}
                          alt={subCategory.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-xl font-bold mb-2">{subCategory.title}</h3>
                        <p className="text-muted-foreground text-sm">{subCategory.description}</p>
                      </div>

                      {/* View icon */}
                      <motion.div
                        className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </motion.div>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Special case for senior-kids with sub-sub-sub-categories
    if (subSubCategoryId === "senior-kids" && !subSubSubCategoryId) {
      return (
        <div className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/works/${categoryId}/${subCategoryId}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Kids
              </Link>
            </motion.div>

            {/* Header */}
            <ScrollReveal>
              <div className="mb-16">
                <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                  Senior Kids (Ages 8–9)
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  AI-generated portraits for senior kids
                </p>
              </div>
            </ScrollReveal>

            {/* Senior Kids Sub-Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seniorKidsSubCategories.map((subCategory, index) => (
                <ScrollReveal key={subCategory.id}>
                  <Link to={`/works/${categoryId}/${subCategoryId}/${subSubCategoryId}/${subCategory.slug}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                      whileHover={{ y: -8 }}
                    >
                      <div className="aspect-[3/4] overflow-hidden">
                        <motion.img
                          src={subCategory.image}
                          alt={subCategory.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-xl font-bold mb-2">{subCategory.title}</h3>
                        <p className="text-muted-foreground text-sm">{subCategory.description}</p>
                      </div>

                      {/* View icon */}
                      <motion.div
                        className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </motion.div>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Special case for jewellery with sub-sub-categories
    if (subCategoryId === "jewellery" && !subSubCategoryId) {
      return (
        <div className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/works/${categoryId}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {category.title}
              </Link>
            </motion.div>

            {/* Header */}
            <ScrollReveal>
              <div className="mb-16">
                <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                  Jewellery
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  AI-generated jewellery product visuals
                </p>
              </div>
            </ScrollReveal>

            {/* Jewellery Sub-Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {jewellerySubCategories.map((subCategory, index) => (
                <ScrollReveal key={subCategory.id}>
                  <Link to={`/works/${categoryId}/${subCategoryId}/${subCategory.slug}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                      whileHover={{ y: -8 }}
                    >
                      <div className="aspect-square overflow-hidden">
                        <motion.img
                          src={subCategory.image}
                          alt={subCategory.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-xl font-bold mb-2">{subCategory.title}</h3>
                        <p className="text-muted-foreground text-sm">{subCategory.description}</p>
                      </div>

                      {/* View icon */}
                      <motion.div
                        className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </motion.div>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Special case for furniture with sub-sub-categories
    if (subCategoryId === "furniture" && !subSubCategoryId) {
      return (
        <div className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/works/${categoryId}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {category.title}
              </Link>
            </motion.div>

            {/* Header */}
            <ScrollReveal>
              <div className="mb-16">
                <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                  Furniture
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  AI-generated furniture product visualizations
                </p>
              </div>
            </ScrollReveal>

            {/* furniture Sub-Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {furnitureSubCategories.map((subCategory, index) => (
                <ScrollReveal key={subCategory.id}>
                  <Link to={`/works/${categoryId}/${subCategoryId}/${subCategory.slug}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                      whileHover={{ y: -8 }}
                    >
                      <div className="aspect-square overflow-hidden">
                        <motion.img
                          src={subCategory.image}
                          alt={subCategory.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-xl font-bold mb-2">{subCategory.title}</h3>
                        <p className="text-muted-foreground text-sm">{subCategory.description}</p>
                      </div>

                      {/* View icon */}
                      <motion.div
                        className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </motion.div>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Special case for Womans/Mens folder details
    if ((subCategoryId === "womans" || subCategoryId === "mens") && subSubCategoryId?.startsWith("folder-")) {
      const folderId = parseInt(subSubCategoryId.split("-")[1]);
      const folderData = foldersData[subCategoryId]?.find(f => f.id === folderId);

      if (!folderData) return <NotFound />;

      return (
        <div className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/works/${categoryId}/${subCategoryId}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {subCategoryId === "womans" ? "Womans" : "Mens"}
              </Link>
            </motion.div>

            {/* Header */}
            <ScrollReveal>
              <div className="mb-16">
                <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                  {folderData.title}
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  {subCategoryId === "womans" ? "Womans" : "Mens"} Collection
                </p>
              </div>
            </ScrollReveal>

            {/* Images Grid - 5 images in a row (responsive) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {folderData.images.map((imgSrc, index) => (
                <ScrollReveal key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer card-hover"
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src={imgSrc}
                      alt={`${folderData.title} Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* View icon */}
                    <motion.div
                      className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-20"
                      onClick={(e) => {
                        e.stopPropagation();
                        openImageModal({ src: imgSrc, alt: `${folderData.title} Image ${index + 1}` });
                      }}
                    >
                      <Maximize2 className="w-4 h-4 text-primary" />
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Special case for Studio Womans/Mens folder details
    if (subCategoryId === "studio-images" && (subSubCategoryId === "womans" || subSubCategoryId === "mens") && subSubSubCategoryId?.startsWith("folder-")) {
      const folderId = parseInt(subSubSubCategoryId.split("-")[1]);
      const folderData = foldersData[`studio-${subSubCategoryId}`]?.find(f => f.id === folderId);

      if (!folderData) return <NotFound />;

      return (
        <div className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/works/${categoryId}/${subCategoryId}/${subSubCategoryId}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {subSubCategoryId === "womans" ? "Womans" : "Mens"}
              </Link>
            </motion.div>

            {/* Header */}
            <ScrollReveal>
              <div className="mb-16">
                <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                  {folderData.title}
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Studio {subSubCategoryId === "womans" ? "Womans" : "Mens"} Collection
                </p>
              </div>
            </ScrollReveal>

            {/* Images Grid - 5 images in a row (responsive) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {folderData.images.map((imgSrc, index) => (
                <ScrollReveal key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer card-hover"
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src={imgSrc}
                      alt={`${folderData.title} Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* View icon */}
                    <motion.div
                      className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-20"
                      onClick={(e) => {
                        e.stopPropagation();
                        openImageModal({ src: imgSrc, alt: `${folderData.title} Image ${index + 1}` });
                      }}
                    >
                      <Maximize2 className="w-4 h-4 text-primary" />
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // For sub-sub-category pages (boy/girl) or normal sub-categories
    const currentCategoryId = subSubSubCategoryId || subSubCategoryId || subCategoryId;
    const subCategory = subCategoryData[currentCategoryId];
    if (!subCategory) return <NotFound />;

    return (
      <div className="min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to={subSubSubCategoryId ? `/works/${categoryId}/${subCategoryId}/${subSubCategoryId}` : subSubCategoryId ? `/works/${categoryId}/${subCategoryId}` : `/works/${categoryId}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {subSubSubCategoryId ? (subSubCategoryId === 'early-learners' ? 'Early Learners (Ages 3–4)' : subSubCategoryId === 'junior-group' ? 'Junior Group (Ages 6–7)' : subSubCategoryId === 'senior-kids' ? 'Senior Kids (Ages 8–9)' : subSubCategoryId) : subSubCategoryId ? (subCategoryId === 'infants' ? 'Infants' : subCategoryId === 'jewellery' ? 'Jewellery' : subCategoryId === 'furniture' ? 'Furniture' : subCategoryId === 'studio-images' ? 'Studio Images' : subCategoryId === 'kids' ? 'Kids' : category.title) : category.title}
            </Link>
          </motion.div>

          {/* Breadcrumb */}
          <div className="mb-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/works" className="hover:text-primary">Selected Works</Link>
              <span>/</span>
              <Link to={`/works/${categoryId}`} className="hover:text-primary">AI Image Generation</Link>
              {subCategoryId && <><span>/</span><Link to={`/works/${categoryId}/${subCategoryId}`} className="hover:text-primary">{subCategoryId === 'kids' ? 'Kids' : subCategoryId === 'infants' ? 'Infants' : subCategoryId === 'jewellery' ? 'Jewellery' : subCategoryId === 'furniture' ? 'Furniture' : subCategoryId === 'studio-images' ? 'Studio Images' : subCategoryId}</Link></>}
              {subSubCategoryId && <><span>/</span><Link to={`/works/${categoryId}/${subCategoryId}/${subSubCategoryId}`} className="hover:text-primary">{subSubCategoryId === 'early-learners' ? 'Early Learners (Ages 3–4)' : subSubCategoryId === 'junior-group' ? 'Junior Group (Ages 6–7)' : subSubCategoryId === 'senior-kids' ? 'Senior Kids (Ages 8–9)' : subSubCategoryId === 'boy' ? 'Boy' : subSubCategoryId === 'girl' ? 'Girl' : subSubCategoryId === 'bracelet' ? 'Bracelet' : subSubCategoryId === 'necklaces' ? 'Necklaces' : subSubCategoryId === 'chock-set' ? 'Chock Set' : subSubCategoryId === 'dining-table' ? 'Dining Table' : subSubCategoryId === 'chair' ? 'Chair' : subSubCategoryId === 'bed' ? 'Bed' : subSubCategoryId === 'womans' ? 'Womans' : subSubCategoryId === 'mens' ? 'Mens' : subSubCategoryId}</Link></>}
              {subSubSubCategoryId && <><span>/</span><span className="text-foreground">{subSubSubCategoryId === 'studio' ? 'Studio' : subSubSubCategoryId === 'lifestyle' ? 'Lifestyle' : subSubSubCategoryId === 'creative' ? 'Creative' : subSubSubCategoryId}</span></>}
            </nav>
          </div>

          {/* Header */}
          <ScrollReveal>
            <div className="mb-16">
              <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                {subCategory.title}
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                {subCategory.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Content Grid */}
          {subSubSubCategoryId ? (
            /* Images Grid for deepest level */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subCategory.images.map((image, index) => (
                <ScrollReveal key={image.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer card-hover"
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* View icon */}
                    <motion.div
                      className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-20"
                      onClick={(e) => {
                        e.stopPropagation();
                        openImageModal(image);
                      }}
                    >
                      <Maximize2 className="w-4 h-4 text-primary" />
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          ) : (subCategoryId === "studio-images" && (subSubCategoryId === "womans" || subSubCategoryId === "mens") && subSubSubCategoryId?.startsWith("folder-")) ? (
            /* Studio Folder Grid */
            (() => {
              const folderId = parseInt(subSubSubCategoryId.split("-")[1]);
              const folderData = foldersData[`studio-${subSubCategoryId}`]?.find(f => f.id === folderId);

              if (!folderData) return <NotFound />;

              return (
                <div className="min-h-screen py-32 px-6">
                  <div className="max-w-7xl mx-auto">
                    {/* Back button */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Link
                        to={`/works/${categoryId}/${subCategoryId}/${subSubCategoryId}`}
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back to {subSubCategoryId === "womans" ? "Womans" : "Mens"}
                      </Link>
                    </motion.div>

                    {/* Header */}
                    <ScrollReveal>
                      <div className="mb-16">
                        <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                          {folderData.title}
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                          Studio {subSubCategoryId === "womans" ? "Womans" : "Mens"} Collection
                        </p>
                      </div>
                    </ScrollReveal>

                    {/* Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {folderData.images.map((imgSrc, index) => (
                        <ScrollReveal key={index}>
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer card-hover"
                            whileHover={{ y: -8 }}
                          >
                            <img
                              src={imgSrc}
                              alt={`${folderData.title} Image ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* View icon */}
                            <motion.div
                              className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              onClick={() => openImageModal({ src: imgSrc, alt: `${folderData.title} Image ${index + 1}` })}
                            >
                              <Maximize2 className="w-4 h-4 text-primary" />
                            </motion.div>
                          </motion.div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (subCategoryId === "womans" || subCategoryId === "mens" || (subCategoryId === "studio-images" && (subSubCategoryId === "womans" || subSubCategoryId === "mens"))) ? (
            /* Folders Grid */
            <div className={`grid gap-6 ${(subCategoryId === "studio-images") ? 'grid-cols-5' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
              {foldersData[subCategoryId === "studio-images" ? `studio-${subSubCategoryId}` : subCategoryId].map((folder, index) => (
                <ScrollReveal key={folder.id}>
                  <Link to={subCategoryId === "studio-images" ? `/works/${categoryId}/${subCategoryId}/${subSubCategoryId}/folder-${folder.id}` : `/works/${categoryId}/${subCategoryId}/folder-${folder.id}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className={`group relative rounded-2xl overflow-hidden cursor-pointer card-hover ${(subCategoryId === "studio-images") ? 'aspect-[3/4]' : 'aspect-square'}`}
                      whileHover={{ y: -8 }}
                    >
                      <img
                        src={folder.thumbnail}
                        alt={folder.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-xl font-bold mb-2">
                          {folder.title}
                        </h3>
                      </div>

                      {/* View icon */}
                      <motion.div className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </motion.div>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            /* Images Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subCategory.images.map((image, index) => (
                <ScrollReveal key={image.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer card-hover"
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* View icon */}
                    <motion.div
                      className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-20"
                      onClick={(e) => {
                        e.stopPropagation();
                        openImageModal(image);
                      }}
                    >
                      <Maximize2 className="w-4 h-4 text-primary" />
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          )}


          {/* Image Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                onClick={closeImageModal}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative max-w-4xl max-h-[80vh] w-full mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={closeImageModal}
                    className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  {/* Image */}
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-contain rounded-lg"
                    style={{ maxHeight: '80vh' }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Folder Modal */}
          <AnimatePresence>
            {selectedFolderId && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                onClick={closeFolderModal}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative w-full h-full flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={closeFolderModal}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  {/* Prev button */}
                  <button
                    onClick={() => setActiveImageIndex((activeImageIndex - 1 + 5) % 5)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                  >
                    <ArrowLeft className="w-6 h-6 text-white" />
                  </button>

                  {/* Next button */}
                  <button
                    onClick={() => setActiveImageIndex((activeImageIndex + 1) % 5)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                  >
                    <ArrowLeft className="w-6 h-6 text-white rotate-180" />
                  </button>

                  {/* Image */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageIndex}
                      src={foldersData[subCategoryId === "studio-images" ? `studio-${subSubCategoryId}` : subCategoryId].find(f => f.id === selectedFolderId)?.images[activeImageIndex]}
                      alt={`Image ${activeImageIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(event, info) => {
                        if (info.offset.x > 50) {
                          setActiveImageIndex((activeImageIndex - 1 + 5) % 5);
                        } else if (info.offset.x < -50) {
                          setActiveImageIndex((activeImageIndex + 1) % 5);
                        }
                      }}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // If category has subCategories, render sub-category cards
  if (category.subCategories) {
    return (
      <div className="min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Works
            </Link>
          </motion.div>

          {/* Header */}
          <ScrollReveal>
            <div className="mb-16">
              <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
                {category.title}
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                {category.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Sub-Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.subCategories.map((subCategory, index) => (
              <ScrollReveal key={subCategory.id}>
                <Link to={`/works/${categoryId}/${subCategory.slug}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                    whileHover={{ y: -8 }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <motion.img
                        src={subCategory.image}
                        alt={subCategory.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="font-display text-xl font-bold mb-2">{subCategory.title}</h3>
                      <p className="text-muted-foreground text-sm">{subCategory.description}</p>
                    </div>

                    {/* View icon */}
                    <motion.div
                      className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </motion.div>
                  </motion.article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default: render items grid for other categories

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Works
          </Link>
        </motion.div>

        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
              {category.title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {category.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.items.map((item, index) => (
            <ScrollReveal key={item.id}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                whileHover={{ y: -8 }}
              >
                <div className="aspect-square overflow-hidden">
                  {item.video ? (
                    <motion.video
                      src={item.video}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View icon */}
                {item.video ? (
                  <motion.div
                    className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={() => openVideoModal(item.video!)}
                  >
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </motion.div>
                )}
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeVideoModal}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Video player without controls */}
              <video
                src={selectedVideo}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain rounded-lg"
                style={{ maxHeight: '80vh' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkCategory;
