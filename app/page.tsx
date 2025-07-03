"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  Instagram,
  Youtube,
  TwitterIcon as TikTok,
  Mail,
  Star,
  Users,
  TrendingUp,
  Heart,
  Play,
  Check,
  Sparkles,
  Clock,
  Globe,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Box, Cylinder, useScroll, ScrollControls, Sparkles as ThreeSparkles } from "@react-three/drei"
import { useSpring, animated } from "@react-spring/three"

// 3D Cosmetic Product Components
function Lipstick({ position, color = "#d4af37", scale = 1 }) {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  const { scale: animatedScale } = useSpring({
    scale: hovered ? scale * 1.2 : scale,
    config: { tension: 300, friction: 10 },
  })

  return (
    <animated.group
      ref={groupRef}
      position={position}
      scale={animatedScale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Lipstick case */}
      <Cylinder args={[0.3, 0.3, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Cylinder>
      {/* Lipstick bullet */}
      <Cylinder args={[0.25, 0.15, 0.8]} position={[0, 1.4, 0]}>
        <meshStandardMaterial color="#ff69b4" metalness={0.3} roughness={0.1} />
      </Cylinder>
    </animated.group>
  )
}

function Foundation({ position, color = "#f4c2c2", scale = 1 }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.15
    }
  })

  const { scale: animatedScale } = useSpring({
    scale: hovered ? scale * 1.15 : scale,
    config: { tension: 300, friction: 10 },
  })

  return (
    <animated.mesh
      ref={meshRef}
      position={position}
      scale={animatedScale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Cylinder args={[0.8, 0.8, 3]}>
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
      </Cylinder>
    </animated.mesh>
  )
}

function EyeshadowPalette({ position, scale = 1 }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.8) * 0.12
    }
  })

  const { scale: animatedScale } = useSpring({
    scale: hovered ? scale * 1.1 : scale,
    config: { tension: 300, friction: 10 },
  })

  return (
    <animated.group
      ref={meshRef}
      position={position}
      scale={animatedScale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Palette base */}
      <Box args={[2, 0.3, 1.5]}>
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </Box>
      {/* Color squares */}
      {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
        <Box key={i} args={[0.25, 0.1, 0.25]} position={[x, 0.2, 0]}>
          <meshStandardMaterial
            color={["#ff69b4", "#dda0dd", "#f0e68c", "#ffc0cb"][i]}
            metalness={0.2}
            roughness={0.8}
          />
        </Box>
      ))}
    </animated.group>
  )
}

function PerfumeBottle({ position, scale = 1 }) {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.4
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2.2) * 0.08
    }
  })

  const { scale: animatedScale } = useSpring({
    scale: hovered ? scale * 1.25 : scale,
    config: { tension: 300, friction: 10 },
  })

  return (
    <animated.group
      ref={groupRef}
      position={position}
      scale={animatedScale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Bottle body */}
      <Cylinder args={[0.6, 0.8, 2.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffc0cb" transparent opacity={0.8} metalness={0.1} roughness={0.1} />
      </Cylinder>
      {/* Bottle cap */}
      <Cylinder args={[0.4, 0.4, 0.6]} position={[0, 1.55, 0]}>
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </Cylinder>
    </animated.group>
  )
}

// Luxury Floating Elements Background
function LuxuryBackground() {
  const scroll = useScroll()
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current && scroll) {
      groupRef.current.rotation.y = scroll.offset * Math.PI * 0.5
      groupRef.current.position.y = -scroll.offset * 5
    }
  })

  return (
    <group ref={groupRef}>
      <Lipstick position={[-8, 3, -8]} color="#d4af37" scale={0.8} />
      <Foundation position={[8, -1, -10]} color="#f4c2c2" scale={0.6} />
      <EyeshadowPalette position={[0, 6, -12]} scale={0.7} />
      <PerfumeBottle position={[-6, -4, -9]} scale={0.5} />
      <Lipstick position={[10, 2, -15]} color="#ffc0cb" scale={0.9} />
      <Foundation position={[-10, -2, -7]} color="#dda0dd" scale={0.7} />
      <ThreeSparkles count={150} scale={[25, 25, 25]} size={3} speed={0.3} color="#d4af37" />
    </group>
  )
}

// 3D Scene Component
function LuxuryScene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 75 }}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#fff5ee" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#d4af37" />
      <pointLight position={[0, 10, 5]} intensity={1} color="#ffc0cb" />

      <ScrollControls pages={8} damping={0.1}>
        <LuxuryBackground />
      </ScrollControls>

      <Environment preset="city" />
    </Canvas>
  )
}

// Custom hook for 3D intersection observer
function use3DIntersectionObserver(options = {}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1, ...options },
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  return [elementRef, isVisible]
}

// 3D Animated Section Component
function Animated3DSection({ children, className = "", delay = 0, animation = "fade-up" }) {
  const [ref, isVisible] = use3DIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) translateX(0) scale(1) rotateX(0) rotateY(0)"
          : animation === "fade-up"
            ? "translateY(100px) rotateX(10deg)"
            : animation === "fade-left"
              ? "translateX(-100px) rotateY(15deg)"
              : animation === "fade-right"
                ? "translateX(100px) rotateY(-15deg)"
                : animation === "scale-3d"
                  ? "scale(0.8) rotateX(20deg) rotateY(20deg)"
                  : "translateY(50px)",
        transitionDelay: `${delay}ms`,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {children}
    </div>
  )
}

// 3D Card Component
function Card3D({ children, className = "", hover3D = true }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`transition-all duration-300 ${className}`}
      style={{
        transform:
          isHovered && hover3D ? "rotateX(5deg) rotateY(5deg) translateZ(20px)" : "rotateX(0) rotateY(0) translateZ(0)",
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}

// Parallax Mouse Effect Hook
function useParallaxMouse() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return mousePosition
}

export default function UGCPortfolio() {
  const mousePosition = useParallaxMouse()

  // Contact form state
  const [formData, setFormData] = useState({
    brandName: "",
    yourName: "",
    email: "",
    projectType: "UGC video content",
    projectDetails: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const projectTypes = [
    "UGC video content",
    "Product Photography",
    "Brand partnership",
    "Product launch campaign",
    "Other",
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link
      const subject = `New Project Inquiry from ${formData.brandName}`
      const body = `
Brand Name: ${formData.brandName}
Your Name: ${formData.yourName}
Email: ${formData.email}
Project Type: ${formData.projectType}

Project Details:
${formData.projectDetails}
      `

      const mailtoLink = `mailto:prabhnoor.kaur.business@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink

      // Reset form
      setFormData({
        brandName: "",
        yourName: "",
        email: "",
        projectType: "UGC video content",
        projectDetails: "",
      })
    } catch (error) {
      console.error("Error sending email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const brands = [
    { name: "Bellavita", logo: "/brand1.jpg" },
    { name: "Cetaphil", logo: "/brand2.png" },
    { name: "Garnier", logo: "/brand3.jpg" },
    { name: "Dot & Key", logo: "/brand4.png" },
    { name: "Lakmé", logo: "/brand5.png" },
    { name: "Minimalist", logo: "/brand6.png" },
    { name: "Innovist", logo: "/brand7.png" },
    { name: "The Derma Co", logo: "/brand8.png" },
    { name: "Plum", logo: "/brand9.png" },
    { name: "L'Oréal", logo: "/brand10.png" },
  ]

  useEffect(() => {
    const videos = document.querySelectorAll("[data-video]")

    videos.forEach((video, index) => {
      const videoNum = index + 1
      const progressBar = document.getElementById(`progress-bar-${videoNum}`)
      const progressContainer = document.getElementById(`progress-${videoNum}`)

      if (video && progressBar && progressContainer) {
        video.addEventListener("timeupdate", () => {
          if (!video.paused) {
            const progress = (video.currentTime / video.duration) * 100
            progressBar.style.width = `${progress}%`
            progressContainer.style.opacity = "1"
          }
        })

        video.addEventListener("ended", () => {
          progressBar.style.width = "100%"
          setTimeout(() => {
            progressContainer.style.opacity = "0"
            progressBar.style.width = "0%"
          }, 500)
        })

        video.addEventListener("play", () => {
          videos.forEach((otherVideo, otherIndex) => {
            if (otherIndex !== index) {
              const otherProgress = document.getElementById(`progress-${otherIndex + 1}`)
              if (otherProgress) otherProgress.style.opacity = "0"
            }
          })
        })
      }
    })
  }, [])

  useEffect(() => {
    // Add CSS for luxury cosmetic brand styling
    const style = document.createElement("style")
    style.textContent = `
      .parallax-element {
        transition: transform 0.1s ease-out;
      }
      
      .card-3d {
        transform-style: preserve-3d;
        perspective: 1000px;
      }
      
      .card-3d:hover {
        transform: rotateX(5deg) rotateY(5deg) translateZ(20px);
      }
      
      .floating-3d {
        animation: floating3d 8s ease-in-out infinite;
      }
      
      @keyframes floating3d {
        0%, 100% { 
          transform: translateY(0px) rotateX(0deg) rotateY(0deg); 
        }
        25% { 
          transform: translateY(-25px) rotateX(3deg) rotateY(3deg); 
        }
        50% { 
          transform: translateY(-15px) rotateX(-3deg) rotateY(-3deg); 
        }
        75% { 
          transform: translateY(-20px) rotateX(2deg) rotateY(2deg); 
        }
      }
      
      .tilt-3d {
        transform-style: preserve-3d;
        transition: transform 0.4s ease;
      }
      
      .tilt-3d:hover {
        transform: rotateX(8deg) rotateY(8deg) scale(1.05);
      }
      
      .luxury-shadow {
        box-shadow: 
          0 15px 40px rgba(212, 175, 55, 0.15),
          0 25px 80px rgba(255, 192, 203, 0.1),
          0 0 0 1px rgba(212, 175, 55, 0.1);
      }
      
      .luxury-shadow:hover {
        box-shadow: 
          0 25px 80px rgba(212, 175, 55, 0.25),
          0 40px 120px rgba(255, 192, 203, 0.2),
          0 0 0 1px rgba(212, 175, 55, 0.2);
      }
      
      .luxury-glass {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(25px);
        border: 1px solid rgba(212, 175, 55, 0.2);
      }
      
      .luxury-glass-alt {
        background: rgba(255, 248, 240, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 192, 203, 0.3);
      }
      
      .rose-gold-glow {
        box-shadow: 
          0 0 30px rgba(212, 175, 55, 0.4),
          0 0 60px rgba(255, 192, 203, 0.3),
          0 0 90px rgba(221, 160, 221, 0.2);
      }
      
      .luxury-gradient-text {
        background: linear-gradient(135deg, #d4af37, #ffc0cb, #dda0dd);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .cream-gradient-bg {
        background: linear-gradient(135deg, #fff8f0, #fdf2f8, #f5f5dc);
      }
      
      .blush-gradient-bg {
        background: linear-gradient(135deg, #fdf2f8, #fff0f5, #fff8f0);
      }
      
      .rose-gold-gradient-bg {
        background: linear-gradient(135deg, #fff8f0, #fdf2f8, #f0e68c);
      }
      
      .brand-logo {
        mix-blend-mode: multiply;
        filter: contrast(1.1) brightness(1.1) sepia(0.1);
      }
      
      .brand-logo:hover {
        mix-blend-mode: normal;
        filter: contrast(1.2) brightness(1.2) sepia(0.2);
      }

      .brand-carousel {
        will-change: transform;
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
      
      .luxury-button {
        background: linear-gradient(135deg, #d4af37, #ffc0cb);
        border: 1px solid rgba(212, 175, 55, 0.3);
        transition: all 0.4s ease;
      }
      
      .luxury-button:hover {
        background: linear-gradient(135deg, #b8941f, #ff91a4);
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
      }
      
      .premium-card {
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 248, 240, 0.9));
        border: 1px solid rgba(212, 175, 55, 0.2);
        backdrop-filter: blur(20px);
      }
      
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* 3D Background Scene */}
      <div className="fixed inset-0 z-0 opacity-40">
        <LuxuryScene3D />
      </div>

      {/* Content with luxury styling */}
      <div className="relative z-10">
        {/* Luxury Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 cream-gradient-bg parallax-element opacity-90"
            style={{
              transform: `translateX(${mousePosition.x * 15}px) translateY(${mousePosition.y * 15}px)`,
            }}
          />

          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <Animated3DSection animation="fade-right" className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-light text-gray-800 floating-3d">
                  
                  <span className="block luxury-gradient-text font-medium rose-gold-glow">NOORIVERSE</span>
                </h1>
                <p className="text-2xl text-gray-600 font-light tracking-wide">Beauty Content Creator</p>
                <p className="text-lg text-gray-500 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Crafting sophisticated UGC that elevates premium beauty brands with authentic elegance
                </p>
              </div>

              <div className="flex justify-center lg:justify-start gap-6">
                {[Instagram, Youtube, TikTok].map((Icon, i) => (
                  <Card3D key={i}>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full luxury-glass border-rose-300 text-rose-600 hover:text-white hover:bg-gradient-to-r hover:from-rose-400 hover:to-pink-400 tilt-3d w-14 h-14 bg-transparent"
                    >
                      <Icon className="w-6 h-6" />
                    </Button>
                  </Card3D>
                ))}
              </div>

              <Card3D>
                <Button
                  size="lg"
                  className="luxury-button text-white px-10 py-4 rounded-full rose-gold-glow tilt-3d text-lg font-medium tracking-wide"
                >
                  <Sparkles className="w-6 h-6 mr-3" />
                  Collaborate with Elegance
                </Button>
              </Card3D>
            </Animated3DSection>

            <Animated3DSection animation="fade-left" delay={300}>
              <div className="relative">
                <div
                  className="relative w-96 h-96 mx-auto floating-3d parallax-element"
                  style={{
                    transform: `translateX(${mousePosition.x * -8}px) translateY(${mousePosition.y * -8}px)`,
                  }}
                >
                  <Image
                    src="/profile.png"
                    alt="NOORIVERSE"
                    fill
                    className="object-cover rounded-full border-4 border-rose-300 luxury-shadow"
                  />
                  <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-rose-200/30 via-pink-200/30 to-purple-200/30 blur-2xl" />

                  {/* Floating cosmetic elements around the image */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full luxury-shadow floating-3d opacity-80" />
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full luxury-shadow floating-3d opacity-70" />
                  <div className="absolute top-1/4 -left-10 w-8 h-8 bg-gradient-to-br from-amber-300 to-rose-300 rounded-full luxury-shadow floating-3d opacity-60" />
                </div>
              </div>
            </Animated3DSection>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-24 relative">
          <div
            className="absolute inset-0 blush-gradient-bg parallax-element"
            style={{
              transform: `translateY(${mousePosition.y * 25}px)`,
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Animated3DSection animation="fade-right" className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card3D key={i} className={i % 2 === 0 ? "mt-12" : i === 3 ? "-mt-12" : ""}>
                    <div className="relative overflow-hidden rounded-3xl luxury-shadow tilt-3d">
                      <Image
                        src={
                          i === 1
                            ? "/Aboutme1.png"
                            : i === 2
                              ? "/Aboutme2.png"
                              : i === 3
                                ? "/Aboutme3.png"
                                : "/Aboutme4.png"
                        }
                        alt={`Luxury beauty routine ${i}`}
                        width={280}
                        height={350}
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </Card3D>
                ))}
              </Animated3DSection>

              <Animated3DSection animation="fade-left" delay={400} className="space-y-8">
                <h2 className="text-5xl font-light text-gray-800">
                  About <span className="luxury-gradient-text italic font-medium">Me</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    I specialize in creating sophisticated, authentic content that captures the essence of beauty
                    brands. With over 3 years of experience in the premium beauty space, I understand the delicate
                    balance between authenticity and elegance.
                  </p>
                  <p>
                    My approach focuses on storytelling that resonates with discerning audiences who appreciate quality,
                    craftsmanship, and genuine experiences. Every piece of content is meticulously crafted to reflect
                    the premium nature of the brands I collaborate with.
                  </p>
                </div>
                <Card3D>
                  <Button className="luxury-button text-white rounded-full px-8 py-3 tilt-3d text-lg font-medium">
                    Discover My Story
                  </Button>
                </Card3D>
              </Animated3DSection>
            </div>
          </div>
        </section>

        {/* What is UGC Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-pink-100" />
          <div className="container mx-auto px-4 relative z-10">
            <Animated3DSection animation="fade-up" className="text-center mb-16">
              <h2 className="text-5xl font-light mb-12 luxury-gradient-text">What is UGC?</h2>
              <p className="text-xl max-w-5xl mx-auto leading-relaxed text-gray-700 font-light mb-16">
                User-Generated Content transcends traditional marketing by creating authentic, sophisticated
                narratives that showcase premium products in their natural elegance. It's about crafting content that
                speaks to the refined tastes of discerning consumers while maintaining genuine authenticity.
              </p>
            </Animated3DSection>

            {/* Statistics Cards */}
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Heart,
                  number: "8.5%",
                  label: "Average Engagement Rate",
                  color: "text-rose-500",
                },
                {
                  icon: Users,
                  number: "2.5M",
                  label: "Total Reach",
                  color: "text-orange-500",
                },
                {
                  icon: Star,
                  number: "50+",
                  label: "Brand Partnerships",
                  color: "text-amber-500",
                },
                {
                  icon: TrendingUp,
                  number: "12%",
                  label: "UGC Conversion Rate",
                  color: "text-pink-500",
                },
              ].map((stat, i) => (
                <Animated3DSection key={i} animation="scale-3d" delay={i * 100}>
                  <Card3D>
                    <Card className="text-center p-8 border-0 premium-card luxury-shadow tilt-3d h-full">
                      <CardContent className="space-y-4">
                        <div className={`w-16 h-16 mx-auto mb-4 ${stat.color}`}>
                          <stat.icon className="w-full h-full" />
                        </div>
                        <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                        <p className="text-gray-600 font-medium">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </Card3D>
                </Animated3DSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why UGC Section */}
        <section className="py-24 relative">
          <div
            className="absolute inset-0 rose-gold-gradient-bg parallax-element"
            style={{
              transform: `translateX(${mousePosition.x * -15}px) translateY(${mousePosition.y * 15}px)`,
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <Animated3DSection animation="fade-up" className="text-center mb-20">
              <h2 className="text-5xl font-light text-gray-800 mb-6">Why UGC?</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
                Premium consumers trust authentic experiences over traditional advertising, making UGC 3x more
                effective for high-end brands.
              </p>
            </Animated3DSection>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Users,
                  title: "Builds Premium Trust",
                  desc: "Sophisticated content that resonates with consumers and builds lasting brand credibility",
                },
                {
                  icon: TrendingUp,
                  title: "Elevates Engagement",
                  desc: "High-quality UGC generates superior engagement rates among premium target audiences",
                },
                {
                  icon: Heart,
                  title: "Authentic Luxury",
                  desc: "Genuine experiences that showcase products in their most elegant and natural context",
                },
              ].map((item, i) => (
                <Animated3DSection key={i} animation="scale-3d" delay={i * 150}>
                  <Card3D>
                    <Card className="text-center p-10 border-0 premium-card luxury-shadow tilt-3d h-full">
                      <CardContent className="space-y-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto luxury-shadow">
                          <item.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-medium text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </Card3D>
                </Animated3DSection>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 relative">
          <div
            className="absolute inset-0 cream-gradient-bg parallax-element"
            style={{
              transform: `translateY(${mousePosition.y * -25}px)`,
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Animated3DSection animation="fade-right">
                <Card3D>
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl overflow-hidden luxury-shadow mx-auto max-w-lg">
                    <video
                      src="/benefits_of_ugc.mp4"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </Card3D>
              </Animated3DSection>

              <Animated3DSection animation="fade-left" delay={300} className="space-y-10">
                <h2 className="text-5xl font-light luxury-gradient-text">Benefits of Mine</h2>

                <div className="space-y-8">
                  {[
                    {
                      title: "Sophisticated Storytelling",
                      desc: "Elegant narratives that showcase products within premium lifestyle contexts",
                    },
                    {
                      title: "Premium Conversion Rates",
                      desc: "I drives 200%+ higher conversion rates among high-value customers",
                    },
                    {
                      title: "Elevated Social Proof",
                      desc: "Builds aspirational credibility through refined peer recommendations",
                    },
                  ].map((benefit, i) => (
                    <Animated3DSection key={i} animation="fade-left" delay={i * 150}>
                      <div className="flex gap-6 items-start">
                        <Card3D>
                          <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 luxury-shadow">
                            <Check className="w-8 h-8 text-white" />
                          </div>
                        </Card3D>
                        <div>
                          <h3 className="text-2xl font-medium mb-3 text-gray-800">{benefit.title}</h3>
                          <p className="text-gray-600 text-lg leading-relaxed">{benefit.desc}</p>
                        </div>
                      </div>
                    </Animated3DSection>
                  ))}
                </div>
              </Animated3DSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 relative bg-white/60">
          <div className="container mx-auto px-4 relative z-10">
            <Animated3DSection animation="fade-up" className="text-center mb-20">
              <h2 className="text-5xl font-light luxury-gradient-text">Client Testimonials</h2>
            </Animated3DSection>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  company: "Lakmé",
                  role: "Brand Director",
                  initial: "LL",
                  review:
                    "Amelia's sophisticated approach perfectly captured our premium brand essence. Her content elevated our campaign to new heights of elegance.",
                },
                {
                  company: "Plum Goodness Premium",
                  role: "Creative Director",
                  initial: "PG",
                  review:
                    "Exceptional quality and attention to detail. Her luxury UGC campaigns consistently outperform traditional content by 300%.",
                },
                {
                  company: "Minimalist",
                  role: "Marketing Lead",
                  initial: "ML",
                  review:
                    "Her content embodies the perfect balance of authenticity and sophistication that our discerning customers appreciate.",
                },
              ].map((testimonial, i) => (
                <Animated3DSection key={i} animation="scale-3d" delay={i * 150}>
                  <Card3D>
                    <Card className="p-8 border-0 premium-card luxury-shadow tilt-3d h-full">
                      <CardContent className="space-y-6">
                        <div className="flex gap-2">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-6 h-6 fill-rose-400 text-rose-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.review}"</p>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center luxury-shadow">
                            <span className="font-medium text-white">{testimonial.initial}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-800 text-lg">{testimonial.company}</p>
                            <p className="text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Card3D>
                </Animated3DSection>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Work Section */}
        <section className="py-24 relative">
          <div
            className="absolute inset-0 blush-gradient-bg parallax-element"
            style={{
              transform: `translateX(${mousePosition.x * 12}px)`,
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <Animated3DSection animation="fade-up" className="text-center mb-20">
              <h2 className="text-5xl font-light text-gray-800 mb-6">
                Recent <span className="luxury-gradient-text italic font-medium">Work</span>
              </h2>
              <p className="text-xl text-gray-600 font-light">Latest content for beauty brands</p>
            </Animated3DSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[1, 2, 3, 4].map((i) => (
                <Animated3DSection key={i} animation="scale-3d" delay={i * 100}>
                  <Card3D>
                    <div className="relative group">
                      <div className="relative aspect-[9/16] bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl overflow-hidden luxury-shadow">
                        {i === 1 ? (
                          <video
                            ref={(el) => {
                              if (el) {
                                el.onended = () => {
                                  const nextVideo = document.querySelector('[data-video="2"]')
                                  if (nextVideo) nextVideo.play()
                                }
                              }
                            }}
                            data-video="1"
                            src="/benefits_of_ugc.mp4"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            autoPlay
                            muted
                            playsInline
                          />
                        ) : i === 2 ? (
                          <video
                            ref={(el) => {
                              if (el) {
                                el.onended = () => {
                                  const nextVideo = document.querySelector('[data-video="3"]')
                                  if (nextVideo) nextVideo.play()
                                }
                              }
                            }}
                            data-video="2"
                            src="/benefits_of_ugc.mp4"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            muted
                            playsInline
                          />
                        ) : i === 3 ? (
                          <video
                            ref={(el) => {
                              if (el) {
                                el.onended = () => {
                                  const nextVideo = document.querySelector('[data-video="4"]')
                                  if (nextVideo) nextVideo.play()
                                }
                              }
                            }}
                            data-video="3"
                            src="/benefits_of_ugc.mp4"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            muted
                            playsInline
                          />
                        ) : (
                          <video
                            ref={(el) => {
                              if (el) {
                                el.onended = () => {
                                  const firstVideo = document.querySelector('[data-video="1"]')
                                  if (firstVideo) {
                                    setTimeout(() => firstVideo.play(), 1000)
                                  }
                                }
                              }
                            }}
                            data-video="4"
                            src="/benefits_of_ugc.mp4"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            muted
                            playsInline
                          />
                        )}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <Button
                            size="icon"
                            className="luxury-glass hover:bg-rose-500 hover:text-white backdrop-blur-sm tilt-3d luxury-shadow w-16 h-16"
                            onClick={(e) => {
                              e.preventDefault()
                              const video = e.currentTarget.parentElement.previousElementSibling
                              if (video.paused) {
                                video.play()
                              } else {
                                video.pause()
                              }
                            }}
                          >
                            <Play className="w-8 h-8 text-rose-600" />
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <Badge variant="secondary" className="text-sm luxury-glass bg-rose-100 text-rose-800 px-4 py-2">
                          {i === 1
                            ? "Benefits"
                            : i === 2
                              ? "Premium Review"
                              : i === 3
                                ? "Elegant Tutorial"
                                : "Transformation"}
                        </Badge>
                        <div
                          className={`mt-3 h-1 bg-rose-200 rounded-full overflow-hidden ${i === 1 ? "opacity-100" : "opacity-0"}`}
                          id={`progress-${i}`}
                        >
                          <div
                            className="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full transition-all duration-300"
                            style={{ width: "0%" }}
                            id={`progress-bar-${i}`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </Card3D>
                </Animated3DSection>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Premium Photography",
                  desc: "Sophisticated flat lays and lifestyle imagery for products",
                },
                {
                  title: "Video Content",
                  desc: "Refined video content that captures the essence of premium beauty",
                },
              ].map((item, i) => (
                <Animated3DSection key={i} animation={i === 0 ? "fade-right" : "fade-left"} delay={200}>
                  <Card3D>
                    <Card className="overflow-hidden border-0 premium-card luxury-shadow tilt-3d">
                      <div className="relative h-80 overflow-hidden">
                        {i === 0 ? (
                          <Image
                            src="/Productphotography.jpg"
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                          />
                        ) : (
                          <video
                            src="/benefits_of_ugc.mp4"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        )}
                      </div>
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-medium mb-3 text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </Card3D>
                </Animated3DSection>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-24 relative bg-white/70">
          <div className="container mx-auto px-4 relative z-10">
            <Animated3DSection animation="fade-up" className="text-center mb-20">
              <h2 className="text-5xl font-light luxury-gradient-text mb-6">Packages</h2>
              <p className="text-xl text-gray-600 font-light">Curated packages for discerning beauty brands</p>
            </Animated3DSection>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {[
                { name: "Elegance", price: "₹5,000", desc: "Perfect for boutique campaigns", popular: false },
                { name: "Prestige", price: "₹10,000", desc: "Ideal for brands", popular: true },
                { name: "Haute Couture", price: "₹15,000", desc: "For premium campaigns", popular: false },
              ].map((pkg, i) => (
                <Animated3DSection key={i} animation="scale-3d" delay={i * 150}>
                  <Card3D>
                    <Card
                      className={`p-10 border-2 ${pkg.popular ? "border-rose-400 rose-gold-glow" : "border-rose-200"} premium-card luxury-shadow tilt-3d relative h-full`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-2 text-lg luxury-shadow">
                            Most Popular
                          </Badge>
                        </div>
                      )}
                      <CardContent className="space-y-8">
                        <div className="text-center">
                          <h3 className="text-3xl font-light mb-3 text-gray-800">{pkg.name}</h3>
                          <div className="text-4xl font-medium luxury-gradient-text mb-4">{pkg.price}</div>
                          <p className="text-gray-600 text-lg">{pkg.desc}</p>
                        </div>
                        <ul className="space-y-4">
                          {[
                            `${i === 0 ? "8" : i === 1 ? "20" : "40"} Premium UGC Videos`,
                            `${i === 0 ? "15" : i === 1 ? "35" : "70"} Photos`,
                            i === 0 ? "3 Revisions" : "Unlimited Revisions",
                            `${i === 0 ? "5" : i === 1 ? "3" : "2"}-day delivery`,
                            ...(i > 0 ? ["Premium Strategy Consultation"] : []),
                            ...(i === 2 ? ["Full Campaign Management", "Brand Partnership Guidance"] : []),
                          ].map((feature, j) => (
                            <li key={j} className="flex items-center gap-4">
                              <Check className="w-6 h-6 text-rose-500" />
                              <span className="text-gray-700 text-lg">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full luxury-button text-white py-4 tilt-3d text-lg font-medium">
                          Begin Collaboration
                        </Button>
                      </CardContent>
                    </Card>
                  </Card3D>
                </Animated3DSection>
              ))}
            </div>
          </div>
        </section>

        {/* How I Work Section */}
        <section className="py-24 relative">
          <div
            className="absolute inset-0 rose-gold-gradient-bg parallax-element"
            style={{
              transform: `translateY(${mousePosition.y * -20}px)`,
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Animated3DSection animation="fade-right" className="space-y-10">
                <h2 className="text-5xl font-light luxury-gradient-text">My Process</h2>

                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Brand Discovery & Strategy",
                      desc: "Deep dive into your brand essence, values, and target audience to craft the perfect narrative",
                    },
                    {
                      step: "2",
                      title: "Premium Content Creation",
                      desc: "Meticulous creation of sophisticated content that embodies your brand's positioning",
                    },
                    {
                      step: "3",
                      title: "Refinement & Perfection",
                      desc: "Collaborative refinement process ensuring every detail meets the highest standards of excellence",
                    },
                    {
                      step: "4",
                      title: "Elegant Delivery",
                      desc: "Premium content delivery with comprehensive support for your campaigns",
                    },
                  ].map((item, i) => (
                    <Animated3DSection key={i} animation="fade-right" delay={i * 150}>
                      <div className="flex gap-6 items-start">
                        <Card3D>
                          <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 text-white rounded-full flex items-center justify-center font-medium flex-shrink-0 luxury-shadow text-lg">
                            {item.step}
                          </div>
                        </Card3D>
                        <div>
                          <h3 className="text-2xl font-medium mb-3 text-gray-800">{item.title}</h3>
                          <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </Animated3DSection>
                  ))}
                </div>
              </Animated3DSection>

              <Animated3DSection animation="fade-left" delay={400}>
                <Card3D>
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl overflow-hidden luxury-shadow mx-auto max-w-lg">
                    <video
                      src="/benefits_of_ugc.mp4"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </Card3D>
              </Animated3DSection>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-24 relative bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <Animated3DSection animation="fade-up" className="mb-20">
              <h2 className="text-5xl font-bold text-orange-500 mb-4">Brands I've Worked With</h2>
            </Animated3DSection>

            {/* Brand Grid */}
            <div className="max-w-6xl mx-auto">
              {/* First Row */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
                {[
                  { name: "Garnier", logo: "/brand1.jpg" },
                  { name: "Cetaphil", logo: "/brand2.png" },
                  { name: "Dot & Key", logo: "/brand3.jpg" },
                  { name: "Innovist", logo: "/brand4.png" },
                  { name: "Lakmé", logo: "/brand5.png" },
                ].map((brand, i) => (
                  <Animated3DSection key={i} animation="scale-3d" delay={i * 100}>
                    <Card3D>
                      <div className="w-32 h-32 mx-auto bg-white rounded-full luxury-shadow tilt-3d flex items-center justify-center p-6 hover:scale-105 transition-transform duration-300">
                        <Image
                          src={brand.logo || "/placeholder.svg"}
                          alt={`${brand.name} Logo`}
                          width={80}
                          height={60}
                          className="object-contain max-w-full max-h-full brand-logo"
                        />
                      </div>
                    </Card3D>
                  </Animated3DSection>
                ))}
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {[
                  { name: "Bellavita", logo: "/brand6.png" },
                  { name: "Minimalist", logo: "/brand7.png" },
                  { name: "L'Oréal", logo: "/brand8.png" },
                  { name: "Plum", logo: "/brand9.png" },
                  { name: "The Derma Co", logo: "/brand10.png" },
                ].map((brand, i) => (
                  <Animated3DSection key={i} animation="scale-3d" delay={(i + 5) * 100}>
                    <Card3D>
                      <div className="w-32 h-32 mx-auto bg-white rounded-full luxury-shadow tilt-3d flex items-center justify-center p-6 hover:scale-105 transition-transform duration-300">
                        <Image
                          src={brand.logo || "/placeholder.svg"}
                          alt={`${brand.name} Logo`}
                          width={80}
                          height={60}
                          className="object-contain max-w-full max-h-full brand-logo"
                        />
                      </div>
                    </Card3D>
                  </Animated3DSection>
                ))}
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200/30 rounded-full blur-xl"></div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 relative bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <Animated3DSection animation="fade-up" className="text-center mb-16">
              <h2 className="text-5xl font-light luxury-gradient-text mb-8">Let's Collaborate</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Ready to create authentic, engaging content that drives real results for your beauty brand?
              </p>
            </Animated3DSection>

            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Contact Form */}
              <Animated3DSection animation="fade-right">
                <Card3D>
                  <Card className="p-8 premium-card luxury-shadow">
                    <CardContent className="space-y-6">
                      <h3 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h3>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="brandName" className="block text-sm font-medium text-gray-700 mb-2">
                              Brand Name
                            </label>
                            <input
                              type="text"
                              id="brandName"
                              name="brandName"
                              value={formData.brandName}
                              onChange={handleInputChange}
                              placeholder="Your brand name"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="yourName" className="block text-sm font-medium text-gray-700 mb-2">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="yourName"
                              name="yourName"
                              value={formData.yourName}
                              onChange={handleInputChange}
                              placeholder="Your full name"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                            Project Type
                          </label>
                          <div className="relative">
                            <select
                              id="projectType"
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent appearance-none bg-white"
                              required
                            >
                              {projectTypes.map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                            Project Details
                          </label>
                          <textarea
                            id="projectDetails"
                            name="projectDetails"
                            value={formData.projectDetails}
                            onChange={handleInputChange}
                            placeholder="Tell me about your project, timeline, and goals..."
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-4 rounded-lg text-lg font-medium transition-all duration-300"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </Card3D>
              </Animated3DSection>

              {/* Contact Info & Stats */}
              <Animated3DSection animation="fade-left" delay={200}>
                <div className="space-y-8">
                  {/* Contact Methods */}
                  <div className="grid gap-6">
                    <Card3D>
                      <Card className="p-6 premium-card luxury-shadow">
                        <CardContent className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <Mail className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Email</h4>
                            <p className="text-orange-500 font-medium">prabhnoor.kaur.business@gmail.com</p>
                            <p className="text-sm text-gray-600">For business inquiries and collaborations</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Card3D>

                    <Card3D>
                      <Card className="p-6 premium-card luxury-shadow">
                        <CardContent className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <Instagram className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Instagram</h4>
                            <p className="text-orange-500 font-medium">@nooriiverse</p>
                            <p className="text-sm text-gray-600">500K followers • Beauty & Lifestyle</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Card3D>

                    <Card3D>
                      <Card className="p-6 premium-card luxury-shadow">
                        <CardContent className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <Youtube className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">YouTube</h4>
                            <p className="text-orange-500 font-medium">Prabhnoor Kaur</p>
                            <p className="text-sm text-gray-600">150K subscribers • Weekly tutorials</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Card3D>

                    <Card3D>
                      <Card className="p-6 premium-card luxury-shadow">
                        <CardContent className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <TikTok className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Twitter</h4>
                            <p className="text-orange-500 font-medium">@prabhnoorr_kaur</p>
                            <p className="text-sm text-gray-600">1.2M followers • Viral beauty content</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Card3D>
                  </div>

                  {/* Why Work With Me */}
                  <Card3D>
                    <Card className="p-8 premium-card luxury-shadow bg-gradient-to-br from-orange-50 to-pink-50">
                      <CardContent>
                        <h4 className="text-2xl font-bold text-gray-800 mb-6">Why Work With Me?</h4>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Star className="w-5 h-5 text-orange-500" />
                            <span className="text-gray-700">8.5% average engagement rate</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-orange-500" />
                            <span className="text-gray-700">48-72 hour response time</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-orange-500" />
                            <span className="text-gray-700">Global audience reach</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Card3D>

                  {/* Brands I've Worked With - REMOVED */}
                </div>
              </Animated3DSection>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-12 text-center text-gray-500">
          <p className="text-sm">&copy; {new Date().getFullYear()} Sam Khera. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
