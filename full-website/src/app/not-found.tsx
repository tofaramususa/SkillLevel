// app/not-found.tsx
import { Container } from "@/components/container"
import { Hero, HeroSmallerTitle } from "@/components/hero"
import { Particles } from "@/components/ui/particles"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <Container className="pt-[6.4rem]">
        <Logo />
        <Particles
          className="absolute inset-0"
          quantity={500}
          ease={80}
          color={"#FFFFFF"}
          refresh
          vx={0.10}
          vy={0.10}
          staticity={1000}
        />
        <Hero className="relative z-10">
          <div className="flex items-center justify-center mb-8">
            <span className="text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 animate-fade-in [--animation-delay:200ms] opacity-0">
              404
            </span>
          </div>
          <HeroSmallerTitle className="text-3-gradient text-4xl animate-fade-in text-center font-semibold [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
            Oops! Looks like you&apos;ve ventured too far
            <span className="italic"> into space.</span>
          </HeroSmallerTitle>
          <div className="flex justify-center mt-8 animate-fade-in [--animation-delay:800ms] opacity-0">
            <Link href="/">
              <Button
                className="bg-white text-black hover:bg-gray-200 transition-colors"
                size="lg"
              >
                Return Home
              </Button>
            </Link>
          </div>
        </Hero>
      </Container>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  )
}