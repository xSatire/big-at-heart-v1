"use client";
import { updateUserSchema } from "@/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { updateUser } from "@/actions/user";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";

import React from "react";
import { useTransition, useState } from "react";

const UpdateProfile = ({
  id,
  name,
  email,
  password,
  phone,
  age,
  gender,
  occupation,
  expertise,
}: any) => {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const form = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      id: id,
      name: name,
      email: email,
      password: password,
      phone: phone,
      age: age,
      gender: gender,
      occupation: occupation,
      expertise: expertise,
    },
  });

  const onSubmit = (values: z.infer<typeof updateUserSchema>) => {
    console.log("submitted");
    setFormError("");
    setFormSuccess("");
    startTransition(() => {
      updateUser(values).then((res: any) => {
        setFormError(res?.error);
        setFormSuccess(res?.success);
      });
    });
  };

  return (
    <div>
      {true ? (
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 lg:space-y-0 grid grid-cols-1 lg:grid-cols-2 gap-x-5 lg:gap-y-8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name of event"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="@gmail.com"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="*****"
                        type="password"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="9876 5432"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="1600"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>gender</FormLabel>
                    <FormControl>
                      <Input placeholder="-" disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="occupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Occupation</FormLabel>
                    <FormControl>
                      <Input placeholder="-" disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expertise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Any expertise?</FormLabel>
                    <FormControl>
                      <Input placeholder="-" disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {(formSuccess || formError) && (
                <div className="lg: col-span-2">
                  <FormSuccess message={formSuccess} />
                  <FormError message={formError} />
                </div>
              )}

              <Button
                type="submit"
                className="w-full lg:col-span-2"
                disabled={isPending}
              >
                Update User
              </Button>
            </form>
          </Form>
        </div>
      ) : (
        <h1 className="font-bold text-red-400 text-2xl"> No such records </h1>
      )}
    </div>
  );
};

export default UpdateProfile;
