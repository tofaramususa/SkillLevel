//Here we need to build the wailist page
//Also need to make sure we use nextjs
//Emails will be stored in dynamodb json database
import {EmailForm} from "@/components/emailForm"

export default function Waitlist() {

	return (
		<>
			<EmailForm />
		</>
	)
}
