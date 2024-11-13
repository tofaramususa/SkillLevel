// This is the input and button that will fetch and return a result from the api
//uses the api and returns right or not 
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import confettiFunc from "@/components/confetti" // Uncomment if confetti animation is desired

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
})

export function EmailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false) // New state to toggle form display

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

	let working = false;

	setTimeout(async () => {
		try {
		  const response = await fetch("/api/waitlist", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: values.email }),
		  })
		  if (response.ok) {
			setSubmitted(true) // Set submitted state to true on success
			working = true;
		  } else {
			console.log("Failed to submit email")
		  }
		} catch {
		  console.log("Error submitting email")
		} finally {
		  setIsLoading(false) // Stop loading spinner after the fetch is done
		}
		fetch("/api/notify", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
			email: values.email,
			success: working ? true : false, // Ternary to set success based on response.ok
			}),
		}).catch((err) => console.error("Error sending notification:", err));
	  }, 0) // 2 seconds delay before making the fetch request
	  		// Non-blocking fetch call to /api/notify
  }

  useEffect(() => {
    if (submitted) {
      confettiFunc() // Trigger confetti animation when the form is successfully submitted
    }
  }, [submitted]) // Dependency on 'submitted' state

  // Conditional rendering based on `submitted` state
  return (
    <div>
      {submitted ? ( 
        <div className="text-center text-3-gradient space-y-4 animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
          <h2 className="text-xl font-semibold">You&apos;re In!</h2>
          <p className="text-sm">We will be in touch shortly.</p>
        </div>
      ) : (
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center justify-center space-y-8 flex-col">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="md:w-1/2 w-full">
              <FormControl>
                <Input className="bg-black w-full text-white" placeholder="Enter your email here"  {...field} />
              </FormControl>
              <FormMessage className="lg:text-sm" />
            </FormItem>
          )}
        />
       <Button className=" text-white bg-accent-gradient" type="submit" disabled={isLoading}>
          {isLoading ? <Spinner /> : "Join the waitlist"} {/* Show spinner when loading */}
        </Button>
      </form>
    </Form>
      )}
    </div>
  )
}

function Spinner() {
	return (
	  
<div role="status">
  <span className="spin-border">Submitting...</span>
</div>

	)
  }
  