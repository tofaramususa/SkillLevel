"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from 'zod';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          {...register('username')}
        />
        {errors.username && (
          // Safe to cast `errors.username` to `FieldError` and access `message`
          <div>{(errors.username as { message?: string }).message}</div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
