'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { handleRefineBlurb } from '@/app/actions';
import { Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const eventFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  time: z.string().min(1, 'Time is required.'),
});

type EventFormValues = z.infer<typeof eventFormSchema>;

interface NewEventFormProps {
  setOpen: (open: boolean) => void;
}

export function NewEventForm({ setOpen }: NewEventFormProps) {
  const [isPending, startTransition] = useTransition();
  const [isAiLoading, setIsAiLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: '',
      description: '',
      time: '',
    },
  });

  const onSubmit = (data: EventFormValues) => {
    // In a real app, you would send this data to your backend.
    console.log('New event created:', data);
    toast({
      title: "Event Posted!",
      description: `"${data.title}" has been added to the event list.`,
    });
    setOpen(false);
    form.reset();
  };

  const onRefine = () => {
    const description = form.getValues('description');
    if (!description) {
      toast({
        variant: 'destructive',
        title: 'Uh oh!',
        description: 'Please enter a description before refining.',
      });
      return;
    }
    
    setIsAiLoading(true);
    startTransition(async () => {
      const result = await handleRefineBlurb(description);
      setIsAiLoading(false);
      if (result.error) {
        toast({
          variant: 'destructive',
          title: 'AI Refinement Failed',
          description: result.error,
        });
      } else {
        form.setValue('description', result.refinedBlurb, { shouldValidate: true });
        toast({
          title: 'Description Refined!',
          description: 'The event description has been updated with AI.',
        });
      }
    });
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="font-headline">Post a New Event</DialogTitle>
        <DialogDescription>
          Fill in the details for your new event. Use the AI tool to make your description more engaging.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Guest Lecture Series" {...field} />
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
                <div className="flex justify-between items-center">
                  <FormLabel>Description</FormLabel>
                  <Button type="button" variant="ghost" size="sm" onClick={onRefine} disabled={isAiLoading || isPending}>
                    {isAiLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-4 w-4 text-accent" />
                    )}
                    Refine with AI
                  </Button>
                </div>
                <FormControl>
                  <Textarea placeholder="Tell us more about the event..." className="resize-none" rows={4} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Tomorrow, 7:00 PM" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isPending || isAiLoading}>
              Post Event
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
