"use client";
import { updateEventSchema } from "@/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { updateEvent } from "@/actions/updateEvent";
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
import { Switch } from "@/components/ui/switch";

import React from "react";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";

const EditEvents = ({
  id,
  name,
  date,
  location,
  startTime,
  endTime,
  description,
  organizerName,
  organizerContact,
  completed,
}: any) => {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const router = useRouter();

  const form = useForm<z.infer<typeof updateEventSchema>>({
    resolver: zodResolver(updateEventSchema),
    defaultValues: {
      id: id,
      name: name,
      date: date,
      location: location,
      startTime: startTime,
      endTime: endTime,
      description: description,
      organizerName: organizerName,
      organizerContact: organizerContact,
      completed: completed,
    },
  });

  const onSubmit = (values: z.infer<typeof updateEventSchema>) => {
    setFormError("");
    setFormSuccess("");
    startTransition(() => {
      updateEvent(values).then((res: any) => {
        setFormError(res?.error);
        setFormSuccess(res?.success);
      });
      router.refresh();
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
                      <Input
                        placeholder="0800"
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
                name="endTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Time</FormLabel>
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
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description -optional</FormLabel>
                    <FormControl>
                      <Input placeholder="-" disabled={isPending} {...field} />
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
                      <Input placeholder="-" disabled={isPending} {...field} />
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
                    <FormLabel>Organizer's Contact -optional</FormLabel>
                    <FormControl>
                      <Input placeholder="-" disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem className="flex gap-x-5 items-center col-span-2 justify-end">
                    <FormLabel className="text-red-400 text-lg">
                      Mark event has complete
                    </FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
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
                Update Event
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

export default EditEvents;
