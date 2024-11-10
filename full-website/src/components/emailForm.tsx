// This is the input and button that will fetch and return a result from the api
//uses the api and returns right or not 
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import confettiFunc from "@/components/confetti"

// Updated schema to validate an email address
const formSchema = z.object({
  email: z.string().email("Invalid email address"), // Checks for valid email format
})

export function EmailForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

// Loading state for the spinner
const [isLoading, setIsLoading] = useState(false)

// Handler for form submission
async function onSubmit(values: z.infer<typeof formSchema>) {
  setIsLoading(true) // Show spinner
  try {
	// Send POST request with email
	const response = await fetch("/api/waitlist", {
	  method: "POST",
	  headers: { "Content-Type": "application/json" },
	  body: JSON.stringify({ email: values.email }),
	})

	// Check if response is successful
	if (response.ok) {
	//   onSuccess() // Trigger external action on success
		alert("Successfully stored")
	} else {
	  alert("Failed to submit email")
	}
  } catch  {
	alert("Error submitting email")
  } finally {
	setIsLoading(false) // Hide spinner
  }
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormDescription>
                Please enter a valid email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       <Button type="submit" disabled={isLoading}>
          {isLoading ? <Spinner /> : "Submit"} {/* Show spinner when loading */}
        </Button>
      </form>
    </Form>
  )
}

function Spinner() {
	return <div className="spinner-border animate-spin w-4 h-4 border-2 border-t-transparent rounded-full"></div>
  }