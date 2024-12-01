// components/email-template.tsx
import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  success: boolean;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  success,
}) => (
  <div>
    <h1>{success ? 'Registration Successful!' : 'Registration Failed'}</h1>
    <p>
      {success
        ? `A user has successfully registered with the email: ${email}`
        : `A user failed to register with the email: ${email}`}
    </p>
  </div>
);