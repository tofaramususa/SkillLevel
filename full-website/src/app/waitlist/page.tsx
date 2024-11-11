//Here we need to build the wailist page
//Also need to make sure we use nextjs
//Emails will be stored in dynamodb json database
import { Container } from "@/components/container"
import {EmailForm} from "@/components/emailForm"
import { HeroTitle, HeroSubtitle, Hero, HeroSmallerTitle } from "@/components/hero"

export default function Waitlist() {

	return (
		<Container className="pt-[6.4rem]">
			{/* The will be a really cool background color, image or animation */}
			{/* There will be a logo at the top left corner */}
			{/* There is going to be a logo at the center  -- just saying skilllevel*/}
			{/* Then a header saying what we are building */}
			<Hero>
			<HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
					It's time to change what your children are consuming on screens. You can start here.
					</HeroTitle>
					<HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
					Our platform provides interactive lessons that teach children dances, 
					<br className="hidden md:block" /> fostering physical activity in a fun engaging and competitive way.
					</HeroSubtitle>

			</Hero>
			<Hero>
					<HeroSmallerTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
					Join our waitlist. Be the first to access our skill-building platform
					</HeroSmallerTitle>
			{/* Then there will be a card component */}
				{/* Inside the card there will be header 2 text saying join us  */}
				{/* The there will be a button at the bottom saying email address*/}
			<EmailForm />
			{/* There will be a partners Component */}
				{/* Then copyright information saying skill level*/}
		</Hero>
		</Container>
	)
}
