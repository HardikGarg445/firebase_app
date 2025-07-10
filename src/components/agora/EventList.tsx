import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Megaphone, Calendar, Clock } from 'lucide-react';
import { events } from '@/lib/mock-data';

export function EventList() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Upcoming Events</CardTitle>
        <CardDescription>Don't miss out on what's happening!</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className={cn(
              'flex items-start gap-4 rounded-lg border p-4 transition-all hover:shadow-lg',
              event.isHighlighted && 'border-accent/50 bg-accent/10 shadow-lg shadow-accent/10'
            )}
          >
            <div className={cn(
                "rounded-full p-3 mt-1",
                event.isHighlighted ? 'bg-accent/20' : 'bg-muted'
              )}>
              {event.isHighlighted ? (
                <Megaphone className="h-6 w-6 text-accent" />
              ) : (
                <Calendar className="h-6 w-6 text-muted-foreground" />
              )}
            </div>
            <div className="flex-1 space-y-1">
              <p className="font-semibold">{event.title}</p>
              <p className="text-sm text-muted-foreground">{event.description}</p>
              <div className="flex items-center pt-2 text-xs text-muted-foreground">
                <Clock className="mr-2 h-4 w-4" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
