//Here we need to build the wailist page
//Also need to make sure we use nextjs
//Emails will be stored in dynamodb json database
import { Container } from "@/components/container"
import {EmailForm} from "@/components/emailForm"
import { HeroTitle, HeroSubtitle, Hero, HeroSmallerTitle } from "@/components/hero"
import { Particles } from "@/components/ui/particles"
import { Logo } from "@/components/ui/logo"

export default function Waitlist() {

	return (
		<div>
		<div className="bg-white pt-12">
		<Container className="pt-[6.4rem]">
			<Logo />
			<Particles 
					className="absolute inset-0"
					quantity={500}
					ease={80}
					color={"#000000"}
					refresh
					vx={0.10}
					vy={0.10}
					staticity={1000}
			/>
			{/* The will be a really cool background color, image or animation */}
			{/* There will be a logo at the top left corner */}
			{/* There is going to be a logo at the center  -- just saying skilllevel*/}
			{/* Then a header saying what we are building */}
			<Hero>
			<HeroTitle className="animate-fade-in font-semibold [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
			Break the cycle of mindless screen time and inspire your kids to learn.
			<span className="italic"> It starts here.</span>
					</HeroTitle>
					<HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
			Our platform offers engaging out-of-school activities, combining gamification
			and AI to <br className="hidden md:block" />provide personalized,
			transformative skill-building experiences. 
			</HeroSubtitle>
			</Hero>
		</Container>
		</div>
		<Container className="pt-[6.4rem]">
			<Hero className="max-w-[120rem] mx-auto">
					<HeroSmallerTitle className="text-white animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
					Be one of the first to access our platform
					</HeroSmallerTitle>
					<HeroSmallerTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
					Join the waitlist.
					</HeroSmallerTitle>
			<EmailForm />
					<Particles 
					className="absolute inset-0 z-0"
					quantity={500}
					ease={80}
					color={"#FFFFFF"}
					refresh
					vx={0.10}
					vy={0.10}
					staticity={1000}
					/>
			</Hero>
		</Container>
		</div>
	)
}
