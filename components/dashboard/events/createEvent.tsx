"use client";

import { createEventSchema } from "@/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createEvent } from "@/actions/createEvent";
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
import { useRouter } from "next/navigation";

const CreateEvents = () => {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const router = useRouter();

  const form = useForm<z.infer<typeof createEventSchema>>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      name: "",
      date: "",
      location: "",
      startTime: "",
      endTime: "",
      description: "",
      organizerName: "",
      organizerContact: "",
    },
  });

  const onSubmit = (values: z.infer<typeof createEventSchema>) => {
    setFormError("");
    setFormSuccess("");
    startTransition(() => {
      createEvent(values).then((res: any) => {
        setFormError(res?.error);
        setFormSuccess(res?.success);
      });
      router.refresh();
    });
  };

  return (
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
              <FormLabel>Event Name</FormLabel>
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
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date </FormLabel>
              <FormControl>
                <Input
                  placeholder="eg. DD/MM/YYYY"
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
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input
                  placeholder="Jurong East ST45"
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
          name="startTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Time</FormLabel>
              <FormControl>
                <Input placeholder="0800" disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Time</FormLabel>
              <FormControl>
                <Input placeholder="1600" disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description -optional</FormLabel>
              <FormControl>
                <Input
                  placeholder="An event..."
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
          name="organizerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of organizer -optional</FormLabel>
              <FormControl>
                <Input
                  placeholder="Suzan Lee"
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
          name="organizerContact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organizer&apos;s Contact -optional</FormLabel>
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
          Create Event
        </Button>
      </form>
    </Form>
  );
};

export default CreateEvents;
