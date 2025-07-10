'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';
import { NewEventForm } from './NewEventForm';
import { useState } from 'react';

export function Header() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <h1 className="text-2xl font-bold font-headline text-foreground">Agora</h1>
      <div className="ml-auto">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Event
            </Button>
          </DialogTrigger>
          <NewEventForm setOpen={setDialogOpen} />
        </Dialog>
      </div>
    </header>
  );
}
